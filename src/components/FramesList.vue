<script setup lang="ts" generic="T extends { id: number; name: string }">
import { useSortable } from '@vueuse/integrations/useSortable'
import { ref, useTemplateRef } from 'vue'
import IconAdd from '../assets/icons/icon-add.svg'
import IconDrag from '../assets/icons/icon-drag.svg'
import InlineEdit from './InlineEdit.vue'

const props = defineProps<{
  sortable?: boolean
  draggable?: boolean
  rename?: boolean
  size?: 'medium' | 'small' | 'big'
}>()

const frames = defineModel<T[]>({ required: true })
const selectedFrameId = defineModel<T['id']>('selected')
const emit = defineEmits<{
  add: []
  duplicate: [frame: T]
  remove: [frame: T]
  rename: [frame: T, name: string]
  drag: [e: MouseEvent, frame: T]
  dragStart: [e: MouseEvent, frame: T]
  dragCancel: [frame: T]
  dragEnd: [e: MouseEvent, frame: T]
}>()

const el = useTemplateRef('el')
const isSorting = ref(false)
let draggingFrame: T | null = null

if (props.sortable) {
  useSortable(el, frames, {
    handle: '.sort-handle',
    onStart: () => (isSorting.value = true),
    onEnd: () => (isSorting.value = false),
  })
}

const dragStart = (e: MouseEvent, frame: T) => {
  if ((e.target as HTMLElement).closest('.drag-handle')) return
  emit('dragStart', e, frame)
  draggingFrame = frame
  window.addEventListener('mousemove', drag)
  window.addEventListener('mouseup', dragEnd)
}

const drag = (e: MouseEvent) => {
  if (!draggingFrame) return
  emit('drag', e, draggingFrame)
}

const dragCancel = () => {
  // @ts-ignore
  emit('dragCancel', draggingFrame)
  window.removeEventListener('mousemove', drag)
  window.removeEventListener('mouseup', dragEnd)
  draggingFrame = null
}

const dragEnd = (e: MouseEvent) => {
  // @ts-ignore
  emit('dragEnd', e, draggingFrame)
  window.removeEventListener('mousemove', drag)
  window.removeEventListener('mouseup', dragEnd)
  draggingFrame = null
}

let copiedFrame: T | null = null
const copy = (frame: T) => (copiedFrame = frame)
const paste = () => copiedFrame && emit('duplicate', copiedFrame)
</script>

<template>
  <section class="section">
    <header class="header">
      <h2>
        <slot name="heading">
          {{ frames.length }}
          {{ frames.length === 1 ? 'Frame' : 'Frames' }}
        </slot>
      </h2>
      <button class="add" @click="emit('add')" data-theme="dark">
        <IconAdd />
      </button>
    </header>
    <div
      class="frames"
      role="list"
      ref="el"
      tabindex="-1"
      :data-size="size ?? 'medium'"
      :data-sorting="isSorting"
      @keydown.ctrl.v.stop="paste"
    >
      <button
        v-for="frame in frames"
        class="frame"
        role="listitem"
        :key="frame.id"
        :aria-current="frame.id === selectedFrameId"
        @click="selectedFrameId = frame.id"
        @keydown.delete="!draggingFrame && emit('remove', frame)"
        @keydown.c.ctrl="copy(frame)"
        draggable="false"
        @mousedown="props.draggable && dragStart($event, frame)"
        @keydown.escape="draggingFrame && dragCancel()"
      >
        <slot name="preview" :frame></slot>
        <IconDrag v-if="sortable" class="sort-handle" />
        <header class="frame-name">
          <InlineEdit
            v-if="rename"
            v-model:model-value="frame.name"
            @update:model-value="emit('rename', frame, $event)"
          />
          <template v-else>{{ frame.name }}</template>
        </header>
      </button>
    </div>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
}

.header {
  padding-inline: var(--size-4);
  padding-bottom: var(--size-2);
  padding-top: var(--size-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.frames {
  &[data-size='small'] {
    --frame-size: 4rem;
  }

  &[data-size='medium'] {
    --frame-size: 6rem;
  }

  &[data-size='big'] {
    --frame-size: 9rem;
  }

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--frame-size), 1fr));
  grid-auto-rows: max-content;
  align-items: start;
  gap: var(--size-4);
  padding-inline: var(--size-4);
  padding-bottom: var(--size-4);
  flex: 1;
  overflow-y: auto;
}

.frame {
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2);
  overflow: hidden;
  cursor: pointer;
  background: inherit;
  color: inherit;
  padding: 0;
  display: flex;
  flex-direction: column;

  .frames[data-sorting='false']:not(:has(.frame:focus)) &[aria-current='true'] {
    border-color: var(--color-accent);
    background-color: var(--color-accent);
  }

  &:hover {
    border-color: var(--color-gray-3);
  }

  &:focus {
    border-color: var(--color-accent);
    background-color: var(--color-accent);
  }

  .sort-handle {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: var(--radius-1);
    box-sizing: content-box;
    margin: var(--size-1);
    padding: 0.1rem;
    background-color: var(--color-gray-1);
    cursor: grab;

    .frame:not(:hover) & {
      display: none;
    }

    .frames[data-sorting='true'] & {
      display: none;
    }
  }

  .frame-name {
    text-align: center;
  }
}

/* Preview slot */
:deep(canvas, img, svg, video) {
  width: 100%;
  height: auto;
  max-height: 10rem;
  object-fit: contain;
}
</style>

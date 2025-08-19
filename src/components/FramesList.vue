<script setup lang="ts" generic="T extends { id: number; name: string }">
import { useSortable } from '@vueuse/integrations/useSortable'
import { ref, toRaw, useTemplateRef } from 'vue'
import IconDrag from '~/assets/icons/icon-drag.svg'
import IconAdd from '~/assets/icons/icon-add.svg'
import InlineEdit from './InlineEdit.vue'

const props = defineProps<{ label?: string; sortable?: boolean }>()
const frames = defineModel<T[]>({ required: true })
const selectedFrameId = defineModel<T['id']>('selected')
const emit = defineEmits<{ add: []; duplicate: [frame: T]; remove: [frame: T] }>()

const el = useTemplateRef('el')
const isDragging = ref(false)

if (props.sortable) {
  useSortable(el, frames, {
    handle: '.drag-handle',
    onStart: () => (isDragging.value = true),
    onEnd: () => (isDragging.value = false),
  })
}

let copiedFrame: T | null = null
const copy = (frame: T) => (copiedFrame = frame)
const paste = () => copiedFrame && emit('duplicate', copiedFrame)
</script>

<template>
  <section class="section">
    <header class="header">
      <h2>
        {{ frames.length }}
        {{ frames.length === 1 ? 'Frame' : 'Frames' }}
      </h2>
      <button class="add" @click="emit('add')">
        <IconAdd />
      </button>
    </header>
    <div
      class="frames"
      role="list"
      ref="el"
      tabindex="-1"
      :data-dragging="isDragging"
      @keydown.ctrl.v.stop="paste"
    >
      <button
        v-for="frame in frames"
        class="frame"
        role="listitem"
        :key="frame.id"
        :aria-current="frame.id === selectedFrameId"
        @click="selectedFrameId = frame.id"
        @keydown.delete="emit('remove', frame)"
        @keydown.c.ctrl="copy(frame)"
      >
        <slot name="preview" :frame></slot>
        <IconDrag v-if="sortable" class="drag-handle" />
        <header class="frame-name">
          <InlineEdit v-model="frame.name" />
        </header>
      </button>
    </div>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  padding-inline: 1rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add {
  display: block;
  background: none;
  padding: 0;
  border-radius: 4px;

  &:hover {
    background: var(--color-grid);
  }
}

.frames {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  grid-auto-rows: max-content;
  align-items: start;
  gap: 1rem;
  padding-inline: 1rem;
  padding-bottom: 1rem;
  flex: 1;
  overflow-y: auto;
}

.frame {
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  background: inherit;
  color: inherit;
  padding: 0;

  &:hover {
    background-color: var(--color-border);
    &[aria-current='true'] {
      background-color: var(--color-accent);
    }
  }

  &:focus {
    background-color: var(--color-accent);
    border-color: var(--color-accent);
  }

  .frames[data-dragging='false']:not(:has(.frame:focus)) &[aria-current='true'] {
    border-color: var(--color-accent);
  }

  .drag-handle {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 4px;
    box-sizing: content-box;
    margin: 0.1rem;
    padding: 0.1rem;
    background-color: var(--color-grid);
    border: 1px solid var(--color-border);
    cursor: grab;

    .frame:not(:hover) & {
      display: none;
    }

    .frames[data-dragging='true'] & {
      display: none;
    }
  }

  .frame-name {
    text-align: center;
    margin-bottom: 0.25em;
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

<script setup lang="ts" generic="T extends { id: number; children?: T[] }">
import {
  attachInstruction,
  extractInstruction,
  type Instruction,
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/list-item'
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine'
import { draggable, dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
import { unrefElement } from '@vueuse/core'
import { computed, nextTick, ref, useTemplateRef, watchEffect } from 'vue'
import IconChevron from '~/assets/icons/icon-chevron.svg'

const props = defineProps<{ item: T }>()

const row = useTemplateRef('row')
const isDragging = ref(false)
const isDraggedOver = ref(false)
const isExpanded = ref(false)
const isInitialExpanded = ref(false)
const hasChildren = computed(() => !!props.item.children?.length)

const instruction = ref<Instruction | null>(null)

const operation = computed(() => instruction.value?.operation)

// TODO
const expand = () => {}
const collapse = () => {}

watchEffect((onCleanup) => {
  if (!row.value) return

  const domEl = unrefElement(row as any)

  const cleanup = combine(
    draggable({
      element: domEl,
      getInitialData: () => ({ id: props.item.id }),
      onDragStart: () => {
        isDragging.value = true
        // TODO
        isInitialExpanded.value = false
        collapse()
      },
      onDrop: () => {
        isDragging.value = false
        if (isInitialExpanded.value) expand()
      },
    }),

    dropTargetForElements({
      element: domEl,
      getData: ({ input, element }) =>
        attachInstruction(
          { id: props.item.id },
          {
            input,
            element,
            operations: {
              'reorder-before': 'available',
              'reorder-after': 'available',
              combine: props.item.children ? 'available' : 'not-available',
            },
          },
        ),
      canDrop: ({ source }) => source.data.id !== props.item.id,
      onDrag: ({ self }) => (instruction.value = extractInstruction(self.data)),
      onDragEnter: ({ source }) => {
        if (source.data.id === props.item.id) return
        isDraggedOver.value = true
        expand()
      },
      onDragLeave: () => {
        isDraggedOver.value = false
        instruction.value = null
      },
      onDrop: ({ location }) => {
        isDraggedOver.value = false
        instruction.value = null
        if (location.current.dropTargets[0].data.id === props.item.id) {
          nextTick(() => {
            expand()
          })
        }
      },
      getIsSticky: () => true,
    }),
  )

  onCleanup(cleanup)
})
</script>

<template>
  <li class="tree-item" :data-expanded="isExpanded" :data-children="hasChildren">
    <div class="row" ref="row">
      <div v-show="operation" class="drop-indicator" :data-operation="operation"></div>

      <button class="chevron" @click="isExpanded = !isExpanded">
        <IconChevron />
      </button>
      <slot name="item" :item="item"></slot>
    </div>

    <ul v-if="hasChildren && isExpanded" class="children">
      <DraggableTreeItem v-for="child of item.children" :item="child">
        <!-- @vue-ignore -->
        <template #item="{ item }">
          <slot name="item" :item="item"></slot>
        </template>
      </DraggableTreeItem>
    </ul>
  </li>
</template>

<style scoped>
.tree-item {
  display: flex;
  flex-direction: column;
  gap: var(--tree-gap);
}

.row {
  display: flex;
  gap: 0.5rem;
  position: relative;
}

.chevron {
  display: block;
  padding: 0;
  background: none;
  color: var(--color-text);

  .tree-item[data-expanded='true'] {
    rotate: 90deg;
  }

  .tree-item:not([data-children='true']) & {
    visibility: hidden;
    pointer-events: none;
  }
}

.drop-indicator {
  --stroke-width: 0.125rem;
  --color: var(--color-accent);

  position: absolute;
  width: 100%;
  will-change: transform;
  transform: translateZ(0);

  &[data-operation='reorder-before'] {
    height: var(--stroke-width);
    background-color: var(--color);
    top: calc(-0.5 * (var(--tree-gap) + var(--stroke-width)));
  }

  &[data-operation='reorder-after'] {
    height: var(--stroke-width);
    background-color: var(--color);
    bottom: calc(-0.5 * (var(--tree-gap) + var(--stroke-width)));
  }

  &[data-operation='combine'] {
    inset: 0;
    border: var(--stroke-width) solid var(--color);
  }
}

.children {
  display: flex;
  flex-direction: column;
  gap: var(--tree-gap);
  list-style: none;
  padding: 0;
  margin-inline: 1rem 0;
}
</style>

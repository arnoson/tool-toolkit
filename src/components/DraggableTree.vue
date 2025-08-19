<script setup lang="ts" generic="T extends { id: number; children?: T[] }">
import { extractInstruction } from '@atlaskit/pragmatic-drag-and-drop-hitbox/list-item'
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
import { computed, onWatcherCleanup, watchEffect } from 'vue'
import DraggableTreeItem from './DraggableTreeItem.vue'
import { findInTree, insertIntoTreeAfter, insertIntoTreeBefore, removeFromTree } from '~/utils/tree'

const props = defineProps<{ items: T[] }>()

const emit = defineEmits<{
  'reorder-before': [targetId: number, sourceId: number]
  'reorder-after': [targetId: number, sourceId: number]
  combine: [targetId: number, sourceId: number]
}>()

const reorderBefore = (targetId: number, sourceId: number) => {
  const source = removeFromTree(props.items, sourceId)
  if (source) insertIntoTreeBefore(props.items, targetId, source)
}

const reorderAfter = (targetId: number, sourceId: number) => {
  const source = removeFromTree(props.items, sourceId)
  if (source) insertIntoTreeAfter(props.items, targetId, source)
}

const combine = (targetId: number, sourceId: number) => {
  const target = findInTree(props.items, targetId)
  if (!target) return

  const source = removeFromTree(props.items, sourceId)
  if (!source) return

  target.children?.unshift(source)
}

watchEffect(() => {
  const cleanup = monitorForElements({
    onDrop(args) {
      const { location, source } = args
      if (!location.current.dropTargets.length) return

      const sourceId = Number(source.data.id)
      const [target] = location.current.dropTargets
      const targetId = Number(target.data.id)
      const { operation } = extractInstruction(target.data) ?? {}

      if (operation === 'reorder-before') reorderBefore(targetId, sourceId)
      else if (operation === 'reorder-after') reorderAfter(targetId, sourceId)
      else if (operation === 'combine') combine(targetId, sourceId)
    },
  })

  onWatcherCleanup(cleanup)
})
</script>

<template>
  <ul class="tree">
    <DraggableTreeItem v-for="item in items" :key="item.id" :item>
      <template #item="{ item }">
        <slot name="item" :item></slot>
      </template>
    </DraggableTreeItem>
  </ul>
</template>

<style scoped>
.tree {
  --tree-gap: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: var(--tree-gap);
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>

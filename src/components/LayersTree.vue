<script setup lang="ts" generic="T extends Layer<T>">
import { extractInstruction } from '@atlaskit/pragmatic-drag-and-drop-hitbox/list-item'
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
import { onWatcherCleanup, watchEffect, type Component } from 'vue'
import { findInTree, insertIntoTreeAfter, insertIntoTreeBefore, removeFromTree } from '~/utils/tree'
import DraggableTreeItem from './DraggableTreeItem.vue'
import LayersItem from './LayersItem.vue'
import type { Layer } from '~/types/layer'
import { useDraggableTree } from '~/composables/draggableTree'

const props = defineProps<{
  items: T[]
  selectedItems: Set<T>
  icons: Record<T['type'], Component | string>
}>()

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

useDraggableTree({ reorderBefore, reorderAfter, combine })
</script>

<template>
  <ul class="layers">
    <LayersItem v-for="item in items" :key="item.id" :item :items :selected-items :icons />
  </ul>
</template>

<style scoped>
.layers {
  --layers-gap: var(--size-2);
  display: flex;
  flex-direction: column;
  gap: var(--layers-gap);
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>

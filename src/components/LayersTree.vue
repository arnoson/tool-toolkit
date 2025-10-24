<script setup lang="ts" generic="T extends Layer<T>">
import { computed, type Component } from 'vue'
import { useDraggableTree } from '../composables/draggableTree'
import type { Layer } from '../types/layer'
import {
  findInTree,
  flattenTree,
  insertIntoTreeAfter,
  insertIntoTreeBefore,
  removeFromTree,
} from '../utils/tree'
import LayersItem from './LayersItem.vue'

const props = defineProps<{
  items: T[]
  selectedItems: Set<T>
  icons: Record<T['type'], Component | string>
}>()

const flatItems = computed(() => flattenTree(props.items))

const emit = defineEmits<{
  delete: [layer: T]
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
  <section class="layers">
    <header class="header">
      <h2>Layers</h2>
    </header>
    <ul class="items">
      <LayersItem
        v-for="item in items"
        :key="item.id"
        :item
        :items
        :flat-items
        :selected-items
        :icons
        @delete="emit('delete', $event)"
      />
    </ul>
  </section>
</template>

<style scoped>
.layers {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  padding: var(--size-4);
}

.items {
  --layers-gap: var(--size-2);
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--layers-gap);
  list-style: none;
  padding: var(--size-2);
  padding-top: 0;
  margin: 0;
  overflow-y: auto;
}
</style>

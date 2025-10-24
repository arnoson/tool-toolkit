<script setup lang="ts" generic="T extends Layer<T>">
import { computed, ref, useTemplateRef, type Component } from 'vue'
import IconChevron from '../assets/icons/icon-chevron.svg'
import IconInvisible from '../assets/icons/icon-invisible.svg'
import IconLocked from '../assets/icons/icon-locked.svg'
import IconUnlocked from '../assets/icons/icon-unlocked.svg'
import IconVisible from '../assets/icons/icon-visible.svg'
import { useDraggableTreeItem } from '../composables/draggableTree'
import type { Layer } from '../types/layer'
import { flattenTree } from '../utils/tree'
import InlineEdit from './InlineEdit.vue'

const props = defineProps<{
  item: T
  items: T[]
  flatItems: T[]
  selectedItems: Set<T>
  icons: Record<string, Component | string>
}>()
const emit = defineEmits<{ delete: [item: T] }>()
const row = useTemplateRef('row')

const hasChildren = computed(() => !!props.item.children?.length)
const isSelected = computed(() => props.selectedItems.has(props.item))
const isExpanded = ref(false)

const { isDragging, instruction } = useDraggableTreeItem(row, {
  item: computed(() => props.item),
  isExpanded,
})

const operation = computed(() => instruction.value?.operation)

const handleMouseDown = (item: T, e: MouseEvent) => {
  if (e.ctrlKey) {
    if (props.selectedItems.has(item)) props.selectedItems.delete(item)
    else props.selectedItems.add(item)
  } else if (e.shiftKey && props.selectedItems.size) {
    // Find range bounds from current selection.
    const currentIndex = props.flatItems.indexOf(item)
    const selectedIndexes = [...props.selectedItems].map((v) => props.flatItems.indexOf(v))
    const [fromIndex, toIndex] = [Math.min(...selectedIndexes), Math.max(...selectedIndexes)]

    // First add non-group items.
    const rangeStart = Math.min(currentIndex, fromIndex)
    const rangeEnd = Math.max(currentIndex, toIndex)
    for (let i = rangeStart; i <= rangeEnd; i++) {
      const item = props.flatItems[i]
      if (item && !item.children) props.selectedItems.add(item)
    }

    // Add clicked group's children if applicable.
    if (item.children) {
      item.children.forEach((child) => props.selectedItems.add(child))
    }

    // Replace fully selected group's children with their parent group.
    for (const item of props.flatItems) {
      if (item.children && item.children.every((child) => props.selectedItems.has(child))) {
        props.selectedItems.add(item)
        item.children.forEach((child) => props.selectedItems.delete(child))
      }
    }
  } else {
    props.selectedItems.clear()
    props.selectedItems.add(item)
  }
}
</script>

<template>
  <li class="layer" :data-selected="isSelected" :data-dragging="isDragging">
    <div
      class="row"
      ref="row"
      tabindex="0"
      role="button"
      @mousedown="handleMouseDown(item, $event)"
      @keyup.delete="emit('delete', item)"
    >
      <div v-show="operation" class="drop-indicator" :data-operation="operation"></div>

      <button
        class="chevron"
        @click="isExpanded = !isExpanded"
        :data-expanded="isExpanded"
        :data-visible="hasChildren"
      >
        <IconChevron />
      </button>

      <div class="label">
        <component :is="icons[item.type]" />
        <InlineEdit v-model="item.name" class="name" />
      </div>

      <div class="actions" :data-enabled="item.isLocked || item.isHidden">
        <button
          class="action"
          :data-value="item.isLocked"
          @click.prevent="item.isLocked = !item.isLocked"
        >
          <IconLocked v-if="item.isLocked" />
          <IconUnlocked v-else />
        </button>
        <button
          class="action"
          :data-value="item.isHidden"
          @click.prevent="item.isHidden = !item.isHidden"
        >
          <IconInvisible v-if="item.isHidden" />
          <IconVisible v-else />
        </button>
      </div>
    </div>

    <ul v-if="hasChildren && isExpanded" class="children">
      <!-- @vue-ignore -->
      <LayersItem
        v-for="child of item.children"
        :item="child"
        :items
        :flat-items
        :selected-items
        :icons
        @delete="emit('delete', child)"
      >
        <!-- @vue-ignore -->
        <template #icon="{ item }">
          <slot name="icon" :item></slot>
        </template>
      </LayersItem>
    </ul>
  </li>
</template>

<style scoped>
.layer {
  display: flex;
  flex-direction: column;
  gap: var(--layers-gap);
  border-radius: var(--radius-2);

  &[data-selected='true'] {
    background-color: var(--color-accent);
  }
}

.layer[data-selected='true'] + .layer[data-selected='true'] {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: var(--color-accent);
  position: relative;

  /* Visually close the gap between two adjacent selected layers. */
  &::before {
    content: '';
    position: absolute;
    height: var(--layers-gap);
    width: 100%;
    background: inherit;
    translate: 0 -100%;
  }
}

.layer[data-selected='true']:has(+ .layer[data-selected='true']) {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.row {
  display: flex;
  gap: var(--size-2);
  position: relative;
  padding-inline: var(--size-1) 0;
  height: var(--size-6);
  border-radius: var(--radius-2);

  &:hover {
    background-color: var(--color-gray-1);
  }

  .layer[data-selected='true'] &:hover {
    background-color: unset;
  }
}

.chevron {
  display: block;
  padding: 0;
  background: none;
  color: var(--color-text);

  &[data-expanded='true'] {
    rotate: 90deg;
  }

  &[data-visible='false'] {
    visibility: hidden;
    pointer-events: none;
  }
}

.label {
  flex: 1;
  text-align: left;
  background: none;
  color: var(--color-text);
  align-items: center;
  display: flex;
  gap: var(--size-2);
  padding-inline: 0 var(--size-1);
  overflow: hidden;

  .name {
    display: block;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.actions {
  display: flex;
  gap: var(--size-1);
  padding-right: var(--size-1);

  [data-dragging='true'] &,
  .row:has(input) &,
  .row:not(:hover):not(:focus-within) &[data-enabled='false'] {
    display: none;
  }
}

.action {
  display: flex;
  align-items: center;
  background: none;
  padding: 0;

  .row:not(:hover):not(:focus-within) &[data-value='false'] {
    visibility: hidden;
  }
}

.children {
  display: flex;
  flex-direction: column;
  gap: var(--layers-gap);
  list-style: none;
  padding: 0;
  margin-inline: var(--size-4) 0;
}

.drop-indicator {
  --stroke-width: 0.125rem;
  --color: var(--color-gray-3);

  position: absolute;
  width: 100%;
  will-change: transform;
  transform: translateZ(0);

  &[data-operation='reorder-before'] {
    height: var(--stroke-width);
    background-color: var(--color);
    top: calc(-0.5 * (var(--layers-gap) + var(--stroke-width)));
  }

  &[data-operation='reorder-after'] {
    height: var(--stroke-width);
    background-color: var(--color);
    bottom: calc(-0.5 * (var(--layers-gap) + var(--stroke-width)));
  }

  &[data-operation='combine'] {
    inset: 0;
    outline: var(--stroke-width) solid var(--color);
    border-radius: var(--radius-2);
  }
}
</style>

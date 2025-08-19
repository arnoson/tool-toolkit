<script setup lang="ts">
import { ref } from 'vue'
import CircleIcon from '~/assets/icons/icon-layer-circle.svg'
import DrawIcon from '~/assets/icons/icon-layer-draw.svg'
import GroupIcon from '~/assets/icons/icon-layer-group.svg'
import RectIcon from '~/assets/icons/icon-layer-rect.svg'
import LayersTree from './LayersTree.vue'
import Story from './Story.vue'

type Type = 'bitmap' | 'rect' | 'circle' | 'group'
type Item = {
  id: number
  name: string
  type: Type
  isHidden: boolean
  isLocked: boolean
  children?: Item[]
}

const items = ref<Item[]>([
  { id: 1, name: 'Layer 1', type: 'bitmap', isHidden: false, isLocked: false },
  { id: 2, name: 'Layer 2', type: 'rect', isHidden: false, isLocked: false },
  {
    id: 3,
    name: 'Layer 3',
    type: 'group',
    isHidden: false,
    isLocked: false,
    children: [
      { id: 4, name: 'Layer 4', type: 'bitmap', isHidden: false, isLocked: false },
      {
        id: 5,
        name: 'Layer 5',
        type: 'group',
        isHidden: false,
        isLocked: false,
        children: [{ id: 6, name: 'Layer 6', type: 'circle', isHidden: false, isLocked: false }],
      },
    ],
  },
])
</script>

<template>
  <Story style="margin: 1rem">
    <LayersTree :items>
      <template #icon="{ item }">
        <DrawIcon v-if="item.type === 'bitmap'" />
        <RectIcon v-else-if="item.type === 'rect'" />
        <CircleIcon v-else-if="item.type === 'circle'" />
        <GroupIcon v-else-if="item.type === 'group'" />
      </template>
    </LayersTree>
  </Story>
</template>

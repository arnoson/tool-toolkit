<script setup lang="ts">
import Story from './Story.vue'
import ToolBar from './ToolBar.vue'
import SelectIcon from '../assets/icons/icon-select.svg'
import TextIcon from '../assets/icons/icon-text.svg'
import DrawIcon from '../assets/icons/icon-draw.svg'
import { ref } from 'vue'

const selected = ref<keyof typeof tools>('select')
const tools = {
  select: { id: 'select', icon: SelectIcon },
  text: { id: 'text', icon: TextIcon },
  draw: { id: 'draw', icon: DrawIcon },
}
</script>

<template>
  <Story>
    {{ selected }}
    <ToolBar :tools :selected @select="selected = $event" />
  </Story>
</template>

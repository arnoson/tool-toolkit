<script setup lang="ts">
import Story from './Story.vue'
import ToolBar from './ToolBar.vue'
import SelectIcon from '~/assets/icons/icon-select.svg'
import TextIcon from '~/assets/icons/icon-text.svg'
import DrawIcon from '~/assets/icons/icon-draw.svg'
import { ref } from 'vue'

const toolId = ref('select')
</script>

<template>
  <Story>
    {{ toolId }}
    <ToolBar
      v-model="toolId"
      :tools="[
        { id: 'select', label: 'Select', icon: SelectIcon },
        { id: 'text', label: 'Text', icon: TextIcon },
        { id: 'draw', label: 'Draw', icon: DrawIcon },
      ]"
    />
  </Story>
</template>

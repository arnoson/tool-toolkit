<script setup lang="ts">
import { useTemplateRef, type Component } from 'vue'

type Tool = { id: string; label: string; icon: Component | string }

const props = defineProps<{ tools: Tool[] }>()
const model = defineModel<Tool['id']>({ required: true })
const buttons = useTemplateRef('buttons')

const selectPrev = () => {
  let index = props.tools.findIndex((v) => v.id === model.value)
  index = index === 0 ? props.tools.length - 1 : index - 1
  buttons.value?.[index]?.focus()
  model.value = props.tools[index].id
}

const selectNext = () => {
  let index = props.tools.findIndex((v) => v.id === model.value)
  index = index === props.tools.length - 1 ? 0 : index + 1
  buttons.value?.[index]?.focus()
  model.value = props.tools[index].id
}
</script>

<template>
  <div class="tool-bar" role="toolbar" aria-label="Tools">
    <button
      v-for="tool in tools"
      :title="tool.label"
      :tabindex="tool.id === model ? 0 : -1"
      :aria-pressed="tool.id === model"
      ref="buttons"
      @click="model = tool.id"
      @keydown.up="selectPrev"
      @keydown.down="selectNext"
    >
      <component :is="tool.icon" />
    </button>
  </div>
</template>

<style scoped>
.tool-bar {
  display: flex;
  position: absolute;
  top: var(--size-4);
  right: var(--size-4);
  flex-direction: column;
  gap: 3px;
  padding: 2px;
  background-color: var(--color-panel-background);
  border-radius: var(--radius-2);

  button {
    display: block;
    padding: 1px;

    &[aria-pressed='true'] {
      color: var(--color-accent);
      background-color: var(--color-white);
    }

    &:active {
      background-color: var(--color-white);
    }

    svg {
      display: block;
    }
  }
}
</style>

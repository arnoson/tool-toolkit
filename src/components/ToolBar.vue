<script
  setup
  lang="ts"
  generic="
    Tool extends { id: string; shortcut?: string; icon: Component | string },
    Tools extends Record<Tool['id'], Tool>
  "
>
import { computed, useTemplateRef, type Component } from 'vue'
import { upperFirst } from '../utils/text'

const props = defineProps<{
  tools: Tools
  selected: keyof Tools
}>()

const emit = defineEmits<{ select: [id: keyof Tools] }>()
const buttons = useTemplateRef('buttons')
const list = computed(() => Object.values(props.tools) as Tool[])

const selectPrev = () => {
  let index = list.value.findIndex((v) => v.id === props.selected)
  index = index === 0 ? list.value.length - 1 : index - 1
  buttons.value?.[index]?.focus()
  emit('select', list.value[index]!.id)
}

const selectNext = () => {
  let index = list.value.findIndex((v) => v.id === props.selected)
  index = index === list.value.length - 1 ? 0 : index + 1
  buttons.value?.[index]?.focus()
  emit('select', list.value[index]!.id)
}

const formatTitle = ({ id, shortcut }: Tool) => {
  if (shortcut) return `${upperFirst(id)} ${upperFirst(shortcut)}`
  else return upperFirst(id)
}
</script>

<template>
  <div class="tool-bar" role="toolbar" aria-label="Tools">
    <button
      v-for="tool in tools"
      :title="formatTitle(tool)"
      :tabindex="tool.id === props.selected ? 0 : -1"
      :aria-pressed="tool.id === props.selected"
      ref="buttons"
      @click="emit('select', tool.id)"
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
    background-color: inherit;
    color: var(--color-black);

    &:hover {
      background-color: var(--color-white);
    }

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

<script lang="ts" setup>
import { computed, ref } from 'vue'
import IconChevron from '../assets/icons/icon-chevron.svg'

const props = defineProps<{ actions: { value: string; label: string }[] }>()
const value = ref<string>(props.actions[0]!.value)
const emit = defineEmits<{ action: [string] }>()

const currentAction = computed(() =>
  props.actions.find((v) => v.value === value.value),
)
</script>

<template>
  <div class="split-button">
    <button @click="emit('action', value)">
      {{ currentAction?.label }}
    </button>
    <div class="select">
      <IconChevron class="chevron" />
      <select ref="saveSelect" v-model="value" @change="emit('action', value)">
        <option v-for="action in actions" :value="action.value">
          {{ action.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.split-button {
  display: flex;
  align-items: center;

  border-radius: var(--radius-1);
  background-color: var(--color-panel-background);
  color: var(--color-panel-text);
}

button {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-inline-end: 0.2em;
}

.select {
  position: relative;
  width: 2.5ch;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chevron {
  rotate: 90deg;
  position: absolute;
  pointer-events: none;
}

select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: transparent;
  min-width: 0;
  color: transparent;
  border-left: 1px solid var(--color-gray-3);

  .split-button:hover & {
    border-color: transparent;
  }

  &:hover {
    background-color: var(--color-white);
    cursor: pointer;
  }

  option {
    color: var(--color-panel-text);
  }
}
</style>

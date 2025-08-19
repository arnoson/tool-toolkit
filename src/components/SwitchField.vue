<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'reka-ui'
import { getInputId } from '~/utils/id'

defineProps<{ label: string }>()
const model = defineModel<boolean>({ required: true })
const id = getInputId()
</script>

<template>
  <div class="field">
    <label :for="id">{{ label }}</label>
    <SwitchRoot :id="id" v-model="model" class="switch-root">
      <SwitchThumb class="switch-thumb" />
    </SwitchRoot>
  </div>
</template>

<style scoped>
button {
  padding: 0;
}

.switch-root {
  width: 2lh;
  height: 1lh;
  border-radius: 9999px;
  position: relative;
  cursor: pointer;
  line-height: 1.4;
  background-color: var(--color-grid);

  &[data-state='checked'] {
    background-color: var(--color-accent);
  }
}

.switch-thumb {
  display: block;
  width: 1lh;
  height: 1lh;
  background-color: var(--color-panel-background);
  border-radius: 9999px;

  transition: transform 100ms;
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(1lh);
  }

  .switch-root:hover &,
  &[data-state='checked'] {
    background-color: var(--color-text);
  }
}
</style>

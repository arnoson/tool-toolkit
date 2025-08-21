<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'
import { getInputId } from '~/utils/id'
import CheckIcon from '~/assets/icons/icon-check.svg'

defineProps<{ label: string }>()
const model = defineModel<boolean>({ required: true })
const id = getInputId()
</script>

<template>
  <div class="field">
    <label :for="id">{{ label }}</label>
    <CheckboxRoot v-model="model" :id class="checkbox">
      <CheckboxIndicator class="indicator">
        <CheckIcon />
      </CheckboxIndicator>
    </CheckboxRoot>
  </div>
</template>

<style scoped>
.checkbox {
  background-color: var(--color-panel-background);
  width: 1rem;
  height: 1rem;
  padding: 0;

  &[data-state='checked'] {
    background-color: var(--color-accent);
  }
}

.indicator {
  color: var(--color-text);
}
</style>

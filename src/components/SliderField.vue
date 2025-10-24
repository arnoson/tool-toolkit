<script setup lang="ts">
import { getInputId } from '../utils/id'

defineProps<{ label: string; min?: number; max?: number; step?: number }>()
const model = defineModel<number>({ required: true })
const id = getInputId()
</script>

<template>
  <div class="field">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :value="model"
      @input="model = +($event.target as HTMLInputElement).value"
    />
  </div>
</template>

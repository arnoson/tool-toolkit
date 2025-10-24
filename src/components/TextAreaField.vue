<script setup lang="ts">
import { getInputId } from '../utils/id'

defineProps<{ label: string; disabled?: boolean }>()
const model = defineModel<string>({ required: true })
const id = getInputId()
</script>

<template>
  <div class="field">
    <label :for="id">{{ label }}</label>
    <textarea :id type="text" v-model="model" :disabled rows="5"></textarea>
  </div>
</template>

<script setup lang="ts">
import { getInputId } from '~/utils/id'

defineProps<{ label: string }>()
const model = defineModel<boolean>({ required: true })
const id = getInputId()
</script>

<template>
  <div class="field">
    <label :for="id">{{ label }}</label>
    <input :id="id" type="checkbox" v-model="model" />
  </div>
</template>

<style scoped>
.info {
  color: hsl(0 0% 50% / 1);
  padding-inline: var(--size-2);
  grid-column: span 2;
}
</style>

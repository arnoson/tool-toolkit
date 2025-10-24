<script setup lang="ts" generic="T extends string | number | symbol">
import { PopoverContent, PopoverRoot, PopoverTrigger } from 'reka-ui'
import { computed } from 'vue'
import { getInputId } from '../utils/id'

const props = defineProps<{
  swatches: { value: T; color: string; label: string }[]
  label: string
}>()
const model = defineModel<T>({ required: true })
const id = getInputId()
const swatch = computed(() => props.swatches.find((v) => v.value === model.value))
</script>

<template>
  <div class="field swatch-field">
    <label :for="id">{{ label }}</label>
    <PopoverRoot>
      <PopoverTrigger class="preview" :id="id">
        <div class="swatch" :style="{ backgroundColor: swatch?.color }"></div>
        <div class="label">{{ swatch?.label }}</div>
      </PopoverTrigger>
      <PopoverContent :align="'end'" :side-offset="5">
        <div class="swatches">
          <button
            v-for="swatch of swatches"
            @click="model = swatch.value"
            class="swatch"
            :title="swatch.label"
            :style="{ backgroundColor: swatch.color }"
          ></button>
        </div>
      </PopoverContent>
    </PopoverRoot>
  </div>
</template>

<style scoped>
.swatch-field {
  --swatch-size: var(--size-4);
}

.preview {
  --preview-height: 1lh;

  display: flex;
  gap: var(--size-1);
  align-items: center;
  overflow: hidden;
  padding-inline: calc((var(--preview-height) - var(--swatch-size)) / 2);

  .swatch {
    flex-shrink: 0;
    border: 1px solid hsl(0deg 0% 33%);
  }
}

.label {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.swatches {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: var(--size-1);
  background: var(--color-background);
  border-radius: var(--radius-2);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: var(--size-2);

  .swatch {
    border: 1px solid hsl(0deg 0% 25%);
  }
}

.swatch {
  width: var(--swatch-size);
  height: var(--swatch-size);
  border-radius: var(--radius-1);
  padding: 0;
}
</style>

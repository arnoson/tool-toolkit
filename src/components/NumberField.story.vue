<script setup lang="ts">
import NumberField from '~/components/NumberField.vue'
import Story from './Story.vue'
</script>

<template>
  <Story size="small">
    <NumberField label="Number" :model-value="10" />
  </Story>
</template>

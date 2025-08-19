<script setup lang="ts">
import { ref } from 'vue'
import SelectField from './SelectField.vue'
import Story from './Story.vue'
</script>

<template>
  <Story size="small">
    <SelectField
      label="Select"
      :model-value="1"
      :options="[
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 },
        { label: 'Three', value: 3 },
      ]"
    />
  </Story>
</template>

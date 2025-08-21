<script setup lang="ts">
import NumberField from './NumberField.vue'
import SelectField from './SelectField.vue'
import SizeField from './SizeField.vue'
import Story from './Story.vue'
import SwitchField from './SwitchField.vue'
import ColorField from './ColorField.vue'
import PointField from './PointField.vue'
import CheckboxField from './CheckboxField.vue'
import GapField from './GapField.vue'
import TextField from './TextField.vue'
</script>

<template>
  <Story size="small">
    <div class="form">
      <button>Button</button>
      <NumberField label="Number" :model-value="1" />
      <TextField label="Text" model-value="Hi" />
      <SelectField
        label="Select"
        :model-value="1"
        :options="[
          { label: 'One', value: 1 },
          { label: 'Two', value: 2 },
          { label: 'Three', value: 3 },
        ]"
      />
      <SizeField label="Size" :model-value="{ width: 100, height: 100 }" />
      <PointField label="Point" :model-value="{ x: 25, y: 30 }" />
      <GapField label="Gap" :horizontal="5" :vertical="10" />
      <SwitchField label="Switch" :model-value="false" />
      <CheckboxField label="Check" :model-value="false" />
      <ColorField
        label="Color"
        model-value="red"
        :swatches="[
          { value: 'red', label: 'Red', color: '#FF0000' },
          { value: 'green', label: 'Green', color: '#00FF00' },
          { value: 'blue', label: 'Blue', color: '#0000FF' },
        ]"
      />
    </div>
  </Story>
</template>

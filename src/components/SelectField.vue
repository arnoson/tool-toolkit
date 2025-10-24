<script setup lang="ts" generic="T">
import { getInputId } from '../utils/id'

type Option = { value: T; label: string }
type OptionGroup = { label: string; options: Option[] }

defineProps<{
  label: string
  options: (Option | OptionGroup)[]
  allowEmpty?: boolean
}>()
const model = defineModel<T>({ required: true })
const id = getInputId()
const isOptionsGroup = (v: any): v is OptionGroup => !!v.options
</script>

<template>
  <div class="field">
    <label :for="id">{{ label }}</label>
    <select :id="id" v-model="model">
      <option v-if="allowEmpty" value="">–</option>
      <template v-for="option of options">
        <optgroup v-if="isOptionsGroup(option)" :label="option.label">
          <option v-for="{ value, label } of option.options" :value>
            {{ label }}
          </option>
        </optgroup>
        <option v-else :value="option.value">{{ option.label }}</option>
      </template>
    </select>
  </div>
</template>

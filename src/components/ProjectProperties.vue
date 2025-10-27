<script setup lang="ts">
import { useSlots, useTemplateRef } from 'vue'
import IconSettings from '../assets/icons/icon-settings.svg'
import InlineEdit from './InlineEdit.vue'
import FileMenu from './FileMenu.vue'
import ModalDialog from './ModalDialog.vue'

defineProps<{
  fileType: FilePickerAcceptType
  hasUnsavedChanges: boolean
}>()

const nameModel = defineModel<string>('name', { required: true })

const emit = defineEmits<{
  open: [file: File | FileSystemFileHandle]
  save: []
  saveAs: []
  clear: []
}>()

const slots = useSlots()

const clearDialog = useTemplateRef('clearDialog')
const settingsDialog = useTemplateRef('settingsDialog')

const clear = async () => {
  const result = await clearDialog.value?.prompt()
  if (result !== 'submit') return
  emit('clear')
}
</script>

<template>
  <div class="panel">
    <FileMenu
      :file-type="fileType"
      @open="emit('open', $event)"
      @save="emit('save')"
      @save-as="emit('saveAs')"
      @clear="clear()"
    />
    <div class="name-settings">
      <h2><InlineEdit v-model="nameModel" /></h2>
      <div v-if="hasUnsavedChanges" class="unsaved"></div>
      <button
        v-if="slots.settings"
        @click="settingsDialog?.open()"
        data-theme="dark"
      >
        <IconSettings />
      </button>
    </div>
  </div>

  <ModalDialog ref="clearDialog" v-slot="{ close }" style="margin: auto">
    <form method="dialog" class="flow">
      <slot name="clear"><p>Are you sure?</p></slot>
      <menu>
        <button type="reset" @click="close">Cancel</button>
        <button type="submit" value="submit" data-theme="positive" autofocus>
          Clear
        </button>
      </menu>
    </form>
  </ModalDialog>

  <ModalDialog v-if="slots.settings" ref="settingsDialog">
    <div class="flow">
      <h2>Settings</h2>
      <slot name="settings"></slot>
    </div>
  </ModalDialog>
</template>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  gap: var(--size-4);
  padding: var(--size-4);
  padding-bottom: 0;
}

.name-settings {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    margin-left: auto;
  }

  .unsaved {
    width: 1.2ch;
    height: 1.2ch;
    background: white;
    display: block;
    border-radius: 100%;
  }
}
</style>

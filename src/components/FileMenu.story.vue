<script setup lang="ts">
import { ref } from 'vue'
import FileMenu from './FileMenu.vue'
import Story from './Story.vue'
import { downloadFile } from '../utils/file'
import TextField from './TextField.vue'

const fileType: FilePickerAcceptType = {
  accept: { 'text/plain': '.h' },
  description: 'C++ header file',
}

const fileContent = ref('')
const fileName = ref('')

const hasFileSystemApi = 'showOpenFilePicker' in window
let fileHandle: FileSystemFileHandle | null = null

const open = async (fileOrHandle: File | FileSystemFileHandle) => {
  const isFileHandle = fileOrHandle instanceof FileSystemFileHandle

  const file = isFileHandle ? await fileOrHandle.getFile() : fileOrHandle
  fileContent.value = await file.text()
  fileName.value = file.name

  if (isFileHandle) fileHandle = fileOrHandle
}

const save = async (saveAs = false) => {
  if (hasFileSystemApi) {
    // Force a file picker to be shown.
    if (saveAs) fileHandle = null

    fileHandle ??= await window.showSaveFilePicker({
      types: [fileType],
      suggestedName: fileName.value,
    })

    const writable = await fileHandle.createWritable()
    await writable.write(new TextEncoder().encode(fileContent.value))
    await writable.close()
  } else {
    downloadFile(fileName.value, fileContent.value)
  }
}
</script>

<template>
  <Story style="display: flex; flex-direction: column; gap: 1rem">
    <FileMenu :file-type @open="open" @save="save" @save-as="save(true)" />
    <TextField label="File Name" v-model="fileName" :disabled="!!fileHandle" />
    <textarea v-model="fileContent"></textarea>
  </Story>
</template>

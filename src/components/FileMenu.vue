<script setup lang="ts">
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine'
import {
  dropTargetForExternal,
  monitorForExternal,
} from '@atlaskit/pragmatic-drag-and-drop/external/adapter'
import { containsFiles } from '@atlaskit/pragmatic-drag-and-drop/external/file'
import { preventUnhandled } from '@atlaskit/pragmatic-drag-and-drop/prevent-unhandled'
import { computed, onWatcherCleanup, ref, useTemplateRef, watchEffect } from 'vue'

const emit = defineEmits<{
  open: [file: File | FileSystemFileHandle]
  clear: []
  save: []
}>()

const props = defineProps<{
  filePickerId?: number
  fileType: FilePickerAcceptType
}>()

const acceptAttribute = computed(() =>
  [
    ...Object.keys(props.fileType.accept ?? {}),
    ...Object.values(props.fileType.accept ?? {}).flat(),
  ].join(','),
)

const dropState = ref<'idle' | 'over' | 'potential'>('idle')
const dropZone = useTemplateRef('dropZone')
const fileInput = useTemplateRef('fileInput')
const hasFileSystemApi = 'showOpenFilePicker' in window

const open = async (e: Event) => {
  if (hasFileSystemApi) {
    e.preventDefault()
    e.stopPropagation()
    const [fileHandle] = await window.showOpenFilePicker({
      multiple: false,
      types: [props.fileType],
    })
    emit('open', fileHandle)
  } else {
    fileInput.value?.click()
  }
}

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (!input.files?.[0]) return

  emit('open', input.files[0])
  input.value = ''
}

watchEffect(() => {
  if (!dropZone.value) return

  const cleanup = combine(
    dropTargetForExternal({
      element: dropZone.value,
      canDrop: containsFiles,
      onDragEnter: () => {
        dropState.value = 'over'
      },
      onDragLeave: () => {
        dropState.value = 'potential'
      },
      onDrop: async ({ source }) => {
        const [item] = source.items
        if (!item) return

        if (hasFileSystemApi) {
          const fileHandle = await item.getAsFileSystemHandle()
          if (fileHandle) emit('open', fileHandle as FileSystemFileHandle)
        } else {
          const file = item.getAsFile()
          if (file) emit('open', file)
        }
      },
    }),

    monitorForExternal({
      canMonitor: containsFiles,
      onDragStart: () => {
        dropState.value = 'potential'
        preventUnhandled.start()
      },
      onDrop: () => {
        dropState.value = 'idle'
        preventUnhandled.stop()
      },
    }),
  )

  onWatcherCleanup(cleanup)
})
</script>

<template>
  <menu class="file-menu">
    <li ref="dropZone" class="drop-zone" tabindex="0" :data-drop-state="dropState">
      <input
        ref="fileInput"
        type="file"
        style="display: none"
        @change="handleFileChange"
        :accept="acceptAttribute"
      />
      <button @click="open">Open</button>
      <div class="drop-hint">or drop file</div>
    </li>
    <li>
      <button @click="emit('save')">Save</button>
    </li>
    <li>
      <button @click="emit('clear')">Clear</button>
    </li>
  </menu>
</template>

<style scoped>
.file-menu {
  display: grid;
  grid-template-columns: 1fr max-content max-content;
  align-items: baseline;
  list-style: none;
  padding: 0;
  gap: var(--size-3);
}

.drop-zone {
  display: flex;
  gap: 0.5rem;
  align-items: baseline;
  color: var(--color-gray-4);
  overflow: hidden;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;

  &[data-drop-state='over'] {
    color: var(--color-text);
    background-color: var(--color-accent);
    border-color: var(--color-accent);

    button {
      background-color: var(--color-text);
    }
  }

  &[data-drop-state='potential'] {
    border-color: var(--color-accent);
  }
}

.drop-hint {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

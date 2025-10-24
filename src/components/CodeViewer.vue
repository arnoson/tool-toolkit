<script setup lang="ts">
import Prism from 'prismjs'
import { computed, useSlots, useTemplateRef } from 'vue'
import IconSettings from '../assets/icons/icon-settings.svg'
import { downloadFile } from '../utils/file'
import ModalDialog from './ModalDialog.vue'

import '../assets/theme-github-copiltot.css'

Prism.manual = true

const props = defineProps<{
  code: string
  language: string
  fileName: string
}>()

const slots = useSlots()

const highlighted = computed(() =>
  Prism.highlight(props.code, Prism.languages[props.language]!, props.language),
)

const settingsDialog = useTemplateRef('settings')

const copy = async () => await navigator.clipboard.writeText(props.code)
</script>

<template>
  <div class="code-viewer">
    <div class="menu">
      <button style="margin-left: auto" @click="copy">Copy</button>
      <button @click="downloadFile(fileName, code)">Download</button>
      <button
        v-if="slots.settings"
        @click="settingsDialog?.open()"
        class="settings-trigger"
        data-theme="dark"
      >
        <IconSettings />
      </button>
    </div>

    <pre class="code language-cpp"><code v-html="highlighted"></code></pre>

    <ModalDialog v-if="slots.settings" ref="settings" class="settings">
      <slot name="settings"></slot>
    </ModalDialog>
  </div>
</template>

<style scoped>
.code-viewer {
  --menu-gap: var(--size-2);
  display: flex;
  flex-direction: column;
  gap: var(--size-2);
}

.code {
  padding: var(--size-2);
  max-height: max-content;
  overflow: auto;
  border-radius: var(--radius-2);
  background-color: var(--color-grid);
  /* Prsim sets different flex value which interferes with this layout. */
  flex: 1 !important;
  margin: 0;

  ::v-deep(.token) {
    background: none;
  }
}

.menu {
  display: flex;
  gap: var(--menu-gap);
}

.settings-trigger {
  anchor-name: --code-settings-dialog-trigger;
}

.settings {
  position: absolute;
  position-anchor: --code-settings-dialog-trigger;
  top: anchor(top);
  left: anchor(left);

  /* Position the settings dialog left to the button with a gap and a small pixel
  adjustment to prevent the other menu buttons from flashing. */
  translate: -100% 0;
  margin-inline: calc(var(--menu-gap) * -1 + 2px);
  margin-block: 0;
}
</style>

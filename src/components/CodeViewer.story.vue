<script setup lang="ts">
import { ref } from 'vue'
import CodeViewer from './CodeViewer.vue'
import Story from './Story.vue'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'

const code = ref('if (true) print("hello world!")')
</script>

<template>
  <Story style="padding: 2rem">
    <CodeViewer :code file-name="test.h" language="cpp">
      <template #settings> Settings! </template>
    </CodeViewer>
  </Story>
</template>

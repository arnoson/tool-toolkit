<script setup lang="ts">
import { ref } from 'vue'
import FramesList from './FramesList.vue'
import Story from './Story.vue'

type Frame = { id: number; name: string }

const frames = ref<Frame[]>([
  { id: 1, name: 'Frame 1' },
  { id: 2, name: 'Frame 2' },
  { id: 3, name: 'Frame 3' },
  { id: 4, name: 'Frame 4' },
  { id: 5, name: 'Frame 5' },
  { id: 6, name: 'Frame 6' },
])
let nextId = 7

const remove = (frame: Frame) => (frames.value = frames.value.filter((v) => v.id !== frame.id))

const duplicate = ({ id, name }: Frame) => {
  const index = frames.value.findIndex((v) => v.id === id)
  if (index === -1) return
  frames.value.splice(index + 1, 0, { name: `${name} Copy`, id: nextId++ })
}

const add = () => {
  const id = nextId++
  frames.value.push({ name: `Frame ${id}`, id })
}
</script>

<template>
  <Story>
    <FramesList
      v-model="frames"
      :sortable="true"
      @add="add"
      @remove="remove"
      @duplicate="duplicate"
    >
      <template #preview>
        <canvas width="100" height="80" style="background-color: green"></canvas>
      </template>
    </FramesList>
  </Story>
</template>

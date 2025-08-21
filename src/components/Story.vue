<script setup lang="ts">
withDefaults(defineProps<{ size?: 'small' | 'medium' | 'large' }>(), {
  size: 'medium',
})
</script>

<template>
  <div class="story" :data-size="size">
    <slot></slot>
  </div>
</template>

<style scoped>
.story {
  padding: 2rem;
}

.story[data-size='small'] {
  max-width: 20rem;
}

.story[data-size='medium'] {
  max-width: 40rem;
}

.story[data-size='large'] {
  max-width: 60rem;
}
</style>

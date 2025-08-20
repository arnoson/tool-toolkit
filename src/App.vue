<script setup lang="ts">
import { routes } from 'vue-router/auto-routes'
import './assets/main.css'
</script>

<template>
  <aside>
    <ul>
      <li v-for="story in routes">
        <RouterLink :to="story.path">{{ story.path.replace(/^\//, '') }}</RouterLink>
      </li>
    </ul>
  </aside>
  <main>
    <RouterView />
  </main>
</template>

<style>
#app {
  display: grid;
  grid-template-columns: 10rem 1fr;
  gap: var(--size-8);
}
</style>

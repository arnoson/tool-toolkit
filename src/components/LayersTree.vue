<script
  setup
  lang="ts"
  generic="
    T extends { id: number; name: string; isLocked: boolean; isHidden: boolean; children?: T[] }
  "
>
import IconInvisible from '~/assets/icons/icon-invisible.svg'
import IconLocked from '~/assets/icons/icon-locked.svg'
import IconUnlocked from '~/assets/icons/icon-unlocked.svg'
import IconVisible from '~/assets/icons/icon-visible.svg'
import DraggableTree from './DraggableTree.vue'
import InlineEdit from './InlineEdit.vue'

defineProps<{ items: T[] }>()
</script>

<template>
  <DraggableTree :items class="layers">
    <template #item="{ item }">
      <div class="layer">
        <button class="label">
          <slot name="icon" :item></slot>
          <InlineEdit v-model="item.name" />
        </button>
        <div class="actions" :data-enabled="item.isLocked || item.isHidden">
          <button
            class="action"
            :data-value="item.isLocked"
            @click.prevent="item.isLocked = !item.isLocked"
          >
            <IconLocked v-if="item.isLocked" />
            <IconUnlocked v-else />
          </button>
          <button
            class="action"
            :data-value="item.isHidden"
            @click.prevent="item.isHidden = !item.isHidden"
          >
            <IconInvisible v-if="item.isHidden" />
            <IconVisible v-else />
          </button>
        </div>
      </div>
    </template>
  </DraggableTree>
</template>

<style scoped>
.layer {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  overflow: hidden;
}

.label {
  flex: 1;
  text-align: left;
  background: none;
  color: var(--color-text);
  align-items: center;
  display: flex;
  gap: 0.5rem;
  padding-inline: 0.2rem;
  overflow: hidden;
}

.actions {
  display: flex;
  gap: 0.25rem;
  padding-right: 0.25rem;

  .layer:has(input) &,
  .layer:not(:hover) &[data-enabled='false'] {
    display: none;
  }
}

.action {
  display: flex;
  align-items: center;
  background: none;
  padding: 0;
}
</style>

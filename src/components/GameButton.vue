<template>
  <button class="game-button" @click="$emit('click')">
    Klik!
  </button>
</template>

<script setup lang="ts">
defineEmits<{ (e: 'click'): void }>()
</script>

<style scoped>
.game-button {
  cursor: pointer;
  padding: 16px 32px;
  font-size: 1.25rem;
}
</style>

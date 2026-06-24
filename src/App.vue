<template>
  <ClickerGame />
</template>

<script setup lang="ts">
import ClickerGame from './ClickerGame.vue'
</script>

<style>
:root {
  --color-bg:      #1a1a2e;
  --color-surface: #16213e;
  --color-accent:  #e94560;
  --color-text:    #eaeaea;
  --color-muted:   #8892b0;
}

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: 'Segoe UI', system-ui, sans-serif;
}
</style>

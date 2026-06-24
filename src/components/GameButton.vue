<template>
  <button
    class="game-button"
    :class="{ pressed: isPressed }"
    @mousedown="isPressed = true"
    @mouseup="isPressed = false"
    @mouseleave="isPressed = false"
    @click="emit('click')"
  >
    <div class="lid">
      <div class="camera"></div>
      <div class="screen">
        <span class="code-icon">&lt;/&gt;</span>
      </div>
    </div>
    <div class="hinge"></div>
    <div class="base">
      <div class="keyboard">
        <div class="key-row"></div>
        <div class="key-row"></div>
        <div class="key-row key-row--short"></div>
      </div>
      <div class="trackpad"></div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isPressed = ref(false)
const emit = defineEmits<{ (e: 'click'): void }>()
</script>

<style scoped>
.game-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.1s ease, filter 0.1s ease;
  margin-bottom: 32px;
}

.game-button.pressed {
  transform: scale(0.96) translateY(3px);
  filter: brightness(0.8);
}

.lid {
  width: 220px;
  background: var(--color-muted);
  border-radius: 8px 8px 0 0;
  padding: 6px 6px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.camera {
  width: 6px;
  height: 6px;
  background: var(--color-bg);
  border-radius: 50%;
  margin-bottom: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
}

.screen {
  width: 100%;
  height: 130px;
  background: var(--color-surface);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 24px rgba(233, 69, 96, 0.12);
}

.code-icon {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-accent);
  font-family: monospace;
  letter-spacing: -0.05em;
}

.hinge {
  width: 190px;
  height: 5px;
  background: #0a0a1a;
  border-radius: 0 0 2px 2px;
}

.base {
  width: 260px;
  height: 70px;
  background: var(--color-muted);
  opacity: 0.6;
  clip-path: polygon(6% 0%, 94% 0%, 100% 100%, 0% 100%);
  padding: 8px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.keyboard {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.key-row {
  height: 4px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 2px;
}

.key-row--short {
  width: 55%;
  align-self: flex-start;
}

.trackpad {
  width: 54px;
  height: 13px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>

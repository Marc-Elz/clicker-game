<template>
  <div class="upgrade-item" :class="{ disabled: !canAfford }">
    <div class="info">
      <span class="name">{{ upgrade.name }}</span>
      <span class="meta">{{ upgrade.count }}x · {{ upgrade.pointsPerSecond }}/s</span>
    </div>
    <button
      :disabled="!canAfford"
      class="buy-button"
      @click="$emit('buy', upgrade.id)"
    >
      {{ cost }} pts
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Upgrade } from '../types/gameTypes'

defineProps<{
  upgrade: Upgrade
  cost: number
  canAfford: boolean
}>()

defineEmits<{ (e: 'buy', id: string): void }>()
</script>

<style scoped>
.upgrade-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: var(--color-surface);
  border-radius: 6px;
  border: 1px solid rgba(136, 146, 176, 0.12);
  transition: opacity 0.2s, filter 0.2s;
}

.upgrade-item.disabled {
  opacity: 0.35;
  filter: grayscale(0.4);
}

.info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.name {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-text);
}

.meta {
  font-size: 0.78rem;
  color: var(--color-muted);
}

.buy-button {
  padding: 6px 14px;
  background: var(--color-accent);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.15s;
  white-space: nowrap;
}

.buy-button:not(:disabled):hover {
  filter: brightness(1.15);
}

.buy-button:disabled {
  cursor: not-allowed;
  background: var(--color-muted);
  opacity: 0.5;
}
</style>

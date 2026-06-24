<template>
  <div class="upgrade-item" :class="{ disabled: !canAfford }">
    <span class="name">{{ upgrade.name }}</span>
    <span class="meta">{{ upgrade.count }}x · {{ upgrade.pointsPerSecond }}/s</span>
    <button
      :disabled="!canAfford"
      class="buy-button"
      @click="$emit('buy', upgrade.id)"
    >
      {{ cost }} punten
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
  padding: 8px 0;
}

.upgrade-item.disabled {
  opacity: 0.4;
}

.name {
  font-weight: bold;
  min-width: 100px;
}

.meta {
  color: #888;
  font-size: 0.85rem;
}

.buy-button {
  padding: 4px 12px;
  cursor: pointer;
}

.buy-button:disabled {
  cursor: not-allowed;
}
</style>

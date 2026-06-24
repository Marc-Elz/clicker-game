<template>
  <div class="upgrade-shop">
    <h2 class="title">Upgrades</h2>
    <div class="list">
      <UpgradeItem
        v-for="upgrade in upgrades"
        :key="upgrade.id"
        :upgrade="upgrade"
        :cost="currentCosts.get(upgrade.id) ?? 0"
        :can-afford="points >= (currentCosts.get(upgrade.id) ?? Infinity)"
        @buy="$emit('buy', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Upgrade } from '../types/gameTypes'
import UpgradeItem from './UpgradeItem.vue'

defineProps<{
  upgrades: Upgrade[]
  currentCosts: Map<string, number>
  points: number
}>()

defineEmits<{ (e: 'buy', id: string): void }>()
</script>

<style scoped>
.upgrade-shop {
  width: 100%;
  max-width: 400px;
}

.title {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
  margin: 0 0 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(136, 146, 176, 0.15);
}

.list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>

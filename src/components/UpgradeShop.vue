<template>
  <div class="upgrade-shop">
    <h2 class="title">Upgrades</h2>
    <UpgradeItem
      v-for="upgrade in upgrades"
      :key="upgrade.id"
      :upgrade="upgrade"
      :cost="currentCosts.get(upgrade.id) ?? 0"
      :can-afford="points >= (currentCosts.get(upgrade.id) ?? Infinity)"
      @buy="$emit('buy', $event)"
    />
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
  font-size: 1.1rem;
  margin-bottom: 8px;
}
</style>

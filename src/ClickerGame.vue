<template>
  <div class="clicker-game">
    <ScoreDisplay
      :points="Math.floor(state.points)"
      :points-per-second="totalPointsPerSecond"
    />
    <GameButton @click="click" />
    <UpgradeShop
      :upgrades="state.upgrades"
      :current-costs="currentCosts"
      :points="Math.floor(state.points)"
      @buy="buyUpgrade"
    />
  </div>
</template>

<script setup lang="ts">
import { useGameState } from './composables/useGameState'
import ScoreDisplay from './components/ScoreDisplay.vue'
import GameButton from './components/GameButton.vue'
import UpgradeShop from './components/UpgradeShop.vue'

const { state, click, buyUpgrade, currentCosts, totalPointsPerSecond } = useGameState()
</script>

<style scoped>
.clicker-game {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 32px;
  box-sizing: border-box;
  background: var(--color-bg);
}
</style>

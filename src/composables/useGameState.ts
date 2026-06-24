import { reactive, computed, onMounted, onUnmounted } from 'vue'
import { createInitialState } from '../types/gameTypes'
import type { GameState, Upgrade } from '../types/gameTypes'

export function upgradeCost(upgrade: Upgrade): number {
  return Math.floor(upgrade.baseCost * upgrade.costMultiplier ** upgrade.count)
}

export function useGameState() {
  const state: GameState = reactive(createInitialState())

  function click() {
    state.points += state.pointsPerClick
    state.totalClicks++
  }

  const currentCosts = computed(() =>
    new Map(state.upgrades.map(u => [u.id, upgradeCost(u)]))
  )

  const totalPointsPerSecond = computed(() =>
    state.upgrades.reduce((sum, u) => sum + u.pointsPerSecond * u.count, 0)
  )

  function buyUpgrade(upgradeId: string) {
    const upgrade = state.upgrades.find(u => u.id === upgradeId)
    if (!upgrade) return

    const cost = upgradeCost(upgrade)
    if (state.points < cost) return

    state.points -= cost
    upgrade.count++
  }

  let intervalId: ReturnType<typeof setInterval> | null = null

  onMounted(() => {
    intervalId = setInterval(() => {
      state.points += totalPointsPerSecond.value
    }, 1000)
  })

  onUnmounted(() => {
    if (intervalId !== null) clearInterval(intervalId)
  })

  return { state, click, buyUpgrade, currentCosts, totalPointsPerSecond }
}

import { reactive, computed, watch, onMounted, onUnmounted } from 'vue'
import { createInitialState } from '../types/gameTypes'
import type { GameState, Upgrade } from '../types/gameTypes'

const STORAGE_KEY = 'clicker-game-state'

export function loadState(): GameState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw === null) return createInitialState()
    return JSON.parse(raw) as GameState
  } catch {
    return createInitialState()
  }
}

export function upgradeCost(upgrade: Upgrade): number {
  return Math.floor(upgrade.baseCost * upgrade.costMultiplier ** upgrade.count)
}

export function useGameState() {
  const state: GameState = reactive(loadState())

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

  function saveState() {
    try {
      state.lastSaved = Date.now()
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // storage not available — silently ignore
    }
  }

  watch(state, saveState, { deep: true })

  let intervalId: ReturnType<typeof setInterval> | null = null

  onMounted(() => {
    intervalId = setInterval(() => {
      state.points += totalPointsPerSecond.value
    }, 1000)
  })

  onUnmounted(() => {
    if (intervalId !== null) clearInterval(intervalId)
  })

  return { state, click, buyUpgrade, currentCosts, totalPointsPerSecond, saveState }
}

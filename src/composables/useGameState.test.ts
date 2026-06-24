import { upgradeCost, useGameState } from './useGameState'
import type { Upgrade } from '../types/gameTypes'

const baseUpgrade: Upgrade = {
  id: 'test',
  name: 'Test',
  baseCost: 10,
  costMultiplier: 1.15,
  count: 0,
  pointsPerSecond: 0.1,
}

describe('totalPointsPerSecond', () => {
  it('returns 0 when all counts are 0', () => {
    const { totalPointsPerSecond } = useGameState()
    expect(totalPointsPerSecond.value).toBe(0)
  })

  it('sums pointsPerSecond * count across all upgrades', () => {
    const { state, totalPointsPerSecond } = useGameState()
    state.upgrades[0].count = 3
    state.upgrades[1].count = 2

    const expected =
      state.upgrades[0].pointsPerSecond * 3 +
      state.upgrades[1].pointsPerSecond * 2

    expect(totalPointsPerSecond.value).toBe(expected)
  })
})

describe('buyUpgrade', () => {
  it('deducts cost and increments count when affordable', () => {
    const { state, buyUpgrade } = useGameState()
    state.points = 100
    const cost = upgradeCost(state.upgrades[0])

    buyUpgrade(state.upgrades[0].id)

    expect(state.points).toBe(100 - cost)
    expect(state.upgrades[0].count).toBe(1)
  })

  it('does nothing when points are insufficient', () => {
    const { state, buyUpgrade } = useGameState()
    state.points = 0

    buyUpgrade(state.upgrades[0].id)

    expect(state.points).toBe(0)
    expect(state.upgrades[0].count).toBe(0)
  })

  it('scales cost after each purchase', () => {
    const { state, buyUpgrade } = useGameState()
    state.points = 10000
    const id = state.upgrades[0].id

    buyUpgrade(id)
    const costAfterFirst = upgradeCost(state.upgrades[0])

    buyUpgrade(id)
    const costAfterSecond = upgradeCost(state.upgrades[0])

    expect(costAfterSecond).toBeGreaterThan(costAfterFirst)
  })
})

describe('upgradeCost', () => {
  it('returns baseCost when count is 0', () => {
    expect(upgradeCost({ ...baseUpgrade, count: 0 })).toBe(10)
  })

  it('applies costMultiplier once when count is 1', () => {
    expect(upgradeCost({ ...baseUpgrade, count: 1 })).toBe(Math.floor(10 * 1.15))
  })

  it('floors the result and returns no decimals', () => {
    const result = upgradeCost({ ...baseUpgrade, count: 10 })
    expect(result).toBe(Math.floor(result))
  })

  it('scales cost correctly at count 10', () => {
    expect(upgradeCost({ ...baseUpgrade, count: 10 })).toBe(Math.floor(10 * 1.15 ** 10))
  })
})

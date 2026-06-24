# Clicker Game — Session Context

## Goal
Browser clicker game: earn points by clicking, spend points on upgrades, unlock auto-clickers that generate points passively. Progress persists across sessions via localStorage.

## File Structure
```
src/types/gameTypes.ts        # Upgrade and GameState interfaces
src/composables/useGameState.ts  # all game logic, state, persistence
src/components/GameButton.vue    # emits 'click'
src/components/ScoreDisplay.vue  # props only, no logic
src/components/UpgradeShop.vue   # lists UpgradeItem, emits 'buy'
src/components/UpgradeItem.vue   # single row, emits 'buy'
src/ClickerGame.vue              # orchestrates all components
src/App.vue                      # root
```

## TypeScript Interfaces (gameTypes.ts)
- `Upgrade`: id, name, baseCost, costMultiplier (e.g. 1.15), count, pointsPerSecond
- `GameState`: points, totalClicks, pointsPerClick, upgrades: Upgrade[], lastSaved

## Tooling
- **Vitest** `globals: true` — geen imports nodig voor `describe`/`it`/`expect`/`vi` in testbestanden

## Vue 3 Best Practices
- All logic in `useGameState.ts`; only `ClickerGame.vue` imports it — passes props down, handles emits up
- `useGameState` is a **factory** (not a singleton) — each call returns a fresh state; safe for isolated unit tests
- Full `GameState` wrapped in one `reactive()` call — no granular refs; derived values (currentCost, totalPps) via `computed`
- Auto-clicker: `setInterval` in `onMounted`, `clearInterval` in `onUnmounted`
- `watch(state, save, { deep: true })` for auto-save to localStorage

## Game Mechanics & Key Rules
- Click adds `pointsPerClick` to score; upgrade only purchasable when `points >= currentCost`
- Buying deducts `currentCost`, increments `upgrade.count` — cost scales per upgrade independently
- Auto-clickers add `upgrade.pointsPerSecond * upgrade.count` to points every second via `setInterval`
- **Cost formula:** `Math.floor(baseCost * costMultiplier ** count)` — recalculate after every purchase
- **localStorage:** always `try/catch`; fall back to default state on parse error
- **Styling:** scoped CSS via `<style scoped>` blokken in componenten — geen globale `style.css`

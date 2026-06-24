# Clicker Game — Tasks

## Fase 1: Project Setup

✅ Initialiseer een Vite + Vue 3 + TypeScript project
✅ Configureer ESLint en Prettier
✅ Verwijder boilerplate (standaard App.vue inhoud, demo-componenten, style.css)
✅ Maak de mapstructuur aan (`src/types/`, `src/composables/`, `src/components/`)
✅ Configureer Vitest als test runner

## Fase 2: Types & Datamodel

✅ Definieer de `Upgrade` interface in `gameTypes.ts`
✅ Definieer de `GameState` interface in `gameTypes.ts`
✅ Definieer de initiële game state (startwaarden voor punten, clicks, upgrades)

## Fase 3: Game Logic (useGameState)

✅ Maak `useGameState.ts` aan en exporteer de reactive state
✅ Implementeer de `click`-actie (voegt `pointsPerClick` toe aan `points`)
✅ Implementeer de kostformule per upgrade (`baseCost * costMultiplier ** count`)
✅ Schrijf unit tests voor de kostformule
✅ Implementeer de `buyUpgrade`-actie (trek kosten af, verhoog `count`)
✅ Implementeer de beveiliging: upgrade alleen koopbaar als `points >= currentCost`
✅ Schrijf unit tests voor de `buyUpgrade`-logica (aftrekken, count verhogen, betaalbaarheidscheck)
✅ Implementeer `computed` voor `currentCost` per upgrade
✅ Implementeer `computed` voor totale `pointsPerSecond` (som van alle upgrades)
✅ Schrijf een unit test die verifieert dat `pointsPerSecond` correct wordt berekend
✅ Implementeer de auto-clicker via `setInterval` (elke seconde punten toevoegen)
✅ Implementeer opruimen van de interval in `onUnmounted`

## Fase 4: Persistentie

✅ Implementeer opslaan van `GameState` naar localStorage (met `try/catch`)
✅ Implementeer laden van `GameState` uit localStorage bij opstart (met fallback)
✅ Implementeer auto-save via `watch` op de volledige state (`deep: true`)
✅ Sla `lastSaved` timestamp op bij elke save
✅ Schrijf unit tests voor de localStorage-fallback bij een parse-fout

## Fase 5: Componenten

✅ Bouw `ScoreDisplay.vue` (toont punten en pps via props, geen eigen logica)
✅ Bouw `GameButton.vue` (knop die een `click`-event emit)
✅ Bouw `UpgradeItem.vue` (toont één upgrade-rij, emit `buy`, disabled als niet betaalbaar)
✅ Bouw `UpgradeShop.vue` (lijst van `UpgradeItem`s, geeft `buy`-events door omhoog)
✅ Bouw `ClickerGame.vue` (orchestreert alle componenten, importeert `useGameState`)
✅ Koppel `App.vue` aan `ClickerGame.vue`

## Fase 6: Styling

✅ Voeg scoped CSS toe aan `ClickerGame.vue` (gecentreerd, achtergrondkleur)
✅ Voeg scoped CSS toe aan `ScoreDisplay.vue` (groot, leesbaar puntentelling)
✅ Voeg scoped CSS toe aan `GameButton.vue` (grote klikknop in de vorm van een laptop met active-state via ref)
✅ Voeg scoped CSS toe aan `UpgradeItem.vue` (rij-layout met naam, kosten en koopknop)
✅ Voeg animatie-CSS toe aan `GameButton.vue` (visuele feedback bij klik)
✅ Voeg disabled-stijl toe aan `UpgradeItem.vue` (gedimd als niet betaalbaar)

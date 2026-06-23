export interface Upgrade {
  id: string;
  name: string;
  baseCost: number;
  costMultiplier: number;
  count: number;
  pointsPerSecond: number;
}

export interface GameState {
  points: number;
  totalClicks: number;
  pointsPerClick: number;
  upgrades: Upgrade[];
  lastSaved: number;
}

export function createInitialState(): GameState {
  return {
    points: 0,
    totalClicks: 0,
    pointsPerClick: 1,
    lastSaved: 0,
    upgrades: [
      { id: 'cursor', name: 'Cursor', baseCost: 10, costMultiplier: 1.15, count: 0, pointsPerSecond: 0.1 },
      { id: 'script', name: 'Script', baseCost: 100, costMultiplier: 1.15, count: 0, pointsPerSecond: 0.5 },
      { id: 'bot', name: 'Bot', baseCost: 500, costMultiplier: 1.15, count: 0, pointsPerSecond: 2 },
      { id: 'server', name: 'Server', baseCost: 2000, costMultiplier: 1.15, count: 0, pointsPerSecond: 7 },
      { id: 'datacenter', name: 'Datacenter', baseCost: 10000, costMultiplier: 1.15, count: 0, pointsPerSecond: 25 },
    ],
  };
}

<template>
  <div class="score-display">
    <p class="points">{{ points }} punten</p>
    <p class="pps">{{ pointsPerSecond.toFixed(1) }} per seconde</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  points: number
  pointsPerSecond: number
}>()
</script>

<style scoped>
.score-display {
  text-align: center;
  margin-bottom: 32px;
}

.points {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 6px;
  color: var(--color-text);
  letter-spacing: -1px;
  line-height: 1;
}

.pps {
  font-size: 1rem;
  color: var(--color-muted);
  margin: 0;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
</style>

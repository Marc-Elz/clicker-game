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
  margin-bottom: 16px;
}

.points {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 0 4px;
}

.pps {
  font-size: 1rem;
  color: #888;
  margin: 0;
}
</style>

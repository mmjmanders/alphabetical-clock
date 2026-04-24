<script setup lang="ts">
import ClockStaticContent from '@/components/ClockStaticContent.vue'

// const { time } = useClock()
</script>

<template>
  <div class="main-content">
    <div class="clock-container">
      <svg viewBox="-1000 -1000 2000 2000" preserveAspectRatio="xMidYMid meet">
        <ClockStaticContent :radius="950" />
      </svg>
    </div>
  </div>
</template>

<style scoped></style>

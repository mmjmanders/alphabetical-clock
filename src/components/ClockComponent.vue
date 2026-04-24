<script setup lang="ts">
import ClockStaticContent from '@/components/ClockStaticContent.vue'
import { useClock } from '@/composables'
import { computed } from 'vue'
import SecondHand from '@/components/SecondHand.vue'

const { time } = useClock()
// const hours = computed(() => time.value.getHours() % 12 || 12)
// const minutes = computed(() => time.value.getMinutes())
const seconds = computed(() => time.value.getSeconds())
</script>

<template>
  <div class="main-content">
    <div class="clock-container">
      <svg viewBox="-1000 -1000 2000 2000" preserveAspectRatio="xMidYMid meet">
        <ClockStaticContent :radius="950" />
        <SecondHand :length="875" :seconds="seconds" />
      </svg>
    </div>
  </div>
</template>

<style scoped></style>

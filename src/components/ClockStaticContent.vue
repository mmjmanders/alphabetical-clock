<script setup lang="ts">
import { type Language, useWords } from '@/composables'
import { computed } from 'vue'

const props = defineProps<{
  radius: number
  language: Language
}>()
const textRadius = props.radius * 0.8

const { hours } = useWords()

const positions = computed(() =>
  hours[props.language].map((hour, i, arr) => {
    const angle = (i / arr.length) * (2 * Math.PI) - (2 * Math.PI) / 4
    const x = textRadius * Math.cos(angle)
    const y = textRadius * Math.sin(angle)
    return { x, y, hour }
  }),
)
</script>

<template>
  <g class="clock-static-content">
    <circle :r="radius" stroke-width="5" class="outer-circle" />
    <path
      class="hour-tick"
      v-for="hour in 12"
      :key="hour"
      :d="`M ${radius * 0.9} 0 L ${radius * 0.99} 0`"
      stroke-width="8"
      :transform="`rotate(${(360 / 12) * hour})`"
    />
    <path
      class="minute-tick"
      v-for="minute in 60"
      :key="minute"
      :d="`M ${radius * 0.95} 0 L ${radius * 0.99} 0`"
      stroke-width="5"
      :transform="`rotate(${(360 / 60) * minute})`"
    />
    <text
      class="hour-text"
      v-for="{ x, y, hour } in positions"
      :key="hour"
      :x="x"
      :y="y"
      text-anchor="middle"
      dominant-baseline="middle"
      >{{ hour }}</text
    >
  </g>
</template>

<style scoped></style>

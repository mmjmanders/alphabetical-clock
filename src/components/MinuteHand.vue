<script setup lang="ts">
import { useWords } from '@/composables'
import { computed } from 'vue'
import { toWords } from 'to-words/en-US'

const props = defineProps<{
  length: number
  minutes: number
}>()

const { minutes: minuteWords } = useWords()
const rotation = computed(() => (360 / 60) * minuteWords.indexOf(toWords(props.minutes)) - 90)
</script>

<template>
  <g class="clock-minute-hand" :style="{ transform: `rotate(${rotation}deg)` }">
    <path stroke-width="40" stroke-linejoin="round" :d="`M 0 0 L ${length} 0 Z`" />
  </g>
</template>

<style scoped></style>

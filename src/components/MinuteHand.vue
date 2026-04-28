<script setup lang="ts">
import { type Language, useWords } from '@/composables'
import { computed } from 'vue'

const props = defineProps<{
  length: number
  minutes: number
  language: Language
}>()

const words = computed(() => useWords(props.language))
const rotation = computed(
  () => (360 / 60) * words.value.minutes.indexOf(words.value.toWords(props.minutes)) - 90,
)
</script>

<template>
  <g class="clock-minute-hand" :style="{ transform: `rotate(${rotation}deg)` }">
    <path stroke-width="40" stroke-linejoin="round" :d="`M 0 0 L ${length} 0 Z`" />
  </g>
</template>

<style scoped></style>

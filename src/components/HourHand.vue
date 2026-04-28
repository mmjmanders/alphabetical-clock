<script setup lang="ts">
import { type Language, useWords } from '@/composables'
import { computed } from 'vue'

const props = defineProps<{
  length: number
  hours: number
  language: Language
}>()

const words = computed(() => useWords(props.language))
const rotation = computed(
  () => (360 / 12) * words.value.hours.indexOf(words.value.toWords(props.hours)) - 90,
)
</script>

<template>
  <g class="clock-hour-hand" :style="{ transform: `rotate(${rotation}deg)` }">
    <path stroke-width="40" stroke-linejoin="round" :d="`M 0 0 L ${length} 0 Z`" />
  </g>
</template>

<style scoped></style>

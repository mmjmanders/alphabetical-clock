<script setup lang="ts">
import { type Language, useWords } from '@/composables'
import { computed } from 'vue'

const props = defineProps<{
  length: number
  seconds: number
  language: Language
}>()

const words = computed(() => useWords(props.language))
const rotation = computed(
  () => (360 / 60) * words.value.seconds.indexOf(words.value.toWords(props.seconds)) - 90,
)
</script>

<template>
  <g class="clock-second-hand" :style="{ transform: `rotate(${rotation}deg)` }">
    <path stroke-width="10" :d="`M -45 -10 L ${length} 0 L -45 10 Z`" />
    <circle :cx="`${length - 60}`" cy="0" r="25" />
  </g>
</template>

<style scoped></style>

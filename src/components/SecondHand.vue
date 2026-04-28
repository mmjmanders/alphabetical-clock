<script setup lang="ts">
import { type Language, useWords } from '@/composables'
import { toWords } from 'to-words/en-US'
import { computed } from 'vue'

const props = defineProps<{
  length: number
  seconds: number
  language: Language
}>()

const { seconds: secondWords } = useWords()
const rotation = computed(() => (360 / 60) * secondWords.indexOf(toWords(props.seconds)) - 90)
</script>

<template>
  <g class="clock-second-hand" :style="{ transform: `rotate(${rotation}deg)` }">
    <path stroke-width="10" :d="`M -45 -10 L ${length} 0 L -45 10 Z`" />
    <circle :cx="`${length - 60}`" cy="0" r="25" />
  </g>
</template>

<style scoped></style>

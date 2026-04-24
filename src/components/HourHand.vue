<script setup lang="ts">
import { useWords } from '@/composables'
import { computed } from 'vue'
import { toWords } from 'to-words/en-US'

const props = defineProps<{
  length: number
  hours: number
}>()

const { hours: hourWords } = useWords()
const rotation = computed(() => (360 / 12) * hourWords.indexOf(toWords(props.hours)) - 90)
</script>

<template>
  <g class="clock-hour-hand" :transform="`rotate(${rotation})`">
    <path stroke-width="40" stroke-linejoin="round" :d="`M 0 0 L ${length} 0 Z`" />
  </g>
</template>

<style scoped></style>

<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
import { type Language, useWords } from '@/composables'

const props = defineProps<{
  time: Date
  language: Language
  hours: number
  minutes: number
  seconds: number
}>()

const words = computed(() => useWords(props.language))
const actualTime = computed(() => dayjs(props.time).format('HH:mm:ss'))
const alphabeticalTime = computed(() =>
  [
    String(words.value.hours.indexOf(words.value.toWords(props.hours))).padStart(2, '0'),
    String(words.value.minutes.indexOf(words.value.toWords(props.minutes))).padStart(2, '0'),
    String(words.value.seconds.indexOf(words.value.toWords(props.seconds))).padStart(2, '0'),
  ].join(':'),
)
</script>

<template>
  <div class="time-display">
    <div class="time">
      <div class="time-header">Actual time</div>
      <div class="time-display-time">{{ actualTime }}</div>
    </div>
    <div class="time">
      <div class="time-header">Alphabetical time</div>
      <div class="time-display-time">{{ alphabeticalTime }}</div>
    </div>
  </div>
</template>

<style scoped></style>

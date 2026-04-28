<script setup lang="ts">
import ClockStaticContent from '@/components/ClockStaticContent.vue'
import { type Language, useClock } from '@/composables'
import { computed, ref } from 'vue'
import HourHand from '@/components/HourHand.vue'
import MinuteHand from '@/components/MinuteHand.vue'
import SecondHand from '@/components/SecondHand.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'

const { time } = useClock()
const hours = computed(() => time.value.getHours() % 12 || 12)
const minutes = computed(() => time.value.getMinutes())
const seconds = computed(() => time.value.getSeconds())

const language = ref<Language>('en')
</script>

<template>
  <div class="main-content">
    <LanguageSelector v-model="language" />
    <div class="clock-container">
      <svg viewBox="-1000 -1000 2000 2000" preserveAspectRatio="xMidYMid meet">
        <ClockStaticContent :radius="950" :language="language" />
        <HourHand :length="500" :hours="hours" :language="language" />
        <MinuteHand :length="750" :minutes="minutes" :language="language" />
        <SecondHand :length="875" :seconds="seconds" :language="language" />
      </svg>
    </div>
  </div>
</template>

<style scoped></style>

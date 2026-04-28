<script setup lang="ts">
import type { Language } from '@/composables'

const language = defineModel<Language>({ default: 'en' })
</script>

<template>
  <div class="language-selector" role="group" aria-label="Select language">
    <button
      class="lang"
      lang="en"
      :class="{ active: language === 'en' }"
      :aria-pressed="language === 'en'"
      @click="language = 'en'"
    >
      EN
    </button>
    <span aria-hidden="true">|</span>
    <button
      class="lang"
      lang="nl"
      :class="{ active: language === 'nl' }"
      :aria-pressed="language === 'nl'"
      @click="language = 'nl'"
    >
      NL
    </button>
  </div>
</template>

<style scoped></style>

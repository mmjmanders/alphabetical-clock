<script setup lang="ts">
import type { Language } from '@/composables'
import { languages } from '@/composables'

const language = defineModel<Language>({ default: 'en' })
</script>

<template>
  <div class="language-selector" role="group" aria-label="Select language">
    <button
      v-for="lang in languages"
      :key="lang"
      class="lang"
      :lang="lang"
      :class="{ active: language === lang }"
      :aria-pressed="language === lang"
      @click="language = lang"
    >
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>

<style scoped></style>

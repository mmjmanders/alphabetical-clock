<script setup lang="ts">
import type { Language } from '@/composables'

const language = defineModel<Language>({ default: 'en' })

const changeLanguage = (lang: Language) => {
  language.value = lang
}
</script>

<template>
  <div class="language-selector">
    <span class="lang" :class="{ active: language === 'en' }" @click="changeLanguage('en')"
      >EN</span
    >
    <span>|</span>
    <span class="lang" :class="{ active: language === 'nl' }" @click="changeLanguage('nl')"
      >NL</span
    >
  </div>
</template>

<style scoped></style>

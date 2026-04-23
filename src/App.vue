<script setup lang="ts">
import { Icon } from '@iconify/vue'

const { VITE_APP_VERSION: version } = import.meta.env
</script>

<template>
  <header>
    <Icon class="size-8" icon="material-symbols-light:clock-arrow-down-rounded" />
    <h1>Alphabetical Clock</h1>
  </header>
  <main></main>
  <footer>
    <Icon icon="material-symbols-light:commit-rounded" />
    {{ version }}
  </footer>
</template>

<style scoped></style>

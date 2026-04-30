import { defineConfig } from 'cypress'

export default defineConfig({
  allowCypressEnv: false,
  e2e: {
    baseUrl: process.env.CI ? 'http://localhost:4173' : 'http://localhost:5173',
  },
  component: {
    supportFile: 'tests/support.ts',
    indexHtmlFile: 'tests/index.html',
    specPattern: 'tests/**/*.spec.ts',
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
})

import { defineConfig } from 'cypress'

export default defineConfig({
  allowCypressEnv: false,
  defaultBrowser: 'chrome',
  e2e: {
    supportFile: false,
    specPattern: 'e2e/**/*.spec.ts',
    baseUrl: process.env.CI ? 'http://localhost:4173' : 'http://localhost:5173',
  },
})

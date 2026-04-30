import { defineConfig } from 'cypress'

export default defineConfig({
  allowCypressEnv: false,
  e2e: {
    supportFile: 'e2e/support.ts',
    specPattern: 'e2e/**/*.spec.ts',
    baseUrl: process.env.CI ? 'http://localhost:4173' : 'http://localhost:5173',
  },
})

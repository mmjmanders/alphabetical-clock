import { test as base } from '@playwright/test'

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.clock.setFixedTime(new Date('2026-04-28T13:34:12.000+02:00'))
    await use(page)
  },
})

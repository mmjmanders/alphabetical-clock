import { expect, test } from '@playwright/test'

test('should have correct title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Alphabetical Clock')
})

test('should have correct heading', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText('Alphabetical Clock')
})

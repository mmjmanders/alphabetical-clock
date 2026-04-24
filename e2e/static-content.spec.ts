import { expect, test } from '@playwright/test'

test('should display hour texts', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.hour-text')).toHaveCount(12)
})

test('should display hour ticks', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.hour-tick')).toHaveCount(12)
})

test('should display minute ticks', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.minute-tick')).toHaveCount(60)
})

import { test } from './clock-fixture'
import { expect } from '@playwright/test'

test('should have time display visible', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.time-display')).toBeVisible()
})

test('should display 2 different times', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.time-display .time')).toHaveCount(2)
})

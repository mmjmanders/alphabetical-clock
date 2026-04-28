import { expect } from '@playwright/test'
import { test } from './clock-fixture'

test('should have minute hand visible', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.clock-minute-hand')).toBeVisible()
})

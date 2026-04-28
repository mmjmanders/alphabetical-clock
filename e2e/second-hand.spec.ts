import { expect } from '@playwright/test'
import { test } from './clock-fixture'

test('should have second hand visible', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.clock-second-hand')).toBeVisible()
})

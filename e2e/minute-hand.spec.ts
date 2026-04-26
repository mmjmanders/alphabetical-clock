import { expect, test } from '@playwright/test'

test('should have minute hand visible', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.clock-minute-hand')).toBeVisible()
})

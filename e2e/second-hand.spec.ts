import { expect, test } from '@playwright/test'

test('should have second hand visible', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.clock-second-hand')).toBeVisible()
})

import { expect, test } from '@playwright/test'

test('should have hour hand visible', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.clock-hour-hand')).toBeVisible()
})

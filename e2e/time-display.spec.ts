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

/* Parmeterized test */
;[
  { language: 'EN', alphabeticalTime: '05:39:47' },
  { language: 'NL', alphabeticalTime: '02:37:27' },
  { language: 'ES', alphabeticalTime: '11:40:29' },
  { language: 'DE', alphabeticalTime: '02:46:59' },
  { language: 'FR', alphabeticalTime: '11:43:16' },
].forEach(({ language, alphabeticalTime }) => {
  test(`should display ${alphabeticalTime} for language ${language}`, async ({ page }) => {
    await page.goto('/')
    await page.locator(`.language-selector .lang:has-text('${language}')`).click()
    await expect(page.locator('.time-display .time-display-time')).toHaveText([
      '13:34:12',
      alphabeticalTime,
    ])
  })
})

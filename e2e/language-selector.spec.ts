import { test, expect } from '@playwright/test'

test('should display language selector', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.language-selector')).toBeVisible()
})

test('should display 5 languages', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.language-selector .lang')).toHaveCount(5)
})

test('should have 1 active language', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.language-selector .lang.active')).toHaveCount(1)
})

test('should have English as default active language', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.language-selector .lang.active')).toHaveText('EN')
})

/* Parameterized test */
;[
  { language: 'EN' },
  { language: 'NL' },
  { language: 'ES' },
  { language: 'DE' },
  { language: 'FR' },
].forEach(({ language }) => {
  test(`should have ${language} as selected language`, async ({ page }) => {
    await page.goto('/')
    await page.locator(`.language-selector .lang:has-text('${language}')`).click()
    await expect(page.locator('.language-selector .lang.active')).toHaveText(language)
  })
})

/* Parameterized test */
;[
  { language: 'EN', expectedText: 'Nine' },
  { language: 'NL', expectedText: 'Zeven' },
  { language: 'ES', expectedText: 'Cuatro' },
  { language: 'DE', expectedText: 'Fünf' },
  { language: 'FR', expectedText: 'Trois' },
].forEach(({ language, expectedText }) => {
  test(`should have ${expectedText} for hours in ${language}`, async ({ page }) => {
    await page.goto('/')
    await page.locator(`.language-selector .lang:has-text('${language}')`).click()
    await expect(page.locator('.hour-text', { hasText: expectedText })).toBeVisible()
  })
})

import { test, expect } from '@playwright/test'

test('should display language selector', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.language-selector')).toBeVisible()
})

test('should display 2 languages', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.language-selector .lang')).toHaveCount(2)
})

test('should have 1 active language', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.language-selector .lang.active')).toHaveCount(1)
})

test('should have English as default active language', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.language-selector .lang.active')).toHaveText('EN')
})

test('should switch to Dutch when clicking NL', async ({ page }) => {
  await page.goto('/')
  await page.locator(".language-selector .lang:has-text('NL')").click()
  await expect(page.locator('.language-selector .lang.active')).toHaveText('NL')
})

test('should have English words for hours', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.hour-text')).toHaveText([
    'Eight',
    'Eleven',
    'Five',
    'Four',
    'Nine',
    'One',
    'Seven',
    'Six',
    'Ten',
    'Three',
    'Twelve',
    'Two',
  ])
})

test('should have Dutch words for hours', async ({ page }) => {
  await page.goto('/')
  await page.locator(".language-selector .lang:has-text('NL')").click()
  await expect(page.locator('.hour-text')).toHaveText([
    'Acht',
    'Drie',
    'Een',
    'Elf',
    'Negen',
    'Tien',
    'Twaalf',
    'Twee',
    'Vier',
    'Vijf',
    'Zes',
    'Zeven',
  ])
})

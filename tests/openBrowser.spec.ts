import { test, expect } from '@playwright/test';

test('open Browser',async({page})=>{
    await page.goto('https://www.youtube.com/')
})

test('open chrome', async ({ page }) => {
    await page.goto('https://www.google.com/');
    console.log('opening a browser ')
})

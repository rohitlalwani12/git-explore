import { test, expect } from '@playwright/test';

test('open Browser',async({page})=>{
    await page.goto('https://www.youtube.com/')
})
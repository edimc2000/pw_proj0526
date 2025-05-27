// @ts-check

import { test, expect } from '@playwright/test';


test.describe('TG Form Elements', () => {

test.use({ viewport: { width: 1080, height: 1440 } });
    /* 
    [TC01] Validate Contact Us Information
    1 Navigate to https://techglobal-training.com/frontend/form-elements
    2 Validate the heading is “Contact Us”
    3 Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”
    4 Validate the email is “info@techglobalschool.com"
    5 Validate the phone number is “(224) 580-2150”
    */

    test('[TC01] Validate Contact Us Information', async ({ page }) => {
        await page.goto('https://www.techglobal-training.com/frontend/form-elements')
        await expect(page.locator('h1.is-size-3')).toHaveText('Contact Us')
        await expect(page.locator('#address')).toHaveText('2800 S River Rd Suite 310, Des Plaines, IL 60018')
        await expect(page.locator('#email')).toHaveText('info@techglobalschool.com')
        await expect(page.locator('#phone-number')).toHaveText('(224) 580-2150')

        console.log('EEEE', page.locator('h1.is-size-3'))
    })


    test.skip('[TC02] Validate the Full name input box', async ({ page }) => {


    })
})


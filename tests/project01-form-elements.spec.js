// @ts-check

import { test, expect } from '@playwright/test';


test.describe('TG Form Elements', () => {
    test.use({ viewport: { width: 1080, height: 1440 } });
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.techglobal-training.com/frontend/form-elements')
    });


    /* 
    [TC01] Validate Contact Us Information
    1 Navigate to https://techglobal-training.com/frontend/form-elements
    2 Validate the heading is “Contact Us”
    3 Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”
    4 Validate the email is “info@techglobalschool.com"
    5 Validate the phone number is “(224) 580-2150”
    */
    test('[TC01] Validate Contact Us Information', async ({ page }) => {
        await expect(page.locator('h1.is-size-3')).toHaveText('Contact Us')
        await expect(page.locator('#address')).toHaveText('2800 S River Rd Suite 310, Des Plaines, IL 60018')
        await expect(page.locator('#email')).toHaveText('info@techglobalschool.com')
        await expect(page.locator('#phone-number')).toHaveText('(224) 580-2150')
    })

    /*
    [TC02] Validate the Full name input box
    1 Navigate to https://techglobal-training.com/frontend/form-elements
    2 Validate that the Full name input box is displayed
    3 Validate that the Full name input box is required
    4 Validate that the label of the Full name input box is “Full name *”
    5 Validate that the placeholder of the Full name input box is “Enter your full name”
    */
    test.only('[TC02] Validate the Full name input box', async ({ page }) => {


    })
})


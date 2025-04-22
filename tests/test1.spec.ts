import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';


test('Login to the site', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('/auth/login');
    await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01')
    await page.waitForURL('/account');
    await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
    await loginPage.header.checkAccount(' Jane Doe ');

});



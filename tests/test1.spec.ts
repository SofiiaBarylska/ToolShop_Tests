import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { baseConfig } from '../config/baseConfig';


test('Login to the site', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('/auth/login');
    await loginPage.login(baseConfig.USER_EMAIL, baseConfig.USER_PASSWORD);
    await page.waitForURL('/account');
    await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
    await loginPage.header.checkAccount(baseConfig.USER_NAME);

});



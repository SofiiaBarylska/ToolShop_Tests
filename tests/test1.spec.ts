import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';


test('Login to the site', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto(process.env.WEB_URL! + '/auth/login');
    await loginPage.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await page.waitForURL('/account');
    await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
    await loginPage.header.checkAccount(process.env.USER_NAME!);

});



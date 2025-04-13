import {expect, test } from '@playwright/test';


test('Login to the site', async ({ page }) => {
    await page.goto('/auth/login');

    await page.getByPlaceholder('Your email').fill('customer@practicesoftwaretesting.com');
    await page.getByPlaceholder('Your password').fill('welcome01');
    await page.locator('[data-test="login-submit"]').click();
    await page.waitForURL('/account');
    await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
    await expect(page.locator('[data-test="nav-menu"]')).toHaveText(' Jane Doe ');

});

test('User can view products details', async ({ page }) => {
    await page.goto('/');
    await page.getByAltText('Combination Pliers').click();
    await expect(page).toHaveURL(/\/product/);
    await expect(page.locator('[data-test="product-name"]')).toContainText('Combination Pliers');
    await expect(page.locator('[data-test="unit-price"]')).toHaveText('14.15');
    await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
    await expect(page.locator('[data-test="add-to-favorites"]')).toBeVisible();
})

test('User can add product to cart', async ({ page }) => {
    await page.goto('/');
    await page.getByAltText('Slip Joint Pliers').click();
    await expect(page).toHaveURL(/\/product/);
    await expect(page.locator('[data-test="product-name"]')).toContainText('Slip Joint Pliers');
    await expect(page.locator('[data-test="unit-price"]')).toHaveText('9.17');
    await (page.locator('[data-test="add-to-cart"]')).click();
    await expect(page.getByRole('alert')).toBeVisible();
    await expect(page.getByRole('alert')).toContainText('Product added to shopping');
    await page.waitForTimeout(8000);
    await expect(page.getByRole('alert')).toBeHidden();
    await expect(page.locator('[data-test="nav-cart"]')).toHaveCount(1);
    await (page.locator('[data-test="nav-cart"]')).click();
    await page.waitForURL('/checkout');
    await expect(page.locator('[data-test="product-quantity"]')).toHaveCount(1);
    await expect(page.locator('[data-test="product-title"]')).toContainText('Slip Joint Pliers');
    await expect(page.getByRole('button', { name: 'Proceed to checkout' })).toBeVisible();

})
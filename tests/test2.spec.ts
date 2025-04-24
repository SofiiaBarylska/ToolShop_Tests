import { expect, test } from '@playwright/test';
import { ProductPage } from '../pages/product.page';

test('User can view products details', async ({ page }) => {
    const productPage = new ProductPage(page);

    await page.goto(process.env.WEB_URL!);
    await page.getByAltText('Combination Pliers').click();
    await productPage.verifyProductDetails('Combination Pliers', 14.15);

})
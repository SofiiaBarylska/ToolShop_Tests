import {  test } from '@playwright/test';
import { ProductPage } from '../pages/product.page';
import { Cart } from '../pages/cart.page';

test('User can add product to cart', async ({ page }) => {
    const productPage = new ProductPage(page);

    await page.goto(process.env.WEB_URL!);
    await productPage.openProduct('Slip Joint Pliers');
    await productPage.verifyProductDetails('Slip Joint Pliers', 9.17)
    await productPage.addProductToCart();
    await productPage.verifyAlert('Product added to shopping');
    await productPage.header.checkCartItemCount(1)
    await productPage.header.goToCart();
    const cart = new Cart(page);
    await cart.checkQTY(1);
    await cart.checkProductTitle('Slip Joint Pliers');
    await cart.verifyCheckoutButtonIsVisible();

})
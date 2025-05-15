import { test } from '../fixtures'

test('User can add product to cart', async ({ app, page }) => {
    await app.page.goto('/');
    await app.productPage.openProduct('Slip Joint Pliers');
    await app.productPage.verifyProductDetails('Slip Joint Pliers', 9.17)
    await app.productPage.addProductToCart();
    await app.productPage.verifyAlert('Product added to shopping');
    await app.productPage.header.checkCartItemCount(1)
    await app.productPage.header.goToCart();
    await app.cart.checkQTY(1);
    await app.cart.checkProductTitle('Slip Joint Pliers');
    await app.cart.verifyCheckoutButtonIsVisible();

})
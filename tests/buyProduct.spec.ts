import { baseConfig } from '../config/baseConfig';
import {  test, expect } from '../fixtures';
import { BILLING_ADDRESS } from '../typings/billingAddressData';
import { CREDIT_CARD } from '../typings/paymentData';



test('The user purchased the product ', async ({ loggedInApp })=> {
    await loggedInApp.page.goto('/');
    await loggedInApp.productPage.openProduct('Combination Pliers');
    const productTitle = await loggedInApp.productPage.getProductTitle();
    const productPrice = await loggedInApp.productPage.getProductPrice();

    await loggedInApp.productPage.addProductToCart();
    await loggedInApp.productPage.verifyAlert('Product added to shopping');
    await loggedInApp.productPage.header.goToCart();

    expect(await loggedInApp.cart.getCartProductTitle()).toBe(productTitle);
    expect(await loggedInApp.cart.getCartProductPrice()).toBe(productPrice);
    expect(await loggedInApp.cart.getTotalPrice()).toBe(productPrice);

    await loggedInApp.cart.goToCheckout();

    await loggedInApp.signIn.checkIfUserSignIn(`Hello ${baseConfig.USER_NAME}, you are already logged in. You can proceed to checkout.`);
    await loggedInApp.signIn.proceedToCheckout();

    await loggedInApp.billingAddress.fillBillingAddress(BILLING_ADDRESS);
    await loggedInApp.billingAddress.proceedToCheckout();

    await loggedInApp.paymentStep.selectPaymentMethod();
    await loggedInApp.paymentStep.fillCreditCardInfo(CREDIT_CARD);
    await loggedInApp.paymentStep.approvePurchase();
    await loggedInApp.paymentStep.verifyPaymentSuccessMessage('Payment was successful');
    await loggedInApp.paymentStep.approvePurchase();
    await loggedInApp.paymentStep.displayOrderConfirmation('Thanks for your order! Your invoice number is ');

    




})
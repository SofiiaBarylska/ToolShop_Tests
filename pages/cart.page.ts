import { Locator, Page, expect } from '@playwright/test';

export class Cart{
    page: Page;
    productQTY: Locator;
    cartProductTitle: Locator;
    checkoutButton: Locator;
    cartTotalPrice: Locator;
    cartProductPrice: Locator;


    constructor(page: Page) {
        this.page = page;
        this.productQTY = page.locator('[data-test="product-quantity"]');
        this.cartProductTitle = page.locator('[data-test="product-title"]');
        this.checkoutButton = page.getByRole('button', { name: 'Proceed to checkout' });
        this.cartProductPrice = page.locator('[data-test="product-price"]');
        this.cartTotalPrice = page.locator('[data-test="cart-total"]');

    }

    async checkQTY(quantity:number): Promise<void>{
        await expect(this.productQTY).toHaveCount(quantity);
    }
    
    async checkProductTitle(title:string): Promise<void>{
        await expect(this.cartProductTitle).toContainText(title);
    }

    async verifyCheckoutButtonIsVisible(): Promise<void> {
    await expect(this.checkoutButton).toBeVisible();
    }

    async getCartProductTitle(): Promise<string> {
        const title = await this.cartProductTitle.textContent();
        if (!title)return '';
        return title.trim();
    }

    async getCartProductPrice(): Promise<string> {
        const price = await this.cartProductPrice.textContent();
        if (!price) return '';
        return price.replace('$', '').trim();
      }

    async getTotalPrice(): Promise<string>{
        const total = await this.cartTotalPrice.textContent();
        if (!total) return '';
        return total.replace('$', '').trim();
    }
    
    async goToCheckout(): Promise<void>{
        await this.checkoutButton.click();
    }




}
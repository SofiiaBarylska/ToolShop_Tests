import { Locator, Page, expect } from '@playwright/test';

export class Cart{
    page: Page;
    productQTY: Locator;
    productTitle: Locator;
    checkoutButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.productQTY = page.locator('[data-test="product-quantity"]');
        this.productTitle = page.locator('[data-test="product-title"]');
        this.checkoutButton = page.getByRole('button', { name: 'Proceed to checkout' });

    }

    async checkQTY(quantity:number): Promise<void>{
        await expect(this.productQTY).toHaveCount(quantity);
    }
    
    async checkProductTitle(title:string): Promise<void>{
        await expect(this.productTitle).toContainText(title);
    }

    async verifyCheckoutButtonIsVisible(): Promise<void> {
    await expect(this.checkoutButton).toBeVisible();
    }
    
    async goToCheckout(): Promise<void>{
        await (this.checkoutButton).click();
    }




}
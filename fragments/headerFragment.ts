import { Locator, Page, expect } from '@playwright/test';

export class HeaderFragment { 
    page: Page;
    cartIcon: Locator;
    cartQTY: Locator;
    iconAccount: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.cartIcon = page.locator('[data-test="nav-cart"]');
        this.cartQTY = page.locator('[data-test="nav-cart"]');
        this.iconAccount = page.locator('[data-test="nav-menu"]');
    }
    
     async goToCart(): Promise<void>{
         await this.cartIcon.click();
         await this.page.waitForURL('/checkout');
     }
    
    async checkCartItemCount(quantity:number): Promise<void> {
        await expect(this.cartQTY).toHaveCount(quantity);


    }

    async checkAccount(user: string): Promise<void> {
        await expect(this.iconAccount).toHaveText(user);
    }



}

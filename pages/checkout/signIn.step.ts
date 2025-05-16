import { expect, Locator, Page } from "@playwright/test";


export class SignIn {
    page: Page;
    proceedToCheckoutButton: Locator;
    successfullSignInMessage: Locator;


    constructor(page: Page) {
        this.page = page;
        this.proceedToCheckoutButton = page.locator('[data-test="proceed-2"]');
        this.successfullSignInMessage = page.locator('div.container p');
    }

    async checkIfUserSignIn(text:string): Promise<void> {
        await expect (this.successfullSignInMessage).toHaveText(text);

    }

    async proceedToCheckout(): Promise<void> {
        await this.proceedToCheckoutButton.click();
    }
}
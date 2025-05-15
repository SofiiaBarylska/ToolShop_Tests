import { expect, Locator, Page } from "@playwright/test";
import { CreditCard, PaymentMethod } from "../../typings/paymentData";


export class PaymentStep {
    page: Page;
    creditCardNumber: Locator;
    expirationDate: Locator;
    cvv: Locator;
    cardHolderName: Locator;
    confirmButton: Locator;
    paymentMethod: Locator;
    paymentSuccessfull: Locator;
    orderConfirmation: Locator;


constructor(page: Page){
    this.page = page;
    this.creditCardNumber = page.locator('[data-test="credit_card_number"]');
    this.expirationDate = page.locator('[data-test="expiration_date"]');
    this.cvv = page.locator('[data-test="cvv"]');
    this.cardHolderName = page.locator('[data-test="card_holder_name"]');
    this.confirmButton = page.locator('[data-test="finish"]');
    this.paymentMethod = page.locator('[data-test="payment-method"]');
    this.paymentSuccessfull = page.locator('[data-test="payment-success-message"]');
    this.orderConfirmation = page.locator('[id="order-confirmation"]');
}

async selectPaymentMethod (): Promise<void>{
    const method = PaymentMethod.CreditCard;

    await this.paymentMethod.selectOption(method);
}


async fillCreditCardInfo(card: CreditCard): Promise<void>{
const {creditCardNumber, expirationDate, cvv, cardHolderName} = card;

await this.creditCardNumber.fill(creditCardNumber);
await this.expirationDate.fill(expirationDate);
await this.cvv.fill(cvv);
await this.cardHolderName.fill(cardHolderName);
}

async approvePurchase(): Promise<void>{
    await this.confirmButton.click();
}

async verifyPaymentSuccessMessage(message: string):Promise<void>{
   await expect (this.paymentSuccessfull).toContainText(message);

}

async displayOrderConfirmation(message: string):Promise<void>{
await expect (this.orderConfirmation).toContainText(message);
}

}
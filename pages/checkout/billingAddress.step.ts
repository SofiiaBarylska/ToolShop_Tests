import { Locator, Page } from "@playwright/test";
import { BillingAddressData } from "../../typings/billingAddressData";


export class BillingAddress  {
 page: Page;
 streetField: Locator;
 cityField: Locator;
 stateField: Locator;
 countryField: Locator;
 postCodeField: Locator;
 proceedToCheckoutButton: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.streetField = page.locator ('[data-test="street"]');
    this.cityField = page.locator ('[data-test="city"]');
    this.stateField = page.locator ('[data-test="state"]');
    this.countryField = page.locator ('[data-test="country"]');
    this.postCodeField = page.locator ('[data-test="postal_code"]');
    this.proceedToCheckoutButton = page.locator ('[data-test="proceed-3"]');

  }

  async fillBillingAddress(billingAddressData: BillingAddressData): Promise<void>{
    const { street, city, state, country, postCode } = billingAddressData;

    await this.streetField.fill(street);
    await this.cityField.fill(city);
    await this.stateField.fill(state);
    await this.countryField.fill(country);
    await this.postCodeField.fill(postCode);
  }

  async proceedToCheckout(): Promise<void>{
    await this.proceedToCheckoutButton.click();
  }

}
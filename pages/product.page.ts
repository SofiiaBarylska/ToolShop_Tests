import { Locator, Page, expect } from "@playwright/test";
import { HeaderFragment } from "../pages/fragments/headerFragment";

export class ProductPage {
  page: Page;
  header: HeaderFragment; // ініціалізуємо фрагмент тут
  productName: Locator;
  unitPrice: Locator;
  addToCartButton: Locator;
  favoriteButton: Locator;
  productAlert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderFragment(page); // фрагмент всередині Page Object
    this.productName = this.page.locator('[data-test="product-name"]');
    this.unitPrice = this.page.locator('[data-test="unit-price"]');
    this.addToCartButton = this.page.locator('[data-test="add-to-cart"]');
    this.favoriteButton = this.page.locator('[data-test="add-to-favorites"]');
    this.productAlert = this.page.getByRole("alert");
  }
  async openProduct(title: string): Promise<void> {
    await this.page.getByAltText(title).click();
    await expect(this.page).toHaveURL(/\/product/);
  }

  async verifyProductDetails(title: string, price: number): Promise<void> {
    await expect(this.productName).toContainText(title);
    await expect(this.unitPrice).toHaveText(price.toFixed(2));
    await expect(this.addToCartButton).toBeVisible();
    await expect(this.favoriteButton).toBeVisible();
  }

  async addProductToCart(): Promise<void> {
    await this.addToCartButton.click();
  }

  async verifyAlert(alert: string): Promise<void> {
    await expect(this.productAlert).toBeVisible();
    await expect(this.productAlert).toContainText(alert);
    await expect(this.productAlert).toBeHidden({ timeout: 8000 });
  }

  async getProductTitle(): Promise<string> {
    return await this.productName.textContent()|| "";
  }

  

  async getProductPrice():Promise<string>{
    return await this.unitPrice.textContent() || "";
  }
}
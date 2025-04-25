import { Locator, Page, expect } from "@playwright/test";
import { ProductFiltersFragment } from "./fragments/productsFiltersFragment";

export class ProductListPage {
  page: Page;
  sort: Locator;
  productsName: Locator;
  productPrice: Locator;
  readonly filters: ProductFiltersFragment;

  constructor(page: Page) {
    this.page = page;
    this.sort = page.locator('[data-test="sort"]');
    this.productsName = page.locator('[data-test="product-name"]');
    this.productPrice = page.locator('[data-test="product-price"]');

    //Initialisation of fragment

    this.filters = new ProductFiltersFragment(page);
  }

  async selectSortingOption(sorting: string) {
    await this.sort.selectOption({ label: sorting });
    await this.page.waitForLoadState("networkidle");
  }

  async verifyProductsAreSorted(sorting: string): Promise<void> {
    await this.page.waitForLoadState("networkidle");

    const namesOnPage = (await this.productsName.allTextContents()).map((n) =>
      n.trim()
    );
    console.log("Names on this page:", namesOnPage);

    const expected = namesOnPage.toSorted((a, b) =>
      sorting === "Name (A - Z)" ? a.localeCompare(b) : b.localeCompare(a)
    );
    expect(namesOnPage).toEqual(expected);
    console.log("Verification completed on the first page.");
  }

  async verifyProductPricesSorted(sorting: string): Promise<void> {
    await this.page.waitForLoadState("networkidle");

    const pricesText = await this.productPrice.allTextContents();

    const pricesOnPage = pricesText.map((text) => {
      return parseFloat(text.replace("$", "").trim());
    });

    console.log("Prices on the page:", pricesOnPage);

    const expected = pricesOnPage.toSorted((a, b) =>
      sorting === "Price (Low - High)" ? a - b : b - a
    );

    expect(pricesOnPage).toEqual(expected);
    console.log("Verification completed on the first page.");
  }

  async getProductNames(): Promise<string[]> {
    return this.productsName.allTextContents();
  }

  async verifyProductNamesContain(subcategory: string): Promise<void> {
    const names = await this.getProductNames();
    console.log("Names after filtering by subcategory:", names);
    for (const name of names) {
      expect(name).toContain(subcategory);
    }
  }
}


import { Locator, Page, expect } from "@playwright/test";

export class ProductListPage {
  page: Page;
  sort: Locator;
  productsName: Locator;
  // nextPageItem: Locator;
  // nextPageButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sort = page.locator('[data-test="sort"]');
    this.productsName = page.locator('[data-test="product-name"]');
    // this.nextPageItem = page.locator("li.page-item", {
    //   has: page.locator('a[aria-label="Next"]'),
    // });
    // this.nextPageButton = page.locator('a[aria-label="Next"]');
  }

  async selectSortingOption(sorting: string) {
    await this.sort.selectOption({ label: sorting });
    await this.page.waitForLoadState("networkidle");
  }

  async getAllProductNames(): Promise<string[]> {
    const allNames: string[] = [];

    await this.page.waitForLoadState("networkidle");

    const namesOnPage = (await this.productsName.allTextContents()).map((n) =>
      n.trim()
    );
    console.log("Names on this page:", namesOnPage);
    allNames.push(...namesOnPage);
    console.log("All collected names from the first page:", allNames);

    return allNames;
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
}

//If need to sort the products from all pages (but there are some bug, on 4 pages display the same products)

// async getAllProductNames(): Promise<string[]> {
//   const allNames: string[] = [];

//   while (true) {
//     await this.page.waitForLoadState("networkidle");

//     const namesOnPage = (await this.productsName.allTextContents()).map((n) =>
//       n.trim()
//     );
//     console.log("Names on this page:", namesOnPage);
//     allNames.push(...namesOnPage);

//     const liClass = await this.nextPageItem.getAttribute("class");
//     if (liClass?.includes("disabled")) {
//       console.log("Reached last page.");
//       break;
//     }

//     await Promise.all([
//       this.nextPageButton.click(),
//       this.page.waitForLoadState("networkidle"),
//     ]);
//   }

//   console.log("All collected names:", allNames);
//   return allNames;
// }

// async verifyProductsAreSorted(sorting: string): Promise<void> {
//   while (true) {
//     await this.page.waitForLoadState("networkidle");

//     const namesOnPage = (await this.productsName.allTextContents()).map((n) =>
//       n.trim()
//     );
//     console.log("Names on this page:", namesOnPage);

//     const expected = namesOnPage.toSorted((a, b) =>
//       sorting === "Name (A - Z)" ? a.localeCompare(b) : b.localeCompare(a)
//     );

//     expect(namesOnPage).toEqual(expected);

//     const liClass = await this.nextPageItem.getAttribute("class");
//     if (liClass?.includes("disabled")) {
//       console.log("Reached last page — всі сторінки перевірені.");
//       break;
//     }

//     await Promise.all([
//       this.nextPageButton.click(),
//       this.page.waitForLoadState("networkidle"),
//     ]);
//   }
// }

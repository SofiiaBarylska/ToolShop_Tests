import { Locator, Page, expect } from "@playwright/test";

export class ProductListPage{
    page: Page;
    sort: Locator;
    productsName: Locator;
    nextPageButton: Locator;
    nextPageItem: Locator;


    constructor(page: Page) {
        this.page = page;
        this.sort = this.page.locator('[data-test="sort"]');
        this.productsName = this.page.locator('[data-test="product-name"]');
        this.nextPageItem = page.locator('li.page-item', { has: page.locator('[aria-label="Next"]') });
        this.nextPageButton = page.locator('[aria-label="Next"]');

    }

    async clickOnSorting(): Promise<void>{
        await this.sort.click();
    }

    async selectSortingOption(sorting: string): Promise<void>{
        await this.sort.selectOption({ label: sorting });
    }

async getAllProductNames(): Promise<string[]> {
    let allNames: string[] = [];

    while (true) {
        await this.page.waitForLoadState('networkidle');

        const namesOnPage = await this.productsName.allTextContents();
        allNames = allNames.concat(namesOnPage);

        const isDisabled = await this.nextPageItem.getAttribute('class');

        if (isDisabled?.includes('disabled')) {
            console.log('Reached last page.');
            break;
        }

        await this.nextPageButton.click();
    }

    return allNames;
}
    // async getAllProductNames(): Promise<string[]> {
    //     let allNames: string[] = [];
    //     let hasNextPage = true;

    //     while (hasNextPage) {
    //         const pageNames = await this.productsName.allTextContents();
    //         allNames = allNames.concat(pageNames);
            
    //        hasNextPage = await this.nextPageButton.isEnabled();
    //          if (hasNextPage) {
    //              await this.nextPageButton.click(); 
    //         } else {
    //           console.log('No more pages available.');
    //         }
    //     }
    //     return allNames;
    // }

    async verifyProductsAreSorted(sorting: string): Promise<void>{
        const names = await this.getAllProductNames();
        const sortedNames = [...names].sort((a, b) =>
            sorting === 'Name (A - Z)' ? a.localeCompare(b) : b.localeCompare(a)
  
        );

         console.log('Original Names:', names);
         console.log('Sorted Names:', sortedNames);

        expect(names).toEqual(sortedNames);
    }
   


}
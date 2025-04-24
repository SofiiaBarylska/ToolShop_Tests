import { Page } from "@playwright/test";
import { Category } from '../../typings/categories';

export class ProductFiltersFragment {
  page: Page;


  constructor(page: Page) {
    this.page = page;
  }

  async selectCategory(productCategory: Category) {
    
    //click on the checkbox by the label
      await this.page.getByLabel(productCategory).check();
    //wait to upload info
      await this.page.waitForLoadState("networkidle");
    
  }
}
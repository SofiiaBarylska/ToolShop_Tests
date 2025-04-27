import { test } from "@playwright/test";
import { ProductFiltersFragment } from "../pages/fragments/productsFiltersFragment";
import { ProductListPage } from "../pages/productList.page";
import { Category } from '../typings/categories';


test("Filter products by category and check if products are filtered", async ({
  page,
}) => {
  await page.goto('/');
//create instances (fragments/objects)
  const filters = new ProductFiltersFragment(page);
  const products   = new ProductListPage(page);
  const subcat = Category.Sander;
  await filters.selectCategory(subcat);
  await products.verifyProductNamesContain(subcat);



});

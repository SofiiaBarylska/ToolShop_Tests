import { expect, test } from "@playwright/test";
import { ProductFiltersFragment } from "../pages/fragments/productsFiltersFragment";
import { ProductListPage } from "../pages/productList.page";
import { Category } from '../typings/categories';


test("Filter products by category and check if products are filtered", async ({
  page,
}) => {
  await page.goto(process.env.WEB_URL!);
//create instances (fragments/objects)
  const filters = new ProductFiltersFragment(page);
  const products   = new ProductListPage(page);

  await filters.selectCategory(Category.Sander);
  await products.verifyProductNamesContain("Sander");



});

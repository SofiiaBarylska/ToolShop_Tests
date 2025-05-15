import { test } from '../fixtures';
import { Category } from '../typings/categories';


test("Filter products by category and check if products are filtered", async ({
  app, page
}) => {
  await app.page.goto('/');
//create instances (fragments/objects)
  const subcat = Category.Sander;
  await app.filters.selectCategory(subcat);
  await app.productListPage.verifyProductNamesContain(subcat);



});

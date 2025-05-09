import { test} from '@playwright/test'
import { ProductListPage } from '../pages/productList.page';

[{ sorting: 'Name (A - Z)' },
 { sorting: 'Name (Z - A)' }
].forEach(({ sorting }) => {
    test(`Products correct sorting by ${sorting}`, async ({ page }) => {
        const productListPage = new ProductListPage(page)

        await page.goto('/');
        await productListPage.selectSortingOption(sorting);
        await productListPage.verifyProductsAreSorted(sorting);
   
});
})


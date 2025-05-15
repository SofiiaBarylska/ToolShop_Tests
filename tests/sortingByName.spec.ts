import { test } from '../fixtures';

[{ sorting: 'Name (A - Z)' },
 { sorting: 'Name (Z - A)' }
].forEach(({ sorting }) => {
    test(`Products correct sorting by ${sorting}`, async ({ app, page }) => {

        await app.page.goto('/');
        await app.productListPage.selectSortingOption(sorting);
        await app.productListPage.verifyProductsAreSorted(sorting);
   
});
})


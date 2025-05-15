import { test } from '../fixtures';


[{ sorting: "Price (High - Low)" },
    { sorting: "Price (Low - High)" }
].forEach(({sorting}) => {
    test(`Products correct sorting by ${sorting}`, async ({ app, page }) => {
       
        await app.page.goto('/');
        await app.productListPage.selectSortingOption(sorting);
        await app.productListPage.verifyProductPricesSorted(sorting);

    })
});
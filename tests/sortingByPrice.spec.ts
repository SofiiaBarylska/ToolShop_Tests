import { test } from "@playwright/test";
import { ProductListPage } from "../pages/productList.page";

[{ sorting: "Price (High - Low)" },
    { sorting: "Price (Low - High)" }
].forEach(({sorting}) => {
    test(`Products correct sorting by ${sorting}`, async ({ page }) => {
        const productListPage = new ProductListPage(page);
        await page.goto(process.env.WEB_URL!);
       await productListPage.selectSortingOption(sorting);
        await productListPage.verifyProductPricesSorted(sorting);

    })
});
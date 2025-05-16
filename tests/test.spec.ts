import { Page } from '@playwright/test';
import { baseConfig } from '../config/baseConfig';
import { test} from '../fixtures/fixtures' // імпортуємо наш кастомний test
import { ProductListPage } from '../pages/productList.page';
import { ProductPage } from '../pages/product.page';
import { LoginPage } from '../pages/login.page';


class App {
    page: Page;
    productListPage: ProductListPage;
    loginPage: LoginPage;
    productPage: ProductPage;
    constructor(page: Page) {
        this.page = page;
        this.productListPage = new ProductListPage(page);
        this.productPage = new ProductPage(page);
        this.loginPage = new LoginPage(page);

    }
};

type MyFixtures = {
    app: App,
   
}

const myTest6 = test.extend<MyFixtures>({
    app: async({page}, use) => {
        const app = new App(page);
        await use(app);

    }
})




myTest6.skip ("User can view product details", async ({ app }) => {
  await app.page.goto("/");
  await app.productPage.openProduct("Combination Pliers");
  await app.productPage.verifyProductDetails("Combination Pliers", 14.15);
});

async function loggedInPage(page: Page){
    await page.goto("/auth/login");
        await page.locator('[data-test="email"]').fill(baseConfig.USER_EMAIL);
        await page.locator('[data-test="password"]').fill(baseConfig.USER_PASSWORD);
        await page.locator('[data-test="login-submit"]').click();
        return page;

}

const myTest = test.extend<MyFixtures>({
 loggedInPage: async ({ page }, use) => {
        await page.goto("/auth/login");
        await page.locator('[data-test="email"]').fill(baseConfig.USER_EMAIL);
        await page.locator('[data-test="password"]').fill(baseConfig.USER_PASSWORD);
        await page.locator('[data-test="login-submit"]').click();

        await use(page);

        console.log('After test')
 },

 consoleAndReturn:async({},use) =>{
    console.log("Console");
    await use(100500);
    console.log("After use in consolev ")
 }
});

// myTest('Some test', ({ loggedInPage }) => {
//     console.log('Finish');
// });

// myTest('Some test', ({ loggedInPage }) => {
//     console.log('Finish2');
// });

myTest.skip('Some test', async({page}) => {
    await loggedInPage(page);
    console.log('Finish1');
    await page.locator('[id="Layer_1"]').click();
    await page.waitForTimeout(3000);
})

myTest.skip('Some test2', async({loggedInPage, consoleAndReturn}) => {
    
    await loggedInPage.locator('[id="Layer_1"]').click();
    await loggedInPage.waitForTimeout(2000);
    await loggedInPage.locator('[data-test="product-name"]').nth(0).click();
    await loggedInPage.waitForTimeout(3000);
    console.log('Finish2');
    
})

// tests/fixtures.ts
import { test as base, expect, Page } from "@playwright/test";
import { AppManager } from "../pages/home/app.manager";
import { LoginPage } from "../pages/login.page";
import { baseConfig } from "../config/baseConfig";


type MyFixtures = {
  app: AppManager;
  loggedInPage: Page;
  loggedInApp: AppManager;
};


const test = base.extend<MyFixtures>({
  app: async ({ page }, use) => {
    const app = new AppManager(page);
    await use(app);
  },

  loggedInPage: async ({page}, use) => {
    const loginPage = new LoginPage(page);
    await page.goto('/auth/login');
    await loginPage.login(baseConfig.USER_EMAIL, baseConfig.USER_PASSWORD);
    await page.waitForURL('/account');
    await use(page);

  },

  loggedInApp: async ({ loggedInPage }, use) => {
    const app = new AppManager(loggedInPage);
    await use(app);
  }
});

export { test, expect };

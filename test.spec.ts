import { test } from '@playwright/test';

test(`example test`, async ({ page }) => {
  // ...
  await page.getByLabel('User Name').fill(process.env.USER_NAME);
  await page.getByLabel('Password').fill(process.env.PASSWORD);
});
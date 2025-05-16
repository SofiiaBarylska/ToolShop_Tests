import { test } from '../fixtures';


test('User can view products details', async ({ app }) => {
   
    await app.page.goto('/');
    await app.page.getByAltText('Combination Pliers').click();
    await app.productPage.verifyProductDetails('Combination Pliers', 14.15);

})
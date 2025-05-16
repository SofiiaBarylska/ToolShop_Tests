import { test } from '../fixtures';
import { baseConfig } from '../config/baseConfig';


test('Login to the site', async ({ loggedInApp }) => {
    
    await loggedInApp.header.checkPageTitle('My account');
    await loggedInApp.header.checkAccount(baseConfig.USER_NAME);

});



const { test, expect } = require("playwright/test");
const { config } = require("../config/config");
const { commonMethods } = require("../utility/commonMethods");
const { login } = require("../pageObjects/login");
const { baseTest } = require("../utility/baseTest");


class loginTest extends baseTest {
  // You can add additional methods or override static methods if needed
}

test.describe('Login Tests', () => {

  let loginobj;
  test.beforeAll(async ({ browser }) => {
    await baseTest.setup({ browser });
    loginobj = new login(baseTest.page, baseTest.cm);
  });

  test.afterAll(async () => {
    await baseTest.teardown();
  });

  test('Login Validation', async () => {

    await loginobj.loginApp(config.username, config.password);
  })
  test('Logout Validation', async () => {

    await loginobj.logoutApp();
  })
})
const { test, expect } = require("playwright/test");
const { homepage } = require("../pageObjects/homepage");
const { commonMethods } = require("../utility/commonMethods");
const { config } = require("../config/config");
const { baseTest } = require("../utility/baseTest");


class HomePageTest extends baseTest {
  // You can add additional methods or override static methods if needed
}

test.describe('Home Page Tests', () => {

  let homepageobj;
  test.beforeAll(async ({ browser }) => {
    await baseTest.setup({ browser });
    homepageobj = new homepage(baseTest.page, baseTest.cm);
  });

  test.afterAll(async () => {
    await baseTest.teardown();
  });

  test('Home Page Validation', async () => {

    await homepageobj.homePageValidation(config.headerMenu, config.categoryOptions);
  })
})
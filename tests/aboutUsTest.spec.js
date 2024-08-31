const { test, expect } = require("playwright/test");
const { config } = require("../config/config");
const { aboutUs } = require("../pageObjects/aboutUs");
const { baseTest } = require("../utility/baseTest");


class aboutUsTest extends baseTest {
  // You can add additional methods or override static methods if needed
}

test.describe('About Us Tests', () => {

  let aboutUsobj;
  test.beforeAll(async ({ browser }) => {
    await baseTest.setup({ browser });
    aboutUsobj = new aboutUs(baseTest.page, baseTest.cm);
  });

  test.afterAll(async () => {
    await baseTest.teardown();
  });

  test('About Us Validation', async () => {

    await aboutUsobj.aboutUsValidation();
  })
})
const { test, expect } = require("playwright/test");
const { config } = require("../config/config");
const { commonMethods } = require("../utility/commonMethods");
const { contact } = require("../pageObjects/contact");
const { baseTest } = require("../utility/baseTest");


class contactTest extends baseTest {
  // You can add additional methods or override static methods if needed
}

test.describe('Contact Tests', () => {

  let contactobj;
  test.beforeAll(async ({ browser }) => {
    await baseTest.setup({ browser });
    contactobj = new contact(baseTest.page, baseTest.cm);
  });

  test.afterAll(async () => {
    await baseTest.teardown();
  });

  test('Contact Validation', async () => {

    await contactobj.sendMessageValidation(config.email, config.name, config.message);
  })
})
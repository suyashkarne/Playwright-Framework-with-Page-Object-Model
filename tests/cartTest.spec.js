const { test, expect } = require("playwright/test");
const { commonMethods } = require("../utility/commonMethods");
const { config } = require("../config/config");
const { cart } = require("../pageObjects/cart");
const { baseTest } = require("../utility/baseTest");


class cartTest extends baseTest {
  // You can add additional methods or override static methods if needed
}

test.describe('Cart Tests', () => {
  let cartobj;
  test.beforeAll(async ({ browser }) => {
    await baseTest.setup({ browser });
    cartobj = new cart(baseTest.page, baseTest.cm);
  });

  test.afterAll(async () => {
    await baseTest.teardown();
  });

  test('Add to cart', async () => {
    await cartobj.addProductToCart(config.product1, config.product2);
  })
  test('Validate items in cart', async () => {
    await cartobj.validateCart();
  })
  test('Delete items in cart', async () => {
    await cartobj.deleteFromCart(config.product2);
  })
})
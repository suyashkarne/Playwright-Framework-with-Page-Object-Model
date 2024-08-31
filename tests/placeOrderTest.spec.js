const { test, expect } = require("playwright/test");
const { config } = require("../config/config");
const { commonMethods } = require("../utility/commonMethods");
const { placeOrder } = require("../pageObjects/placeOrder");
const { cart } = require("../pageObjects/cart");
const { baseTest } = require("../utility/baseTest");


class placeOrderTest extends baseTest {
  // You can add additional methods or override static methods if needed
}

test.describe('Place Order Tests', () => {

  let placeOrderobj, cartobj;
  test.beforeAll(async ({ browser }) => {
    await baseTest.setup({ browser });
    placeOrderobj = new placeOrder(baseTest.page, baseTest.cm);
    cartobj = new cart(baseTest.page, baseTest.cm);
  });

  test.afterAll(async () => {
    await baseTest.teardown();
  });

  test('Place Order Validation', async () => {
    await cartobj.addProductToCart(config.product1, config.product2);
    await placeOrderobj.placeOrderViaCart();
  })
})
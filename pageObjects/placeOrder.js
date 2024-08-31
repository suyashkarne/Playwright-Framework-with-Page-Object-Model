const{test,expect}=require("playwright/test");
const { config } = require("../config/config");
const { placeOrderLocators } = require("../locators/placeOrderLocators");

exports.placeOrder=class placeOrder{
    constructor(page,cm)
    {
        this.page=page;
        this.cm=cm;
        this.placeOrder=placeOrderLocators.placeOrder;
        this.name=placeOrderLocators.name;
        this.country=placeOrderLocators.country;
        this.city=placeOrderLocators.city;
        this.creditCard=placeOrderLocators.creditCard;
        this.month=placeOrderLocators.month;
        this.year=placeOrderLocators.year;
        this.successMsg=placeOrderLocators.successMsg;
        this.okButton=placeOrderLocators.okButton;
        this.purchase=placeOrderLocators.purchase;
    }

    async placeOrderViaCart(){
        await this.cm.setupAlertHandler(this.page,config.purchaseWithoutDetailsAlert);
        await this.page.waitForTimeout(3000);
        await this.page.click(this.placeOrder);
        await this.page.click(this.purchase);
        await this.page.fill(this.name,config.name);
        await this.page.fill(this.country,config.country);
        await this.page.fill(this.city,config.city);
        await this.page.fill(this.creditCard,config.creditCard);
        await this.page.fill(this.month,config.month);
        await this.page.fill(this.year,config.year);
        await this.page.click(this.purchase);

        await expect(await this.page.locator(this.successMsg)).toHaveText(config.orderPlacedMsg);
        await this.page.click(this.okButton);

    }
}
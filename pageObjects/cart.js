const{test,expect}=require("playwright/test");
const { config } = require("../config/config");
const { cartLocators } = require("../locators/cartLocators");

exports.cart=class cart{

    constructor(page,cm)
    {
        this.page=page;
        this.cm=cm;
        this.addToCart=cartLocators.addToCart;
        this.home=cartLocators.home;
        this.cart=cartLocators.cart;
        this.placeOrder=cartLocators.placeOrder;
        this.name=cartLocators.name;
        this.country=cartLocators.country;
        this.city=cartLocators.city;
        this.card=cartLocators.card;
        this.month=cartLocators.month;
        this.year=cartLocators.year;
        this.noOfProducts=cartLocators.noOfProducts;
        this.productPrice=cartLocators.productPrice;
        this.total=cartLocators.total;
        this.rowsInCart=cartLocators.rowsInCart;
        this.cartDelete=cartLocators.cartDelete;
        this.productPriceInTable=cartLocators.productPriceInTable;
        this.sum=0;
    }

    async addProductToCart(product1,product2){

        this.cm.setupAlertHandler(this.page,config.productAddedAlert);

        await this.page.click(await this.cm.generateDynamicXpath(product1));
        let textContent=await this.page.locator(this.productPrice).textContent();
        await this.page.click(this.addToCart);
        this.sum=this.sum+await this.cm.removeNonDigitChar(textContent);
        const product1Price=this.cm.removeNonDigitChar(textContent);
        await this.page.click(this.home);
        await this.page.click(await this.cm.generateDynamicXpath(product2));
        textContent=await this.page.locator(this.productPrice).textContent();
        await this.page.click(this.addToCart);
        this.sum=this.sum+await this.cm.removeNonDigitChar(textContent);
        const product2Price=this.cm.removeNonDigitChar(textContent);
        await this.page.click(this.addToCart);
        await this.page.waitForTimeout(1000);
        this.sum=this.sum+await this.cm.removeNonDigitChar(textContent);
        await this.page.click(this.cart);

    }

    async validateCart(){
        await expect(await this.page.locator(this.noOfProducts)).toHaveCount(3);
        await expect(await this.cm.removeNonDigitChar(await this.page.locator(this.total).textContent())).toEqual(this.sum);
    }

    async deleteFromCart(product2){
        const rows=await this.page.locator(this.rowsInCart);
        let product2price=await this.cm.removeNonDigitChar(await this.cm.textFromTable(rows,this.page,product2,this.productPriceInTable));
        await this.cm.clickElementInTable(rows,this.page,product2,this.cartDelete);
        await this.page.waitForSelector(this.total);
        this.sum=this.sum-await product2price;
        await this.page.waitForTimeout(5000);
        await expect (await this.cm.removeNonDigitChar(await this.page.locator(this.total).textContent())).toEqual(this.sum);
    }
}
const{test,expect}=require("playwright/test");
const { config } = require("../config/config");
const { contactLocators } = require("../locators/contactLocators");

exports.contact=class contact{

    constructor(page,cm)
    {
        this.page=page;
        this.cm=cm;
        this.contact=contactLocators.contact;
        this.email=contactLocators.email;
        this.name=contactLocators.name;
        this.message=contactLocators.message;
        this.sendMessage=contactLocators.sendMessage;
    }

    async sendMessageValidation(email,name,message){

        this.cm.setupAlertHandler(this.page,config.messageSentAlert);

        await this.page.click(this.contact);
        await this.page.fill(this.email,email);
        await this.page.fill(this.name,name);
        await this.page.fill(this.message,message);

        await this.page.click(this.sendMessage);

    }
}
const{test,expect}=require("playwright/test");
const { config } = require("../config/config");
const { aboutUsLocators } = require("../locators/aboutUsLocators");

exports.aboutUs=class aboutUs{

    constructor(page)
    {
        this.page=page;
        this.aboutUs=aboutUsLocators.aboutUs;
        this.aboutUsPopup=aboutUsLocators.aboutUsPopup;
        this.aboutUsVideo=aboutUsLocators.aboutUsVideo;
        this.aboutUsClose=aboutUsLocators.aboutUsClose;
    }

    async aboutUsValidation(){
        await this.page.click(this.aboutUs);
        await expect(this.page.locator(this.aboutUsPopup)).toBeVisible();
        await expect(this.page.locator(this.aboutUsVideo)).toBeVisible();
        await this.page.click(this.aboutUsClose);
    }
}
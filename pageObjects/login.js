const{test,expect}=require("playwright/test");
const { config } = require("../config/config");
const { loginLocators } = require("../locators/loginLocators");

exports.login=class login{

    constructor(page,cm)
    {
        this.page=page;
        this.cm=cm;
        this.login=loginLocators.login;
        this.username=loginLocators.username;
        this.password=loginLocators.password;
        this.loginPopup=loginLocators.loginPopup;
        this.welcomeMsg=loginLocators.welcomeMsg;
        this.logout=loginLocators.logout;
    }


async loginApp(uname,pwd){
    await this.page.click(this.login);
    await this.page.fill(this.username,uname);
    await this.page.fill(this.password,pwd);
    await this.page.click(this.loginPopup);

    await expect(await this.page.locator(this.welcomeMsg)).toContainText("Welcome "+uname);
}

async logoutApp(product1,product2){
    await this.page.click(this.logout);
    
}
}
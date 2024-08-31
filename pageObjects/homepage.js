const{test,expect}=require("playwright/test");
const { homepageLocators } = require("../locators/homepageLocators");
const { config } = require("../config/config");

exports.homepage=class homepage{

    constructor(page,cm)
    {
        this.page=page;
        this.cm=cm;
        this.url=config.url,
        this.title=config.title;
        this.logoHeader=homepageLocators.logoHeader;
        this.logoFooter=homepageLocators.logoFooter;
        this.productCategory=homepageLocators.productCategory;
        this.products=homepageLocators.products;
        this.prevButton=homepageLocators.prevButton;
        this.nextButton=homepageLocators.nextButton;
        this.headerMenu=homepageLocators.headerMenu;
    }

    async homePageValidation(headerMenuOptions,categoryOptions){
        await expect(this.page).toHaveURL(this.url);
        await expect(this.page).toHaveTitle(this.title);
        await expect(this.page.locator(this.logoHeader)).toBeVisible();
        await expect(this.page.locator(this.logoFooter)).toBeVisible();
        await expect(this.page.locator(this.prevButton)).toBeVisible();
        await expect(this.page.locator(this.nextButton)).toBeVisible();

        const headerMenuList=await this.page.$$(this.headerMenu);
        let headerMenuTextContent=[];
        for(const list of headerMenuList)
        {
            await headerMenuTextContent.push(await list.textContent());
        }
        headerMenuTextContent=await this.cm.removeWhiteSpaces(headerMenuTextContent);

        for(const option of headerMenuOptions)
        {
            await expect(headerMenuTextContent.includes(option)).toBeTruthy();
        }

        const productCategoryList=await this.page.$$(this.productCategory);
        let productCategoryTextContent=[];
        for(const list of productCategoryList)
            {
                await productCategoryTextContent.push(await list.textContent());
            }
        for(const option of categoryOptions)
            {
                await expect(productCategoryTextContent.includes(option)).toBeTruthy();
            }
            await this.page.waitForSelector(this.products);
            const productsList=await this.page.$$(this.products);
            await expect(productsList.length).toBe(9);
    }

    }

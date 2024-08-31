const { config } = require('../config/config');
const { commonMethods } = require('../utility/commonMethods');

exports.baseTest=class baseTest{

    static cm = null; // Static property for common methods
    static page = null;

    static async setup({ browser }) {
        this.cm = new commonMethods();
        this.page = await browser.newPage();
        await this.page.goto(config.url);
    }

    static async teardown() {
        await this.page.close();
        this.page = null;
    }
}
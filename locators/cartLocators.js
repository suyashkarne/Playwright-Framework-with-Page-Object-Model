exports.cartLocators= class cartLocators {
    static addToCart="//a[text()='Add to cart']";
    static home="//a[contains(text(),'Home')]";
    static cart="//a[text()='Cart']";
    static noOfProducts="//tbody[@id='tbodyid']/tr";
    static productPrice="//h3[@class='price-container']";
    static total="//h3[@id='totalp']";
    static rowsInCart="//tbody[@id='tbodyid']/tr";
    static cartDelete="//a[text()='Delete']";
    static productPriceInTable="(//tr[@class='success']/td)[3]";
}
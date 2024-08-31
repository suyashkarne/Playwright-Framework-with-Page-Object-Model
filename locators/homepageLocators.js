exports.homepageLocators= class homepageLocators {
    static logoHeader="(//img[@src='bm.png'])[1]";
    static logoFooter="(//img[@src='bm.png'])[2]";
    static productCategory="//a[@id='itemc']";
    static products="//a[@class='hrefch']";
    static prevButton="//button[text()='Previous']";
    static nextButton="//button[text()='Next']";
    static headerMenu="//li[@class='nav-item' or @class='nav-item active']";
  }
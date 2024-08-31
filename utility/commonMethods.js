const{test,expect}=require("playwright/test");

exports.commonMethods=class commonMethods{

async removeWhiteSpaces(array){

    return array.map(element => 
        element.replace(/\s+/g, ' ').trim()
    );
}
async generateDynamicXpath(text){
    return `//*[text()='${text}']`;
}
async removeNonDigitChar(text)
{
    return parseInt(text.replace(/\D+/g, ''), 10);;
}
async textFromTable(rows,page,name,element)
{
    const matchedRow=rows.filter({
        has:await page.locator("td"),
        hasText:name
})
return await matchedRow.locator(element).textContent();
}
async clickElementInTable(rows,page,name,element){
    const matchedRow=rows.filter({
        has:await page.locator("td"),
        hasText:name
})
const FirstMatchedRow = await matchedRow.first();
await FirstMatchedRow.locator(element).click();
}
async setupAlertHandler(page,msg){
        const handleAlert=async(dialog)=>{
            expect (dialog.type()).toContain('alert');
            expect (dialog.message()).toContain(msg);
            await dialog.accept();
          }
        page.on('dialog',handleAlert);
        page.off('dialog',handleAlert);
}
async removeAlerthandler(page){
    if (dialogHandler) {
        page.off('dialog', dialogHandler);
        dialogHandler = null;
      }
}
}
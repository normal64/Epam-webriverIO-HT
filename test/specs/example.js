const { findByID } = require('./helper');
describe("1st webdriverIO test", () =>{
    it("should open Practice Form web page", ()=>{
        browser.url("https://demoqa.com/automation-practice-form")
        browser.setWindowSize(1920, 1600)
        expect(browser).toHaveTitle("DEMOQA")
    })
    it("should fill Practice Form with data",async ()=>{
  
      await $('#firstName').setValue("Denis")
      await $('#lastName').setValue("Poplavskii")
      await $('#userEmail').setValue("poplavskii@epam.pl")
      
      //await $('#gender-radio-1').click()
      //click intercepted by label element, click on label doesn't check the radio button. is JS workaround correct?
      const radioButton = await $('#gender-radio-1');
      browser.execute((element) => {
        element.click();
      }, radioButton);
      
      await $('#userEmail').setValue("poplavskii@epam.pl")

      await findByID("userNumber").setValue("1234567890")
      //await findByID("dateOfBirthInput").keys("09 Aug 2022")
      //await findByID("dateOfBirthInput").setValue("09 Aug 2022")
      //click doesnt open date picker . setvalue directly sets a mess
      

      //test runs so fast i cant track what is going manually. how to double check myself? temporary wait commands?
      browser.saveScreenshot('screenshot.png'); 
      //my solution
    })
    it("should submit form with a ness.data filled", async ()=>{
      await findByID("submit").click()
    
      const modal = await findByID("example-modal-sizes-title-lg")
      
      console.log(`modal`, modal); 
      await modal.isExisting()
      await expect(modal).toHaveTextContaining('Thanks for submitting the form')
      browser.saveScreenshot('screenshot.png'); 
  })
})
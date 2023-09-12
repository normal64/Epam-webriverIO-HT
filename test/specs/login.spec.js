//const LoginPage = require("..pages/login.page.js")
const LoginPage = require('../pages/login.page')
describe("Demo test", () =>{

    it("Login Test", async ()=>{
        browser.url('https://the-internet.herokuapp.com/login')
        await LoginPage.login("tomsmith",'SuperSecretPassword!')
    })
})
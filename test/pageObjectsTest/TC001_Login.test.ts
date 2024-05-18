import Env from "../../utility/environment";
import HeaderPage from "../../page/Header.page";
import LoginPage from "../../page/Login.page";
import CommonFunctions from "../../page/common.page";
import * as data from "../../data/Login.cred.json"
import { Page } from "playwright";

declare const page: Page;

describe("TC001", () => {
        // my pages
    let header : HeaderPage;
    let login : LoginPage;
    let common : CommonFunctions;

    beforeAll(async() => {
        await page.goto(Env.test);
        header = new HeaderPage(page);
        login = new LoginPage(page);
        common = new CommonFunctions(page);

        
    },200000)

    // xtest("Login positive _ JIRA101", async() => {
    //     // expect(page.url()).toBe("https://letcode.in/");
    //     await header.clickLoginLink();
    //     // expect(page.url()).toBe('https://letcode.in/signin');
    //     await login.enterUserName('koushik1@letcode.in');
    //     await login.enterPassword('Pass123$');
    //     await login.clickLoginBtn();
    //     await common.waitForToaster()
    //     const toaster = await common.toaster();
    //     if(toaster){
    //     const toasterTextContent = await toaster.textContent();
    //     expect(toasterTextContent).toContain('Welcome');
    //     }  else {
    //         throw new Error("Toaster element not found");
    //     }
    //     await header.clickSignOutLink();

    // },200000);

    test("Login positive _ JIRA101", async() => {
        // expect(page.url()).toBe("https://letcode.in/");
        await header.clickLoginLink();
        // expect(page.url()).toBe('https://letcode.in/signin');
        await login.enterUserName(data.email);
        await login.enterPassword(data.pass);
        await login.clickLoginBtn();
        await common.waitForToaster()
        const toaster = await common.toaster();
    
        if(toaster){
        const toasterTextContent = await toaster.textContent();
        expect(toasterTextContent).toContain('Welcome');
        }  else {
            throw new Error("Toaster element not found");
        }
        await header.clickSignOutLink();

    },200000);
    // test("Login again", async () => {
    //     await login.login("koushik1@letcode.in", "Pass123$");
    //     await header.clickSignOutLink();
    // })

    afterAll(async() => {
        await page.close();
        await context.close();
        await browser.close();
    } )
    

})


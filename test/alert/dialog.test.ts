import { Browser, BrowserContext, Page, chromium } from "playwright"

describe("Learn how to handle alert", () =>{

    let browser : Browser;
    let context: BrowserContext;
    let page : Page;

    beforeAll(async() => {
        browser = await chromium.launch({
            headless:false
        });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://letcode.in/alert");       
        
    }, 20000)
    test("Handle dialogs", async() => {
        const ele = await page.$("#prompt");
       page.on("dialog", (dialog) => {
        console.log('Message: ' + dialog.message());
        console.log('Defaul Vaule: ' + dialog.defaultValue());
        console.log('Type: ' + dialog.type());
        dialog.accept("Hello Koushik")
       })
       await ele?.click();
    })
    

    afterAll(async() => {
        await page.close();
        await context.close();
        await browser.close();
    } )
})
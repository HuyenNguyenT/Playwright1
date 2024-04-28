import { Browser, BrowserContext, Page, chromium } from "playwright"

describe("Learn how to handle input fileds", () =>{

    let browser : Browser;
    let context: BrowserContext;
    let page : Page;

    beforeAll(async() => {
        browser = await chromium.launch({
            headless:false
        });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://letcode.in/edit");       
        
    }, 20000)
    test("Enter your full Name", async() => {
        const name = await page.$("#fullName")
        await name?.type("Koushik Chatterjee")
    })
    test("Append a text and press keyboard tab", async() => {
        const join = await page.$("#join")
        await join?.focus();
        await page.keyboard.press("End");
        await join?.type(" Human")
    })

    test("What is inside the text box", async () => {
        const text = await page.getAttribute("#getMe", "value");
        console.log(text);
    })

    test("Clear the text", async () => {
        await page.fill("//input[@value='Koushik Chatterjee']", "");
    })

    afterAll(async() => {
        await page.close();
        await context.close();
        await browser.close();
    } )
})
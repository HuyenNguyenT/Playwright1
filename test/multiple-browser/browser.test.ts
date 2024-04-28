import { Browser, BrowserContext, Page, chromium,firefox } from "playwright"

describe("Lanuch local browser", () =>{

    let browser : Browser;
    let context: BrowserContext;
    let page : Page;

    beforeAll(async() => {
        browser = await chromium.launch({
            headless:false,
            //run with specific browser
            // channel: "msedge"
            //run with local browser version 
            executablePath : "C:\\Program Files\\Google/Chrome\\Application/chrome.exe"

        });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://letcode.in/");       
        
    });
    test("Goto Letcode and version", async () => {
        const title = await page.title();
        console.log(title);
        expect(title).toBe("LetCode with Koushik")
    })

})

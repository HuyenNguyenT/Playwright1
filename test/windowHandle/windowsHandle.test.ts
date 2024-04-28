import { Browser, BrowserContext, Page, chromium } from "playwright"

describe("Learn how to handle windows", () =>{

    let browser : Browser;
    let context: BrowserContext;
    let page : Page;

    beforeAll(async() => {
        browser = await chromium.launch({
            headless:false
        });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://letcode.in/windows");       
        
    }, 20000)

    test("Home Page", async () =>{
        console.log(await page.title())
        expect(await page.title()).toBe("Window handling - LetCode");
        
    })

    xtest("Single page handling", async() => {
        const [newWindow] = await Promise.all([
            context.waitForEvent("page"),
            await page.click("#home")
        ]);
        await newWindow.waitForLoadState();
        expect(newWindow.url()).toContain("test");   
        // Click on the "Log in" link
        await newWindow.click('"Log in"');
        expect(newWindow.url()).toContain("signin");
    
        // Bring the main page to the front
        await page.bringToFront();
        // Click on the "Product" link
        await page.click('[routerlink="/letxpath"]');
    }, 100000);
    
    test("Multipage handling", async() => {
        const [multipage] = await Promise.all([
            context.waitForEvent("page"),
            await page.click("#multi")
        ]);
        await multipage.waitForLoadState();
        const allwindows = multipage.context().pages();
        console.log("no.of page: " + allwindows.length);
        allwindows.forEach(page => {
            console.log(page.url());

        });
        await allwindows[1].bringToFront()
        allwindows[1].on("dialog", (dialog) => {
            console.log('Message: ' + dialog.message());
            dialog.accept();

        })
        await allwindows[1].click("id=accept");
    })

    afterAll(async() => {
        await page.close();
        await context.close();
        await browser.close();
    } )

})
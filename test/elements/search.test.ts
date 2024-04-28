import { Browser, BrowserContext, Page, chromium } from "playwright"

describe("Learn interact with frames", () =>{

    let browser : Browser;
    let context: BrowserContext;
    let page : Page;

    beforeAll(async() => {
        browser = await chromium.launch({
            headless:false
        });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://letcode.in/elements");       
        
    }, 20000)

    test("Enter Git name", async () => {
        const header = await page.$("nav[role='navigation']")
        //capture only header
        header?.screenshot({path : "header.png"})
        const ele = await page.$("input[name='username']")
        await ele?.fill("test");
        ele?.press("Enter");
    })
    test("print all the repos", async() =>{
        //wait for search before caculate result length
        await page.waitForSelector("app-gitrepos ol li",{timeout : 5000})
        const repos = await page.$$("app-gitrepos ol li")
        console.log(repos.length);
        //for await
        // for ( const repo of repos){
        //     console.log(await repo.innerText());
        // }

        const allUrl = await Promise.all(repos.map(async(repo, i) => {
            return await repo.innerText()
        }))
        console.log(allUrl);
        await page.screenshot({ path: "fs.png", fullPage: true });

    })
    afterEach(async() => {
        await page.screenshot({ path: Date.now() + 'screenshot.png' });
    })

    afterAll(async() => {
        await page.close();
        await context.close();
        await browser.close();
    } )


})
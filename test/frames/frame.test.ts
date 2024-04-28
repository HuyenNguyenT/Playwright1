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
        await page.goto("https://letcode.in/frame");       
        
    }, 20000)
    test("Interact with frames", async() => {
        const frame = page.frame({name: "firstFr"});
        if(frame != null){
            await frame.fill("input[name='fname']", "Test");
            await frame.fill("input[name='lname']", "Nguyen");

            //inner frame
            const frames = frame.childFrames();
            console.log("No.frame: " + frames.length)
            if(frames !=null){
                await frames[1].fill("input[name='email']", "test@gmail.com")            
            } else {
                console.log("Wrong frame");
            }
            //return to parent frame
            const parent = frames[1].parentFrame()
            await parent?.fill("input[name='lname']", "Le");
        } else throw new Error("No such frame")
    })

    afterAll(async() => {
        await page.close();
        await context.close();
        await browser.close();
    } )

})
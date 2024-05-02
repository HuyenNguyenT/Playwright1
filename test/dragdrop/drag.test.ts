import { Browser, BrowserContext, Page, chromium} from "playwright"

describe("Dra and Drop", () =>{

    let browser : Browser;
    let context: BrowserContext;
    let page : Page;

    beforeAll(async() => {
        browser = await chromium.launch({
            headless:false,
        });
        context = await browser.newContext();
        page = await context.newPage();
              
        
    }),2000000;
    xtest("my test", async () => {
        await page.goto("https://letcode.in/dropable"); 
        const src = await page.$("#draggable");
        const dst = await page.$("#droppable");
        if(src && dst){
            const srcBound = await src.boundingBox();
            const dstBound = await dst.boundingBox()
            if(srcBound && dstBound ) {
                await page.mouse.move(srcBound.x, srcBound.y);
                await page.mouse.down();
                await page.mouse.move(dstBound.x  , dstBound.y);
                await page.mouse.up();
            } else {
                throw new Error("No element")
            }

        } else{
            throw new Error("One or more elements not found");
        }
        
       
    },200000)

    test("drag and drop with frame", async () => {
        await page.goto("https://jqueryui.com/droppable/");
        const frame   = await page.frame({url: "https://jqueryui.com/resources/demos/droppable/default.html"})
       if(frame){
        const src = await frame.$("#draggable");
        const dst = await frame.$("#droppable");
        if(src && dst){
            const srcBound = await src.boundingBox();
            const dstBound = await dst.boundingBox()
            if(srcBound && dstBound ) {
                await page.mouse.move(srcBound.x, srcBound.y);
                await page.mouse.down();
                await page.mouse.move(dstBound.x  , dstBound.y);
                await page.mouse.up();
            } else {
                throw new Error("No element")
            }

        } else{
            throw new Error("One or more elements not found");
        }
    }
        
       
    },200000)

    afterAll(async() => {
        await page.close();
        await context.close();
        await browser.close();
    } )
})

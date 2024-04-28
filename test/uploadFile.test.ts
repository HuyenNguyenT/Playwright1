import { chromium } from "playwright";

describe('Upload File', () => {
    const filePath0 = '../videos/Test.png';
    const filePath1 = '../videos/CCClientLoginPage.txt';
    // xtest("Upload file using set input files", async() => {
    //     const browser = await chromium.launch({
    //         headless: false
    //     })
    //     const context = await browser.newContext();
    //     const page = await context.newPage();
    //     await page.goto('https://formy-project.herokuapp.com/fileupload');
    //     await page.setInputFiles("input[class='input-ghost']",filePath0);
    //     await browser.close()
    // },200000)

    describe('Upload File', () => {
        const filePath0 = '../videos/Test.png';
        const filePath1 = '../videos/CCClientLoginPage.txt';
        test("Upload using on fuction", async () => {
            const browser = await chromium.launch({
                headless: false
            });
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto('https://the-internet.herokuapp.com/upload');
            page.on("filechooser", async (filechooser) => {
                await filechooser.setFiles(filePath0);
            });
            await page.click(".example + div#drag-drop-upload", { force: true });
        }, 200000);
    })
})
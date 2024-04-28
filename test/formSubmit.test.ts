import {chromium} from "playwright";

describe('Form Record', () => {
test('Form Record',async() => {
  const browser = await chromium.launch({
    headless: false
})
  const context = await browser.newContext({
    recordVideo:{
      dir : "./videos/",
      size: {
        width : 800,
        height: 600
      }
      
    }

  });
  const page = await context.newPage();
  await page.goto('https://letcode.in/');
  await page.getByRole('link', { name: 'Work-Space' }).click();
  await page.getByRole('link', { name: 'All in One' }).click();
  await page.locator('#firstname').click();
  await page.locator('#firstname').fill('koushik');
  await page.locator('#lasttname').click();
  await page.locator('#lasttname').fill('chatterjee');
  await page.getByPlaceholder('Email input').fill('koushik350@gmail.com');
  await page.getByPlaceholder('Phone Number').fill('9999999999');
  await page.getByPlaceholder('Address Line-1').fill('adyar');
  await page.getByPlaceholder('Address Line-2').fill('chennail');
  await page.getByPlaceholder('State').fill('TN');
  await page.getByPlaceholder('Postal-Code').fill('600113');
  await page.locator('#Date').fill('1999-11-12');
  await page.getByLabel('Male', { exact: true }).check();
  await page.getByLabel('I agree to the terms and').check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.close();
  await context.close();
  await browser.close();
},2000000)
})
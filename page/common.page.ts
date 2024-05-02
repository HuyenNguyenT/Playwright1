import { Page } from "playwright";
export default class CommonFuntions {
    private page : Page;

constructor(page : Page) {
    this.page = page;
}
//  public get toaster () {
//     return this.page.$("div[role='alertdialog']")
//  }

 public async waitForToaster(): Promise<void> {
    await this.page.waitForSelector("div[role='alertdialog']");
}

toaster = async() =>  await this.page.$("div[role='alertdialog']")



}



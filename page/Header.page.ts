import { Page } from 'playwright';
export default class HeaderPage {
    private page : Page;

    constructor(page : Page){
        this.page = page;
    }


    public get eleLoginBtn(){
        const loginBtn = this.page.$("text=Log in")
        if(loginBtn != null){
            return loginBtn;
        } else throw new Error("No Element")
    }

    public get eleSignOutBtn(){
        const signouEle = this.page.$("text=Sign out")
        if(signouEle != null){
            return signouEle;
        } else throw new Error("No Element")
    }
    
    public async clickLoginLink() {
        //avoid page load time too long
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("text=Log in")
        ])
        // const ele = await this.eleLoginBtn;
        // await ele?.click();
    }

    public async clickSignOutLink() {
        const ele = await this.eleSignOutBtn;
        await ele?.click();
    }
}

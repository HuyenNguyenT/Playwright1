import { Page } from 'playwright';
export default class LoginPage {
    private page: Page;
    constructor(page : Page) {
        this.page = page;
    }
    // public get eleEmailTextFeild() {
    //     return this.page.$("input[name='email']")
    // }

    eleEmailTextFeild = async () => await this.page.$("input[name='email']");
    elePassTextFeild = async () => await this.page.$("input[name='password']");

    // public get elePassTextFeild() {
    //     return this.page.$("input[name='password']")
    // }

    public get eleLginBtn() {
        return this.page.$("//button[text()='LOGIN']")
    }

    // public async enterUserName (name : string) {
    //     const ele = await this.eleEmailTextFeild;
    //     await ele?.fill(name);
    // }

    // public async enterPassword (pass : string) {
    //     const ele = await this.elePassTextFeild;
    //     await ele?.fill(pass);
    // }

    // public async clickLoginBtn () {
    //     const ele = await this.eleLginBtn;
    //     await ele?.click();
    // }

    // public async login(username : string, pass : string ) {
    //     await this.enterUserName(username);
    //     await this.enterPassword(pass);
    //     await this.clickLoginBtn()
    // }

    public async enterUserName (name : string) {
        const ele = await this.eleEmailTextFeild();
        if(ele != null)
            await ele.fill(name);
        else throw new Error("No element");
    }

    public async enterPassword (pass : string) {
        const ele = await this.elePassTextFeild();
        await ele?.fill(pass);
    }

    public async clickLoginBtn () {
        const ele = await this.eleLginBtn;
        await ele?.click();
    }

    public async login(username : string, pass : string ) {
        await this.enterUserName(username);
        await this.enterPassword(pass);
        await this.clickLoginBtn()
    }

 }
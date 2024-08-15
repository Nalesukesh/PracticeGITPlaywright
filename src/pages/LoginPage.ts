import {Locator, Page} from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.locator("id=user-name");
        this.password = page.locator("id=password");
        this.loginButton = page.locator("id=login-button");
    }

    async OpenApp(){
        await this.page.goto("https://www.saucedemo.com/v1/");
    }

    async Login(userVal: string, passVal: string){
        await this.username.fill(userVal);
        await this.password.fill(passVal);
        await this.loginButton.click()
    }
}
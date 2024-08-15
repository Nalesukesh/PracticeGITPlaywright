import {Locator, Page} from "@playwright/test";

export class LoginPageLambda{
    readonly page : Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.locator("id=input-email");
        this.password = page.locator("id=input-password");
        this.loginButton = page.locator("xpath=//input[@value='Login']");
    }
    async openapp(){
        await this.page.setViewportSize({width:1366, height: 728});
        await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
        
    }
    async loginLambda(user: string, pass: string){
        await this.username.clear();
        await this.username.fill(user);
        await this.password.clear();
        await this.password.fill(pass);
        await this.loginButton.click()
    }

}
import {Locator, Page} from "@playwright/test";


export class RegPageLambda{
    readonly page: Page;
    readonly FirstName: Locator;
    readonly LastName: Locator;
    readonly Email: Locator;
    readonly TelePhone: Locator;
    readonly Password: Locator;
    readonly ConfmPass: Locator;
    readonly TickButton: Locator;
    readonly ConnButton: Locator;
    readonly Confmsg: Locator;

    constructor(page: Page){
        this.page = page;
        this.FirstName = page.locator("id=input-firstname")
        this.LastName = page.locator("id=input-lastname");
        this.Email = page.locator("id=input-email");
        this.TelePhone= page.locator("id=input-telephone");
        this.Password = page.locator("id=input-password");
        this.ConfmPass = page.locator("id=input-confirm");
        this.TickButton = page.locator("xpath=//label[@for='input-agree']");
        this.ConnButton = page.locator("xpath=//input[@value='Continue']");
        this.Confmsg = page.getByRole('heading', { name: ' Your Account Has Been' })
    }

    async regPageOpn(){
        await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");
    }

    async registerPage(f_name: string, l_name: string, e_mail: string, t_num: string, pass: string, con_pass: string){
        await this.FirstName.fill(f_name);
        await this.LastName.fill(l_name);
        await this.Email.fill(e_mail);
        await this.TelePhone.fill(t_num);
        await this.Password.fill(pass);
        await this.ConfmPass.fill(con_pass);
        await this.TickButton.click();
        await this.ConnButton.click();

    }


}
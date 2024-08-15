import {Locator, Page} from "@playwright/test";

export class CartPageLambda{
    readonly page: Page;
    readonly ProductLink : Locator;
    readonly ClickProduct : Locator;
    readonly AddClickProd: Locator;
    readonly AddProd: Locator;
    readonly ToCart: Locator;
    readonly ProdTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.ProductLink = page.getByRole('button', { name: 'Mega Menu' });
        this.ClickProduct = page.getByRole('link', { name: 'Headphones' });
        this.AddClickProd = page.getByRole('link', { name: 'HTC Touch HD HTC Touch HD HTC' });
        this.AddProd = page.getByRole('button', { name: 'Add to Cart' });
        this.ToCart = page.getByRole('link', { name: 'View Cart ' });
        this.ProdTitle= page.locator("xpath=//td[@class='text-left']//a[contains(text(),'HTC Touch HD')]")
    }
    async CartPage(){
        await this.ProductLink.hover();
        await this.ClickProduct.click();
        await this.AddClickProd.click();
        await this.AddProd.click();
        await this.ToCart.click();
    }

}
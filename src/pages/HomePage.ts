import {Locator, Page} from "@playwright/test";


export class HomePage{
    readonly page: Page;
    readonly HomePageTitle: Locator;
    readonly backpackAddtoCart: Locator;
    readonly backpackRemove: Locator;
    readonly CartIcon: Locator;
    
    constructor(page:Page){
        this.page = page;
        this.HomePageTitle = page.getByText('Products');
        this.backpackAddtoCart= page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button');
        this.backpackRemove = page.getByRole('button', { name: 'REMOVE' });
        this.CartIcon = page.locator("id=shopping_cart_container");
    }

    async AddTocart(){
        await this.backpackAddtoCart.click();
    }
    async CartItems(){
        await this.CartIcon.click();
    }
    async RemoveCard(){
        await this.backpackRemove.click();
    }
  

}
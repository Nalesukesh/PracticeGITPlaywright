import {expect, test} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { RegPageLambda } from "../pages/RegPageLambda";
import { LoginPageLambda } from "../pages/LoginPageLambda";
import { CartPageLambda } from "../pages/CartPageLambda";


test("Product VerF Test", async({page})=>{
    const loginObj = new LoginPage(page);
    await loginObj.OpenApp();
    console.log("Open the App..")
    await loginObj.Login("standard_user","secret_sauce");
    console.log("Login Successful..");
    const HomeObj = new HomePage(page);
    await expect(HomeObj.HomePageTitle).toHaveText("Products");
    await HomeObj.AddTocart();
    await expect(HomeObj.CartIcon).toHaveText("1");
    await expect(HomeObj.backpackRemove).toBeVisible();
    //await HomeObj.RemoveCard();
    await HomeObj.CartItems();
    await page.waitForTimeout(10000);

    const cartObj = new CartPage(page);
    await expect(cartObj.cartItemlink).toHaveText("Sauce Labs Backpack");
})

test("Registor Verification Test", async({page})=>{
    const regObj = new RegPageLambda(page);
    await regObj.regPageOpn();
    await regObj.registerPage("Sukesh","Nale","sukesh120@gmail.com","1234567890","Sukesh@123","Sukesh@123")
    await page.waitForTimeout(3000);
    const confTitle= await expect(regObj.Confmsg).toHaveText(" Your Account Has Been Created!");
    await page.waitForTimeout(5000);
    console.log(confTitle);
    console.log("Test Passed..")
    
})

test.only("Lambda login Test", async({page})=>{
    const lambdaloginObj = new LoginPageLambda(page);
    await lambdaloginObj.openapp();
    await lambdaloginObj.loginLambda("sukesh123@gmail.com","Sukesh@123");
    await page.waitForTimeout(5000);
    console.log("Login Success..")

    const lambdaProdObj = new CartPageLambda(page);
    await lambdaProdObj.CartPage();
    await expect(lambdaProdObj.ProdTitle).toHaveText('HTC Touch HD');
})



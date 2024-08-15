import { Locator, Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly cartItemlink: Locator;
  constructor(page: Page) {
    this.page = page;
    this.cartItemlink = page.getByRole("link", { name: "Sauce Labs Backpack" });
  }
}

import { Page, Locator } from "@playwright/test";
import { BasePage } from "@/pages/BasePage";

export class HomePage extends BasePage {
  postcodeTextInput: Locator;
  goButton: Locator;

  constructor(page: Page) {
    super(page);

    this.postcodeTextInput = page.getByRole("textbox", {
      name: "Add a postcode or address.",
    });
    this.goButton = page.getByRole("button", { name: "Go" });
  }

  /**
   * Navigates to the FixMyStreet homepage/landing page
   * @param url The url of the homepage
   * @example await homePage.goto()
   */
  async goto(url: string = "/") {
    await this.page.goto(url);
  }
}

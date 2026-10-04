import { Page, Locator } from "@playwright/test";
import { BasePage } from "@/pages/BasePage.page";

export class HomePage extends BasePage {
  readonly postcodeTextInput: Locator;
  readonly pcInput: Locator;
  readonly goButton: Locator;

  constructor(page: Page) {
    super(page);

    this.postcodeTextInput = page.getByRole("textbox", { name: "Add a postcode or address." });
    //pc-hint area of the page, can be used to concatenate on to get other elements on the text input field area
    this.pcInput = page.locator("#pc");
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

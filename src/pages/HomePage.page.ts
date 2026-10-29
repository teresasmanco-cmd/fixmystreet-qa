import { Page, Locator } from "@playwright/test";
import { BasePage } from "@/pages/BasePage.page";

export class HomePage extends BasePage {
  readonly postcodeTextInput: Locator;
  readonly pcInput: Locator;
  readonly postCodeError: Locator;
  readonly goButton: Locator;

  constructor(page: Page) {
    super(page);

    this.postcodeTextInput = page.getByRole("textbox", { name: "Add a postcode or address." });
    //pc-hint area of the page, can be used to concatenate on to get other elements on the text input field area
    this.pcInput = page.locator("#pc");
    this.postCodeError = page.locator("#pc-error").filter({ hasText: /please enter a valid postcode or area/i });
    this.goButton = page.getByRole("button", { name: "Go" });
  }

  /**
   * Navigates to the FixMyStreet homepage/landing page
   * @param url The url of the homepage
   * @param options Additional options when navigating to the page
   * @example await homePage.goto()
   * @example await homePage.goto("/auth",{ waitUntil: "load", timeout: 10_000 } )
   */
  async goto(url: string = "/", options?: Parameters<Page["goto"]>[1]) {
    await this.page.goto(url, options);
  }
}

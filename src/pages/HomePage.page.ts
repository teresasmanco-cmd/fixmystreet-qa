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
   *Returns the browser validation message that is generated after the user presses 'Go' without entering a value in the text field
   * @returns a string 'validationText' with the validation message from the browser (ie: 'Please Fill in/out this field - depending on the browser)
   */
  async getValidationMessage(): Promise<string> {
    let validationText
    return validationText = this.pcInput.evaluate((element) => (element as HTMLInputElement).validationMessage);
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

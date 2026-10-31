import { Locator, Page } from "@playwright/test";

export class ToolbarComponent {
  readonly page: Page;

  readonly FixMyStreetLink: Locator;

  readonly SignInLink: Locator;
  readonly AllReportsLink: Locator;
  readonly LocalAlertsLink: Locator;
  readonly HelpLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.FixMyStreetLink = page.getByRole("link", { name: "FixMyStreet" });

    this.SignInLink = page.getByRole("link", { name: "Sign in" });
    this.AllReportsLink = page.getByRole("link", { name: "All reports" });
    this.LocalAlertsLink = page.getByRole("link", { name: "Local Alerts" });
    this.HelpLink = page.getByRole("link", { name: "Help" });
  }
}

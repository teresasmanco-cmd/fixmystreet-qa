import { Locator, Page } from "@playwright/test";
import { ToolbarComponent } from "@components/ToolbarComponent";

export class ReportsToolbarComponent extends ToolbarComponent {
  readonly ReportAProblemButton: Locator;

  constructor(page: Page) {
    super(page);

    this.ReportAProblemButton = page.getByRole("link", { name: "Report a problem" });
  }
}

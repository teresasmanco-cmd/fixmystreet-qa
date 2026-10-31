import { Page, Locator } from "@playwright/test";
import { BasePage } from "@/pages/BasePage.page";
import { ReportsToolbarComponent } from "@components/ReportsToolbarComponent";

export class ReportsPage extends BasePage {
  readonly ReportHeader: ReportsToolbarComponent;

  readonly ClickMapToReportAProblemHeading: Locator;
  readonly PublicDetailsHeader: Locator;

  readonly MapContainer: Locator;
  readonly ContinueButton: Locator;
  readonly SummariseTheProblemTextField: Locator;
  readonly ExplainWhatsWrongTextField: Locator;
  readonly NameField: Locator;
  readonly YourEmailField: Locator;
  readonly SubmitButton: Locator;
  
  readonly NearlyDone: Locator;

  constructor(page: Page) {
    super(page);

    this.ReportHeader = new ReportsToolbarComponent(page);

    this.ClickMapToReportAProblemHeading = page.getByRole("heading", { name: "Click map to report a problem" });
    this.PublicDetailsHeader = page.getByRole("heading", { name: "Public details" });

    this.MapContainer = page.locator("#map_box");
    this.ContinueButton = page.getByRole("button", { name: "Continue" });
    this.SummariseTheProblemTextField = page.getByRole("textbox", { name: "Summarise the problem" });
    this.ExplainWhatsWrongTextField = page.getByRole("textbox", { name: "Explain what’s wrong" });
    this.NameField = page.getByRole("textbox", { name: "Name" });
    this.YourEmailField = page.getByRole("textbox", { name: "Your email" });
    this.SubmitButton = page.getByRole("button", { name: "Submit" });

    this.NearlyDone = page.getByRole('heading', { name: 'Nearly done! Now check your' });
  }
}

import { test, expect } from "@/specs/fixtures";

test.describe("user reports", () => {
  //Signed in users and not signed in users get different paths - start with not signed in first
  test("verify full user journey and email confirmation", async ({ homePage, reportsPage, request, page }) => {
    await homePage.goto();
    //WIP, haven't done all the work here yet
    await test.step("enter a postcode in the text input field", async () => {
      await homePage.postcodeTextInput.click();
      await homePage.postcodeTextInput.fill("OX1 1AA");
      await homePage.goButton.click();
    });

    await test.step("report a problem in the reports page", async () => {
      //TODO: I noticed a spinner loader, should really check that that disappears instead, but I'll need to pick it later
      await expect(reportsPage.ClickMapToReportAProblemHeading, 'the "click map to report a problem" heading should be visible').toBeVisible();
      await reportsPage.MapContainer.click({ position: { x: 5, y: 85 } });
      await reportsPage.ContinueButton.click();
      //The continue Button appears again to allow for the user to upload an image
      await reportsPage.ContinueButton.click();
      await reportsPage.SummariseTheProblemTextField.fill("Golf Course");
      await reportsPage.ExplainWhatsWrongTextField.click();
      await reportsPage.ExplainWhatsWrongTextField.fill("I don't like golf courses.");
      await reportsPage.ContinueButton.click();
    });

    await test.step("enter user details", async () => {
      await reportsPage.NameField.fill("Test User");
      await reportsPage.YourEmailField.fill("test.email@test.com");
      await reportsPage.SubmitButton.click();
      await expect(reportsPage.NearlyDone).toBeVisible();
    });

    await test.step("get the confirmation email via api and navigate to the confirmation link", async () => {
      let emailBody = "";

      // Poll MailHog up to 10 times, waiting 1 second between tries until the email arrives
      for (let i = 0; i < 10; i++) {
        const response = await request.get("http://localhost:8025/api/v2/search?kind=to&query=test.email@test.com");
        expect(response.ok()).toBeTruthy();

        const data = await response.json();

        if (data.items && data.items.length > 0) {
          emailBody = data.items[0].Content.Body;
          break; // Exit the loop as soon as we find our email
        }

        // If the inbox is still empty, wait 1 second and loop again
        await page.waitForTimeout(1000);
      }

      // Ensure we actually found an email body before running the regex
      expect(emailBody).not.toBe("");

      const match = emailBody.match(/http:\/\/localhost:8000\/[^\s]+/);

      if (!match) {
        throw new Error("Confirmation URL link could not be found in the email body!");
      }

      await reportsPage.page.goto(match[0]);
    });
  });
});

import { test, expect } from "@/specs/fixtures";

test.describe("user reports", () => {
  test("verify that a validation message appears when no postcode is entered", { annotation: { type: "test", description: "001" } }, async ({ homePage }) => {
    await homePage.goto();

    await test.step('enter no postcode and press the "go" button', async () => {
      await homePage.goButton.click();
      expect(await homePage.getValidationMessage()).toMatch(/^Please fill/);
    });
  });

  test("verify that a user can successfully report a problem", async ({ homePage }) => {
    await homePage.goto();
    //WIP, haven't done all the work here yet
    await test.step("enter a postcode in the text input field", async () => {
      await homePage.postcodeTextInput.click();
      await homePage.postcodeTextInput.fill("");
      await homePage.goButton.click();
    });
  });
});

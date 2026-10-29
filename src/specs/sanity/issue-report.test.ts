import { test, expect } from "@/specs/fixtures";

test.describe("user reports", () => {
  test("verify that a validation message appears when no postcode is entered", { annotation: { type: "test", description: "001" } }, async ({ homePage }) => {
    await homePage.goto();

    await test.step('enter no postcode and press the "go" button', async () => {
      await homePage.goButton.click();

      //Evaluates the browser's native validity block and auto-retries until it's true
      await expect(homePage.postcodeTextInput).toHaveJSProperty("validity.valueMissing", true);
    });
  });

  test("verify that an invalid input triggers the correct message to the user", async ({homePage}) => {
        await homePage.goto();
        //WIP, haven't done all the work here yet
        await test.step("enter a postcode in the text input field", async () => {
          await homePage.postcodeTextInput.click();
          await homePage.postcodeTextInput.fill(".");
          await homePage.goButton.click();
        });

        await expect(homePage.postCodeError, 'error message should be visible').toBeVisible();
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

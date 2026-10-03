import { test, expect } from "@playwright/test";

test.describe("application status smoke suite", () => {
  test("verify the landing page is functional", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("FixMyStreet");
  });
});

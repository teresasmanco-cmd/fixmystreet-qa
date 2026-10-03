import { test, expect } from "@/specs/fixtures";

test.describe("application status smoke suite", () => {
  test("verify the landing page is functional", async ({ homePage }) => {
    await homePage.goto("/");

    await expect(homePage.page).toHaveTitle("FixMyStreet");
  });
});

import { test as base } from "@playwright/test";
import { HomePage } from "@/pages/HomePage.page";
import { ReportsPage } from "@/pages/ReportsPage.page";

type CustomFixtures = {
  homePage: HomePage;
  reportsPage: ReportsPage;
};

export const test = base.extend<CustomFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  reportsPage: async ({ page }, use) => {
    const reportsPage = new ReportsPage(page);
    await use(reportsPage);
  },
});

export { expect } from "@playwright/test";

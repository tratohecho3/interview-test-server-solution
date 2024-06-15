import { test, expect } from "@playwright/test";

test("should render the home page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.locator("h1")).toContainText("Income Tax Calculator");
  await expect(page.locator("p")).toContainText(
    "Find out how much your salary is after tax"
  );
  const grossIncomeLocator = page.locator("input[name='grossIncome']");
  await grossIncomeLocator.fill("25000");
  const taxYearLocator = page.locator("[aria-label='dropdown-tax-year']");
  await taxYearLocator.click();
  const option_locator = page.locator("li[role='option'][data-value='2019']");
  await option_locator.click();
  const button_locator = page.locator("button[aria-label='submit-button']");
  await button_locator.click();
});

import { test, expect } from "@playwright/test";

test("should render the home page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.locator("h1")).toContainText("Income Tax Calculator");
});

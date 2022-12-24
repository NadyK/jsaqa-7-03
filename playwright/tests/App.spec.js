const userData = require("../user.js");
const { test, expect } = require("@playwright/test");
test.setTimeout(55000);

test("Successful authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(userData.email);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(userData.password);
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page.locator("h2")).toHaveText(
    "Мои курсы и профессии");
 
});

test("Unsuccessful authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("dhcvsdhv@mfil.ghj");
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill("hghffhhh");
  await page.getByTestId("login-submit-btn").click();
  await expect(page.locator("[data-testid='login-error-hint']")).toHaveText(
    "Вы ввели неправильно логин или пароль");

});

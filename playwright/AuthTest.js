const { expect } = require("@playwright/test");
const { chromium } = require("playwright");
const userData = require("./user.js");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    //devtools: true
  });

  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(userData.email);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(userData.password);
  await page.click('[data-testid="login-submit-btn"]');
  //await expect(page.locator("h2")).toHaveText("Мои курсы и профессии");
  await page.pause();
  await browser.close();
})();

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true,
  });

  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("dhcvsdhv@mfil.ghj");
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill("hghffhhh");
  await page.getByTestId("login-submit-btn").click();
  await page.pause();
  await browser.close();
})();

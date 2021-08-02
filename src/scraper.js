const puppeteer = require("puppeteer");
const dotenv = require("dotenv").config();

var userName = process.env.USER_NAME;
var password = process.env.PASSWORD;

//get link and  retrun page instance
const initialize = async (uri) => {
  var browser = await puppeteer.launch({
    headless: false,
    args: [
      "--disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure",
    ],
  });
  var page = await browser.newPage();
  await page.goto(uri, { waitUnitl: "networkidle0", timeout: 0 });
  return page;
};

const logIn = async (page) => {
  //type user name
  await page.waitForSelector("input[name=userName]");
  await page.type("input[name=userName]", userName);

  //type password
  await page.waitForSelector("input[name=password]");
  await page.type("input[name=password]", password);

  //click login button
  await page.waitForSelector("button[type=button]");
  await page.click('button[type="button"]');
  return page;
};

const getDataFromTable = async (page) => {
  const data = await page.evaluate(() => {
    var query = ".t3-content table tbody tr";
    const tds = Array.from(document.querySelectorAll(query));
    return tds.map((td) => td.innerText);
  });
  return data;
};

module.exports = { initialize, logIn, getDataFromTable };

const puppeteer = require("puppeteer");

//get link and  retrun page instance
const initialize = async (uri) => {
  var browser = await puppeteer.launch({ headless: false });
  var page = await browser.newPage();
  await page.goto(uri, { waitUnitl: "networkidle0", timeout: 0 });
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

module.exports = { initialize, getDataFromTable };

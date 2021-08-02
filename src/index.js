const dotenv = require("dotenv").config();

const { initialize, logIn, getDataFromTable } = require("./scraper");

const pageUrl = process.env.PAGE_URL;
var gridPageUrl = process.env.GRID_PAGE_URL;

const scrapeData = async () => {
  //login
  var mainPage = await initialize(pageUrl);
  var login = await logIn(mainPage);

  //open grid page
  await login.waitFor(1500)
  var gridPage = await login.goto(gridPageUrl, {
    waitUnitl: "networkidle0",
    timeout: 0,
  });

};

scrapeData();

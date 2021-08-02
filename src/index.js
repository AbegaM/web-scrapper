const dotenv = require("dotenv").config()

const {initialize, logIn, getDataFromTable} = require("./scraper") 


const pageUrl = process.env.PAGE_URL


const scrapeData = async () => {
  var page = await initialize(pageUrl) 
  var login = await logIn(page)
  // var data = await getDataFromTable(page) 
  // console.log(data)
};

scrapeData();

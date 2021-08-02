const dotenv = require("dotenv").config()

const {initialize, getDataFromTable} = require("./scraper") 

const pageUrl = process.env.PAGE_URL


const scrapeData = async () => {
  var page = await initialize(pageUrl) 
  var data = await getDataFromTable(page) 
  console.log(data)
};

scrapeData();

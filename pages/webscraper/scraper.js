const scrape_data_1 = require("./website1");
// import { ScrapeData } from "./website1";
const cheerio = require("cheerio");
const axios = require("axios");

const url = [
  "https://www.mynimo.com/cebu/it-jobs/no-experience-jobs",
  "https://www.cebuitjobs.com/",
];
let jobTitle = "";
const sampleArray = new Set();

const x = [];

const fetchData = async () => {
  const [webUrl, webUrl2] = url;
  const result = await axios.get(webUrl);
  return cheerio.load(result.data);
};

const getResults = async () => {
  const jobData = [];
  const companyName = [];
  const locations = [];
  const positions = [];
  const $ = await fetchData();
  jobTitle = $(".browser-wrapper_container").text();

  $('div[id="job-browse-card"]')
    .find("div > div > div > a")
    .each(function (index, element) {
      positions.push($(element).text());
    });

  $('div[id="job-browse-card"]')
    .find("div > div > div > div > span > .verified-employer-new-info")
    .each(function (index, element) {
      companyName.push($(element).text());
    });

  $('div[id="job-browse-card"]')
    .find(".job-browse-card-element > .four > .item-style2")
    .each(function (index, element) {
      locations.push($(element).text());
    })
    .end();

  for (var i = 0; i < positions.length; i++) {
    jobData.push({
      Job_Position: positions[i],
      Job_Company_Name: companyName[i],
      Job_Location: locations[i],
    });
  }

  return jobData;
};

const sendData = async () => {
  let name = ["Junior", "Associate"];
  const temp = [];
  const temp2 = [];
  const mynimoData = await getResults();
  const retval = await scrape_data_1.ScrapeData();
  let i = 0;
  // for (let item of retval.finalVal) {
  //   if (item != undefined) {
  //     // const string = item.replace(/\n/g, "");
  //     // const string = replace(/\n/g, "");
  //     temp.push(item);
  //   }
  // }

  return { mynimoData, retval };
};

module.exports = sendData;

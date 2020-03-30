const web1 = require("./website1");
// import { ScrapeData } from "./website1";
const cheerio = require("cheerio");
const axios = require("axios");

// const webUrl = "https://www.mynimo.com/cebu/it-jobs/no-experience-jobs";
// const webUrl2 = "https://www.cebuitjobs.com/";
const url = [
  "https://www.mynimo.com/cebu/it-jobs/no-experience-jobs",
  "https://www.cebuitjobs.com/"
];
let jobTitle = "";
const companyName = [];
const locations = [];
const positions = [];
const sampleArray = [];
const jobResult = {
  jobData: []
};

const fetchData = async () => {
  const [webUrl, webUrl2] = url;
  const result = await axios.get(webUrl);
  return cheerio.load(result.data);
  // const result = await axios.all([axios.get(webUrl), axios.get(webUrl2)]).then(
  //   axios.spread((mynimoRes, cebuItres) => {
  //     return cheerio.load(mynimoRes.data, cebuItres.data);
  //   })
  // );
};

const getResults = async () => {
  const $ = await fetchData();
  const val = await web1.ScrapeData();
  jobTitle = $(".browser-wrapper_container").text();

  $('div[id="job-browse-card"]')
    .find("div > div > div > a")
    .each(function(index, element) {
      positions.push($(element).text());
    });

  $('div[id="job-browse-card"]')
    .find("div > div > div > div > span > .verified-employer-new-info")
    .each(function(index, element) {
      companyName.push($(element).text());
    });

  $('div[id="job-browse-card"]')
    .find(".job-browse-card-element > .four > .item-style2")
    .each(function(index, element) {
      locations.push($(element).text());
    });

  // $('div[class="card-body"]')
  //   .find("h5")
  //   .each(function(index, element) {
  //     sampleArray.push($(element).text());
  //   });

  // $('div[id="job-browse-card"]')
  // .find("div > div > div > div > .item-style2, item-style")
  // .each(function(index, element) {
  //   locations.push($(element).text());
  // });
  // console.dir(positions);

  for (var i = 0; i < positions.length; i++) {
    jobResult.jobData.push({
      Job_Position: positions[i],
      Job_Company_Name: companyName[i],
      Job_Location: locations[i]
    });
  }

  return {
    mynimo: {
      jobResult,
      val
    }
  };
};

module.exports = getResults;

const cheerio = require("cheerio");
const axios = require("axios");

const webUrl = "https://www.mynimo.com/cebu/it-jobs/no-experience-jobs";
let jobTitle = "";
const companyName = [];
const locations = [];
const positions = [];
const sampleArray = [];

const fetchData = async () => {
  const result = await axios.get(webUrl);
  return cheerio.load(result.data);
};

const getResults = async () => {
  const $ = await fetchData();
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

  // $('div[id="job-browse-card"]')
  // .find("div > div > div > div > .item-style2, item-style")
  // .each(function(index, element) {
  //   locations.push($(element).text());
  // });
  // console.dir(positions);

  return {
    mynimo: {
      positions,
      companyName,
      locations,
      jobTitle
    }
  };
};

module.exports = getResults;

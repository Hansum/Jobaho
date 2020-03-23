const cheerio = require("cheerio");
const axios = require("axios");

const webUrl = "https://www.mynimo.com/cebu/it-jobs/no-experience-jobs";
let jobTitle = "";
const locations = new Set();
const positions = [];
const numberofJob = "";

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
  console.dir(positions);

  return {
    mynimo: {
      positions,
      jobTitle
    }
  };
};

module.exports = getResults;

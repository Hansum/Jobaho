const cebuItApi = require("./website1");
const indreedAPI = require("./website2");
const cheerio = require("cheerio");
const axios = require("axios");

const fetchData = async () => {
  const url = "https://www.mynimo.com/cebu/it-jobs/no-experience-jobs";
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const getResults = async () => {
  const jobData = [];
  const url = [];
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
    });

  $('div[id="job-browse-card"]')
    .find("a")
    .each(function (index, element) {
      url.push($(element).attr("href"));
    });

  for (var i = 0; i < positions.length; i++) {
    jobData.push({
      Job_Position: positions[i],
      Job_Company_Name: companyName[i],
      Job_Location: locations[i],
      Job_url: "https://mynimo.com" + url[i],
    });
  }

  return jobData;
};

const sendData = async () => {
  const entry_level = await getResults();

  return { entry_level };
};

module.exports = sendData;

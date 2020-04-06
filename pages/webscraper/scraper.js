const cebuItApi = require("./website1");
const indreedAPI = require("./website2");
const cheerio = require("cheerio");
const axios = require("axios");

const url = [
  "https://www.mynimo.com/cebu/it-jobs/no-experience-jobs",
  "https://www.cebuitjobs.com/",
];

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
  const mynimoData = await getResults();
  const retval = await cebuItApi.ScrapeData();
  const indreed = await indreedAPI.fetchAPI();

  return { mynimoData, retval, indreed };
};

module.exports = sendData;

const axios = require("axios");
const cheerio = require("cheerio");

const loadWebsite = async () => {
  const url = "https://www.mynimo.com/cebu/it-jobs/no-experience-jobs";
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const fetchDatafromWebsite = async () => {
  const $ = await loadWebsite();
  const Job_title = [];
  const Company_name = [];
  const location = [];
  const Job_url = [];

  $('div[id="job-browse-card"]')
    .find("div > div > div > a")
    .each(function (index, element) {
      Job_title.push($(element).text());
    });

  $('div[id="job-browse-card"]')
    .find("div > div > div > div > span > .verified-employer-new-info")
    .each(function (index, element) {
      Company_name.push($(element).text());
    });

  $('div[id="job-browse-card"]')
    .find(".job-browse-card-element > .four > .item-style2")
    .each(function (index, element) {
      location.push($(element).text());
    });

  $('div[id="job-browse-card"]')
    .find("a")
    .each(function (index, element) {
      Job_url.push($(element).attr("href"));
    });

  return { Job_title, Company_name, location, Job_url };
};

const combineData = async (req, res) => {
  const fetchData = await fetchDatafromWebsite();
  const data = [];
  for (let i = 0; i <= fetchData.Job_title.length; i++) {
    data.push({
      job_position: fetchData.Job_title[i],
      company: fetchData.Company_name[i],
      location: fetchData.location[i],
      url: "https://mynimo.com" + fetchData.Job_url[i],
    });
  }

  return data;
};

export default combineData;

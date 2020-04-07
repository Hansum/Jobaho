const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://www.cebuitjobs.com";

const fetchData = async () => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const checkKeywords = async () => {
  const arr = await getRemainingData();
  const keywords = [
    "Associate",
    "Entry-level",
    "Junior",
    "Jr",
    "Fresh",
    "Fresh-Graduate",
  ];
  const arrKeywordsFinal = [];

  if (arr != 0 || arr != undefined) {
    for (let item of arr) {
      if (
        item.Job_Position !== undefined ||
        item.Company_Name !== undefined ||
        item.Job_Date !== undefined
      ) {
        const exists = keywords.some((res) => item.Job_Position.includes(res));

        if (!exists) {
          arrKeywordsFinal.push(item);
        }
      }
    }
    return arrKeywordsFinal;
  } else {
    console.log("no array found to check Keywords");
  }
};

const FinalOutput = async () => {
  const keyData = await checkKeywords();
  const finalData = [];

  if (keyData) {
    for (let item of keyData) {
      if (
        item.Job_Position !== undefined &&
        item.Company_Name !== undefined &&
        item.Job_Date !== undefined
      ) {
        const jobTitle = item.Job_Position.trim();
        const company = item.Company_Name.trim();
        const date = item.Job_Date.trim();

        finalData.push({
          Job_Position: jobTitle,
          Company_Name: company,
          Job_Date: date,
          Job_Url: item.Job_url,
        });
        return finalData;
      } else {
        console.log("there is an undefined object in the array");
      }
    }
  } else {
    console.log("no array found to remove space");
  }
};

async function getRemainingData() {
  const position_title = [];
  const company_name = [];
  const date = [];
  const job_Url = [];
  const finalArray = [];

  const url = "https://www.cebuitjobs.com";
  for (let i = 0; i <= 13; i += 13) {
    await axios
      .get(url + `/more/${i}`)
      .then(function (res) {
        const $ = cheerio.load(res.data);

        $('div[class="card-body"]')
          .find("h5")
          .each(function (index, jobTitle) {
            position_title.push($(jobTitle).text());
          });

        $('div[class="card-body"]')
          .find("a img")
          .each(function (index, companyName) {
            company_name.push($(companyName).attr("alt"));
          });

        $('div[class="card-body"]')
          .find("h6")
          .each(function (index, jobDate) {
            date.push($(jobDate).text());
          });

        $('div[class="card-body"]')
          .find("h5 a")
          .each(function (index, element) {
            job_Url.push($(element).attr("href"));
          });
      })
      .catch(function (err) {
        console.log("Error fetching", err);
      });
  }

  if (
    position_title.length != 0 ||
    company_name.length != 0 ||
    date.length != 0 ||
    job_Url.length != 0
  ) {
    for (let i = 0; i <= position_title.length; i++) {
      finalArray.push({
        Job_Position: position_title[i],
        Company_Name: company_name[i],
        Job_Date: date[i],
        Job_url: job_Url[i],
      });
    }
  }

  return axios.all(finalArray).then((res) => {
    return res;
  });
}

exports.ScrapeData = async () => {
  const finalVal = await FinalOutput();

  return { finalVal };
};

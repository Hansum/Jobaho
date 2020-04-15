const cheerio = require("cheerio");
const axios = require("axios");

const filterJobs = async () => {
  const arr = await getRemainingData();
  const keywords = [
    "Associate",
    "Entry-level",
    "Junior",
    "Jr",
    "Fresh",
    "Fresh-Graduate",
    "Senior",
    "Sr",
  ];
  const arrKeywordsFinal = [];

  if (arr != 0 || arr != undefined) {
    for (let item of arr) {
      const exists = keywords.some((res) => item.Job_Position.includes(res));

      if (!exists) {
        arrKeywordsFinal.push(item);
      }
    }
    return arrKeywordsFinal;
  } else {
    console.log("no array found to check Keywords");
  }
};

const FinalOutput = async () => {
  const keyData = await filterJobs();
  const finalData = [];

  if (keyData) {
    for (let item of keyData) {
      if (
        item.Job_Position !== undefined &&
        item.Company_Name !== undefined &&
        item.Job_Date !== undefined &&
        item.Job_url !== undefined
      ) {
        const jobTitle = item.Job_Position.trim();
        const company = item.Company_Name.trim();
        const date = item.Job_Date.trim();
        const location = item.Job_Location.trim();

        finalData.push({
          Job_Position: jobTitle,
          Company_Name: company,
          Job_Location: location,
          Job_Date: date,
          Job_Url: item.Job_url,
        });
      }
    }

    return finalData;
  } else {
    console.log("no array found to remove space");
  }
};

async function getRemainingData() {
  const position_title = [];
  const company_name = [];
  const date = [];
  const job_Url = [];
  const location = [];
  const finalArray = [];

  const url = "https://www.cebuitjobs.com";
  for (let i = 0; i !== 143; i += 13) {
    await axios
      .get(url + `/more/${i}`)
      .then(function (res) {
        const $ = cheerio.load(res.data);

        $('div[class="card-body"]').each(function (index, element) {
          if ($(element).find("img").length === 1) {
            $(element)
              .find("h5")
              .each(function (index, job) {
                position_title.push($(job).text());
              });

            $(element)
              .find("img")
              .each(function (index, company) {
                company_name.push($(company).attr("alt"));
              });

            $(element)
              .find("h6")
              .each(function (index, jobDate) {
                date.push($(jobDate).text());
              });

            $(element)
              .find("span:first-of-type")
              .each(function (index, jobLocation) {
                location.push($(jobLocation).text());
              });

            $(element)
              .find("h5 a")
              .each(function (index, url) {
                job_Url.push($(url).attr("href"));
              });
          }
        });
      })
      .catch(function (err) {
        console.log("Error fetching", err);
      });
  }

  for (let i = 0; i <= position_title.length; i++) {
    if (
      position_title[i] !== undefined &&
      company_name[i] !== undefined &&
      date[i] !== undefined &&
      job_Url[i] !== undefined
    ) {
      finalArray.push({
        Job_Position: position_title[i],
        Company_Name: company_name[i],
        Job_Location: location[i],
        Job_Date: date[i],
        Job_url: job_Url[i],
      });
    }
  }
  // console.log("array:", finalArray);
  return axios.all(finalArray).then((res) => {
    return res;
  });
}

const midJobData = async () => {
  const mid_level = await FinalOutput();
  const length = mid_level.length;

  return { mid_level, length };
};

module.exports = midJobData;

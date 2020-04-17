const indeed = require("indeed-scraper");

const fetchIndeedData = async () => {
  const queryOptions = {
    host: "www.indeed.com.ph",
    query: "Software",
    city: "Cebu",
    radius: "30",
    level: "senior_level",
    jobType: "fulltime",
    maxAge: "30",
    sort: "date",
    limit: 100,
  };

  return indeed.query(queryOptions).then((res) => {
    return res;
  });
};

const filterJob = async () => {
  const jobData = await fetchIndeedData();
  const arr = [];
  const keyWords = ["Senior", "Sr", "Manager", "Lead"];

  if (jobData) {
    for (let item of jobData) {
      const exists = keyWords.some((res) => item.title.includes(res));

      if (exists) {
        arr.push(item);
      }
    }
  } else {
    console.log("No data from sendIndreedData");
  }
  return arr;
};

module.exports = filterJob;

// const axios = require("axios");

// const fetchIndreedAPI = async () => {
//   const arr = [];
//   const api =
//     "https://indreed.herokuapp.com/api/jobs?q=Software%20Developer&l=Cebu&country=ph&max=30";

//   return await axios
//     .get(api)
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => {
//       console.log("error fetching in indreed API");
//     });
// };

// const RemoveKeywords = async () => {
//   const data = await fetchIndreedAPI();
//   const finalarr = [];
//   const keyWords = ["Senior", "Sr", "Manager", "Lead"];

//     if (data !== undefined) {

//         for (let item of data) {
//           const exists = keyWords.some((res) => item.title.includes(res));
//           if (exists) {
//             finalarr.push(item);
//           }
//         }
//     } else {
//         finalarr.push({title:"No data from indeed"})
//     }
//   return finalarr;
// };

// const SeniorJobData = async () => {
//   const senior_level = await RemoveKeywords();
//   const length = senior_level.length;
//   // console.log("senior data:", senior_level);
//   return { senior_level, length };
// };

// module.exports = SeniorJobData;

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

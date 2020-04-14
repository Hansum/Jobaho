const axios = require("axios");

const fetchIndreedAPI = async () => {
  const arr = [];
  const api =
    "https://indreed.herokuapp.com/api/jobs?q=Software%20Developer&l=Cebu&country=ph&max=30";
  return await axios
    .get(api)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("error fetching in indreed API");
    });
};

const RemoveKeywords = async () => {
  const data = await fetchIndreedAPI();
  const finalarr = [];
  const keyWords = ["Senior", "Sr", "Manager"];

  for (let item of data) {
    const exists = keyWords.some((res) => item.title.includes(res));
    if (exists) {
      finalarr.push(item);
    }
  }
  return finalarr;
};

const sendIndreedData = async () => {
  const senior_level = await RemoveKeywords();
  // console.log("senior data:", senior_level);
  return { senior_level };
};

module.exports = sendIndreedData;

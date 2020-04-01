const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://www.cebuitjobs.com";
const keywords = ["Associate", "Entry-level", "Junior", "Jr"];

const JobTitle = [];
const x = [];
const promises = [];
const val = [];

const fetchData = async () => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const checkKeywords = text => {
  const exists = keywords.some(res => text.includes(res));

  if (exists) {
    JobTitle.push(text);
  }
};

// const getMaximumPage = () => {
//   const maxUrl = "https://www.cebuitjobs.com/more/832";
//   const getNum = maxUrl.match(/(\d+)/);

//   if (getNum) {
//     const numPage = getNum[1];
//     return numPage;
//   }
// };

async function getRemainingData() {
  for (let i = 0; i <= 65; i += 13) {
    await axios
      .get(`https://www.cebuitjobs.com/more/${i}`)
      .then(function(res) {
        const $ = cheerio.load(res.data);

        $('div[class="card-body"]')
          .find("h5")
          .each(function(index, element) {
            x.push($(element).text());
            // checkKeywords($(element).text());
          });
      })
      .catch(function(err) {
        console.log("Error fetching", err);
      });
  }

  return axios.all(x).then(res => {
    return res;
  });
}

exports.ScrapeData = async () => {
  //get front page data
  const $ = await fetchData();
  $('div[class="card-body"]')
    .find("h5")
    .each(function(index, element) {
      checkKeywords($(element).text());
      // JobTitle.push($(element).text());
    });

  const retVal = await getRemainingData();

  return { JobTitle, retVal };
};

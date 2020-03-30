const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://www.cebuitjobs.com";
const keywords = ["Associate", "Entry-level", "Junior", "Jr"];

const JobTitle = [];
const fetchData = async () => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const checkKeywords = text => {
  const exists = keywords.some(res => text.includes(res));

  if (exists) {
    JobTitle.push(text);
    // console.log("exist");
  }
};

// function checkKeywords(text) {
//   const exists = keywords.some(res => text.indexOf(res) >= 0);

//   if (exists) {
//     JobTitle.push(text);
//   }
// }

exports.ScrapeData = async () => {
  const $ = await fetchData();

  //get front page data
  $('div[class="card-body"]')
    .find("h5")
    .each(function(index, element) {
      checkKeywords($(element).text());
    });

  // // let page = $('div[class="card-bdoy"]').find("h5").length;

  // for (let i = 0; i <= page; i++) {
  //   sampleArray.push(
  //     axios
  //       .get(`https://www.cebuitjobs.com/more/${page + 13}`)
  //       .then((res, err) => {

  //       })
  //   );
  // }

  // axios.get(url).then((response, err) => {
  //   if (err) throw err;
  //   const $ = cheerio.load(response.data);
  //   const JobTitle = [];
  //   const pages = $('ul[class="pagination"]').find("li > page > a").attr("href");

  //   $('div[class="card-body"]').find("h5").each(function(index, element) {
  //     JobTitle.push($(element).text());
  //   })
  for (let i = 0; i <= 26; i += 13) {
    axios.get(url + `/more/${i}`).then((res, err) => {
      if (err) throw err;
      const $ = cheerio.load(res.data);

      $('div[class="card-body"]')
        .find("h5")
        .each(function(index, element) {
          // JobTitle.push($(element).text());
          checkKeywords($(element).text());
        });
    });
  }

  return JobTitle;
};

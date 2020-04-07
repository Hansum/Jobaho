const express = require("express");
const router = express.Router();
const getResults = require("../../pages/webscraper/scraper");
const getExperienceData = require("../../pages/webscraper/website2");

router.get("/test", async function (req, res) {
  // const result = await getResults();
  return res.json({ message: "hello from node" });
});

router.get("/jobPosition", async function (req, res) {
  const result = await getResults();

  if (result) {
    return res.json({ data: result });
  } else {
    console.log("error fetching data on /Jobposition");
  }
});

// router.get('/Jobexperice/:id', async (req, res) => {
//   const retExperienceData = await getExperienceData(req.param.id);

//   if (retExperienceData) {
//     return res.json({data: retExperienceData});
//   } else {
//     console.log("error fetching data on /Jobexperience")
//   }

// })

module.exports = router;

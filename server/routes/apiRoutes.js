const express = require("express");
const router = express.Router();
const getJuniorPosition = require("../../pages/webscraper/scraper");
const getMidPosition = require("../../pages/webscraper/website1");
const getSeniorPosition = require("../../pages/webscraper/website2");

router.get("/JuniorPosition", async function (req, res) {
  const result = await getJuniorPosition();

  if (result) {
    return res.json({ data: result });
  } else {
    console.log("error fetching data on /Juniorposition");
  }
});

router.get("/MidPosition", async function (req, res) {
  const result = await getMidPosition();
  try {
    return res.json({ data: result });
  } catch (err) {
    console.log("error fetching data from /MidPosition");
    res.status(500).send();
  }
});

router.get("/SeniorPosition", async function (req, res) {
  const result = await getSeniorPosition();
  try {
    return res.json({ data: result });
  } catch (err) {
    console.log("error fetching data from /SeniorPosition");
    res.status(500).send();
  }
});

module.exports = router;

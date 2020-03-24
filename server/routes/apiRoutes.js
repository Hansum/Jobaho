const express = require("express");
const router = express.Router();
const getResults = require("../../pages/webscraper/scraper");

router.get("/test", async function(req, res) {
  // const result = await getResults();
  return res.json({ message: "check from node" });
});

router.get("/jobPosition", async function(req, res) {
  const result = await getResults();
  return res.json({ data: result });
});

module.exports = router;

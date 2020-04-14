const express = require("express");
const router = express.Router();
const getJuniorPosition = require("../../pages/webscraper/juniorJobScraper");
const getMidPosition = require("../../pages/webscraper/midJobScraper");
const getSeniorPosition = require("../../pages/webscraper/seniorJobScraper");

router.get("/JuniorPosition", async function (req, res) {
  const result = await getJuniorPosition();

  if (result) {
    return res.json({
      data: result,
      status: 200,
      message: "Junior position data was fetched successfully",
    });
  } else {
    return res.json({
      status: 500,
      message: "No data was fetched from Junior Position",
    });
    console.log("error fetching data on /Juniorposition");
  }
});

router.get("/MidPosition", async function (req, res) {
  const result = await getMidPosition();
  try {
    if (result) {
      return res.json({
        data: result,
        status: 200,
        message: "Mid position data was fetched successfully",
      });
    } else {
      return res.json({
        status: 500,
        message: "No data was fetched from Mid Position",
      });
    }
  } catch (err) {
    console.log("error fetching data from /MidPosition");
    res.status(500).send();
  }
});

router.get("/SeniorPosition", async function (req, res) {
  const result = await getSeniorPosition();
  try {
    if (result) {
      return res.json({
        data: result,
        status: 200,
        message: "Senior Position data was fetched successfully",
      });
    } else {
      return res.json({
        status: 500,
        message: "No data was fetched from Senior Position",
      });
    }
  } catch (err) {
    console.log("error fetching data from /SeniorPosition");
    res.status(500).send();
  }
});

module.exports = router;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dev = process.env.NODE_ENV !== "production";
const next = require("next");
const app = next({ dev });
const handle = app.getRequestHandler();
const apiRouter = require("./server/routes/apiRoutes");
const testData = require("./pages/webscraper/scraper");
const Port = 3000;

// var scraperRouter = require("");

app.prepare().then(() => {
  const server = express();
  const router = express.Router();
  server.use(bodyParser.json());
  server.use(cors());
  // server.get("/testNode", async function(req, res) {
  //   // const result = await testData();
  //   // return app.render(req, res, "/testing", { message: "hello" });
  //   // return res.json({ message: "hello" });
  // });

  // server.get("/testing/", (req, res) => {
  //   return app.render(req, res, "/testing", { id: "YAWAAA" });
  // });

  server.get("/testEndPoint", function(req, res) {
    return res.json({ message: "hello from node" });
  });

  server.use("/api", apiRouter);

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(Port, err => {
    if (err) throw err;
    console.log(`Node server ready on http://localhost:${Port}`);
  });
});

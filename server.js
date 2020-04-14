const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dev = process.env.NODE_ENV !== "production";
const next = require("next");
const app = next({ dev });
const handle = app.getRequestHandler();
const apiRouter = require("./server/routes/apiRoutes");
const Port = 3000;

app.prepare().then(() => {
  const server = express();
  const router = express.Router();
  server.use(bodyParser.json());
  server.use(cors());

  server.use("/api", apiRouter);

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(Port, (err) => {
    if (err) throw err;
    console.log(`Node server ready on http://localhost:${Port}`);
  });
});

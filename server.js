const express = require("express");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const next = require("next");
const app = next({ dev });
const handle = app.getRequestHandler();
const Port = 3000;

app.prepare().then(() => {
  const server = express();

  //   server.get("/", (req, res) => {
  //     return app.render(req, res, "/", req.query);
  //   });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(Port, err => {
    if (err) throw err;
    console.log(`Node server ready on http://localhost:${Port}`);
  });
});

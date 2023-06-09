// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api/whoami", (req, res) => {
  const ipAddress = res.connection.localAddress;
  const software = req.get("User-Agent");
  const language1 = req.get("Accept-language").split(",")[2].split(";")[0];
  const language2 = req.get("Accept-language").split(",")[1];
  console.log(ipAddress);

  const language = language1 + "," + language2;
  // Add more headers as needed

  res.json({
    ipAddress,
    language,
    software,
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 4000, function () {
  console.log(
    "Your app is listening on port " +
      `http://localhost:${listener.address().port}`
  );
});

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extend: true }));

// routers
const router = require("./routes/proutes");
app.use("/api", router);

//testing api
app.get("/test", function (req, res) {
  res.send("tsting success!");
});

//port decleration
const port = process.env.PORT || 3030;

// server initialization
app.listen(port, () => {
  console.log("port connection success!!");
});

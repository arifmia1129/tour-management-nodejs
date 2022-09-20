const express = require("express");
const app = express();
const cors = require("cors");
const tourRoute = require("./routes/tour.route.js");
const singleRoute = require("./routes/singleTour.route.js");

app.use(express.json());
app.use(cors());

app.use("/tours", tourRoute);
app.use("/tour", singleRoute);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});




module.exports = app;

const colors = require("colors");
const app = require("./app");
const DBConnect = require("./utiles/dbConnect");
const dotenv = require("dotenv").config();

// database connection
DBConnect();
// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});


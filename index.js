const express = require("express")
var db = require("./db.js");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

require("./routes/authRoutes")(app);

db.sequelize.sync({
  force: true
}).then(() => {
  app.listen(5000, () => {
    console.log("Your server is starting in port 3000!");
  });
});
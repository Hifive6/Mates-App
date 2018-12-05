const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
//const routes = require("./routes");
const PORT = process.env.PORT || 8080; 



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/matesappDB");


app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
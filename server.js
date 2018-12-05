<<<<<<< HEAD
var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes/htmlRoutes");
var app = express();
var PORT = process.env.PORT || 8080;
=======
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001; 


>>>>>>> 134a671f4b3f7c7c194c3f1abc5e4ce25a1644ff

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

<<<<<<< HEAD
// app.use(routes);
=======
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/matesappDB");

>>>>>>> 134a671f4b3f7c7c194c3f1abc5e4ce25a1644ff

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
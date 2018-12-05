var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes/htmlRoutes");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
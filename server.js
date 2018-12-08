const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/api");
const PORT = process.env.PORT || 3001; 



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);
// app.use(app.router);
// routes.initialize(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/matesappDB");


app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
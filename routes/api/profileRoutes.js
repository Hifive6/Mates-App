const router = require("express").Router();
const profileController = require("../../Controllers/profileController")


router.route("/")
 .get(profileController.findAll)
 .post(profileController.create);

 router.route("/:id")
    .get(profileController.findByID)
    .put(profileController.update)

    module.exports = router;
// var path = require("path");


// module.exports = function(app) {
 

//   app.get("/login", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });

//   app.get("/index", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//   });

//   // app.get("/bills", function(req, res) {
//   //   res.sendFile(path.join(__dirname, "../public/bills.html"));
//   // });

//   app.get("/profile", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/profileform.html"));
//   });

//   // If no matching route is found default to login page
//   app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });
// };

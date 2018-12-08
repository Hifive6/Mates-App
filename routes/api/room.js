const router = require("express").Router();
const roomController = require("../../controllers/roomController");
const profileController = require("../../controllers/profileController");


//Matches with api/rooms
router.route("/")
.get(roomController.findAll)
// .post(roomController.createRoom)


//Matches with /api/rooms/:id
router.route("/id:")
.get(roomController.findRoom)
.post(roomController.createRoom)
.put(roomController.updateRoom)



//Matches with /api/profile
router.route("/profile/id:")
  .get(profileController.findProfile)
  .post(profileController.createProfile)
  

module.exports = router;
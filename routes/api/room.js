const router = require("express").Router();
const roomController = require("../../controllers/roomsController");
const profileController = require("../../controllers/profileController");


//Matches with api/rooms
router.route("/")
.get(roomController.findAll)
// .post(roomController.createRoom)


//Matches with /api/rooms/:id
router.route("room/rooms/id:")
.get(roomController.findRoom)
.post(roomController.createRoom)
//.put(roomController.updateRoom)



//Matches with /api/profile
router.route("/profile/id:")
  .get(profileController.findById)
  .post(profileController.createProfile)

// router.route("room/rooms/:id")
//    .post(roomController.updateRoom)
  

module.exports = router;
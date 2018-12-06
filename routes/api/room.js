const router = require("express").Router();
const roomController = require("../../controllers/roomController");
const profileController = require("../../controllers/profileController");


//Matches with /api/room
router.route("/")
.get(roomController.findRoom)
.post(roomController.createRoom)
.put(roomController.updateRoom);

//Matches ith /api/profile
router
  .route("/:id")
  .get(profileController.findProfile)
  .post(profileController.createProfile)
  

module.exports = router;
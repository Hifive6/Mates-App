const router = require("express").Router();
const profileRoutes = require("./profileRoutes");
const room = require("./room")

// Profile routes
router.use("/profiles", profileRoutes);
router.use("/rooms",room )

module.exports = router;
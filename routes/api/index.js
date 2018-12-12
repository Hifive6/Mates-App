const router = require("express").Router();
const profileRoutes = require("./profileRoutes");
const room = require("./room")

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Profile routes
router.use("/profiles", profileRoutes);
router.use("/rooms", room)

module.exports = router;
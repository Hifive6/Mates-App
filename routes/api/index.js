const router = require("express").Router();
const profileRoutes = require("./ProfileRoutes");

// Profile routes
router.use("/", profileRoutes);

module.exports = router;
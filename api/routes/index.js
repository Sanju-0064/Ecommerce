const express = require("express");
const router = express.Router();

// router.use("/users", require("./user"));
router.use("/admin", require("./admin"));
// router.use("/city", require("./city"));
// router.use("/property", require("./property"));
// router.use("/chats", require("./chats"));

module.exports = router;

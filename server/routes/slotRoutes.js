const express = require("express");
const router = express.Router();
const { spinReels } = require("../controllers/slotController");

router.post("/spin", spinReels);

module.exports = router;

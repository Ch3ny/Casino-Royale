const express = require("express");
const router = express.Router();
const scratchController = require("../controllers/scratchController");

router.post("/scratch", scratchController.scratchCard);
router.post("/reset", scratchController.resetScratchCards);

module.exports = router;

const express = require("express");
const router = express.Router();
const guessController = require("../controllers/guessController");

router.post("/guess", guessController.guessNumber);
router.post("/restart", guessController.restartGame);

module.exports = router;

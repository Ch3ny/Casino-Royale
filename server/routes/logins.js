var express = require("express");
var router = express.Router();

const loginsController = require("../controllers/logins");
const casino = require("../casinoStuff/server");

router.get("/", loginsController.getAllLogins);

//localhost:3000/logins/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", loginsController.getLoginById);

router.delete("/:id", loginsController.deleteLogin);

router.put("/:id", loginsController.updateLogin);

router.post("/", loginsController.createLogin);

module.exports = router;

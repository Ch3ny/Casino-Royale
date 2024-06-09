var express = require("express");
var router = express.Router();

const accountsController = require("../controllers/accounts");

// Define routes for accounts
router.get("/", accountsController.getAllAccounts);

router.get("/:id", accountsController.getAccountById);

router.delete("/:id", accountsController.deleteAccount);

router.put("/:id", accountsController.updateAccount);

router.post("/", accountsController.createAccount);

module.exports = router;

const express = require("express");
const router = express.Router();
const facturesController = require("../controller/factureController")

router.get("/factures", facturesController.fetchAll)

module.exports = router
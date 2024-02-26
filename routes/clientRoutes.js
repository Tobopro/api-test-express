const express = require("express");
const router = express.Router();
const clientController = require("../controller/clientController")

router.get("/clients", clientController.fetchAll)

router.get("/clients/:id", clientController.fetchSingle)

router.post("/clients/create", clientController.create)

module.exports = router
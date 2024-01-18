const express = require("express");
const { getAllPins } = require("../controllers/pin");
const router = express.Router();

router.get("/", getAllPins);

module.exports = router;

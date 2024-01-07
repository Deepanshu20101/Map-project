const express = require("express");
const { createHotel } = require("../controllers/hotel");

const router = express.Router();

router.post("/createHotel", createHotel);

module.exports = router;

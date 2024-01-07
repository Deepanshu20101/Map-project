const express = require("express");
const { createHotel, gettAllHotels } = require("../controllers/hotel");

const router = express.Router();

router.post("/createHotel", createHotel);
router.get("/", gettAllHotels);

module.exports = router;

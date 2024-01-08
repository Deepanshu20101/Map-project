const express = require("express");
const {
  createHotel,
  gettAllHotels,
  getHotel,
} = require("../controllers/hotel");

const router = express.Router();

router.post("/createHotel", createHotel);
router.get("/", gettAllHotels);
router.get("/:id", getHotel);

module.exports = router;

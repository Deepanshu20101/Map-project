const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [],
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;

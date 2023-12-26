const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  images: {
    type: [string],
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;

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
  price: {
    type: Number,
    min: 0,
    default: 0,
  },
  images: {
    type: [],
  },
  location: {
    lng: { type: Number, required: true },
    lat: { type: Number, required: true },
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;

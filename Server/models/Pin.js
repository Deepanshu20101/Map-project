const mongoose = require("mongoose");

const pinSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
});

const Pin = mongoose.model("Pin", pinSchema);
module.exports = Pin;

const Pin = require("../models/Pin");

const getAllPins = async (req, res) => {
  try {
    const pins = await Pin.find();
    res.status(200).json({ success: true, result: pins });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllPins };

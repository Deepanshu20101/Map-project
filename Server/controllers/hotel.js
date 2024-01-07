const Hotel = require("../models/Hotel");

const createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      images: req.body.images,
    });
    console.log(hotel);
    res.status(200).json({ message: "Hotel created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const gettAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    if (!hotels || !hotels.length) {
      return res.status(404).json({ message: "No Hotels found" });
    }
    res.status(200).json({ success: true, result: hotels });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createHotel, gettAllHotels };

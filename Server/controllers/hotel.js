const Hotel = require("../models/Hotel");

const createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create({
      title: req.body.title,
      description: req.body.description,
      images: req.body.images,
    });
    console.log(hotel);
    res.status(200).json({ message: "Hotel created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createHotel };

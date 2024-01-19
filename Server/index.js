const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const hotelRoute = require("./routes/hotelRoute");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

app.use("/user", userRoute);
app.use("/hotel", hotelRoute);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT);
    app.listen(port, () => console.log(`Server started on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();

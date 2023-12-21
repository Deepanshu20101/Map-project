const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

app.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log(user);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT);
    app.listen(port, () => console.log(`Server started on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();

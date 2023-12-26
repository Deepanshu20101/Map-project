const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log(user);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email: email }).exec();
    if (foundUser) {
      if (foundUser.password === password) {
        // console.log("Welcome");
        res.status(200).json({ message: "Logged in successfully", foundUser });
      } else {
        // console.log("incorrect password");
        res.status(401).json({ error: "Incorrect password" });
      }
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

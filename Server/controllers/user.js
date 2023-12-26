const User = require("../models/User");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const password = req.body.password;
  try {
    const hashedPwd = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPwd,
    });
    console.log(user);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email: email }).exec();
    if (foundUser) {
      const { firstName, lastName, email } = foundUser;
      const match = await bcrypt.compare(password, foundUser.password);
      if (match) {
        res.status(200).json({
          success: true,
          result: { firstName, lastName, email },
        });
      } else {
        res.status(400).json({ success: false, error: "Incorrect password" });
      }
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { register, login };

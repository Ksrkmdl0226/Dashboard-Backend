const loginData = require("../model/loginModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createAccessToken } = require("../util/token");

const authController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      // password encryption
      const encPass = await bcrypt.hash(password, 10); // hash(pass,salt)
      // creating new user in db
      const newUser = await loginData.create({
        name,
        email,
        password: encPass,
      });
      return res.status(200).json({
        msg: "Details Registered Successfully",
        user: newUser,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const extUser = await loginData.findOne({ email });
      if (!extUser) return res.status(400).json({ message: "Email Doesn't exists" });

      const isMatch = await bcrypt.compare(password, extUser?.password);
      if (!isMatch)
        return res.status(400).json({ message: "Password Doesn't match" });

      const accessToken = createAccessToken({ id: extUser?._id });
      return res
        .status(200)
        .json({ token: accessToken, message: "logged In Successfully." });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  logout: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json({ message: err.message });
    }
  },
};

module.exports = authController;

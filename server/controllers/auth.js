import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUsed = await User.findOne({ username });
    if (isUsed) {
      return res.json({
        message: "This username is already in use",
      });
    }
    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashpassword,
    });
    const token = generateToken(newUser._id);

    await newUser.save();
    res.status(200).json({
      newUser,
      token,
      message: "Registration successful",
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUsed = await User.findOne({ username });

    if (!isUsed) {
      return res.status(400).json({
        message: "This username is not registered",
      });
    }
    const isPasswordCorrect = await bcrypt.compare(password, isUsed.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Username or password is incorrect",
      });
    }

    const token = generateToken(isUsed._id);

    res.status(200).json({
      message: "Login successful",
      user: isUsed,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const token = generateToken(user._id);

    res.status(200).json({ user, token, message: "Access granted" });
  } catch (error) {
    res.status(500).json({
      message: "No access",
      error: error.message,
    });
  }
};

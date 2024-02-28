import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import genToken from "../utils/generateToken.js";

export const register = async (req, res, next) => {
  try {
    const { username, email, gender, password } = req.body;

    const foundUser = await User.findOne({ username });
    if (foundUser) {
      return res.status(400).json({ message: "Username Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // https://avatar-placeholder.iran.liara.run/
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    res.status(200).json(newUser);
  } catch (error) {
    next();
  }
};
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json("Oops! User Doesn't Existed.you can signup ");
    }
    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      return res.status(401).json("Oops! Password Doesn't Correct ");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.cookie("access_token", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
    });
    
    res.status(200).json({
      _id: user._id,
      username: user.username,
      profilePic: user.profilePic,
      token: token,
    });
  } catch (error) {
    next(error);
  }
};
export const logout = async (req, res, next) => {
  try {
    res
      .clearCookie("access_token", {
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .json("Logged Out");
  } catch (error) {
    next(error);
  }
};

import User from "../models/userModel.js";

export const getUsersSidebar = async (req, res, next) => {
  try {
    const loginUserId = req.user._id;
    const activeUsers = await User.find({ _id: { $ne: loginUserId } }).select("-password")
    res.status(200).json(activeUsers);
  } catch (error) {
    next(error);
  }
};

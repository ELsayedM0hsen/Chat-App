import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  try {
    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded?.id);
    if (!user) return res.status(401).json("user not found");
    req.user = user;
    next();
  } catch (error) {
    next("Not Authorized token expired, Please Login again");
  }
};

export default verifyToken;

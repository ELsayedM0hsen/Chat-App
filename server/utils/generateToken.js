import jwt from "jsonwebtoken";

const genToken = (id) => {
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

export default genToken;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to Data Base");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;

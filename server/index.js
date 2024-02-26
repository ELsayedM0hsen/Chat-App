import express from "express";
import dotenv from "dotenv";

import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middlewares/errorHandle.js";

import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/usersRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import connectDB from "./configs/mongoDBConnection.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

connectDB()

//middlewares
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/message", messageRouter);

//Handle Errors
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
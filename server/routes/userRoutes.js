import express from "express";
import {verifyToken} from "../middlewares/verifyToken.js";
import { getUsersSidebar } from "../controllers/userCtrl.js";

const router = express.Router();

router.get("/", verifyToken, getUsersSidebar);

export default router;

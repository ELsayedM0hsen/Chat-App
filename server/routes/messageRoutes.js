import express from "express";
import {verifyToken} from "../middlewares/verifyToken.js";
import { getMasseges, sendMassege } from "../controllers/messageCtrl.js";

const router = express.Router();

router.post("/send/:id", verifyToken, sendMassege);
router.get("/:id", verifyToken, getMasseges);

export default router;

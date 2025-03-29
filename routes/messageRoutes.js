import express from "express";
import { getMessage, sendMessage } from "../controllers/messageController.js";

const router = express.Router();

router.get("/message", getMessage);
router.post("/contact", sendMessage); // New POST route for contact form

export default router;

import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// ✅ Route for user registration
router.post("/register", registerUser);

// ✅ Route for user login
router.post("/login", loginUser);

// ✅ Route to check if API is working
router.get("/", (req, res) => {
  res.json({ message: "User API is working!" });
});

export default router;

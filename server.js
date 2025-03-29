import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" })); // ✅ Add this line to enable CORS
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// ✅ Default route to prevent "Cannot GET /"
app.get("/", (req, res) => {
  res.json({ message: "🚀 Welcome to the API!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

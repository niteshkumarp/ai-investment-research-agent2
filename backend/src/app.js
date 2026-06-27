import express from "express";
import cors from "cors";
import aiRoutes from "./routes/ai.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend Running Successfully 🚀",
  });
});

// AI Routes
app.use("/api/ai", aiRoutes);

export default app;
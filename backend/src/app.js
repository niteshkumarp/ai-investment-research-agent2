import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Health Check Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "AI Investment Research Agent Backend is Running 🚀",
  });
});

export default app;
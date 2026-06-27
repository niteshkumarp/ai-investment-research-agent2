import express from "express";
import { generateResponse } from "../services/gemini.service.js";

const router = express.Router();

router.get("/test", async (req, res) => {
  try {
    const result = await generateResponse("Say hello in one sentence.");

    res.json({
      success: true,
      response: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router;
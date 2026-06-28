import express from "express";
import { investmentAnalysis } from "../controllers/investment.controller.js";

const router = express.Router();

router.post("/investment", investmentAnalysis);

export default router;
import dotenv from "dotenv";

// Load .env BEFORE anything else
dotenv.config();

console.log("API Key:", process.env.GEMINI_API_KEY);

import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
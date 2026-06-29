import path from "path";
import { fileURLToPath } from "url";

import { loadPDF } from "./rag/loader.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pdfPath = path.join(
  __dirname,
  "../data/reports/Tesla_Annual_Report_2024.pdf"
);

const text = await loadPDF(pdfPath);

console.log("\n========================");
console.log("FIRST 1500 CHARACTERS");
console.log("========================\n");

console.log(text.substring(0, 1500));
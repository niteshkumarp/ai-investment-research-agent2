
import path from "path";
import { fileURLToPath } from "url";

import { loadPDF } from "./rag/loader.js";
import { splitText } from "./rag/splitter.js";
import { createEmbedding } from "./rag/embedding.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pdfPath = path.join(
  __dirname,
  "../data/reports/Tesla_Annual_Report_2024.pdf"
);

const text = await loadPDF(pdfPath);

const chunks = await splitText(text);

const embedding = await createEmbedding(
  chunks[0].pageContent
);

console.log("Embedding Length:", embedding.length);

console.log(embedding.slice(0, 10));
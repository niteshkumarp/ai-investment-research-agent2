import fs from "fs";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

export async function loadPDF(filePath) {
  try {
    // Read the PDF file into a buffer
    const pdfData = new Uint8Array(fs.readFileSync(filePath));

    // Load PDF from data
    const pdf = await getDocument({ data: pdfData }).promise;

    let text = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);

      const content = await page.getTextContent();

      const pageText = content.items
        .map(item => item.str)
        .join(" ");

      text += pageText + "\n";
    }

    console.log("✅ PDF Loaded Successfully");
    console.log("Pages:", pdf.numPages);
    console.log("Characters:", text.length);

    return text;

  } catch (error) {
    console.error("❌ Error loading PDF:", error);
    throw error;
  }
}
import path from "path";
import { fileURLToPath } from "url";

import { loadPDF } from "./loader.js";
import { splitText } from "./splitter.js";
import { createEmbedding } from "./embedding.js";

import { loadVectors, saveVectors } from "./vectorStore.js";

import { sleep } from "./utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function ingestDocuments() {

    const pdfPath = path.join(
        __dirname,
        "../../data/reports/Tesla_Annual_Report_2024.pdf"
    );

    const text = await loadPDF(pdfPath);

    const chunks = await splitText(text);

    let vectors = loadVectors();

    console.log(`Already Indexed : ${vectors.length}`);

    for (let i = vectors.length; i < chunks.length; i++) {

        console.log(`Embedding ${i + 1}/${chunks.length}`);

        let embedding;

        let success = false;

        let retry = 0;

        while (!success && retry < 5) {

            try {

                embedding = await createEmbedding(
                    chunks[i].pageContent
                );

                success = true;

            }

            catch (err) {

                retry++;

                console.log(`Retry ${retry}/5`);

                await sleep(5000);

            }

        }

        if (!success) {

            console.log("Stopping...");

            saveVectors(vectors);

            return;

        }

        vectors.push({

            id: i,

            content: chunks[i].pageContent,

            embedding

        });

        if ((i + 1) % 10 === 0) {

            saveVectors(vectors);

            console.log("Checkpoint Saved");

        }

    }

    saveVectors(vectors);

    console.log("🎉 RAG Index Completed");
}
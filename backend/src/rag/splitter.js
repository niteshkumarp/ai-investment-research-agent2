import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

export async function splitText(text) {

    const splitter = new RecursiveCharacterTextSplitter({

        chunkSize: 1000,

        chunkOverlap: 200,

    });

    const chunks = await splitter.createDocuments([text]);

    console.log("✅ Text Split Successfully");
    console.log("Total Chunks:", chunks.length);

    return chunks;

}
import { getCollection } from "./rag/vectorStore.js";

const collection = await getCollection();

console.log(collection.name);
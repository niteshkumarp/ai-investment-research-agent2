import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STORAGE_DIR = path.join(__dirname, "../../storage");
const VECTOR_FILE = path.join(STORAGE_DIR, "vectors.json");

export function loadVectors() {

    if (!fs.existsSync(STORAGE_DIR)) {
        fs.mkdirSync(STORAGE_DIR, { recursive: true });
    }

    if (!fs.existsSync(VECTOR_FILE)) {
        return [];
    }

    return JSON.parse(
        fs.readFileSync(VECTOR_FILE, "utf8")
    );
}

export function saveVectors(vectors) {

    if (!fs.existsSync(STORAGE_DIR)) {
        fs.mkdirSync(STORAGE_DIR, { recursive: true });
    }

    fs.writeFileSync(
        VECTOR_FILE,
        JSON.stringify(vectors, null, 2)
    );
}
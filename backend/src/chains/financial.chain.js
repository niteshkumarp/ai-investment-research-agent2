import { ChatPromptTemplate } from "@langchain/core/prompts";
import { llm } from "../config/llm.js";
import { financialPrompt } from "../prompts/financial.prompt.js";

const prompt = ChatPromptTemplate.fromTemplate(financialPrompt);

export async function analyzeFinancial(company) {

    const chain = prompt.pipe(llm);

    const result = await chain.invoke({
        company
    });

    const clean = result.content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    return JSON.parse(clean);
}
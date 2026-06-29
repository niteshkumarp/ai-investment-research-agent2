import { ChatPromptTemplate } from "@langchain/core/prompts";
import { llm } from "../config/llm.js";
import { companyPrompt } from "../prompts/company.prompt.js";

const prompt = ChatPromptTemplate.fromTemplate(companyPrompt);

export async function analyzeCompany(company) {

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
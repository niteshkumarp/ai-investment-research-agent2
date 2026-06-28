import { ChatPromptTemplate } from "@langchain/core/prompts";
import { llm } from "../config/llm.js";
import { investmentPrompt } from "../prompts/investment.prompt.js";

const prompt = ChatPromptTemplate.fromTemplate(investmentPrompt);

export async function analyzeInvestment(company) {

    const chain = prompt.pipe(llm);

    const result = await chain.invoke({
        company,
    });

    // Remove markdown code fences if present
    const cleanResponse = result.content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    return JSON.parse(cleanResponse);
}
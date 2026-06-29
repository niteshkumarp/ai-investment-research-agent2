import { analyzeFinancial } from "../chains/financial.chain.js";

export async function financialAgent(state) {

    const result = await analyzeFinancial(state.company);

    return {

        ...state,

        financialAnalysis: result.financialAnalysis

    };

}
import { analyzeCompany } from "../chains/company.chain.js";

export async function companyAgent(state) {

    const result = await analyzeCompany(state.company);

    return {

        ...state,

        companyAnalysis: result.companyAnalysis

    };

}
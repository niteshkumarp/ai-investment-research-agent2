export const investmentPrompt = `
You are a professional investment research analyst.

Analyze the company: {company}

Return ONLY valid JSON in this format:

{{
  "company": "",
  "summary": "",
  "financialHealth": "",
  "growthPotential": "",
  "riskLevel": "",
  "recommendation": ""
}}
`;
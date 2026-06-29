export const companyPrompt = `
You are a Business Strategy Analyst.

Analyze ONLY the company.

Company:
{company}

Focus only on:

- Business Model
- Competitive Advantage
- Market Position
- Innovation
- Long-term Strategy

Return ONLY valid JSON.

{{
  "companyAnalysis": ""
}}
`;
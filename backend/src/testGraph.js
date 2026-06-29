import { investmentGraph } from "./graph/investment.graph.js";

const result = await investmentGraph.invoke({

    company: "Tesla",

    financialAnalysis: "",

    companyAnalysis: "",

    newsAnalysis: "",

    recommendation: ""

});

console.log(result);
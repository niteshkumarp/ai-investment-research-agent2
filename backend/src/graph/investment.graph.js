import { StateGraph, START, END } from "@langchain/langgraph";

import { investmentState } from "./state.js";

import { financialAgent } from "../agents/financial.agent.js";
import { companyAgent } from "../agents/company.agent.js";

const workflow = new StateGraph({
  channels: investmentState,
});

// Register Nodes
workflow.addNode("financialAgent", financialAgent);
workflow.addNode("companyAgent", companyAgent);

// Connect Nodes
workflow.addEdge(START, "financialAgent");
workflow.addEdge("financialAgent", "companyAgent");
workflow.addEdge("companyAgent", END);

// Compile Graph
export const investmentGraph = workflow.compile();
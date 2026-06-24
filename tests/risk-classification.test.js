import assert from "node:assert/strict";
import { classifyOpenClawRisk } from "../src/index.js"; assert.equal(classifyOpenClawRisk({kind:"shell.run",command:"rm -rf /"}),"critical"); console.log("risk-classification.test.js passed");

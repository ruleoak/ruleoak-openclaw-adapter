import assert from "node:assert/strict";
import { evaluateOpenClawAction } from "../src/index.js"; assert.equal(evaluateOpenClawAction({kind:"filesystem.delete"}).decision.decision,"deny"); console.log("policy-evaluation.test.js passed");

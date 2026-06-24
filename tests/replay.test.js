import assert from "node:assert/strict";
import { replayEvidenceJsonl } from "../src/index.js"; const r=replayEvidenceJsonl("{\"type\":\"policy_decision\",\"decision\":{\"decision\":\"allow\"}}\n"); assert.equal(r[0].decision,"allow"); console.log("replay.test.js passed");

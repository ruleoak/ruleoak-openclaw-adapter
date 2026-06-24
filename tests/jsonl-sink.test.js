import assert from "node:assert/strict";
import { createJsonlEvidenceSink } from "../src/index.js"; const s=createJsonlEvidenceSink(".tmp/openclaw-test.jsonl"); s.write({type:"x"}); assert.equal(typeof s.path,"string"); console.log("jsonl-sink.test.js passed");

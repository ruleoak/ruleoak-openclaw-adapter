import { createJsonlEvidenceSink, recordOpenClawAction, createOpenClawPolicy } from "../../src/index.js";
const sink=createJsonlEvidenceSink(".ruleoak/openclaw-evidence.jsonl");
await recordOpenClawAction({kind:"filesystem.read",path:"/tmp/a"}, async()=>({ok:true}), createOpenClawPolicy(), {evidenceSink:sink});
console.log(sink.path);

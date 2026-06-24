import assert from "node:assert/strict";
import { recordOpenClawAction, createOpenClawPolicy, createApprovalCallback } from "../src/index.js"; const r=await recordOpenClawAction({kind:"email.send"}, async()=>({sent:true}), createOpenClawPolicy(), {approvalCallback:createApprovalCallback("allow")}); assert.equal(r.result.executed,true); console.log("approval-callback.test.js passed");

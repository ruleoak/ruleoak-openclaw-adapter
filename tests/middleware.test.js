import assert from "node:assert/strict";
import { createOpenClawRuleOakMiddleware } from "../src/index.js"; const r=await createOpenClawRuleOakMiddleware()({kind:"filesystem.delete"}); assert.equal(r.executed,false); console.log("middleware.test.js passed");

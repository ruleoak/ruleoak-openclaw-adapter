import assert from "node:assert/strict";
import { normalizeOpenClawAction } from "../src/index.js"; assert.equal(normalizeOpenClawAction({kind:"mcp.tool_call",tool:"x"}).toolName,"mcp"); console.log("normalize-action.test.js passed");

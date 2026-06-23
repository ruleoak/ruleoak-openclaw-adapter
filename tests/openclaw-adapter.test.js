import { strict as assert } from "node:assert";
import { normalizeOpenClawAction, evaluateOpenClawAction, recordOpenClawAction } from "../src/index.js";
assert.equal(normalizeOpenClawAction({ kind: "filesystem.read", path: "/tmp/demo" }).toolName, "filesystem");
assert.equal(evaluateOpenClawAction({ kind: "filesystem.delete", path: "/tmp/demo" }).decision.decision, "deny");
const recorded = await recordOpenClawAction({ kind: "filesystem.read", path: "/tmp/demo" }, async () => ({ ok: true }));
assert.equal(recorded.result.executed, true);
console.log("openclaw-adapter.test.js passed");

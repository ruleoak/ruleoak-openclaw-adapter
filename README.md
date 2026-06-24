# @ruleoak/openclaw-adapter

OpenClaw-style adapter for RuleOak-compatible permission checks, approval callbacks, evidence records, and action replay.

This is **not an official OpenClaw integration**. It is a local OpenClaw-style action adapter for developers evaluating RuleOak patterns.

## Demos

```bash
npm run demo:file-delete
npm run demo:mcp-dangerous-tool
npm run examples:all
```

## Example

```js
import { createOpenClawRuleOakMiddleware } from "@ruleoak/openclaw-adapter";

const middleware = createOpenClawRuleOakMiddleware();
console.log(await middleware({ kind: "filesystem.delete", path: "/protected" }));
```

MIT. Copyright (c) 2026 Sun Shaobin and RuleOak contributors. Contact: hello@ruleoak.com.

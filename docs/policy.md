# policy

This package is an OpenClaw-style adapter, not an official project integration. It maps local action objects to RuleOak-compatible decisions and evidence. Contact: hello@ruleoak.com.

## Policy precedence

This OpenClaw-style adapter follows the RuleOak policy model:

1. `blockedActions` always wins.
2. `allowedActions` and `approvalRequired` are compared by pattern specificity.
3. If allow and approval match with the same specificity, `needs_approval` wins.
4. `defaultAction` applies only when no explicit policy pattern matches.

This allows policies such as `approvalRequired: ["filesystem.*"]` with a specific safe exception `allowedActions: ["filesystem.read"]`, while still preserving explicit deny as the highest-priority safety rule.

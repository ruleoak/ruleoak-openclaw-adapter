export function filesystemDecisionToRuleOakAction({ operation = "read", path = null, input = {} } = {}, policy = {}) {
  const risk = operation === "read" ? "low" : "high";
  return { toolName: "filesystem", operation, target: path, risk, input, metadata: { adapter: "openclaw-style", guard: "filesystem" } };
}

export function databaseDecisionToRuleOakAction({ operation = "query", sql = null, input = {}, database = null } = {}, policy = {}) {
  let op = operation;
  const text = String(sql || "").trim().toLowerCase();
  if (["drop", "truncate", "alter", "grant", "revoke"].some((x) => text.startsWith(x))) op = "destructive_ddl";
  else if (["insert", "update", "delete", "merge", "replace", "create"].some((x) => text.startsWith(x))) op = "mutation";
  else if (operation === "mutate") op = "mutation";
  else if (operation === "drop") op = "destructive_ddl";
  const risk = op === "query" ? "low" : "high";
  return { toolName: "database", operation: op, target: database, risk, input: { ...input, sql }, metadata: { adapter: "openclaw-style", guard: "database" } };
}

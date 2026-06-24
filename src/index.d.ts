export declare const OPENCLAW_STYLE_ADAPTER_VERSION: string;
export declare function normalizeOpenClawAction(input?: Record<string, unknown>): Record<string, unknown>;
export declare function evaluateOpenClawAction(input?: Record<string, unknown>, policy?: Record<string, unknown>): Record<string, unknown>;
export declare function recordOpenClawAction(input?: Record<string, unknown>, executor?: Function, policy?: Record<string, unknown>, options?: Record<string, unknown>): Promise<Record<string, unknown>>;
export declare function createOpenClawRuleOakMiddleware(options?: Record<string, unknown>): Function;

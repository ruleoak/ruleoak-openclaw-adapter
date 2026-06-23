# @ruleoak/openclaw-adapter v1.0.0

Optional OpenClaw-style adapter for RuleOak-compatible permission checks, evidence records, and action replay.

> This is an independent compatibility adapter. It is not an official OpenClaw integration and is not endorsed by OpenClaw maintainers.

## Use this repo when you need

- OpenClaw-style action normalization
- filesystem, shell, database, email, calendar, browser, skill-install, and secret-access action categories
- safe default deny / approval behavior
- RuleOak evidence records for OpenClaw-style agent actions
- local tests with no real OpenClaw dependency

## Public repository

- GitHub: https://github.com/ruleoak/ruleoak-openclaw-adapter
- Version: `1.0.0`
- License: `MIT`

## Relationship to RuleOak Core

This adapter is MIT-licensed to keep integration friction low. RuleOak Core remains the full Agent Firewall + Flight Recorder runtime and is licensed under `AGPL-3.0-or-later` with commercial licensing available.

## Install locally

```bash
npm install
npm test
npm run build
```

## License

MIT. See `LICENSE`.

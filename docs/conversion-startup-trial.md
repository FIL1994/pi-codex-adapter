# Conversion startup: tsdown trial

## Decision

Keep the published TypeScript build and package entry points unchanged. The opt-in
tsdown CommonJS trial substantially reduces repeat startup time on bundled Pi,
but is not a release-ready replacement. No changeset: this is development-only
measurement tooling, not a shipped runtime change.

## Reproduce safely

Use a separate worktree, never a checkout used by running Pi sessions:

```bash
bun install --frozen-lockfile --ignore-scripts
bun run --cwd packages/pi-codex-conversion build
bun run --cwd packages/pi-codex-conversion build:startup-trial
node scripts/benchmark-conversion-startup.mjs packages/pi-codex-conversion/dist/index.js
node scripts/benchmark-conversion-startup.mjs packages/pi-codex-conversion/dist-startup/index.cjs
```

The benchmark uses offline RPC, isolated temporary settings, no saved sessions,
no discovered resources, and no model requests. Readiness ends at the successful
`get_state` response, not the first UI notification. `PI_TIMING=1` records import
and registration separately. The first run forces Jiti cache rebuilding; subsequent
runs reuse its cache. This is **not** a cold OS page-cache benchmark. `PI_BIN` may
select another Pi executable without modifying installed plugin settings.

## Measurements

Historical measurements from the original trial remain in the live checkout and
are not treated as validation of this rebuilt tree. Record new measurements below.

## Validation

Validation results for this rebuilt tree will be appended after the build and
smoke checks. Native helper compatibility is assessed separately from TypeScript.

## Rebuild validation (upstream 94eb6c0)

Built the normal adapter and `dist-startup` trial successfully. Conversion check
passed all 122 tests when given a writable `XDG_RUNTIME_DIR`; web-run (2 tests)
and imagegen (1 test) checks passed. Bundled native binaries and all six Code
Mode host assets verified. The original native helper set was retained because
verification passed; no rebuild was needed.

The offline benchmark completed for both entries (two samples each). On this
machine, the normal build measured 494–836ms import and 1004–1477ms readiness;
the trial measured 38–1029ms import and 384–1412ms readiness. The first sample
includes Jiti cache rebuilding, so these are directional, not comparable cold
OS-cache measurements. An isolated offline RPC smoke loaded conversion, web-run,
and imagegen without errors and made no model requests.

The initial conversion check attempt failed only because the environment lacked
permission to create `/run/user/1000`; rerunning with a private writable runtime
directory passed. The lockfile was regenerated after frozen install correctly
reported the new tsdown dependency.

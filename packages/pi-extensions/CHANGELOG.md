# @howaboua/pi-extensions

## 0.0.16

### Changes

- Include bundled package updates:

  - @howaboua/pi-smart-btw: Uses GPT-5.6 Luna for side-session questions by default.
  - @howaboua/pi-subagent-review: Uses GPT-5.6 Sol for reviews and GPT-5.6 Luna for conversation summaries by default.
  - @howaboua/pi-explore-subagents: Uses GPT-5.6 Luna for shallow discovery and GPT-5.6 Terra for deep discovery by default.

- Updated dependencies [[`dc0d253`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/dc0d25382e1b650e024cc235e23ea62117784e23), [`dc0d253`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/dc0d25382e1b650e024cc235e23ea62117784e23), [`dc0d253`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/dc0d25382e1b650e024cc235e23ea62117784e23)]:
  - @howaboua/pi-explore-subagents@0.1.12
  - @howaboua/pi-subagent-review@0.2.7
  - @howaboua/pi-smart-btw@0.2.4

## 0.0.15

### Changes

- Include bundled package updates:

  - @howaboua/pi-markdown-workflows: Pins compatibility checks to Pi 0.80.6 and verifies current session, TUI, tool, and file-mutation APIs.
  - @howaboua/pi-auto-reasoning-tool: Preserves the user's reasoning floor through Pi 0.80.6 retries, compaction, and queued continuations while keeping autonomous choices capped at high.
  - @howaboua/pi-auto-trees: Pins compatibility checks to Pi 0.80.6 and verifies current session, TUI, tool, and file-mutation APIs.
  - @howaboua/pi-smart-btw: Persists display-only BTW results with Pi 0.80.6 entry renderers and waits for settled child runs without limiting active work time.
  - @howaboua/pi-subagent-review: Runs review summaries through Pi's public session SDK and uses settled RPC completion with Pi 0.80.6 thinking levels.
  - @howaboua/pi-vent: Pins compatibility checks to Pi 0.80.6 and verifies current session, TUI, tool, and file-mutation APIs.
  - @howaboua/pi-memories: Runs memory distillation only when Pi quits and accepts the Pi 0.80.6 max thinking level.
  - @howaboua/pi-explore-subagents: Uses Pi 0.80.6 `agent_settled` completion, accepts max thinking configs, and keeps active subagent work free of wall-clock limits.
  - @howaboua/pi-semantic-grep: Compiles against Pi 0.80.6 extension and renderer types without local module shims and cleans up indexing state on shutdown.

- Updated dependencies [[`4be919f`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/4be919fea3c8ef6aba79f4a66907bc80d30908d4), [`4be919f`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/4be919fea3c8ef6aba79f4a66907bc80d30908d4), [`4be919f`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/4be919fea3c8ef6aba79f4a66907bc80d30908d4), [`4be919f`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/4be919fea3c8ef6aba79f4a66907bc80d30908d4), [`4be919f`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/4be919fea3c8ef6aba79f4a66907bc80d30908d4), [`4be919f`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/4be919fea3c8ef6aba79f4a66907bc80d30908d4), [`4be919f`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/4be919fea3c8ef6aba79f4a66907bc80d30908d4)]:
  - @howaboua/pi-auto-reasoning-tool@0.1.9
  - @howaboua/pi-explore-subagents@0.1.11
  - @howaboua/pi-memories@0.1.3
  - @howaboua/pi-semantic-grep@0.1.16
  - @howaboua/pi-smart-btw@0.2.3
  - @howaboua/pi-subagent-review@0.2.6
  - @howaboua/pi-auto-trees@0.1.8
  - @howaboua/pi-markdown-workflows@0.2.17
  - @howaboua/pi-vent@0.2.9

## 0.0.14

### Changes

- Include bundled package updates:

  - @howaboua/pi-markdown-workflows: Refines the standalone and bundled skill creation guidance, and hardens the checker with Pi limits and supporting-file suggestions.

- Updated dependencies [[`ff8d5cf`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/ff8d5cf9412ec07fea8b613f0aadc906c6c398f9)]:
  - @howaboua/pi-markdown-workflows@0.2.16

## 0.0.13

### Changes

- Include bundled package updates:

  - @howaboua/pi-subagent-review: Fixes Pi 0.80 extension loading for review summary model calls.

- Updated dependencies [[`2a4371b`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/2a4371b67bcf69f5237152e087c6998b4810ab5a)]:
  - @howaboua/pi-subagent-review@0.2.5

## 0.0.12

### Changes

- Include bundled package updates:

  - @howaboua/pi-markdown-workflows: Updates Pi core package compatibility for Pi 0.80.1 and migrates summary model calls to the Pi 0.80 raw API entrypoints.
  - @howaboua/pi-auto-reasoning-tool: Updates Pi core package compatibility for Pi 0.80.1 and migrates summary model calls to the Pi 0.80 raw API entrypoints.
  - @howaboua/pi-auto-trees: Updates Pi core package compatibility for Pi 0.80.1 and migrates summary model calls to the Pi 0.80 raw API entrypoints.
  - @howaboua/pi-smart-btw: Updates Pi core package compatibility for Pi 0.80.1 and migrates summary model calls to the Pi 0.80 raw API entrypoints.
  - @howaboua/pi-subagent-review: Updates Pi core package compatibility for Pi 0.80.1 and migrates summary model calls to the Pi 0.80 raw API entrypoints.
  - @howaboua/pi-vent: Updates Pi core package compatibility for Pi 0.80.1 and migrates summary model calls to the Pi 0.80 raw API entrypoints.
  - @howaboua/pi-memories: Updates Pi core package compatibility for Pi 0.80.1 and migrates summary model calls to the Pi 0.80 raw API entrypoints.
  - @howaboua/pi-explore-subagents: Updates Pi core package compatibility for Pi 0.80.1 and migrates summary model calls to the Pi 0.80 raw API entrypoints.
  - @howaboua/pi-semantic-grep: Updates Pi core package compatibility for Pi 0.80.1 and migrates summary model calls to the Pi 0.80 raw API entrypoints.

- Updated dependencies [[`1a4302a`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/1a4302ad02a122480aeba29deacaa6f8925571ad)]:
  - @howaboua/pi-auto-reasoning-tool@0.1.8
  - @howaboua/pi-auto-trees@0.1.7
  - @howaboua/pi-explore-subagents@0.1.10
  - @howaboua/pi-markdown-workflows@0.2.15
  - @howaboua/pi-memories@0.1.2
  - @howaboua/pi-semantic-grep@0.1.15
  - @howaboua/pi-smart-btw@0.2.2
  - @howaboua/pi-subagent-review@0.2.4
  - @howaboua/pi-vent@0.2.8

## 0.0.11

### Changes

- Include bundled package updates:

  - @howaboua/pi-semantic-grep: Streams semantic search rows from SQLite and keeps only the best matches in memory, avoiding heap exhaustion on large indexes.

- Updated dependencies [[`f0aeb2a`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/f0aeb2ae53397a4adfd084911a8ef201dcf5d89e)]:
  - @howaboua/pi-semantic-grep@0.1.14

## 0.0.10

### Changes

- Include bundled package updates:

  - @howaboua/pi-subagent-review: Bumps Pi package peer and runtime dependencies to 0.79.0. Updates `@howaboua/pi-subagent-review` review messages so isolated findings are triaged as advisory input, not treated as automatic implementation work.
  - @howaboua/pi-markdown-workflows: Bumps Pi package peer and runtime dependencies to 0.79.0. Updates `@howaboua/pi-subagent-review` review messages so isolated findings are triaged as advisory input, not treated as automatic implementation work.
  - @howaboua/pi-auto-trees: Bumps Pi package peer and runtime dependencies to 0.79.0. Updates `@howaboua/pi-subagent-review` review messages so isolated findings are triaged as advisory input, not treated as automatic implementation work.
  - @howaboua/pi-semantic-grep: Bumps Pi package peer and runtime dependencies to 0.79.0. Updates `@howaboua/pi-subagent-review` review messages so isolated findings are triaged as advisory input, not treated as automatic implementation work.
  - @howaboua/pi-vent: Bumps Pi package peer and runtime dependencies to 0.79.0. Updates `@howaboua/pi-subagent-review` review messages so isolated findings are triaged as advisory input, not treated as automatic implementation work.
  - @howaboua/pi-smart-btw: Bumps Pi package peer and runtime dependencies to 0.79.0. Updates `@howaboua/pi-subagent-review` review messages so isolated findings are triaged as advisory input, not treated as automatic implementation work.
  - @howaboua/pi-explore-subagents: Bumps Pi package peer and runtime dependencies to 0.79.0. Updates `@howaboua/pi-subagent-review` review messages so isolated findings are triaged as advisory input, not treated as automatic implementation work.
  - @howaboua/pi-auto-reasoning-tool: Bumps Pi package peer and runtime dependencies to 0.79.0. Updates `@howaboua/pi-subagent-review` review messages so isolated findings are triaged as advisory input, not treated as automatic implementation work.

- Updated dependencies [[`f380d72`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/f380d721c2fbd9956d730cae456aa7f38e4f0546)]:
  - @howaboua/pi-auto-reasoning-tool@0.1.7
  - @howaboua/pi-auto-trees@0.1.6
  - @howaboua/pi-explore-subagents@0.1.9
  - @howaboua/pi-markdown-workflows@0.2.14
  - @howaboua/pi-semantic-grep@0.1.13
  - @howaboua/pi-smart-btw@0.2.1
  - @howaboua/pi-subagent-review@0.2.3
  - @howaboua/pi-vent@0.2.7

## 0.0.9

### Changes

- Include bundled package updates:

  - @howaboua/pi-markdown-workflows: Teach skill creation to quote frontmatter descriptions and make the efficiency checker flag unsafe unquoted YAML scalars with line and caret output.

- Updated dependencies [[`2f03bc0`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/2f03bc04bfac5d7c41db7d3f53280baefa3a5ccc)]:
  - @howaboua/pi-markdown-workflows@0.2.13

## 0.0.8

### Changes

- Include bundled package updates:

  - @howaboua/pi-explore-subagents: Persist only minimal explore subagent result metadata in parent sessions instead of the child subagent transcript.

- Updated dependencies [[`f852b3d`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/f852b3d94d3d7551e59f1dfa323d9978383b68d1)]:
  - @howaboua/pi-explore-subagents@0.1.8

## 0.0.7

### Changes

- Include bundled package updates:

  - @howaboua/pi-auto-reasoning-tool: Restore reasoning to the current agent turn's starting level instead of reusing the first level captured after extension load.

- Updated dependencies [[`008e017`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/008e01742bad5d743d23f6f445d8defb04610ee3)]:
  - @howaboua/pi-auto-reasoning-tool@0.1.6

## 0.0.6

### Changes

- Include bundled package updates:

  - @howaboua/pi-subagent-review: Fix review-loop marker placement so the advisory preface remains in history instead of being pasted into the prompt during loop summarization, send review findings as custom review messages in all paths, harden smart-btw slot bounds and answer handling, improve subdirectory context discovery from shell output, and remove a missing file from the skills aggregate package manifest.
  - @howaboua/pi-markdown-workflows: Fix review-loop marker placement so the advisory preface remains in history instead of being pasted into the prompt during loop summarization, send review findings as custom review messages in all paths, harden smart-btw slot bounds and answer handling, improve subdirectory context discovery from shell output, and remove a missing file from the skills aggregate package manifest.
  - @howaboua/pi-smart-btw: Multi-slot BTW sessions with JSONL restore, tombstones, inject-and-clear, and configurable alt shortcuts.

- Updated dependencies [[`cf0ca88`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/cf0ca88feee5175cebda37043b0a0bfb5ad913d2), [`cf0ca88`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/cf0ca88feee5175cebda37043b0a0bfb5ad913d2)]:
  - @howaboua/pi-subagent-review@0.2.2
  - @howaboua/pi-smart-btw@0.2.0
  - @howaboua/pi-markdown-workflows@0.2.12

## 0.0.5

### Changes

- [#19](https://github.com/IgorWarzocha/howaboua-pi-stuff/pull/19) [`d312d81`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/d312d81f82e24645f7cc59f4b6ead1834afd19f9) Thanks [@IgorWarzocha](https://github.com/IgorWarzocha)! - Load aggregate extension entries through package-local shims so dependency resolution prefers the aggregate package's own installed dependency versions.

- Updated dependencies [[`d312d81`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/d312d81f82e24645f7cc59f4b6ead1834afd19f9), [`d312d81`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/d312d81f82e24645f7cc59f4b6ead1834afd19f9), [`d312d81`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/d312d81f82e24645f7cc59f4b6ead1834afd19f9)]:
  - @howaboua/pi-markdown-workflows@0.2.11
  - @howaboua/pi-auto-trees@0.1.5
  - @howaboua/pi-explore-subagents@0.1.7
  - @howaboua/pi-memories@0.1.1
  - @howaboua/pi-semantic-grep@0.1.12
  - @howaboua/pi-smart-btw@0.1.3
  - @howaboua/pi-subagent-review@0.2.1
  - @howaboua/pi-vent@0.2.6

## 0.0.4

### Changes

- Include bundled package updates:

  - @howaboua/pi-subagent-review: Add `/review loop` markers that summarize completed review-fix increments before the next review pass.

- Updated dependencies [[`26d4e8b`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/26d4e8b89fb050463bf5cf3486ba1fa0ba84d8b3)]:
  - @howaboua/pi-subagent-review@0.2.0

## 0.0.3

### Changes

- `@howaboua/pi-explore-subagents` now stores configuration in the user agent directory and migrates existing package-local config on first use.
- `@howaboua/pi-auto-trees` now shows temporary `/end` progress feedback while summarising back to the marker.

### Updated bundled packages

- `@howaboua/pi-explore-subagents@0.1.6`
- `@howaboua/pi-auto-trees@0.1.4`

## 0.0.2

### Changes

- [#6](https://github.com/IgorWarzocha/howaboua-pi-stuff/pull/6) [`e793612`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/e793612fb32a4f7e418f5d28772e6de75a5c26ad) Thanks [@IgorWarzocha](https://github.com/IgorWarzocha)! - Fix aggregate package resource paths so Pi can load installed dependency extensions and skills.

## 0.0.1

### Changes

- [`3c8c222`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/3c8c2222bb8d907a85517dd2155f8ea77d2441fb) Thanks [@IgorWarzocha](https://github.com/IgorWarzocha)! - Initial public release from the Howaboua Pi Stuff monorepo.

- Updated dependencies [[`3c8c222`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/3c8c2222bb8d907a85517dd2155f8ea77d2441fb), [`d57f0cb`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/d57f0cbb5b92ce5cb7cf4736b6012c5ff0bebaae), [`9a7890b`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/9a7890b63c7a9fb5be8ab2bdd16c41e78017a5b9)]:
  - @howaboua/pi-memories@0.1.0
  - @howaboua/pi-explore-subagents@0.1.5
  - @howaboua/pi-markdown-workflows@0.2.10
  - @howaboua/pi-semantic-grep@0.1.11
  - @howaboua/pi-smart-btw@0.1.2
  - @howaboua/pi-subagent-review@0.1.53
  - @howaboua/pi-vent@0.2.5

# @howaboua/pi-subagent-review

## 0.2.7

### Changes

- [#79](https://github.com/IgorWarzocha/howaboua-pi-stuff/pull/79) [`dc0d253`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/dc0d25382e1b650e024cc235e23ea62117784e23) Thanks [@IgorWarzocha](https://github.com/IgorWarzocha)! - Uses GPT-5.6 Sol for reviews and GPT-5.6 Luna for conversation summaries by default.

## 0.2.6

### Changes

- [#77](https://github.com/IgorWarzocha/howaboua-pi-stuff/pull/77) [`4be919f`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/4be919fea3c8ef6aba79f4a66907bc80d30908d4) Thanks [@IgorWarzocha](https://github.com/IgorWarzocha)! - Runs review summaries through Pi's public session SDK and uses settled RPC completion with Pi 0.80.6 thinking levels.

## 0.2.5

### Changes

- [#71](https://github.com/IgorWarzocha/howaboua-pi-stuff/pull/71) [`2a4371b`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/2a4371b67bcf69f5237152e087c6998b4810ab5a) Thanks [@IgorWarzocha](https://github.com/IgorWarzocha)! - Fixes Pi 0.80 extension loading for review summary model calls.

## 0.2.4

### Changes

- [#67](https://github.com/IgorWarzocha/howaboua-pi-stuff/pull/67) [`1a4302a`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/1a4302ad02a122480aeba29deacaa6f8925571ad) Thanks [@IgorWarzocha](https://github.com/IgorWarzocha)! - Updates Pi core package compatibility for Pi 0.80.1 and migrates summary model calls to the Pi 0.80 raw API entrypoints.

## 0.2.3

### Changes

- [#42](https://github.com/IgorWarzocha/howaboua-pi-stuff/pull/42) [`f380d72`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/f380d721c2fbd9956d730cae456aa7f38e4f0546) Thanks [@IgorWarzocha](https://github.com/IgorWarzocha)! - Bumps Pi package peer and runtime dependencies to 0.79.0.

  Updates `@howaboua/pi-subagent-review` review messages so isolated findings are triaged as advisory input, not treated as automatic implementation work.

## 0.2.2

### Changes

- [#22](https://github.com/IgorWarzocha/howaboua-pi-stuff/pull/22) [`cf0ca88`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/cf0ca88feee5175cebda37043b0a0bfb5ad913d2) Thanks [@IgorWarzocha](https://github.com/IgorWarzocha)! - Fix review-loop marker placement so the advisory preface remains in history instead of being pasted into the prompt during loop summarization, send review findings as custom review messages in all paths, harden smart-btw slot bounds and answer handling, improve subdirectory context discovery from shell output, and remove a missing file from the skills aggregate package manifest.

## 0.2.1

### Changes

- [#19](https://github.com/IgorWarzocha/howaboua-pi-stuff/pull/19) [`d312d81`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/d312d81f82e24645f7cc59f4b6ead1834afd19f9) Thanks [@IgorWarzocha](https://github.com/IgorWarzocha)! - Expose package-root extension entrypoints so aggregate extension packages can import dependency versions through normal package resolution.

## 0.2.0

### Changes

- [#15](https://github.com/IgorWarzocha/howaboua-pi-stuff/pull/15) [`26d4e8b`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/26d4e8b89fb050463bf5cf3486ba1fa0ba84d8b3) Thanks [@IgorWarzocha](https://github.com/IgorWarzocha)! - Add `/review loop` markers that summarize completed review-fix increments before the next review pass.

## 0.1.53

### Changes

- [#1](https://github.com/IgorWarzocha/howaboua-pi-stuff/pull/1) [`d57f0cb`](https://github.com/IgorWarzocha/howaboua-pi-stuff/commit/d57f0cbb5b92ce5cb7cf4736b6012c5ff0bebaae) Thanks [@IgorWarzocha](https://github.com/IgorWarzocha)! - Fix TypeScript errors under the shared workspace typecheck settings.

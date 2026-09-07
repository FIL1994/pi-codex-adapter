# Fork and local Codex plugins

## What this fork is

This fork tracks the upstream Howaboua Pi Stuff monorepo while retaining local
Codex adapter build changes. It is used to run the Codex plugins directly from a
checkout rather than waiting for npm releases. The upstream package names remain
unchanged; the root README describes the broader upstream project.

Fork-specific changes include Ubuntu 22.04 native build runners, a GLIBC 2.35
compatibility check, local Rust build optimizations, and a root `clean` command.
Local optimized binaries may be CPU-specific; do not assume they are portable
release artifacts.

Check `git remote -v` before syncing: `origin` is the fork and `upstream` is the
original project. Fetching or merging one does not update the other.

## Install all three plugins from a checkout

The updated source separates the Codex tools into three packages:

| Local package | Purpose | Entry point |
| --- | --- | --- |
| `packages/pi-codex-conversion` | Codex adapter, execution, patching, image inspection, Code/Notebook modes | `dist/index.js` via the package manifest |
| `packages/pi-codex-web-run` | Web search and navigation (`web_run`) | `index.ts` |
| `packages/pi-codex-imagegen` | Image generation and editing (`imagegen`) | `index.ts` |

Web search and image generation were removed from the adapter in 3.0.24. Install
both separate packages to keep those capabilities. They also work without the
adapter. Neither requires its own compilation step or the old Rust web/image
binaries.

Use a checkout that contains all three packages. From its repository root:

```bash
ROOT="$(pwd -P)"
bun install --frozen-lockfile --ignore-scripts
bun run --cwd packages/pi-codex-conversion build

# These commands change the default package list for future Pi sessions.
pi install "$ROOT/packages/pi-codex-conversion"
pi install "$ROOT/packages/pi-codex-web-run"
pi install "$ROOT/packages/pi-codex-imagegen"
```

Use the Pi, Node.js, and Bun versions required by the checkout's manifests.
The web/image packages require Pi >=0.84.4 and Node.js >=22.19.
Use `/login openai-codex` in Pi if Codex authentication is not already configured.

Local installs register paths without copying files. Keep the checkout and its
dependencies available. The adapter package loads its compiled output; installing
`packages/pi-codex-conversion/src/index.ts` instead loads source directly. Choose
one, not both. Web/image packages load their TypeScript source directly.

Before switching, use `pi list` to find the old adapter registration and remove
that exact source with `pi remove`. A new checkout path does not replace an old
path automatically. Do not load an old adapter with bundled web/image tools
alongside the new standalone tools, or register both npm and local copies.

## Rebuild and upgrade without disrupting running sessions

1. Prepare updates in a separate worktree. Do not merge, clean, install
   dependencies, or rebuild inside a checkout that running Pi sessions use.
2. Install dependencies and build there. Native helpers must also match the
   new sources and the host platform; a TypeScript build does not rebuild Rust.
   Follow the adapter's native build scripts when bundled helpers are incompatible.
3. Run package checks before changing the configured plugin paths:

   ```bash
   bun run --cwd packages/pi-codex-conversion check
   bun run --cwd packages/pi-codex-web-run check
   bun run --cwd packages/pi-codex-imagegen check
   bun run --cwd packages/pi-codex-conversion verify:codex-tool-binaries
   ```

   Binary verification covers every bundled platform, not just the current host.
   A passing local test suite does not establish cross-platform release readiness.
4. Switch all three registrations together and launch a new test session. Confirm
   the expected tools load, then smoke-test execution, search, and image generation.
5. Keep the old checkout and binaries intact until its sessions finish. Do not
   use `/reload` in those sessions. Changing settings is not an atomic hot swap:
   loaded code, later file reads, and launched native helpers can otherwise mix
   versions. Keep the previous package paths available for rollback.

Do not remove an old worktree merely because new sessions start successfully.
The `clean` commands delete build outputs and must not target a live checkout.

import { spawn } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

// Fresh processes and isolated Pi settings. No model requests or installed-path changes.
const entry = process.argv[2];
if (!entry) throw new Error("Usage: node scripts/benchmark-conversion-startup.mjs <entry> [runs=5]");
const runs = Number(process.argv[3] ?? 5);
if (!Number.isInteger(runs) || runs < 1) throw new Error("runs must be a positive integer");
const root = await mkdtemp(join(tmpdir(), "conversion-startup-"));
try {
  for (let trial = 0; trial < runs; trial++) {
    const state = await mkdtemp(join(root, "agent-"));
    const start = performance.now();
    const child = spawn(process.env.PI_BIN ?? "pi", [
      "--offline", "--mode", "rpc", "--no-session", "-ne", "-ns", "-np", "-nc", "--no-themes", "-e", resolve(entry),
    ], {
      cwd: state,
      env: { ...process.env, PI_CODING_AGENT_DIR: state, PI_TIMING: "1", TMPDIR: root, JITI_REBUILD_FS_CACHE: trial === 0 ? "1" : "0" },
      stdio: ["pipe", "pipe", "pipe"],
    });
    let stderr = "";
    let pending = "";
    let readiness;
    let failure;
    const timeout = setTimeout(() => { failure = new Error("RPC readiness timed out"); child.kill("SIGKILL"); }, 30_000);
    child.stderr.setEncoding("utf8").on("data", data => { stderr += data; });
    child.stdout.setEncoding("utf8").on("data", data => {
      pending += data;
      let end;
      while ((end = pending.indexOf("\n")) >= 0) {
        const line = pending.slice(0, end);
        pending = pending.slice(end + 1);
        let response;
        try { response = JSON.parse(line); } catch { continue; }
        if (response.id !== "startup-ready") continue;
        if (!response.success) failure = new Error(line);
        readiness = performance.now() - start;
        child.kill("SIGTERM");
      }
    });
    child.stdin.on("error", error => { failure ??= error; });
    const closed = new Promise((resolve, reject) => {
      child.once("error", reject);
      child.once("close", resolve);
    });
    child.stdin.write('{"id":"startup-ready","type":"get_state"}\n');
    try { await closed; } finally { clearTimeout(timeout); }
    if (failure || readiness === undefined) throw failure ?? new Error(stderr || "Pi exited before readiness");
    console.log(JSON.stringify({ trial, cache: trial === 0 ? "cold-jiti" : "warm-jiti", ready_ms: Math.round(readiness * 10) / 10, stderr }));
  }
} finally {
  await rm(root, { recursive: true, force: true });
}

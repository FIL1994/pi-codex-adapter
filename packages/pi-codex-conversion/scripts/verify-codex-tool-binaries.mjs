#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const MAX_LINUX_GLIBC = { major: 2, minor: 35 };
const platforms = ["linux-x64", "linux-arm64", "darwin-x64", "darwin-arm64", "win32-x64", "win32-arm64"];
const tools = [
	{ dir: "apply-patch", unix: "apply_patch", win: "apply_patch.exe" },
	{ dir: "exec", unix: "exec_bridge", win: "exec_bridge.exe" },
	{ dir: "view-image", unix: "view_image", win: "view_image.exe" },
	{ dir: "web-run", unix: "web_run", win: "web_run.exe" },
	{ dir: "imagegen", unix: "imagegen", win: "imagegen.exe" },
];

function compareGlibc(a, b) {
	if (a.major !== b.major) return a.major - b.major;
	return a.minor - b.minor;
}

function formatGlibc(version) {
	return `GLIBC_${version.major}.${version.minor}`;
}

function requiredGlibc(path) {
	const content = readFileSync(path).toString("latin1");
	const matches = content.matchAll(/GLIBC_(\d+)\.(\d+)/g);
	let max;
	for (const match of matches) {
		const version = { major: Number(match[1]), minor: Number(match[2]) };
		if (!max || compareGlibc(version, max) > 0) max = version;
	}
	return max;
}

const missing = [];
const incompatibleGlibc = [];
for (const platformArch of platforms) {
	for (const tool of tools) {
		const exe = platformArch.startsWith("win32-") ? tool.win : tool.unix;
		const path = join("src", "tools", tool.dir, "bin", platformArch, exe);
		if (!existsSync(path)) {
			missing.push(path);
			continue;
		}
		if (platformArch.startsWith("linux-")) {
			const glibc = requiredGlibc(path);
			if (glibc && compareGlibc(glibc, MAX_LINUX_GLIBC) > 0) incompatibleGlibc.push({ path, glibc });
		}
	}
}

if (missing.length > 0) {
	console.error("Refusing to publish: bundled Codex tool binaries are incomplete.");
	console.error("Missing:");
	for (const path of missing) console.error(`  - ${path}`);
	console.error("Run the GitHub Actions binary workflow and commit the downloaded artifacts.");
	process.exit(1);
}

if (incompatibleGlibc.length > 0) {
	console.error(`Refusing to publish: Linux Codex tool binaries require newer than ${formatGlibc(MAX_LINUX_GLIBC)}.`);
	console.error("Incompatible binaries:");
	for (const { path, glibc } of incompatibleGlibc) console.error(`  - ${path}: ${formatGlibc(glibc)}`);
	console.error("Run the Codex tool binary workflow on Ubuntu 22.04 runners and commit the downloaded artifacts.");
	process.exit(1);
}

console.log("All bundled Codex tool binaries are present.");

import { relative, resolve, dirname, sep } from "node:path";
import { defineConfig } from "tsdown";

// Experimental only: keep the published build and entry points unchanged.
const root = import.meta.dirname;
const modulePaths = new Map<string, string>();

export default defineConfig({
  entry: ["src/index.ts"],
  format: "cjs",
  outDir: "dist-startup",
  dts: false,
  deps: { neverBundle: true },
  outputOptions: { exports: "named" },
  plugins: [{
    name: "preserve-conversion-module-locations",
    transform(code, id) {
      if (!id.startsWith(root + sep) || !id.endsWith(".ts")) return;
      // Include changelog in the loader-managed graph rather than native ESM.
      if (id === resolve(root, "src/index.ts")) {
        code = code.replace("changelogUrl.href", '"../changelog.ts"');
      }
      if (!code.includes("import.meta.url")) return code;
      const sourcePath = relative(root, id);
      const runtimePath = sourcePath.startsWith(`src${sep}`)
        ? sourcePath.replace(/^src[\\/]/, "dist/").replace(/\.ts$/, ".js")
        : sourcePath.replace(/\.ts$/, ".js");
      const marker = `__CONVERSION_MODULE_URL_${modulePaths.size}__`;
      modulePaths.set(marker, resolve(root, runtimePath));
      return code.replaceAll("import.meta.url", JSON.stringify(marker));
    },
    renderChunk(code, chunk) {
      for (const [marker, originalPath] of modulePaths) {
        const path = relative(dirname(resolve(root, "dist-startup", chunk.fileName)), originalPath).split(sep).join("/");
        code = code.replaceAll(JSON.stringify(marker), `new URL(${JSON.stringify(path)}, require("node:url").pathToFileURL(__filename)).href`);
      }
      return code;
    },
  }],
});

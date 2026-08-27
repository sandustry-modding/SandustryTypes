/**
 * Fail fast before npm pack/publish when the package layout or consumer
 * resolution is broken. Packs a real tarball and typechecks ambient + deep imports.
 */
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const ts = require("typescript");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

const tmpRoot = path.join(root, ".tmp", "verify-package");
fs.rmSync(tmpRoot, { recursive: true, force: true });
fs.mkdirSync(tmpRoot, { recursive: true });

/**
 * @param {string} message
 * @returns {never}
 */
function fail(message) {
  console.error(`verify-package: ${message}`);
  process.exit(1);
}

/** @param {string} rel */
function assertRealFile(rel) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) fail(`missing required package file: ${rel}`);
  if (fs.lstatSync(full).isSymbolicLink()) {
    fail(`${rel} must be a real file for npm pack (symlink targets are not packaged at this path)`);
  }
}

for (const rel of ["LICENSE", "CHANGELOG.md", "README.md", "src/global.d.ts"]) {
  assertRealFile(rel);
}

/** @type {string[]} */
const probes = [
  "src/sandkit/index.d.ts",
  "src/sandkit/engine/index.d.ts",
  "src/sandkit/engine/retro-console.d.ts",
  "src/sandkit/react.d.ts",
  "src/worker/sandkit-api.d.ts",
  "src/shared/index.d.ts",
];
for (const rel of probes) {
  if (!fs.existsSync(path.join(root, rel))) {
    fail(`missing declaration expected by exports: ${rel}`);
  }
}

const exportsMap = pkg.exports;
if (!exportsMap?.["./sandkit/*"]) {
  fail('package.json exports must define "./sandkit/*" for deep imports');
}
const sandkitStar = exportsMap["./sandkit/*"];
const sandkitTypes = sandkitStar?.types ?? sandkitStar;
if (!Array.isArray(sandkitTypes) || !sandkitTypes.some((t) => String(t).includes("index.d.ts"))) {
  fail(
    '"./sandkit/*" types must be an array that includes "./src/sandkit/*/index.d.ts" (Node * is one path segment)',
  );
}

if (pkg.types !== "./src/global.d.ts") {
  fail('package.json "types" must be "./src/global.d.ts"');
}
if (!Array.isArray(pkg.files) || !pkg.files.includes("src/**/*.d.ts")) {
  fail('package.json "files" must include "src/**/*.d.ts"');
}

// Pack without re-entering prepack (this script is the prepack gate).
const pack = spawnSync(
  process.platform === "win32" ? "npm.cmd" : "npm",
  ["pack", "--ignore-scripts", "--pack-destination", tmpRoot],
  { cwd: root, encoding: "utf8" },
);
if (pack.status !== 0) {
  console.error(pack.stdout);
  console.error(pack.stderr);
  fail("npm pack failed");
}

const tarballName = (pack.stdout.trim().split(/\n/).filter(Boolean).at(-1) ?? "").trim();
const tarballPath = path.join(tmpRoot, tarballName);
if (!tarballName || !fs.existsSync(tarballPath)) {
  fail(`npm pack did not produce a tarball (got ${JSON.stringify(tarballName)})`);
}

const extractDir = path.join(tmpRoot, "extract");
fs.mkdirSync(extractDir, { recursive: true });
const tar = spawnSync("tar", ["-xzf", tarballPath, "-C", extractDir], { encoding: "utf8" });
if (tar.status !== 0) {
  console.error(tar.stderr);
  fail("failed to extract packed tarball");
}

const packedRoot = path.join(extractDir, "package");
for (const rel of ["LICENSE", "CHANGELOG.md", "README.md", "package.json", "src/global.d.ts"]) {
  if (!fs.existsSync(path.join(packedRoot, rel))) {
    fail(`packed tarball missing ${rel}`);
  }
}
if (fs.existsSync(path.join(packedRoot, "docs"))) {
  fail("packed tarball must not include docs/ (keep API docs out of the npm package)");
}

const consumerDir = path.join(tmpRoot, "consumer");
const consumerPkg = path.join(consumerDir, "node_modules", "@sandustry-modding", "types");
fs.mkdirSync(path.dirname(consumerPkg), { recursive: true });
fs.symlinkSync(packedRoot, consumerPkg, "dir");

fs.writeFileSync(
  path.join(consumerDir, "ambient.ts"),
  [
    '/// <reference types="@sandustry-modding/types" />',
    "const api = sandkit.api;",
    "type MainApi = SandkitApi;",
    "type WorkerApi = WorkerSandkitApi;",
    "const _ok: MainApi = api;",
    "void _ok;",
    "type _W = WorkerApi;",
    "",
    'api.structures.addProcessor("demo:scanner", {',
    "  intervalMs: 1000,",
    "  process(structure, context) {",
    "    const x = structure.x;",
    "    const y = structure.y;",
    "    void context.isCellEmptyAtCell(x, y);",
    "  },",
    "});",
  ].join("\n"),
);

fs.writeFileSync(
  path.join(consumerDir, "deep.ts"),
  [
    'import type { RetroConsoleGame } from "@sandustry-modding/types/sandkit/engine";',
    'import type { Sandkit } from "@sandustry-modding/types/sandkit";',
    'import type { WorkerSandkitApi as WApi } from "@sandustry-modding/types/worker/sandkit-api";',
    'import type { RetroConsoleGame as R2 } from "@sandustry-modding/types/sandkit/engine/retro-console";',
    "const game: RetroConsoleGame | undefined = undefined;",
    "const kit: Sandkit | undefined = undefined;",
    "type _W = WApi;",
    "type _R = R2;",
    "void game;",
    "void kit;",
  ].join("\n"),
);

/**
 * @param {string} configName
 * @param {string[]} include
 * @param {Record<string, unknown>} extraOptions
 */
function writeTsconfig(configName, include, extraOptions = {}) {
  const configPath = path.join(consumerDir, configName);
  fs.writeFileSync(
    configPath,
    JSON.stringify(
      {
        compilerOptions: {
          module: "esnext",
          moduleResolution: "bundler",
          strict: true,
          noEmit: true,
          lib: ["ES2020", "DOM"],
          skipLibCheck: false,
          ...extraOptions,
        },
        include,
      },
      null,
      2,
    ),
  );
  return configPath;
}

const ambientConfig = writeTsconfig("tsconfig.ambient.json", ["ambient.ts"]);
const deepConfig = writeTsconfig("tsconfig.deep.json", ["deep.ts"]);

/**
 * @param {string} configPath
 * @param {string} label
 */
function typecheckConsumer(configPath, label) {
  const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
  if (configFile.error) {
    fail(`${label}: ${ts.flattenDiagnosticMessageText(configFile.error.messageText, "\n")}`);
  }
  const parsed = ts.parseJsonConfigFileContent(configFile.config, ts.sys, consumerDir);
  const program = ts.createProgram({
    rootNames: parsed.fileNames,
    options: parsed.options,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program);
  if (diagnostics.length) {
    for (const d of diagnostics) {
      const msg = ts.flattenDiagnosticMessageText(d.messageText, "\n");
      const file = d.file ? `${path.relative(consumerDir, d.file.fileName)}:` : "";
      console.error(`${label}: ${file}${msg}`);
    }
    fail(`${label} typecheck failed (${diagnostics.length} diagnostic(s))`);
  }
}

typecheckConsumer(ambientConfig, "ambient");
typecheckConsumer(deepConfig, "deep-imports");

console.log(`verify-package: ok (${tarballName})`);

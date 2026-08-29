#!/usr/bin/env node
/**
 * Generate JSON Schema files from `src/configs/` TypeScript declarations.
 * Usage: npm run docs:schemas
 *        npm run docs:schemas -- --check   # fail if committed schemas are stale
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function npmCli(platform = process.platform) {
  return platform === "win32" ? "npm.cmd" : "npm";
}

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SCRIPTS = join(ROOT, "scripts");
const OUT_DIR = join(ROOT, "docs", "schemas");
const ENTRY = join(ROOT, "src", "configs", "index.d.ts");
const TSCONFIG = join(ROOT, "tsconfig.json");
const GENERATOR_PKG = join(SCRIPTS, "node_modules", "ts-json-schema-generator");
const PAGES_BASE = "https://sandustry-modding.github.io/SandustryTypes/schemas";

/** @type {{ typeName: string, fileName: string, title: string }[]} */
const TARGETS = [
  {
    typeName: "ModInfo",
    fileName: "modinfo.json",
    title: "Sandkit modinfo.json",
  },
  {
    typeName: "BundlePatchesFile",
    fileName: "patches.json",
    title: "Sandkit patches.json",
  },
];

function ensureDocsDeps() {
  if (existsSync(GENERATOR_PKG)) return;
  console.log("Installing docs generator deps in scripts/ …");
  const install = spawnSync(npmCli(), ["install", "--no-audit", "--no-fund"], {
    cwd: SCRIPTS,
    stdio: "inherit",
    windowsHide: true,
  });
  if (install.status !== 0) process.exit(install.status ?? 1);
}

/**
 * Flatten TypeDoc-style `{@link Name}` tags for JSON Schema descriptions.
 * @param {unknown} value
 * @returns {unknown}
 */
function cleanDescriptions(value) {
  if (typeof value === "string") {
    return value
      .replace(/\s*\{@link\s+([^}\s]+)\s*\}\s*/g, " $1 ")
      .replace(/  +/g, " ")
      .replace(/[ \t]+\n/g, "\n")
      .trim();
  }
  if (Array.isArray(value)) return value.map(cleanDescriptions);
  if (value && typeof value === "object") {
    /** @type {Record<string, unknown>} */
    const out = {};
    for (const [key, child] of Object.entries(value)) {
      out[key] = cleanDescriptions(child);
    }
    return out;
  }
  return value;
}

/**
 * @param {Record<string, unknown>} schema
 * @param {{ typeName: string, fileName: string, title: string }} target
 */
function finalizeSchema(schema, target) {
  /** @type {Record<string, unknown>} */
  const out = {
    $schema: schema.$schema ?? "http://json-schema.org/draft-07/schema#",
    $id: `${PAGES_BASE}/${target.fileName}`,
    title: target.title,
  };

  for (const [key, value] of Object.entries(schema)) {
    if (key === "$schema") continue;
    out[key] = value;
  }

  return /** @type {Record<string, unknown>} */ (cleanDescriptions(out));
}

/**
 * @param {Record<string, unknown>} schema
 */
function formatSchema(schema) {
  return `${JSON.stringify(schema, null, 2)}\n`;
}

function main() {
  const checkOnly = process.argv.includes("--check");
  ensureDocsDeps();

  const require = createRequire(join(SCRIPTS, "package.json"));
  const { createGenerator } = require("ts-json-schema-generator");

  const generator = createGenerator({
    path: ENTRY,
    tsconfig: TSCONFIG,
    type: "*",
    jsDoc: "extended",
    additionalProperties: false,
    skipTypeCheck: true,
    topRef: false,
    minify: false,
  });

  mkdirSync(OUT_DIR, { recursive: true });

  let drifted = false;
  for (const target of TARGETS) {
    const raw = generator.createSchema(target.typeName);
    if (!raw) {
      console.error(`Failed to generate schema for ${target.typeName}`);
      process.exit(1);
    }
    const schema = finalizeSchema(raw, target);
    const text = formatSchema(schema);
    const outPath = join(OUT_DIR, target.fileName);

    if (checkOnly) {
      if (!existsSync(outPath)) {
        console.error(`Missing schema: ${outPath}`);
        drifted = true;
        continue;
      }
      const existing = readFileSync(outPath, "utf8");
      if (existing !== text) {
        console.error(`Stale schema: docs/schemas/${target.fileName} (run npm run docs:schemas)`);
        drifted = true;
      } else {
        console.log(`ok  docs/schemas/${target.fileName}`);
      }
      continue;
    }

    writeFileSync(outPath, text);
    console.log(`wrote docs/schemas/${target.fileName} ← ${target.typeName}`);
  }

  if (checkOnly && drifted) process.exit(1);
}

main();

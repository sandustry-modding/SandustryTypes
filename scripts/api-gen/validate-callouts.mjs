#!/usr/bin/env node
/**
 * Verify deprecated API callouts follow Docsify link rules.
 *
 * Usage:
 *   node scripts/api-gen/validate-callouts.mjs
 *   node scripts/api-gen/validate-callouts.mjs docs/api
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { validateDeprecatedCallouts } from "./docsify-links.mjs";

const API_GEN = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(dirname(API_GEN));

function toPosix(path) {
  return path.split("\\").join("/");
}

function walkMarkdownFiles(dir) {
  /** @type {string[]} */
  const files = [];
  if (!existsSync(dir)) return files;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkMarkdownFiles(full));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(full);
  }
  return files;
}

function main() {
  const docsDir = join(ROOT, process.argv[2] || "docs/api");
  if (!existsSync(docsDir) || !statSync(docsDir).isDirectory()) {
    console.error(`validate-callouts: docs folder not found: ${docsDir}`);
    process.exit(1);
  }

  const docsRoot = join(ROOT, "docs");
  const files = walkMarkdownFiles(docsDir).map((filePath) => ({
    rel: toPosix(filePath.slice(docsRoot.length + 1)),
    content: readFileSync(filePath, "utf8"),
  }));

  const errors = validateDeprecatedCallouts(files, (rel) => existsSync(join(docsRoot, rel)));
  if (!errors.length) {
    console.log(`validate-callouts: ${files.length} markdown files, deprecated callouts OK`);
    return;
  }

  for (const err of errors) {
    const href = err.href ? ` (${err.href})` : "";
    console.error(`${err.file}:${err.line}: ${err.message}${href}`);
  }
  console.error(`validate-callouts: ${errors.length} deprecated callout issue(s)`);
  process.exit(1);
}

main();

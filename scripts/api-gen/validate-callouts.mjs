#!/usr/bin/env node
/**
 * Verify deprecated API callouts follow Docsify link rules.
 *
 * Usage:
 *   node scripts/api-gen/validate-callouts.mjs
 *   node scripts/api-gen/validate-callouts.mjs /abs/path/to/api
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { isAbsolute, join } from "node:path";
import { validateDeprecatedCallouts } from "./docsify-links.mjs";
import { resolveDocsDir } from "./docs-dir.mjs";

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
  const docsRoot = resolveDocsDir();
  const docsDir = process.argv[2]
    ? isAbsolute(process.argv[2])
      ? process.argv[2]
      : join(docsRoot, process.argv[2])
    : join(docsRoot, "api");
  if (!existsSync(docsDir) || !statSync(docsDir).isDirectory()) {
    console.error(`validate-callouts: docs folder not found: ${docsDir}`);
    process.exit(1);
  }

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

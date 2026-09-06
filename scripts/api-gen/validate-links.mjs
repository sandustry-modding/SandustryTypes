#!/usr/bin/env node
/**
 * Check markdown links under a Docsify `docs/` folder.
 *
 * Usage:
 *   node scripts/api-gen/validate-links.mjs
 *   node scripts/api-gen/validate-links.mjs docs
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { validateDocsifyLinks } from "./docsify-links.mjs";

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
  const docsDir = join(ROOT, process.argv[2] || "docs");
  if (!existsSync(docsDir) || !statSync(docsDir).isDirectory()) {
    console.error(`validate-links: docs folder not found: ${docsDir}`);
    process.exit(1);
  }

  const files = walkMarkdownFiles(docsDir).map((filePath) => ({
    rel: toPosix(filePath.slice(docsDir.length + 1)),
    content: readFileSync(filePath, "utf8"),
  }));

  const errors = validateDocsifyLinks(files, (rel) => existsSync(join(docsDir, rel)));
  if (!errors.length) {
    console.log(`validate-links: ${files.length} markdown files, no broken Docsify links`);
    return;
  }

  for (const err of errors) {
    console.error(`${err.file}:${err.line}: ${err.message} (${err.href})`);
  }
  console.error(`validate-links: ${errors.length} broken link(s)`);
  process.exit(1);
}

main();

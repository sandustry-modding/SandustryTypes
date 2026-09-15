#!/usr/bin/env node
/**
 * Check markdown links under the Docsify site clone (`../docs`).
 *
 * Usage:
 *   node scripts/api-gen/validate-links.mjs
 *   node scripts/api-gen/validate-links.mjs /abs/path/to/docs
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { isAbsolute, join } from "node:path";
import { validateDocsifyLinks } from "./docsify-links.mjs";
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
  const docsDir = process.argv[2]
    ? isAbsolute(process.argv[2])
      ? process.argv[2]
      : join(resolveDocsDir(), process.argv[2])
    : resolveDocsDir();
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

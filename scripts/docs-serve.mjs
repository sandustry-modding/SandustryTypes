#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { resolveDocsDir } from "./api-gen/docs-dir.mjs";

const docsDir = resolveDocsDir();
const result = spawnSync("npx", ["--yes", "docsify-cli", "serve", docsDir], {
  stdio: "inherit",
});
process.exit(result.status ?? 1);

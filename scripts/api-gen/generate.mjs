#!/usr/bin/env node
/**
 * Unified Sandkit API documentation generator.
 *
 * Runs catalog build, Docsify markdown, and JSON Schema generation from
 * `scripts/api-gen/` (overrides, TypeDoc config, and intermediate outputs).
 *
 * Usage:
 *   npm run generate
 *   npm run generate -- --offline    # use .tmp/sandkit.html cache only
 *   npm run generate -- --check      # fail when catalog or schemas are stale
 *   npm run generate -- --catalog    # catalog + gaps only
 *   npm run generate -- --docs         # API markdown only
 *   npm run generate -- --schemas      # JSON Schema only
 */
import { runCatalog } from "./catalog.mjs";
import { runDocs } from "./docs.mjs";
import { runSchemas } from "./schemas.mjs";

const args = new Set(process.argv.slice(2));
const offline = args.has("--offline");
const check = args.has("--check");
const catalogOnly = args.has("--catalog");
const docsOnly = args.has("--docs");
const schemasOnly = args.has("--schemas");
const anyStage = catalogOnly || docsOnly || schemasOnly;

const runCatalogStep = !anyStage || catalogOnly;
const runDocsStep = !check && (!anyStage || docsOnly);
const runSchemasStep = !anyStage || schemasOnly;

/**
 * @param {string} message
 * @returns {never}
 */
function fail(message) {
  console.error(`api-gen: ${message}`);
  process.exit(1);
}

async function main() {
  if (runCatalogStep) {
    await runCatalog({ offline, check });
  }
  if (runDocsStep) {
    runDocs();
  }
  if (runSchemasStep) {
    runSchemas({ check });
  }
}

main().catch((err) => {
  fail(err instanceof Error ? err.message : String(err));
});

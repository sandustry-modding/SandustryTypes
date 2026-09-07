#!/usr/bin/env node
/**
 * Scrape the live Sandkit API from a running Sandustry renderer (CDP :9222).
 *
 * Usage:
 *   npm run scrape
 *   npm run scrape -- --port 9222
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { CdpConnection, DEFAULT_CDP_PORT, isCdpAvailable } from "./lib/cdp.mjs";
import {
  buildRuntimeApiDocument,
  scrapeRuntimeApiExpression,
} from "./lib/scrape-runtime.mjs";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const OUTPUT_PATH = join(ROOT, "scripts", "api-gen", "generated", "runtime-api.json");

const portArg = process.argv.find((arg, index) => process.argv[index - 1] === "--port");
const port = portArg ?? DEFAULT_CDP_PORT;

/**
 * @param {string} message
 * @returns {never}
 */
function fail(message) {
  console.error(`scrape: ${message}`);
  process.exit(1);
}

/**
 * @param {string} path
 * @param {string} next
 */
function writeOutput(path, next) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, next);
}

async function main() {
  if (!(await isCdpAvailable(port))) {
    fail(
      `CDP is not listening on :${port}. Start Sandustry with the debug port open (F5 or npm run sandustry).`,
    );
  }

  const connection = await CdpConnection.connect({ port });
  try {
    const expression = `(${scrapeRuntimeApiExpression.toString()})()`;
    const payload = await connection.evaluate(expression);
    if (!payload || typeof payload !== "object") {
      fail("runtime scrape returned no data");
    }

    let userAgent = null;
    try {
      userAgent = await connection.evaluate("navigator.userAgent");
    } catch {
      // optional metadata
    }

    const document = buildRuntimeApiDocument(payload, {
      port,
      pageTitle: connection.pageTitle ?? "",
      pageUrl: connection.pageUrl ?? "",
      userAgent: typeof userAgent === "string" ? userAgent : null,
    });

    const json = `${JSON.stringify(document, null, 2)}\n`;
    writeOutput(OUTPUT_PATH, json);

    console.log(`scrape: wrote ${OUTPUT_PATH}`);
    console.log(
      `scrape: ${document.stats.apiFunctionCount} api functions, ${document.stats.engineFunctionCount} engine.api functions, ${document.stats.enumNamespaceCount} enum namespaces`,
    );
  } finally {
    connection.close();
  }
}

main().catch((err) => {
  fail(err instanceof Error ? err.message : String(err));
});

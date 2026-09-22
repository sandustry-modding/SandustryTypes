/**
 * Build the Sandkit API catalog from overrides, official HTML, and declarations.
 */
import { mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  groupOfficialByNamespace,
  parseOfficialApiInventory,
} from "./lib/sandkit-html.mjs";
import {
  groupDeclaredByNamespace,
  isPathDeclared,
  scanDeclaredSandkitApi,
  scanWorkerNamespaces,
} from "./lib/scan-sandkit-api.mjs";

const API_GEN = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(dirname(API_GEN));
const OVERRIDES_PATH = join(API_GEN, "overrides.json");
const GENERATED_DIR = join(API_GEN, "generated");
const CATALOG_PATH = join(GENERATED_DIR, "api-catalog.json");
const SUMMARIES_PATH = join(GENERATED_DIR, "namespace-summaries.json");
const LEGACY_GAPS_PATH = join(GENERATED_DIR, "api-gaps.md");
const CACHE_PATH = join(ROOT, ".tmp", "sandkit.html");
const SRC = join(ROOT, "src");

/**
 * @param {string} message
 * @returns {never}
 */
function fail(message) {
  console.error(`api-gen: ${message}`);
  process.exit(1);
}

/**
 * @param {string} url
 */
async function fetchOfficialHtml(url) {
  console.log(`api-gen: fetching ${url}`);
  const response = await fetch(url);
  if (!response.ok) fail(`fetch failed: HTTP ${response.status} ${response.statusText}`);
  const html = await response.text();
  if (!html.includes("api-content")) fail("fetched page does not look like Sandkit docs");
  mkdirSync(dirname(CACHE_PATH), { recursive: true });
  writeFileSync(CACHE_PATH, html);
  return html;
}

/**
 * @param {string} url
 * @param {boolean} offline
 */
async function loadOfficialHtml(url, offline) {
  if (!offline) {
    try {
      return await fetchOfficialHtml(url);
    } catch (err) {
      try {
        const cached = readFileSync(CACHE_PATH, "utf8");
        console.warn(
          `api-gen: fetch failed (${err instanceof Error ? err.message : err}); using cache`,
        );
        return cached;
      } catch {
        fail(err instanceof Error ? err.message : String(err));
      }
    }
  }

  try {
    return readFileSync(CACHE_PATH, "utf8");
  } catch {
    fail(`missing cache ${CACHE_PATH}; run without --offline to fetch official HTML`);
  }
}

/**
 * @param {string} html
 * @param {object} overrides
 */
function buildCatalog(html, overrides) {
  const officialMembers = parseOfficialApiInventory(html);
  const officialByNs = groupOfficialByNamespace(officialMembers);
  const declaredMembers = scanDeclaredSandkitApi(SRC);
  const declaredByNs = groupDeclaredByNamespace(declaredMembers);
  const declaredPaths = new Set(declaredMembers.map((m) => m.path));
  const workerFromTypes = scanWorkerNamespaces(SRC);

  /** @type {Record<string, string>} */
  const aliases = overrides.aliases ?? {};
  /** @type {Array<{ path: string, note?: string }>} */
  const expectedMembers = overrides.expectedMembers ?? [];

  const namespaceNames = new Set([
    ...Object.keys(overrides.namespaces ?? {}),
    ...Object.keys(officialByNs),
    ...Object.keys(declaredByNs),
  ]);

  /** @type {Record<string, object>} */
  const namespaces = {};
  let openGapCount = 0;

  for (const name of [...namespaceNames].sort()) {
    const override = overrides.namespaces?.[name] ?? {};
    const official = officialByNs[name] ?? [];
    const declared = declaredByNs[name] ?? [];

    const officialPaths = [...new Set(official.map((m) => m.path))];
    const declaredPathsForNs = [...new Set(declared.map((m) => m.path))];

    /** @type {Array<{ path: string, note?: string, source: string }>} */
    const gaps = [];

    for (const path of officialPaths) {
      if (!isPathDeclared(declaredPaths, declaredMembers, aliases, path)) {
        gaps.push({ path, source: "official" });
      }
    }

    for (const entry of expectedMembers) {
      if (!entry.path.startsWith(`${name}.`) && entry.path.split(".")[0] !== name) continue;
      if (!isPathDeclared(declaredPaths, declaredMembers, aliases, entry.path)) {
        gaps.push({ path: entry.path, note: entry.note, source: "expected" });
      }
    }

    const deduped = [];
    const seen = new Set();
    for (const gap of gaps) {
      if (seen.has(gap.path)) continue;
      seen.add(gap.path);
      deduped.push(gap);
    }
    openGapCount += deduped.length;

    namespaces[name] = {
      description: override.description ?? "",
      worker: override.worker ?? workerFromTypes.has(name),
      methodCount: {
        official: officialPaths.length,
        declared: declaredPathsForNs.length,
      },
      officialMethods: officialPaths.sort(),
      declaredMethods: declaredPathsForNs.sort(),
      gaps: deduped,
    };
  }

  return {
    version: 1,
    generatedAt: new Date().toISOString(),
    officialSource: overrides.officialUrl ?? "https://sandustry.com/sandkit.html",
    stats: {
      namespaceCount: namespaceNames.size,
      officialMethodCount: officialMembers.length,
      declaredMethodCount: declaredMembers.length,
      openGapCount,
    },
    namespaces,
  };
}

/**
 * @param {ReturnType<typeof buildCatalog>} catalog
 */
function buildNamespaceSummaries(catalog) {
  /** @type {Record<string, { description: string, worker: boolean }>} */
  const out = {};
  for (const [name, ns] of Object.entries(catalog.namespaces)) {
    out[name] = {
      description: ns.description,
      worker: ns.worker,
    };
  }
  return out;
}

/**
 * @param {string} path
 * @param {string} next
 * @param {boolean} check
 */
function writeIfChanged(path, next, check) {
  let prev = null;
  try {
    prev = readFileSync(path, "utf8");
  } catch {
    // new file
  }
  if (check) {
    if (prev !== next) fail(`stale file: ${path} (run npm run generate)`);
    return;
  }
  writeFileSync(path, next);
}

/**
 * Remove the legacy gaps markdown report when present.
 */
function removeLegacyGapsFile() {
  try {
    unlinkSync(LEGACY_GAPS_PATH);
  } catch {
    // already gone
  }
}

/**
 * @param {ReturnType<typeof buildCatalog>} catalog
 */
function assertNoGaps(catalog) {
  if (catalog.stats.openGapCount === 0) return;
  const lines = [];
  for (const [name, ns] of Object.entries(catalog.namespaces)) {
    if (!ns.gaps.length) continue;
    for (const gap of ns.gaps) {
      lines.push(`  - ${gap.path}${gap.note ? ` (${gap.note})` : ""}`);
    }
  }
  fail(
    `${catalog.stats.openGapCount} open API catalog gap(s):\n${lines.join("\n")}\n` +
      "Add declarations, aliases, or expectedMembers in scripts/api-gen/overrides.json.",
  );
}

/**
 * @param {{ offline?: boolean, check?: boolean }} [options]
 */
export async function runCatalog(options = {}) {
  const { offline = false, check = false } = options;
  const overrides = JSON.parse(readFileSync(OVERRIDES_PATH, "utf8"));
  const html = await loadOfficialHtml(overrides.officialUrl, offline);
  const catalog = buildCatalog(html, overrides);
  assertNoGaps(catalog);
  const summaries = buildNamespaceSummaries(catalog);

  mkdirSync(GENERATED_DIR, { recursive: true });
  removeLegacyGapsFile();

  writeIfChanged(CATALOG_PATH, `${JSON.stringify(catalog, null, 2)}\n`, check);
  writeIfChanged(SUMMARIES_PATH, `${JSON.stringify(summaries, null, 2)}\n`, check);

  if (check) {
    console.log("api-gen: catalog ok (outputs up to date)");
    return catalog;
  }

  console.log(`api-gen: wrote ${CATALOG_PATH}`);
  console.log(`api-gen: wrote ${SUMMARIES_PATH}`);
  console.log(
    `api-gen: ${catalog.stats.officialMethodCount} official, ${catalog.stats.declaredMethodCount} declared, ${catalog.stats.openGapCount} gaps`,
  );
  return catalog;
}

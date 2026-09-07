/**
 * Walk live Sandkit surfaces in the Sandustry renderer and build inventories.
 */

/**
 * Browser-side scrape function.
 * Keep this self-contained for Runtime.evaluate.
 * @returns {object}
 */
export function scrapeRuntimeApiExpression() {
  const sk = typeof sandkit !== "undefined" ? sandkit : globalThis.sandkit;
  const electronBridge = globalThis.electron ?? globalThis.window?.electron ?? null;

  /**
   * @param {object | null | undefined} obj
   * @param {string} prefix
   * @param {number} depth
   * @returns {Array<{ path: string, kind: "function" }>}
   */
  function walkFunctions(obj, prefix = "", depth = 0) {
    if (!obj || typeof obj !== "object" || depth > 6) return [];
    /** @type {Array<{ path: string, kind: "function" }>} */
    const out = [];
    for (const key of Object.keys(obj).sort()) {
      const value = obj[key];
      const path = prefix ? `${prefix}.${key}` : key;
      if (typeof value === "function") {
        out.push({ path, kind: "function" });
        continue;
      }
      if (!value || typeof value !== "object" || Array.isArray(value)) continue;
      const proto = Object.getPrototypeOf(value);
      if (proto !== Object.prototype && proto !== null) continue;
      out.push(...walkFunctions(value, path, depth + 1));
    }
    return out;
  }

  if (!sk?.api) {
    return {
      ok: false,
      error:
        "sandkit.api is not available. Load a save in Sandustry so the modding API is initialized.",
    };
  }

  const apiMembers = walkFunctions(sk.api);
  const engineMembers = sk.engine?.api ? walkFunctions(sk.engine.api) : [];
  const electronMembers = electronBridge ? walkFunctions(electronBridge) : [];
  const enumNamespaces = sk.enums ? Object.keys(sk.enums).sort() : [];
  const reactKeys = sk.react ? Object.keys(sk.react).sort() : [];

  return {
    ok: true,
    apiVersion: sk.apiVersion ?? null,
    topLevelKeys: Object.keys(sk).sort(),
    surfaces: {
      api: apiMembers,
      "engine.api": engineMembers,
      electron: electronMembers,
    },
    enums: enumNamespaces,
    react: reactKeys,
    stats: {
      apiFunctionCount: apiMembers.length,
      engineFunctionCount: engineMembers.length,
      electronFunctionCount: electronMembers.length,
      enumNamespaceCount: enumNamespaces.length,
      reactExportCount: reactKeys.length,
    },
  };
}

/**
 * @param {ReturnType<typeof scrapeRuntimeApiExpression>} payload
 * @param {{ port: string, pageTitle: string, pageUrl: string, userAgent?: string }} source
 */
export function buildRuntimeApiDocument(payload, source) {
  if (!payload.ok) {
    throw new Error(payload.error || "runtime scrape failed");
  }

  return {
    version: 1,
    scrapedAt: new Date().toISOString(),
    source: {
      cdpPort: source.port,
      pageTitle: source.pageTitle,
      pageUrl: source.pageUrl,
      userAgent: source.userAgent ?? null,
    },
    apiVersion: payload.apiVersion,
    topLevelKeys: payload.topLevelKeys,
    surfaces: payload.surfaces,
    enums: payload.enums,
    react: payload.react,
    stats: payload.stats,
  };
}

/**
 * @param {Array<{ path: string, kind: string }>} members
 */
export function groupRuntimeByNamespace(members) {
  /** @type {Record<string, string[]>} */
  const out = {};
  for (const member of members) {
    const ns = member.path.split(".")[0];
    if (!ns) continue;
    (out[ns] ??= []).push(member.path);
  }
  for (const ns of Object.keys(out)) {
    out[ns].sort();
  }
  return out;
}

/**
 * Flatten sandkit.api members from a runtime scrape document.
 * @param {ReturnType<typeof buildRuntimeApiDocument>} doc
 */
export function runtimeApiMembers(doc) {
  return doc.surfaces.api ?? [];
}

/**
 * @param {ReturnType<typeof buildRuntimeApiDocument>} doc
 */
export function runtimeApiPaths(doc) {
  return runtimeApiMembers(doc).map((member) => member.path);
}

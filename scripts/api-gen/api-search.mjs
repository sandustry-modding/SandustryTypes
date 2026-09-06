/** Helpers for Docsify search over generated Sandkit API Markdown. */

import { rewriteDocsifyHref } from "./docsify-links.mjs";

const IGNORE_H2 = new Set([
  "Accessors",
  "Classes",
  "Constructors",
  "Enumerations",
  "Enumeration Members",
  "Functions",
  "Interfaces",
  "Methods",
  "Modules",
  "Namespaces",
  "Overrides",
  "Properties",
  "References",
  "Type Aliases",
  "Type Parameters",
  "Variables",
]);

const SKIP_SEARCH_FILES = new Set(["_sidebar.md", "AGENTS.md", "full.md", "search.md", "modules.md"]);

/**
 * TypeDoc names the composed host bags after the TypeScript alias.
 * Docs show the live `sandkit.*` path instead.
 */
const RUNTIME_BAG_TYPES = {
  Sandkit: "sandkit",
  SandkitApi: "sandkit.api",
  WorkerSandkitApi: "sandkit.api",
  SandkitEngine: "sandkit.engine",
  SandkitEngineApi: "sandkit.engine.api",
  SandkitState: "sandkit.state",
  SandkitEnums: "sandkit.enums",
  SandkitReact: "sandkit.react",
};

/**
 * @param {string} typeName
 * @param {boolean} worker
 * @returns {string | null}
 */
function runtimeBagPath(typeName, worker) {
  const runtime = RUNTIME_BAG_TYPES[typeName];
  if (!runtime) return null;
  if (typeName === "WorkerSandkitApi" || (worker && typeName === "SandkitApi")) {
    return `${runtime} (worker)`;
  }
  return runtime;
}

/**
 * Map a path under `docs/api/` (TypeDoc layout or flat slug) to the runtime name.
 * @param {string} relPosix
 * @returns {string | null}
 */
export function apiPathToQualifiedName(relPosix) {
  let p = relPosix.replaceAll("\\", "/");
  if (!p || p.endsWith("_sidebar.md")) return null;
  if (p === "README.md" || p === "types.md") return "Sandkit API types";
  if (p === "modules.md") return null;
  if (p === "_media" || p.startsWith("_media/") || p.startsWith("_media.")) return null;
  // Template ambient aliases (`global.d.ts`) — not the live Sandkit API.
  if (p === "global" || p.startsWith("global/")) return null;

  p = p.replace(/\/README\.md$/, "");
  p = p.replace(/\.md$/, "");
  p = p.replace(/^src\//, "");

  // Flat slug routes: sandkit.api.settings / sandkit.api.elements.worker
  if (p.includes(".") && !p.includes("/")) {
    if (p.endsWith(".worker")) {
      return `${p.slice(0, -".worker".length)} (worker)`;
    }
    return p;
  }

  let worker = false;
  if (p === "worker" || p.startsWith("worker/")) {
    worker = true;
    p = p === "worker" ? "sandkit/api" : p.replace(/^worker/, "sandkit/api");
  }

  if (p === "engine") return "sandkit.engine";
  if (p.startsWith("engine/")) {
    p = p.replace(/^engine/, "sandkit/engine/api");
  }

  p = p.replaceAll("/namespaces/", "/");
  p = p.replaceAll("/enumerations/", "/");

  const name = p.replaceAll("/", ".");
  return worker ? `${name} (worker)` : name;
}

/**
 * Docsify route slug for a qualified runtime name (no `.md`).
 * Example: `sandkit.api.action` → `sandkit.api.action`
 * Worker: `sandkit.api.elements (worker)` → `sandkit.api.elements.worker`
 * @param {string} qualified
 * @returns {string | null}
 */
export function qualifiedNameToSlug(qualified) {
  if (!qualified) return null;
  if (qualified === "Sandkit API types") return "types";
  if (qualified.endsWith(" (worker)")) {
    return `${qualified.slice(0, -" (worker)".length)}.worker`;
  }
  return qualified;
}

/**
 * TypeDoc-relative path under `docs/api/` → flat slug filename (`sandkit.api.action.md`).
 * @param {string} relPosix
 * @returns {string | null}
 */
export function apiPathToRouteFile(relPosix) {
  const qualified = apiPathToQualifiedName(relPosix);
  const slug = qualifiedNameToSlug(qualified);
  return slug ? `${slug}.md` : null;
}

/**
 * @param {string} raw
 * @returns {{ name: string, fn: boolean, strike: boolean, local: string } | null}
 */
function parseMemberHeading(raw) {
  let title = String(raw)
    .replace(/\s*:id=[A-Za-z0-9_.-]+\s*$/, "")
    .replace(/\s+<!--.*?-->\s*$/, "")
    .trim();
  const strike = /^~~(.+)~~$/.exec(title);
  const inner = strike ? strike[1].trim() : title;
  const fn = /^([A-Za-z_][\w]*)\(\)$/.exec(inner);
  const ident = /^([A-Za-z_][\w]*)$/.exec(inner);
  const name = fn ? fn[1] : ident ? ident[1] : null;
  if (!name) return null;
  return { name, fn: Boolean(fn), strike: Boolean(strike), local: fn ? `${name}()` : name };
}

/** @param {string} text */
function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Put the live `sandkit.*` path on the first identifier in a TypeDoc signature.
 * @param {string} sig
 * @param {string} localName
 * @param {string} qualifiedName
 */
export function qualifySignatureLine(sig, localName, qualifiedName) {
  const line = String(sig || "");
  if (line.startsWith(qualifiedName)) return line;
  const re = new RegExp(`^${escapeRegExp(localName)}(?=\\b)`);
  if (!re.test(line)) return line;
  return line.replace(re, qualifiedName);
}

/**
 * Rewrite TypeDoc headings so Docsify search can match `sandkit.api.settings.get`.
 * Put the absolute path in the following ```ts fence when one exists.
 * @param {string} content
 * @param {string} qualified
 */
export function qualifyApiMarkdown(content, qualified) {
  let out = content.replace(/^# .+$/m, `# ${qualified}`);

  out = out.replace(/^## (.+)$/gm, (line, title) => {
    const name = String(title)
      .replace(/\s*<!--.*?-->\s*$/, "")
      .trim();
    if (!IGNORE_H2.has(name)) return line;
    if (String(title).includes("docsify-ignore")) return line;
    return `## ${name} <!-- {docsify-ignore} -->`;
  });

  const worker = qualified.endsWith(" (worker)");
  const base = worker ? qualified.slice(0, -" (worker)".length) : qualified;
  const lines = out.split(/\r?\n/);
  /** @type {string[]} */
  const result = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const h3 = /^### (.+)$/.exec(line);
    if (!h3) {
      result.push(line);
      continue;
    }

    const parsed = parseMemberHeading(h3[1]);
    if (!parsed) {
      result.push(line);
      continue;
    }

    const runtime = !parsed.fn ? runtimeBagPath(parsed.name, worker) : null;
    if (runtime) {
      result.push(`### ${runtime} :id=${parsed.name.toLowerCase()}`);
      continue;
    }

    const id = parsed.name.toLowerCase();
    const heading = parsed.strike ? `### ~~${parsed.local}~~ :id=${id}` : `### ${parsed.local} :id=${id}`;
    result.push(heading);

    let j = i + 1;
    while (j < lines.length && lines[j].trim() === "") j++;
    if (j < lines.length && /class="smt-member-path"/.test(lines[j])) {
      j++;
      while (j < lines.length && lines[j].trim() === "") j++;
    }

    const core = `${base}.${parsed.name}`;
    if (j < lines.length && /^```ts\b/.test(lines[j])) {
      result.push("");
      result.push(lines[j]);
      j++;
      if (j < lines.length) {
        result.push(qualifySignatureLine(lines[j], parsed.name, core));
        j++;
      }
      i = j - 1;
      continue;
    }

    const qname = parsed.fn ? `${core}()` : core;
    const shown = worker ? `${qname} (worker)` : qname;
    result.push("");
    result.push(`<p class="smt-member-path"><code>${shown}</code></p>`);
    i = j - 1;
  }

  return result.join("\n");
}

/**
 * Docsify `search.paths` entries (leading slash, no `.md`).
 * @param {string} relFromDocs posix path under `docs/`
 * @returns {string | null}
 */
export function mdFileToSearchPath(relFromDocs) {
  const rel = relFromDocs.replaceAll("\\", "/");
  const base = rel.split("/").pop() || "";
  if (SKIP_SEARCH_FILES.has(base)) return null;
  if (!rel.endsWith(".md")) return null;
  // Template ambient aliases — not part of the published Sandkit API index.
  if (rel === "api/global.md" || rel.startsWith("api/global/")) return null;
  if (rel.split("/").some((part) => part.startsWith("_media"))) return null;

  let path = `/${rel.slice(0, -".md".length)}`;
  if (path === "/README") return "/";
  return path;
}

/**
 * @param {string[]} relFiles posix paths under `docs/`
 */
export function collectSearchPaths(relFiles) {
  const paths = [];
  const seen = new Set();

  for (const rel of relFiles) {
    const path = mdFileToSearchPath(rel);
    if (!path || seen.has(path)) continue;
    seen.add(path);
    paths.push(path);
  }

  paths.sort((a, b) => a.localeCompare(b));
  return paths;
}

/**
 * @param {string[]} paths
 */
export function renderSearchPathsScript(paths) {
  return `window.SMT_SEARCH_PATHS = ${JSON.stringify(paths, null, 2)};\n`;
}

/**
 * Strip markdown / HTML noise for search body text.
 * @param {string} text
 */
export function markdownToSearchText(text) {
  return String(text || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/<p class="smt-member-path">[\s\S]*?<\/p>/gi, " ")
    .replace(/<div class="smt-member-sig"[^>]*>/gi, " ")
    .replace(/<pre class="smt-member-sig"[^>]*>[\s\S]*?<\/pre>/gi, " ")
    .replace(/<p class="smt-member-badge">[\s\S]*?<\/p>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#>*_~|]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Build Docsify-ready search records from markdown under `docs/`.
 * Prefer the muted runtime path under each member heading as the result title.
 *
 * @param {Array<{ path: string, content: string }>} files
 *   `path` is the Docsify route (`/api/sandkit.api.settings`), not a filesystem path.
 * @returns {Array<{ title: string, body: string, path: string, id: string }>}
 */
export function buildSearchIndex(files) {
  /** @type {Array<{ title: string, body: string, path: string, id: string }>} */
  const out = [];

  for (const file of files) {
    const route = file.path;
    const lines = String(file.content || "").split(/\r?\n/);
    let pageTitle = route === "/" ? "Home" : route.replace(/^\//, "");
    /** @type {{ title: string, id: string, bodyLines: string[] } | null} */
    let current = null;

    const flush = () => {
      if (!current) return;
      const body = markdownToSearchText(current.bodyLines.join("\n"));
      out.push({
        title: current.title,
        body,
        path: route,
        id: current.id,
      });
      current = null;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const h1 = /^#\s+(.+?)(?:\s+<!--.*?-->)?\s*$/.exec(line);
      if (h1) {
        flush();
        pageTitle = h1[1].replace(/\s+<!--.*?-->\s*$/, "").trim();
        current = { title: pageTitle, id: "", bodyLines: [] };
        continue;
      }

      const h3 = /^###\s+(.+)$/.exec(line);
      if (h3) {
        flush();
        const raw = h3[1].trim();
        const idMatch = /\s*:id=([A-Za-z0-9_-]+)\s*$/.exec(raw);
        const id = idMatch ? idMatch[1] : "";
        let local = raw.replace(/\s*:id=[A-Za-z0-9_-]+\s*$/, "").trim();
        local = local.replace(/\s+<!--.*?-->\s*$/, "").trim();
        local = local.replace(/~~([^~]+)~~/g, "$1").trim();

        let title = local;
        // Prefer the absolute path in the signature fence, then a member-path line.
        for (let j = i + 1; j < Math.min(i + 12, lines.length); j++) {
          const dataSig = /data-sig="([^"]+)"/.exec(lines[j]);
          if (dataSig) {
            const sig = dataSig[1]
              .replace(/&quot;/g, '"')
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
              .replace(/&amp;/g, "&");
            const call = /^([\w.]+)\(/.exec(sig);
            const ident = /^([\w.]+)/.exec(sig);
            if (call) {
              title = `${call[1]}()`;
              break;
            }
            if (ident) {
              title = ident[1];
              break;
            }
          }
          if (/^```ts\b/.test(lines[j]) && j + 1 < lines.length) {
            const sig = lines[j + 1];
            const call = /^([\w.]+)\(/.exec(sig);
            const ident = /^([\w.]+)/.exec(sig);
            if (call) {
              title = `${call[1]}()`;
              break;
            }
            if (ident) {
              title = ident[1];
              break;
            }
          }
          const pathMatch = /<code>([^<]+)<\/code>/.exec(lines[j]);
          if (pathMatch) {
            title = pathMatch[1].replace(/~~([^~]+)~~/g, "$1").trim();
            break;
          }
          if (/^#{1,3}\s+/.test(lines[j])) break;
        }
        if (title === local && pageTitle && !local.includes(".")) {
          const bare = local.replace(/\(\)\s*$/, "");
          title = local.endsWith("()") ? `${pageTitle}.${bare}()` : `${pageTitle}.${local}`;
        }

        current = { title, id, bodyLines: [] };
        continue;
      }

      if (/^##\s+/.test(line)) {
        // Section banners are ignored headings; keep body under the page/member.
        continue;
      }

      if (current) current.bodyLines.push(line);
    }

    flush();
  }

  return out;
}

/**
 * @param {Array<{ title: string, body: string, path: string, id: string }>} entries
 */
export function renderSearchIndexScript(entries) {
  return `window.SMT_SEARCH_INDEX = ${JSON.stringify(entries, null, 2)};\n`;
}

/**
 * Rewrite `api/...` markdown hrefs using oldRel → newRel map (both under `api/`, with `.md`).
 * @param {string} content
 * @param {Map<string, string>} linkMap keys/values like `api/sandkit/api/namespaces/action/README.md`
 */
export function rewriteApiHrefMap(content, linkMap) {
  return content.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (match, label, href) => {
    const rewritten = rewriteMappedHref(href, linkMap);
    return rewritten === href ? match : `[${label}](${rewritten})`;
  });
}

/**
 * @param {string} href
 * @param {Map<string, string>} linkMap
 */
function rewriteMappedHref(href, linkMap) {
  const hashIndex = href.indexOf("#");
  const qIndex = href.indexOf("?");
  const cut =
    hashIndex >= 0 && (qIndex < 0 || hashIndex < qIndex)
      ? hashIndex
      : qIndex >= 0
        ? qIndex
        : -1;
  const pathPart = cut >= 0 ? href.slice(0, cut) : href;
  const tail = cut >= 0 ? href.slice(cut) : "";
  if (!pathPart.startsWith("api/") || !pathPart.endsWith(".md")) {
    return rewriteDocsifyHref(href);
  }
  const next = linkMap.get(pathPart) || pathPart;
  return rewriteDocsifyHref(`${next}${tail}`);
}

export { IGNORE_H2 };

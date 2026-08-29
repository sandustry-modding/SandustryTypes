#!/usr/bin/env node
/**
 * Generate Docsify Markdown API reference from Sandkit declarations.
 * Usage: npm run docs:api
 *
 * TypeDoc runs from scripts/ with TypeScript 5.9 (TypeDoc does not support TS 7 yet).
 * After TypeDoc, pages are flattened to runtime-style routes (`api/sandkit.api.action.md`).
 */
import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, normalize, relative } from "node:path";
import { fileURLToPath } from "node:url";
import {
  apiPathToQualifiedName,
  apiPathToRouteFile,
  buildSearchIndex,
  collectSearchPaths,
  mdFileToSearchPath,
  qualifyApiMarkdown,
  renderSearchIndexScript,
  renderSearchPathsScript,
  rewriteApiHrefMap,
} from "./api-search.mjs";

function npmCli(platform = process.platform) {
  return platform === "win32" ? "npm.cmd" : "npm";
}

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DOCS_SCRIPTS = join(ROOT, "scripts");
const DOCS = join(ROOT, "docs");
const OUT = join(DOCS, "api");
const TYPEDOC = join(DOCS_SCRIPTS, "node_modules/typedoc/bin/typedoc");
const CONFIG = join(DOCS_SCRIPTS, "typedoc.json");

/** Thematic groups for the Module index (names match top-level namespace folders). */
const MAIN_API_GROUPS = [
  {
    title: "Player & controls",
    names: ["player", "input", "action", "tools", "camera", "authorization", "cooldown"],
  },
  {
    title: "World & simulation",
    names: [
      "grid",
      "world",
      "pickups",
      "elements",
      "terrains",
      "entities",
      "fire",
      "excavation",
      "reactions",
      "raycast",
      "random",
      "time",
      "maps",
    ],
  },
  {
    title: "Factory & building",
    names: [
      "structures",
      "building",
      "processing",
      "collector",
      "energy",
      "structureBehaviors",
      "patterns",
      "pipes",
      "factory",
      "blueprints",
    ],
  },
  {
    title: "UI & media",
    names: ["ui", "sprites", "lights", "effects", "rendering", "sound", "i18n", "scene"],
  },
  {
    title: "Progression & items",
    names: ["tech", "upgrades", "discoveries", "progression", "resources", "items", "projectiles"],
  },
  {
    title: "Mods & runtime",
    names: [
      "mods",
      "settings",
      "storage",
      "assets",
      "hooks",
      "events",
      "triggers",
      "schedule",
      "workers",
      "shared",
      "signals",
      "utils",
      "constants",
      "gameConfig",
      "game",
    ],
  },
];

const ENGINE_API_GROUPS = [
  {
    title: "Game & factory",
    names: ["game", "factory", "conveyors", "queue", "heatTransfer"],
  },
  {
    title: "Entities & drones",
    names: ["entities", "drones", "sweeperDrone", "launchers", "swarmConsole"],
  },
  {
    title: "World & terrain",
    names: ["matters", "foliage", "wall", "shadows", "portals", "teleportZones", "strataform"],
  },
  {
    title: "Prefabs & blueprints",
    names: ["prefabData", "prefabDecor", "prefabulator", "blueprints", "clipboard"],
  },
  {
    title: "Materials & pickers",
    names: [
      "auralite",
      "prismaline",
      "prismite",
      "augments",
      "colorPicker",
      "coloringTool",
      "foundationColorPicker",
      "lightColorPicker",
    ],
  },
  {
    title: "Debug & misc",
    names: ["debug", "extensions", "misc", "tutorialBuild", "usageTracker", "workerLocal"],
  },
];

function ensureDocsDeps() {
  if (existsSync(TYPEDOC)) return;
  console.log("Installing docs generator deps in scripts/docs/ …");
  const install = spawnSync(npmCli(), ["install", "--no-audit", "--no-fund"], {
    cwd: DOCS_SCRIPTS,
    stdio: "inherit",
    windowsHide: true,
  });
  if (install.status !== 0) process.exit(install.status ?? 1);
}

ensureDocsDeps();

if (existsSync(OUT)) {
  rmSync(OUT, { recursive: true, force: true });
}

const result = spawnSync(process.execPath, [TYPEDOC, "--options", CONFIG], {
  stdio: "inherit",
  cwd: ROOT,
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

fixDocsifyLinks(OUT);
highlightTypeDocSignatures(OUT);
qualifyApiPages(OUT);

const mainNs = snapshotNamespaceTree(OUT, "sandkit/api");
const workerNs = snapshotNamespaceTree(OUT, "worker");
const engineNs = snapshotNamespaceTree(OUT, "engine");

const linkMap = flattenApiRoutes(OUT);
const leftoverTypedocIndex = join(OUT, "modules.md");
if (existsSync(leftoverTypedocIndex)) {
  rmSync(leftoverTypedocIndex, { force: true });
}
writeModuleIndex(DOCS, linkMap, mainNs, workerNs, engineNs);
writeFullPage(DOCS, OUT, linkMap, mainNs, workerNs, engineNs);
writeApiSidebar(DOCS, OUT, linkMap, mainNs, workerNs, engineNs);
rewriteGeneratedNavLinks(DOCS, linkMap);
writeSearchPaths(DOCS);

console.log("Wrote API docs to docs/api/ (index: docs/modules.md, docs/full.md)");

/**
 * @typedef {{ name: string, typedocRel: string, children: NamespaceNode[] }} NamespaceNode
 */

/**
 * @param {string} outDir
 * @param {string} modulePath e.g. sandkit/api
 * @returns {NamespaceNode[]}
 */
function snapshotNamespaceTree(outDir, modulePath) {
  for (const prefix of ["", "src/"]) {
    const nsDir = join(outDir, prefix + modulePath, "namespaces");
    if (!existsSync(nsDir)) continue;
    return listNamespaceNodes(nsDir, `${prefix}${modulePath}/namespaces`);
  }
  return [];
}

/**
 * @param {string} dir
 * @param {string} relPosix
 * @returns {NamespaceNode[]}
 */
function listNamespaceNodes(dir, relPosix) {
  const names = readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  /** @type {NamespaceNode[]} */
  const nodes = [];
  for (const name of names) {
    const typedocRel = `${relPosix}/${name}/README.md`;
    const childNs = join(dir, name, "namespaces");
    const children = existsSync(childNs)
      ? listNamespaceNodes(childNs, `${relPosix}/${name}/namespaces`)
      : [];
    nodes.push({ name, typedocRel, children });
  }
  return nodes;
}

/**
 * Move TypeDoc tree to flat runtime-style files (`sandkit.api.action.md`).
 * @returns {Map<string, string>} `api/old/path.md` → `api/sandkit.api.action.md`
 */
function flattenApiRoutes(outDir) {
  /** @type {Map<string, string>} */
  const linkMap = new Map();
  /** @type {{ routeFile: string, content: string }[]} */
  const pages = [];

  for (const filePath of walkMarkdownFiles(outDir)) {
    const base = filePath.split(/[/\\]/).pop() || "";
    if (base === "_sidebar.md" || base === "modules.md") continue;

    const rel = toPosixPath(filePath.slice(outDir.length + 1));
    const routeFile = apiPathToRouteFile(rel);
    if (!routeFile) continue;

    linkMap.set(`api/${rel}`, `api/${routeFile}`);
    const relWithoutSrc = rel.replace(/^src\//, "");
    if (relWithoutSrc !== rel) {
      linkMap.set(`api/${relWithoutSrc}`, `api/${routeFile}`);
    }
    pages.push({
      routeFile,
      content: readFileSync(filePath, "utf8"),
    });
  }

  for (const page of pages) {
    writeFileSync(join(outDir, page.routeFile), rewriteApiHrefMap(page.content, linkMap));
  }

  for (const entry of readdirSync(outDir, { withFileTypes: true })) {
    const full = join(outDir, entry.name);
    if (entry.isDirectory()) {
      rmSync(full, { recursive: true, force: true });
      continue;
    }
    if (!entry.isFile() || !entry.name.endsWith(".md")) continue;
    if (entry.name === "_sidebar.md" || entry.name === "modules.md") continue;
    if (pages.some((p) => p.routeFile === entry.name)) continue;
    if (linkMap.has(`api/${entry.name}`)) {
      rmSync(full, { force: true });
    }
  }

  return linkMap;
}

function rewriteGeneratedNavLinks(outDir, linkMap) {
  const filePath = join(outDir, "modules.md");
  if (!existsSync(filePath)) return;
  const content = readFileSync(filePath, "utf8");
  const fixed = rewriteApiHrefMap(content, linkMap);
  if (fixed !== content) writeFileSync(filePath, fixed);
}

/**
 * Expanded Module index with thematic groups.
 * @param {string} docsDir
 * @param {Map<string, string>} linkMap
 * @param {NamespaceNode[]} mainNs
 * @param {NamespaceNode[]} workerNs
 * @param {NamespaceNode[]} engineNs
 */
function writeModuleIndex(docsDir, linkMap, mainNs, workerNs, engineNs) {
  const href = (typedocRel) => linkMap.get(`api/${typedocRel}`) || `api/${typedocRel}`;
  const p = (slug) => `api/${slug}.md`;

  /** @type {string[]} */
  const lines = [
    '<div class="smt-api-landing">',
    "",
    "# Sandkit API",
    "",
    "Sandkit namespaces used by mods. Use groups below to find a namespace, or open [Full API reference](full.md).",
    "",
    "## Roots",
    "",
    `- [sandkit](${p("sandkit")}) — root object shape`,
    `- [Main thread](${p("sandkit.api")}) — \`sandkit.api\``,
    `- [Worker](${p("sandkit.api.worker")}) — worker-thread \`sandkit.api\``,
    `- [Engine](${p("sandkit.engine")}) — \`sandkit.engine\``,
    `- [React](${p("sandkit.react")}) — \`sandkit.react\``,
    `- [Enums](${p("sandkit.enums")}) — \`sandkit.enums\``,
    "- [Full API reference](full.md) — all namespaces on one page",
    "",
    "## Main thread (`sandkit.api`)",
    "",
    ...renderGroupedNamespaces(mainNs, href, MAIN_API_GROUPS),
    "",
    "## Worker (`sandkit.api`)",
    "",
    "Worker-thread namespaces. Same names as main where they overlap; pages use a `.worker` URL suffix.",
    "",
    ...renderFlatNamespaceList(workerNs, href),
    "",
    "## Engine (`sandkit.engine`)",
    "",
    ...renderGroupedNamespaces(engineNs, href, ENGINE_API_GROUPS),
    "",
    "## Enums",
    "",
    ...renderEnumList(linkMap),
    "",
    "## Shared domain types",
    "",
    `- [asset](${p("shared.asset")})`,
    `- [engine](${p("shared.engine")})`,
    `- [jsonvalue](${p("shared.jsonvalue")})`,
    `- [nominal](${p("shared.nominal")})`,
    `- [player](${p("shared.player")})`,
    "",
    "## Mod file schemas",
    "",
    "Not runtime `sandkit` objects. Import from `@sandustry-modding/types/configs`.",
    "",
    `- [configs](${p("configs")}) — \`modinfo.json\` and \`patches.json\``,
    "",
    "</div>",
    "",
  ];

  writeFileSync(join(docsDir, "modules.md"), `${lines.join("\n")}\n`);
}

/**
 * @param {NamespaceNode[]} nodes
 * @param {(rel: string) => string} href
 * @param {{ title: string, names: string[] }[]} groups
 */
function renderGroupedNamespaces(nodes, href, groups) {
  const byName = new Map(nodes.map((n) => [n.name, n]));
  const used = new Set();
  /** @type {string[]} */
  const out = [];

  for (const group of groups) {
    const members = group.names.map((name) => byName.get(name)).filter(Boolean);
    if (!members.length) continue;
    out.push(`### ${group.title}`);
    out.push("");
    out.push('<ul class="smt-api-group">');
    for (const node of members) {
      used.add(node.name);
      out.push(...namespaceIndexItems(node, href));
    }
    out.push("</ul>");
    out.push("");
  }

  const leftover = nodes.filter((n) => !used.has(n.name));
  if (leftover.length) {
    out.push("### Other");
    out.push("");
    out.push('<ul class="smt-api-group">');
    for (const node of leftover) {
      out.push(...namespaceIndexItems(node, href));
    }
    out.push("</ul>");
    out.push("");
  }

  return out;
}

/**
 * @param {NamespaceNode[]} nodes
 * @param {(rel: string) => string} href
 */
function renderFlatNamespaceList(nodes, href) {
  if (!nodes.length) return ["- _(none)_", ""];
  /** @type {string[]} */
  const out = ['<ul class="smt-api-group">'];
  for (const node of nodes) {
    out.push(...namespaceIndexItems(node, href));
  }
  out.push("</ul>", "");
  return out;
}

/**
 * Parent link, then a nested bullet list of children.
 * @param {NamespaceNode} node
 * @param {(rel: string) => string} href
 */
function namespaceIndexItems(node, href) {
  const link = `<a href="${docsifyHash(href(node.typedocRel))}">${node.name}</a>`;
  if (!node.children.length) {
    return [`<li>${link}</li>`];
  }
  const kids = node.children
    .map((c) => `<li><a href="${docsifyHash(href(c.typedocRel))}">${c.name}</a></li>`)
    .join("");
  return [`<li>${link}<ul class="smt-api-tree">${kids}</ul></li>`];
}

/** `api/foo.md` → `#/api/foo` */
function docsifyHash(apiMdHref) {
  const path = String(apiMdHref).replace(/\.md$/, "");
  return `#/${path.replace(/^\//, "")}`;
}

/**
 * @param {Map<string, string>} linkMap
 */
function renderEnumList(linkMap) {
  const enums = [...linkMap.values()]
    .filter((h) => /^api\/sandkit\.enums\.[A-Za-z][\w]*\.md$/.test(h))
    .map((h) => {
      const name = h.replace(/^api\/sandkit\.enums\./, "").replace(/\.md$/, "");
      return { name, href: h };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  if (!enums.length) {
    return [`- [sandkit.enums](api/sandkit.enums.md)`, ""];
  }

  /** @type {string[]} */
  const out = [`- [Overview](api/sandkit.enums.md)`, "", '<ul class="smt-api-group">'];
  for (const e of enums) {
    out.push(`<li><a href="${docsifyHash(e.href)}">${e.name}</a></li>`);
  }
  out.push("</ul>", "");
  return out;
}

/**
 * Docsify resolves links from the docs root, not the current page. Rewrite relative
 * TypeDoc links so they include the `api/` prefix from `docs/`.
 */
function fixDocsifyLinks(outDir) {
  for (const filePath of walkMarkdownFiles(outDir)) {
    if (filePath.endsWith("_sidebar.md")) continue;

    const pageDir = dirname(filePath);
    const relPageDir = toPosixPath(pageDir.slice(outDir.length + 1));
    const content = readFileSync(filePath, "utf8");
    const fixed = content.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (match, label, href) => {
      const rewritten = rewriteDocsifyHref(href, relPageDir);
      return rewritten === href ? match : `[${label}](${rewritten})`;
    });

    if (fixed !== content) writeFileSync(filePath, fixed);
  }
}

function rewriteDocsifyHref(href, relPageDir) {
  if (
    !href ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("/")
  ) {
    return href;
  }

  const hashIndex = href.indexOf("#");
  const pathPart = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";

  if (!pathPart || !pathPart.endsWith(".md")) return href;

  const resolved = normalize(join(relPageDir, pathPart));
  if (resolved.startsWith("..")) return href;

  return `api/${toPosixPath(resolved)}${hash}`;
}

function walkMarkdownFiles(dir) {
  const files = [];

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkMarkdownFiles(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(fullPath);
  }

  return files;
}

function toPosixPath(path) {
  return path.split("\\").join("/");
}

/**
 * TypeDoc emits API signatures as blockquotes. Rewrite them to fenced TypeScript
 * so Docsify + Prism can syntax-highlight names, types, and keywords.
 */
function highlightTypeDocSignatures(outDir) {
  for (const filePath of walkMarkdownFiles(outDir)) {
    if (filePath.endsWith("_sidebar.md")) continue;

    const content = readFileSync(filePath, "utf8");
    const fixed = content.replace(/^> (.+)$/gm, (match, body) => {
      return `\`\`\`ts\n${typedocSignatureToTs(body)}\n\`\`\``;
    });

    if (fixed !== content) writeFileSync(filePath, fixed);
  }
}

function typedocSignatureToTs(source) {
  let line = source;

  line = line.replace(/\\([[\]{}<>|\\])/g, "$1");
  line = line.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  line = line.replace(/\*\*([^*]+)\*\*/g, "$1");
  line = line.replace(/`([^`]+)`/g, "$1");

  return line.trim();
}

/**
 * One Markdown page with every API section inlined (module order, then leftovers).
 * @param {string} docsDir
 * @param {string} outDir
 * @param {Map<string, string>} linkMap
 * @param {NamespaceNode[]} mainNs
 * @param {NamespaceNode[]} workerNs
 * @param {NamespaceNode[]} engineNs
 */
function writeFullPage(docsDir, outDir, linkMap, mainNs, workerNs, engineNs) {
  const href = (typedocRel) => linkMap.get(`api/${typedocRel}`) || `api/${typedocRel}`;
  const routeName = (apiHref) => String(apiHref).replace(/^api\//, "");

  /** @type {string[]} */
  const preferred = [];
  const addPreferred = (apiHref) => {
    const name = routeName(apiHref);
    if (name && !preferred.includes(name)) preferred.push(name);
  };

  addPreferred(href("sandkit/README.md"));
  for (const name of namespaceRouteFiles(mainNs, href)) addPreferred(`api/${name}`);
  for (const name of namespaceRouteFiles(workerNs, href)) addPreferred(`api/${name}`);
  for (const name of namespaceRouteFiles(engineNs, href)) addPreferred(`api/${name}`);
  addPreferred(href("sandkit/enums/README.md"));
  for (const apiHref of [...linkMap.values()]
    .filter((h) => /^api\/sandkit\.enums\.[A-Za-z][\w]*\.md$/.test(h))
    .sort((a, b) => a.localeCompare(b))) {
    addPreferred(apiHref);
  }
  addPreferred(href("sandkit/react/README.md"));
  addPreferred("api/configs.md");
  addPreferred(href("shared/asset/README.md"));
  addPreferred(href("shared/engine/README.md"));
  addPreferred(href("shared/jsonvalue/README.md"));
  addPreferred(href("shared/nominal/README.md"));
  addPreferred(href("shared/player/README.md"));

  const skip = new Set(["_sidebar.md", "modules.md", "full.md"]);
  const onDisk = readdirSync(outDir)
    .filter((name) => name.endsWith(".md") && !skip.has(name))
    .sort((a, b) => a.localeCompare(b));
  const preferredSet = new Set(preferred);
  const files = [
    ...preferred.filter((name) => onDisk.includes(name)),
    ...onDisk.filter((name) => !preferredSet.has(name)),
  ];

  /** @type {string[]} */
  const parts = [
    "# Sandkit API (full) <!-- {docsify-ignore-all} -->",
    "",
    "Every generated API page on one document. Use the [Module index](modules.md) when you only need one namespace.",
    "",
  ];

  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    let body = readFileSync(join(outDir, file), "utf8").trim();
    body = demoteMarkdownHeadings(body);
    body = body.replace(/ :id=([A-Za-z0-9_-]+)/g, (_m, id) => ` :id=${slug}.${id}`);
    parts.push(body, "", "---", "");
  }

  writeFileSync(join(docsDir, "full.md"), `${parts.join("\n").trimEnd()}\n`);
}

/**
 * Write one site-wide sidebar at `docs/_sidebar.md` (no nested `api/_sidebar.md`).
 *
 * @param {string} docsDir
 * @param {string} outDir
 * @param {Map<string, string>} linkMap
 * @param {NamespaceNode[]} mainNs
 * @param {NamespaceNode[]} workerNs
 * @param {NamespaceNode[]} engineNs
 */
function writeApiSidebar(docsDir, outDir, linkMap, mainNs, workerNs, engineNs) {
  const href = (typedocRel) => linkMap.get(`api/${typedocRel}`) || `api/${typedocRel}`;
  const used = new Set();

  const pad = (level) => "  ".repeat(level);
  const link = (level, label, apiHref) => {
    const file = String(apiHref).replace(/^api\//, "");
    const md = file.endsWith(".md") ? file : `${file}.md`;
    used.add(md);
    return `${pad(level)}- [${label}](api/${md})`;
  };
  /** Non-clickable folder label inside a list (`- Player & controls`). */
  const heading = (level, title) => `${pad(level)}- ${title}`;
  /** Section banner: horizontal rule + markdown h1 (styled yellow in site.css). */
  const section = (title) => `---\n\n# ${title}`;

  const nodeLines = (node, level) => {
    /** @type {string[]} */
    const lines = [link(level, node.name, href(node.typedocRel))];
    for (const child of node.children) {
      lines.push(...nodeLines(child, level + 1));
    }
    return lines;
  };

  const grouped = (nodes, groups, level) => {
    const byName = new Map(nodes.map((n) => [n.name, n]));
    const seen = new Set();
    /** @type {string[]} */
    const out = [];
    for (const group of groups) {
      const members = group.names.map((name) => byName.get(name)).filter(Boolean);
      if (!members.length) continue;
      out.push(heading(level, group.title));
      for (const node of members) {
        seen.add(node.name);
        out.push(...nodeLines(node, level + 1));
      }
    }
    const leftover = nodes.filter((n) => !seen.has(n.name));
    if (leftover.length) {
      out.push(heading(level, "Other"));
      for (const node of leftover) {
        out.push(...nodeLines(node, level + 1));
      }
    }
    return out;
  };

  const ifFile = (filename, level, label) => {
    if (!existsSync(join(outDir, filename))) return [];
    return [link(level, label, `api/${filename}`)];
  };

  /** @type {string[]} */
  const lines = [
    "- [Home](/)",
    "- [Namespaces](modules.md)",
    ...ifFile("sandkit.md", 1, "sandkit"),
    ...ifFile("sandkit.api.md", 1, "sandkit.api"),
    ...ifFile("sandkit.api.worker.md", 1, "sandkit.api (worker)"),
    ...ifFile("sandkit.engine.md", 1, "sandkit.engine"),
    ...ifFile("sandkit.react.md", 1, "sandkit.react"),
    ...ifFile("configs.md", 0, "configs"),
    "- [Full API reference](full.md)",
    "",
    section("Main thread"),
    "",
    ...grouped(mainNs, MAIN_API_GROUPS, 0),
    "",
    section("Worker thread"),
    "",
    ...workerNs.flatMap((node) => nodeLines(node, 0)),
    "",
    section("Engine"),
    "",
    ...ifFile("sandkit.engine.api.md", 0, "sandkit.engine.api"),
    ...grouped(engineNs, ENGINE_API_GROUPS, 0),
    "",
    section("Enums"),
    "",
    ...ifFile("sandkit.enums.md", 0, "Overview"),
  ];

  const enums = [...linkMap.values()]
    .filter((h) => /^api\/sandkit\.enums\.[A-Za-z][\w]*\.md$/.test(h))
    .map((h) => h.replace(/^api\//, ""))
    .sort((a, b) => a.localeCompare(b));
  for (const file of enums) {
    const name = file.replace(/^sandkit\.enums\./, "").replace(/\.md$/, "");
    lines.push(link(0, name, `api/${file}`));
  }

  lines.push("", section("Shared types"), "");
  for (const name of ["asset", "engine", "jsonvalue", "nominal", "player"]) {
    lines.push(...ifFile(`shared.${name}.md`, 0, name));
  }

  const skip = new Set(["_sidebar.md"]);
  const leftovers = readdirSync(outDir)
    .filter((name) => name.endsWith(".md") && !skip.has(name) && !used.has(name))
    .sort((a, b) => a.localeCompare(b));
  if (leftovers.length) {
    lines.push("", section("Other"), "");
    for (const file of leftovers) {
      const label = file.replace(/\.md$/, "");
      lines.push(link(0, label, `api/${file}`));
    }
  }

  lines.push("");
  writeFileSync(join(docsDir, "_sidebar.md"), `${lines.join("\n").trimEnd()}\n`);
  const nestedSidebar = join(outDir, "_sidebar.md");
  if (existsSync(nestedSidebar)) rmSync(nestedSidebar, { force: true });
}

/**
 * @param {NamespaceNode[]} nodes
 * @param {(rel: string) => string} href
 * @returns {string[]}
 */
function namespaceRouteFiles(nodes, href) {
  /** @type {string[]} */
  const files = [];
  for (const node of nodes) {
    files.push(String(href(node.typedocRel)).replace(/^api\//, ""));
    if (node.children.length) {
      files.push(...namespaceRouteFiles(node.children, href));
    }
  }
  return files;
}

/** Shift every ATX heading down one level (`#` → `##`, …). */
function demoteMarkdownHeadings(markdown) {
  return markdown.replace(/^(#{1,5}) /gm, (_m, hashes) => `${hashes}# `);
}

function qualifyApiPages(outDir) {
  for (const filePath of walkMarkdownFiles(outDir)) {
    if (filePath.endsWith("_sidebar.md")) continue;

    const rel = toPosixPath(filePath.slice(outDir.length + 1));
    const qualified = apiPathToQualifiedName(rel);
    if (!qualified) continue;

    const content = readFileSync(filePath, "utf8");
    const fixed = qualifyApiMarkdown(content, qualified);
    if (fixed !== content) writeFileSync(filePath, fixed);
  }
}

function writeSearchPaths(docsDir) {
  const relFiles = walkMarkdownFiles(docsDir).map((filePath) =>
    toPosixPath(relative(docsDir, filePath)),
  );
  const paths = collectSearchPaths(relFiles);
  writeFileSync(join(docsDir, "assets/search-paths.js"), renderSearchPathsScript(paths));

  const indexFiles = [];
  for (const rel of relFiles) {
    const route = mdFileToSearchPath(rel);
    if (!route) continue;
    indexFiles.push({
      path: route,
      content: readFileSync(join(docsDir, rel), "utf8"),
    });
  }
  const entries = buildSearchIndex(indexFiles);
  writeFileSync(join(docsDir, "assets/search-index.js"), renderSearchIndexScript(entries));
}

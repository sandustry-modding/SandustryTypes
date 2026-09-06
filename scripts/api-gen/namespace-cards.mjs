/**
 * Browse-catalog JSON for the search page empty state.
 */
import { readdirSync } from "node:fs";

export const MAIN_API_GROUPS = [
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

export const ENGINE_API_GROUPS = [
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

/**
 * @param {string} apiMdHref
 * @returns {string}
 */
export function docsifyHash(apiMdHref) {
  const path = String(apiMdHref).replace(/\.md$/, "");
  return `#/${path.replace(/^\//, "")}`;
}

/**
 * @param {{ name: string, typedocRel: string }} node
 * @param {(rel: string) => string} href
 * @param {Record<string, { description?: string }>} [summaries]
 */
export function cardFromNode(node, href, summaries = {}) {
  return {
    name: node.name,
    href: docsifyHash(href(node.typedocRel)),
    description: summaries[node.name]?.description || "",
  };
}

/**
 * @param {{ name: string, typedocRel: string }[]} nodes
 * @param {{ title: string, names: string[] }[]} groups
 * @param {(rel: string) => string} href
 * @param {Record<string, { description?: string }>} [summaries]
 */
export function groupedCards(nodes, groups, href, summaries = {}) {
  const byName = new Map(nodes.map((node) => [node.name, node]));
  const used = new Set();
  /** @type {{ title: string, cards: ReturnType<typeof cardFromNode>[] }[]} */
  const out = [];
  for (const group of groups) {
    const members = group.names.map((name) => byName.get(name)).filter(Boolean);
    if (!members.length) continue;
    for (const node of members) used.add(node.name);
    out.push({
      title: group.title,
      cards: members.map((node) => cardFromNode(node, href, summaries)),
    });
  }
  const leftover = nodes.filter((node) => !used.has(node.name));
  if (leftover.length) {
    out.push({
      title: "Other",
      cards: leftover.map((node) => cardFromNode(node, href, summaries)),
    });
  }
  return out;
}

/**
 * @param {object} opts
 * @param {unknown[]} opts.mainNs
 * @param {unknown[]} opts.workerNs
 * @param {unknown[]} opts.engineNs
 * @param {(rel: string) => string} opts.href
 * @param {Record<string, { description?: string }>} [opts.summaries]
 */
export function buildBrowseCatalog(opts) {
  const { mainNs, workerNs, engineNs, href, summaries = {} } = opts;
  return {
    main: groupedCards(mainNs, MAIN_API_GROUPS, href, summaries),
    worker: [
      {
        title: "Worker thread",
        cards: workerNs.map((node) => cardFromNode(node, href, summaries)),
      },
    ].filter((section) => section.cards.length),
    engine: groupedCards(engineNs, ENGINE_API_GROUPS, href, summaries),
  };
}

/** @param {unknown} catalog */
export function renderBrowseScript(catalog) {
  return `window.SMT_NAMESPACE_CARDS = ${JSON.stringify(catalog)};\n`;
}

/**
 * Build namespace nodes from flattened `docs/api/*.md` files.
 *
 * @param {string} apiDir
 * @param {string} bagPrefix `sandkit.api` or `sandkit.engine.api`
 * @param {string[]} names
 * @param {boolean} worker
 */
export function nodesFromFlatApi(apiDir, bagPrefix, names, worker) {
  const files = readdirSync(apiDir);
  /** @type {{ name: string, typedocRel: string, children: { name: string, typedocRel: string }[] }[]} */
  const nodes = [];
  for (const name of names) {
    const file = worker ? `${bagPrefix}.${name}.worker.md` : `${bagPrefix}.${name}.md`;
    if (!files.includes(file)) continue;
    const childPrefix = `${bagPrefix}.${name}.`;
    const childSuffix = worker ? ".worker.md" : ".md";
    const children = [];
    for (const entry of files) {
      if (!entry.startsWith(childPrefix) || !entry.endsWith(childSuffix) || entry === file) {
        continue;
      }
      const mid = entry.slice(childPrefix.length, entry.length - childSuffix.length);
      if (!mid || mid.includes(".")) continue;
      if (!worker && mid === "worker") continue;
      children.push({ name: mid, typedocRel: entry });
    }
    children.sort((a, b) => a.name.localeCompare(b.name));
    nodes.push({ name, typedocRel: file, children });
  }
  return nodes;
}

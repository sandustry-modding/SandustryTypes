import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * @typedef {{ path: string, kind: "function" | "import" | "const", file: string }} DeclaredMember
 */

const SKIP_FILES = new Set(["sandkit-api.d.ts", "index.d.ts"]);

/** @type {Record<string, string>} */
const FILE_TO_NAMESPACE = {
  gameconfig: "gameConfig",
};

/**
 * @param {string} srcRoot Repo `src/` directory.
 */
export function scanDeclaredSandkitApi(srcRoot) {
  const apiDir = join(srcRoot, "sandkit", "api");
  /** @type {DeclaredMember[]} */
  const members = [];

  for (const entry of readdirSync(apiDir)) {
    const full = join(apiDir, entry);
    if (statSync(full).isDirectory()) continue;
    if (!entry.endsWith(".d.ts") || SKIP_FILES.has(entry)) continue;

    const stem = entry.slice(0, -".d.ts".length);
    const ns = FILE_TO_NAMESPACE[stem] ?? stem;
    members.push(...scanDeclarationFile(full, [ns]));
  }

  return dedupeMembers(members);
}

/**
 * @param {string} filePath
 * @param {string[]} namespacePath
 * @returns {DeclaredMember[]}
 */
function scanDeclarationFile(filePath, namespacePath) {
  const text = readFileSync(filePath, "utf8");
  const nsMatch = text.match(/export\s+(?:declare\s+)?namespace\s+(\w+)\s*\{/);
  if (!nsMatch || nsMatch.index == null) {
    return scanNamespaceBody(text, namespacePath, filePath);
  }

  const body = sliceBracedBlock(text, nsMatch.index + nsMatch[0].length - 1);
  const path =
    nsMatch[1] === namespacePath[namespacePath.length - 1]
      ? namespacePath
      : [...namespacePath.slice(0, -1), nsMatch[1]];
  return scanNamespaceBody(body, path, filePath);
}

/**
 * @param {string} body
 * @param {string[]} namespacePath
 * @param {string} filePath
 */
function scanNamespaceBody(body, namespacePath, filePath) {
  /** @type {DeclaredMember[]} */
  const members = [];

  for (const match of body.matchAll(/export function (\w+)/g)) {
    members.push({
      path: [...namespacePath, match[1]].join("."),
      kind: "function",
      file: filePath,
    });
  }

  for (const match of body.matchAll(/export import (\w+)/g)) {
    members.push({
      path: [...namespacePath, match[1]].join("."),
      kind: "import",
      file: filePath,
    });
  }

  for (const match of body.matchAll(/export const (\w+)/g)) {
    members.push({
      path: [...namespacePath, match[1]].join("."),
      kind: "const",
      file: filePath,
    });
  }

  const namespaceRe = /export\s+(?:declare\s+)?namespace\s+(\w+)\s*\{/g;
  let nsMatch;
  while ((nsMatch = namespaceRe.exec(body))) {
    const name = nsMatch[1];
    const start = nsMatch.index + nsMatch[0].length;
    const inner = sliceBracedBlock(body, start - 1);
    if (!inner) continue;
    members.push(...scanNamespaceBody(inner, [...namespacePath, name], filePath));
  }

  return members;
}

/**
 * @param {string} text
 * @param {number} openBraceIndex
 */
function sliceBracedBlock(text, openBraceIndex) {
  if (text[openBraceIndex] !== "{") return "";
  let depth = 0;
  for (let i = openBraceIndex; i < text.length; i++) {
    if (text[i] === "{") depth += 1;
    else if (text[i] === "}") {
      depth -= 1;
      if (depth === 0) return text.slice(openBraceIndex + 1, i);
    }
  }
  return "";
}

/**
 * @param {DeclaredMember[]} members
 */
function dedupeMembers(members) {
  const seen = new Set();
  /** @type {DeclaredMember[]} */
  const out = [];
  for (const member of members) {
    const key = `${member.path}:${member.kind}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(member);
  }
  return out.sort((a, b) => a.path.localeCompare(b.path));
}

/**
 * @param {DeclaredMember[]} members
 */
export function groupDeclaredByNamespace(members) {
  /** @type {Record<string, DeclaredMember[]>} */
  const out = {};
  for (const member of members) {
    const ns = member.path.split(".")[0];
    (out[ns] ??= []).push(member);
  }
  return out;
}

/**
 * Read worker-available namespace names from `WorkerSandkitApi`.
 * @param {string} srcRoot
 */
export function scanWorkerNamespaces(srcRoot) {
  const filePath = join(srcRoot, "worker", "sandkit-api.d.ts");
  if (!existsSync(filePath)) return new Set();
  const text = readFileSync(filePath, "utf8");
  /** @type {Set<string>} */
  const out = new Set();
  for (const match of text.matchAll(/^\s+(\w+):/gm)) {
    if (match[1] !== "world") out.add(match[1]);
  }
  return out;
}

/**
 * Resolve a catalog path through alias map (official → declared).
 * @param {string} path
 * @param {Record<string, string>} aliases
 */
export function resolveAlias(path, aliases) {
  if (aliases[path]) return aliases[path];
  return path;
}

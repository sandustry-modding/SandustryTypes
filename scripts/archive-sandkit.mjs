#!/usr/bin/env node
/**
 * Fetch https://sandustry.com/sandkit.html and save Markdown under docs/official-api/.
 *
 * Usage:
 *   npm run docs:archive-sandkit
 *   npm run docs:archive-sandkit -- 0.5.7
 *
 * Always prompts for the base file name (optional argv is the default).
 */
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const OUT_DIR = join(ROOT, "docs", "official-api");
const SOURCE_URL = "https://sandustry.com/sandkit.html";

const VOID_TAGS = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);

const NAMED_ENTITIES = Object.assign(Object.create(null), {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
});

/**
 * @param {string} message
 * @returns {never}
 */
function fail(message) {
  console.error(`archive-sandkit: ${message}`);
  process.exit(1);
}

/**
 * @param {string} text
 */
function decodeEntities(text) {
  return text
    .replace(/&#(x?[0-9a-fA-F]+);/g, (match, raw) => {
      const code =
        raw[0] === "x" || raw[0] === "X" ? Number.parseInt(raw.slice(1), 16) : Number.parseInt(raw, 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : match;
    })
    .replace(/&([a-zA-Z]+);/g, (match, name) => NAMED_ENTITIES[name] ?? match);
}

/**
 * @param {string} raw
 * @returns {Record<string, string>}
 */
function parseAttrs(raw) {
  /** @type {Record<string, string>} */
  const attrs = {};
  for (const match of raw.matchAll(/([^\s=]+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g)) {
    attrs[match[1].toLowerCase()] = match[2] ?? match[3] ?? match[4] ?? "";
  }
  return attrs;
}

/**
 * @typedef {{ type: "text", value: string }} TextNode
 * @typedef {{ type: "tag", name: string, attrs: Record<string, string>, void: boolean, children: AstNode[] }} TagNode
 * @typedef {TextNode | TagNode} AstNode
 */

/**
 * @param {string} html
 * @returns {AstNode[]}
 */
function parseHtml(html) {
  /** @type {AstNode[]} */
  const root = [];
  /** @type {{ name?: string, children: AstNode[] }[]} */
  const stack = [{ children: root }];
  const tokenRe =
    /<!--[\s\S]*?-->|<\/([a-zA-Z][\w:-]*)\s*>|<([a-zA-Z][\w:-]*)(\s[^>]*)?\s*\/?>|([^<]+)/g;

  let match;
  while ((match = tokenRe.exec(html))) {
    if (match[0].startsWith("<!--")) continue;

    if (match[1]) {
      const name = match[1].toLowerCase();
      for (let i = stack.length - 1; i >= 1; i--) {
        if (stack[i].name === name) {
          stack.length = i;
          break;
        }
      }
      continue;
    }

    if (match[2]) {
      const name = match[2].toLowerCase();
      const attrs = parseAttrs(match[3] ?? "");
      // HTML: a new <li> implicitly closes the previous sibling <li>.
      if (name === "li") {
        while (stack.length > 1 && stack[stack.length - 1].name === "li") {
          stack.length -= 1;
        }
      }
      /** @type {TagNode} */
      const node = {
        type: "tag",
        name,
        attrs,
        void: VOID_TAGS.has(name) || /\/\s*>$/.test(match[0]),
        children: [],
      };
      stack[stack.length - 1].children.push(node);
      if (!node.void) stack.push(node);
      continue;
    }

    if (match[4] != null) {
      stack[stack.length - 1].children.push({
        type: "text",
        value: decodeEntities(match[4]),
      });
    }
  }

  return root;
}

const INLINE_TAGS = new Set([
  "a",
  "abbr",
  "b",
  "br",
  "code",
  "em",
  "i",
  "span",
  "strong",
  "sub",
  "sup",
  "u",
]);

const LI_BLOCK_TAGS = new Set(["ul", "ol", "pre", "p", "details", "div", "section", "table", "blockquote"]);

/**
 * @param {AstNode[]} nodes
 */
function textOf(nodes) {
  let out = "";
  for (const node of nodes) {
    if (node.type === "text") out += node.value;
    else out += textOf(node.children);
  }
  return out;
}

/**
 * @param {AstNode[]} nodes
 */
function inline(nodes) {
  let out = "";
  for (const node of nodes) {
    if (node.type === "text") {
      out += node.value.replace(/\s+/g, " ");
      continue;
    }

    if (node.name === "code") {
      out += `\`${textOf(node.children).replace(/`/g, "\\`")}\``;
      continue;
    }
    if (node.name === "strong" || node.name === "b") {
      out += `**${inline(node.children).trim()}**`;
      continue;
    }
    if (node.name === "em" || node.name === "i") {
      out += `*${inline(node.children).trim()}*`;
      continue;
    }
    if (node.name === "a") {
      const href = node.attrs.href ?? "";
      const label = inline(node.children).trim() || href;
      out += href ? `[${label}](${href})` : label;
      continue;
    }
    if (node.name === "br") {
      out += "  \n";
      continue;
    }
    out += inline(node.children);
  }
  return out;
}

/**
 * @param {AstNode} node
 */
function isInlineNode(node) {
  if (node.type === "text") return true;
  return INLINE_TAGS.has(node.name);
}

/**
 * Escape bare [brackets] outside inline code so they match pandoc-style archives
 * and are not treated as link reference labels.
 * @param {string} text
 */
function escapeListBrackets(text) {
  let out = "";
  let inCode = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === "`") {
      inCode = !inCode;
      out += ch;
      continue;
    }
    if (!inCode && (ch === "[" || ch === "]") && text[i - 1] !== "\\") {
      out += `\\${ch}`;
      continue;
    }
    out += ch;
  }
  return out;
}

/**
 * @param {AstNode[]} nodes
 */
function meaningfulNodes(nodes) {
  return nodes.filter((node) => node.type === "tag" || (node.type === "text" && node.value.trim()));
}

/** Prefix: details header; keep tight after a fenced code block. */
const TIGHT_AFTER_FENCE = "\u0003";

/**
 * Join markdown block parts.
 * - After a fenced code block: blank line before most blocks, but not before a
 *   details header (matches existing official-api archives).
 * - Otherwise: one blank line between blocks.
 * - `tight: true` forces single newlines (list item bodies).
 * @param {string[]} parts
 * @param {{ tight?: boolean }} [opts]
 */
function joinParts(parts, opts = {}) {
  /** @type {string[]} */
  const out = [];
  for (const raw of parts) {
    if (!raw) continue;
    const tightHeader = raw.startsWith(TIGHT_AFTER_FENCE);
    const part = tightHeader ? raw.slice(TIGHT_AFTER_FENCE.length) : raw;
    if (!part) continue;
    if (out.length === 0) {
      out.push(part);
      continue;
    }
    const prev = out[out.length - 1];
    let gap = "\n\n";
    if (opts.tight) {
      gap = "\n";
    } else if (/```\s*$/.test(prev)) {
      gap = tightHeader ? "\n" : "\n\n";
    }
    out.push(gap + part);
  }
  return out.join("");
}

/**
 * Flatten nested <details> summary chains the way the existing archives do:
 * `Main entry` + `api.constants` + `physics` -> `Main entry `api.constants` `physics``.
 * Only the first nested details child is folded into the header; siblings stay.
 * @param {TagNode} node
 * @param {number} listDepth
 * @returns {{ header: string, parts: string[] }}
 */
function convertDetails(node, listDepth) {
  /** @type {AstNode[]} */
  let summaryChildren = [];
  /** @type {AstNode[]} */
  const body = [];
  for (const child of node.children) {
    if (child.type === "tag" && child.name === "summary" && summaryChildren.length === 0) {
      summaryChildren = child.children;
      continue;
    }
    body.push(child);
  }

  const summary = inline(summaryChildren).trim();
  const meaningful = meaningfulNodes(body);
  const first = meaningful[0];

  if (first && first.type === "tag" && first.name === "details") {
    const nested = convertDetails(first, listDepth);
    const header = [summary, nested.header].filter(Boolean).join(" ");
    const rest = blocks(meaningful.slice(1), listDepth);
    return { header, parts: [...nested.parts, ...rest] };
  }

  return { header: summary, parts: blocks(body, listDepth) };
}

/**
 * @param {AstNode[]} nodes
 * @param {number} [listDepth]
 * @returns {string[]}
 */
function blocks(nodes, listDepth = 0) {
  /** @type {string[]} */
  const parts = [];
  /** @type {AstNode[]} */
  let inlineRun = [];

  function flushInline() {
    if (inlineRun.length === 0) return;
    const line = inline(inlineRun).trim();
    if (line) parts.push(line);
    inlineRun = [];
  }

  for (const node of nodes) {
    if (node.type === "text") {
      if (!node.value.trim()) {
        if (inlineRun.length > 0 && /\n/.test(node.value)) flushInline();
        continue;
      }
      inlineRun.push(node);
      continue;
    }

    if (isInlineNode(node)) {
      inlineRun.push(node);
      continue;
    }

    flushInline();

    const { name, attrs, children } = node;
    if (name === "script" || name === "style" || name === "button" || name === "noscript") {
      continue;
    }

    if (/^h[1-6]$/.test(name)) {
      const level = Number(name[1]);
      const title = inline(children).trim();
      if (title) parts.push(`${"#".repeat(level)} ${title}`);
      continue;
    }

    if (name === "p" || name === "summary" || (name === "div" && attrs.class === "api-signature")) {
      const line = inline(children).trim();
      if (line) parts.push(line);
      continue;
    }

    if (name === "pre") {
      const codeNode = children.find((child) => child.type === "tag" && child.name === "code");
      const code = textOf(codeNode && codeNode.type === "tag" ? codeNode.children : children).replace(
        /\n$/,
        "",
      );
      parts.push(`\`\`\`\n${code}\n\`\`\``);
      continue;
    }

    if (name === "ul" || name === "ol") {
      /** @type {string[]} */
      const items = [];
      for (const child of children) {
        if (child.type !== "tag" || child.name !== "li") continue;
        const hasBlockChild = child.children.some(
          (c) => c.type === "tag" && LI_BLOCK_TAGS.has(c.name),
        );
        // Nested blocks use relative depth 0; this item adds the indent for
        // continuation lines so nested lists line up under the parent bullet.
        const body = hasBlockChild
          ? joinParts(blocks(child.children, 0), { tight: true })
          : inline(child.children).trim();
        const indent = "    ".repeat(listDepth);
        const bullet = name === "ol" ? "1." : "*";
        const [first = "", ...rest] = body.split("\n");
        items.push(`${indent}${bullet}   ${escapeListBrackets(first)}`);
        for (const line of rest) {
          if (!line) continue;
          items.push(`${indent}    ${escapeListBrackets(line)}`);
        }
      }
      if (items.length) parts.push(items.join("\n"));
      continue;
    }

    if (name === "details") {
      const { header, parts: detailParts } = convertDetails(node, listDepth);
      if (header) parts.push(TIGHT_AFTER_FENCE + header);
      parts.push(...detailParts);
      continue;
    }

    if (
      name === "section" ||
      name === "div" ||
      name === "main" ||
      name === "article" ||
      name === "header" ||
      name === "body" ||
      name === "html"
    ) {
      const inner = joinParts(blocks(children, listDepth)).trim();
      if (inner) parts.push(inner);
      continue;
    }

    const fallback = joinParts(blocks(children, listDepth)).trim();
    if (fallback) parts.push(fallback);
  }

  flushInline();
  return parts.filter(Boolean);
}

/**
 * @param {string} html
 */
function extractApiContent(html) {
  const idMatch = html.match(/<(main|div)\b[^>]*\bid=["']api-content["'][^>]*>/i);
  if (!idMatch || idMatch.index == null) {
    fail('could not find element with id="api-content" in fetched HTML');
  }

  const tagName = idMatch[1].toLowerCase();
  const openEnd = idMatch.index + idMatch[0].length;
  const scanRe = new RegExp(`<${tagName}\\b[^>]*>|</${tagName}\\s*>`, "gi");
  scanRe.lastIndex = openEnd;

  let depth = 1;
  let match;
  while ((match = scanRe.exec(html))) {
    if (match[0].startsWith("</")) {
      depth -= 1;
      if (depth === 0) return html.slice(openEnd, match.index);
    } else {
      depth += 1;
    }
  }

  fail(`could not find closing </${tagName}> for api-content`);
}

/**
 * @param {string} html
 */
function htmlToMarkdown(html) {
  const content = extractApiContent(html);
  const tree = parseHtml(content);
  return `${joinParts(blocks(tree)).replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

/**
 * @param {string} raw
 */
function normalizeBaseName(raw) {
  let name = raw.trim();
  if (!name) fail("file name is empty");
  name = name.replace(/\\/g, "/").split("/").pop() ?? name;
  name = name.replace(/\.(md|html?)$/i, "");
  if (!/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(name)) {
    fail(`invalid file name "${raw}" (use letters, digits, ., _, -)`);
  }
  return name;
}

/**
 * @param {string} question
 * @param {string} [defaultValue]
 */
async function askBaseName(question, defaultValue = "") {
  const rl = createInterface({ input, output });
  try {
    const suffix = defaultValue ? ` [${defaultValue}]` : "";
    const answer = (await rl.question(`${question}${suffix}: `)).trim();
    if (!output.isTTY) output.write("\n");
    return answer || defaultValue;
  } finally {
    rl.close();
  }
}

async function main() {
  const argvDefault = process.argv[2] ? normalizeBaseName(process.argv[2]) : "";
  const answered = await askBaseName(
    "Base file name for docs/official-api/<name>.md",
    argvDefault,
  );
  const baseName = normalizeBaseName(answered);

  mkdirSync(OUT_DIR, { recursive: true });
  const mdPath = join(OUT_DIR, `${baseName}.md`);

  console.log(`archive-sandkit: fetching ${SOURCE_URL}`);
  const response = await fetch(SOURCE_URL);
  if (!response.ok) fail(`fetch failed: HTTP ${response.status} ${response.statusText}`);
  const html = await response.text();
  if (!html.includes("api-content")) fail("fetched page does not look like Sandkit docs");

  writeFileSync(mdPath, htmlToMarkdown(html));
  console.log(`archive-sandkit: wrote ${mdPath}`);
}

main().catch((err) => {
  fail(err instanceof Error ? err.message : String(err));
});

/**
 * Turn TypeDoc member sections into Wayland-style API cards.
 */

import { qualifyDocsifyPageLinks, rewriteMarkdownLinks } from "./docsify-links.mjs";
import { qualifiedNameToSlug } from "./api-search.mjs";

const TABLE_SECTIONS = new Set(["Parameters", "Properties", "Methods"]);
const DROP_SECTIONS = new Set(["Returns", "Type Parameters"]);

/**
 * @param {string} text
 * @returns {string}
 */
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * @param {string} cell
 * @returns {string}
 */
function escapeTableCell(cell) {
  return String(cell)
    .replace(/\n+/g, " ")
    .replace(/\\\|/g, "|")
    .replace(/\|/g, "&#124;")
    .trim();
}

/**
 * @param {string} heading
 * @returns {{ id: string, local: string, strike: boolean } | null}
 */
export function parseMemberH3(heading) {
  let raw = String(heading || "").trim();
  const idMatch = /\s*:id=([A-Za-z0-9_.-]+)\s*$/.exec(raw);
  const id = idMatch ? idMatch[1] : "";
  raw = raw.replace(/\s*:id=[A-Za-z0-9_.-]+\s*$/, "").trim();
  const strike = /^~~(.+)~~$/.exec(raw);
  const inner = strike ? strike[1].trim() : raw;
  const fn = /^([A-Za-z_][\w]*)\(\)$/.exec(inner);
  const ident = /^([A-Za-z_][\w]*)$/.exec(inner);
  const name = fn ? fn[1] : ident ? ident[1] : null;
  if (!name) return null;
  if (!fn && !idMatch) return null;
  return { id: id || name.toLowerCase(), local: name, strike: Boolean(strike) };
}

/**
 * Split `name(args): ret` / `Name = type` / `Enum.Member: value`.
 * @param {string} line
 */
export function parseSignatureLine(line) {
  const src = String(line || "").trim();
  const call = /^([\w.]+)\((.*)\)\s*(?::\s*(.+))?$/.exec(src);
  if (call) {
    const qualified = call[1];
    const name = qualified.split(".").pop() || qualified;
    return {
      kind: "call",
      qualified,
      name,
      params: call[2] || "",
      ret: (call[3] || "void").trim(),
      raw: src,
    };
  }
  const assign = /^([\w.]+)\s*=\s*(.+)$/.exec(src);
  if (assign) {
    return {
      kind: "assign",
      qualified: assign[1],
      name: assign[1].split(".").pop() || assign[1],
      params: "",
      ret: assign[2].trim(),
      raw: src,
    };
  }
  const enumMem = /^([\w.]+)\s*:\s*(.+)$/.exec(src);
  if (enumMem) {
    return {
      kind: "enum",
      qualified: enumMem[1],
      name: enumMem[1].split(".").pop() || enumMem[1],
      params: "",
      ret: enumMem[2].trim(),
      raw: src,
    };
  }
  return { kind: "raw", qualified: "", name: "", params: "", ret: "", raw: src };
}

/**
 * @param {ReturnType<typeof parseSignatureLine>} parsed
 * @returns {string}
 */
export function displaySignatureLine(parsed) {
  if (parsed.kind === "call") return `${parsed.name}(${parsed.params}): ${parsed.ret}`;
  if (parsed.kind === "assign") return `${parsed.name} = ${parsed.ret}`;
  if (parsed.kind === "enum") return `${parsed.name}: ${parsed.ret}`;
  return parsed.raw;
}

/**
 * Fenced TypeScript so Docsify Prism applies default token colours.
 * @param {ReturnType<typeof parseSignatureLine>} parsed
 * @returns {string}
 */
export function renderSignatureHtml(parsed) {
  const display = displaySignatureLine(parsed);
  return [
    `<div class="smt-member-sig" data-sig="${escapeHtml(parsed.raw)}">`,
    "",
    "```ts",
    display,
    "```",
    "",
    "</div>",
  ].join("\n");
}

/**
 * @param {string} name
 */
function unwrapHeadingName(name) {
  return String(name || "")
    .replace(/^~~(.+)~~$/, "$1")
    .replace(/\?$/, "")
    .replace(/\(\)$/, "");
}

/**
 * @param {string} text
 */
function stripCodeTicks(text) {
  const t = String(text || "").trim();
  if (t.startsWith("`") && t.endsWith("`") && t.indexOf("`", 1) === t.length - 1) {
    return t.slice(1, -1);
  }
  return t;
}

/**
 * @param {string} text
 */
function escapeRegExp(text) {
  return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * @param {string} body
 * @param {string} [propName]
 */
function typeFromTsFence(body, propName = "") {
  let rest = String(body || "")
    .trim()
    .replace(/^(optional|readonly)\s+/, "");
  const name = unwrapHeadingName(propName);
  if (name) {
    const quoted = `"${name}"`;
    if (rest.startsWith(quoted)) rest = rest.slice(quoted.length);
    else if (rest.startsWith(name)) rest = rest.slice(name.length);
    rest = rest.replace(/^\s*\??:\s*/, "");
    const last = name.split(":").pop() || "";
    if (last && last !== name) {
      const lastRe = new RegExp(`^"?${escapeRegExp(last)}"?\\s*\\??:\\s*`);
      rest = rest.replace(lastRe, "");
    }
  }
  return rest.replace(/\s+/g, " ").trim();
}

/**
 * @param {string} chunk
 * @param {string} [propName]
 * @returns {{ type: string, desc: string }}
 */
function typeAndDescFromChunk(chunk, propName = "") {
  const text = chunk.trim();
  const fence = /```ts\n([\s\S]*?)```/.exec(text);
  let type = "";
  let rest = text;
  if (fence) {
    type = typeFromTsFence(fence[1], propName);
    rest = text.replace(fence[0], "");
  }
  const lines = rest
    .split(/\n/)
    .map((l) => l.trim())
    .filter((l) => l && !/^Defined in:/i.test(l) && !/^#{4,}/.test(l));
  if (!type && lines[0] && !/deprecated/i.test(lines[0])) {
    type = typeFromTsFence(lines[0], propName) || lines[0];
    lines.shift();
  }
  const desc = stripLeadingTypeFromDesc(type, lines.join(" ").replace(/\s+/g, " ").trim());
  return { type, desc };
}

/**
 * TypeDoc repeats the type as the first description line.
 * Keep it in the Type column only.
 * @param {string} type
 * @param {string} desc
 */
export function stripLeadingTypeFromDesc(type, desc) {
  const d = String(desc || "").trim();
  const typed = String(type || "").trim();
  if (!d) return "";
  if (!typed) return d;
  if (d === typed) return "";
  if (d.startsWith(`${typed} `)) return d.slice(typed.length).trim();
  const decoded = decodeTypeText(typed);
  if (decoded) {
    const tick = `\`${decoded}\``;
    if (d === tick) return "";
    if (d.startsWith(`${tick} `)) return d.slice(tick.length).trim();
  }
  return d;
}

/**
 * @param {string} type
 */
function isCollapsedObjectType(type) {
  const t = stripCodeTicks(type);
  if (!t) return true;
  if (t.includes("{")) return false;
  return /\bobject\b/.test(t);
}

/**
 * @param {string} type
 */
function formatTableType(type) {
  const raw = String(type || "").replace(/\s+/g, " ").trim();
  if (!raw) return "";
  if (raw.startsWith("<code>") || (raw.startsWith("`") && !raw.startsWith("`{"))) {
    return raw.replace(/\\\|/g, "|").replace(/\|/g, "&#124;");
  }
  const t = stripCodeTicks(raw);
  return `<code>${escapeHtml(t).replace(/\|/g, "&#124;")}</code>`;
}

function decodeTypeText(type) {
  return stripCodeTicks(String(type || "").replace(/\s+/g, " ").trim())
    .replace(/<code>|<\/code>/g, "")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#124;/g, "|")
    .replace(/&amp;/g, "&");
}

/**
 * @param {string} inner
 * @returns {string[]}
 */
function splitTypeFields(inner) {
  const parts = [];
  let depth = 0;
  let cur = "";
  for (const ch of inner) {
    if ("{<[(".includes(ch)) depth += 1;
    else if ("}>])".includes(ch)) depth -= 1;
    if (ch === ";" && depth === 0) {
      if (cur.trim()) parts.push(cur.trim());
      cur = "";
      continue;
    }
    cur += ch;
  }
  if (cur.trim()) parts.push(cur.trim());
  return parts;
}

/**
 * @param {string} type
 */
function prettyTsType(type) {
  const t = decodeTypeText(type);
  if (!(t.startsWith("{") && t.endsWith("}"))) return t;
  const fields = splitTypeFields(t.slice(1, -1).trim());
  if (fields.length < 2) return t;
  return `{\n  ${fields.join(";\n  ")};\n}`;
}

/**
 * @param {string} title
 * @param {{ name: string }[]} rows
 */
function isHookIdList(title, rows) {
  return (
    title === "Properties" &&
    rows.length > 0 &&
    rows.every((row) => unwrapHeadingName(row.name).includes(":"))
  );
}

function hookHeadingId(name) {
  return unwrapHeadingName(name)
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * @param {{ name: string, type: string, desc: string }[]} rows
 * @param {string} pageRel
 * @returns {string[]}
 */
function renderHookList(rows, pageRel) {
  const out = [""];
  for (const row of rows) {
    const strike = /^~~(.+)~~$/.exec(row.name);
    const id = unwrapHeadingName(row.name);
    out.push(
      `<h4 class="smt-hook-heading" id="${escapeHtml(hookHeadingId(row.name))}"><code>${escapeHtml(id)}</code></h4>`,
      "",
    );
    if (strike) {
      out.push(renderDeprecatedHtml(row.desc || "Deprecated alias.", pageRel), "");
    } else if (row.desc) {
      out.push(row.desc, "");
    }
    const pretty = prettyTsType(row.type);
    if (pretty) {
      out.push("```ts", pretty, "```", "");
    }
  }
  return out;
}

/**
 * @param {string} title
 * @param {{ name: string }[]} rows
 */
function tableHeaders(title, rows) {
  if (title === "Methods") return { name: "Method", type: "Signature", desc: "Description" };
  if (title === "Properties") return { name: "Property", type: "Type", desc: "Description" };
  return { name: "Argument", type: "Type", desc: "Description" };
}

/**
 * @param {string} name
 */
function formatTableName(name) {
  const raw = String(name || "").trim();
  const strike = /^~~(.+)~~$/.exec(raw);
  const inner = strike ? strike[1] : raw;
  const wrapped = inner.includes(":") && !/`/.test(inner) ? `\`${inner}\`` : inner;
  return strike ? `~~${wrapped}~~` : wrapped;
}

/**
 * @param {string} title
 * @param {string} body
 * @param {string} [pageRel]
 * @returns {string[]}
 */
function flattenH5Table(title, body, pageRel = "") {
  const lines = body.split(/\n/);
  /** @type {{ name: string, type: string, desc: string }[]} */
  const rows = [];
  let i = 0;
  while (i < lines.length) {
    const h5 = /^##### (.+)$/.exec(lines[i]);
    if (!h5) {
      i++;
      continue;
    }
    const name = h5[1].trim();
    i++;
    const chunkLines = [];
    /** @type {string[]} */
    const nested = [];
    while (i < lines.length && !/^##### /.test(lines[i])) {
      if (/^#{1,4} /.test(lines[i])) break;
      const h6 = /^###### (.+)$/.exec(lines[i]);
      if (h6) {
        const nestedName = h6[1].trim();
        i++;
        const nestedChunk = [];
        while (i < lines.length && !/^#{1,6} /.test(lines[i])) {
          nestedChunk.push(lines[i]);
          i++;
        }
        if (
          nestedName === "Properties" ||
          nestedName === "Methods" ||
          nestedName === "Type declaration" ||
          nestedName === "Deprecated"
        ) {
          continue;
        }
        const parsed = typeAndDescFromChunk(nestedChunk.join("\n"), nestedName);
        if (parsed.type) {
          nested.push(`${unwrapHeadingName(nestedName)}: ${stripCodeTicks(parsed.type)}`);
        }
        continue;
      }
      chunkLines.push(lines[i]);
      i++;
    }
    let { type, desc } = typeAndDescFromChunk(chunkLines.join("\n"), name);
    if (nested.length && isCollapsedObjectType(type)) {
      type = `{ ${nested.join("; ")} }`;
    }
    if (/^~~/.test(name) && !desc) desc = "Deprecated alias.";
    rows.push({ name, type, desc });
  }
  if (!rows.length) return [];
  if (isHookIdList(title, rows)) {
    return renderHookList(rows, pageRel);
  }
  const headers = tableHeaders(title, rows);
  /** @type {string[]} */
  const out = [
    "",
    `| ${headers.name} | ${headers.type} | ${headers.desc} |`,
    `| --- | --- | --- |`,
  ];
  for (const row of rows) {
    out.push(
      `| ${escapeTableCell(formatTableName(row.name))} | ${escapeTableCell(formatTableType(row.type))} | ${escapeTableCell(row.desc)} |`,
    );
  }
  out.push("", `<div class="smt-member-anchors">`, "");
  for (const row of rows) {
    out.push(`##### ${row.name} <!-- {docsify-ignore} -->`, "");
  }
  out.push(`</div>`, "");
  return out;
}

/**
 * @param {string} body
 */
function splitMemberSections(body) {
  const lines = body.split(/\n/);
  /** @type {string[]} */
  const lead = [];
  /** @type {{ title: string, body: string }[]} */
  const sections = [];
  let i = 0;
  while (i < lines.length) {
    const h4 = /^#### (.+)$/.exec(lines[i]);
    if (h4) {
      const title = h4[1].trim();
      i++;
      const chunk = [];
      while (i < lines.length && !/^#### /.test(lines[i])) {
        chunk.push(lines[i]);
        i++;
      }
      sections.push({ title, body: chunk.join("\n") });
      continue;
    }
    lead.push(lines[i]);
    i++;
  }
  return { lead: lead.join("\n"), sections };
}

/**
 * Pull `Defined in:` and the first description paragraph out of the lead.
 * @param {string} lead
 */
function parseLead(lead) {
  let rest = String(lead || "").replace(/```ts\n[\s\S]*?```/g, "");
  const lines = rest.split(/\n/);
  /** @type {string | null} */
  let defined = null;
  /** @type {string | null} */
  let pathHtml = null;
  /** @type {string[]} */
  const other = [];
  for (const line of lines) {
    if (/class="smt-member-path"/.test(line)) {
      pathHtml = line;
      continue;
    }
    if (/^Defined in:/i.test(line)) {
      defined = line;
      continue;
    }
    other.push(line);
  }
  const desc = other.join("\n").trim();
  return { defined, pathHtml, desc };
}

/**
 * @param {string} body
 * @returns {string}
 */
function parseDeprecatedNote(body) {
  return body
    .split(/\n/)
    .map((l) => l.trim())
    .filter((l) => l && !/^`[^`]+`$/.test(l) && !/^##### /.test(l) && !/^```/.test(l))
    .join(" ")
    .trim();
}

/**
 * @param {string} note
 * @param {string} pageRel posix path under `docs/`
 * @returns {string}
 */
function renderDeprecatedHtml(note, pageRel) {
  if (!note) return "";
  const rewritten = qualifyDocsifyPageLinks(rewriteMarkdownLinks(note), pageRel);
  return [
    `<div class="smt-member-deprecated">`,
    `<span class="smt-member-deprecated-label">Deprecated</span>`,
    `<div class="smt-member-deprecated-note" markdown="1">`,
    "",
    rewritten,
    "",
    `</div>`,
    `</div>`,
  ].join("\n");
}

/**
 * @param {string} desc
 * @returns {string[]}
 */
function renderDescription(desc) {
  if (!desc) return [];
  return ["", desc.trim(), ""];
}

const STRIP_H2 = new Set(["References", "Namespaces"]);

/**
 * @param {string} qualified
 * @returns {string}
 */
function summaryKeyForQualified(qualified) {
  const base = String(qualified || "").replace(/ \(worker\)$/, "");
  const parts = base.split(".");
  if (parts[0] === "sandkit" && parts[1] === "api" && parts[2]) return parts[2];
  if (parts[0] === "sandkit" && parts[1] === "engine" && parts[2] === "api" && parts[3]) {
    return parts[3];
  }
  return parts[parts.length - 1] || "";
}

/**
 * @param {string} content
 * @returns {{ label: string, href: string }[]}
 */
export function parseNamespacesSection(content) {
  const lines = String(content || "").split("\n");
  /** @type {{ label: string, href: string }[]} */
  const links = [];
  let inSection = false;
  for (const line of lines) {
    if (/^## Namespaces(?:\s|$)/.test(line)) {
      inSection = true;
      continue;
    }
    if (inSection) {
      if (/^## /.test(line)) break;
      const match = /^- \[([^\]]+)\]\(([^)]+)\)/.exec(line.trim());
      if (match) links.push({ label: match[1], href: match[2] });
    }
  }
  return links;
}

/**
 * @param {string} content
 * @returns {boolean}
 */
function hasDocumentedMembers(content) {
  const lines = String(content || "").split("\n");
  let section = "";
  for (const line of lines) {
    const h2 = /^## ([^\s]+)/.exec(line);
    if (h2) {
      section = h2[1];
      continue;
    }
    if (
      section &&
      section !== "Namespaces" &&
      section !== "References" &&
      /^### /.test(line)
    ) {
      return true;
    }
  }
  return false;
}

/**
 * @param {string} content
 * @param {string} qualified
 * @param {{ summaries?: Record<string, { description?: string }> }} [options]
 * @returns {string}
 */
export function enrichNamespaceOnlyPage(content, qualified, options = {}) {
  const nsLinks = parseNamespacesSection(content);
  if (!nsLinks.length || hasDocumentedMembers(content)) return content;

  const worker = String(qualified || "").endsWith(" (worker)");
  const base = worker ? qualified.slice(0, -" (worker)".length) : String(qualified || "");
  const summary = options.summaries?.[summaryKeyForQualified(qualified)]?.description?.trim() || "";
  const childLinks = nsLinks
    .map(({ label, href }) => `- [${base}.${label}](${href})`)
    .join("\n");
  const intro = [summary, childLinks].filter(Boolean).join("\n\n");
  if (!intro) return content;

  return String(content || "").replace(/^(# [^\n]+\n\n?)/, `$1${intro}\n\n`);
}

/**
 * Drop TypeDoc index headings that duplicate the sidebar.
 * @param {string} content
 */
export function stripReferencesSection(content) {
  const lines = String(content || "").split("\n");
  /** @type {string[]} */
  const out = [];
  let skipping = false;
  for (const line of lines) {
    const h2 = /^## ([^\s<]+)(?:\s|$)/.exec(line);
    if (h2 && STRIP_H2.has(h2[1])) {
      skipping = true;
      continue;
    }
    if (skipping) {
      if (/^## /.test(line)) skipping = false;
      else continue;
    }
    out.push(line);
  }
  return out.join("\n");
}

const OFFICIAL_DOCS_HREF = /\[Official docs\]\(https:\/\/sandustry\.com\/sandkit\.html[^)]*\)/;

/**
 * Drop Official docs `See` headings (page-level and per-member).
 * @param {string} content
 */
export function collapseOfficialSee(content) {
  const lines = String(content || "").split("\n");
  /** @type {string[]} */
  const out = [];
  let i = 0;
  while (i < lines.length) {
    if (!/^#{2,4} See(?:\s+<!--[^>]*-->)?\s*$/.test(lines[i])) {
      out.push(lines[i]);
      i++;
      continue;
    }
    let j = i + 1;
    /** @type {string[]} */
    const body = [];
    while (j < lines.length && !/^#{1,4} /.test(lines[j]) && lines[j].trim() !== "</div>") {
      const trimmed = lines[j].trim();
      if (trimmed) body.push(trimmed);
      j++;
    }
    const onlyOfficial = body.length > 0 && body.every((line) => OFFICIAL_DOCS_HREF.test(line));
    if (onlyOfficial) {
      i = j;
      continue;
    }
    out.push(lines[i]);
    i++;
  }
  return out.join("\n");
}

/**
 * Restyle `### member` blocks on one API markdown page.
 * @param {string} content
 * @param {string} qualified page runtime name (`sandkit.api.game`)
 * @param {{ summaries?: Record<string, { description?: string }> }} [options]
 */
export function restyleApiCards(content, qualified, options = {}) {
  const worker = String(qualified || "").endsWith(" (worker)");
  const base = worker ? qualified.slice(0, -" (worker)".length) : String(qualified || "");
  const pageSlug = qualifiedNameToSlug(qualified);
  const pageRel = pageSlug ? `api/${pageSlug}.md` : "";
  const lines = collapseOfficialSee(
    stripReferencesSection(enrichNamespaceOnlyPage(content, qualified, options)),
  ).split(/\n/);
  /** @type {string[]} */
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const h3 = /^### (.+)$/.exec(lines[i]);
    const parsedH3 = h3 ? parseMemberH3(h3[1]) : null;
    if (!parsedH3) {
      if (lines[i].trim() === "***") {
        i++;
        continue;
      }
      out.push(lines[i]);
      i++;
      continue;
    }

    i++;
    const bodyLines = [];
    while (i < lines.length && !/^### /.test(lines[i]) && !/^## /.test(lines[i])) {
      if (lines[i].trim() === "***") {
        i++;
        break;
      }
      bodyLines.push(lines[i]);
      i++;
    }

    const core = `${base}.${parsedH3.local}`;
    const title = parsedH3.strike ? `~~${core}~~` : core;
    const { lead, sections } = splitMemberSections(bodyLines.join("\n"));
    const { defined, desc } = parseLead(lead);

    /** @type {string | null} */
    let sigLine = null;
    const fence = /```ts\n([\s\S]*?)```/.exec(lead);
    if (fence) sigLine = fence[1].trim().split("\n")[0] || null;

    const badge = definedToBadge(defined);

    const tables = sections.filter((s) => TABLE_SECTIONS.has(s.title));
    const rest = sections.filter((s) => !TABLE_SECTIONS.has(s.title));
    const deprecatedSection = rest.find((s) => s.title === "Deprecated");
    const deprecatedNote = deprecatedSection ? parseDeprecatedNote(deprecatedSection.body) : "";
    const restSections = rest.filter((s) => s.title !== "Deprecated");

    out.push(`<div class="smt-member-card">`, "");
    out.push(`### ${title} :id=${parsedH3.id}`);
    if (badge) out.push("", badge);
    if (deprecatedNote) out.push("", renderDeprecatedHtml(deprecatedNote, pageRel));
    out.push("");

    if (sigLine) {
      out.push(renderSignatureHtml(parseSignatureLine(sigLine)), "");
    }

    for (const section of tables) {
      const table = flattenH5Table(section.title, section.body, pageRel);
      if (table.length) out.push(...table);
    }

    out.push(...renderDescription(desc));

    for (const section of restSections) {
      if (section.title === "See") {
        const body = section.body
          .split(/\n/)
          .map((l) => l.trim())
          .filter(Boolean);
        const onlyOfficial = body.length > 0 && body.every((line) => OFFICIAL_DOCS_HREF.test(line));
        if (onlyOfficial) continue;
      }
      if (DROP_SECTIONS.has(section.title)) {
        const retDesc = section.body
          .split(/\n/)
          .map((l) => l.trim())
          .filter((l) => l && !/^`[^`]+`$/.test(l) && !/^##### /.test(l) && !/^```/.test(l));
        if (retDesc.length) {
          out.push("", retDesc.join(" "), "");
        }
        continue;
      }
      out.push("", `#### ${section.title}`, section.body.trimEnd(), "");
    }

    out.push("", `</div>`, "");
  }

  return collapseOfficialSee(out.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n");
}

/**
 * @param {string | null} definedLine
 * @returns {string}
 */
function definedToBadge(definedLine) {
  if (!definedLine) return "";
  const link = /\[([^\]]+)\]\(([^)]+)\)/.exec(definedLine);
  if (!link) return `<p class="smt-member-defined">${escapeHtml(definedLine)}</p>`;
  const label = link[1].replace(/^.*\//, "");
  return `<p class="smt-member-badge"><a href="${escapeHtml(link[2])}" target="_blank" rel="noopener">${escapeHtml(label)}</a></p>`;
}

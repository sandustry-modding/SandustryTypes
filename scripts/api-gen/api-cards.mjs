/**
 * Turn TypeDoc member sections into Wayland-style API cards.
 */

import { qualifyDocsifyPageLinks, rewriteMarkdownLinks } from "./docsify-links.mjs";
import { qualifiedNameToSlug } from "./api-search.mjs";

const TABLE_SECTIONS = new Set(["Parameters", "Properties"]);
const DROP_SECTIONS = new Set(["Returns"]);

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
 * @param {string} chunk
 * @returns {{ type: string, desc: string }}
 */
function typeAndDescFromChunk(chunk) {
  const text = chunk.trim();
  const fence = /```ts\n([\s\S]*?)```/.exec(text);
  let type = "";
  let rest = text;
  if (fence) {
    const sig = fence[1].trim().split("\n")[0] || "";
    const typed = /:\s*(.+)$/.exec(sig);
    type = typed ? typed[1].trim() : sig.replace(/^(optional|readonly)\s+/, "");
    rest = text.replace(fence[0], "");
  }
  const lines = rest
    .split(/\n/)
    .map((l) => l.trim())
    .filter((l) => l && !/^Defined in:/i.test(l) && !/^#{4,}/.test(l));
  if (!type && lines[0]) {
    type = lines.shift() || "";
  }
  return { type, desc: lines.join(" ").replace(/\s+/g, " ").trim() };
}

/**
 * @param {string} title
 * @param {string} body
 * @returns {string[]}
 */
function flattenH5Table(title, body) {
  const col = title === "Properties" ? "Property" : "Argument";
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
    while (i < lines.length && !/^##### /.test(lines[i])) {
      if (/^#{1,4} /.test(lines[i])) break;
      if (/^###### /.test(lines[i])) {
        i++;
        while (i < lines.length && !/^#{1,6} /.test(lines[i])) i++;
        continue;
      }
      chunkLines.push(lines[i]);
      i++;
    }
    const { type, desc } = typeAndDescFromChunk(chunkLines.join("\n"));
    rows.push({ name, type, desc });
  }
  if (!rows.length) return [];
  const out = [
    "",
    `| ${col} | Type | Description |`,
    `| --- | --- | --- |`,
  ];
  for (const row of rows) {
    out.push(
      `| ${escapeTableCell(row.name)} | ${escapeTableCell(row.type)} | ${escapeTableCell(row.desc)} |`,
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
 */
export function restyleApiCards(content, qualified) {
  const worker = String(qualified || "").endsWith(" (worker)");
  const base = worker ? qualified.slice(0, -" (worker)".length) : String(qualified || "");
  const pageSlug = qualifiedNameToSlug(qualified);
  const pageRel = pageSlug ? `api/${pageSlug}.md` : "";
  const lines = collapseOfficialSee(stripReferencesSection(content)).split(/\n/);
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
    out.push("");

    if (sigLine) {
      out.push(renderSignatureHtml(parseSignatureLine(sigLine)), "");
    }

    for (const section of tables) {
      const table = flattenH5Table(section.title, section.body);
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

    if (deprecatedNote) out.push("", renderDeprecatedHtml(deprecatedNote, pageRel));

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

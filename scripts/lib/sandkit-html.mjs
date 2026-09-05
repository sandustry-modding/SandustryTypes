/**
 * Parse the official Sandkit HTML API reference (`sandustry.com/sandkit.html`).
 */

/**
 * @param {string} html
 * @returns {string}
 */
export function extractApiContent(html) {
  const idMatch = html.match(/<(main|div)\b[^>]*\bid=["']api-content["'][^>]*>/i);
  if (!idMatch || idMatch.index == null) {
    throw new Error('could not find element with id="api-content"');
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

  throw new Error(`could not find closing </${tagName}> for api-content`);
}

/**
 * Strip HTML tags and collapse whitespace.
 * @param {string} html
 */
export function stripHtml(html) {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

/**
 * @typedef {{ path: string, signature: string, summaryStack: string[] }} OfficialApiMember
 */

/**
 * Walk nested `<details>` blocks and collect `api-signature` entries.
 * @param {string} html Full page HTML.
 * @returns {OfficialApiMember[]}
 */
export function parseOfficialApiInventory(html) {
  const content = extractApiContent(html);
  /** @type {string[]} */
  const stack = [];
  /** @type {OfficialApiMember[]} */
  const members = [];

  for (const line of content.split("\n")) {
    const summaryMatch = line.match(/<summary>(.*?)<\/summary>/);
    if (summaryMatch) {
      stack.push(stripHtml(summaryMatch[1]).replace(/^`+|`+$/g, ""));
      continue;
    }

    if (line.includes("</details>")) {
      if (stack.length) stack.pop();
      continue;
    }

    const sigMatch = line.match(/class="api-signature"[^>]*><code>([^<]+)<\/code>/);
    if (!sigMatch) continue;

    const signature = sigMatch[1].trim();
    const bare = signature.split("(")[0].trim();
    const path = qualifyOfficialPath(stack, bare);
    if (!path) continue;

    members.push({
      path,
      signature,
      summaryStack: [...stack],
    });
  }

  return members;
}

/**
 * @param {string[]} stack
 * @param {string} bare Method name or dotted path from signature.
 * @returns {string | null}
 */
function qualifyOfficialPath(stack, bare) {
  if (bare.includes(".") && !bare.includes(" ")) return bare;

  /** @type {string[]} */
  const parts = [];
  for (const entry of stack) {
    const label = entry.replace(/^`+|`+$/g, "").trim();
    if (!label || label === "Main entry" || label === "Worker entry") continue;
    if (label.startsWith("api.")) {
      parts.push(...label.slice(4).split(".").filter(Boolean));
      continue;
    }
    if (label.startsWith("Deprecated")) continue;
    if (label.includes("(") || label.includes(":") || label.includes(" ")) continue;
    parts.push(label);
  }

  if (!parts.length) return bare.includes(".") ? bare : null;
  return `${parts.join(".")}.${bare}`;
}

/**
 * Group official members by top-level `sandkit.api` namespace.
 * @param {OfficialApiMember[]} members
 */
export function groupOfficialByNamespace(members) {
  /** @type {Record<string, OfficialApiMember[]>} */
  const out = {};
  for (const member of members) {
    const ns = member.path.split(".")[0];
    if (!ns) continue;
    (out[ns] ??= []).push(member);
  }
  return out;
}

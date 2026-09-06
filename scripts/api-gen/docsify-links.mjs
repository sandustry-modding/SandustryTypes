/**
 * Docsify hash-router link helpers.
 *
 * Docsify turns a first `#fragment` into `?id=` (`replaceSlug`).
 * Hash-only targets (`#start`) stay on the current page.
 * `file.md#id` becomes `file.md?id=id`.
 * `#/route` is a page URL and must stay unchanged.
 */

const SKIP_VALIDATE = new Set(["full.md", "AGENTS.md"]);

/**
 * Docsify 5 heading slugify (cache is per page).
 * @see https://github.com/docsifyjs/docsify/blob/v5.0.0/src/core/render/slugify.js
 */
export function createDocsifySlugify() {
  /** @type {Record<string, number>} */
  let cache = {};
  const re = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;

  /**
   * @param {string} str
   * @returns {string}
   */
  function slugify(str) {
    if (typeof str !== "string") return "";

    let slug = str
      .trim()
      .normalize("NFC")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\uFE0F/g, "")
      .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
      .replace(/[A-Z]+/g, (s) => s.toLowerCase())
      .replace(/<[^>]+>/g, "")
      .replace(re, "")
      .replace(/\s/g, "-")
      .replace(/^(\d)/, "_$1");

    const count = Object.keys(cache).includes(slug) ? cache[slug] + 1 : 0;
    cache[slug] = count;
    if (count) slug = `${slug}-${count}`;
    return slug;
  }

  slugify.clear = () => {
    cache = {};
  };
  return slugify;
}

/**
 * @param {string} href
 * @returns {boolean}
 */
export function isExternalHref(href) {
  return /^(https?:|mailto:|tel:)/i.test(href);
}

/**
 * Rewrite a markdown href so Docsify hash routing can resolve the heading.
 * @param {string} href
 * @returns {string}
 */
export function rewriteDocsifyHref(href) {
  const raw = String(href || "").trim();
  if (!raw || isExternalHref(raw) || raw.startsWith("data:")) return raw;
  if (raw.startsWith("#/")) return raw;
  if (raw.startsWith("?")) return raw;
  if (raw.startsWith("#")) return `?id=${raw.slice(1)}`;

  const hashIndex = raw.indexOf("#");
  if (hashIndex < 0) return raw;

  const pathPart = raw.slice(0, hashIndex);
  const fragment = raw.slice(hashIndex + 1);
  if (!fragment) return pathPart;
  if (pathPart.includes("?")) {
    return `${pathPart}&id=${fragment}`;
  }
  return `${pathPart}?id=${fragment}`;
}

/**
 * Rewrite every markdown `[text](href)` in a document.
 * @param {string} content
 * @returns {string}
 */
export function rewriteMarkdownLinks(content) {
  const lines = String(content || "").split(/\n/);
  let inFence = false;
  /** @type {string[]} */
  const out = [];
  for (const line of lines) {
    if (/^```/.test(line)) {
      inFence = !inFence;
      out.push(line);
      continue;
    }
    if (inFence) {
      out.push(line);
      continue;
    }
    out.push(
      line.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, (match, _label, href) => {
        const next = rewriteDocsifyHref(href);
        return next === href ? match : match.replace(href, next);
      }),
    );
  }
  return out.join("\n");
}

/**
 * Docsify does not route bare `?id=` links inside HTML `markdown="1"` blocks.
 * Qualify them with the hosting page path from the docs root.
 *
 * @param {string} content
 * @param {string} pageRel posix path under `docs/` (for example `api/sandkit.api.player.md`)
 * @returns {string}
 */
export function qualifyDocsifyPageLinks(content, pageRel) {
  const page = String(pageRel || "").trim().replace(/^\//, "");
  if (!page) return String(content || "");
  return String(content || "").replace(
    /\[([^\]]+)\]\(\?id=([^)\s]+)\)/g,
    (_match, label, id) => `[${label}](${page}?id=${id})`,
  );
}

/**
 * @param {string} headingText heading line without leading hashes
 * @param {(s: string) => string} slugify
 * @returns {string}
 */
export function headingIdFromText(headingText, slugify) {
  let text = String(headingText || "").trim();
  text = text.replace(/\s+<!--.*?-->\s*$/, "");
  const cfg = /(?:^|\s):([\w-]+)=?([\w-%]+)?/g;
  /** @type {Record<string, string>} */
  const config = {};
  text = text
    .replace(cfg, (m, key, value) => {
      if (String(key).includes(":")) return m;
      config[key] = value || "";
      return "";
    })
    .replace(/\{docsify-ignore(-all)?\}/g, "")
    .trim();
  return slugify(config.id || text);
}

/**
 * Heading ids on one markdown page (Docsify order, including duplicates).
 * @param {string} content
 * @returns {Set<string>}
 */
export function collectHeadingIds(content) {
  const slugify = createDocsifySlugify();
  /** @type {Set<string>} */
  const ids = new Set();
  const lines = String(content || "").split(/\r?\n/);
  let inFence = false;

  for (const line of lines) {
    if (/^```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const heading = /^(#{1,6})\s+(.+)$/.exec(line);
    if (!heading) continue;
    const id = headingIdFromText(heading[2], slugify);
    if (id) ids.add(id.toLowerCase());
  }
  return ids;
}

/**
 * @typedef {{ href: string, line: number }} MdLink
 */

/**
 * @param {string} content
 * @returns {MdLink[]}
 */
export function extractMarkdownLinks(content) {
  /** @type {MdLink[]} */
  const links = [];
  const lines = String(content || "").split(/\r?\n/);
  let inFence = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const re = /\[([^\]]*)\]\(([^)\s]+)(?:\s+(?:"[^"]*"|'[^']*'))?\)/g;
    let m;
    while ((m = re.exec(line))) {
      links.push({ href: m[2], line: i + 1 });
    }
  }
  return links;
}

/**
 * Map a Docsify href (no host) to a file under `docs/`.
 * This site does not set `relativePath`, so paths are from the docs root.
 *
 * @param {string} href
 * @param {string} fromRel posix path of the linking file under docs/
 * @returns {{ file: string | null, id: string | null, skip: boolean, reason?: string }}
 */
function idFromQuery(query) {
  const idMatch = /(?:^|&)id=([^&]*)/.exec(query);
  if (!idMatch) return null;
  return decodeURIComponent(idMatch[1] || "").toLowerCase();
}

export function resolveDocsifyTarget(href, fromRel) {
  let raw = String(href || "").trim();
  if (!raw) return { file: null, id: null, skip: false, reason: "empty href" };
  if (isExternalHref(raw) || raw.startsWith("data:")) {
    return { file: null, id: null, skip: true };
  }
  if (raw.startsWith("javascript:")) {
    return { file: null, id: null, skip: false, reason: "javascript href" };
  }

  if (raw.startsWith("#/")) raw = raw.slice(2);

  if (raw.startsWith("#")) {
    return { file: fromRel, id: raw.slice(1).toLowerCase(), skip: false };
  }
  if (raw.startsWith("?")) {
    return { file: fromRel, id: idFromQuery(raw.slice(1)), skip: false };
  }

  /** @type {string | null} */
  let id = null;
  const qIndex = raw.indexOf("?");
  let pathPart = raw;
  if (qIndex >= 0) {
    id = idFromQuery(raw.slice(qIndex + 1));
    pathPart = raw.slice(0, qIndex);
  }

  if (pathPart.startsWith("#")) {
    id = pathPart.slice(1).toLowerCase();
    pathPart = "";
  }

  if (!pathPart || pathPart === "/" || pathPart === "README" || pathPart === "README.md") {
    return { file: "README.md", id, skip: false };
  }

  pathPart = pathPart.replace(/^\//, "");
  if (pathPart.endsWith("/")) pathPart += "README.md";
  else if (!/\.(md|html|json|css|js|svg|png|jpg|jpeg|gif|webp|ico)$/i.test(pathPart)) {
    pathPart += ".md";
  }

  if (pathPart.startsWith("./") || pathPart.startsWith("../")) {
    const fromDir = fromRel.includes("/") ? fromRel.slice(0, fromRel.lastIndexOf("/")) : "";
    pathPart = normalizePosix(`${fromDir}/${pathPart}`);
  }

  if (pathPart.startsWith("..")) {
    return { file: null, id, skip: false, reason: "path escapes docs root" };
  }

  return { file: pathPart, id, skip: false };
}

/**
 * @param {string} path
 * @returns {string}
 */
function normalizePosix(path) {
  const parts = [];
  for (const seg of path.split("/")) {
    if (!seg || seg === ".") continue;
    if (seg === "..") {
      parts.pop();
      continue;
    }
    parts.push(seg);
  }
  return parts.join("/");
}

/**
 * @typedef {{ file: string, line: number, href: string, message: string }} LinkError
 */

/**
 * @param {Array<{ rel: string, content: string }>} files posix rel under docs/
 * @param {(rel: string) => boolean} fileExists
 * @returns {LinkError[]}
 */
export function validateDocsifyLinks(files, fileExists) {
  /** @type {Map<string, Set<string>>} */
  const idsByFile = new Map();
  /** @type {Set<string>} */
  const relSet = new Set();

  for (const file of files) {
    relSet.add(file.rel);
    idsByFile.set(file.rel, collectHeadingIds(file.content));
  }

  /** @type {LinkError[]} */
  const errors = [];

  for (const file of files) {
    const base = file.rel.split("/").pop() || "";
    if (SKIP_VALIDATE.has(base) || SKIP_VALIDATE.has(file.rel)) continue;

    for (const link of extractMarkdownLinks(file.content)) {
      const target = resolveDocsifyTarget(link.href, file.rel);
      if (target.skip) continue;
      if (target.reason && !target.file) {
        errors.push({
          file: file.rel,
          line: link.line,
          href: link.href,
          message: target.reason,
        });
        continue;
      }
      if (!target.file) continue;

      const exists = relSet.has(target.file) || fileExists(target.file);
      if (!exists) {
        errors.push({
          file: file.rel,
          line: link.line,
          href: link.href,
          message: `missing file ${target.file}`,
        });
        continue;
      }

      if (!target.id) continue;
      if (!target.file.endsWith(".md")) continue;
      if (SKIP_VALIDATE.has(target.file.split("/").pop() || "")) continue;

      const ids = idsByFile.get(target.file) || collectHeadingIds("");
      if (!ids.has(target.id)) {
        errors.push({
          file: file.rel,
          line: link.line,
          href: link.href,
          message: `missing heading id "${target.id}" in ${target.file}`,
        });
      }
    }
  }

  return errors;
}

const DEPRECATED_NOTE_RE =
  /<div class="smt-member-deprecated-note"([^>]*)>([\s\S]*?)<\/div>/g;

/**
 * Enforce Docsify routing rules on generated deprecated callouts.
 * Notes must use `markdown="1"` and markdown links, not raw HTML anchors.
 *
 * @param {Array<{ rel: string, content: string }>} files
 * @param {(rel: string) => boolean} fileExists
 * @returns {LinkError[]}
 */
export function validateDeprecatedCallouts(files, fileExists) {
  /** @type {Map<string, Set<string>>} */
  const idsByFile = new Map();
  /** @type {Set<string>} */
  const relSet = new Set();

  for (const file of files) {
    relSet.add(file.rel);
    idsByFile.set(file.rel, collectHeadingIds(file.content));
  }

  /** @type {LinkError[]} */
  const errors = [];

  for (const file of files) {
    if (!file.content.includes("smt-member-deprecated-note")) continue;

    let match;
    DEPRECATED_NOTE_RE.lastIndex = 0;
    while ((match = DEPRECATED_NOTE_RE.exec(file.content))) {
      const attrs = match[1] || "";
      const body = match[2] || "";
      const line = file.content.slice(0, match.index).split("\n").length;

      if (!/\bmarkdown\s*=\s*["']1["']/.test(attrs)) {
        errors.push({
          file: file.rel,
          line,
          href: "",
          message: 'deprecated callout note must use markdown="1" for Docsify routing',
        });
      }

      if (/<a\s/i.test(body)) {
        errors.push({
          file: file.rel,
          line,
          href: "",
          message: "deprecated callout must use markdown links, not HTML <a> tags",
        });
        continue;
      }

      if (/\[[^\]]+\]\(\?id=/i.test(body)) {
        errors.push({
          file: file.rel,
          line,
          href: "",
          message:
            "deprecated callout links must include the page path (api/page.md?id=...); bare ?id= breaks Docsify inside HTML blocks",
        });
      }

      const bodyStartLine = line + (match[0].slice(0, match[0].indexOf(body)).split("\n").length - 1);
      for (const link of extractMarkdownLinks(body)) {
        const target = resolveDocsifyTarget(link.href, file.rel);
        if (target.skip) continue;
        if (target.reason && !target.file) {
          errors.push({
            file: file.rel,
            line: bodyStartLine,
            href: link.href,
            message: target.reason,
          });
          continue;
        }
        if (!target.file) continue;

        const exists = relSet.has(target.file) || fileExists(target.file);
        if (!exists) {
          errors.push({
            file: file.rel,
            line: bodyStartLine,
            href: link.href,
            message: `missing file ${target.file}`,
          });
          continue;
        }

        if (!target.id || !target.file.endsWith(".md")) continue;
        const ids = idsByFile.get(target.file) || collectHeadingIds("");
        if (!ids.has(target.id)) {
          errors.push({
            file: file.rel,
            line: bodyStartLine,
            href: link.href,
            message: `missing heading id "${target.id}" in ${target.file}`,
          });
        }
      }
    }
  }

  return errors;
}

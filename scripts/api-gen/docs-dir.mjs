/**
 * Docsify site clone used by the API generator.
 * The types package does not keep a `docs/` tree.
 */
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const API_GEN = dirname(fileURLToPath(import.meta.url));
export const TYPES_ROOT = dirname(dirname(API_GEN));

/**
 * Org Pages clone at `../docs` (template `docs/`).
 * @returns {string}
 */
export function resolveDocsDir() {
  const sibling = join(TYPES_ROOT, "..", "docs");
  if (existsSync(join(sibling, ".git"))) return sibling;
  throw new Error(
    "api-gen: missing docs site clone at ../docs (git repo). Clone sandustry-modding.github.io next to this package, or use the mod template docs/ folder.",
  );
}

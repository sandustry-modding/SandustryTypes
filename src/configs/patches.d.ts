/**
 * Sandkit bundle patch schema (`patches.json`).
 *
 * Not a runtime `sandkit` object. Use these types when authoring or validating
 * compiled-bundle patches. Patches break across game updates; prefer
 * `sandkit.api` when possible.
 *
 * @module
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
 */

/**
 * Known compiled bundle paths the loader can patch.
 *
 * | Value | Role |
 * | --- | --- |
 * | `js/bundle.js` | Main renderer |
 * | `js/manager-worker.js` | Manager worker |
 * | `js/simulation-worker.js` | Simulation workers |
 * | `js/utility-worker.js` | Utility worker |
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
 */
export type PatchTargetFile =
  | "js/bundle.js"
  | "js/simulation-worker.js"
  | "js/manager-worker.js"
  | "js/utility-worker.js"
  | (string & {});

/**
 * Supported patch operations.
 *
 * | Value | Behaviour |
 * | --- | --- |
 * | `replace` | Replace the matched text with {@link BundlePatch.code} / {@link BundlePatch.replace} |
 * | `remove` | Delete the matched text |
 * | `insertBefore` | Insert {@link BundlePatch.code} before the match |
 * | `insertAfter` | Insert {@link BundlePatch.code} after the match |
 * | `wrap` | Surround the match with {@link BundlePatch.before} and {@link BundlePatch.after} |
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
 */
export type PatchOperation =
  | "replace"
  | "remove"
  | "insertBefore"
  | "insertAfter"
  | "wrap";

/**
 * Regex finder when the target is not a plain {@link BundlePatch.find} string.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
 */
export interface BundlePatchRegex {
  /**
   * JavaScript regex pattern source (without surrounding `/` delimiters).
   * Capture groups may be referenced from {@link BundlePatch.code} as `$1`, `$2`, …
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
   */
  pattern: string;
  /**
   * Optional regex flags (for example `"g"` or `"m"`).
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
   */
  flags?: string;
}

/**
 * One entry in `patches.json`.
 *
 * The file is an array of these objects. Prefer `expectedMatches` so a missed
 * or duplicated match fails loudly. When several patches must succeed together
 * (for example main + worker), set the same {@link atomicGroup} on each.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
 */
export interface BundlePatch {
  /**
   * Compiled bundle to modify.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
   */
  file: PatchTargetFile;
  /**
   * Exact source substring to locate in the bundle.
   * Mutually exclusive with {@link regex} in typical patches.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
   */
  find?: string;
  /**
   * Replacement or inserted source text.
   * Official examples use `code`; some loaders also accept {@link replace}.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
   */
  code?: string;
  /**
   * Alias of {@link code} used by some patch loaders and workshop mods.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
   */
  replace?: string;
  /**
   * How to apply the match. Defaults to replace-style behaviour when omitted
   * in common workshop patches.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
   */
  operation?: PatchOperation;
  /**
   * How many times `find` / `regex` must match.
   * Use a number (often `1`) so the load fails on miss or over-match.
   * Some loaders accept `"any"`.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
   */
  expectedMatches?: number | "any";
  /**
   * Regex-based locator instead of a literal {@link find} string.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
   */
  regex?: BundlePatchRegex;
  /**
   * Text inserted before the match when {@link operation} is `"wrap"`.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
   */
  before?: string;
  /**
   * Text inserted after the match when {@link operation} is `"wrap"`.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
   */
  after?: string;
  /**
   * Optional stable id for logging and tooling.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
   */
  id?: string;
  /**
   * Group id shared by patches that must all succeed or all fail together.
   * Use the same string on paired main (`js/bundle.js`) and worker
   * (`js/simulation-worker.js`) patches.
   */
  atomicGroup?: string;
  /**
   * Human-readable note for maintainers. Not required by the official schema.
   */
  description?: string;
}

/**
 * Root shape of `patches.json`: an ordered list of {@link BundlePatch} entries.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Patching compiled JavaScript
 */
export type BundlePatchesFile = BundlePatch[];

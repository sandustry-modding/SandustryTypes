/**
 * Sandkit bundle patch schema (`patches.json`).
 *
 * Not a runtime `sandkit` object. Use these types when authoring or validating
 * compiled-bundle patches. Patches break across game updates; prefer
 * `sandkit.api` when possible.
 *
 * @module
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
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
 * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
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
 * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
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
 * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
 */
export interface BundlePatchRegex {
  /**
   * JavaScript regex pattern source (without surrounding `/` delimiters).
   * Capture groups may be referenced from {@link BundlePatch.code} as `$1`, `$2`, …
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
   */
  pattern: string;
  /**
   * Optional regex flags (for example `"g"` or `"m"`).
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
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
 * @example patches.json example
 * ```ts
 * [
 *   {
 *     "file": "js/bundle.js",
 *     "find": "const message = 'Hello';",
 *     "operation": "replace",
 *     "code": "const message = 'Hello from my mod';",
 *     "expectedMatches": 1
 *   },
 *   {
 *     "file": "js/simulation-worker.js",
 *     "regex": {
 *       "pattern": "const ([a-z]+) = false;"
 *     },
 *     "operation": "replace",
 *     "code": "const $1 = true;",
 *     "expectedMatches": 1
 *   },
 *   {
 *     "file": "js/bundle.js",
 *     "find": "doThing();",
 *     "operation": "wrap",
 *     "before": "if (enabled) { ",
 *     "after": " }",
 *     "expectedMatches": 1
 *   }
 * ]
 * ```
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
 */
export interface BundlePatch {
  /**
   * Compiled bundle to modify.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
   */
  file: PatchTargetFile;
  /**
   * Exact source substring to locate in the bundle.
   * Mutually exclusive with {@link regex} in typical patches.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
   */
  find?: string;
  /**
   * Replacement or inserted source text.
   * Official examples use `code`; some loaders also accept {@link replace}.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
   */
  code?: string;
  /**
   * Alias of {@link code} used by some patch loaders and workshop mods.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
   */
  replace?: string;
  /**
   * How to apply the match. Defaults to replace-style behaviour when omitted
   * in common workshop patches.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
   */
  operation?: PatchOperation;
  /**
   * How many times `find` / `regex` must match.
   * Use a number (often `1`) so the load fails on miss or over-match.
   * Some loaders accept `"any"`.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
   */
  expectedMatches?: number | "any";
  /**
   * Regex-based locator instead of a literal {@link find} string.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
   */
  regex?: BundlePatchRegex;
  /**
   * Text inserted before the match when {@link operation} is `"wrap"`.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
   */
  before?: string;
  /**
   * Text inserted after the match when {@link operation} is `"wrap"`.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
   */
  after?: string;
  /**
   * Optional stable id for logging and tooling.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
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
 * @see [Official docs](https://sandustry.com/sandkit.html#patches-heading)
 */
export type BundlePatchesFile = BundlePatch[];

import type { LooseString } from "../../shared/nominal";

/**
 * `sandkit.api.i18n` — translations, locales, and display strings for mods.
 * Main thread only.
 */
export namespace i18n {
  /**
   * Translates a key with optional parameter substitution.
   *
   * @param key - Translation key.
   * @param params - Placeholder values for the key template.
   *
   * @example
   * ```ts
   * const message = api.i18n.t("mods|example|count", {
   *   count: 3,
   * });
   * ```
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function t(key: string, params?: Record<string, string | number>): string;

  /**
   * Registers translation strings for a locale.
   *
   * @param locale - Locale code (e.g. `en`).
   * @param translations - Map of keys to translated strings.
   *
   * @example
   * ```ts
   * api.i18n.register("en", {
   *   "mods|example|title": "Example",
   * });
   * ```
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function register(locale: Locale, translations: Record<string, string>): void;

  /**
   * Returns the active locale code.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getLocale(): Locale;

  /**
   * Returns true when a translation exists for the key.
   *
   * @param key - Translation key.
   * @param locale - Optional locale; defaults to the active locale.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function hasTranslation(key: string, locale?: Locale): boolean;

  /**
   * Sets the active locale.
   *
   * @param locale - Locale code to activate.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function setLocale(locale: Locale): Promise<void>;

  /**
   * Returns metadata for all known languages.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getLanguages(): { code: Locale; nativeName: string; englishName: string; enabled: boolean; }[];

  /**
   * Returns locale codes that have registered translations.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getAvailableLocales(): Locale[];

  /**
   * Formats a number for the active locale.
   *
   * @param value - Number to format.
   * @param options - Intl-style number format options.
   *
   * @example
   * ```ts
   * const formatted = api.i18n.formatNumber(1234.5, {
   *   maximumFractionDigits: 1,
   * });
   * ```
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function formatNumber(value: number, options?: I18nNumberFormatOptions): string;

  /**
   * Joins key parts into a single translation key.
   *
   * @param parts - Key segments joined with `.`.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function joinKey(...parts: string[]): string;

  /**
   * @deprecated Use {@link joinKey} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function key(...parts: string[]): string;

  /**
   * Returns the display name from a definition with nameKey or name.
   *
   * @param definition - Object with `nameKey` or `name`.
   *
   * @example
   * ```ts
   * const name = api.i18n.getName({
   *   name: "Example Machine",
   *   nameKey: "structures|exampleMachine|name",
   * });
   * ```
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getName(definition: { nameKey?: string; name?: string; }): string;

  /**
   * Returns the description from a definition with descriptionKey or description.
   *
   * @param definition - Object with `descriptionKey` or `description`.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getDescription(definition: { descriptionKey?: string; description?: string; }): string;

  /**
   * Creates a translatable string object with a fallback.
   *
   * @param key - Translation key.
   * @param fallback - Text used when no translation is registered.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function createTranslatable(key: string, fallback: string): { __translatable: true; key: string; fallback: string; };

  /**
   * @deprecated Use {@link createTranslatable} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function translatable(key: string, fallback: string): { __translatable: true; key: string; fallback: string; };

  /**
   * Sets a global string or lazy resolver used in translations.
   *
   * @param key - Global helper key.
   * @param value - Static string or function that returns the current value.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function setGlobal(key: string, value: string | (() => string)): void;

  /**
   * Returns a global translation helper value.
   *
   * @param key - Global helper key.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getGlobal(key: string): string | undefined;

  /**
   * Removes a global translation helper value.
   *
   * @param key - Global helper key.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function removeGlobal(key: string): void;

  /**
   * @deprecated Use {@link removeGlobal} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function clearGlobal(key: string): void;

  /**
   * Returns all global translation helper values.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getGlobals(): Record<string, string>;

  /**
   * Formats a key code for display in UI.
   *
   * @param keyCode - Keyboard key code or binding name.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function formatKeyForDisplay(keyCode: string): string;

  /** Locale code. `"en"` autocompletes; any locale string is allowed. */
  export type Locale = LooseString<"en">;

  /** Number format options for {@link formatNumber}. */
  export interface I18nNumberFormatOptions {
    /** Minimum fraction digits. */
    minimumFractionDigits?: number;
    /** Maximum fraction digits. */
    maximumFractionDigits?: number;
    /** When true, use grouping separators. */
    useGrouping?: boolean;
    [key: string]: unknown;
  }
}

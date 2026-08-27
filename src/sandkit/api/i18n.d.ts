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
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.t`
   */
  export function t(key: string, params?: Record<string, string | number>): string;

  /**
   * Registers translation strings for a locale.
   *
   * @param locale - Locale code (e.g. `en`).
   * @param translations - Map of keys to translated strings.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.register`
   */
  export function register(locale: Locale, translations: Record<string, string>): void;

  /**
   * Returns the active locale code.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.getLocale`
   */
  export function getLocale(): Locale;

  /**
   * Returns true when a translation exists for the key.
   *
   * @param key - Translation key.
   * @param locale - Optional locale; defaults to the active locale.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.hasTranslation`
   */
  export function hasTranslation(key: string, locale?: Locale): boolean;

  /**
   * Sets the active locale.
   *
   * @param locale - Locale code to activate.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.setLocale`
   */
  export function setLocale(locale: Locale): Promise<void>;

  /**
   * Returns metadata for all known languages.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.getLanguages`
   */
  export function getLanguages(): { code: Locale; nativeName: string; englishName: string; enabled: boolean; }[];

  /**
   * Returns locale codes that have registered translations.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.getAvailableLocales`
   */
  export function getAvailableLocales(): Locale[];

  /**
   * Formats a number for the active locale.
   *
   * @param value - Number to format.
   * @param options - Intl-style number format options.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.formatNumber`
   */
  export function formatNumber(value: number, options?: I18nNumberFormatOptions): string;

  /**
   * Joins key parts into a single translation key.
   *
   * @param parts - Key segments joined with `.`.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.joinKey`
   */
  export function joinKey(...parts: string[]): string;

  /**
   * @deprecated Use {@link joinKey} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.i18n.joinKey`
   */
  export function key(...parts: string[]): string;

  /**
   * Returns the display name from a definition with nameKey or name.
   *
   * @param definition - Object with `nameKey` or `name`.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.getName`
   */
  export function getName(definition: { nameKey?: string; name?: string; }): string;

  /**
   * Returns the description from a definition with descriptionKey or description.
   *
   * @param definition - Object with `descriptionKey` or `description`.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.getDescription`
   */
  export function getDescription(definition: { descriptionKey?: string; description?: string; }): string;

  /**
   * Creates a translatable string object with a fallback.
   *
   * @param key - Translation key.
   * @param fallback - Text used when no translation is registered.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.createTranslatable`
   */
  export function createTranslatable(key: string, fallback: string): { __translatable: true; key: string; fallback: string; };

  /**
   * @deprecated Use {@link createTranslatable} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.i18n.createTranslatable`
   */
  export function translatable(key: string, fallback: string): { __translatable: true; key: string; fallback: string; };

  /**
   * Sets a global string or lazy resolver used in translations.
   *
   * @param key - Global helper key.
   * @param value - Static string or function that returns the current value.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.setGlobal`
   */
  export function setGlobal(key: string, value: string | (() => string)): void;

  /**
   * Returns a global translation helper value.
   *
   * @param key - Global helper key.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.getGlobal`
   */
  export function getGlobal(key: string): string | undefined;

  /**
   * Removes a global translation helper value.
   *
   * @param key - Global helper key.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.removeGlobal`
   */
  export function removeGlobal(key: string): void;

  /**
   * @deprecated Use {@link removeGlobal} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.i18n.removeGlobal`
   */
  export function clearGlobal(key: string): void;

  /**
   * Returns all global translation helper values.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.getGlobals`
   */
  export function getGlobals(): Record<string, string>;

  /**
   * Formats a key code for display in UI.
   *
   * @param keyCode - Keyboard key code or binding name.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.i18n.formatKeyForDisplay`
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

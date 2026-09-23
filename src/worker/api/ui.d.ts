import type { ui as MainUi } from "../../sandkit/api/ui";

/**
 * Worker-thread `sandkit.api.ui` — toast messages.
 *
 * @internal Worker subset; main thread exposes dialogs, regions, and hotbar helpers.
 */
export namespace ui {
  /**
   * Show a short on-screen toast message.
   *
   * @param message - Plain text, translation key, or translatable value.
   * @param options - Cooldown, style, and auto-dismiss options.
   *
   * @example Worker entry
   * ```ts
   * api.ui.toast({ key: "mods|example|workerToast" });
   * ```
   */
  export function toast(message: LocalizedText, options?: ToastOptions): void;

  /** Plain text, translation key object, or i18n translatable value. */
  export type LocalizedText = MainUi.LocalizedText;
  /** Translation key with optional parameter substitution. */
  export type I18nTextKey = MainUi.I18nTextKey;
  /** Value returned by `sandkit.api.i18n.translatable`. */
  export type I18nTranslatable = MainUi.I18nTranslatable;
  /** Cooldown, style, and auto-dismiss options for {@link toast}. */
  export type ToastOptions = MainUi.ToastOptions;
}

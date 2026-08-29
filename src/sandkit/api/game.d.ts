/**
 * Game session start helpers.
 *
 * Available as `sandkit.api.game`.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
 */
export namespace game {
  /**
   * Start or restart the game session.
   *
   * @param options - Optional session start flags.
   *
   * @example
   * ```ts
   * api.game.start({ skipIntro: true });
   * ```
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function start(options?: GameStartOptions): void;

  /** Options for {@link start}. */
  export interface GameStartOptions {
    /** When true, skip the intro sequence. */
    skipIntro?: boolean;
  }
}

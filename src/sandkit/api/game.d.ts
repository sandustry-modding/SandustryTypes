/**
 * Game session start helpers.
 *
 * Available as `sandkit.api.game`.
 *
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
   */
  export function start(options?: GameStartOptions): void;

  /** Options for {@link start}. */
  export interface GameStartOptions {
    /** When true, skip the intro sequence. */
    skipIntro?: boolean;
  }
}

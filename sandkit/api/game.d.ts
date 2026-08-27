/**
 * Game session start helpers.
 *
 * Available as `sandkit.api.game`.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.game`
 */
export namespace game {
  /**
   * Start or restart the game session.
   *
   * @param options - Optional session start flags.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.game.start`
   */
  export function start(options?: GameStartOptions): void;

  /** Options for {@link start}. */
  export interface GameStartOptions {
    /** When true, skip the intro sequence. */
    skipIntro?: boolean;
  }
}

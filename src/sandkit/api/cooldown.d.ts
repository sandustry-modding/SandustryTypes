/**
 * `sandkit.api.cooldown` — reusable cooldown timers for abilities and items.
 * Main thread only.
 */
export namespace cooldown {
  /**
   * Start the cooldown when ready and return true; otherwise return false.
   * @param cooldown - Cooldown state object to check and update.
   * @param overrideTime - Optional timestamp (ms) instead of current game time.
   */
  export function start(cooldown: Cooldown, overrideTime?: number): boolean;
  /**
   * @deprecated Use {@link start} instead.
   * @param cooldown - Cooldown state object to check and update.
   * @param overrideTime - Optional timestamp (ms) instead of current game time.
   */
  export function check(cooldown: Cooldown, overrideTime?: number): boolean;
  /**
   * Return true when the cooldown has elapsed.
   * @param cooldown - Cooldown state object to check.
   * @param overrideTime - Optional timestamp (ms) instead of current game time.
   */
  export function isReady(cooldown: Cooldown, overrideTime?: number): boolean;

  /** Cooldown state object passed to {@link start} and {@link isReady}. */
  export type Cooldown = {
    /** Timestamp when the cooldown was last triggered (game time). */
    last: number;
    /** Cooldown duration in milliseconds. */
    time: number;
  };
}

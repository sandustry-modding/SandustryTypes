/**
 * Deferred callback scheduling on the next tick.
 *
 * Available as `sandkit.api.schedule`.
 *
 * @module
 */
export namespace schedule {
  /**
   * Run a callback on the next game tick.
   * @param callback - Function invoked once on the next tick.
   *
   * @example
   * ```ts
   * api.schedule.nextTick(() => {
   *   runDeferredWork();
   * });
   * ```
   */
  export function nextTick(callback: () => void): void;
}

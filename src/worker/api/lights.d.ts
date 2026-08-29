import type { shared } from "../../shared";

/**
 * Worker-thread `sandkit.api.lights` — temporary visual effect lights.
 *
 * @internal Worker exposes only {@link temporary}; persistent lights are main-thread only.
 */
export namespace lights {
  /**
   * Short-lived visual effect lights.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export namespace temporary {
    /** Options for {@link createAtWorld}. */
    export type TemporaryLightOptions = shared.api.effects.TemporaryLightOptions;

    /** Handle returned by {@link createAtWorld}. */
    export interface TemporaryLightHandle {
      /** Runtime light id, or null when the pool is full. */
      lightId: number | null;
      /**
       * @deprecated Use {@link lightId} instead.
       *
       * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
       */
      index?: number | null;
    }

    /**
     * Create a temporary light at world coordinates.
     *
     * @param worldX - World x position in pixels.
     * @param worldY - World y position in pixels.
     * @param options - Brightness, duration, colour, and dedup settings.
     *
     * @example Worker entry
     * ```ts
     * const light = api.lights.temporary.createAtWorld(worldX, worldY, {
     *   durationTicks: 15,
     * });
     * const lightId = light.lightId;
     * ```
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    export function createAtWorld(
      worldX: number,
      worldY: number,
      options?: TemporaryLightOptions,
    ): TemporaryLightHandle;
  }
}

import type { shared } from "../../shared";

/**
 * `sandkit.api.lights` — temporary lights and persistent world lights.
 * Main thread only.
 */
export namespace lights {
  /** Short-lived visual effect lights. */
  export namespace temporary {
    /**
     * Create a temporary light at world coordinates.
     *
     * @param worldX - World X coordinate in pixels.
     * @param worldY - World Y coordinate in pixels.
     * @param options - Brightness, duration, color, and dedup options.
     *
     * @example Main entry
     * ```ts
     * const light = api.lights.temporary.createAtWorld(worldX, worldY, {
     *   brightness: 1,
     *   durationMs: 250,
     *   size: 80,
     * });
     * const lightId = light.lightId;
     * ```
     *
     * @example options.durationTicks
     * ```ts
     * api.lights.temporary.createAtWorld(worldX, worldY, {
     *   durationTicks: 15,
     * });
     * ```
     *
     * @example options.durationMs
     * ```ts
     * api.lights.temporary.createAtWorld(worldX, worldY, {
     *   durationMs: 250,
     * });
     * ```
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    export function createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): TemporaryLightHandle;

    /**
     * Remove a temporary light by its id.
     *
     * @param lightId - Light id returned from {@link createAtWorld}.
     *
     * @example
     * ```ts
     * if (light.lightId !== null) {
     *   api.lights.temporary.removeById(light.lightId);
     * }
     * ```
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    export function removeById(lightId: number): void;
  }

  /**
   * @deprecated Use {@link temporary} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import vfx = temporary;

  /** Lights that persist in the world save. */
  export namespace persistent {
    /**
     * Create a persistent light at world coordinates.
     *
     * @param worldX - World X coordinate in pixels.
     * @param worldY - World Y coordinate in pixels.
     * @param options - Brightness, size, color, and persistence options.
     *
     * @example
     * ```ts
     * const light = api.lights.persistent.createAtWorld(
     *   worldX,
     *   worldY,
     *   { brightness: 1, size: 80 },
     * );
     * ```
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    export function createAtWorld(worldX: number, worldY: number, options?: PersistentLightOptions): PersistentLightHandle;

    /**
     * Remove the persistent light at world coordinates.
     *
     * @param worldX - World X coordinate in pixels.
     * @param worldY - World Y coordinate in pixels.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    export function removeAtWorld(worldX: number, worldY: number): void;

    /**
     * Fade out the persistent light at world coordinates over durationMs.
     *
     * @param worldX - World X coordinate in pixels.
     * @param worldY - World Y coordinate in pixels.
     * @param durationMs - Fade duration in milliseconds.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    export function fadeAtWorld(worldX: number, worldY: number, durationMs?: number): void;

    /**
     * Mark persistent lights dirty so they are saved on the next flush.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    export function markDirty(): void;
  }

  /** Handle returned from {@link temporary.createAtWorld}. */
  export interface TemporaryLightHandle {
    /** Assigned temporary light id, or null when creation failed. */
    lightId: number | null;
    /**
     * @deprecated Use {@link lightId} instead.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    index: number | null;
  }

  /** Options for temporary lights. */
  export type TemporaryLightOptions = shared.api.effects.TemporaryLightOptions;

  /** Options for persistent world lights. */
  export interface PersistentLightOptions {
    /** Light brightness multiplier. */
    brightness?: number;
    /** Light radius in pixels. */
    size?: number;
    /** RGBA color components. */
    color?: [number, number, number, number];
    [key: string]: unknown;
  }

  /** Handle returned from {@link persistent.createAtWorld}. */
  export type PersistentLightHandle = unknown;
}

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
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.lights.temporary.createAtWorld`
     */
    export function createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): TemporaryLightHandle;

    /**
     * Remove a temporary light by its id.
     *
     * @param lightId - Light id returned from {@link createAtWorld}.
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.lights.temporary.removeById`
     */
    export function removeById(lightId: number): void;
  }

  /**
   * @deprecated Use {@link temporary} instead.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.lights.temporary`
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
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.lights.persistent.createAtWorld`
     */
    export function createAtWorld(worldX: number, worldY: number, options?: PersistentLightOptions): PersistentLightHandle;

    /**
     * Remove the persistent light at world coordinates.
     *
     * @param worldX - World X coordinate in pixels.
     * @param worldY - World Y coordinate in pixels.
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.lights.persistent.removeAtWorld`
     */
    export function removeAtWorld(worldX: number, worldY: number): void;

    /**
     * Fade out the persistent light at world coordinates over durationMs.
     *
     * @param worldX - World X coordinate in pixels.
     * @param worldY - World Y coordinate in pixels.
     * @param durationMs - Fade duration in milliseconds.
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.lights.persistent.fadeAtWorld`
     */
    export function fadeAtWorld(worldX: number, worldY: number, durationMs?: number): void;

    /**
     * Mark persistent lights dirty so they are saved on the next flush.
     *
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.lights.persistent.markDirty`
     */
    export function markDirty(): void;
  }

  /** Handle returned from {@link temporary.createAtWorld}. */
  export interface TemporaryLightHandle {
    /** Assigned temporary light id, or null when creation failed. */
    lightId: number | null;
    /**
     * @deprecated Use {@link lightId} instead.
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias on `api.lights.temporary.createAtWorld` return value
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

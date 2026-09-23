/**
 * Map selection and session start.
 *
 * Available as `sandkit.api.maps`.
 *
 * @module
 */
import type { CellXY } from "../../shared/geometry";

export namespace maps {
  /**
   * Return the currently loaded custom map definition.
   *
   * @returns Active map metadata, or `null` outside custom maps.
   */
  export function getActive(): Readonly<ActiveMapV1> | null;

  /**
   * Active custom map record (version 1 schema).
   *
   * Shape varies by map. Known fields are optional; additional keys may exist.
   */
  export type ActiveMapV1 = {
    id?: string;
    deployment?: unknown;
    spawn?: unknown;
    topBounds?: {
      soft?: number;
      hard?: number;
    };
    parallax?: unknown;
    depthLight?: unknown;
    [key: string]: unknown;
  };

  /** Return maps the player can start. */
  export function getAvailable(): readonly Readonly<AvailableMapV1>[];
  /**
   * Start a map by id. Return true when start succeeds.
   * @param mapId - Custom map identifier.
   */
  export function start(mapId: string): boolean;

  /**
   * Return artifact marker locations for the active map.
   *
   * @example
   * ```ts
   * api.events.on("game:ready", () => {
   *   api.maps.getArtifactLocations().forEach(({ cellX, cellY, name }) => {
   *     addMarker(cellX, cellY, name);
   *   });
   * });
   * ```
   *
   */
  export function getArtifactLocations(): readonly ArtifactLocation[];

  /** Artifact location entry from {@link getArtifactLocations}. */
  export type ArtifactLocation = CellXY & {
    name: string;
  };

  /** Available map entry shape. */
  export type AvailableMapV1 = {
    /** Map identifier passed to {@link start}. */
    id: string;
    /** Display name or translation key. */
    name?: string;
    [key: string]: unknown;
  };
}

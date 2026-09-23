import type { maps as MainMaps } from "../../sandkit/api/maps";

/**
 * Worker-thread `sandkit.api.maps` — active custom map metadata.
 *
 * @internal Worker subset; main thread exposes map start and artifact helpers.
 */
export namespace maps {
  /** Return the currently loaded custom map definition. */
  export function getActive(): Readonly<ActiveMapV1> | null;

  /** Active custom map record (version 1 schema). */
  export type ActiveMapV1 = MainMaps.ActiveMapV1;
}

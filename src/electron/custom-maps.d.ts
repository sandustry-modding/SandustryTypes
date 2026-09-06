/**
 * Custom map editor persistence helpers exposed as `electron.customMaps`.
 */

import type { JsonValueV1 } from "../shared/jsonvalue";
import type { ElectronOperationResult } from "./results";

/**
 * Custom map editor persistence helpers exposed as `electron.customMaps`.
 */
export interface ElectronCustomMapsApi {
  /**
   * Write one custom map file (`.custommap`).
   *
   * @param id - Map id used in the filename.
   * @param name - Display name stored in metadata.
   * @param data - Full custom map JSON payload.
   * @returns Operation result with written `path` on success.
   *
   * IPC: `custom-map-save`.
   */
  save(id: string, name: string, data: JsonValueV1): Promise<ElectronOperationResult>;

  /**
   * Load one custom map by id.
   *
   * @param id - Map id (filename stem).
   * @returns Parsed map JSON, or `null` when missing or invalid.
   *
   * IPC: `custom-map-load`.
   */
  load(id: string): Promise<JsonValueV1 | null>;

  /**
   * List custom map metadata entries (newest first).
   *
   * @returns Metadata objects parsed from each `.custommap` header line.
   *
   * IPC: `custom-map-list`.
   */
  list(): Promise<JsonValueV1[]>;

  /**
   * Delete one custom map file.
   *
   * @param id - Map id (filename stem).
   * @returns Operation result from the delete handler.
   *
   * IPC: `custom-map-delete`.
   */
  delete(id: string): Promise<ElectronOperationResult>;
}

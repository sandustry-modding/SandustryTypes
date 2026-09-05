/**
 * Steam Workshop link file (`workshop.json`).
 *
 * Created by the in-game publisher after the first upload.
 * Do not hand-edit `publishedFileId`.
 *
 * @module
 */

/**
 * Links a local mod folder to its Steam Workshop item.
 *
 * @example workshop.json
 * ```json
 * {
 *   "schemaVersion": 1,
 *   "publishedFileId": "1234567890"
 * }
 * ```
 */
export interface WorkshopJson {
  /** File format version. Must be `1`. */
  schemaVersion: 1;
  /** Steam Workshop published file id. Managed by the publisher. */
  publishedFileId: string;
}

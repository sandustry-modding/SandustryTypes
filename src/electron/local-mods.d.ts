/**
 * Local developer mod folder helpers exposed as `electron.localMods`.
 */

import type {
  ElectronLocalModsListResult,
  ElectronLocalModsUploadResult,
  ElectronOperationResult,
} from "./results";

/**
 * Local developer mod folder helpers exposed as `electron.localMods`.
 */
export interface ElectronLocalModsApi {
  /**
   * Return the absolute path to the OS local-mods folder.
   *
   * @returns Absolute filesystem path to the local mods root.
   *
   * IPC: `get-local-mods-folder`.
   */
  getFolder(): Promise<string>;

  /**
   * Open the local-mods folder in the OS file manager.
   *
   * @returns Operation result from the shell open call.
   *
   * IPC: `open-local-mods-folder`.
   */
  openFolder(): Promise<ElectronOperationResult>;

  /**
   * List installed local mod summaries.
   *
   * Steam only — MS Store returns `{ ok: false, errorCode: 'unsupported_platform' }`.
   *
   * @returns Listing result with mod summaries in `data` when `ok` is true.
   *
   * IPC: `local-mods-list`.
   */
  list(): Promise<ElectronLocalModsListResult>;

  /**
   * Upload one local mod folder to Steam Workshop.
   *
   * @param modId - Local mod folder id under the local-mods directory.
   * @returns Upload result with `errorCode` on failure.
   *
   * IPC: `local-mods-upload`.
   */
  upload(modId: string): Promise<ElectronLocalModsUploadResult>;
}

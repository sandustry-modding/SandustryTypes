/**
 * Top-level renderer preload bridge exposed as `window.electron`.
 *
 * Source of truth: Sandustry `preload.js` (`contextBridge.exposeInMainWorld('electron', …)`).
 * Main-process handlers live in `main.js`.
 *
 * Sync methods use `ipcRenderer.sendSync` and are safe during startup.
 * Async methods use `ipcRenderer.invoke` unless noted (`openDevTools`, `log`).
 */

import type { JsonValueV1 } from "../shared/jsonvalue";
import type { ElectronCustomMapsApi } from "./custom-maps";
import type { ElectronMacRightMouseApi } from "./mac-right-mouse";
import type { ElectronLocalModsApi } from "./local-mods";
import type { ElectronPlatformApi } from "./platform";
import type {
  ElectronExportSaveResult,
  ElectronFailureResult,
  ElectronImportSaveResult,
  ElectronLastPlayedGame,
  ElectronLicenseCheckResult,
  ElectronLoadResult,
  ElectronOpenUrlResult,
  ElectronOperationResult,
  ElectronPrimeAchievementsResult,
  ElectronReauthPromptResult,
  ElectronSaveFileMetadata,
  ElectronSuccessResult,
  ElectronSystemInfo,
} from "./results";
import type { ElectronIpcListener, ElectronLogLevel, ElectronPlatform } from "./primitives";

export interface ElectronBridge {
  /**
   * Return the active distribution channel.
   *
   * @returns `"steam"`, `"msstore"`, `"gog"`, or another platform string.
   *
   * IPC: `get-platform-sync`.
   */
  getPlatformSync(): ElectronPlatform;

  /**
   * Return whether local modding is enabled for this build/session.
   *
   * @returns True when the local mods folder and dev upload paths are enabled.
   *
   * IPC: `get-modding-enabled-sync`.
   */
  getModdingEnabledSync(): boolean;

  /**
   * Return true on Steam Deck / gamescope hosts.
   *
   * @returns True when running on Steam Deck class hardware.
   *
   * IPC: `get-is-steam-deck-sync`.
   */
  getIsSteamDeckSync(): boolean;

  /**
   * Return BCP-47 language tags preferred by the OS.
   *
   * @returns Ordered list of preferred language codes.
   *
   * IPC: `get-preferred-system-languages-sync`.
   */
  getPreferredSystemLanguagesSync(): string[];

  /**
   * Register a callback for app suspend (sleep / Xbox quick suspend).
   *
   * @param callback - Called with IPC event arguments when the app suspends.
   *
   * IPC: `app-suspend`.
   */
  onAppSuspend(callback: ElectronIpcListener): void;

  /**
   * Register a callback for app resume.
   *
   * @param callback - Called with IPC event arguments when the app resumes.
   *
   * IPC: `app-resume`.
   */
  onAppResume(callback: ElectronIpcListener): void;

  /**
   * Return platform diagnostics JSON.
   *
   * @returns Diagnostics object from the active platform integration.
   *
   * IPC: `platform-diagnostics`.
   */
  diagnostics(): Promise<JsonValueV1>;

  /**
   * Check the MS Store license.
   *
   * Always returns `{ valid: true }` on Steam when platform checks are unavailable.
   *
   * @returns License validation result.
   *
   * IPC: `platform-check-license`.
   */
  checkLicense(): Promise<ElectronLicenseCheckResult>;

  /**
   * Send one telemetry event to the platform SDK when available.
   *
   * @param eventName - Telemetry event name.
   * @param dimensions - String key/value dimensions.
   * @param measurements - Numeric measurements.
   * @returns False when the platform SDK rejects or ignores the event.
   *
   * IPC: `platform-write-game-event`.
   */
  writeGameEvent(
    eventName: string,
    dimensions?: Record<string, string>,
    measurements?: Record<string, number>,
  ): Promise<boolean>;

  /**
   * Prime the MS Store achievement cache after sign-in.
   *
   * No-op success on Steam.
   *
   * @param ids - Achievement ids to seed in the local cache.
   * @returns Prime operation result.
   *
   * IPC: `platform-prime-achievements`.
   */
  platformPrimeAchievements(ids: string[]): Promise<ElectronPrimeAchievementsResult>;

  /**
   * Show the native MS Store re-auth dialog.
   *
   * Resolves immediately with `{ dismissed: true }` on Steam.
   *
   * @param reason - `"license-lost"` or `"signed-out"`.
   * @returns Dialog button index or dismissed flag.
   *
   * IPC: `platform-show-reauth-prompt`.
   */
  platformShowReauthPrompt(reason: string): Promise<ElectronReauthPromptResult>;

  /**
   * Quit the application.
   *
   * Works in fullscreen where `window.close()` is unreliable.
   *
   * @returns `{ success: true }` after scheduling quit.
   *
   * IPC: `app-quit`.
   */
  appQuit(): Promise<ElectronSuccessResult>;

  /**
   * Open an external `https:` URL in the system browser.
   *
   * @param url - Must be an `https:` URL or the call returns `{ success: false, error: 'unsupported-url' }`.
   * @returns URL open result.
   *
   * IPC: `open-external-browser`.
   */
  openExternalBrowser(url: string): Promise<ElectronOpenUrlResult>;

  /**
   * Register a callback for Xbox user sign-out.
   *
   * MS Store only — never fires on Steam.
   *
   * @param callback - Called when the Xbox user signs out.
   *
   * IPC: `xbox-user-signed-out`.
   */
  onXboxUserSignedOut(callback: ElectronIpcListener): void;

  /**
   * Register a callback for Game Pass / Store license loss.
   *
   * MS Store only — never fires on Steam.
   *
   * @param callback - Called when the store license is lost.
   *
   * IPC: `xbox-license-lost`.
   */
  onXboxLicenseLost(callback: ElectronIpcListener): void;

  /**
   * Register a callback for Xbox user sign-in.
   *
   * MS Store only — never fires on Steam.
   *
   * @param callback - Called when the Xbox user signs in.
   *
   * IPC: `xbox-user-signed-in`.
   */
  onXboxUserSignedIn(callback: ElectronIpcListener): void;

  /**
   * Write one compressed save file (`.save`).
   *
   * @param id - Save slot id.
   * @param name - Display name for the slot.
   * @param data - Full serialized save payload.
   * @returns Save operation result with output path on success.
   *
   * IPC: `save`.
   */
  save(id: string, name: string, data: JsonValueV1): Promise<ElectronOperationResult>;

  /**
   * Write one save from pre-serialized JSON and metadata.
   *
   * @param id - Save slot id.
   * @param name - Display name for the slot.
   * @param dataJson - Stringified save body (gzip-compressed by the main process).
   * @param metadata - Metadata object merged into the `.save` header line.
   * @returns Save operation result with output path on success.
   *
   * IPC: `save-serialized`.
   */
  saveSerialized(
    id: string,
    name: string,
    dataJson: string,
    metadata?: JsonValueV1,
  ): Promise<ElectronOperationResult>;

  /**
   * Load one save slot by id.
   *
   * @param id - Save slot id.
   * @returns Parsed save on success, or `{ success: false, error }`.
   *
   * IPC: `load`.
   */
  load(id: string): Promise<ElectronLoadResult>;

  /**
   * Delete one save slot and its backup file.
   *
   * @param id - Save slot id.
   * @returns `{ success: true }` after deleting primary and backup files.
   *
   * IPC: `delete-save`.
   */
  deleteSave(id: string): Promise<ElectronSuccessResult | ElectronFailureResult>;

  /**
   * Load a raw save file by filename (including extension).
   *
   * @param name - Filename under the saves folder.
   * @returns Parsed save result, or `null` when the handler cannot resolve the file.
   *
   * IPC: `load-raw`.
   */
  loadRaw(name: string): Promise<ElectronLoadResult | null>;

  /**
   * Export one save slot as raw bytes for backup/sharing.
   *
   * @param id - Save slot id.
   * @returns Raw `.save` bytes on success.
   *
   * IPC: `export-save`.
   */
  exportSave(id: string): Promise<ElectronExportSaveResult>;

  /**
   * Import one save from raw exported bytes.
   *
   * @param bytes - Raw `.save` file contents.
   * @returns Import result with parsed header metadata on success.
   *
   * IPC: `import-save`.
   */
  importSave(bytes: ArrayBuffer | Uint8Array): Promise<ElectronImportSaveResult>;

  /**
   * List save slot metadata parsed from each `.save` header line.
   *
   * @returns Save metadata objects; corrupt entries are omitted.
   *
   * IPC: `get-save-files`.
   */
  getSaveFiles(): Promise<ElectronSaveFileMetadata[]>;

  /**
   * Return the absolute path to the active saves folder.
   *
   * @returns Absolute filesystem path to the current user's saves directory.
   *
   * IPC: `get-save-folder`.
   */
  getSaveFolder(): Promise<string>;

  /** Local developer mod folder helpers (`electron.localMods`). */
  localMods: ElectronLocalModsApi;

  /**
   * Return the last-played save id JSON string.
   *
   * @returns JSON string shaped like `{ "id": "…" }`, or `null` when unset/unreadable.
   *
   * IPC: `get-last-played-game-sync`.
   */
  getLastPlayedGameSync(): string | null;

  /**
   * Persist the last-played save id.
   *
   * @param game - Object containing the save slot `id`.
   * @returns Write result for `lastPlayedGame.json`.
   *
   * IPC: `save-last-played-game`.
   */
  saveLastPlayedGame(game: ElectronLastPlayedGame): Promise<ElectronOperationResult>;

  /**
   * Clear the persisted last-played save id.
   *
   * @returns Delete result for `lastPlayedGame.json`.
   *
   * IPC: `clear-last-played-game`.
   */
  clearLastPlayedGame(): Promise<ElectronOperationResult>;

  /**
   * Return whether a save file exists for the given id.
   *
   * @param id - Save slot id.
   * @returns True when `<id>.save` exists in the active saves folder.
   *
   * IPC: `save-exists-sync`.
   */
  saveExistsSync(id: string): boolean;

  /**
   * Return the settings JSON string from disk.
   *
   * @returns Raw `settings.json` contents, or `null` when missing/unreadable.
   *
   * IPC: `get-settings-sync`.
   */
  getSettingsSync(): string | null;

  /**
   * Persist renderer settings JSON to disk.
   *
   * @param settings - Settings object written to `settings.json`.
   * @returns Write result for the settings file.
   *
   * IPC: `save-settings`.
   */
  saveSettings(settings: JsonValueV1): Promise<ElectronOperationResult>;

  /**
   * Enter or leave fullscreen mode.
   *
   * @param shouldBeFullscreen - Target fullscreen state.
   * @returns Window fullscreen operation result.
   *
   * IPC: `set-fullscreen`.
   */
  setFullscreen(shouldBeFullscreen: boolean): Promise<ElectronOperationResult>;

  /**
   * Toggle fullscreen mode.
   *
   * @returns Window fullscreen operation result.
   *
   * IPC: `toggle-fullscreen`.
   */
  toggleFullscreen(): Promise<ElectronOperationResult>;

  /**
   * Open Chromium DevTools for the game window.
   *
   * IPC: `open-devtools` (`send`).
   */
  openDevTools(): void;

  /**
   * Return true when the Steam patch protocol interceptor is active.
   *
   * @returns True when patched sources are registered and the interceptor is running.
   *
   * IPC: `is-file-patching-active-sync`.
   */
  isFilePatchingActiveSync(): boolean;

  /** macOS right-button emulation helpers (`electron.macRightMouse`). */
  macRightMouse: ElectronMacRightMouseApi;

  /** Cross-store platform helpers (`electron.platform`). */
  platform: ElectronPlatformApi;

  /**
   * Append one line to the host log file (`logs/main.log`).
   *
   * Fire-and-forget — never awaits IPC completion.
   *
   * @param level - Log severity (`console.log` maps to `"info"` in mod shims).
   * @param scope - Category tag (mod id for mod logging).
   * @param message - Plain-text log line.
   *
   * IPC: `log:write` (`send`).
   */
  log(level: ElectronLogLevel, scope: string, message: string): void;

  /**
   * Return local process/runtime versions.
   *
   * Useful for bug reports and environment probes.
   *
   * @returns Version info read from the preload process object.
   */
  getSystemInfo(): ElectronSystemInfo;

  /** Custom map editor persistence helpers (`electron.customMaps`). */
  customMaps: ElectronCustomMapsApi;
}

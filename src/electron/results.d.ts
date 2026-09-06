/**
 * Invoke result and payload shapes for the Electron bridge.
 */

import type { JsonValueV1 } from "../shared/jsonvalue";

/**
 * Successful invoke result from save, settings, and window handlers.
 */
export interface ElectronSuccessResult {
  /** Always `true` for this branch of the result union. */
  success: true;
  /** Absolute path written when a handler persists a file (save/custom map). */
  path?: string;
}

/**
 * Failed invoke result from save, settings, and window handlers.
 */
export interface ElectronFailureResult {
  /** Always `false` for this branch of the result union. */
  success: false;
  /** Human-readable error message from the main process. */
  error: string;
}

/**
 * Result union returned by most save, settings, and window invoke handlers.
 */
export type ElectronOperationResult = ElectronSuccessResult | ElectronFailureResult;

/**
 * MS Store license check result from {@link ElectronBridge.checkLicense}.
 */
export interface ElectronLicenseCheckResult {
  /** Whether the current license is valid for play. */
  valid: boolean;
  /** Failure reason when `valid` is false; otherwise `null`. */
  reason: string | null;
  /** True when the check failed due to network or platform errors. */
  networkError: boolean;
  /** True when the result came from a cached license check. */
  cached: boolean;
}

/**
 * Parsed game save payload passed to {@link ElectronBridge.save}.
 */
export interface ElectronSaveInput {
  /** Save slot id (sanitized filename stem). */
  id: string;
  /** Display name shown in the save UI. */
  name: string;
  /** Full serialized game state (`{ store: … }` shape). */
  data: JsonValueV1;
}

/**
 * Successful load result from {@link ElectronBridge.load}.
 */
export interface ElectronLoadSuccessResult {
  /** Always `true` for this branch of the result union. */
  success: true;
  /** Parsed save body (`{ store: … }`). */
  data: JsonValueV1;
}

/**
 * Failed load result from {@link ElectronBridge.load}.
 */
export interface ElectronLoadFailureResult {
  /** Always `false` for this branch of the result union. */
  success: false;
  /** Human-readable load failure message. */
  error: string;
}

/** Result from {@link ElectronBridge.load}. */
export type ElectronLoadResult = ElectronLoadSuccessResult | ElectronLoadFailureResult;

/**
 * Metadata parsed from the first line of one `.save` file.
 *
 * Returned by {@link ElectronBridge.getSaveFiles}.
 */
export interface ElectronSaveFileMetadata {
  /** Save slot id (filename stem). */
  id: string;
  /** Display name stored in the save header. */
  name: string;
  /** ISO timestamp string when the save was written. */
  timestamp: string;
  /** Total play time in milliseconds from the save body. */
  playTime?: number;
  /** World template id, if present. */
  worldId?: string | null;
  /** World display name, if present. */
  worldName?: string | null;
  /** World seed, if present. */
  seed?: number | null;
  /** Factory production points at save time. */
  productionPoints?: number;
  /** Number of placed structures at save time. */
  structureCount?: number;
  /** Resource snapshot (`gold`, `fluxite`, `artifacts`, …). */
  resources?: JsonValueV1;
}

/**
 * Successful export result from {@link ElectronBridge.exportSave}.
 */
export interface ElectronExportSaveSuccessResult {
  /** Always `true` for this branch of the result union. */
  success: true;
  /** Raw `.save` file bytes (metadata line + gzip payload). */
  data: Uint8Array;
}

/** Result from {@link ElectronBridge.exportSave}. */
export type ElectronExportSaveResult =
  | ElectronExportSaveSuccessResult
  | ElectronFailureResult;

/**
 * Successful import result from {@link ElectronBridge.importSave}.
 */
export interface ElectronImportSaveSuccessResult {
  /** Always `true` for this branch of the result union. */
  success: true;
  /** Metadata parsed from the imported file header line. */
  metaData: JsonValueV1;
}

/** Result from {@link ElectronBridge.importSave}. */
export type ElectronImportSaveResult = ElectronImportSaveSuccessResult | ElectronFailureResult;

/**
 * Last-played save marker written by {@link ElectronBridge.saveLastPlayedGame}.
 */
export interface ElectronLastPlayedGame {
  /** Save slot id of the last played game. */
  id?: string;
}

/**
 * Local process/runtime versions from {@link ElectronBridge.getSystemInfo}.
 *
 * Read directly in the preload script — no IPC round trip.
 */
export interface ElectronSystemInfo {
  /** Node `process.platform` (for example `linux`, `win32`). */
  platform: string;
  /** CPU architecture string from `process.arch`. */
  arch: string;
  /** Electron runtime version from `process.versions.electron`. */
  electronVersion: string;
  /** Chromium version from `process.versions.chrome`. */
  chromeVersion: string;
  /** Node.js version from `process.versions.node`. */
  nodeVersion: string;
}

/**
 * Result from {@link ElectronLocalModsApi.list}.
 */
export interface ElectronLocalModsListResult {
  /** True when the listing succeeded. */
  ok: boolean;
  /** Local mod summary objects when `ok` is true; otherwise `[]`. */
  data: JsonValueV1[];
  /** Error code when `ok` is false (for example `unsupported_platform`). */
  errorCode?: string;
}

/**
 * Result from {@link ElectronLocalModsApi.upload}.
 */
export interface ElectronLocalModsUploadResult {
  /** True when Workshop upload succeeded. */
  ok: boolean;
  /** Error code when `ok` is false. */
  errorCode?: string;
  /** Extra failure detail logged by the main process. */
  detail?: string;
}

/**
 * Result from {@link ElectronBridge.openExternalBrowser}.
 */
export interface ElectronOpenUrlResult {
  /** True when the OS opened the URL. */
  success: boolean;
  /** Failure reason (for example `unsupported-url`). */
  error?: string;
}

/**
 * Result from {@link ElectronBridge.platformPrimeAchievements}.
 */
export interface ElectronPrimeAchievementsResult {
  /** True when the cache seed completed. */
  success: boolean;
  /** Failure message when `success` is false. */
  error?: string;
}

/**
 * Result from {@link ElectronBridge.platformShowReauthPrompt}.
 */
export interface ElectronReauthPromptResult {
  /** Button index chosen in the native MS Store dialog. */
  response?: number;
  /** True on Steam where no dialog is shown. */
  dismissed?: boolean;
}

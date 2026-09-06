/**
 * Cross-store platform helpers exposed as `electron.platform`.
 */

import type { JsonValueV1 } from "../shared/jsonvalue";
import type { ElectronWorkshopApi } from "./workshop";

/**
 * Platform overlay browser helpers exposed as `electron.platform.overlay`.
 */
export interface ElectronPlatformOverlayApi {
  /**
   * Open an `https:` URL in the platform overlay browser when available.
   *
   * @param url - External https URL.
   * @returns Platform-specific overlay open result (`false` when URL is rejected).
   *
   * IPC: `platform-overlay-open-url`.
   */
  openUrl(url: string): Promise<unknown>;
}

/**
 * Cross-store platform helpers exposed as `electron.platform`.
 */
export interface ElectronPlatformApi {
  /**
   * Return true when the platform integration finished startup.
   *
   * @returns Whether Steam / MS Store integration is ready.
   *
   * IPC: `platform-is-initialized`.
   */
  isInitialized(): Promise<boolean>;

  /**
   * Return the signed-in player display name.
   *
   * @returns Platform account display name.
   *
   * IPC: `platform-get-player-name`.
   */
  getPlayerName(): Promise<string>;

  /**
   * Return the stable platform player id string.
   *
   * @returns Platform-specific player identifier.
   *
   * IPC: `platform-get-player-id`.
   */
  getPlayerId(): Promise<string>;

  /**
   * Return the platform app id number.
   *
   * @returns Steam App ID or MS Store equivalent.
   *
   * IPC: `platform-get-app-id`.
   */
  getAppId(): Promise<number>;

  /**
   * Unlock one platform achievement.
   *
   * @param achievementId - Platform achievement identifier.
   * @returns Platform achievement unlock result.
   *
   * IPC: `platform-unlock-achievement`.
   */
  unlockAchievement(achievementId: string): Promise<unknown>;

  /**
   * Return whether an achievement is already unlocked.
   *
   * @param achievementId - Platform achievement identifier.
   * @returns True when the achievement is unlocked on the platform account.
   *
   * IPC: `platform-is-achievement-unlocked`.
   */
  isAchievementUnlocked(achievementId: string): Promise<unknown>;

  /**
   * Clear one platform achievement (debug / QA).
   *
   * @param achievementId - Platform achievement identifier.
   * @returns Platform achievement clear result.
   *
   * IPC: `platform-clear-achievement`.
   */
  clearAchievement(achievementId: string): Promise<unknown>;

  /**
   * Write one named blob to platform cloud storage.
   *
   * @param fileName - Cloud file key.
   * @param data - JSON-serializable payload.
   * @returns Platform cloud save result.
   *
   * IPC: `platform-cloud-save`.
   */
  cloudSave(fileName: string, data: JsonValueV1): Promise<unknown>;

  /**
   * Read one named blob from platform cloud storage.
   *
   * @param fileName - Cloud file key.
   * @returns Parsed cloud payload, or `null` when missing.
   *
   * IPC: `platform-cloud-load`.
   */
  cloudLoad(fileName: string): Promise<unknown>;

  /**
   * Return whether a cloud file key exists.
   *
   * @param fileName - Cloud file key.
   * @returns True when the cloud file is present.
   *
   * IPC: `platform-cloud-file-exists`.
   */
  cloudFileExists(fileName: string): Promise<unknown>;

  /**
   * Delete one named cloud file.
   *
   * @param fileName - Cloud file key.
   * @returns Platform cloud delete result.
   *
   * IPC: `platform-cloud-delete`.
   */
  cloudDelete(fileName: string): Promise<unknown>;

  /**
   * Sync local saves with platform cloud storage.
   *
   * @returns Cloud sync summary from the platform integration.
   *
   * IPC: `platform-cloud-sync`.
   */
  cloudSync(): Promise<unknown>;

  /** Steam Workshop helpers (Steam only; MS Store calls fail gracefully). */
  workshop: ElectronWorkshopApi;

  /** Platform overlay browser helpers. */
  overlay: ElectronPlatformOverlayApi;
}

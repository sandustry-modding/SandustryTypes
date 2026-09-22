/**
 * Steam Workshop helpers exposed as `electron.platform.workshop`.
 *
 * Steam only — calls fail gracefully on MS Store.
 */

import type { JsonValueV1 } from "../shared/jsonvalue";

/**
 * Steam Workshop helpers exposed as `electron.platform.workshop`.
 *
 * Steam only — calls fail gracefully on MS Store.
 */
export type ElectronWorkshopApi = {
  /**
   * Subscribe to a Workshop item.
   *
   * @param itemId - Steam Workshop published file id.
   * @returns `{ ok: true }` or `{ ok: false, error }`.
   *
   * IPC: `platform-workshop-subscribe`.
   */
  subscribe(itemId: string | number): Promise<ElectronWorkshopAck>;

  /**
   * Unsubscribe from a Workshop item.
   *
   * @param itemId - Steam Workshop published file id.
   * @returns `{ ok: true }` or `{ ok: false, error }`.
   *
   * IPC: `platform-workshop-unsubscribe`.
   */
  unsubscribe(itemId: string | number): Promise<ElectronWorkshopAck>;

  /**
   * Return install state for a subscribed Workshop item.
   *
   * @param itemId - Steam Workshop published file id.
   * @returns Install folder, size, and timestamp, or `data: null`.
   *
   * IPC: `platform-workshop-install-info`.
   */
  installInfo(itemId: string | number): Promise<ElectronWorkshopResult<ElectronWorkshopInstallInfo | null>>;

  /**
   * Return download progress for a Workshop item.
   *
   * @param itemId - Steam Workshop published file id.
   * @returns Current and total byte strings, or `data: null`.
   *
   * IPC: `platform-workshop-download-info`.
   */
  downloadInfo(itemId: string | number): Promise<ElectronWorkshopResult<ElectronWorkshopDownloadInfo | null>>;

  /**
   * Return the Steam Workshop item state flags.
   *
   * @param itemId - Steam Workshop published file id.
   * @returns Numeric workshop item state from the Steam API wrapper.
   *
   * IPC: `platform-workshop-state`.
   */
  getState(itemId: string | number): Promise<ElectronWorkshopResult<number>>;

  /**
   * Return all subscribed Workshop item ids.
   *
   * @returns Array of subscribed published file ids as strings.
   *
   * IPC: `platform-workshop-subscribed-list`.
   */
  getSubscribedItems(): Promise<ElectronWorkshopResult<string[]>>;

  /**
   * Fetch Workshop item metadata.
   *
   * @param itemId - Steam Workshop published file id.
   * @returns Workshop item details, or `data: null`.
   *
   * IPC: `platform-workshop-get-item`.
   */
  getItem(itemId: string | number): Promise<ElectronWorkshopResult<ElectronWorkshopItem | null>>;

  /**
   * Queue or prioritize a Workshop item download.
   *
   * @param itemId - Steam Workshop published file id.
   * @param highPriority - When true, request a high-priority download queue slot.
   * @returns Steam download request boolean in `data`.
   *
   * IPC: `platform-workshop-download`.
   */
  download(itemId: string | number, highPriority?: boolean): Promise<ElectronWorkshopResult<boolean>>;

  /**
   * Discover Sandkit Workshop mods installed for the current session.
   *
   * @returns `{ ok, data: { mods, diagnostics }, error }` discovery payload.
   *
   * IPC: `platform-workshop-sandkit-mods`.
   */
  getSandkitMods(): Promise<ElectronWorkshopSandkitModsResult>;
};

/** Subscribe / unsubscribe result from `steam.js`. */
export type ElectronWorkshopAck = { ok: true } | { ok: false; error: string };

/** Generic `{ ok, data, error }` Workshop IPC result from `steam.js`. */
export type ElectronWorkshopResult<T> =
  | { ok: true; data?: T; error?: undefined }
  | { ok: false; error: string; data?: undefined };

/** Install info from {@link ElectronWorkshopApi.installInfo}. */
export type ElectronWorkshopInstallInfo = {
  folder: string;
  sizeOnDisk: string;
  timestamp: number;
};

/** Download progress from {@link ElectronWorkshopApi.downloadInfo}. */
export type ElectronWorkshopDownloadInfo = {
  current: string;
  total: string;
};

/** Item details from {@link ElectronWorkshopApi.getItem}. */
export type ElectronWorkshopItem = {
  publishedFileId: string;
  title: string;
  description: string;
  owner: {
    steamId64: string;
    steamId32: number;
    accountId: number;
  };
  timeCreated: number;
  timeUpdated: number;
  visibility: number;
  banned: boolean;
  tags: string[];
  url: string;
  previewUrl: string;
  numUpvotes: number;
  numDownvotes: number;
};

/** Discovery payload from {@link ElectronWorkshopApi.getSandkitMods}. */
export type ElectronWorkshopSandkitModsResult = {
  ok: boolean;
  data: {
    mods: JsonValueV1[];
    diagnostics: JsonValueV1[];
  };
  error: string | null;
};

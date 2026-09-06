/**
 * Steam Workshop helpers exposed as `electron.platform.workshop`.
 *
 * Steam only — calls fail gracefully on MS Store.
 */

/**
 * Steam Workshop helpers exposed as `electron.platform.workshop`.
 *
 * Steam only — calls fail gracefully on MS Store.
 */
export interface ElectronWorkshopApi {
  /**
   * Subscribe to a Workshop item.
   *
   * @param itemId - Steam Workshop published file id.
   * @returns Platform workshop subscribe result.
   *
   * IPC: `platform-workshop-subscribe`.
   */
  subscribe(itemId: string | number): Promise<unknown>;

  /**
   * Unsubscribe from a Workshop item.
   *
   * @param itemId - Steam Workshop published file id.
   * @returns Platform workshop unsubscribe result.
   *
   * IPC: `platform-workshop-unsubscribe`.
   */
  unsubscribe(itemId: string | number): Promise<unknown>;

  /**
   * Return install state for a subscribed Workshop item.
   *
   * @param itemId - Steam Workshop published file id.
   * @returns Install info object from the Steam workshop API wrapper.
   *
   * IPC: `platform-workshop-install-info`.
   */
  installInfo(itemId: string | number): Promise<unknown>;

  /**
   * Return download progress for a Workshop item.
   *
   * @param itemId - Steam Workshop published file id.
   * @returns Download info object from the Steam workshop API wrapper.
   *
   * IPC: `platform-workshop-download-info`.
   */
  downloadInfo(itemId: string | number): Promise<unknown>;

  /**
   * Return the Steam Workshop item state flags.
   *
   * @param itemId - Steam Workshop published file id.
   * @returns Numeric workshop item state from the Steam API wrapper.
   *
   * IPC: `platform-workshop-state`.
   */
  getState(itemId: string | number): Promise<unknown>;

  /**
   * Return all subscribed Workshop item ids.
   *
   * @returns Array of subscribed published file ids.
   *
   * IPC: `platform-workshop-subscribed-list`.
   */
  getSubscribedItems(): Promise<unknown>;

  /**
   * Fetch Workshop item metadata.
   *
   * @param itemId - Steam Workshop published file id.
   * @returns Workshop item details from the Steam API wrapper.
   *
   * IPC: `platform-workshop-get-item`.
   */
  getItem(itemId: string | number): Promise<unknown>;

  /**
   * Queue or prioritize a Workshop item download.
   *
   * @param itemId - Steam Workshop published file id.
   * @param highPriority - When true, request a high-priority download queue slot.
   * @returns Download request result from the Steam API wrapper.
   *
   * IPC: `platform-workshop-download`.
   */
  download(itemId: string | number, highPriority?: boolean): Promise<unknown>;

  /**
   * Discover Sandkit Workshop mods installed for the current session.
   *
   * @returns `{ ok, data: { mods, diagnostics }, error }` discovery payload.
   *
   * IPC: `platform-workshop-sandkit-mods`.
   */
  getSandkitMods(): Promise<unknown>;
}

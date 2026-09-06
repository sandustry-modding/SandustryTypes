/**
 * macOS right-button emulation helpers exposed as `electron.macRightMouse`.
 */

/**
 * macOS right-button emulation helpers exposed as `electron.macRightMouse`.
 */
export interface ElectronMacRightMouseApi {
  /**
   * Enable or disable global right-button probing on macOS.
   *
   * @param active - When true, start watching for synthetic right-click gestures.
   * @param probeScript - Optional probe script forwarded to the main process.
   *
   * IPC: `mac-right-mouse-watch` (`send`).
   */
  watch(active: boolean, probeScript?: string): void;

  /**
   * Register a callback for synthetic right-button position updates.
   *
   * @param callback - Receives screen coordinates for the emulated right click.
   *
   * IPC: `mac-right-mouse-pos`.
   */
  onPos(callback: (x: number, y: number) => void): void;

  /**
   * Register a callback for synthetic right-button release.
   *
   * @param callback - Called when the emulated right button is released.
   *
   * IPC: `mac-right-mouse-up`.
   */
  onUp(callback: () => void): void;
}

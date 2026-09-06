/**
 * Primitive Electron bridge types shared across the preload API.
 */

/**
 * Sandustry distribution channel string.
 *
 * Returned by {@link ElectronBridge.getPlatformSync}.
 */
export type ElectronPlatform = "steam" | "msstore" | "gog" | (string & {});

/**
 * Severity level written through {@link ElectronBridge.log}.
 *
 * Maps to the main-process file logger (`logs/main.log`).
 */
export type ElectronLogLevel = "debug" | "info" | "warn" | "error";

/**
 * Callback registered on IPC event channels such as `app-suspend`.
 *
 * @param args - Event-specific payload from the main process (often empty).
 */
export type ElectronIpcListener = (...args: unknown[]) => void;

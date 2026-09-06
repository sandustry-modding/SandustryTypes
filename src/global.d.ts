/**
 * Ambient host bindings for mod `main.js`.
 *
 * The game evaluates the bundle with `new Function("__sandkit", body)` and
 * binds `const sandkit = __sandkit` before the IIFE. Use the free name
 * `sandkit` in mod and modkit code — do not import a value binding.
 *
 * Type names below are also ambient so mods can annotate without imports.
 * Prefer `typeof sandkit` / `typeof sandkit.api` when that reads clearer.
 *
 * Renderer IPC lives on `window.electron`.
 * The ambient `electron` name matches that bridge (same object as `window.electron`).
 */
declare global {
  /**
   * Host-injected free variable in the sandkit loader scope (not `globalThis`).
   * Use this name in mod `main.js` and modkit code. Do not import a value binding.
   */
  const sandkit: import("./sandkit").Sandkit;

  /** Full shape of the ambient `sandkit` object. */
  type Sandkit = import("./sandkit").Sandkit;
  /** Main-thread `sandkit.api` composed type. Not the worker API. */
  type SandkitApi = import("./sandkit").SandkitApi;
  /** `sandkit.engine` internals bag (state-first APIs). */
  type SandkitEngine = import("./sandkit").SandkitEngine;
  /** Composed `sandkit.engine.api` namespaces. */
  type SandkitEngineApi = import("./sandkit").SandkitEngineApi;
  /** Game state at `sandkit.state` / `sandkit.engine.state`. */
  type SandkitState = import("./sandkit").SandkitState;
  /** Runtime enum bags at `sandkit.enums`. */
  type SandkitEnums = import("./sandkit").SandkitEnums;
  /** Host React package at `sandkit.react`. */
  type SandkitReact = import("./sandkit").SandkitReact;
  /** Retro Console API surface on supported engine namespaces. */
  type RetroConsoleApi = import("./sandkit").RetroConsoleApi;
  /** Worker-thread `sandkit.api` shape — use in `worker.ts`. */
  type WorkerSandkitApi = import("./worker/sandkit-api").WorkerSandkitApi;

  /**
   * Renderer preload bridge (`window.electron`).
   *
   * Use `electron` or `window.electron` in mod code — do not import a value binding.
   * Bundled mods also receive `const electron = globalThis.window?.electron` at the top of `main.js`.
   *
   * @see {@link ElectronBridge} in `@sandustry-modding/types/electron` for full method docs.
   */
  const electron: import("./electron").ElectronBridge;

  /** Full shape of the ambient `electron` object. */
  type ElectronBridge = import("./electron").ElectronBridge;
  /** File logger level accepted by {@link ElectronBridge.log}. */
  type ElectronLogLevel = import("./electron").ElectronLogLevel;
  /** Distribution channel string from {@link ElectronBridge.getPlatformSync}. */
  type ElectronPlatform = import("./electron").ElectronPlatform;

  interface Window {
    /** Renderer preload bridge — same object as the ambient `electron` binding. */
    electron: ElectronBridge;
  }
}

export {};

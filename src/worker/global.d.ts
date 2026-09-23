/**
 * Ambient host bindings for mod `worker.js`.
 *
 * Do not load this file together with `src/global.d.ts` in the same TypeScript program.
 * The two ambients both declare `const sandkit` and cannot share a program.
 *
 * Do not use this ambient on the main thread.
 * Load it only via a worker `tsconfig` that typechecks `worker.ts` / `*.worker.ts` files
 * (for example the mod template `tsconfig.worker.json` `files` entry).
 *
 * Standalone projects should copy that `tsconfig.worker.json` pattern instead of
 * triple-slash references or extra ambient `.d.ts` shims.
 */
declare global {
  /**
   * Host-injected free variable in the worker sandkit loader scope.
   * Use this name in `worker.ts`. Do not import a value binding.
   */
  const sandkit: import("./sandkit-api").WorkerSandkit;

  /** Full shape of the ambient worker `sandkit` object. */
  type WorkerSandkit = import("./sandkit-api").WorkerSandkit;
  /** Worker-thread `sandkit.api` composed type. Not the main API. */
  type WorkerSandkitApi = import("./sandkit-api").WorkerSandkitApi;
  /** Main-thread `sandkit` shape. Not the ambient worker binding. */
  type Sandkit = import("../sandkit").Sandkit;
  /** Main-thread `sandkit.api`. Not the ambient worker `sandkit.api`. */
  type SandkitApi = import("../sandkit").SandkitApi;
  /** `sandkit.engine` internals bag (state-first APIs). */
  type SandkitEngine = import("../sandkit").SandkitEngine;
  /** Composed `sandkit.engine.api` namespaces. */
  type SandkitEngineApi = import("../sandkit").SandkitEngineApi;
  /** Game state at `sandkit.state` / `sandkit.engine.state`. */
  type SandkitState = import("../sandkit").SandkitState;
  /** Runtime enum bags at `sandkit.enums`. */
  type SandkitEnums = import("../sandkit").SandkitEnums;
  /** Host React package at `sandkit.react`. */
  type SandkitReact = import("../sandkit").SandkitReact;
  /** Retro Console API surface on supported engine namespaces. */
  type RetroConsoleApi = import("../sandkit").RetroConsoleApi;
}

export {};

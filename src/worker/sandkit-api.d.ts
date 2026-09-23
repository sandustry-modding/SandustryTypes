/**
 * Composed worker-thread `sandkit.api` object.
 *
 * Namespace members are documented under {@link worker}.
 * Load {@link WorkerSandkit} ambient types in `worker.ts` / `*.worker.ts`
 * so `sandkit.api` is this shape with no cast.
 *
 * Main and worker surfaces overlap but are not interchangeable. Do not use
 * {@link sandkit.SandkitApi} on worker threads.
 */
export type WorkerSandkitApi = {
  constants: typeof import("../sandkit/api/constants").constants;
  collector: typeof import("../sandkit/api/collector").collector;
  effects: typeof import("./api/effects").effects;
  elements: typeof import("./api/elements").elements;
  events: typeof import("./api/events").events;
  fire: typeof import("./api/fire").fire;
  grid: typeof import("./api/grid").grid;
  hooks: typeof import("./api/hooks").hooks;
  lights: typeof import("./api/lights").lights;
  main: typeof import("./api/main").main;
  maps: typeof import("./api/maps").maps;
  patterns: typeof import("../sandkit/api/patterns").patterns;
  player: typeof import("./api/player").player;
  random: typeof import("../sandkit/api/random").random;
  shared: typeof import("./api/shared").shared;
  structures: typeof import("./api/structures").structures;
  terrains: typeof import("./api/terrains").terrains;
  ui: typeof import("./api/ui").ui;
  utils: typeof import("../sandkit/api/utils").utils;
  worker: typeof import("./api/worker").worker;
  /**
   * @deprecated Use {@link grid} instead.
   *
   */
  world: typeof import("./api/grid").world;
};

/**
 * Host-injected `sandkit` free variable in `workerEntry` scripts.
 * Same root keys as {@link sandkit.Sandkit}; `api` is {@link WorkerSandkitApi}.
 */
export type WorkerSandkit = {
  /** Worker-thread public API. See {@link WorkerSandkitApi}. */
  api: WorkerSandkitApi;
  /** Sandkit API version number (live value is `1`). */
  apiVersion: number;
  /**
   * State-first internals. See {@link sandkit.SandkitEngine}.
   * @internal
   */
  engine: import("../sandkit").SandkitEngine;
  /** Runtime enum bags. See {@link sandkit.SandkitEnums}. */
  enums: import("../sandkit").SandkitEnums;
  /** Host React package. See {@link sandkit.SandkitReact}. */
  react: import("../sandkit").SandkitReact;
  /**
   * Game state. Same object as `sandkit.engine.state` at runtime.
   * See {@link sandkit.SandkitState}.
   */
  state: import("../sandkit").SandkitState;
};


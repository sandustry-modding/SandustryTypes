/**
 * Worker-thread `sandkit.api` namespaces.
 *
 * Prefer these declarations in `worker.js`.
 * Ambient `sandkit.api` is {@link WorkerSandkitApi} when worker globals load.
 * Do not assume main-thread methods exist here.
 * See {@link sandkit.api} for the main-thread public API.
 *
 * @module worker
 */
export * from "./api/main";
export * from "./api/shared";
export * from "./api/worker";
export * from "./api/elements";
export * from "./api/hooks";
export * from "./api/events";
export * from "./api/effects";
export * from "./api/fire";
export * from "./api/grid";
export * from "./api/lights";

export * from "../sandkit/api/collector";
export * from "../sandkit/api/constants";
export * from "../sandkit/api/patterns";
export * from "./api/maps";
export * from "./api/player";
export * from "../sandkit/api/random";
export * from "./api/structures";
export * from "./api/terrains";
export * from "./api/ui";
export * from "../sandkit/api/utils";

export type { WorkerSandkit, WorkerSandkitApi } from "./sandkit-api";

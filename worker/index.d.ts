/**
 * Worker-thread `sandkit.api` namespaces.
 *
 * Prefer these declarations in `worker.js`. Type `sandkit.api` as
 * {@link WorkerSandkitApi}. Do not assume main-thread methods exist here.
 * See {@link sandkit.api} for the main-thread public API.
 *
 * @module worker
 */
export * from "./api/main"
export * from "./api/shared"
export * from "./api/worker"
export * from "./api/elements"
export * from "./api/hooks"
export * from "./api/events"
export * from "./api/effects"
export * from "./api/fire"
export * from "./api/grid"
export * from "./api/lights"

export * from "../sandkit/api/collector"
export * from "../sandkit/api/constants"
export * from "../sandkit/api/patterns"
export * from "../shared/api/maps"
export * from "../shared/api/player"
export * from "../sandkit/api/random"
export * from "../shared/api/structures"
export * from "../shared/api/terrains"
export * from "../shared/api/ui"
export * from "../sandkit/api/utils"

export type { WorkerSandkitApi } from "./sandkit-api"

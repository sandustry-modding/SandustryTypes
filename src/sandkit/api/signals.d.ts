/**
 * Signal target registration for structures.
 *
 * Available as `sandkit.api.signals`.
 *
 * @module
 *
 * @example api.signals.interactables.register
 * ```ts
 * api.signals.interactables.register("exampleLever", (structure) => {
 *   structure.data.on = !structure.data.on;
 *   api.structures.update(structure);
 * });
 * ```
 *
 * @example api.signals.registerSenderType
 * ```ts
 * api.signals.registerSenderType("exampleSensor", (structure) => {
 *   return structure.data.charge >= structure.data.threshold;
 * });
 * ```
 *
 * @example api.signals.setOutputAtCell
 * ```ts
 * api.structures.forEachOfType("exampleSensor", (structure) => {
 *   api.signals.setOutputAtCell(structure.x, structure.y, structure.data.active);
 * });
 * ```
 */
export namespace signals {
  /** Signal target registration for structure types. */
  export namespace targets {
    /**
     * Register a handler when a signal targets a structure type.
     * @param structureTypeOrId - Structure type id or enum value.
     * @param apply - Called when a signal reaches a matching structure.
     *
     * @example
     * ```ts
     * api.signals.targets.register("exampleMachine", (structure, payload) => {
     *   api.structures.processing.setEnabledAtCell(structure.x, structure.y, payload.combined);
     * });
     * ```
     */
    export function register(
      structureTypeOrId: string | StructureType,
      apply: (structure: Structure, payload: SignalTargetPayloadV1) => void,
    ): void;
  }

  /** Structure type id or enum value. */
  export type StructureType = unknown;
  /** Structure instance in the world. */
  export type Structure = unknown;
  /** Payload delivered to a signal target handler. */
  export type SignalTargetPayloadV1 = unknown;
}

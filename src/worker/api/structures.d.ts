import type { CellCoordinates } from "../../shared/geometry";
import type { structures as MainStructures } from "../../sandkit/api/structures";

/**
 * Worker-thread `sandkit.api.structures` — structure lookup and immediate updates.
 *
 * Worker-entry updates apply immediately. Main thread defers build and remove helpers in
 * `sandkit.api.structures`.
 *
 * @internal Worker subset; not interchangeable with main-thread
 * `sandkit.api.structures`.
 *
 */
export namespace structures {
  export type StructureDefinition = MainStructures.StructureDefinition;
  export type StructureData = MainStructures.StructureData;
  export type Structure = MainStructures.Structure;
  export type StructureType = MainStructures.StructureType;
  export type StructureId = MainStructures.StructureId;
  export type StructureRef = MainStructures.StructureRef;

  /**
   * Invoke a callback for every structure of the given type.
   *
   * @param structureTypeOrId - Structure type value or string id.
   * @param callback - Called once per matching structure instance.
   *
   * @example Worker entry
   * ```ts
   * api.structures.forEachOfType("exampleStructure", (structure) => {
   *   processStructure(structure);
   * });
   * ```
   *
   */
  export function forEachOfType(
    structureTypeOrId: StructureRef,
    callback: (structure: Structure) => void,
  ): void;

  /**
   * Return the structure at a cell, or null when none.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function getAtCell(...args: CellCoordinates): Structure | null;

  /**
   * Return the mod-registered or built-in definition for a structure type.
   *
   * @param structureType - Structure type value or string id.
   *
   */
  export function getDefinitionByType(
    structureType: StructureRef,
  ): StructureDefinition | undefined;

  /**
   * Map a structure string id to its runtime type value.
   *
   * @param structureId - Structure string id.
   *
   */
  export function getTypeById(structureId: StructureId): StructureType;

  /**
   * @deprecated Use {@link getTypeById} instead.
   *
   */
  export function getTypeFromId(structureId: StructureId): StructureType;

  /**
   * Return true when a completed structure occupies the cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function hasBuiltAtCell(...args: CellCoordinates): boolean;

  /**
   * Return true when the structure matches the given id.
   *
   * @param structure - Structure instance, or null.
   * @param structureId - Structure string id to compare.
   *
   */
  export function isType(structure: Structure | null, structureId: StructureId): boolean;

  /**
   * Return true when the cell structure matches the given id.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param structureId - Structure string id to compare.
   *
   */
  export function isTypeAtCell(...args: [...CellCoordinates, structureId: StructureId]): boolean;

  /**
   * Set the spritesheet frame index on a structure instance.
   *
   * @param structure - Target structure instance.
   * @param index - Spritesheet frame index.
   *
   */
  export function setSpritesheetIndex(structure: Structure, index: number): void;

  /**
   * Set spritesheet frame index for the structure at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param index - Spritesheet frame index.
   *
   */
  export function setSpritesheetIndexAtCell(...args: [...CellCoordinates, index: number]): void;

  /**
   * Pick spritesheet index from a value and threshold table on a structure.
   *
   * @param structure - Target structure instance.
   * @param value - Numeric value mapped through thresholds.
   * @param thresholds - Ascending threshold values.
   *
   */
  export function setSpritesheetIndexByValue(
    structure: Structure,
    value: number,
    thresholds: number[],
  ): void;

  /**
   * Same as {@link setSpritesheetIndexByValue} for the structure at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param value - Numeric value mapped through thresholds.
   * @param thresholds - Ascending threshold values.
   *
   */
  export function setSpritesheetIndexByValueAtCell(
    ...args: [...CellCoordinates, value: number, thresholds: number[]]
  ): void;

  /**
   * Push structure field changes to simulation.
   *
   * @param structure - Structure instance to update.
   * @param options - When `propagateToWorkers` is true, sync to worker threads.
   *
   * @example Worker entry
   * ```ts
   * api.structures.update(structure, { propagateToWorkers: true });
   * ```
   *
   */
  export function update(structure: Structure, options?: { propagateToWorkers?: boolean }): void;

  /**
   * Merge partial data onto a structure.
   *
   * @param structure - Structure instance to update.
   * @param partial - Fields to merge onto `structure.data`.
   * @param options - When `propagateToWorkers` is true, sync to worker threads.
   *
   * @example Worker entry
   * ```ts
   * api.structures.updateData(
   *   structure,
   *   { mode: "allow" },
   *   { propagateToWorkers: true },
   * );
   * ```
   *
   */
  export function updateData(
    structure: Structure,
    partial: Partial<StructureData>,
    options?: { propagateToWorkers?: boolean },
  ): void;

  /**
   * @deprecated Use {@link updateData} instead.
   *
   */
  export function setData(
    structure: Structure,
    partial: Partial<StructureData>,
    options?: { propagateToWorkers?: boolean },
  ): void;

  /** Structure processing enablement checks. */
  export namespace processing {
    /**
     * Return true when processing is enabled at the cell.
     *
     * @param cellX - Grid column of the target cell.
     * @param cellY - Grid row of the target cell.
     *
     */
    export function isEnabledAtCell(...args: CellCoordinates): boolean;

    /**
     * @deprecated Use {@link isEnabledAtCell} instead.
     *
     */
    export function isEnabledAt(...args: CellCoordinates): boolean;
  }
}

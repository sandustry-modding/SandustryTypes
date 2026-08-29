import type { CellCoordinates } from "../../shared/player";
import type { LooseString, TaggedNumber } from "../nominal";
import type { StructureType as StructureTypeEnum } from "../../sandkit/enums/index";

/**
 * Shared `sandkit.api.structures` base — structure lookup and mutation.
 *
 * @internal Base namespace reused by main and worker declarations.
 */
export namespace structures {
  /**
   * Invoke a callback for every structure of the given type.
   *
   * @param structureTypeOrId - Structure type value or string id.
   * @param callback - Called once per matching structure instance.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.forEachOfType`
   */
  export function forEachOfType(structureTypeOrId: StructureRef, callback: (structure: Structure) => void): void;

  /**
   * Return the structure at a cell, or null when none.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.getAtCell`
   */
  export function getAtCell(...args: CellCoordinates): Structure | null;

  /**
   * Return the mod-registered or built-in definition for a structure type.
   *
   * @param structureType - Structure type value or string id.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.getDefinitionByType`
   */
  export function getDefinitionByType(structureType: StructureRef): any;

  /**
   * Map a structure string id to its runtime type value.
   *
   * @param structureId - Structure string id.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.getTypeById`
   */
  export function getTypeById(structureId: StructureId): StructureType;

  /**
   * @deprecated Use {@link getTypeById} instead.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.getTypeById`
   */
  export function getTypeFromId(structureId: StructureId): StructureType;

  /**
   * Return true when a completed structure occupies the cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.hasBuiltAtCell`
   */
  export function hasBuiltAtCell(...args: CellCoordinates): boolean;

  /**
   * Return true when the structure matches the given id.
   *
   * @param structure - Structure instance, or null.
   * @param structureId - Structure string id to compare.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.isType`
   */
  export function isType(structure: Structure | null, structureId: StructureId): boolean;

  /**
   * Return true when the cell structure matches the given id.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param structureId - Structure string id to compare.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.isTypeAtCell`
   */
  export function isTypeAtCell(...args: [...CellCoordinates, structureId: StructureId]): boolean;

  /**
   * Set the spritesheet frame index on a structure instance.
   *
   * @param structure - Target structure instance.
   * @param index - Spritesheet frame index.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.setSpritesheetIndex`
   */
  export function setSpritesheetIndex(structure: Structure, index: number): void;

  /**
   * Set spritesheet frame index for the structure at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param index - Spritesheet frame index.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.setSpritesheetIndexAtCell`
   */
  export function setSpritesheetIndexAtCell(...args: [...CellCoordinates, index: number]): void;

  /**
   * Pick spritesheet index from a value and threshold table on a structure.
   *
   * @param structure - Target structure instance.
   * @param value - Numeric value mapped through thresholds.
   * @param thresholds - Ascending threshold values.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.setSpritesheetIndexByValue`
   */
  export function setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void;

  /**
   * Same as {@link setSpritesheetIndexByValue} for the structure at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param value - Numeric value mapped through thresholds.
   * @param thresholds - Ascending threshold values.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.setSpritesheetIndexByValueAtCell`
   */
  export function setSpritesheetIndexByValueAtCell(...args: [...CellCoordinates, value: number, thresholds: number[]]): void;

  /**
   * Push structure field changes to simulation.
   *
   * @param structure - Structure instance to update.
   * @param options - When `propagateToWorkers` is true, sync to worker threads.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.update`
   */
  export function update(structure: Structure, options?: { propagateToWorkers?: boolean; }): void;

  /**
   * Merge partial data onto a structure.
   *
   * @param structure - Structure instance to update.
   * @param partial - Fields to merge onto `structure.data`.
   * @param options - When `propagateToWorkers` is true, sync to worker threads.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.updateData`
   */
  export function updateData(structure: Structure, partial: any, options?: { propagateToWorkers?: boolean; }): void;

  /**
   * @deprecated Use {@link updateData} instead.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.updateData`
   */
  export function setData(structure: Structure, partial: any, options?: { propagateToWorkers?: boolean; }): void;

  /** Structure processing enablement checks. */
  export namespace processing {
    /**
     * Return true when processing is enabled at the cell.
     *
     * @param cellX - Grid column of the target cell.
     * @param cellY - Grid row of the target cell.
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.structures.processing.isEnabledAtCell`
     */
    export function isEnabledAtCell(...args: CellCoordinates): boolean;

    /**
     * @deprecated Use {@link isEnabledAtCell} instead.
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.processing.isEnabledAtCell`
     */
    export function isEnabledAt(...args: CellCoordinates): boolean;
  }

  /** Per-structure custom data bag. */
  export interface StructureData {
    elementId?: string | null;
    elementType?: TaggedNumber<"elementType"> | null;
    [key: string]: unknown;
  }

  /** Live structure instance in the world grid. */
  export interface Structure {
    x: number;
    y: number;
    trapped?: boolean;
    data?: StructureData;
    [key: string]: unknown;
  }

  /** Numeric structure type handle. Built-in enum values autocomplete. */
  export type StructureType = StructureTypeEnum | TaggedNumber<"structureType">;
  /** Mod or built-in structure string id. */
  export type StructureId = LooseString<never>;
  /** Type handle or string id accepted by lookup helpers. */
  export type StructureRef = StructureType | StructureId;
}

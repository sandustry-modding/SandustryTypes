import type { CellCoordinates } from "../../shared/player";
import type { CellId } from "../../shared/nominal";
import type { terrains as MainTerrains } from "../../sandkit/api/terrains";

/**
 * Worker-thread `sandkit.api.terrains` — terrain lookup and immediate cell mutations.
 *
 * Worker-entry mutations apply immediately. Main thread defers matching helpers in
 * `sandkit.api.terrains`.
 *
 * @internal Worker subset; not interchangeable with main-thread
 * `sandkit.api.terrains`.
 *
 */
export namespace terrains {
  export type TerrainDefinition = MainTerrains.TerrainDefinition;
  export type TerrainDataAtCell = MainTerrains.TerrainDataAtCell;
  export type TerrainMutationOptions = MainTerrains.TerrainMutationOptions;
  export type TerrainType = MainTerrains.TerrainType;
  export type TerrainId = MainTerrains.TerrainId;
  export type TerrainRef = MainTerrains.TerrainRef;

  /**
   * Return the mod string id for a numeric terrain type.
   *
   * @param terrainType - Numeric terrain cell type.
   *
   */
  export function getIdByType(terrainType: TerrainType): TerrainId;

  /**
   * Resolve a terrain string id to a numeric cell type.
   *
   * @param terrainId - Mod-registered or built-in terrain id.
   *
   */
  export function getTypeById(terrainId: TerrainId): TerrainType;

  /**
   * @deprecated Use {@link getTypeById} instead.
   *
   */
  export function getTypeFromId(terrainId: TerrainId): TerrainType;

  /**
   * Look up the definition for a terrain type.
   *
   * @param terrainType - Numeric terrain cell type.
   *
   */
  export function getDefinitionByType(terrainType: TerrainType): TerrainDefinition | undefined;

  /**
   * Return the terrain cell type at a cell, or null when none.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function getTypeAtCell(...args: CellCoordinates): TerrainType | null;

  /**
   * Return terrain cell type and hit points at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @returns Cell type and hit points, or null when the cell is not terrain.
   *
   */
  export function getDataAtCell(...args: CellCoordinates): TerrainDataAtCell | null;

  /**
   * Return true when any terrain occupies the cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function isAtCell(...args: CellCoordinates): boolean;

  /**
   * Return true when the cell terrain matches the given id.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param terrainId - Terrain string id to compare.
   *
   */
  export function isTypeAtCell(...args: [...CellCoordinates, terrainId: TerrainId]): boolean;

  /**
   * Return true when a packed cell id refers to terrain.
   *
   * @param cellId - Packed cell id from {@link world.getCellIdAtCell}.
   *
   */
  export function isCellIdTerrain(cellId: CellId): boolean;

  /**
   * Apply damage to terrain at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param damage - Damage amount to apply.
   *
   */
  export function damageAtCell(...args: [...CellCoordinates, damage: number]): void;

  /**
   * Melt terrain at a cell (for example ice to water). Worker-entry writes are immediate.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function meltAtCell(...args: CellCoordinates): void;

  /**
   * Place terrain at an empty cell. Worker-entry writes are immediate.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param terrainTypeOrId - Numeric cell type or terrain string id.
   * @param options - Optional mutation flags.
   *
   */
  export function createAtCell(
    ...args: [...CellCoordinates, terrainTypeOrId: TerrainRef, options?: TerrainMutationOptions]
  ): void;

  /**
   * Replace existing terrain at a cell. Worker-entry writes are immediate.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param terrainTypeOrId - Numeric cell type or terrain string id.
   * @param options - Optional mutation flags.
   *
   */
  export function replaceAtCell(
    ...args: [...CellCoordinates, terrainTypeOrId: TerrainRef, options?: TerrainMutationOptions]
  ): void;

  /**
   * Remove terrain from a cell. Worker-entry writes are immediate.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param options - Optional mutation flags.
   *
   */
  export function removeAtCell(
    ...args: [...CellCoordinates, options?: TerrainMutationOptions]
  ): void;

  /**
   * Set terrain hit points at a cell. Worker-entry writes are immediate.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param hitPoints - New hit point value.
   * @returns True when hit points changed or the terrain was removed.
   *
   */
  export function setHitPointsAtCell(...args: [...CellCoordinates, hitPoints: number]): boolean;

  /**
   * @deprecated Use {@link setHitPointsAtCell} instead.
   *
   */
  export function setHpAtCell(...args: [...CellCoordinates, hitPoints: number]): boolean;
}

/**
 * Terrain registration, queries, and deferred cell mutations.
 *
 * Available as `sandkit.api.terrains`.
 *
 * @module
 */
import { CellCoordinates } from "../../shared/player";
import { shared } from "../../shared";
import type { elements } from "./elements";

export namespace terrains {
  /** Return the mod string id for a numeric terrain type. */
  export import getIdByType = shared.api.terrains.getIdByType;
  /** Resolve a terrain string id to its cell type number. */
  export import getTypeById = shared.api.terrains.getTypeById;
  /**
   * @deprecated Use {@link getTypeById} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import getTypeFromId = shared.api.terrains.getTypeFromId;
  /** Look up the definition for a terrain type. */
  export import getDefinitionByType = shared.api.terrains.getDefinitionByType;
  /** Return terrain cell type at a cell, or null. */
  export import getTypeAtCell = shared.api.terrains.getTypeAtCell;
  /** Return terrain data at a cell, or null. */
  export import getDataAtCell = shared.api.terrains.getDataAtCell;
  /** Return true when any terrain exists at the cell. */
  export import isAtCell = shared.api.terrains.isAtCell;
  /** Return true when terrain at the cell matches a string id. */
  export import isTypeAtCell = shared.api.terrains.isTypeAtCell;
  /** Return true when a cell id represents terrain. */
  export import isCellIdTerrain = shared.api.terrains.isCellIdTerrain;
  /** Apply damage to terrain at a cell. */
  export import damageAtCell = shared.api.terrains.damageAtCell;
  /** Melt terrain at a cell (for example ice to water). */
  export import meltAtCell = shared.api.terrains.meltAtCell;
  /** Options for terrain create, replace, and remove calls. */
  export import TerrainMutationOptions = shared.api.terrains.TerrainMutationOptions;
  /** Numeric terrain cell type handle. */
  export import TerrainType = shared.api.terrains.TerrainType;
  /** Mod or built-in terrain string id. */
  export import TerrainId = shared.api.terrains.TerrainId;
  /** Type handle or string id accepted by mutation helpers. */
  export import TerrainRef = shared.api.terrains.TerrainRef;
  /** Terrain cell data returned by {@link getDataAtCell}. */
  export import TerrainDataAtCell = shared.api.terrains.TerrainDataAtCell;

  /**
   * Terrain definition shape with typed element interactions.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export interface TerrainDefinition extends Omit<
    shared.api.terrains.TerrainDefinition,
    "interactions"
  > {
    /** Tooltip interactions shown for this terrain. */
    interactions?: readonly elements.Interaction[];
  }

  /**
   * Register a new terrain definition.
   *
   * @param definition - Terrain definition to register.
   * @returns Object with the assigned `cellType`.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function register(definition: TerrainDefinition): { cellType: TerrainType };

  /**
   * Patch fields on an existing terrain definition.
   *
   * @param cellTypeOrId - Numeric cell type or terrain string id.
   * @param partial - Fields to merge onto the definition.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function updateDefinition(
    cellTypeOrId: TerrainRef,
    partial: Partial<TerrainDefinition>,
  ): void;

  /**
   * Create terrain at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param terrainTypeOrId - Numeric cell type or terrain string id.
   * @param options - Optional mutation flags.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function createAtCell(
    ...args: [...CellCoordinates, terrainTypeOrId: TerrainRef, options?: TerrainMutationOptions]
  ): void;

  /**
   * @deprecated Use {@link createAtCell} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function createAtCellWhenIdle(
    ...args: [...CellCoordinates, terrainTypeOrId: TerrainRef, options?: TerrainMutationOptions]
  ): void;

  /**
   * Replace terrain at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param terrainTypeOrId - Numeric cell type or terrain string id.
   * @param options - Optional mutation flags.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function replaceAtCell(
    ...args: [...CellCoordinates, terrainTypeOrId: TerrainRef, options?: TerrainMutationOptions]
  ): void;

  /**
   * @deprecated Use {@link replaceAtCell} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function replaceAtCellWhenIdle(
    ...args: [...CellCoordinates, terrainTypeOrId: TerrainRef, options?: TerrainMutationOptions]
  ): void;

  /**
   * Remove terrain at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param options - Optional mutation flags.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function removeAtCell(
    ...args: [...CellCoordinates, options?: TerrainMutationOptions]
  ): void;

  /**
   * @deprecated Use {@link removeAtCell} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function removeAtCellWhenIdle(
    ...args: [...CellCoordinates, options?: TerrainMutationOptions]
  ): void;

  /**
   * Set terrain hit points at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param hitPoints - New hit point value.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function setHitPointsAtCell(...args: [...CellCoordinates, hitPoints: number]): void;

  /**
   * @deprecated Use {@link setHitPointsAtCell} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function setHpAtCell(...args: [...CellCoordinates, hitPoints: number]): boolean;

  /**
   * @deprecated Use {@link setHitPointsAtCell} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function setHpAtCellWhenIdle(...args: [...CellCoordinates, hitPoints: number]): void;
}

/**
 * Terrain registration, queries, and deferred cell mutations.
 *
 * Available as `sandkit.api.terrains`.
 *
 * @module
 */
import { CellCoordinates } from '../../shared/player';
import { shared } from '../../shared';
import type { elements } from './elements';

export namespace terrains {

  /** Return the mod string id for a numeric terrain type. */
  export import getIdByType = shared.api.terrains.getIdByType;
  /** Resolve a terrain string id to its cell type number. */
  export import getTypeById = shared.api.terrains.getTypeById;
  /**
   * @deprecated Use {@link getTypeById} instead.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.terrains.getTypeById`
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
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.register`
   */
  export interface TerrainDefinition extends Omit<shared.api.terrains.TerrainDefinition, "interactions"> {
    /** Tooltip interactions shown for this terrain. */
    interactions?: readonly elements.Interaction[];
  }

  /**
   * Register a new terrain definition.
   *
   * @param definition - Terrain definition to register.
   * @returns Object with the assigned `cellType`.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.register`
   */
  export function register(definition: TerrainDefinition): { cellType: TerrainType; };

  /**
   * Patch fields on an existing terrain definition.
   *
   * @param cellTypeOrId - Numeric cell type or terrain string id.
   * @param partial - Fields to merge onto the definition.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.terrains.updateDefinition`
   */
  export function updateDefinition(cellTypeOrId: TerrainRef, partial: Partial<TerrainDefinition>): void;

  /**
   * Create terrain at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param terrainTypeOrId - Numeric cell type or terrain string id.
   * @param options - Optional mutation flags.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.terrains.createAtCell`
   */
  export function createAtCell(...args: [...CellCoordinates, terrainTypeOrId: TerrainRef, options?: TerrainMutationOptions]): void;

  /**
   * @deprecated Use {@link createAtCell} instead.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.terrains.createAtCell`
   */
  export function createAtCellWhenIdle(...args: [...CellCoordinates, terrainTypeOrId: TerrainRef, options?: TerrainMutationOptions]): void;

  /**
   * Replace terrain at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param terrainTypeOrId - Numeric cell type or terrain string id.
   * @param options - Optional mutation flags.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.terrains.replaceAtCell`
   */
  export function replaceAtCell(...args: [...CellCoordinates, terrainTypeOrId: TerrainRef, options?: TerrainMutationOptions]): void;

  /**
   * @deprecated Use {@link replaceAtCell} instead.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.terrains.replaceAtCell`
   */
  export function replaceAtCellWhenIdle(...args: [...CellCoordinates, terrainTypeOrId: TerrainRef, options?: TerrainMutationOptions]): void;

  /**
   * Remove terrain at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param options - Optional mutation flags.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.terrains.removeAtCell`
   */
  export function removeAtCell(...args: [...CellCoordinates, options?: TerrainMutationOptions]): void;

  /**
   * @deprecated Use {@link removeAtCell} instead.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.terrains.removeAtCell`
   */
  export function removeAtCellWhenIdle(...args: [...CellCoordinates, options?: TerrainMutationOptions]): void;

  /**
   * Set terrain hit points at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param hitPoints - New hit point value.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.terrains.setHitPointsAtCell`
   */
  export function setHitPointsAtCell(...args: [...CellCoordinates, hitPoints: number]): void;

  /**
   * @deprecated Use {@link setHitPointsAtCell} instead.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.terrains.setHitPointsAtCell`
   */
  export function setHpAtCell(...args: [...CellCoordinates, hitPoints: number]): boolean;

  /**
   * @deprecated Use {@link setHitPointsAtCell} instead.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.terrains.setHitPointsAtCell`
   */
  export function setHpAtCellWhenIdle(...args: [...CellCoordinates, hitPoints: number]): void;
}

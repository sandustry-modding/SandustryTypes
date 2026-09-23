/**
 * Terrain registration, queries, and deferred cell mutations.
 *
 * Available as `sandkit.api.terrains`.
 *
 * @module
 */
import type { CellCoordinates } from "../../shared/player";
import type { CellId, LooseString, TaggedNumber } from "../../shared/nominal";
import type { CellType as CellTypeEnum } from "../enums/index";
import type { elements } from "./elements";

export namespace terrains {
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

  /** Return terrain cell type at a cell, or null. */
  export function getTypeAtCell(...args: CellCoordinates): TerrainType | null;

  /** Return terrain data at a cell, or null. */
  export function getDataAtCell(...args: CellCoordinates): TerrainDataAtCell | null;

  /** Return true when any terrain exists at the cell. */
  export function isAtCell(...args: CellCoordinates): boolean;

  /** Return true when terrain at the cell matches a string id. */
  export function isTypeAtCell(...args: [...CellCoordinates, terrainId: TerrainId]): boolean;

  /** Return true when a cell id represents terrain. */
  export function isCellIdTerrain(cellId: CellId): boolean;

  /** Apply damage to terrain at a cell. */
  export function damageAtCell(...args: [...CellCoordinates, damage: number]): void;

  /** Melt terrain at a cell (for example ice to water). */
  export function meltAtCell(...args: CellCoordinates): void;

  /**
   * Terrain definition shape with typed element interactions.
   *
   */
  export type TerrainDefinition = {
    /** Unique mod-scoped terrain id. */
    id: string;
    /** i18n key for the terrain display name. */
    nameKey?: string;
    /** Default terrain hit points. */
    hp?: number;
    /** Material id used for rendering. Must be > obstacle breakpoint and < 150. */
    materialId?: number;
    /** UI/meta color as 0xRRGGBB. */
    metaColor?: number;
    /** Base terrain color as HSL components. */
    colorHSL?: [number, number, number];
    /** Tool item ids required to excavate this terrain. */
    excavationRequirements?: readonly string[];
    /** Tooltip interactions shown for this terrain. */
    interactions?: readonly elements.Interaction[];
    /** Default element drop when the terrain is destroyed. */
    output?: {
      elementType: elements.ElementType;
      chance: number;
    };
    [key: string]: unknown;
  };

  /**
   * Register a new terrain definition.
   *
   * @param definition - Terrain definition to register.
   * @returns Object with the assigned `cellType`.
   *
   */
  export function register(definition: TerrainDefinition): { cellType: TerrainType };

  /**
   * Patch fields on an existing terrain definition.
   *
   * @param cellTypeOrId - Numeric cell type or terrain string id.
   * @param partial - Fields to merge onto the definition.
   *
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
   */
  export function createAtCell(
    ...args: [...CellCoordinates, terrainTypeOrId: TerrainRef, options?: TerrainMutationOptions]
  ): void;

  /**
   * @deprecated Use {@link createAtCell} instead.
   *
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
   */
  export function replaceAtCell(
    ...args: [...CellCoordinates, terrainTypeOrId: TerrainRef, options?: TerrainMutationOptions]
  ): void;

  /**
   * @deprecated Use {@link replaceAtCell} instead.
   *
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
   */
  export function removeAtCell(
    ...args: [...CellCoordinates, options?: TerrainMutationOptions]
  ): void;

  /**
   * @deprecated Use {@link removeAtCell} instead.
   *
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
   */
  export function setHitPointsAtCell(...args: [...CellCoordinates, hitPoints: number]): void;

  /**
   * @deprecated Use {@link setHitPointsAtCell} instead.
   *
   */
  export function setHpAtCell(...args: [...CellCoordinates, hitPoints: number]): boolean;

  /**
   * @deprecated Use {@link setHitPointsAtCell} instead.
   *
   */
  export function setHpAtCellWhenIdle(...args: [...CellCoordinates, hitPoints: number]): void;

  /**
   * Terrain cell data returned by {@link getDataAtCell}.
   *
   */
  export type TerrainDataAtCell = {
    /** Numeric terrain cell type. */
    cellType: TerrainType;
    /**
     * Current hit points, or null when the terrain has no hp.
     *
     */
    hitPoints: number | null;
    /**
     * @deprecated Use {@link hitPoints} instead.
     *
     */
    hp?: number | null;
  };

  /**
   * Options for terrain create, replace, or remove calls.
   *
   */
  export type TerrainMutationOptions = {
    /** Skip shadow updates around the changed cell. */
    skipShadow?: boolean;
  };

  /**
   * Numeric terrain / {@link CellTypeEnum} handle.
   *
   */
  export type TerrainType = CellTypeEnum | TaggedNumber<"terrainType">;

  /**
   * Mod or built-in terrain string id.
   *
   */
  export type TerrainId = LooseString<never>;

  /**
   * Type handle or string id accepted by mutation helpers.
   *
   */
  export type TerrainRef = TerrainType | TerrainId;
}

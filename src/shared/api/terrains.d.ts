import type { CellCoordinates } from "../../shared/player";
import type { CellId, LooseString, TaggedNumber } from "../nominal";
import type { CellType as CellTypeEnum } from "../../sandkit/enums/index";
import type { elements } from "./elements";

/**
 * Shared `sandkit.api.terrains` base — terrain type lookup and cell mutation.
 *
 * Worker-entry mutations are immediate. Main thread defers matching helpers in
 * `sandkit.api.terrains`.
 *
 * @internal Base namespace reused by main and worker declarations.
 */
export namespace terrains {
  /**
   * Terrain definition shape for {@link register} and {@link getDefinitionByType}.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export interface TerrainDefinition {
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
    interactions?: readonly { kind: string; [key: string]: unknown }[];
    /** Default element drop when the terrain is destroyed. */
    output?: {
      elementType: elements.ElementType;
      chance: number;
    };
    [key: string]: unknown;
  }

  /**
   * Terrain cell data returned by {@link getDataAtCell}.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export interface TerrainDataAtCell {
    /** Numeric terrain cell type. */
    cellType: TerrainType;
    /**
     * Current hit points, or null when the terrain has no hp.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    hitPoints: number | null;
    /**
     * @deprecated Use {@link hitPoints} instead.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    hp?: number | null;
  }

  /**
   * Return the mod string id for a numeric terrain type.
   *
   * @param terrainType - Numeric terrain cell type.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getIdByType(terrainType: TerrainType): TerrainId;

  /**
   * Resolve a terrain string id to a numeric cell type.
   *
   * @param terrainId - Mod-registered or built-in terrain id.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getTypeById(terrainId: TerrainId): TerrainType;

  /**
   * @deprecated Use {@link getTypeById} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getTypeFromId(terrainId: TerrainId): TerrainType;

  /**
   * Look up the definition for a terrain type.
   *
   * @param terrainType - Numeric terrain cell type.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getDefinitionByType(terrainType: TerrainType): TerrainDefinition | undefined;

  /**
   * Return the terrain cell type at a cell, or null when none.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getTypeAtCell(...args: CellCoordinates): TerrainType | null;

  /**
   * Return terrain cell type and hit points at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @returns Cell type and hit points, or null when the cell is not terrain.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getDataAtCell(...args: CellCoordinates): TerrainDataAtCell | null;

  /**
   * Return true when any terrain occupies the cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function isAtCell(...args: CellCoordinates): boolean;

  /**
   * Return true when the cell terrain matches the given id.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param terrainId - Terrain string id to compare.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function isTypeAtCell(...args: [...CellCoordinates, terrainId: TerrainId]): boolean;

  /**
   * Return true when a packed cell id refers to terrain.
   *
   * @param cellId - Packed cell id from {@link world.getCellIdAtCell}.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function isCellIdTerrain(cellId: CellId): boolean;

  /**
   * Apply damage to terrain at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param damage - Damage amount to apply.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function damageAtCell(...args: [...CellCoordinates, damage: number]): void;

  /**
   * Place terrain at an empty cell. Worker-entry writes are immediate.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param terrainTypeOrId - Numeric cell type or terrain string id.
   * @param options - Optional mutation flags.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function createAtCell(...args: [...CellCoordinates, terrainTypeOrId: TerrainRef, options?: TerrainMutationOptions]): void;

  /**
   * Replace existing terrain at a cell. Worker-entry writes are immediate.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param terrainTypeOrId - Numeric cell type or terrain string id.
   * @param options - Optional mutation flags.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function replaceAtCell(...args: [...CellCoordinates, terrainTypeOrId: TerrainRef, options?: TerrainMutationOptions]): void;

  /**
   * Remove terrain from a cell. Worker-entry writes are immediate.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param options - Optional mutation flags.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function removeAtCell(...args: [...CellCoordinates, options?: TerrainMutationOptions]): void;

  /**
   * Set terrain hit points at a cell. Worker-entry writes are immediate.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param hitPoints - New hit point value.
   * @returns True when hit points changed or the terrain was removed.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function setHitPointsAtCell(...args: [...CellCoordinates, hitPoints: number]): boolean;

  /**
   * @deprecated Use {@link setHitPointsAtCell} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function setHpAtCell(...args: [...CellCoordinates, hitPoints: number]): boolean;

  /**
   * Options for terrain create, replace, or remove calls.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export interface TerrainMutationOptions {
    /** Skip shadow updates around the changed cell. */
    skipShadow?: boolean;
  }

  /**
   * Numeric terrain / {@link CellTypeEnum} handle.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export type TerrainType = CellTypeEnum | TaggedNumber<"terrainType">;

  /**
   * Mod or built-in terrain string id.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export type TerrainId = LooseString<never>;

  /**
   * Type handle or string id accepted by mutation helpers.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export type TerrainRef = TerrainType | TerrainId;
}

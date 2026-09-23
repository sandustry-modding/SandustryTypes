import type { CellCoordinates, Vector2 } from "../../shared/player";
import type { CellId as PackedCellId } from "../../shared/nominal";
import type { elements } from "./elements";
import type { terrains } from "./terrains";

/**
 * `sandkit.api.grid` — grid cell queries, deferred mutations, and iteration.
 *
 * Main thread only.
 *
 */
export namespace grid {
  /**
   * Return the packed cell id at grid coordinates.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @returns Packed cell id for the cell.
   *
   */
  export function getCellIdAtCell(...args: CellCoordinates): CellId;

  /**
   * Return true when the cell has no element or terrain content.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function isCellEmptyAtCell(...args: CellCoordinates): boolean;

  /**
   * Return true when the cell holds terrain (not an element).
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function isTerrainAtCell(...args: CellCoordinates): boolean;

  /**
   * Mark the cell active for simulation this tick.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function reportActivityAtCell(...args: CellCoordinates): void;

  /**
   * Apply excavation damage and eject velocity at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param outVelocity - Ejection velocity written into this vector.
   * @param damage - Damage applied to terrain in the pattern.
   * @param options - Optional excavation source flags.
   *
   * @example
   * ```ts
   * api.grid.excavateAtCell(
   *   cellX,
   *   cellY,
   *   { x: 0, y: -120 },
   *   25,
   * );
   * ```
   *
   */
  export function excavateAtCell(
    ...args: [...CellCoordinates, outVelocity: Vector2, damage: number, options?: ExcavateOptions]
  ): void;

  /**
   * Return the world grid size in cells.
   *
   * @example Main entry
   * ```ts
   * const { widthCells, heightCells } = api.grid.getDimensions();
   * ```
   *
   */
  export function getDimensions(): GridDimensions;

  /** Packed cell id from {@link getCellIdAtCell}. */
  export type CellId = PackedCellId;

  /** World grid width and height in cells. */
  export type GridDimensions = {
    /** Grid width in cells. */
    widthCells: number;
    /** Grid height in cells. */
    heightCells: number;
  };

  /** Flags that control how {@link excavateAtCell} resolves damage and drops. */
  export type ExcavateOptions = {
    /** Treat the dig as gun fire for terrain resistance checks. */
    fromGun?: boolean;
    /** Treat the dig as rocket or dynamite explosion damage. */
    fromRocketExplosion?: boolean;
    /** Treat the dig as drill damage. */
    fromDrill?: boolean;
    /** Use {@link outVelocity} literally instead of deriving ejection speed. */
    useLiteralOutVelocity?: boolean;
    /** Allow removing terrain marked non-destructible. */
    destroyNonDestructible?: boolean;
    /** Force-remove all matched cells regardless of normal rules. */
    forceRemoveAll?: boolean;
    /** Extra drill-tier damage when {@link fromDrill} is true. Clamped to 0–1000. */
    drillTierDamage?: number;
  };

  /**
   * Run deferred grid mutations on the main thread. Reads see the old grid until
   * mutations apply.
   *
   * @param callback - Receives a writer for element and terrain cell mutations.
   *
   * @example Deferred main-thread mutations
   * ```ts
   * api.grid.mutate((writer) => {
   *   if (api.terrains.isTypeAtCell(cellX, cellY, "ice")) {
   *     writer.elements.replaceAtCell(cellX, cellY, "water");
   *   }
   * });
   * ```
   *
   * @example
   * ```ts
   * const waterType = api.elements.getTypeById("water");
   *
   * api.events.on("item:used", ({ itemId, cellX, cellY }) => {
   *   if (itemId !== "laser") return;
   *
   *   api.grid.mutate((writer) => {
   *     if (!api.terrains.isTypeAtCell(cellX, cellY, "ice")) return;
   *     writer.elements.replaceAtCell(cellX, cellY, waterType);
   *   });
   * });
   * ```
   *
   */
  export function mutate(callback: (writer: GridMutationWriter) => void): void;

  /**
   * Reveal fog of war at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function revealFogAtCell(...args: CellCoordinates): void;

  /**
   * Request redraw around a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param rangeCells - Radius in cells to redraw.
   *
   */
  export function redrawAroundCell(...args: [...CellCoordinates, rangeCells: number]): void;

  /**
   * Calls the callback for each cell inside a circle.
   *
   * @param centerCellX - Circle center cell column.
   * @param centerCellY - Circle center cell row.
   * @param radiusCells - Circle radius in cells.
   * @param callback - Invoked for each cell with `(cellX, cellY)`.
   *
   */
  export function forEachCellInCircle(
    centerCellX: number,
    centerCellY: number,
    radiusCells: number,
    callback: (...args: CellCoordinates) => void,
  ): void;

  /**
   * Calls the callback for each cell in a rectangle.
   *
   * @param cellX - Origin cell column (top-left).
   * @param cellY - Origin cell row (top-left).
   * @param widthCells - Rectangle width in cells.
   * @param heightCells - Rectangle height in cells.
   * @param callback - Invoked for each cell with `(cellX, cellY)`.
   *
   */
  export function forEachCellInRectangle(
    ...args: [
      ...CellCoordinates,
      widthCells: number,
      heightCells: number,
      callback: (...args: CellCoordinates) => void,
    ]
  ): void;

  /**
   * @deprecated Use {@link forEachCellInRectangle} instead.
   *
   */
  export function forEachCellInRect(
    ...args: [
      ...CellCoordinates,
      widthCells: number,
      heightCells: number,
      callback: (...args: CellCoordinates) => void,
    ]
  ): void;

  /** Deferred element and terrain mutations passed to {@link mutate}. */
  export type GridMutationWriter = {
    /** Element cell mutations inside a {@link mutate} callback. */
    elements: GridMutationWriterElements;
    /** Terrain cell mutations inside a {@link mutate} callback. */
    terrains: GridMutationWriterTerrains;
  };

  /** Element writers available on {@link GridMutationWriter.elements}. */
  export type GridMutationWriterElements = {
    /**
     * Create an element at a cell inside a {@link mutate} callback.
     *
     * @param cellX - Grid column of the target cell.
     * @param cellY - Grid row of the target cell.
     * @param elementTypeOrId - Numeric element type or string id.
     * @param options - Optional create flags.
     *
     */
    createAtCell(
      ...args: [
        ...CellCoordinates,
        elementTypeOrId: elements.ElementRef,
        options?: elements.ElementCreateOptions,
      ]
    ): void;

    /**
     * Replace the element at a cell inside a {@link mutate} callback.
     *
     * @param cellX - Grid column of the target cell.
     * @param cellY - Grid row of the target cell.
     * @param elementTypeOrId - Numeric element type or string id.
     * @param options - Optional create flags.
     *
     */
    replaceAtCell(
      ...args: [
        ...CellCoordinates,
        elementTypeOrId: elements.ElementRef,
        options?: elements.ElementCreateOptions,
      ]
    ): void;

    /**
     * Remove the element at a cell inside a {@link mutate} callback.
     *
     * @param cellX - Grid column of the target cell.
     * @param cellY - Grid row of the target cell.
     * @param options - Optional removal flags.
     *
     */
    removeAtCell(...args: [...CellCoordinates, options?: elements.ElementRemovalOptions]): void;
  };

  /** Terrain writers available on {@link GridMutationWriter.terrains}. */
  export type GridMutationWriterTerrains = {
    /**
     * Create terrain at a cell inside a {@link mutate} callback.
     *
     * @param cellX - Grid column of the target cell.
     * @param cellY - Grid row of the target cell.
     * @param terrainTypeOrId - Numeric terrain type or string id.
     * @param options - Optional mutation flags.
     *
     */
    createAtCell(
      ...args: [
        ...CellCoordinates,
        terrainTypeOrId: terrains.TerrainRef,
        options?: terrains.TerrainMutationOptions,
      ]
    ): void;

    /**
     * Replace terrain at a cell inside a {@link mutate} callback.
     *
     * @param cellX - Grid column of the target cell.
     * @param cellY - Grid row of the target cell.
     * @param terrainTypeOrId - Numeric terrain type or string id.
     * @param options - Optional mutation flags.
     *
     */
    replaceAtCell(
      ...args: [
        ...CellCoordinates,
        terrainTypeOrId: terrains.TerrainRef,
        options?: terrains.TerrainMutationOptions,
      ]
    ): void;

    /**
     * Remove terrain at a cell inside a {@link mutate} callback.
     *
     * @param cellX - Grid column of the target cell.
     * @param cellY - Grid row of the target cell.
     * @param options - Optional mutation flags.
     *
     */
    removeAtCell(...args: [...CellCoordinates, options?: terrains.TerrainMutationOptions]): void;
  };
}

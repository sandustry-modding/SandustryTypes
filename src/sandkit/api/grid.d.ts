import { CellCoordinates } from "../../shared/player";
import { shared } from "../../shared";
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
   */
  export import getCellIdAtCell = shared.api.grid.getCellIdAtCell;
  /**
   */
  export import isCellEmptyAtCell = shared.api.grid.isCellEmptyAtCell;
  /**
   */
  export import isTerrainAtCell = shared.api.grid.isTerrainAtCell;
  /**
   */
  export import reportActivityAtCell = shared.api.grid.reportActivityAtCell;
  /**
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
  export import excavateAtCell = shared.api.grid.excavateAtCell;
  /**
   * @example Main entry
   * ```ts
   * const { widthCells, heightCells } = api.grid.getDimensions();
   * ```
   *
   */
  export import getDimensions = shared.api.grid.getDimensions;
  export import ExcavateOptions = shared.api.grid.ExcavateOptions;
  export import CellId = shared.api.grid.CellId;
  export import GridDimensions = shared.api.grid.GridDimensions;

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
  export interface GridMutationWriter {
    /** Element cell mutations inside a {@link mutate} callback. */
    elements: GridMutationWriterElements;
    /** Terrain cell mutations inside a {@link mutate} callback. */
    terrains: GridMutationWriterTerrains;
  }

  /** Element writers available on {@link GridMutationWriter.elements}. */
  export interface GridMutationWriterElements {
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
  }

  /** Terrain writers available on {@link GridMutationWriter.terrains}. */
  export interface GridMutationWriterTerrains {
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
  }
}

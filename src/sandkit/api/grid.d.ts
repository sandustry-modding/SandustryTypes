import { CellCoordinates } from "../../shared/player";
import { shared } from "../../shared";
import type { elements } from "./elements";
import type { terrains } from "./terrains";

/**
 * `sandkit.api.grid` — grid cell queries, deferred mutations, and iteration.
 *
 * Main thread only.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid`
 */
export namespace grid {
  /**
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.getCellIdAtCell`
   */
  export import getCellIdAtCell = shared.api.grid.getCellIdAtCell;
  /**
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.isCellEmptyAtCell`
   */
  export import isCellEmptyAtCell = shared.api.grid.isCellEmptyAtCell;
  /**
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.isTerrainAtCell`
   */
  export import isTerrainAtCell = shared.api.grid.isTerrainAtCell;
  /**
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.reportActivityAtCell`
   */
  export import reportActivityAtCell = shared.api.grid.reportActivityAtCell;
  /**
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.excavateAtCell`
   */
  export import excavateAtCell = shared.api.grid.excavateAtCell;
  /**
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.getDimensions`
   */
  export import getDimensions = shared.api.grid.getDimensions;
  /** @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.ExcavateOptions` */
  export import ExcavateOptions = shared.api.grid.ExcavateOptions;
  /** @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.CellId` */
  export import CellId = shared.api.grid.CellId;
  /** @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.GridDimensions` */
  export import GridDimensions = shared.api.grid.GridDimensions;

  /**
   * Run deferred grid mutations on the main thread. Reads see the old grid until
   * mutations apply.
   *
   * @param callback - Receives a writer for element and terrain cell mutations.
   * @see https://sandustry.com/sandkit.html#mutations-heading
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.mutate`
   */
  export function mutate(callback: (writer: GridMutationWriter) => void): void;

  /**
   * Reveal fog of war at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.revealFogAtCell`
   */
  export function revealFogAtCell(...args: CellCoordinates): void;

  /**
   * Request redraw around a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param rangeCells - Radius in cells to redraw.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.redrawAroundCell`
   */
  export function redrawAroundCell(...args: [...CellCoordinates, rangeCells: number]): void;

  /**
   * Calls the callback for each cell inside a circle.
   *
   * @param centerCellX - Circle center cell column.
   * @param centerCellY - Circle center cell row.
   * @param radiusCells - Circle radius in cells.
   * @param callback - Invoked for each cell with `(cellX, cellY)`.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.forEachCellInCircle`
   */
  export function forEachCellInCircle(centerCellX: number, centerCellY: number, radiusCells: number, callback: (...args: CellCoordinates) => void): void;

  /**
   * Calls the callback for each cell in a rectangle.
   *
   * @param cellX - Origin cell column (top-left).
   * @param cellY - Origin cell row (top-left).
   * @param widthCells - Rectangle width in cells.
   * @param heightCells - Rectangle height in cells.
   * @param callback - Invoked for each cell with `(cellX, cellY)`.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.forEachCellInRectangle`
   */
  export function forEachCellInRectangle(...args: [...CellCoordinates, widthCells: number, heightCells: number, callback: (...args: CellCoordinates) => void]): void;

  /**
   * @deprecated Use {@link forEachCellInRectangle} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.grid.forEachCellInRectangle`
   */
  export function forEachCellInRect(...args: [...CellCoordinates, widthCells: number, heightCells: number, callback: (...args: CellCoordinates) => void]): void;

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
     * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.mutate` writer `elements.createAtCell`
     */
    createAtCell(...args: [...CellCoordinates, elementTypeOrId: elements.ElementRef, options?: elements.ElementCreateOptions]): void;

    /**
     * Replace the element at a cell inside a {@link mutate} callback.
     *
     * @param cellX - Grid column of the target cell.
     * @param cellY - Grid row of the target cell.
     * @param elementTypeOrId - Numeric element type or string id.
     * @param options - Optional create flags.
     * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.mutate` writer `elements.replaceAtCell`
     */
    replaceAtCell(...args: [...CellCoordinates, elementTypeOrId: elements.ElementRef, options?: elements.ElementCreateOptions]): void;

    /**
     * Remove the element at a cell inside a {@link mutate} callback.
     *
     * @param cellX - Grid column of the target cell.
     * @param cellY - Grid row of the target cell.
     * @param options - Optional removal flags.
     * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.mutate` writer `elements.removeAtCell`
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
     * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.mutate` writer `terrains.createAtCell`
     */
    createAtCell(...args: [...CellCoordinates, terrainTypeOrId: terrains.TerrainRef, options?: terrains.TerrainMutationOptions]): void;

    /**
     * Replace terrain at a cell inside a {@link mutate} callback.
     *
     * @param cellX - Grid column of the target cell.
     * @param cellY - Grid row of the target cell.
     * @param terrainTypeOrId - Numeric terrain type or string id.
     * @param options - Optional mutation flags.
     * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.mutate` writer `terrains.replaceAtCell`
     */
    replaceAtCell(...args: [...CellCoordinates, terrainTypeOrId: terrains.TerrainRef, options?: terrains.TerrainMutationOptions]): void;

    /**
     * Remove terrain at a cell inside a {@link mutate} callback.
     *
     * @param cellX - Grid column of the target cell.
     * @param cellY - Grid row of the target cell.
     * @param options - Optional mutation flags.
     * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.mutate` writer `terrains.removeAtCell`
     */
    removeAtCell(...args: [...CellCoordinates, options?: terrains.TerrainMutationOptions]): void;
  }
}

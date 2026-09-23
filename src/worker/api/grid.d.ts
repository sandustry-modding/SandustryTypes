import type { CellCoordinates, Vector2 } from "../../shared/player";
import type { grid as MainGrid } from "../../sandkit/api/grid";

/**
 * Worker-thread `sandkit.api.grid` — grid reads, activity, and excavation.
 *
 * Worker mutations are immediate. Main thread defers grid writes through `api.grid.mutate`.
 *
 * @internal Worker subset; do not import main-thread {@link sandkit.api.grid} iteration helpers here.
 */
export namespace grid {
  /** Return the packed cell id at grid coordinates. */
  export function getCellIdAtCell(...args: CellCoordinates): CellId;

  /** Return true when the cell has no element or terrain content. */
  export function isCellEmptyAtCell(...args: CellCoordinates): boolean;

  /** Return true when the cell holds terrain (not an element). */
  export function isTerrainAtCell(...args: CellCoordinates): boolean;

  /** Mark the cell active for simulation this tick. */
  export function reportActivityAtCell(...args: CellCoordinates): void;

  /** Apply excavation damage and eject velocity at a cell. */
  export function excavateAtCell(
    ...args: [...CellCoordinates, outVelocity: Vector2, damage: number, options?: ExcavateOptions]
  ): void;

  /**
   * Return the world grid size in cells.
   *
   * @example Worker entry
   * ```ts
   * const { widthCells, heightCells } = api.grid.getDimensions();
   * ```
   */
  export function getDimensions(): GridDimensions;

  /** Options for {@link excavateAtCell}. */
  export type ExcavateOptions = MainGrid.ExcavateOptions;
  /** Packed cell id from {@link getCellIdAtCell}. */
  export type CellId = MainGrid.CellId;
  /** World grid width and height in cells. */
  export type GridDimensions = MainGrid.GridDimensions;
}

/**
 * @deprecated Use {@link grid} instead.
 *
 */
export namespace world {
  export import getCellIdAtCell = grid.getCellIdAtCell;
  export import isCellEmptyAtCell = grid.isCellEmptyAtCell;
  export import isTerrainAtCell = grid.isTerrainAtCell;
  export import reportActivityAtCell = grid.reportActivityAtCell;
  export import excavateAtCell = grid.excavateAtCell;
  export import getDimensions = grid.getDimensions;
  export import ExcavateOptions = grid.ExcavateOptions;
  export import CellId = grid.CellId;
  export import GridDimensions = grid.GridDimensions;
}

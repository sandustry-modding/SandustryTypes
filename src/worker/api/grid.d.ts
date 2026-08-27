import { grid as sharedGrid } from "../../shared/api/grid";

/**
 * Worker-thread `sandkit.api.grid` — grid reads, activity, and excavation.
 *
 * Worker mutations are immediate. Main thread defers grid writes through `api.grid.mutate`.
 *
 * @internal Worker subset; do not import main-thread {@link sandkit.api.grid} iteration helpers here.
 */
export namespace grid {
  /** Return the packed cell id at grid coordinates. */
  export import getCellIdAtCell = sharedGrid.getCellIdAtCell;
  /** Return true when the cell has no element or terrain content. */
  export import isCellEmptyAtCell = sharedGrid.isCellEmptyAtCell;
  /** Return true when the cell holds terrain (not an element). */
  export import isTerrainAtCell = sharedGrid.isTerrainAtCell;
  /** Mark the cell active for simulation this tick. */
  export import reportActivityAtCell = sharedGrid.reportActivityAtCell;
  /** Apply excavation damage and eject velocity at a cell. */
  export import excavateAtCell = sharedGrid.excavateAtCell;
  /** Return the world grid size in cells. */
  export import getDimensions = sharedGrid.getDimensions;
  /** Options for {@link excavateAtCell}. */
  export import ExcavateOptions = sharedGrid.ExcavateOptions;
  /** Packed cell id from {@link getCellIdAtCell}. */
  export import CellId = sharedGrid.CellId;
  /** World grid width and height in cells. */
  export import GridDimensions = sharedGrid.GridDimensions;
}

/**
 * @deprecated Use {@link grid} instead.
 * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.grid`
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

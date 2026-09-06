import { grid as gridNs } from "./grid";

/**
 * Shared `sandkit.api.world` base — deprecated alias of {@link grid}.
 *
 * Cell queries, excavation, and dimensions are re-exported from {@link grid} so
 * existing `shared.api.world` imports keep working.
 *
 * @deprecated Use {@link grid} instead.
 * @internal Base namespace reused by main and worker declarations.
 */
export namespace world {
  /**
   */
  export import getCellIdAtCell = gridNs.getCellIdAtCell;
  /**
   */
  export import isCellEmptyAtCell = gridNs.isCellEmptyAtCell;
  /**
   */
  export import isTerrainAtCell = gridNs.isTerrainAtCell;
  /**
   */
  export import reportActivityAtCell = gridNs.reportActivityAtCell;
  /**
   */
  export import excavateAtCell = gridNs.excavateAtCell;
  /**
   */
  export import getDimensions = gridNs.getDimensions;
  export import ExcavateOptions = gridNs.ExcavateOptions;
  export import CellId = gridNs.CellId;
  export import GridDimensions = gridNs.GridDimensions;
}

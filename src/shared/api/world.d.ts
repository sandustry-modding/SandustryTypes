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
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.getCellIdAtCell`
   */
  export import getCellIdAtCell = gridNs.getCellIdAtCell;
  /**
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.isCellEmptyAtCell`
   */
  export import isCellEmptyAtCell = gridNs.isCellEmptyAtCell;
  /**
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.isTerrainAtCell`
   */
  export import isTerrainAtCell = gridNs.isTerrainAtCell;
  /**
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.reportActivityAtCell`
   */
  export import reportActivityAtCell = gridNs.reportActivityAtCell;
  /**
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.excavateAtCell`
   */
  export import excavateAtCell = gridNs.excavateAtCell;
  /**
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.getDimensions`
   */
  export import getDimensions = gridNs.getDimensions;
  /** @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.ExcavateOptions` */
  export import ExcavateOptions = gridNs.ExcavateOptions;
  /** @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.CellId` */
  export import CellId = gridNs.CellId;
  /** @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.GridDimensions` */
  export import GridDimensions = gridNs.GridDimensions;
}

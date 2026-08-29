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
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import getCellIdAtCell = gridNs.getCellIdAtCell;
  /**
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import isCellEmptyAtCell = gridNs.isCellEmptyAtCell;
  /**
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import isTerrainAtCell = gridNs.isTerrainAtCell;
  /**
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import reportActivityAtCell = gridNs.reportActivityAtCell;
  /**
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import excavateAtCell = gridNs.excavateAtCell;
  /**
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import getDimensions = gridNs.getDimensions;
  /** @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading) */
  export import ExcavateOptions = gridNs.ExcavateOptions;
  /** @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading) */
  export import CellId = gridNs.CellId;
  /** @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading) */
  export import GridDimensions = gridNs.GridDimensions;
}

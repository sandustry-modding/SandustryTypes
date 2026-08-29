/**
 * World cell queries, excavation, fog, redraw, and pickups.
 *
 * @deprecated Use {@link grid} and {@link pickups} instead.
 *
 * Available as `sandkit.api.world`.
 *
 * @module
 */
import { CellCoordinates } from "../../shared/player";
import { grid } from "./grid";
import { pickups as pickupsNs } from "./pickups";

/**
 * @deprecated Use {@link grid} instead.
 * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid`
 */
export namespace world {
  /**
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.getCellIdAtCell`
   */
  export import getCellIdAtCell = grid.getCellIdAtCell;
  /**
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.isCellEmptyAtCell`
   */
  export import isCellEmptyAtCell = grid.isCellEmptyAtCell;
  /**
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.isTerrainAtCell`
   */
  export import isTerrainAtCell = grid.isTerrainAtCell;
  /**
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.reportActivityAtCell`
   */
  export import reportActivityAtCell = grid.reportActivityAtCell;
  /**
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.excavateAtCell`
   */
  export import excavateAtCell = grid.excavateAtCell;
  /**
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.getDimensions`
   */
  export import getDimensions = grid.getDimensions;
  /** @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.ExcavateOptions` */
  export import ExcavateOptions = grid.ExcavateOptions;
  /** @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.CellId` */
  export import CellId = grid.CellId;
  /** @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.GridDimensions` */
  export import GridDimensions = grid.GridDimensions;

  /**
   * Reveal fog of war at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.revealFogAtCell`
   */
  export import revealFogAtCell = grid.revealFogAtCell;

  /**
   * @deprecated Use {@link grid.mutate} instead.
   * @see https://sandustry.com/sandkit.html#mutations-heading
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.grid.mutate`
   */
  export function runWhenSimulationIdle(callback: () => void): void;

  /**
   * @deprecated Use {@link grid.redrawAroundCell} instead.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.grid.redrawAroundCell`
   */
  export function redrawAroundCellWhenIdle(...args: [...CellCoordinates, range: number]): void;

  /**
   * @deprecated Use {@link pickups} instead.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.pickups`
   */
  export namespace pickups {
    /** @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.pickups.spawnAtWorld` */
    export import spawnAtWorld = pickupsNs.spawnAtWorld;
    /** @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.pickups.remove` */
    export import destroy = pickupsNs.destroy;
    /** @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.pickups.pickUp` */
    export import pickUp = pickupsNs.pickUp;
    /** @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.pickups.getAll` */
    export import getAll = pickupsNs.getAll;
    /** @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.pickups.getById` */
    export import getById = pickupsNs.getById;
    /** @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.pickups.remove` */
    export import remove = pickupsNs.remove;
  }

  /**
   * @deprecated Use {@link pickups.PickupType} instead.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.pickups.PickupType`
   */
  export import WorldItemType = pickupsNs.WorldItemType;

  /** @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.pickups.PickupType` */
  export import PickupType = pickupsNs.PickupType;

  /** @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.pickups.WorldItemLight` */
  export import WorldItemLight = pickupsNs.WorldItemLight;

  /** @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.pickups.WorldItem` */
  export import WorldItem = pickupsNs.WorldItem;
}

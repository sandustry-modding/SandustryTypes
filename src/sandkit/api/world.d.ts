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
 *
 */
export namespace world {
  /**
   */
  export import getCellIdAtCell = grid.getCellIdAtCell;
  /**
   */
  export import isCellEmptyAtCell = grid.isCellEmptyAtCell;
  /**
   */
  export import isTerrainAtCell = grid.isTerrainAtCell;
  /**
   */
  export import reportActivityAtCell = grid.reportActivityAtCell;
  /**
   */
  export import excavateAtCell = grid.excavateAtCell;
  /**
   */
  export import getDimensions = grid.getDimensions;
  export import ExcavateOptions = grid.ExcavateOptions;
  export import CellId = grid.CellId;
  export import GridDimensions = grid.GridDimensions;

  /**
   * Reveal fog of war at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export import revealFogAtCell = grid.revealFogAtCell;

  /**
   * @deprecated Use {@link grid.mutate} instead.
   *
   */
  export function runWhenSimulationIdle(callback: () => void): void;

  /**
   * @deprecated Use {@link grid.redrawAroundCell} instead.
   *
   */
  export function redrawAroundCellWhenIdle(...args: [...CellCoordinates, range: number]): void;

  /**
   * @deprecated Use {@link pickups} instead.
   *
   */
  export namespace pickups {
    export import spawnAtWorld = pickupsNs.spawnAtWorld;
    export import destroy = pickupsNs.destroy;
    export import pickUp = pickupsNs.pickUp;
    export import getAll = pickupsNs.getAll;
    export import getById = pickupsNs.getById;
    export import remove = pickupsNs.remove;
  }

  /**
   * @deprecated Use {@link pickups.PickupType} instead.
   *
   */
  export import WorldItemType = pickupsNs.WorldItemType;

  export import PickupType = pickupsNs.PickupType;

  export import WorldItemLight = pickupsNs.WorldItemLight;

  export import WorldItem = pickupsNs.WorldItem;
}

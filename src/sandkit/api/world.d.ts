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
 * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
 */
export namespace world {
  /**
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import getCellIdAtCell = grid.getCellIdAtCell;
  /**
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import isCellEmptyAtCell = grid.isCellEmptyAtCell;
  /**
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import isTerrainAtCell = grid.isTerrainAtCell;
  /**
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import reportActivityAtCell = grid.reportActivityAtCell;
  /**
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import excavateAtCell = grid.excavateAtCell;
  /**
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import getDimensions = grid.getDimensions;
  /** @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading) */
  export import ExcavateOptions = grid.ExcavateOptions;
  /** @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading) */
  export import CellId = grid.CellId;
  /** @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading) */
  export import GridDimensions = grid.GridDimensions;

  /**
   * Reveal fog of war at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import revealFogAtCell = grid.revealFogAtCell;

  /**
   * @deprecated Use {@link grid.mutate} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function runWhenSimulationIdle(callback: () => void): void;

  /**
   * @deprecated Use {@link grid.redrawAroundCell} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function redrawAroundCellWhenIdle(...args: [...CellCoordinates, range: number]): void;

  /**
   * @deprecated Use {@link pickups} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export namespace pickups {
    /** @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading) */
    export import spawnAtWorld = pickupsNs.spawnAtWorld;
    /** @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading) */
    export import destroy = pickupsNs.destroy;
    /** @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading) */
    export import pickUp = pickupsNs.pickUp;
    /** @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading) */
    export import getAll = pickupsNs.getAll;
    /** @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading) */
    export import getById = pickupsNs.getById;
    /** @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading) */
    export import remove = pickupsNs.remove;
  }

  /**
   * @deprecated Use {@link pickups.PickupType} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import WorldItemType = pickupsNs.WorldItemType;

  /** @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading) */
  export import PickupType = pickupsNs.PickupType;

  /** @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading) */
  export import WorldItemLight = pickupsNs.WorldItemLight;

  /** @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading) */
  export import WorldItem = pickupsNs.WorldItem;
}

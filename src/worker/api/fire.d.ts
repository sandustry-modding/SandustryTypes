import type { CellCoordinates } from "../../shared/player";

/**
 * Worker-thread `sandkit.api.fire` — ignite and burn elements at grid cells.
 *
 * Worker burns are immediate. Main thread defers burns with `burnElementAtCell`.
 *
 * @internal Worker-only surface; do not use main-thread {@link sandkit.api.fire}.
 */
export namespace fire {
  /**
   * Return true when the element at the cell can burn.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function canBurnElementAtCell(...args: CellCoordinates): boolean;

  /**
   * Burn the element at the cell immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @returns True when the burn succeeded.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function burnElementAtCell(...args: CellCoordinates): boolean;
}

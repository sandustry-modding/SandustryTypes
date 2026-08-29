import { CellCoordinates } from "../../shared/player";

/**
 * `sandkit.api.fire` — ignite and burn elements at grid cells.
 * Main thread only.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
 */
export namespace fire {
  /**
   * Returns true when the element at the cell can burn.
   *
   * @param cellX - Grid cell X coordinate.
   * @param cellY - Grid cell Y coordinate.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function canBurnElementAtCell(...args: CellCoordinates): boolean;

  /**
   * Burn the element at the cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid cell X coordinate.
   * @param cellY - Grid cell Y coordinate.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function burnElementAtCell(...args: CellCoordinates): void;

  /**
   * @deprecated Use {@link burnElementAtCell} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export function burnElementAtCellWhenIdle(...args: CellCoordinates): void;
}

import { CellCoordinates } from "../../shared/player";

/**
 * `sandkit.api.fire` — ignite and burn elements at grid cells.
 * Main thread only.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.fire`
 */
export namespace fire {
  /**
   * Returns true when the element at the cell can burn.
   *
   * @param cellX - Grid cell X coordinate.
   * @param cellY - Grid cell Y coordinate.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.fire.canBurnElementAtCell`
   */
  export function canBurnElementAtCell(...args: CellCoordinates): boolean;

  /**
   * Burn the element at the cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid cell X coordinate.
   * @param cellY - Grid cell Y coordinate.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.fire.burnElementAtCell`
   */
  export function burnElementAtCell(...args: CellCoordinates): void;

  /**
   * @deprecated Use {@link burnElementAtCell} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.fire.burnElementAtCell`
   */
  export function burnElementAtCellWhenIdle(...args: CellCoordinates): void;
}

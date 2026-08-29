import type { CellCoordinates } from "../../shared/player";

/**
 * Pipe network queries and enablement at grid cells.
 *
 * Available as `sandkit.api.pipes`.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
 */
export namespace pipes {
  /**
   * Return true when a pipe occupies the cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function isAtCell(...args: CellCoordinates): boolean;

  /**
   * Return true when pipe flow is enabled at the cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function isEnabledAtCell(...args: CellCoordinates): boolean;

  /**
   * Return connected liquid vent cell positions for the pipe at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getConnectedVentsAtCell(...args: CellCoordinates): readonly PipeVentCell[];

  /**
   * Enable or disable pipe flow at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param enabled - Desired enabled state.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function setEnabledAtCell(...args: [...CellCoordinates, enabled: boolean]): void;

  /** Connected vent cell position. */
  export interface PipeVentCell {
    cellX: number;
    cellY: number;
    [key: string]: unknown;
  }
}

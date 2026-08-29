import type { CellCoordinates } from "../../shared/player";

/**
 * Pipe network queries and enablement at grid cells.
 *
 * Available as `sandkit.api.pipes`.
 *
 * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pipes`
 */
export namespace pipes {
  /**
   * Return true when a pipe occupies the cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pipes.isAtCell`
   */
  export function isAtCell(...args: CellCoordinates): boolean;

  /**
   * Return true when pipe flow is enabled at the cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pipes.isEnabledAtCell`
   */
  export function isEnabledAtCell(...args: CellCoordinates): boolean;

  /**
   * Return connected liquid vent cell positions for the pipe at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pipes.getConnectedVentsAtCell`
   */
  export function getConnectedVentsAtCell(...args: CellCoordinates): readonly PipeVentCell[];

  /**
   * Enable or disable pipe flow at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param enabled - Desired enabled state.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pipes.setEnabledAtCell`
   */
  export function setEnabledAtCell(...args: [...CellCoordinates, enabled: boolean]): void;

  /** Connected vent cell position. */
  export interface PipeVentCell {
    cellX: number;
    cellY: number;
    [key: string]: unknown;
  }
}

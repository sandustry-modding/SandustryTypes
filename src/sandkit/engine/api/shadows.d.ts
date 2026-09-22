import type { SandkitState } from "../state";

/**
 * `sandkit.engine.api.shadows` — shadow map refresh for regions.
 *
 * **Internal API.** Prefer {@link sandkit.api} when a public method exists.
 * Methods take {@link SandkitState} as the first argument.
 *
 * @internal
 */
export namespace shadows {
  /**
   * Recompute the shadow value at one world cell.
   *
   * @param state - Live game state (`sandkit.engine.state`).
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   */
  export function refresh(state: SandkitState, cellX: number, cellY: number): void;

  /**
   * Recompute shadows in a square neighborhood around a cell.
   *
   * @param state - Live game state (`sandkit.engine.state`).
   * @param cellX - Grid column at the center of the region.
   * @param cellY - Grid row at the center of the region.
   * @param radius - Half-width of the square in cells (default `8`).
   */
  export function refreshRadius(
    state: SandkitState,
    cellX: number,
    cellY: number,
    radius?: number,
  ): void;

  /**
   * Recompute shadows in an axis-aligned rectangle of cells.
   *
   * @param state - Live game state (`sandkit.engine.state`).
   * @param minCellX - Inclusive minimum column.
   * @param minCellY - Inclusive minimum row.
   * @param maxCellX - Inclusive maximum column.
   * @param maxCellY - Inclusive maximum row.
   * @param padding - Extra cells expanded on each side before refresh (default `8`).
   */
  export function refreshRect(
    state: SandkitState,
    minCellX: number,
    minCellY: number,
    maxCellX: number,
    maxCellY: number,
    padding?: number,
  ): void;
}

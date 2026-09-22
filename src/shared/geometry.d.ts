/**
 * Shared 2D geometry shapes.
 *
 * @internal Base types reused by main and worker API declarations. Not a
 * runtime `sandkit` namespace.
 *
 * Import from `@sandustry-modding/types/shared` or
 * `@sandustry-modding/types/shared/geometry`.
 * Existing `shared/player` re-exports stay valid.
 */

/**
 * Grid cell position as `[cellX, cellY]`.
 *
 * Cell coordinates match `sandkit.api.*AtCell` helpers: column first, then row.
 * Prefer this tuple for rest-parameter cell APIs.
 */
export type CellCoordinates = [cellX: number, cellY: number];

/**
 * 2D vector in world or cell space.
 *
 * World positions use pixels.
 * Cell helpers may return pixel or cell units depending on the API.
 * Prefer this object for returns, options, and `{ x, y }` payloads.
 */
export type Vector2 = {
  /** Horizontal component. */
  x: number;
  /** Vertical component. */
  y: number;
};

/**
 * Grid cell position as an object.
 *
 * Prefer this for event and hook payloads.
 * Prefer {@link CellCoordinates} for `...AtCell` rest args.
 */
export type CellXY = {
  /** Cell column. */
  cellX: number;
  /** Cell row. */
  cellY: number;
};

/**
 * 2D size in pixels or UI units.
 *
 * Do not use for grid extents.
 * Grid size uses `widthCells` / `heightCells` on `GridDimensions`.
 */
export type Size2 = {
  /** Horizontal size. */
  width: number;
  /** Vertical size. */
  height: number;
};

import type { CellCoordinates, Vector2 } from "../../shared/player";

/**
 * Worker-thread `sandkit.api.player` — position and collision queries.
 *
 * @internal Worker subset; main thread exposes movement, inventory, and buildings.
 */
export namespace player {
  /** Return the player center position in world pixels. */
  export function getPositionAtWorld(): Vector2;

  /**
   * @deprecated Use {@link getPositionAtWorld} instead.
   *
   */
  export function getWorldPosition(): Vector2;

  /** Return true when the player hitbox overlaps the cell. */
  export function isCollidingWithCell(...args: CellCoordinates): boolean;

  /** Return true when the player is within radius cells of the point. */
  export function isWithinRadiusOfCell(...args: [...CellCoordinates, radius: number]): boolean;
}

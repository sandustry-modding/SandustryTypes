/**
 * Player position, movement, inventory, and building unlocks.
 *
 * Available as `sandkit.api.player`.
 *
 * @module
 */
import type { CellCoordinates, Vector2 } from "../../shared/player";

export namespace player {
  /**
   * Return the player center position in world pixels.
   *
   * @returns World position as `{ x, y }` in pixels.
   *
   */
  export function getPositionAtWorld(): Vector2;

  /**
   * Return true when the player hitbox overlaps the cell.
   *
   * @param cellX - Grid column of the cell.
   * @param cellY - Grid row of the cell.
   * @returns True when the player overlaps the cell.
   *
   */
  export function isCollidingWithCell(...args: CellCoordinates): boolean;

  /**
   * Return true when the player is within `radius` cells of the point.
   *
   * @param cellX - Grid column of the reference cell.
   * @param cellY - Grid row of the reference cell.
   * @param radius - Maximum distance in cells (inclusive).
   * @returns True when the player is inside the radius.
   *
   */
  export function isWithinRadiusOfCell(...args: [...CellCoordinates, radius: number]): boolean;

  /**
   * @deprecated Use {@link getPositionAtWorld} instead.
   *
   */
  export function getWorldPosition(): Vector2;

  /**
   * Set the player world position.
   *
   * @param worldX - World x position in pixels.
   * @param worldY - World y position in pixels.
   *
   */
  export function setPositionAtWorld(worldX: number, worldY: number): void;

  /**
   * @deprecated Use {@link setPositionAtWorld} instead.
   *
   * @param worldX - World x position in pixels.
   * @param worldY - World y position in pixels.
   *
   */
  export function setWorldPosition(worldX: number, worldY: number): void;

  /**
   * Set the player velocity.
   *
   * @param velocityX - Horizontal velocity in pixels per second.
   * @param velocityY - Vertical velocity in pixels per second.
   *
   */
  export function setVelocity(velocityX: number, velocityY: number): void;

  /**
   * Set the movement speed multiplier.
   *
   * @param multiplier - Speed scale factor (`1` is default walk). `0` freezes movement.
   * Vanilla Sprint Boost (Shift burst + meter) only runs when this value is exactly `1`.
   *
   */
  export function setMovementSpeedMultiplier(multiplier: number): void;

  /**
   * Set movement mode to normal or hover.
   *
   * @param mode - `"normal"` for default physics, or `"hover"` for hover flight.
   * @returns True when the mode changes.
   *
   */
  export function setMovementMode(mode: "normal" | "hover"): boolean;

  /**
   * Return true when the player is on ground.
   * Tests solid cells 1 pixel below the hitbox. Do not use `player.onGround`
   * on the store snapshot — that flag is not updated during play.
   *
   * @returns True when the player touches solid ground.
   *
   */
  export function isOnGround(): boolean;

  /**
   * Move the player down until ground is found.
   *
   */
  export function teleportToGround(): void;

  /**
   * Return true when the world position has no collision.
   *
   * @param worldX - World x position in pixels to test.
   * @param worldY - World y position in pixels to test.
   * @returns True when the player hitbox fits at the position.
   *
   */
  export function isPositionClearAtWorld(worldX: number, worldY: number): boolean;

  /**
   * @deprecated Use {@link isPositionClearAtWorld} instead.
   *
   */
  export function isWorldPositionClear(worldX: number, worldY: number): boolean;

  /** Player inventory helpers. */
  export namespace inventory {
    /**
     * Return true when inventory contains the item id.
     *
     * @param itemId - Registered item id or numeric {@link items.ItemId}.
     * Live checks use numeric vanilla ids; string enum names may return false.
     *
     */
    export function hasById(itemId: string | number): boolean;

    /**
     * Add an item to inventory by item id.
     *
     * @param itemId - Registered item id string.
     *
     */
    export function addById(itemId: string): void;

    /**
     * @deprecated Use {@link addById} instead.
     *
     */
    export function addFromId(itemId: string): void;
  }

  /** Player building unlock helpers. */
  export namespace buildings {
    /**
     * Unlock a structure type for building.
     *
     * @param structureId - Registered structure id string.
     *
     */
    export function unlockById(structureId: string): void;

    /**
     * @deprecated Use {@link unlockById} instead.
     *
     */
    export function unlockByType(structureId: string): void;

    /**
     * Remove a structure unlock from the player.
     *
     * @param structureId - Registered structure id string.
     *
     */
    export function removeById(structureId: string): void;
  }
}

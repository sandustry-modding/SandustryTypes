/**
 * Player position, movement, inventory, and building unlocks.
 *
 * Available as `sandkit.api.player`.
 *
 * @module
 */
import { shared } from "../../shared";

export namespace player {

  /** Return the player world position. */
  export import getPositionAtWorld = shared.api.player.getPositionAtWorld;
  /** Return true when the player overlaps the given cell. */
  export import isCollidingWithCell = shared.api.player.isCollidingWithCell;
  /** Return true when the player is within radius of the given cell. */
  export import isWithinRadiusOfCell = shared.api.player.isWithinRadiusOfCell;

  /**
   * @deprecated Use {@link getPositionAtWorld} instead.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.player.getPositionAtWorld`
   */
  export import getWorldPosition = shared.api.player.getWorldPosition;

  /**
   * Set the player world position.
   *
   * @param worldX - World x position in pixels.
   * @param worldY - World y position in pixels.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.setPositionAtWorld`
   */
  export function setPositionAtWorld(worldX: number, worldY: number): void;

  /**
   * @deprecated Use {@link setPositionAtWorld} instead.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.player.setPositionAtWorld`
   */
  export function setWorldPosition(worldX: number, worldY: number): void;

  /**
   * Set the player velocity.
   *
   * @param velocityX - Horizontal velocity in pixels per second.
   * @param velocityY - Vertical velocity in pixels per second.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.setVelocity`
   */
  export function setVelocity(velocityX: number, velocityY: number): void;

  /**
   * Set the movement speed multiplier.
   *
   * @param multiplier - Speed scale factor (`1` is default walk). `0` freezes movement.
   * Vanilla Sprint Boost (Shift burst + meter) only runs when this value is exactly `1`.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.setMovementSpeedMultiplier`
   */
  export function setMovementSpeedMultiplier(multiplier: number): void;

  /**
   * Set movement mode to normal or hover.
   *
   * @param mode - `"normal"` for default physics, or `"hover"` for hover flight.
   * @returns True when the mode changes.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.setMovementMode`
   */
  export function setMovementMode(mode: 'normal' | 'hover'): boolean;

  /**
   * Return true when the player is on ground.
   * Tests solid cells 1 pixel below the hitbox. Do not use `player.onGround`
   * on the store snapshot — that flag is not updated during play.
   *
   * @returns True when the player touches solid ground.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.isOnGround`
   */
  export function isOnGround(): boolean;

  /**
   * Move the player down until ground is found.
   *
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.teleportToGround`
   */
  export function teleportToGround(): void;

  /**
   * Return true when the world position has no collision.
   *
   * @param worldX - World x position in pixels to test.
   * @param worldY - World y position in pixels to test.
   * @returns True when the player hitbox fits at the position.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.isPositionClearAtWorld`
   */
  export function isPositionClearAtWorld(worldX: number, worldY: number): boolean;

  /**
   * @deprecated Use {@link isPositionClearAtWorld} instead.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.player.isPositionClearAtWorld`
   */
  export function isWorldPositionClear(worldX: number, worldY: number): boolean;

  /** Player inventory helpers. */
  export namespace inventory {
    /**
     * Add an item to inventory by item id.
     *
     * @param itemId - Registered item id string.
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.inventory.addById`
     */
    export function addById(itemId: string): void;

    /**
     * @deprecated Use {@link addById} instead.
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.player.inventory.addById`
     */
    export function addFromId(itemId: string): void;
  }

  /** Player building unlock helpers. */
  export namespace buildings {
    /**
     * Unlock a structure type for building.
     *
     * @param structureId - Registered structure id string.
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.buildings.unlockById`
     */
    export function unlockById(structureId: string): void;

    /**
     * @deprecated Use {@link unlockById} instead.
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.player.buildings.unlockById`
     */
    export function unlockByType(structureId: string): void;

    /**
     * Remove a structure unlock from the player.
     *
     * @param structureId - Registered structure id string.
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.player.buildings.removeById`
     */
    export function removeById(structureId: string): void;
  }
}

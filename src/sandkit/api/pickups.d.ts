import type { PickupType as PickupTypeEnum } from "../enums/index";

/**
 * World pickups — spawn, collect, and query pickup instances.
 *
 * Available as `sandkit.api.pickups`.
 *
 * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pickups`
 */
export namespace pickups {
  /** Official pickup type discriminator. */
  export type PickupType = PickupTypeEnum;

  /**
   * @deprecated Use {@link PickupType} instead.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.pickups.PickupType`
   */
  export type WorldItemType = PickupType;

  /** Optional point light attached when spawning a pickup. */
  export interface WorldItemLight {
    /** Light brightness multiplier. Default 1. */
    brightness?: number;
    /** Light radius in world pixels. Default 100. */
    size?: number;
    /** RGB or RGBA color components in 0–1 range. */
    color?: [number, number, number] | [number, number, number, number];
  }

  /** Active world pickup instance. */
  export interface WorldItem {
    id: number;
    x: number;
    y: number;
    type: PickupType;
    data: Record<string, unknown>;
  }

  /**
   * Spawn a pickup at world position.
   *
   * @param type - Pickup type discriminator.
   * @param worldX - World x position in pixels.
   * @param worldY - World y position in pixels.
   * @param data - Optional per-item data bag copied onto the instance.
   * @param light - Optional point light spawned with the pickup.
   * @returns The spawned pickup instance.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pickups.spawnAtWorld`
   */
  export function spawnAtWorld(type: PickupType, worldX: number, worldY: number, data?: Record<string, unknown>, light?: WorldItemLight): WorldItem;

  /**
   * Remove a pickup instance from the world.
   *
   * @param pickup - Pickup returned from spawn or lookup helpers.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pickups.remove`
   */
  export function remove(pickup: WorldItem): void;

  /**
   * @deprecated Use {@link remove} instead.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.pickups.remove`
   */
  export function destroy(pickup: WorldItem): void;

  /**
   * Pick up a world item into inventory.
   *
   * @param pickup - Pickup to collect.
   * @returns True when the item was collected.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pickups.pickUp`
   */
  export function pickUp(pickup: WorldItem): boolean;

  /**
   * Return all active pickups.
   *
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pickups.getAll`
   */
  export function getAll(): WorldItem[];

  /**
   * Return a pickup by numeric id.
   *
   * @param pickupId - Runtime pickup id.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.pickups.getById`
   */
  export function getById(pickupId: number): WorldItem | undefined;
}

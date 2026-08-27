/**
 * Entity spawn, capture, and lifecycle helpers.
 *
 * Available as `sandkit.api.entities`.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.entities`
 */
export namespace entities {
  /**
   * Return one live entity by runtime id.
   *
   * @param entityId - Runtime entity id.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.entities.getById`
   */
  export function getById(entityId: number): Entity | undefined;

  /**
   * Return all live entities of one type.
   *
   * @param entityTypeId - Registered entity type string id.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.entities.getAllByType`
   */
  export function getAllByType(entityTypeId: string): Entity[];

  /**
   * Spawn an entity at world position.
   *
   * @param entityTypeId - Registered entity type string id.
   * @param worldX - Spawn x position in world pixels.
   * @param worldY - Spawn y position in world pixels.
   * @returns The spawned entity instance.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.entities.spawnAtWorld`
   */
  export function spawnAtWorld(entityTypeId: string, worldX: number, worldY: number): Entity;

  /**
   * Remove an entity from the world.
   *
   * @param entityId - Runtime entity id.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.entities.remove`
   */
  export function remove(entityId: number): void;

  /**
   * Launch an entity with angle and optional speed.
   *
   * @param entityId - Runtime entity id.
   * @param angleRadians - Launch angle in radians.
   * @param speed - Optional launch speed.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.entities.launch`
   */
  export function launch(entityId: number, angleRadians: number, speed?: number): void;

  /**
   * Start capture for an entity (for example vacuum capture).
   *
   * @param entityId - Runtime entity id.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.entities.startCapture`
   */
  export function startCapture(entityId: number): void;

  /**
   * Collect an entity (for example into inventory or storage).
   *
   * @param entityId - Runtime entity id.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.entities.collect`
   */
  export function collect(entityId: number): void;

  /** Active entity instance in the world. */
  export interface Entity {
    id: number;
    x: number;
    y: number;
    targetX?: number;
    targetY?: number;
    [key: string]: unknown;
  }
}

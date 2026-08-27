/**
 * Vector math helpers for world and cell coordinates.
 *
 * Available as `sandkit.api.utils`.
 *
 * @module
 */
import type { Vector2 } from "../../shared/player";

export namespace utils {
  /**
   * Return distance between two points.
   *
   * @param pointA - First point.
   * @param pointB - Second point.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.utils.getDistance`
   */
  export function getDistance(pointA: Vector2, pointB: Vector2): number;

  /**
   * Return normalized direction from point A to point B.
   *
   * @param pointA - Origin point.
   * @param pointB - Target point.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.utils.getDirection`
   */
  export function getDirection(pointA: Vector2, pointB: Vector2): Vector2;

  /**
   * Return angle in radians from point A to point B.
   *
   * @param pointA - Origin point.
   * @param pointB - Target point.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.utils.getAngle`
   */
  export function getAngle(pointA: Vector2, pointB: Vector2): number;

  /**
   * Return grid cells along a line between two points.
   *
   * @param pointA - Line start in cell coordinates.
   * @param pointB - Line end in cell coordinates.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.utils.getCoordinatesBetweenCells`
   */
  export function getCoordinatesBetweenCells(pointA: Vector2, pointB: Vector2): Vector2[];

  /**
   * @deprecated Use {@link getCoordinatesBetweenCells} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.utils.getCoordinatesBetweenCells`
   */
  export function getCoordinatesBetweenPoints(pointA: Vector2, pointB: Vector2): Vector2[];
}

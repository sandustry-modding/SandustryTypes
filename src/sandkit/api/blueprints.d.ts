import type { structures } from "../../shared/api/structures";

/**
 * Structure blueprint serialize and localize helpers.
 *
 * Available as `sandkit.api.blueprints`.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
 */
export namespace blueprints {
  /**
   * Serialize live structure instances into blueprint records.
   *
   * @param structures - Structure instances to encode.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function serializeStructures(
    structures: readonly structures.Structure[],
  ): BlueprintStructure[];

  /**
   * Localize blueprint structure records for placement.
   *
   * @param structures - Blueprint structure records to localize.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function localizeStructures(
    structures: readonly BlueprintStructure[],
  ): BlueprintStructure[];

  /** Serialized structure entry used in blueprints. */
  export interface BlueprintStructure {
    x: number;
    y: number;
    [key: string]: unknown;
  }
}

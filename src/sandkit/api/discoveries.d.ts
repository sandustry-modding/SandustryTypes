import type { elements } from "./elements";
import type { terrains } from "./terrains";

/**
 * `sandkit.api.discoveries` — unlock element and terrain entries in the discovery log.
 * Main thread only.
 */
export namespace discoveries {
  /**
   * Marks an element type as discovered for the player.
   * @param elementType - Numeric element type id.
   */
  export function addElementByType(elementType: elements.ElementType): void;
  /**
   * Marks a terrain type as discovered for the player.
   * @param terrainType - Numeric terrain type id.
   */
  export function addTerrainByType(terrainType: terrains.TerrainType): void;
}

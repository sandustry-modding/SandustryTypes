import type { elements } from "../../shared/api/elements";
import type { terrains } from "../../shared/api/terrains";

/**
 * `sandkit.api.excavation` — register custom excavation tool dig profiles.
 * Main thread only.
 *
 * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.excavation`
 */
export namespace excavation {
  /**
   * Registers an excavation profile by id.
   *
   * @param id - Unique profile id (1–128 chars: letters, numbers, `.`, `_`, `:`, `-`).
   * @param definition - Pattern, power, terrain rules, and profile options.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.excavation.registerProfile`
   */
  export function registerProfile(id: string, definition: ExcavationProfileDefinitionV1): void;

  /** Excavation tool profile definition. */
  export interface ExcavationProfileDefinitionV1 {
    /** Dig pattern grid; non-zero cells are removed. */
    pattern?: number[][];
    /** Dig strength applied to matched cells. Clamped to 0–1000. */
    power: number;
    /** Optional profile-specific excavation flags. */
    options?: ExcavationProfileOptions;
    /** Per-terrain output and damage rules. */
    terrainRules?: readonly ExcavationTerrainRule[];
  }

  /** Options attached to an excavation profile definition. */
  export interface ExcavationProfileOptions {
    fromGun?: boolean;
    fromRocketExplosion?: boolean;
    fromDrill?: boolean;
    useLiteralOutVelocity?: boolean;
    destroyNonDestructible?: boolean;
    forceRemoveAll?: boolean;
    /** Clamped to 0–1000 when set. */
    drillTierDamage?: number;
  }

  /** Terrain match rule within an excavation profile. */
  export interface ExcavationTerrainRule {
    /** Terrain cell type to match. */
    cellType: terrains.TerrainRef;
    /**
     * @deprecated Use {@link cellType} instead.
     * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias in `api.excavation.registerProfile` terrain rules
     */
    terrainType?: terrains.TerrainRef;
    /** Damage applied when this rule matches. */
    damage?: number;
    /** Element type produced when this terrain is excavated. */
    outputElementType?: elements.ElementRef;
  }
}

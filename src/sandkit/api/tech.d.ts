import type { Tech as TechEnum } from "../enums/index";
import type { LooseString, TaggedNumber } from "../../shared/nominal";

/**
 * Tech tree definitions, nodes, and lock state.
 *
 * Available as `sandkit.api.tech`.
 *
 * @module
 */
export namespace tech {
  /**
   * Return a tech definition by string id.
   *
   * @param techId - Tech entry identifier.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getDefinitionById(techId: TechGridId): TechDefinition | undefined;

  /**
   * Patch fields on an existing tech definition.
   *
   * @param techId - Tech entry identifier.
   * @param updates - Fields to merge into the definition.
   *
   * @example
   * ```ts
   * api.tech.updateDefinition("exampleTech", {
   *   cost: 200,
   * });
   * ```
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function updateDefinition(techId: TechGridId, updates: Partial<TechDefinition>): void;

  /**
   * Register a new tech definition by id.
   *
   * @param techId - Tech entry identifier.
   * @param definition - Full tech definition to register.
   *
   * @example
   * ```ts
   * api.tech.registerDefinition("exampleTech", {
   *   name: "Example research",
   *   nameKey: "mods|example|techName",
   *   description: "Unlocks the example machine.",
   *   descriptionKey: "mods|example|techDescription",
   *   cost: 100,
   * });
   * ```
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function registerDefinition(techId: TechGridId, definition: TechDefinition): void;

  /**
   * @deprecated Use {@link registerDefinition} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function addDefinition(techId: TechGridId, definition: TechDefinition): void;

  /**
   * Register a tech node on the grid with parent and position options.
   *
   * @param techId - Tech grid node id.
   * @param definition - Tech definition for the node.
   * @param options - Parent node id and optional preferred grid position.
   *
   * @example
   * ```ts
   * const position = api.tech.registerNode(
   *   "exampleTech",
   *   techDefinition,
   *   { parentId: parentTechId },
   * );
   * ```
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function registerNode(
    techId: TechGridId,
    definition: TechDefinition,
    options: { parentId: TechGridId; preferredPosition?: TechGridPosition },
  ): TechGridPosition;

  /**
   * Return true when a tech entry is locked.
   *
   * @param techId - Tech entry id (string or numeric enum).
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function isLockedById(techId: TechGridId): boolean;

  /**
   * Set locked state for a tech entry by id.
   *
   * @param techId - Tech entry id (string or numeric enum).
   * @param locked - When true, the tech cannot be purchased.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function setLockedById(techId: TechGridId, locked: boolean): void;

  /**
   * Return true when a tech entry has been researched.
   *
   * @param techId - Tech entry id (string or numeric enum).
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function isResearchedById(techId: TechGridId): boolean;

  /** Conservatory unlock wiring for built-in tech nodes. */
  export namespace conservatory {
    /**
     * Append structure or item unlocks to a conservatory tech node.
     *
     * @param techId - Built-in or custom tech id.
     * @param unlocks - Optional structure and item ids to unlock.
     *
     * @example
     * ```ts
     * api.tech.conservatory.appendUnlock(sandkit.enums.Tech.SignalDevices, {
     *   structures: ["exampleSensor"],
     * });
     * ```
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    export function appendUnlock(techId: TechGridId, unlocks: ConservatoryUnlocks): void;
  }

  /**
   * Tech grid node id.
   * Built-in {@link TechEnum} values autocomplete; custom string ids and tagged handles are allowed.
   */
  export type TechGridId = TechEnum | LooseString<never> | TaggedNumber<"tech">;

  /** Tech definition shape. */
  export interface TechDefinition {
    /** Plain display name (when not using {@link nameKey}). */
    name?: string;
    /** Display name translation key. */
    nameKey?: string;
    /** Plain description (when not using {@link descriptionKey}). */
    description?: string;
    /** Description translation key. */
    descriptionKey?: string;
    /**
     * Research cost.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    cost?: number;
    /** Currency used for {@link cost} (for example `"gold"`). */
    currencyType?: string;
    /** Tech tree branch id (often copied from the parent node). */
    branch?: string;
    /** Content unlocked when this tech is researched. */
    unlocks?: {
      structures?: readonly string[];
      items?: readonly string[];
    };
    /** Prerequisite tech ids. */
    requires?: readonly string[];
    [key: string]: unknown;
  }

  /** Position on the tech grid. */
  export interface TechGridPosition {
    x: number;
    y: number;
  }

  /** Unlock payload for {@link conservatory.appendUnlock}. */
  export interface ConservatoryUnlocks {
    /** Structure ids to unlock. */
    structures?: readonly string[];
    /** Item ids to unlock. */
    items?: readonly string[];
  }
}

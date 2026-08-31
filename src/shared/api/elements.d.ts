import type { ElementType as ElementTypeEnum } from "../../sandkit/enums/index";
import type { CellCoordinates, Vector2 } from "../../shared/player";
import type { CellId, LooseString, TaggedNumber } from "../nominal";

/**
 * Shared `sandkit.api.elements` base — element reads and definitions.
 *
 * Workers add direct mutation helpers on top of this shape. Main thread adds
 * deferred grid mutations and registration APIs.
 *
 * @internal Base namespace reused by main and worker declarations.
 */
export namespace elements {
  /**
   * Numeric element type handle.
   * Built-in {@link ElementTypeEnum} values autocomplete; {@link getTypeById} returns a tagged handle.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export type ElementType = ElementTypeEnum | TaggedNumber<"elementType">;

  /**
   * Mod or built-in element string id.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export type ElementId = LooseString<never>;

  /**
   * Type handle or string id accepted by lookup helpers.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export type ElementRef = ElementType | ElementId;

  /**
   * Physical behaviour category for an element.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export enum MatterType {
    Solid = 1,
    Liquid = 2,
    Particle = 3,
    Gas = 4,
    Static = 5,
    Slushy = 6,
    Wisp = 7,
    Powder = 8,
  }

  /**
   * Mod-registered element definition snapshot.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export type ElementDefinition = {
    id: string,
    nameKey: string,
    defaultDataFields?: { [key: string]: number },
    colors: {
      variantFromDataField1?: {
        rangeMin?: number,
        rangeMax?: number,
        invert?: boolean,
        useGradient?: boolean,
      },
      variants: [number, number, number][],
    },
    density: number,
    matterType: MatterType,
    /** When true, the grabber can pick up this element. */
    isGrabbable?: boolean,
    /** When true, conveyors can move this element. */
    isTransportable?: boolean,
    getExtraProps?: () => { data: Record<PropertyKey, any> }
  };

  /**
   * Options for {@link createAtCell}, replace, and related create helpers.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export interface ElementCreateOptions {
    /** Initial element data bag. */
    data?: Record<string, unknown>;
    /** Override element density. */
    density?: number;
    /**
     * Set both max and remaining duration in simulation ticks.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
     */
    durationTicks?: number;
    /**
     * @deprecated Use {@link durationTicks} instead.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    duration?: number;
    /** Override free-fall state on spawn. */
    isFreeFalling?: boolean;
    /** Override default data fields 1–4. */
    dataFields?: {
      field1?: number;
      field2?: number;
      field3?: number;
      field4?: number;
    };
    /** Spawn as a particle with the given velocity. */
    particle?: {
      velocity: Vector2;
    };
    /** Skip collector accounting when placing the element. */
    skipCollectorCheck?: boolean;
  }

  /**
   * Options for element removal helpers.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mutations-heading)
   */
  export interface ElementRemovalOptions {
    /** Skip collector accounting when removing the element. */
    skipCollectorCheck?: boolean;
  }

  /**
   * Return the mod string id for a numeric element type.
   *
   * @param elementType - Numeric element type.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getIdByType(elementType: ElementType): ElementId;

  /**
   * Resolve a mod element string id to a type handle.
   *
   * @param elementId - Mod-registered element id.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getTypeById(elementId: ElementId): ElementType;

  /**
   * @deprecated Use {@link getTypeById} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getTypeFromId(elementId: ElementId): ElementType;

  /**
   * Look up the definition for a type handle.
   *
   * @param elementType - Numeric element type.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getDefinitionByType(elementType: ElementType): ElementDefinition | undefined;

  /**
   * Return the raw element type at a cell (may differ from resolved type).
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getTypeAtCell(...args: CellCoordinates): ElementType | null;

  /**
   * Return the resolved element type after overlays and particles.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null;

  /**
   * Return the resolved element type from a packed cell id.
   *
   * @param cellId - Packed cell id from {@link world.getCellIdAtCell}.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getResolvedTypeFromCellId(cellId: CellId): ElementType | null;

  /**
   * Return element index, particle flag, and ids at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getInfoAtCell(...args: CellCoordinates): { elementType: ElementType; isParticle: boolean; cellId: CellId; elementIndex: number; } | null;

  /**
   * Return the matter category at a cell, or null when empty.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getMatterTypeAtCell(...args: CellCoordinates): MatterType | null;

  /**
   * Return true when the cell holds the given element type or id.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param elementTypeOrId - Numeric type or string id.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function isTypeAtCell(...args: [...CellCoordinates, elementTypeOrId: ElementRef]): boolean;

  /**
   * Return true when the element at the cell is falling.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function isFreeFallingAtCell(...args: CellCoordinates): boolean;

  /**
   * Return per-cell velocity for moving elements.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getVelocityAtCell(...args: CellCoordinates): { x: number; y: number; } | null;

  /**
   * Read element data field 1–4 at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param fieldNumber - Data field index (1–4).
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getDataFieldAtCell(...args: [...CellCoordinates, fieldNumber: 1 | 2 | 3 | 4]): number | null;
}

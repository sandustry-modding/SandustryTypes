import type { ElementType as ElementTypeEnum } from "../../sandkit/enums/index";
import type { CellCoordinates, Vector2 } from "../geometry";
import type { CellId, LooseString, TaggedNumber } from "../nominal";
import type { JsonObjectV1 } from "../jsonvalue";

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
   */
  export type ElementType = ElementTypeEnum | TaggedNumber<"elementType">;

  /**
   * Mod or built-in element string id.
   *
   */
  export type ElementId = LooseString<never>;

  /**
   * Type handle or string id accepted by lookup helpers.
   *
   */
  export type ElementRef = ElementType | ElementId;

  /**
   * Physical behaviour category for an element.
   *
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

  /** Palette entry: RGB, or RGBA when alpha is set. */
  export type ElementColorVariant =
    | readonly [r: number, g: number, b: number]
    | readonly [r: number, g: number, b: number, a: number];

  /** Tooltip metadata shared by structure and custom interaction kinds. */
  export type InteractionStructureMetadata = {
    /** i18n key for custom interaction label text. */
    textKey?: string;
    /** Hide the label when a data field matches a value. */
    crossedOutWhen?: { dataField: number; equals: number };
    /** Show the label only when a data field matches a value. */
    visibleWhen?: { dataField: number; equals: number };
    /** Require the text key to exist in the active locale. */
    onlyWhenTranslated?: boolean;
  };

  /** Interaction that destroys specific items. */
  export type InteractionDestroyer = {
    kind: "destroyer";
    /** Item ids removed by this interaction (for example `"drill"`). */
    items: readonly string[];
  };

  /** Interaction that affects specific structures. */
  export type InteractionStructure = InteractionStructureMetadata & {
    kind: "structure";
    /** Structure ids shown in the interaction tooltip. */
    structures: readonly string[];
  };

  /** Interaction that affects specific entities. */
  export type InteractionEntity = {
    kind: "entity";
    /** Entity type ids referenced by the interaction. */
    entities: readonly string[];
  };

  /** Interaction that marks the element as flammable. */
  export type InteractionFlammable = { kind: "flammable" };
  /** Interaction that marks the element as meltable. */
  export type InteractionMeltable = { kind: "meltable" };
  /** Interaction that marks the element as freezable. */
  export type InteractionFreezable = { kind: "freezable" };
  /** Interaction handled by custom mod logic and tooltip text. */
  export type InteractionCustom = InteractionStructureMetadata & { kind: "custom" };

  /** Union of element interaction kinds for tool and structure logic. */
  export type Interaction =
    | InteractionDestroyer
    | InteractionStructure
    | InteractionEntity
    | InteractionFlammable
    | InteractionMeltable
    | InteractionFreezable
    | InteractionCustom;

  /**
   * Burn product when fire or flame consumes this element.
   * Residue may omit this object and keep only `kind: "flammable"` in {@link interactions}.
   */
  export type ElementFlammable = {
    /** Element id written in place of the burned cell. */
    outputElementId?: string;
    /** Chance that the output is written (0–1). */
    outputChance?: number;
    /** When true, spawned fire copies this cell's remaining duration. */
    fireInheritsDuration?: boolean;
    /** Fire lifetime seconds, or `[min, max]`. */
    duration?: number | readonly number[];
  };

  /** Collector gold for this element. */
  export type ElementCollectable = {
    value?: number;
  };

  /** Contact mix row: this type plus `elementType` becomes `result`. */
  export type ElementMix = {
    elementType?: ElementType;
    result?: ElementType;
  };

  /**
   * Mod-registered element definition snapshot.
   * Pass to `register` / `updateDefinition`.
   * `getDefinitionByType` may omit `id` on builtins.
   */
  export type ElementDefinition = {
    id: string;
    nameKey: string;
    /** Plain display name when not using {@link nameKey}. */
    name?: string;
    /** Lexicon description i18n key. */
    descriptionKey?: string;
    /** Plain lexicon copy when not using {@link descriptionKey}. */
    description?: string;
    defaultDataFields?: { [key: string]: number };
    colors: {
      variantFromDataField1?: {
        rangeMin?: number;
        rangeMax?: number;
        invert?: boolean;
        useGradient?: boolean;
      };
      variants: ElementColorVariant[];
    };
    density: number;
    matterType: MatterType;
    /** UI/meta color as 0xRRGGBB. */
    metaColor?: number;
    /** When true, the grabber can pick up this element. */
    isGrabbable?: boolean;
    /** When true, conveyors can move this element. */
    isTransportable?: boolean;
    /** Hide from some picker and lexicon lists. */
    hidden?: boolean;
    /**
     * Lifetime in **seconds** (copied to `durationMax` / `durationLeft`).
     * Lava is `0.28`; Fire is `1.28`.
     */
    duration?: number;
    /** Random extra lifetime seconds (`min` / `max`). */
    durationRandom?: { min?: number; max?: number };
    /** Sideways motion (Lava uses `0.1`). */
    horizontalSpeed?: number;
    /** When false, the element is omitted from the filter picker. */
    showInFilterPicker?: boolean;
    /** Render / sim material index on live snapshots. */
    materialId?: number;
    /** Burn output when this element is flammable. */
    flammable?: ElementFlammable;
    /** Collector gold. */
    collectable?: ElementCollectable;
    /** Contact mix partners. */
    mixes?: readonly ElementMix[];
    /** Tooltip interaction kinds. */
    interactions?: readonly Interaction[];
    getExtraProps?: () => { data: JsonObjectV1 };
  };

  /**
   * Options for {@link createAtCell}, replace, and related create helpers.
   *
   */
  export type ElementCreateOptions = {
    /** Initial element data bag. */
    data?: Record<string, unknown>;
    /** Override element density. */
    density?: number;
    /**
     * Set both max and remaining duration in simulation ticks.
     *
     */
    durationTicks?: number;
    /**
     * @deprecated Use {@link durationTicks} instead.
     *
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
  };

  /**
   * Options for element removal helpers.
   *
   */
  export type ElementRemovalOptions = {
    /** Skip collector accounting when removing the element. */
    skipCollectorCheck?: boolean;
  };

  /**
   * Return the mod string id for a numeric element type.
   *
   * @param elementType - Numeric element type.
   *
   */
  export function getIdByType(elementType: ElementType): ElementId;

  /**
   * Resolve a mod element string id to a type handle.
   *
   * @param elementId - Mod-registered element id.
   *
   */
  export function getTypeById(elementId: ElementId): ElementType;

  /**
   * @deprecated Use {@link getTypeById} instead.
   *
   */
  export function getTypeFromId(elementId: ElementId): ElementType;

  /**
   * Look up the definition for a type handle.
   *
   * @param elementType - Numeric element type.
   *
   */
  export function getDefinitionByType(elementType: ElementType): ElementDefinition | undefined;

  /**
   * Return the raw element type at a cell (may differ from resolved type).
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function getTypeAtCell(...args: CellCoordinates): ElementType | null;

  /**
   * Return the resolved element type after overlays and particles.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null;

  /**
   * Return the resolved element type from a packed cell id.
   *
   * @param cellId - Packed cell id from {@link world.getCellIdAtCell}.
   *
   */
  export function getResolvedTypeFromCellId(cellId: CellId): ElementType | null;

  /**
   * Return element index, particle flag, and ids at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function getInfoAtCell(
    ...args: CellCoordinates
  ): { elementType: ElementType; isParticle: boolean; cellId: CellId; elementIndex: number } | null;

  /**
   * Return the matter category at a cell, or null when empty.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function getMatterTypeAtCell(...args: CellCoordinates): MatterType | null;

  /**
   * Return true when the cell holds the given element type or id.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param elementTypeOrId - Numeric type or string id.
   *
   */
  export function isTypeAtCell(...args: [...CellCoordinates, elementTypeOrId: ElementRef]): boolean;

  /**
   * Return true when the element at the cell is falling.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function isFreeFallingAtCell(...args: CellCoordinates): boolean;

  /**
   * Return per-cell velocity for moving elements.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function getVelocityAtCell(...args: CellCoordinates): Vector2 | null;

  /**
   * Read element data field 1–4 at a cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param fieldNumber - Data field index (1–4).
   *
   */
  export function getDataFieldAtCell(
    ...args: [...CellCoordinates, fieldNumber: 1 | 2 | 3 | 4]
  ): number | null;
}

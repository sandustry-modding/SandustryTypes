import type { ElementType as ElementTypeEnum } from "../enums/index";
import type { CellCoordinates, Vector2 } from "../../shared/geometry";
import type { CellId, LooseString, TaggedNumber } from "../../shared/nominal";
import type { JsonObjectV1 } from "../../shared/jsonvalue";

/**
 * `sandkit.api.elements` — register elements and read or change cells on the main thread.
 * Main thread only.
 *
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
   * @param cellId - Packed cell id from {@link grid.getCellIdAtCell}.
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

  /**
   * Returns all registered element type ids.
   *
   */
  export function getRegisteredTypes(): ElementType[];

  /**
   * Registers a new element and returns its assigned type id.
   *
   * @param definition - Full element definition to register.
   * @returns Object with the assigned `elementType`.
   *
   */
  export function register(definition: ElementDefinition): { elementType: ElementType };

  /**
   * Updates fields on an existing element definition.
   *
   * @param elementTypeOrId - Numeric type or string id.
   * @param partial - Fields to merge onto the definition.
   *
   * @example
   * ```ts
   * api.elements.updateDefinition("exampleElement", {
   *   showInFilterPicker: false,
   * });
   * ```
   *
   */
  export function updateDefinition(
    elementTypeOrId: ElementRef,
    partial: Partial<ElementDefinition>,
  ): void;

  /**
   * Adds an interaction entry to an element definition.
   *
   * @param elementTypeOrId - Numeric type or string id.
   * @param interaction - Interaction entry to append.
   *
   */
  export function addInteractionInfo(elementTypeOrId: ElementRef, interaction: Interaction): void;

  /**
   * Returns the display name for an element type.
   *
   * @param elementType - Numeric element type.
   *
   */
  export function getNameByType(elementType: ElementType): string;

  /**
   * Finds a free cell inside a structure footprint, or null.
   *
   * @param structureCellX - Structure anchor cell column.
   * @param structureCellY - Structure anchor cell row.
   * @param structureSizeCells - Structure footprint size in cells.
   * @returns Cell coordinates of a free cell, or null when none.
   *
   */
  export function findFreeCellInStructure(
    structureCellX: number,
    structureCellY: number,
    structureSizeCells: number,
  ): Vector2 | null;

  /**
   * Create an element at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param elementTypeOrId - Numeric type or string id.
   * @param options - Optional spawn overrides.
   *
   * @example Main entry
   * ```ts
   * api.elements.createAtCell(cellX, cellY, "water", {
   *   durationTicks: 60,
   * });
   * ```
   *
   * @example options.durationTicks
   * ```ts
   * api.elements.createAtCell(cellX, cellY, "steam", {
   *   durationTicks: 120,
   * });
   * ```
   *
   */
  export function createAtCell(
    ...args: [...CellCoordinates, elementTypeOrId: ElementRef, options?: ElementCreateOptions]
  ): void;

  /**
   * @deprecated Use {@link createAtCell} instead.
   *
   */
  export function createAtCellWhenIdle(
    ...args: [...CellCoordinates, elementTypeOrId: ElementRef, options?: ElementCreateOptions]
  ): void;

  /**
   * Replace the element at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param elementTypeOrId - Numeric type or string id.
   * @param options - Optional spawn overrides.
   *
   */
  export function replaceAtCell(
    ...args: [...CellCoordinates, elementTypeOrId: ElementRef, options?: ElementCreateOptions]
  ): void;

  /**
   * @deprecated Use {@link replaceAtCell} instead.
   *
   */
  export function replaceAtCellWhenIdle(
    ...args: [...CellCoordinates, elementTypeOrId: ElementRef, options?: ElementCreateOptions]
  ): void;

  /**
   * Remove the element at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param options - Optional removal flags.
   *
   */
  export function removeAtCell(
    ...args: [...CellCoordinates, options?: ElementRemovalOptions]
  ): void;

  /**
   * @deprecated Use {@link removeAtCell} instead.
   *
   */
  export function removeAtCellWhenIdle(
    ...args: [...CellCoordinates, options?: ElementRemovalOptions]
  ): void;

  /**
   * Move an element between cells. Main-entry writes are deferred; reads see the old grid.
   *
   * @param fromCellX - Source cell column.
   * @param fromCellY - Source cell row.
   * @param toCellX - Destination cell column.
   * @param toCellY - Destination cell row.
   *
   */
  export function teleportBetweenCells(
    fromCellX: number,
    fromCellY: number,
    toCellX: number,
    toCellY: number,
  ): void;

  /**
   * @deprecated Use {@link teleportBetweenCells} instead.
   *
   */
  export function teleportBetweenCellsWhenIdle(
    fromCellX: number,
    fromCellY: number,
    toCellX: number,
    toCellY: number,
  ): void;

  /**
   * Set particle velocity at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param velocity - New velocity vector.
   *
   * @example
   * ```ts
   * api.elements.setVelocityAtCell(cellX, cellY, { x: 0, y: -120 });
   * ```
   *
   */
  export function setVelocityAtCell(...args: [...CellCoordinates, velocity: Vector2]): void;

  /**
   * @deprecated Use {@link setVelocityAtCell} instead.
   *
   */
  export function setVelocityAtCellWhenIdle(...args: [...CellCoordinates, velocity: Vector2]): void;

  /**
   * Add velocity to a particle at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param velocity - Velocity delta to add.
   * @param maxSpeedCellsPerSecond - Optional speed cap after the addition.
   *
   * @example
   * ```ts
   * api.elements.addParticleVelocityAtCell(
   *   cellX,
   *   cellY,
   *   { x: 4, y: -8 },
   *   120,
   * );
   * ```
   *
   */
  export function addParticleVelocityAtCell(
    ...args: [...CellCoordinates, velocity: Vector2, maxSpeedCellsPerSecond?: number]
  ): void;

  /**
   * @deprecated Use {@link addParticleVelocityAtCell} instead.
   *
   */
  export function addParticleVelocityAtCellWhenIdle(
    ...args: [...CellCoordinates, velocity: Vector2, maxSpeedCellsPerSecond?: number]
  ): void;

  /**
   * Convert a cell element to a particle. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param velocity - Initial particle velocity.
   *
   * @example
   * ```ts
   * api.elements.convertToParticleAtCell(
   *   cellX,
   *   cellY,
   *   { x: 0, y: -120 },
   * );
   * ```
   *
   */
  export function convertToParticleAtCell(...args: [...CellCoordinates, velocity: Vector2]): void;

  /**
   * @deprecated Use {@link convertToParticleAtCell} instead.
   *
   */
  export function convertToParticleAtCellWhenIdle(
    ...args: [...CellCoordinates, velocity: Vector2]
  ): void;

  /**
   * Convert a particle back to a solid element. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function convertFromParticleAtCell(...args: CellCoordinates): void;

  /**
   * @deprecated Use {@link convertFromParticleAtCell} instead.
   *
   */
  export function convertFromParticleAtCellWhenIdle(...args: CellCoordinates): void;

  /**
   * Set a data field on the element at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param fieldNumber - Data field index (1–4).
   * @param value - New field value.
   *
   */
  export function setDataFieldAtCell(
    ...args: [...CellCoordinates, fieldNumber: 1 | 2 | 3 | 4, value: number]
  ): void;

  /**
   * @deprecated Use {@link setDataFieldAtCell} instead.
   *
   */
  export function setDataFieldAtCellWhenIdle(
    ...args: [...CellCoordinates, fieldNumber: 1 | 2 | 3 | 4, value: number]
  ): void;

  /**
   * Refresh the rendered color at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function refreshColorAtCell(...args: CellCoordinates): void;

  /**
   * @deprecated Use {@link refreshColorAtCell} instead.
   *
   */
  export function refreshColorAtCellWhenIdle(...args: CellCoordinates): void;

  /**
   * Set the physics skip mode at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param physicsState - Physics skip flags for the element.
   *
   */
  export function setPhysicsAtCell(...args: [...CellCoordinates, physicsState: number]): void;

  /**
   * @deprecated Use {@link setPhysicsAtCell} instead.
   *
   */
  export function setPhysicsAtCellWhenIdle(
    ...args: [...CellCoordinates, physicsState: number]
  ): void;

  /**
   * Set element duration at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param durationTicks - Duration in simulation ticks.
   * @param options - When `updateMax` is true, also update max duration.
   *
   * @example Main entry
   * ```ts
   * api.elements.setDurationAtCell(
   *   cellX,
   *   cellY,
   *   120,
   *   { updateMax: true },
   * );
   * ```
   *
   */
  export function setDurationAtCell(
    ...args: [...CellCoordinates, durationTicks: number, options?: { updateMax?: boolean }]
  ): void;

  /**
   * @deprecated Use {@link setDurationAtCell} instead.
   *
   */
  export function setDurationAtCellWhenIdle(
    ...args: [...CellCoordinates, durationTicks: number, options?: { updateMax?: boolean }]
  ): void;
}

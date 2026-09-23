/**
 * Structure registration, queries, recipes, and idle mutations.
 *
 * Available as `sandkit.api.structures`.
 *
 * @module
 */
import type { CellCoordinates, Size2, Vector2 } from "../../shared/geometry";
import type { LooseString, TaggedNumber } from "../../shared/nominal";
import type { StructureType as StructureTypeEnum } from "../enums/index";
// Aliased: `structures` declares a nested `processing` namespace that would
// otherwise shadow this import.
import { processing as processingApi } from "./processing";
import type { elements } from "./elements";

export namespace structures {
  /**
   * Call callback for each structure of the given type.
   *
   * @example Main entry
   * ```ts
   * api.structures.forEachOfType("exampleStructure", (structure) => {
   *   api.structures.updateData(structure, { active: true });
   * });
   * ```
   */
  export function forEachOfType(
    structureTypeOrId: StructureRef,
    callback: (structure: Structure) => void,
  ): void;

  /** Return the structure at a cell, or null. */
  export function getAtCell(...args: CellCoordinates): Structure | null;

  /** Return the definition for a structure type. */
  export function getDefinitionByType(
    structureType: StructureRef,
  ): StructureDefinition | undefined;

  /** Resolve a string structure id to its type. */
  export function getTypeById(structureId: StructureId): StructureType;

  /** Return true when a built structure exists at the cell. */
  export function hasBuiltAtCell(...args: CellCoordinates): boolean;

  /** Return true when a structure matches a string id. */
  export function isType(structure: Structure | null, structureId: StructureId): boolean;

  /** Return true when the cell structure matches a string id. */
  export function isTypeAtCell(...args: [...CellCoordinates, structureId: StructureId]): boolean;

  /** Set spritesheet index on a structure instance. */
  export function setSpritesheetIndex(structure: Structure, index: number): void;

  /** Set spritesheet index on the structure at a cell. */
  export function setSpritesheetIndexAtCell(...args: [...CellCoordinates, index: number]): void;

  /**
   * Map a value through thresholds to a spritesheet index on a structure.
   *
   * @example
   * ```ts
   * api.structures.setSpritesheetIndexByValue(
   *   structure,
   *   pressure,
   *   [0, 25, 50, 75],
   * );
   * ```
   */
  export function setSpritesheetIndexByValue(
    structure: Structure,
    value: number,
    thresholds: number[],
  ): void;

  /**
   * Map a value through thresholds to a spritesheet index at a cell.
   *
   * @example
   * ```ts
   * api.structures.setSpritesheetIndexByValueAtCell(
   *   cellX,
   *   cellY,
   *   pressure,
   *   [0, 25, 50, 75],
   * );
   * ```
   */
  export function setSpritesheetIndexByValueAtCell(
    ...args: [...CellCoordinates, value: number, thresholds: number[]]
  ): void;

  /**
   * Push structure state updates to the game and workers.
   *
   * @example Main entry
   * ```ts
   * api.structures.update(structure, {
   *   propagateToWorkers: true,
   * });
   * ```
   */
  export function update(structure: Structure, options?: { propagateToWorkers?: boolean }): void;

  /**
   * Merge partial data onto a structure instance.
   *
   * @example Main entry
   * ```ts
   * api.structures.updateData(
   *   structure,
   *   { mode: "allow" },
   *   { propagateToWorkers: true },
   * );
   * ```
   */
  export function updateData(
    structure: Structure,
    partial: Partial<StructureData>,
    options?: { propagateToWorkers?: boolean },
  ): void;

  /**
   * @deprecated Use {@link getTypeById} instead.
   *
   */
  export function getTypeFromId(structureId: StructureId): StructureType;

  /**
   * @deprecated Use {@link updateData} instead.
   *
   */
  export function setData(
    structure: Structure,
    partial: Partial<StructureData>,
    options?: { propagateToWorkers?: boolean },
  ): void;

  /**
   * Register a new structure definition.
   *
   * @param definition - Full structure definition.
   * @param options - When `useRawShape` is true, keep the shape matrix as-is.
   *
   * @example
   * ```ts
   * api.structures.register({
   *   id: "exampleJunction",
   *   name: "Example Junction",
   *   nameKey: "structures|exampleJunction|name",
   *   description: "Links two fixed-span endpoints.",
   *   descriptionKey: "structures|exampleJunction|description",
   *   categoryKey: "logistics",
   *   buildModes: [{
   *     type: "line",
   *     directions: ["horizontal", "vertical"],
   *     spanTiles: 4,
   *   }],
   *   linkedClearance: "allOrNothing",
   *   tooltipHover,
   *   variants: [{
   *     id: "exampleJunction",
   *     angles: [-180, -90, 0, 90, 180],
   *   }],
   *   render: {
   *     imageName: "exampleJunction",
   *     size: { width: 16, height: 16 },
   *   },
   * });
   * ```
   *
   */
  export function register(
    definition: SandkitStructureDefinition,
    options?: { useRawShape?: boolean },
  ): void;

  /**
   * Patch fields on an existing structure definition.
   *
   * @param structureTypeOrId - Structure type value or string id.
   * @param partial - Fields to merge onto the definition.
   * @param options - When `useRawShape` is true, keep the shape matrix as-is.
   *
   * @example
   * ```ts
   * api.structures.updateDefinition("exampleJunction", {
   *   buildModes: [{
   *     type: "line",
   *     directions: ["horizontal", "vertical"],
   *     spanTiles: 6,
   *   }],
   * });
   * ```
   *
   */
  export function updateDefinition(
    structureTypeOrId: StructureRef,
    partial: Partial<SandkitStructureDefinition>,
    options?: { useRawShape?: boolean },
  ): void;

  /**
   * Add a rotated variant to a base structure type.
   *
   * @param baseStructureTypeOrId - Base structure type or id.
   * @param variant - Variant id and supported rotation angles.
   * @param options - Optional build-mode wiring for the variant.
   *
   * @example
   * ```ts
   * api.structures.registerVariant(
   *   "exampleStructure",
   *   {
   *     id: "exampleStructureVertical",
   *     angles: [-90, 90],
   *   },
   *   {
   *     addBuildMode: {
   *       type: "line",
   *       directions: ["vertical"],
   *       spanTiles: 4,
   *     },
   *   },
   * );
   * ```
   *
   */
  export function registerVariant(
    baseStructureTypeOrId: StructureRef,
    variant: { id: StructureRef; angles: number[] },
    options?: { addBuildMode?: StructureBuildMode },
  ): void;

  /**
   * @deprecated Use {@link registerVariant} instead.
   *
   */
  export function addVariant(
    baseStructureTypeOrId: StructureRef,
    variant: { id: StructureRef; angles: number[] },
    options?: { addBuildMode?: StructureBuildMode },
  ): void;

  /**
   * Register placement rules for a structure.
   *
   * @param definition - Hotbar placement field configuration.
   *
   * @example
   * ```ts
   * api.structures.registerPlacementConfig({
   *   structureId: "exampleStructure",
   *   fields: [
   *     {
   *       type: "integer",
   *       id: "channel",
   *       label: "Channel",
   *       default: 1,
   *       min: 1,
   *       max: 8,
   *     },
   *     {
   *       type: "choice",
   *       id: "mode",
   *       labelKey: "structures|exampleStructure|mode",
   *       default: "input",
   *       options: [
   *         { value: "input", label: "Input" },
   *         { value: "output", labelKey: "structures|exampleStructure|output" },
   *       ],
   *     },
   *   ],
   * });
   * ```
   *
   */
  export function registerPlacementConfig(definition: PlacementConfigDefinition): void;

  /**
   * Return structure types available for building.
   *
   */
  export function getAvailableTypes(): Set<StructureRef>;

  /**
   * @deprecated Use {@link getAvailableTypes} instead.
   *
   */
  export function getUnlockedTypes(): Set<StructureRef>;

  /**
   * Return true when the player blocks building at the cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function isBlockedByPlayerAtCell(...args: CellCoordinates): boolean;

  /**
   * Return true when a launcher structure is at the cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function isLauncherAtCell(...args: CellCoordinates): boolean;

  /**
   * Return structure lock state for a type.
   *
   * Official docs list {@link isUnlockedByType} as a deprecated alias of this
   * function (same implementation and return value; names differ only).
   *
   * @param structureType - Structure type value or string id.
   *
   */
  export function isLockedByType(structureType: StructureRef): boolean;

  /**
   * @deprecated Use {@link isLockedByType} instead. Same function as {@link isLockedByType}; return value is not inverted.
   *
   */
  export function isUnlockedByType(structureType: StructureRef): boolean;

  /**
   * Map a numeric value through thresholds to a spritesheet index.
   *
   * @param value - Numeric value to map.
   * @param thresholds - Ascending threshold values.
   * @returns Spritesheet frame index.
   *
   * @example
   * ```ts
   * const index = api.structures.mapValueToSpritesheetIndex(
   *   pressure,
   *   [0, 25, 50, 75],
   * );
   * ```
   *
   */
  export function mapValueToSpritesheetIndex(value: number, thresholds: number[]): number;

  /**
   * Build a structure at a cell. Main-thread writes are deferred.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param structureTypeOrId - Structure type or string id to build.
   * @param options - Optional build overrides.
   *
   */
  export function buildAtCell(
    ...args: [...CellCoordinates, structureTypeOrId: StructureRef, options?: StructureBuildOptions]
  ): void;

  /**
   * @deprecated Use {@link buildAtCell} instead.
   *
   */
  export function buildAtCellWhenIdle(
    ...args: [...CellCoordinates, structureTypeOrId: StructureRef, options?: StructureBuildOptions]
  ): void;

  /**
   * Remove a structure at a cell. Main-thread writes are deferred.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param options - Optional removal flags.
   *
   */
  export function removeAtCell(
    ...args: [...CellCoordinates, options?: StructureRemovalOptions]
  ): void;

  /**
   * @deprecated Use {@link removeAtCell} instead.
   *
   */
  export function removeAtCellWhenIdle(
    ...args: [...CellCoordinates, options?: StructureRemovalOptions]
  ): void;

  /**
   * Remove structures between two cells. Main-thread writes are deferred.
   *
   * @param startCellX - Start cell column.
   * @param startCellY - Start cell row.
   * @param endCellX - End cell column.
   * @param endCellY - End cell row.
   * @param options - Optional bulk-removal flags.
   *
   */
  export function removeBetweenCells(
    startCellX: number,
    startCellY: number,
    endCellX: number,
    endCellY: number,
    options?: StructureBulkRemovalOptions,
  ): void;

  /**
   * @deprecated Use {@link removeBetweenCells} instead.
   *
   */
  export function removeBetweenCellsWhenIdle(
    startCellX: number,
    startCellY: number,
    endCellX: number,
    endCellY: number,
    options?: StructureBulkRemovalOptions,
  ): void;

  /**
   * Remove structures at many cells. Main-thread writes are deferred.
   *
   * @param positions - Cell positions to clear.
   * @param options - Optional bulk-removal flags.
   *
   * @example
   * ```ts
   * api.structures.removeAtCells([
   *   { x: firstCellX, y: firstCellY },
   *   { x: secondCellX, y: secondCellY },
   * ]);
   * ```
   *
   */
  export function removeAtCells(positions: Vector2[], options?: StructureBulkRemovalOptions): void;

  /**
   * @deprecated Use {@link removeAtCells} instead.
   *
   */
  export function removeAtCellsWhenIdle(
    positions: Vector2[],
    options?: StructureBulkRemovalOptions,
  ): void;

  /**
   * @deprecated Use {@link processing.register} instead.
   *
   */
  export function addProcessor(
    structureId: StructureRef,
    definition: StructureProcessorDefinitionV1,
  ): void;

  /** Structure recipe registration by machine kind. */
  export namespace recipes {
    /**
     * Register a planter box recipe.
     *
     * @param id - Machine recipe slot id.
     * @param definition - Grower recipe definition.
     *
     * @example
     * ```ts
     * api.structures.recipes.register("kineticPress", {
     *   input: "sand",
     *   outputs: [
     *     { elementType: "compressedSand", chance: 1 },
     *   ],
     *   minimumDownwardVelocityCellsPerSecond: 20,
     * });
     * ```
     *
     */
    export function register(id: "planterBox", definition: PlanterBoxRecipeDefinitionV1): void;

    /**
     * Register a shaker recipe.
     *
     * @param id - Machine recipe slot id.
     * @param definition - Shaker recipe definition.
     *
     */
    export function register(id: "shaker", definition: ShakerRecipeDefinitionV1): void;

    /**
     * Register a kinetic press recipe.
     *
     * @param id - Machine recipe slot id.
     * @param definition - Kinetic press recipe definition.
     *
     */
    export function register(id: "kineticPress", definition: KineticPressRecipeDefinitionV1): void;

    /**
     * Register a weighted refinery machine recipe.
     *
     * @param id - Refinery machine id.
     * @param definition - Weighted input/output recipe.
     *
     */
    export function register(
      id: "condenser" | "steamDryer" | "synthesizer" | "snowmaker" | "smelter",
      definition: WeightedRefineryRecipeDefinitionV1,
    ): void;
  }

  /** Per-structure processing enablement and registration. */
  export namespace processing {
    /**
     * Return true when processing is enabled at a cell.
     *
     * @param cellX - Grid column of the target cell.
     * @param cellY - Grid row of the target cell.
     *
     */
    export function isEnabledAtCell(...args: CellCoordinates): boolean;

    /**
     * @deprecated Use {@link isEnabledAtCell} instead.
     *
     */
    export function isEnabledAt(...args: CellCoordinates): boolean;

    /**
     * Register a custom processing definition by id.
     *
     * @param id - Unique processing registration id.
     * @param definition - Structure type, interval, and callback.
     *
     * @example
     * ```ts
     * api.structures.processing.register(
     *   "exampleStructure:process",
     *   {
     *     structureType: "exampleStructure",
     *     intervalMs: 250,
     *     process: (structure, context) => {
     *       const empty = context.isCellEmptyAtCell(
     *         structure.x,
     *         structure.y,
     *       );
     *     },
     *   },
     * );
     * ```
     *
     */
    export function register(id: StructureId, definition: StructureProcessingDefinitionV1): void;

    /**
     * Enable or disable processing at a cell.
     *
     * @param cellX - Grid column of the target cell.
     * @param cellY - Grid row of the target cell.
     * @param enabled - Desired processing enabled state.
     * @returns True when the enabled state changed.
     *
     */
    export function setEnabledAtCell(...args: [...CellCoordinates, enabled: boolean]): boolean;

    /**
     * @deprecated Use {@link setEnabledAtCell} instead.
     *
     */
    export function setEnabledAt(...args: [...CellCoordinates, enabled: boolean]): boolean;
  }

  /** Build mode entry for a structure definition. */
  export type StructureBuildMode = {
    type: string;
    directions?: string[];
    /**
     * Fixed span length in tiles for line-linked structures.
     *
     */
    spanTiles?: number;
  };

  /** Rotated variant entry for a structure definition. */
  export type StructureVariant = {
    id: StructureRef;
    angles: number[];
  };

  /**
   * Custom hover tooltip driven by structure `data` fields.
   *
   * @example Official example
   * ```ts
   * tooltipHover: {
   *   type: "custom",
   *   dataFieldMessage: {
   *     message: "Mode {mode}; channel {channel}.",
   *     messageKey: "mods|example|machineTooltip",
   *     fields: [
   *       {
   *         param: "mode",
   *         field: "mode",
   *         valueLabels: { input: "Receiving", output: "Sending" },
   *         valueKeys: {
   *           input: "mods|example|receiving",
   *           output: "mods|example|sending",
   *         },
   *       },
   *       { param: "channel", field: "channel", fallback: 1, round: true },
   *     ],
   *   },
   * }
   * ```
   *
   */
  export type StructureTooltipHover = {
    type: "custom";
    dataFieldMessage: {
      message?: string;
      messageKey?: string;
      fields: readonly StructureTooltipHoverField[];
    };
  };

  /** One interpolated field in a {@link StructureTooltipHover} message. */
  export type StructureTooltipHoverField = {
    param: string;
    field: string;
    fallback?: string | number;
    round?: boolean;
    valueLabels?: Record<string, string>;
    valueKeys?: Record<string, string>;
  };

  /** Spritesheet animation on a structure render block. */
  export type StructureSpritesheet = {
    frameSize: Size2;
    frames: number;
    intervalMs: number;
    /** When set, frame row follows this structure `data` field. */
    rowDataField?: string;
  };

  /** Hotbar / build-menu UI sprite settings. */
  export type StructureRenderUi = {
    imageName?: string;
    size?: Size2;
    offset?: Vector2;
    outline?: boolean;
    width?: string;
    height?: string;
    clipToBounds?: boolean;
  };

  /** Render settings for a structure definition. */
  export type StructureRender = {
    imageName?: string;
    size?: Size2;
    offset?: Vector2;
    z?: number;
    ambienceGroup?: string;
    ui?: StructureRenderUi;
    spritesheet?: StructureSpritesheet;
  };

  /**
   * Registered structure definition snapshot (built-in or mod).
   *
   */
  export type StructureDefinition = {
    id: StructureId;
    [key: string]: unknown;
  };

  /** Per-structure custom data bag. */
  export type StructureData = {
    elementId?: string | null;
    elementType?: TaggedNumber<"elementType"> | null;
    storedEnergy?: number;
    maxEnergy?: number;
    [key: string]: unknown;
  };

  /** Live structure instance in the world grid. */
  export type Structure = {
    x: number;
    y: number;
    type?: StructureRef;
    queued?: boolean;
    filter?: { elementType?: TaggedNumber<"elementType">; mode?: string };
    trapped?: boolean;
    data?: StructureData;
    color?: string;
    frame?: boolean;
    [key: string]: unknown;
  };

  /** Numeric structure type handle. Built-in enum values autocomplete. */
  export type StructureType = StructureTypeEnum | TaggedNumber<"structureType">;
  /** Mod or built-in structure string id. */
  export type StructureId = LooseString<never>;
  /** Type handle or string id accepted by lookup helpers. */
  export type StructureRef = StructureType | StructureId;

  /** Full structure definition registered with the game. */
  export type SandkitStructureDefinition = StructureDefinition & {
    name?: string;
    nameKey?: string;
    description?: string;
    descriptionKey?: string;
    categoryKey?: string;
    order?: number;
    buildModes?: StructureBuildMode[];
    shape?: number[][];
    variants?: StructureVariant[];
    render?: StructureRender;
    defaultData?: Partial<StructureData>;
    /**
     * Linked placement clearance mode (for example `"allOrNothing"`).
     *
     */
    linkedClearance?: string;
    /**
     * Custom hover tooltip over the built structure.
     *
     */
    tooltipHover?: StructureTooltipHover;
    /** Reject placement when the footprint is blocked. */
    rejectWhenBlocked?: boolean;
    /** Show in the build menu without research unlock. */
    alwaysUnlocked?: boolean;
    /** Values interpolated into the structure description string. */
    descriptionParams?: Record<string, string | number>;
    [key: string]: unknown;
  };

  /** Options passed to {@link buildAtCell}. */
  export type StructureBuildOptions = {
    [key: string]: unknown;
  };

  /** Options passed to {@link removeAtCell}. */
  export type StructureRemovalOptions = {
    /** Also remove underlying terrain cells in the footprint. */
    removeCells?: boolean;
    /** Skip visual teardown effects. */
    skipVisuals?: boolean;
  };

  /** Options passed to bulk structure removal helpers. */
  export type StructureBulkRemovalOptions = {
    removeCells?: boolean;
    skipVisuals?: boolean;
    /** When set, only remove structures at these positions. */
    preserveUnselectable?: boolean;
    onlyPositions?: Vector2[];
  };

  /**
   * Context passed to structure processing callbacks.
   *
   */
  export type StructureProcessingContext = {
    /**
     * Return the resolved element type at a cell, or null.
     *
     */
    getResolvedTypeAtCell(...args: CellCoordinates): elements.ElementType | null;

    /**
     * @deprecated Use {@link getResolvedTypeAtCell} instead.
     *
     */
    getElementTypeAtCell(...args: CellCoordinates): elements.ElementType | null;

    /**
     * Return true when the cell has no element or terrain.
     *
     */
    isCellEmptyAtCell(...args: CellCoordinates): boolean;

    /**
     * @deprecated Use {@link isCellEmptyAtCell} instead.
     *
     */
    isCellEmpty(...args: CellCoordinates): boolean;

    /**
     * Commit batched grid mutations from the processing callback.
     *
     * @param mutations - Mutation writer payload accepted by the runtime.
     *
     */
    commit(mutations: unknown): void;
  };

  /**
   * @deprecated Use {@link StructureProcessingDefinitionV1} with {@link processing.register} instead.
   *
   */
  export type StructureProcessorDefinitionV1 = {
    /** Tick interval in milliseconds. Must be > 0. */
    intervalMs: number;
    /** Synchronous callback invoked for each structure instance. */
    process: (structure: Structure, context: StructureProcessingContext) => void;
  };

  /** Placement hotbar field definition. */
  export type PlacementConfigField = PlacementConfigIntegerField | PlacementConfigChoiceField;

  /** Integer placement field with optional bounds. */
  export type PlacementConfigIntegerField = {
    type: "integer";
    id: string;
    labelKey: string;
    min?: number;
    max?: number;
    default?: number;
  };

  /** Choice placement field with labeled options. */
  export type PlacementConfigChoiceField = {
    type: "choice";
    id: string;
    labelKey: string;
    options: readonly {
      value: string;
      labelKey: string;
    }[];
  };

  /** Placement rule definition for a structure type. */
  export type PlacementConfigDefinition = {
    structureId: StructureId;
    fields: PlacementConfigField[];
  };

  /** Planter box recipe definition shape. */
  export type PlanterBoxRecipeDefinitionV1 = processingApi.PlanterBoxRecipeDefinitionV1;
  /** Shaker recipe definition shape. */
  export type ShakerRecipeDefinitionV1 = processingApi.ShakerRecipeDefinitionV1;
  /** Kinetic press recipe definition shape. */
  export type KineticPressRecipeDefinitionV1 = processingApi.KineticPressRecipeDefinitionV1;

  /** Weighted refinery recipe definition shape. */
  export type WeightedRefineryRecipeDefinitionV1 = {
    input: processingApi.WeightedRecipeOutput["elementType"];
    outputs: processingApi.WeightedRecipeOutput[];
  };

  /** Custom structure processing definition shape. */
  export type StructureProcessingDefinitionV1 = {
    structureType: StructureRef;
    intervalMs: number;
    process: (structure: Structure, context: StructureProcessingContext) => void;
  };
}

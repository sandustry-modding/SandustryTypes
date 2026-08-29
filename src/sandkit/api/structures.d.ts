/**
 * Structure registration, queries, recipes, and idle mutations.
 *
 * Available as `sandkit.api.structures`.
 *
 * @module
 */
import { CellCoordinates, Vector2 } from "../../shared/player";
import { shared } from "../../shared";
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
  export import forEachOfType = shared.api.structures.forEachOfType;
  /** Return the structure at a cell, or null. */
  export import getAtCell = shared.api.structures.getAtCell;
  /** Return the definition for a structure type. */
  export import getDefinitionByType = shared.api.structures.getDefinitionByType;
  /** Resolve a string structure id to its type. */
  export import getTypeById = shared.api.structures.getTypeById;
  /** Return true when a built structure exists at the cell. */
  export import hasBuiltAtCell = shared.api.structures.hasBuiltAtCell;
  /** Return true when a structure matches a string id. */
  export import isType = shared.api.structures.isType;
  /** Return true when the cell structure matches a string id. */
  export import isTypeAtCell = shared.api.structures.isTypeAtCell;
  /** Set spritesheet index on a structure instance. */
  export import setSpritesheetIndex = shared.api.structures.setSpritesheetIndex;
  /** Set spritesheet index on the structure at a cell. */
  export import setSpritesheetIndexAtCell = shared.api.structures.setSpritesheetIndexAtCell;
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
  export import setSpritesheetIndexByValue = shared.api.structures.setSpritesheetIndexByValue;
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
  export import setSpritesheetIndexByValueAtCell = shared.api.structures.setSpritesheetIndexByValueAtCell;
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
  export import update = shared.api.structures.update;
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
  export import updateData = shared.api.structures.updateData;
  /** Structure instance in the world. */
  export import Structure = shared.api.structures.Structure;
  /** Structure type id or enum value. */
  export import StructureType = shared.api.structures.StructureType;
  /** Mod or built-in structure string id. */
  export import StructureId = shared.api.structures.StructureId;
  /** Type handle or string id accepted by lookup helpers. */
  export import StructureRef = shared.api.structures.StructureRef;

  /**
   * @deprecated Use {@link getTypeById} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import getTypeFromId = shared.api.structures.getTypeFromId;

  /**
   * @deprecated Use {@link updateData} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export import setData = shared.api.structures.setData;

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
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function register(definition: SandkitStructureDefinition, options?: { useRawShape?: boolean; }): void;

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
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function updateDefinition(structureTypeOrId: StructureRef, partial: Partial<SandkitStructureDefinition>, options?: { useRawShape?: boolean; }): void;

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
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function registerVariant(baseStructureTypeOrId: StructureRef, variant: { id: StructureRef; angles: number[]; }, options?: { addBuildMode?: unknown; }): void;

  /**
   * @deprecated Use {@link registerVariant} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function addVariant(baseStructureTypeOrId: StructureRef, variant: { id: StructureRef; angles: number[]; }, options?: { addBuildMode?: unknown; }): void;

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
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function registerPlacementConfig(definition: PlacementConfigDefinition): void;

  /**
   * Return structure types available for building.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getAvailableTypes(): Set<StructureRef>;

  /**
   * @deprecated Use {@link getAvailableTypes} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getUnlockedTypes(): Set<StructureRef>;

  /**
   * Return true when the player blocks building at the cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function isBlockedByPlayerAtCell(...args: CellCoordinates): boolean;

  /**
   * Return true when a launcher structure is at the cell.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
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
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function isLockedByType(structureType: StructureRef): boolean;

  /**
   * @deprecated Use {@link isLockedByType} instead. Same function as {@link isLockedByType}; return value is not inverted.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
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
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
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
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function buildAtCell(...args: [...CellCoordinates, structureTypeOrId: StructureRef, options?: StructureBuildOptions]): void;

  /**
   * @deprecated Use {@link buildAtCell} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function buildAtCellWhenIdle(...args: [...CellCoordinates, structureTypeOrId: StructureRef, options?: StructureBuildOptions]): void;

  /**
   * Remove a structure at a cell. Main-thread writes are deferred.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param options - Optional removal flags.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function removeAtCell(...args: [...CellCoordinates, options?: StructureRemovalOptions]): void;

  /**
   * @deprecated Use {@link removeAtCell} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function removeAtCellWhenIdle(...args: [...CellCoordinates, options?: StructureRemovalOptions]): void;

  /**
   * Remove structures between two cells. Main-thread writes are deferred.
   *
   * @param startCellX - Start cell column.
   * @param startCellY - Start cell row.
   * @param endCellX - End cell column.
   * @param endCellY - End cell row.
   * @param options - Optional bulk-removal flags.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function removeBetweenCells(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void;

  /**
   * @deprecated Use {@link removeBetweenCells} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function removeBetweenCellsWhenIdle(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void;

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
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function removeAtCells(positions: Vector2[], options?: StructureBulkRemovalOptions): void;

  /**
   * @deprecated Use {@link removeAtCells} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function removeAtCellsWhenIdle(positions: Vector2[], options?: StructureBulkRemovalOptions): void;

  /**
   * @deprecated Use {@link processing.register} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function addProcessor(structureId: StructureRef, definition: StructureProcessorDefinitionV1): void;

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
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    export function register(id: 'planterBox', definition: PlanterBoxRecipeDefinitionV1): void;

    /**
     * Register a shaker recipe.
     *
     * @param id - Machine recipe slot id.
     * @param definition - Shaker recipe definition.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    export function register(id: 'shaker', definition: ShakerRecipeDefinitionV1): void;

    /**
     * Register a kinetic press recipe.
     *
     * @param id - Machine recipe slot id.
     * @param definition - Kinetic press recipe definition.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    export function register(id: 'kineticPress', definition: KineticPressRecipeDefinitionV1): void;

    /**
     * Register a weighted refinery machine recipe.
     *
     * @param id - Refinery machine id.
     * @param definition - Weighted input/output recipe.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    export function register(id: 'condenser' | 'steamDryer' | 'synthesizer' | 'snowmaker' | 'smelter', definition: WeightedRefineryRecipeDefinitionV1): void;
  }

  /** Per-structure processing enablement and registration. */
  export namespace processing {
    /** Return true when processing is enabled at a cell. */
    export import isEnabledAtCell = shared.api.structures.processing.isEnabledAtCell;

    /**
     * @deprecated Use {@link isEnabledAtCell} instead.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    export import isEnabledAt = shared.api.structures.processing.isEnabledAt;

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
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
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
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    export function setEnabledAtCell(...args: [...CellCoordinates, enabled: boolean]): boolean;

    /**
     * @deprecated Use {@link setEnabledAtCell} instead.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    export function setEnabledAt(...args: [...CellCoordinates, enabled: boolean]): boolean;
  }

  /** Build mode entry for a structure definition. */
  export interface StructureBuildMode {
    type: string;
    directions?: string[];
    /**
     * Fixed span length in tiles for line-linked structures.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    spanTiles?: number;
  }

  /** Rotated variant entry for a structure definition. */
  export interface StructureVariant {
    id: StructureRef;
    angles: number[];
  }

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
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export interface StructureTooltipHover {
    type: "custom";
    dataFieldMessage: {
      message?: string;
      messageKey?: string;
      fields: readonly StructureTooltipHoverField[];
    };
  }

  /** One interpolated field in a {@link StructureTooltipHover} message. */
  export interface StructureTooltipHoverField {
    param: string;
    field: string;
    fallback?: string | number;
    round?: boolean;
    valueLabels?: Record<string, string>;
    valueKeys?: Record<string, string>;
  }

  /** Spritesheet animation on a structure render block. */
  export interface StructureSpritesheet {
    frameSize: { width: number; height: number };
    frames: number;
    intervalMs: number;
    /** When set, frame row follows this structure `data` field. */
    rowDataField?: string;
  }

  /** Hotbar / build-menu UI sprite settings. */
  export interface StructureRenderUi {
    imageName?: string;
    size?: { width: number; height: number };
    offset?: { x: number; y: number };
    outline?: boolean;
    width?: string;
    height?: string;
    clipToBounds?: boolean;
  }

  /** Render settings for a structure definition. */
  export interface StructureRender {
    imageName?: string;
    size?: { width: number; height: number };
    offset?: { x: number; y: number };
    z?: number;
    ambienceGroup?: string;
    ui?: StructureRenderUi;
    spritesheet?: StructureSpritesheet;
  }

  /** Full structure definition registered with the game. */
  export interface SandkitStructureDefinition {
    id: StructureId;
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
    defaultData?: Record<string, unknown>;
    /**
     * Linked placement clearance mode (for example `"allOrNothing"`).
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    linkedClearance?: string;
    /**
     * Custom hover tooltip over the built structure.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    tooltipHover?: StructureTooltipHover;
    /** Reject placement when the footprint is blocked. */
    rejectWhenBlocked?: boolean;
    /** Show in the build menu without research unlock. */
    alwaysUnlocked?: boolean;
    /** Values interpolated into the structure description string. */
    descriptionParams?: Record<string, string | number>;
    [key: string]: unknown;
  }

  /** Options passed to {@link buildAtCell}. */
  export interface StructureBuildOptions {
    [key: string]: unknown;
  }

  /** Options passed to {@link removeAtCell}. */
  export interface StructureRemovalOptions {
    /** Also remove underlying terrain cells in the footprint. */
    removeCells?: boolean;
    /** Skip visual teardown effects. */
    skipVisuals?: boolean;
  }

  /** Options passed to bulk structure removal helpers. */
  export interface StructureBulkRemovalOptions {
    removeCells?: boolean;
    skipVisuals?: boolean;
    /** When set, only remove structures at these positions. */
    preserveUnselectable?: boolean;
    onlyPositions?: Vector2[];
  }

  /**
   * Context passed to structure processing callbacks.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export interface StructureProcessingContext {
    /**
     * Return the resolved element type at a cell, or null.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    getResolvedTypeAtCell(...args: CellCoordinates): elements.ElementType | null;

    /**
     * @deprecated Use {@link getResolvedTypeAtCell} instead.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    getElementTypeAtCell(...args: CellCoordinates): elements.ElementType | null;

    /**
     * Return true when the cell has no element or terrain.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    isCellEmptyAtCell(...args: CellCoordinates): boolean;

    /**
     * @deprecated Use {@link isCellEmptyAtCell} instead.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    isCellEmpty(...args: CellCoordinates): boolean;

    /**
     * Commit batched grid mutations from the processing callback.
     *
     * @param mutations - Mutation writer payload accepted by the runtime.
     *
     * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
     */
    commit(mutations: unknown): void;
  }

  /**
   * @deprecated Use {@link StructureProcessingDefinitionV1} with {@link processing.register} instead.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export interface StructureProcessorDefinitionV1 {
    /** Tick interval in milliseconds. Must be > 0. */
    intervalMs: number;
    /** Synchronous callback invoked for each structure instance. */
    process: (structure: Structure, context: StructureProcessingContext) => void;
  }

  /** Placement hotbar field definition. */
  export type PlacementConfigField =
    | PlacementConfigIntegerField
    | PlacementConfigChoiceField;

  /** Integer placement field with optional bounds. */
  export interface PlacementConfigIntegerField {
    type: "integer";
    id: string;
    labelKey: string;
    min?: number;
    max?: number;
    default?: number;
  }

  /** Choice placement field with labeled options. */
  export interface PlacementConfigChoiceField {
    type: "choice";
    id: string;
    labelKey: string;
    options: readonly {
      value: string;
      labelKey: string;
    }[];
  }

  /** Placement rule definition for a structure type. */
  export interface PlacementConfigDefinition {
    structureId: StructureId;
    fields: PlacementConfigField[];
  }

  /** Planter box recipe definition shape. */
  export type PlanterBoxRecipeDefinitionV1 = processingApi.PlanterBoxRecipeDefinitionV1;
  /** Shaker recipe definition shape. */
  export type ShakerRecipeDefinitionV1 = processingApi.ShakerRecipeDefinitionV1;
  /** Kinetic press recipe definition shape. */
  export type KineticPressRecipeDefinitionV1 = processingApi.KineticPressRecipeDefinitionV1;

  /** Weighted refinery recipe definition shape. */
  export interface WeightedRefineryRecipeDefinitionV1 {
    input: processingApi.WeightedRecipeOutput["elementType"];
    outputs: processingApi.WeightedRecipeOutput[];
  }

  /** Custom structure processing definition shape. */
  export interface StructureProcessingDefinitionV1 {
    structureType: StructureRef;
    intervalMs: number;
    process: (structure: Structure, context: StructureProcessingContext) => void;
  }
}

import { CellCoordinates, Vector2 } from "../../shared/player";
import { shared } from "../../shared";

/**
 * `sandkit.api.elements` — register elements and read or change cells on the main thread.
 * Main thread only.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements`
 */
export namespace elements {

  // Shared types
  /**
   * Numeric id for a registered element type.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements`
   */
  export import ElementType = shared.api.elements.ElementType;
  /**
   * Mod or built-in element string id.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements`
   */
  export import ElementId = shared.api.elements.ElementId;
  /**
   * Type handle or string id accepted by lookup helpers.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements`
   */
  export import ElementRef = shared.api.elements.ElementRef;
  /**
   * Matter category for element physics behavior.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements`
   */
  export import MatterType = shared.api.elements.MatterType;
  /**
   * Full definition used to register a custom element.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.register`
   */
  export import ElementDefinition = shared.api.elements.ElementDefinition;
  /**
   * Options for create and replace calls.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.createAtCell`
   */
  export import ElementCreateOptions = shared.api.elements.ElementCreateOptions;
  /**
   * Options for element removal.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.removeAtCell`
   */
  export import ElementRemovalOptions = shared.api.elements.ElementRemovalOptions;

  /** Returns the mod string id for a numeric element type. */
  export import getIdByType = shared.api.elements.getIdByType;
  /** Resolves a string element id to its numeric type. */
  export import getTypeById = shared.api.elements.getTypeById;
  /**
   * @deprecated Use {@link getTypeById} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.getTypeById`
   */
  export import getTypeFromId = shared.api.elements.getTypeFromId;
  /** Returns the definition for an element type. */
  export import getDefinitionByType = shared.api.elements.getDefinitionByType;
  /** Returns the element type at a cell, or null. */
  export import getTypeAtCell = shared.api.elements.getTypeAtCell;
  /** Returns the resolved element type at a cell, or null. */
  export import getResolvedTypeAtCell = shared.api.elements.getResolvedTypeAtCell;
  /** Returns the resolved element type from a cell id, or null. */
  export import getResolvedTypeFromCellId = shared.api.elements.getResolvedTypeFromCellId;
  /** Returns element info at a cell, or null. */
  export import getInfoAtCell = shared.api.elements.getInfoAtCell;
  /** Returns the matter type at a cell, or null. */
  export import getMatterTypeAtCell = shared.api.elements.getMatterTypeAtCell;
  /** Returns true when the cell contains the given element type or id. */
  export import isTypeAtCell = shared.api.elements.isTypeAtCell;
  /** Returns true when the element at the cell is free-falling. */
  export import isFreeFallingAtCell = shared.api.elements.isFreeFallingAtCell;
  /** Returns particle velocity at a cell, or null. */
  export import getVelocityAtCell = shared.api.elements.getVelocityAtCell;
  /** Returns a data field value at a cell, or null. */
  export import getDataFieldAtCell = shared.api.elements.getDataFieldAtCell;

  /** Optional tooltip metadata on structure interactions. */
  export interface InteractionStructureMetadata {
    /** i18n key for custom interaction label text. */
    textKey?: string;
    /** Hide the label when a data field matches a value. */
    crossedOutWhen?: { dataField: number; equals: number; };
    /** Show the label only when a data field matches a value. */
    visibleWhen?: { dataField: number; equals: number; };
    /** Require the text key to exist in the active locale. */
    onlyWhenTranslated?: boolean;
  }

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
  export type Interaction = InteractionDestroyer
    | InteractionStructure
    | InteractionEntity
    | InteractionFlammable
    | InteractionMeltable
    | InteractionFreezable
    | InteractionCustom;

  /**
   * Returns all registered element type ids.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.getRegisteredTypes`
   */
  export function getRegisteredTypes(): ElementType[];

  /**
   * Registers a new element and returns its assigned type id.
   *
   * @param definition - Full element definition to register.
   * @returns Object with the assigned `elementType`.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.register`
   */
  export function register(definition: ElementDefinition): { elementType: ElementType; };

  /**
   * Updates fields on an existing element definition.
   *
   * @param elementTypeOrId - Numeric type or string id.
   * @param partial - Fields to merge onto the definition.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.updateDefinition`
   */
  export function updateDefinition(elementTypeOrId: ElementRef, partial: Partial<ElementDefinition>): void;

  /**
   * Adds an interaction entry to an element definition.
   *
   * @param elementTypeOrId - Numeric type or string id.
   * @param interaction - Interaction entry to append.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.addInteractionInfo`
   */
  export function addInteractionInfo(elementTypeOrId: ElementRef, interaction: Interaction): void;

  /**
   * Returns the display name for an element type.
   *
   * @param elementType - Numeric element type.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.getNameByType`
   */
  export function getNameByType(elementType: ElementType): string;

  /**
   * Finds a free cell inside a structure footprint, or null.
   *
   * @param structureCellX - Structure anchor cell column.
   * @param structureCellY - Structure anchor cell row.
   * @param structureSizeCells - Structure footprint size in cells.
   * @returns Cell coordinates of a free cell, or null when none.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.findFreeCellInStructure`
   */
  export function findFreeCellInStructure(structureCellX: number, structureCellY: number, structureSizeCells: number): Vector2 | null;

  /**
   * Create an element at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param elementTypeOrId - Numeric type or string id.
   * @param options - Optional spawn overrides.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.createAtCell`
   */
  export function createAtCell(...args: [...CellCoordinates, elementTypeOrId: ElementRef, options?: ElementCreateOptions]): void;

  /**
   * @deprecated Use {@link createAtCell} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.createAtCell`
   */
  export function createAtCellWhenIdle(...args: [...CellCoordinates, elementTypeOrId: ElementRef, options?: ElementCreateOptions]): void;

  /**
   * Replace the element at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param elementTypeOrId - Numeric type or string id.
   * @param options - Optional spawn overrides.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.replaceAtCell`
   */
  export function replaceAtCell(...args: [...CellCoordinates, elementTypeOrId: ElementRef, options?: ElementCreateOptions]): void;

  /**
   * @deprecated Use {@link replaceAtCell} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.replaceAtCell`
   */
  export function replaceAtCellWhenIdle(...args: [...CellCoordinates, elementTypeOrId: ElementRef, options?: ElementCreateOptions]): void;

  /**
   * Remove the element at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param options - Optional removal flags.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.removeAtCell`
   */
  export function removeAtCell(...args: [...CellCoordinates, options?: ElementRemovalOptions]): void;

  /**
   * @deprecated Use {@link removeAtCell} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.removeAtCell`
   */
  export function removeAtCellWhenIdle(...args: [...CellCoordinates, options?: ElementRemovalOptions]): void;

  /**
   * Move an element between cells. Main-entry writes are deferred; reads see the old grid.
   *
   * @param fromCellX - Source cell column.
   * @param fromCellY - Source cell row.
   * @param toCellX - Destination cell column.
   * @param toCellY - Destination cell row.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.teleportBetweenCells`
   */
  export function teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void;

  /**
   * @deprecated Use {@link teleportBetweenCells} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.teleportBetweenCells`
   */
  export function teleportBetweenCellsWhenIdle(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void;

  /**
   * Set particle velocity at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param velocity - New velocity vector.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.setVelocityAtCell`
   */
  export function setVelocityAtCell(...args: [...CellCoordinates, velocity: Vector2]): void;

  /**
   * @deprecated Use {@link setVelocityAtCell} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.setVelocityAtCell`
   */
  export function setVelocityAtCellWhenIdle(...args: [...CellCoordinates, velocity: Vector2]): void;

  /**
   * Add velocity to a particle at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param velocity - Velocity delta to add.
   * @param maxSpeedCellsPerSecond - Optional speed cap after the addition.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.addParticleVelocityAtCell`
   */
  export function addParticleVelocityAtCell(...args: [...CellCoordinates, velocity: Vector2, maxSpeedCellsPerSecond?: number]): void;

  /**
   * @deprecated Use {@link addParticleVelocityAtCell} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.addParticleVelocityAtCell`
   */
  export function addParticleVelocityAtCellWhenIdle(...args: [...CellCoordinates, velocity: Vector2, maxSpeedCellsPerSecond?: number]): void;

  /**
   * Convert a cell element to a particle. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param velocity - Initial particle velocity.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.convertToParticleAtCell`
   */
  export function convertToParticleAtCell(...args: [...CellCoordinates, velocity: Vector2]): void;

  /**
   * @deprecated Use {@link convertToParticleAtCell} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.convertToParticleAtCell`
   */
  export function convertToParticleAtCellWhenIdle(...args: [...CellCoordinates, velocity: Vector2]): void;

  /**
   * Convert a particle back to a solid element. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.convertFromParticleAtCell`
   */
  export function convertFromParticleAtCell(...args: CellCoordinates): void;

  /**
   * @deprecated Use {@link convertFromParticleAtCell} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.convertFromParticleAtCell`
   */
  export function convertFromParticleAtCellWhenIdle(...args: CellCoordinates): void;

  /**
   * Set a data field on the element at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param fieldNumber - Data field index (1–4).
   * @param value - New field value.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.setDataFieldAtCell`
   */
  export function setDataFieldAtCell(...args: [...CellCoordinates, fieldNumber: 1 | 2 | 3 | 4, value: number]): void;

  /**
   * @deprecated Use {@link setDataFieldAtCell} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.setDataFieldAtCell`
   */
  export function setDataFieldAtCellWhenIdle(...args: [...CellCoordinates, fieldNumber: 1 | 2 | 3 | 4, value: number]): void;

  /**
   * Refresh the rendered color at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.refreshColorAtCell`
   */
  export function refreshColorAtCell(...args: CellCoordinates): void;

  /**
   * @deprecated Use {@link refreshColorAtCell} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.refreshColorAtCell`
   */
  export function refreshColorAtCellWhenIdle(...args: CellCoordinates): void;

  /**
   * Set the physics skip mode at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param physicsState - Physics skip flags for the element.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.setPhysicsAtCell`
   */
  export function setPhysicsAtCell(...args: [...CellCoordinates, physicsState: number]): void;

  /**
   * @deprecated Use {@link setPhysicsAtCell} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.setPhysicsAtCell`
   */
  export function setPhysicsAtCellWhenIdle(...args: [...CellCoordinates, physicsState: number]): void;

  /**
   * Set element duration at a cell. Main-entry writes are deferred; reads see the old grid.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param durationTicks - Duration in simulation ticks.
   * @param options - When `updateMax` is true, also update max duration.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.setDurationAtCell`
   */
  export function setDurationAtCell(...args: [...CellCoordinates, durationTicks: number, options?: { updateMax?: boolean; }]): void;

  /**
   * @deprecated Use {@link setDurationAtCell} instead.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.setDurationAtCell`
   */
  export function setDurationAtCellWhenIdle(...args: [...CellCoordinates, durationTicks: number, options?: { updateMax?: boolean; }]): void;
}

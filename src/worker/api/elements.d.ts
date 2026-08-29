import type { CellCoordinates, Vector2 } from "../../shared/player";
import { shared } from "../../shared";

/**
 * Worker-thread `sandkit.api.elements` — shared reads plus immediate grid mutations.
 *
 * Worker-entry mutations apply immediately. Main thread defers matching helpers in
 * `sandkit.api.elements`.
 *
 * @internal Worker extension; not interchangeable with main-thread
 * `sandkit.api.elements`.
 *
 * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements`
 */
export namespace elements {
  /** Numeric id for a registered element type. */
  export import ElementType = shared.api.elements.ElementType;
  /** Mod or built-in element string id. */
  export import ElementId = shared.api.elements.ElementId;
  /** Type handle or string id accepted by lookup helpers. */
  export import ElementRef = shared.api.elements.ElementRef;
  /** Matter category for element physics behavior. */
  export import MatterType = shared.api.elements.MatterType;
  /** Full definition used to register a custom element. */
  export import ElementDefinition = shared.api.elements.ElementDefinition;
  /** Options for {@link createAtCell} and replace helpers. */
  export import ElementCreateOptions = shared.api.elements.ElementCreateOptions;
  /** Options for {@link removeAtCell}. */
  export import ElementRemovalOptions = shared.api.elements.ElementRemovalOptions;

  /** Returns the mod string id for a numeric element type. */
  export import getIdByType = shared.api.elements.getIdByType;
  /** Resolves a string element id to its numeric type. */
  export import getTypeById = shared.api.elements.getTypeById;
  /**
   * @deprecated Use {@link getTypeById} instead.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.elements.getTypeById`
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

  /**
   * Create an element at a cell immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param elementTypeOrId - Numeric type or string id.
   * @param options - Optional spawn overrides.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.createAtCell`
   */
  export function createAtCell(
    ...args: [...CellCoordinates, elementTypeOrId: ElementRef, options?: ElementCreateOptions]
  ): void;

  /**
   * Replace the element at a cell immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param elementTypeOrId - Numeric type or string id.
   * @param options - Optional spawn overrides.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.replaceAtCell`
   */
  export function replaceAtCell(
    ...args: [...CellCoordinates, elementTypeOrId: ElementRef, options?: ElementCreateOptions]
  ): void;

  /**
   * Remove the element at a cell immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param options - Optional removal flags.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.removeAtCell`
   */
  export function removeAtCell(
    ...args: [...CellCoordinates, options?: ElementRemovalOptions]
  ): void;

  /**
   * Move an element between cells immediately on this worker.
   *
   * @param fromCellX - Source cell column.
   * @param fromCellY - Source cell row.
   * @param toCellX - Destination cell column.
   * @param toCellY - Destination cell row.
   * @returns True when the move succeeded.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.moveBetweenCells`
   */
  export function moveBetweenCells(
    fromCellX: number,
    fromCellY: number,
    toCellX: number,
    toCellY: number
  ): boolean;

  /**
   * Teleport an element between cells immediately on this worker.
   *
   * @param fromCellX - Source cell column.
   * @param fromCellY - Source cell row.
   * @param toCellX - Destination cell column.
   * @param toCellY - Destination cell row.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.teleportBetweenCells`
   */
  export function teleportBetweenCells(
    fromCellX: number,
    fromCellY: number,
    toCellX: number,
    toCellY: number
  ): void;

  /**
   * Swap elements between two cells immediately on this worker.
   *
   * @param firstCellX - First cell column.
   * @param firstCellY - First cell row.
   * @param secondCellX - Second cell column.
   * @param secondCellY - Second cell row.
   * @returns True when the swap succeeded.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.swapBetweenCells`
   */
  export function swapBetweenCells(
    firstCellX: number,
    firstCellY: number,
    secondCellX: number,
    secondCellY: number
  ): boolean;

  /**
   * @deprecated Use {@link swapBetweenCells} instead.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.elements.swapBetweenCells`
   */
  export function swapCells(
    firstCellX: number,
    firstCellY: number,
    secondCellX: number,
    secondCellY: number
  ): boolean;

  /**
   * Mark an element index as movement-blocked for this tick.
   *
   * @param elementIndex - Element index from {@link getInfoAtCell}.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.elements.markMovementBlockedByIndex`
   */
  export function markMovementBlockedByIndex(elementIndex: number): void;

  /**
   * @deprecated Use {@link markMovementBlockedByIndex} instead.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.elements.markMovementBlockedByIndex`
   */
  export function markMovementBlockedByElementIndex(elementIndex: number): void;

  /**
   * Set particle velocity at a cell immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param velocity - New velocity vector.
   * @returns True when velocity was set.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.setVelocityAtCell`
   */
  export function setVelocityAtCell(...args: [...CellCoordinates, velocity: Vector2]): boolean;

  /**
   * Add velocity to a particle at a cell immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param velocity - Velocity delta to add.
   * @param maxSpeedCellsPerSecond - Optional speed cap after the addition.
   * @returns True when velocity was updated.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.addParticleVelocityAtCell`
   */
  export function addParticleVelocityAtCell(
    ...args: [...CellCoordinates, velocity: Vector2, maxSpeedCellsPerSecond?: number]
  ): boolean;

  /**
   * Convert a cell element to a particle immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param velocity - Initial particle velocity.
   * @returns True when conversion succeeded.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.convertToParticleAtCell`
   */
  export function convertToParticleAtCell(...args: [...CellCoordinates, velocity: Vector2]): boolean;

  /**
   * Convert a particle back to a solid element immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @returns True when conversion succeeded.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.convertFromParticleAtCell`
   */
  export function convertFromParticleAtCell(...args: CellCoordinates): boolean;

  /**
   * Set a data field on the element at a cell immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param fieldNumber - Data field index (1–4).
   * @param value - New field value.
   * @returns True when the field was set.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.setDataFieldAtCell`
   */
  export function setDataFieldAtCell(
    ...args: [...CellCoordinates, fieldNumber: 1 | 2 | 3 | 4, value: number]
  ): boolean;

  /**
   * Refresh the rendered color at a cell immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.refreshColorAtCell`
   */
  export function refreshColorAtCell(...args: CellCoordinates): void;

  /**
   * Set the physics skip mode at a cell immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param physicsState - Physics skip flags for the element.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.setPhysicsAtCell`
   */
  export function setPhysicsAtCell(...args: [...CellCoordinates, physicsState: number]): void;

  /**
   * Set element duration at a cell immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param durationTicks - Duration in simulation ticks.
   * @param options - When `updateMax` is true, also update max duration.
   * @returns True when duration was updated.
   * @see https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.elements.setDurationAtCell`
   */
  export function setDurationAtCell(
    ...args: [...CellCoordinates, durationTicks: number, options?: { updateMax?: boolean; }]
  ): boolean;
}

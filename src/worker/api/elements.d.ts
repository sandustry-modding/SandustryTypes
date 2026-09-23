import { elements as MainElements } from "../../sandkit/api/elements";
import type { CellCoordinates, Vector2 } from "../../shared/geometry";
import type { CellId } from "../../shared/nominal";

/**
 * Worker-thread `sandkit.api.elements` — shared reads plus immediate grid mutations.
 *
 * Worker-entry mutations apply immediately. Main thread defers matching helpers in
 * `sandkit.api.elements`.
 *
 * @internal Worker extension; not interchangeable with main-thread
 * `sandkit.api.elements`.
 *
 */
export namespace elements {
  /** Numeric id for a registered element type. */
  export type ElementType = MainElements.ElementType;
  /** Mod or built-in element string id. */
  export type ElementId = MainElements.ElementId;
  /** Type handle or string id accepted by lookup helpers. */
  export type ElementRef = MainElements.ElementRef;
  /** Matter category for element physics behavior. */
  export import MatterType = MainElements.MatterType;
  /** Full definition used to register a custom element. */
  export type ElementDefinition = MainElements.ElementDefinition;
  /** Options for {@link createAtCell} and replace helpers. */
  export type ElementCreateOptions = MainElements.ElementCreateOptions;
  /** Options for {@link removeAtCell}. */
  export type ElementRemovalOptions = MainElements.ElementRemovalOptions;

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
   * Create an element at a cell immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param elementTypeOrId - Numeric type or string id.
   * @param options - Optional spawn overrides.
   *
   * @example Worker entry
   * ```ts
   * api.elements.createAtCell(cellX, cellY, "water", {
   *   durationTicks: 60,
   * });
   * ```
   *
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
   *
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
   *
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
   *
   */
  export function moveBetweenCells(
    fromCellX: number,
    fromCellY: number,
    toCellX: number,
    toCellY: number,
  ): boolean;

  /**
   * Teleport an element between cells immediately on this worker.
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
   * Swap elements between two cells immediately on this worker.
   *
   * @param firstCellX - First cell column.
   * @param firstCellY - First cell row.
   * @param secondCellX - Second cell column.
   * @param secondCellY - Second cell row.
   * @returns True when the swap succeeded.
   *
   */
  export function swapBetweenCells(
    firstCellX: number,
    firstCellY: number,
    secondCellX: number,
    secondCellY: number,
  ): boolean;

  /**
   * @deprecated Use {@link swapBetweenCells} instead.
   *
   */
  export function swapCells(
    firstCellX: number,
    firstCellY: number,
    secondCellX: number,
    secondCellY: number,
  ): boolean;

  /**
   * Mark an element index as movement-blocked for this tick.
   *
   * @param elementIndex - Element index from {@link getInfoAtCell}.
   *
   */
  export function markMovementBlockedByIndex(elementIndex: number): void;

  /**
   * @deprecated Use {@link markMovementBlockedByIndex} instead.
   *
   */
  export function markMovementBlockedByElementIndex(elementIndex: number): void;

  /**
   * Set particle velocity at a cell immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param velocity - New velocity vector.
   * @returns True when velocity was set.
   *
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
   *
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
   *
   */
  export function convertToParticleAtCell(
    ...args: [...CellCoordinates, velocity: Vector2]
  ): boolean;

  /**
   * Convert a particle back to a solid element immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @returns True when conversion succeeded.
   *
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
   *
   */
  export function setDataFieldAtCell(
    ...args: [...CellCoordinates, fieldNumber: 1 | 2 | 3 | 4, value: number]
  ): boolean;

  /**
   * Refresh the rendered color at a cell immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   *
   */
  export function refreshColorAtCell(...args: CellCoordinates): void;

  /**
   * Set the physics skip mode at a cell immediately on this worker.
   *
   * @param cellX - Grid column of the target cell.
   * @param cellY - Grid row of the target cell.
   * @param physicsState - Physics skip flags for the element.
   *
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
   *
   * @example Worker entry
   * ```ts
   * const updated = api.elements.setDurationAtCell(
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
  ): boolean;
}

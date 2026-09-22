import { CellCoordinates } from "../../shared/player";

/**
 * `sandkit.api.energy` — structure energy networks, storage, and consumption.
 * Main thread only.
 */
export namespace energy {
  /**
   * Registers an energy type on a structure as conductor or storage.
   * @param structureId - Structure type id string.
   * @param type - `conductor` forwards energy; `storage` holds energy.
   * @param options - Capacity and energy-type options for storage nodes.
   */
  export function registerType(
    structureId: string,
    type: "conductor" | "storage",
    options?: EnergyRegisterTypeOptions,
  ): void;
  /**
   * Adds energy at a cell. Returns the amount actually added.
   * @param cellX - Grid cell X coordinate.
   * @param cellY - Grid cell Y coordinate.
   * @param amount - Energy amount to add.
   * @param options - Optional energy type and network options.
   */
  export function addAtCell(
    ...args: [...CellCoordinates, amount: number, options?: EnergyAddOptions]
  ): number;
  /**
   * Consumes energy from the global pool. Returns the amount consumed.
   * @param amount - Energy amount to consume.
   * @param options - When `allOrNothing` is true, consume zero unless the full amount is available.
   */
  export function consume(
    amount: number,
    options?: {
      allOrNothing?: boolean;
    },
  ): number;
  /**
   * Consumes energy from networks other than the one at the cell.
   * @param cellX - Grid cell X coordinate.
   * @param cellY - Grid cell Y coordinate.
   * @param amount - Energy amount to consume.
   */
  export function consumeExcludingNetworkAtCell(
    ...args: [...CellCoordinates, amount: number]
  ): number;
  /**
   * Returns energy network nodes connected at the cell.
   * @param cellX - Grid cell X coordinate.
   * @param cellY - Grid cell Y coordinate.
   *
   * @example
   * ```ts
   * const network = api.energy.getNetworkAtCell(cellX, cellY);
   * for (const entry of network) {
   *   useNetworkCell(entry.cellX, entry.cellY, entry.type);
   * }
   * ```
   */
  export function getNetworkAtCell(...args: CellCoordinates): EnergyNetworkNode[];
  /**
   * Returns free storage capacity in the network at the cell.
   * @param cellX - Grid cell X coordinate.
   * @param cellY - Grid cell Y coordinate.
   */
  export function getNetworkFreeCapacityAtCell(...args: CellCoordinates): number;

  /**
   * One node from {@link getNetworkAtCell}.
   * Official docs use `cellX` / `cellY`.
   * The 0.5.6 engine object uses `x` / `y` for the same cell.
   */
  export type EnergyNetworkNode = {
    type: string;
    cellX?: number;
    cellY?: number;
    x?: number;
    y?: number;
  };

  /** Options for {@link registerType}. */
  export type EnergyRegisterTypeOptions = {
    /** Maximum stored energy for storage nodes. */
    capacity?: number;
    /** Energy type id when multiple networks exist. */
    energyType?: string;
  };

  /** Options for {@link addAtCell}. */
  export type EnergyAddOptions = {
    /** Energy type id when multiple networks exist. */
    energyType?: string;
  };
}

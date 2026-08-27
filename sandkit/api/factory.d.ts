/**
 * Factory progression level and process counters.
 *
 * Available as `sandkit.api.factory`.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.factory`
 */
export namespace factory {
  /**
   * Return the current factory level.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.factory.getLevel`
   */
  export function getLevel(): number;

  /**
   * Return completed count for a factory process.
   *
   * @param processId - Built-in factory process id.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.factory.getProcessCount`
   */
  export function getProcessCount(processId: FactoryProcessId): number;

  /**
   * Return completion rate for a factory process.
   *
   * @param processId - Built-in factory process id.
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.factory.getProcessRate`
   */
  export function getProcessRate(processId: FactoryProcessId): number;

  /** Built-in factory process identifiers. */
  export type FactoryProcessId =
    | "shakeWetSand"
    | "pressBurntResidue"
    | "growFlowers"
    | "condenseFlorin";
}

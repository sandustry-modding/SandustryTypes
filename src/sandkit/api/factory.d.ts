/**
 * Factory progression level and process counters.
 *
 * Available as `sandkit.api.factory`.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
 */
export namespace factory {
  /**
   * Return the current factory level.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getLevel(): number;

  /**
   * Return completed count for a factory process.
   *
   * @param processId - Built-in factory process id.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getProcessCount(processId: FactoryProcessId): number;

  /**
   * Return completion rate for a factory process.
   *
   * @param processId - Built-in factory process id.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#api-access-heading)
   */
  export function getProcessRate(processId: FactoryProcessId): number;

  /** Built-in factory process identifiers. */
  export type FactoryProcessId =
    | "shakeWetSand"
    | "pressBurntResidue"
    | "growFlowers"
    | "condenseFlorin";
}

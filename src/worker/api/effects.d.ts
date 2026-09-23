import type { effects as MainEffects } from "../../sandkit/api/effects";

/**
 * Worker-thread `sandkit.api.effects` — world-space visual effects on workers.
 *
 * Temporary lights live under {@link lights.temporary}, not here.
 *
 * @internal Worker-only surface; main thread exposes additional effect helpers.
 */
export namespace effects {
  /** Options for generic screen effects. */
  export type EffectOptions = MainEffects.EffectOptions;
  /** Options for particle effects. */
  export type ParticleEffectOptions = MainEffects.ParticleEffectOptions;

  /**
   * Spawn a named screen-space or world effect.
   *
   * @param effectId - Registered effect id.
   * @param worldX - World x position in pixels.
   * @param worldY - World y position in pixels.
   * @param options - Duration, radius, and intensity settings.
   *
   */
  export function createAtWorld(
    effectId: string,
    worldX: number,
    worldY: number,
    options?: EffectOptions,
  ): void;

  /**
   * @deprecated Use {@link createAtWorld} instead.
   *
   */
  export function createEffectAtWorld(
    effectId: string,
    worldX: number,
    worldY: number,
    options?: EffectOptions,
  ): void;

  /**
   * Emit particles at world coordinates.
   *
   * @param worldX - World x position in pixels.
   * @param worldY - World y position in pixels.
   * @param options - Count, velocity, colour, and lifetime settings.
   *
   * @example Worker entry
   * ```ts
   * api.effects.createParticlesAtWorld(worldX, worldY, { count: 8 });
   * ```
   *
   */
  export function createParticlesAtWorld(
    worldX: number,
    worldY: number,
    options?: ParticleEffectOptions,
  ): void;
}

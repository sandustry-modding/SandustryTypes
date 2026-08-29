import { shared } from "../../shared";

/**
 * Worker-thread `sandkit.api.effects` — world-space visual effects on workers.
 *
 * Temporary lights live under {@link lights.temporary}, not here.
 *
 * @internal Worker-only surface; main thread exposes additional effect helpers.
 */
export namespace effects {
  /** Options for generic screen effects. */
  export import EffectOptions = shared.api.effects.EffectOptions;
  /** Options for particle effects. */
  export import ParticleEffectOptions = shared.api.effects.ParticleEffectOptions;

  /**
   * Spawn a named screen-space or world effect.
   *
   * @param effectId - Registered effect id.
   * @param worldX - World x position in pixels.
   * @param worldY - World y position in pixels.
   * @param options - Duration, radius, and intensity settings.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.effects.createAtWorld`
   */
  export function createAtWorld(
    effectId: string,
    worldX: number,
    worldY: number,
    options?: EffectOptions,
  ): void;

  /**
   * @deprecated Use {@link createAtWorld} instead.
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.effects.createAtWorld`
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
   * @see https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Worker entry `api.effects.createParticlesAtWorld`
   */
  export import createParticlesAtWorld = shared.api.effects.createParticlesAtWorld;
}

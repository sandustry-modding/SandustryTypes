import type { Vector2 } from "../../shared/player";

/**
 * `sandkit.api.effects` — visual effects, particles, and lasers at world positions.
 * Main thread only. Temporary lights live under {@link lights.temporary}.
 */
export namespace effects {
  /** Generic duration and radius options for world effects. */
  export type EffectOptions = {
    duration?: number;
    maxRadius?: number;
    intensity?: number;
  };

  /** Options for temporary lights. */
  export type TemporaryLightOptions = {
    brightness?: number;
    duration?: number;
    durationMs?: number;
    size?: number;
    color?: [number, number, number, number];
    /** Light decay rate after spawn. */
    decay: number;
    unclamped?: boolean;
    skipDedup?: boolean;
    useLightZones?: boolean;
    noopIfFull?: boolean;
    priority?: number;
    /** Dedupe key when the light pool is full or dedup is enabled. */
    dedupKey: string;
  };

  /** Options for {@link createParticlesAtWorld}. */
  export type ParticleEffectOptions = {
    count?: number;
    velocity?: Vector2;
    minSpeed?: number;
    maxSpeed?: number;
    /** Hex code. No alpha. */
    color?: number;
    minSize?: number;
    maxSize?: number;
    minLifetime?: number;
    maxLifetime?: number;
    background?: boolean;
    imageName?: string;
    fadeOutOnly?: boolean;
    fadeStart?: number;
    fadeEnd?: number;
    damp?: number;
  };

  /**
   * Creates a named screen effect at world coordinates.
   *
   * @param effectId - Registered effect id (for example `heatWave`).
   * @param worldX - World X coordinate in pixels.
   * @param worldY - World Y coordinate in pixels.
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
   * Spawns particles at world coordinates.
   *
   * @param worldX - World X coordinate in pixels.
   * @param worldY - World Y coordinate in pixels.
   * @param options - Count, velocity, colour, and lifetime settings.
   *
   * @example Main entry
   * ```ts
   * api.effects.createParticlesAtWorld(worldX, worldY, {
   *   count: 12,
   * });
   * ```
   *
   */
  export function createParticlesAtWorld(
    worldX: number,
    worldY: number,
    options?: ParticleEffectOptions,
  ): void;

  /**
   * @deprecated Use {@link lights.temporary.createAtWorld} instead.
   *
   */
  export function createLightAtWorld(
    worldX: number,
    worldY: number,
    options?: TemporaryLightOptions,
  ): { lightId: number | null; index?: number | null };

  /**
   * Creates a distortion wave effect at world coordinates.
   *
   * @param worldX - World X coordinate in pixels.
   * @param worldY - World Y coordinate in pixels.
   * @param options - Style, duration, radius, intensity, and color.
   *
   * @example
   * ```ts
   * api.effects.createDistortionWaveAtWorld(worldX, worldY, {
   *   style: "implode",
   * });
   * ```
   *
   */
  export function createDistortionWaveAtWorld(
    worldX: number,
    worldY: number,
    options?: DistortionEffectOptions,
  ): void;

  /**
   * Creates a laser beam between two world points. Returns a handle to destroy it.
   *
   * @param startWorldX - Beam start world X in pixels.
   * @param startWorldY - Beam start world Y in pixels.
   * @param endWorldX - Beam end world X in pixels.
   * @param endWorldY - Beam end world Y in pixels.
   * @param options - Width, brightness, color, and glow options.
   *
   */
  export function createLaserAtWorld(
    startWorldX: number,
    startWorldY: number,
    endWorldX: number,
    endWorldY: number,
    options?: LaserEffectOptions,
  ): LaserEffectHandle;

  /**
   * @deprecated Use {@link lights.temporary.removeById} instead.
   *
   */
  export function removeLightById(lightId: number): void;

  /** Options for laser beam effects. */
  export type LaserEffectOptions = {
    /** Beam width in pixels. */
    width?: number;
    /** Beam brightness multiplier. */
    brightness?: number;
    /** Beam color as a packed integer. */
    color?: number;
    /** When true, draws a glow around the beam. */
    glow?: boolean;
  };

  /** Handle returned by createLaserAtWorld. */
  export type LaserEffectHandle = {
    /** Removes the laser from the scene. */
    destroy(): void;
  };

  /** Options for distortion wave effects. */
  export type DistortionEffectOptions = {
    /** Distortion style: implode or explode. */
    style?: "implode" | "explode";
    /** Effect duration in seconds. */
    duration?: number;
    /** Maximum radius of the wave. */
    maxRadius?: number;
    /** Visual intensity of the distortion. */
    intensity?: number;
    /** RGBA color components for the effect. */
    color?: [number, number, number, number];
  };
}

/**
 * Sandkit mod manifest schema (`modinfo.json`).
 *
 * Not a runtime `sandkit` object. Use these types when authoring or validating
 * a mod folder `modinfo.json`.
 *
 * @module
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest
 */

/** Number setting in `modinfo.json` `configSchema`. */
export interface ConfigSchemaNumber {
  /**
   * Discriminator. Must be `"number"`.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  type: "number";
  /**
   * Value used when the player has not changed the setting.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  default: number;
  /**
   * Inclusive lower bound for the setting.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  min?: number;
  /**
   * Inclusive upper bound for the setting.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  max?: number;
  /**
   * UI step size for the number control.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  step?: number;
  /**
   * Plain-text label shown in the settings UI.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  label?: string;
  /**
   * i18n key for the settings label (preferred over {@link label} when both exist).
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  labelKey?: string;
  /**
   * Plain-text help text for the setting.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  description?: string;
  /**
   * i18n key for the setting help text.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  descriptionKey?: string;
}

/** Boolean setting in `modinfo.json` `configSchema`. */
export interface ConfigSchemaBoolean {
  /**
   * Discriminator. Must be `"boolean"`.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  type: "boolean";
  /**
   * Value used when the player has not changed the setting.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  default: boolean;
  /**
   * Plain-text label shown in the settings UI.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  label?: string;
  /**
   * i18n key for the settings label.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  labelKey?: string;
  /**
   * Plain-text help text for the setting.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  description?: string;
  /**
   * i18n key for the setting help text.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  descriptionKey?: string;
}

/** One option inside a {@link ConfigSchemaChoice}. */
export interface ConfigSchemaChoiceOption {
  /**
   * Stored value written when the player picks this option.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  value: string;
  /**
   * Plain-text label for the option.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  label?: string;
  /**
   * i18n key for the option label.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  labelKey?: string;
}

/** Choice setting in `modinfo.json` `configSchema`. */
export interface ConfigSchemaChoice {
  /**
   * Discriminator. Must be `"choice"`.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  type: "choice";
  /**
   * Default option {@link ConfigSchemaChoiceOption.value}.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  default: string;
  /**
   * Plain-text label shown in the settings UI.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  label?: string;
  /**
   * i18n key for the settings label.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  labelKey?: string;
  /**
   * Allowed choices for this setting.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  options: readonly ConfigSchemaChoiceOption[];
}

/**
 * One entry under `modinfo.json` `configSchema`.
 *
 * Keys of `configSchema` are setting ids read via `api.settings.get`.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
 */
export type ConfigSchemaEntry =
  | ConfigSchemaNumber
  | ConfigSchemaBoolean
  | ConfigSchemaChoice;

/**
 * Animated (or static) texture replacement for a vanilla asset id.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `textureOverrides`
 */
export interface TextureOverride {
  /**
   * Path to the replacement image, relative to the mod root.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `textureOverrides`
   */
  path: string;
  /**
   * Width in pixels of one animation frame.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `textureOverrides`
   */
  frameWidth?: number;
  /**
   * Number of frames in the spritesheet.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `textureOverrides`
   */
  frames?: number;
  /**
   * Milliseconds between animation frames.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `textureOverrides`
   */
  intervalMs?: number;
}

/**
 * Optional content pack exposed by this mod for other mods or the game to consume.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `provides`
 */
export interface ModProvide {
  /**
   * Kind of provided content (for example `"structureTextures"`).
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `provides`
   */
  kind: string;
  /**
   * Id of this provide entry within its kind.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `provides`
   */
  id: string;
  /**
   * Texture paths keyed by the vanilla or structure texture id they replace.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `provides`
   */
  textureOverrides?: Record<string, string>;
}

/**
 * Blueprint image paths for a custom map pack.
 *
 * Paths are relative to the mod root.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`
 */
export interface ModMapBlueprints {
  /**
   * Terrain color map image.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`
   */
  terrain?: string;
  /**
   * Lights layout image.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`
   */
  lights?: string;
  /**
   * Sensors layout image.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`
   */
  sensors?: string;
  /**
   * Authorization zones image.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`
   */
  authorization?: string;
  /**
   * Wall layout image.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`
   */
  wall?: string;
  /**
   * Lights metadata image.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`
   */
  lightsMeta?: string;
  /**
   * Decor layout image.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`
   */
  decor?: string;
  /**
   * Map config JSON path.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`
   */
  config?: string;
}

/**
 * World-pixel spawn or unstuck point.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`
 */
export interface ModMapPoint {
  /**
   * World X in pixels.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`
   */
  x: number;
  /**
   * World Y in pixels.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`
   */
  y: number;
}

/**
 * Vertical camera / travel bounds for the custom map.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.topBounds`
 */
export interface ModMapTopBounds {
  /**
   * Hard top bound in world pixels.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.topBounds`
   */
  hard?: number;
  /**
   * Soft top bound in world pixels.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.topBounds`
   */
  soft?: number;
}

/**
 * Depth-based light sizing for the custom map.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.depthLight`
 */
export interface ModMapDepthLight {
  /**
   * World Y where depth light scaling starts.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.depthLight`
   */
  startY?: number;
  /**
   * World Y where depth light scaling ends.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.depthLight`
   */
  endY?: number;
  /**
   * Maximum light size at the shallow end of the range.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.depthLight`
   */
  maxSize?: number;
  /**
   * Minimum light size at the deep end of the range.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.depthLight`
   */
  minSize?: number;
}

/**
 * Parallax background tuning for the custom map.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.parallax`
 */
export interface ModMapParallax {
  /**
   * Horizontal scale of the parallax layer.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.parallax`
   */
  widthScale?: number;
  /**
   * Vertical offset of the parallax layer in pixels.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.parallax`
   */
  offsetY?: number;
}

/**
 * Color-map cell that paints both background and foreground terrain.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.colorMappings`
 */
export interface ModMapColorMappingLayers {
  /**
   * Background terrain id for this blueprint RGB.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.colorMappings`
   */
  background?: string;
  /**
   * Foreground terrain id for this blueprint RGB.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.colorMappings`
   */
  foreground?: string;
}

/**
 * One `map.colorMappings` value: a single terrain id, or layered background/foreground ids.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.colorMappings`
 */
export type ModMapColorMapping = string | ModMapColorMappingLayers;

/**
 * Custom map pack block in `modinfo.json`.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`
 */
export interface ModMapDefinition {
  /**
   * Paths to blueprint images and map config under the mod root.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.blueprints`
   */
  blueprints: ModMapBlueprints;
  /**
   * Map width in cells.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`
   */
  width: number;
  /**
   * Map height in cells.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`
   */
  height: number;
  /**
   * Player spawn position in world pixels.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`
   */
  spawn?: ModMapPoint;
  /**
   * Unstuck / rescue position in world pixels.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`
   */
  unstuck?: ModMapPoint;
  /**
   * Deployment mode for the map (for example `"skip"`).
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`
   */
  deployment?: string;
  /**
   * Vertical travel bounds at the top of the world.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.topBounds`
   */
  topBounds?: ModMapTopBounds;
  /**
   * Depth-based light size curve.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.depthLight`
   */
  depthLight?: ModMapDepthLight;
  /**
   * Parallax background tuning.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.parallax`
   */
  parallax?: ModMapParallax;
  /**
   * Maps blueprint RGB keys (`"r, g, b"`) to terrain ids or layered terrain.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map.colorMappings`
   */
  colorMappings?: Record<string, ModMapColorMapping>;
}

/**
 * Compatible game version range for the mod.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `gameVersion`
 */
export interface ModGameVersion {
  /**
   * Lowest supported game version string.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `gameVersion`
   */
  minimum?: string;
  /**
   * Highest supported game version string.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `gameVersion`
   */
  maximum?: string;
}

/**
 * Sandkit mod manifest (`modinfo.json`).
 *
 * Required for every mod folder. Minimal mods only need
 * {@link manifestVersion}, {@link id}, {@link name}, {@link version},
 * {@link apiVersion}, and {@link entry}.
 *
 * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest
 */
export interface ModInfo {
  /**
   * Manifest format version. Must be `1` for Sandkit `apiVersion` 1.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest
   */
  manifestVersion: 1;
  /**
   * Unique mod id. Prefer `author.mod-name` (matches folder / Workshop identity).
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest
   */
  id: string;
  /**
   * Display name shown in the mod list and Workshop UI.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest
   */
  name: string;
  /**
   * Semver-style mod version string.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest
   */
  version: string;
  /**
   * Sandkit host API version this mod targets. Must be `1`.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest
   */
  apiVersion: 1;
  /**
   * Main-thread script path relative to the mod root (for example `"main.js"`).
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest
   */
  entry: string;
  /**
   * Simulation-worker script path relative to the mod root.
   * Required when the mod registers worker hooks or uses worker-only APIs.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest
   */
  workerEntry?: string;
  /**
   * Path to the patches file relative to the mod root (usually `"patches.json"`).
   * When omitted, a present `patches.json` may still auto-load per official docs.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest
   */
  patches?: string;
  /**
   * Long description shown in the mod list / Workshop.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest
   */
  description?: string;
  /**
   * Author display name.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest
   */
  author?: string;
  /**
   * Inclusive game version range this mod claims to support.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `gameVersion`
   */
  gameVersion?: ModGameVersion;
  /**
   * Other mod ids that should load with this mod.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest
   */
  dependencies?: string[];
  /**
   * Relative load priority. Lower values load earlier; higher values load later.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest
   */
  loadOrder?: number;
  /**
   * Player-facing settings schema. Keys are setting ids; values define type and UI.
   * Read at runtime with `api.settings.get`.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configSchema`
   */
  configSchema?: Record<string, ConfigSchemaEntry>;
  /**
   * Paths to JSON config overrides keyed by vanilla config id (for example `"drill"`).
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `configOverrides`
   */
  configOverrides?: Record<string, string>;
  /**
   * Paths to GLSL shader replacements keyed by shader id (for example `"sky"`).
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `shaderOverrides`
   */
  shaderOverrides?: Record<string, string>;
  /**
   * Texture replacements keyed by vanilla texture id.
   * A string value is a path; an object adds spritesheet frame metadata.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `textureOverrides`
   */
  textureOverrides?: Record<string, TextureOverride | string>;
  /**
   * Optional content this mod publishes for others to consume.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `provides`
   */
  provides?: ModProvide[];
  /**
   * Embedded custom map pack definition for this mod.
   *
   * @see https://sandustry.com/sandkit.html Official Sandkit API — Mod manifest `map`
   */
  map?: ModMapDefinition;
}

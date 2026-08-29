/**
 * Sandkit mod manifest schema (`modinfo.json`).
 *
 * Not a runtime `sandkit` object. Use these types when authoring or validating
 * a mod folder `modinfo.json`.
 *
 * @module
 *
 * @example modinfo.json minimal
 * ```ts
 * {
 *   "manifestVersion": 1,
 *   "id": "author.example-mod",
 *   "name": "Example Mod",
 *   "version": "1.0.0",
 *   "apiVersion": 1,
 *   "entry": "main.js"
 * }
 * ```
 *
 * @example modinfo.json complete
 * ```ts
 * {
 *   "manifestVersion": 1,
 *   "id": "author.example-mod",
 *   "name": "Example Mod",
 *   "version": "1.0.0",
 *   "apiVersion": 1,
 *   "entry": "main.js",
 *   "workerEntry": "worker.js",
 *   "patches": "patches.json",
 *   "description": "Example description",
 *   "author": "Example author",
 *   "gameVersion": {
 *     "minimum": "0.5.0",
 *     "maximum": "0.5.9"
 *   },
 *   "dependencies": [],
 *   "loadOrder": 0,
 *   "configSchema": {
 *     "speed": {
 *       "type": "number",
 *       "default": 1,
 *       "min": 0.5,
 *       "max": 2,
 *       "step": 0.1,
 *       "label": "Speed",
 *       "labelKey": "mods|example|speed",
 *       "description": "Adjusts the speed.",
 *       "descriptionKey": "mods|example|speedDescription"
 *     },
 *     "enabled": {
 *       "type": "boolean",
 *       "default": true,
 *       "label": "Enabled"
 *     },
 *     "mode": {
 *       "type": "choice",
 *       "default": "balanced",
 *       "label": "Mode",
 *       "options": [
 *         { "value": "balanced", "label": "Balanced" },
 *         { "value": "fast", "labelKey": "mods|example|modeFast" }
 *       ]
 *     }
 *   },
 *   "configOverrides": {
 *     "drill": "config/drill.json"
 *   },
 *   "shaderOverrides": {
 *     "sky": "shaders/sky.glsl"
 *   },
 *   "textureOverrides": {
 *     "farm": {
 *       "path": "assets/texture.png",
 *       "frameWidth": 18,
 *       "frames": 6,
 *       "intervalMs": 166
 *     }
 *   },
 *   "provides": [
 *     {
 *       "kind": "structureTextures",
 *       "id": "industrial",
 *       "textureOverrides": {
 *         "pump": "assets/texture.png"
 *       }
 *     }
 *   ],
 *   "map": {
 *     "blueprints": {
 *       "terrain": "map/terrain.png",
 *       "lights": "map/lights.png",
 *       "sensors": "map/sensors.png",
 *       "authorization": "map/authorization.png",
 *       "wall": "map/wall.png",
 *       "lightsMeta": "map/lights_meta.png",
 *       "decor": "map/decor.png",
 *       "config": "map/config.json"
 *     },
 *     "width": 320,
 *     "height": 320,
 *     "spawn": { "x": 160, "y": 140 },
 *     "unstuck": { "x": 160, "y": 140 },
 *     "deployment": "skip",
 *     "topBounds": {
 *       "hard": 0,
 *       "soft": 100
 *     },
 *     "depthLight": {
 *       "startY": 640,
 *       "endY": 1280,
 *       "maxSize": 400,
 *       "minSize": 120
 *     },
 *     "parallax": {
 *       "widthScale": 1,
 *       "offsetY": 0
 *     },
 *     "colorMappings": {
 *       "38, 0, 0": {
 *         "background": "SandiumSoil",
 *         "foreground": "Obsidian"
 *       },
 *       "4, 5, 6": "GoldSoil"
 *     }
 *   }
 * }
 * ```
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
 */

/** Number setting in `modinfo.json` `configSchema`. */
export interface ConfigSchemaNumber {
  /**
   * Discriminator. Must be `"number"`.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  type: "number";
  /**
   * Value used when the player has not changed the setting.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  default: number;
  /**
   * Inclusive lower bound for the setting.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  min?: number;
  /**
   * Inclusive upper bound for the setting.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  max?: number;
  /**
   * UI step size for the number control.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  step?: number;
  /**
   * Plain-text label shown in the settings UI.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  label?: string;
  /**
   * i18n key for the settings label (preferred over {@link label} when both exist).
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  labelKey?: string;
  /**
   * Plain-text help text for the setting.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  description?: string;
  /**
   * i18n key for the setting help text.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  descriptionKey?: string;
}

/** Boolean setting in `modinfo.json` `configSchema`. */
export interface ConfigSchemaBoolean {
  /**
   * Discriminator. Must be `"boolean"`.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  type: "boolean";
  /**
   * Value used when the player has not changed the setting.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  default: boolean;
  /**
   * Plain-text label shown in the settings UI.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  label?: string;
  /**
   * i18n key for the settings label.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  labelKey?: string;
  /**
   * Plain-text help text for the setting.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  description?: string;
  /**
   * i18n key for the setting help text.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  descriptionKey?: string;
}

/** One option inside a {@link ConfigSchemaChoice}. */
export interface ConfigSchemaChoiceOption {
  /**
   * Stored value written when the player picks this option.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  value: string;
  /**
   * Plain-text label for the option.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  label?: string;
  /**
   * i18n key for the option label.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  labelKey?: string;
}

/** Choice setting in `modinfo.json` `configSchema`. */
export interface ConfigSchemaChoice {
  /**
   * Discriminator. Must be `"choice"`.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  type: "choice";
  /**
   * Default option {@link ConfigSchemaChoiceOption.value}.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  default: string;
  /**
   * Plain-text label shown in the settings UI.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  label?: string;
  /**
   * i18n key for the settings label.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  labelKey?: string;
  /**
   * Allowed choices for this setting.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  options: readonly ConfigSchemaChoiceOption[];
}

/**
 * One entry under `modinfo.json` `configSchema`.
 *
 * Keys of `configSchema` are setting ids read via `api.settings.get`.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
 */
export type ConfigSchemaEntry =
  | ConfigSchemaNumber
  | ConfigSchemaBoolean
  | ConfigSchemaChoice;

/**
 * Animated (or static) texture replacement for a vanilla asset id.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
 */
export interface TextureOverride {
  /**
   * Path to the replacement image, relative to the mod root.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  path: string;
  /**
   * Width in pixels of one animation frame.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  frameWidth?: number;
  /**
   * Number of frames in the spritesheet.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  frames?: number;
  /**
   * Milliseconds between animation frames.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  intervalMs?: number;
}

/**
 * Optional content pack exposed by this mod for other mods or the game to consume.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
 */
export interface ModProvide {
  /**
   * Kind of provided content (for example `"structureTextures"`).
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  kind: string;
  /**
   * Id of this provide entry within its kind.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  id: string;
  /**
   * Texture paths keyed by the vanilla or structure texture id they replace.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  textureOverrides?: Record<string, string>;
}

/**
 * Blueprint image paths for a custom map pack.
 *
 * Paths are relative to the mod root.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
 */
export interface ModMapBlueprints {
  /**
   * Terrain color map image.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  terrain?: string;
  /**
   * Lights layout image.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  lights?: string;
  /**
   * Sensors layout image.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  sensors?: string;
  /**
   * Authorization zones image.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  authorization?: string;
  /**
   * Wall layout image.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  wall?: string;
  /**
   * Lights metadata image.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  lightsMeta?: string;
  /**
   * Decor layout image.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  decor?: string;
  /**
   * Map config JSON path.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  config?: string;
}

/**
 * World-pixel spawn or unstuck point.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
 */
export interface ModMapPoint {
  /**
   * World X in pixels.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  x: number;
  /**
   * World Y in pixels.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  y: number;
}

/**
 * Vertical camera / travel bounds for the custom map.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
 */
export interface ModMapTopBounds {
  /**
   * Hard top bound in world pixels.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  hard?: number;
  /**
   * Soft top bound in world pixels.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  soft?: number;
}

/**
 * Depth-based light sizing for the custom map.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
 */
export interface ModMapDepthLight {
  /**
   * World Y where depth light scaling starts.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  startY?: number;
  /**
   * World Y where depth light scaling ends.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  endY?: number;
  /**
   * Maximum light size at the shallow end of the range.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  maxSize?: number;
  /**
   * Minimum light size at the deep end of the range.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  minSize?: number;
}

/**
 * Parallax background tuning for the custom map.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
 */
export interface ModMapParallax {
  /**
   * Horizontal scale of the parallax layer.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  widthScale?: number;
  /**
   * Vertical offset of the parallax layer in pixels.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  offsetY?: number;
}

/**
 * Color-map cell that paints both background and foreground terrain.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
 */
export interface ModMapColorMappingLayers {
  /**
   * Background terrain id for this blueprint RGB.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  background?: string;
  /**
   * Foreground terrain id for this blueprint RGB.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  foreground?: string;
}

/**
 * One `map.colorMappings` value: a single terrain id, or layered background/foreground ids.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
 */
export type ModMapColorMapping = string | ModMapColorMappingLayers;

/**
 * Custom map pack block in `modinfo.json`.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
 */
export interface ModMapDefinition {
  /**
   * Paths to blueprint images and map config under the mod root.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  blueprints: ModMapBlueprints;
  /**
   * Map width in cells.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  width: number;
  /**
   * Map height in cells.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  height: number;
  /**
   * Player spawn position in world pixels.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  spawn?: ModMapPoint;
  /**
   * Unstuck / rescue position in world pixels.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  unstuck?: ModMapPoint;
  /**
   * Deployment mode for the map (for example `"skip"`).
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  deployment?: string;
  /**
   * Vertical travel bounds at the top of the world.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  topBounds?: ModMapTopBounds;
  /**
   * Depth-based light size curve.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  depthLight?: ModMapDepthLight;
  /**
   * Parallax background tuning.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  parallax?: ModMapParallax;
  /**
   * Maps blueprint RGB keys (`"r, g, b"`) to terrain ids or layered terrain.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  colorMappings?: Record<string, ModMapColorMapping>;
}

/**
 * Compatible game version range for the mod.
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
 */
export interface ModGameVersion {
  /**
   * Lowest supported game version string.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  minimum?: string;
  /**
   * Highest supported game version string.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
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
 * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
 */
export interface ModInfo {
  /**
   * Manifest format version. Must be `1` for Sandkit `apiVersion` 1.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  manifestVersion: 1;
  /**
   * Unique mod id. Prefer `author.mod-name` (matches folder / Workshop identity).
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  id: string;
  /**
   * Display name shown in the mod list and Workshop UI.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  name: string;
  /**
   * Semver-style mod version string.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  version: string;
  /**
   * Sandkit host API version this mod targets. Must be `1`.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  apiVersion: 1;
  /**
   * Main-thread script path relative to the mod root (for example `"main.js"`).
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  entry: string;
  /**
   * Simulation-worker script path relative to the mod root.
   * Required when the mod registers worker hooks or uses worker-only APIs.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  workerEntry?: string;
  /**
   * Path to the patches file relative to the mod root (usually `"patches.json"`).
   * When omitted, a present `patches.json` may still auto-load per official docs.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  patches?: string;
  /**
   * Long description shown in the mod list / Workshop.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  description?: string;
  /**
   * Author display name.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  author?: string;
  /**
   * Inclusive game version range this mod claims to support.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  gameVersion?: ModGameVersion;
  /**
   * Other mod ids that should load with this mod.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  dependencies?: string[];
  /**
   * Relative load priority. Lower values load earlier; higher values load later.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  loadOrder?: number;
  /**
   * Player-facing settings schema. Keys are setting ids; values define type and UI.
   * Read at runtime with `api.settings.get`.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  configSchema?: Record<string, ConfigSchemaEntry>;
  /**
   * Paths to JSON config overrides keyed by vanilla config id (for example `"drill"`).
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  configOverrides?: Record<string, string>;
  /**
   * Paths to GLSL shader replacements keyed by shader id (for example `"sky"`).
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  shaderOverrides?: Record<string, string>;
  /**
   * Texture replacements keyed by vanilla texture id.
   * A string value is a path; an object adds spritesheet frame metadata.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  textureOverrides?: Record<string, TextureOverride | string>;
  /**
   * Optional content this mod publishes for others to consume.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  provides?: ModProvide[];
  /**
   * Embedded custom map pack definition for this mod.
   *
   * @see [Official docs](https://sandustry.com/sandkit.html#mod-manifest-heading)
   */
  map?: ModMapDefinition;
}

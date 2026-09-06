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
 */

/** Number setting in `modinfo.json` `configSchema`. */
export interface ConfigSchemaNumber {
  /**
   * Discriminator. Must be `"number"`.
   */
  type: "number";
  /**
   * Value used when the player has not changed the setting.
   */
  default: number;
  /**
   * Inclusive lower bound for the setting.
   */
  min?: number;
  /**
   * Inclusive upper bound for the setting.
   */
  max?: number;
  /**
   * UI step size for the number control.
   */
  step?: number;
  /**
   * Plain-text label shown in the settings UI.
   */
  label?: string;
  /**
   * i18n key for the settings label (preferred over {@link label} when both exist).
   */
  labelKey?: string;
  /**
   * Plain-text help text for the setting.
   */
  description?: string;
  /**
   * i18n key for the setting help text.
   */
  descriptionKey?: string;
}

/** Boolean setting in `modinfo.json` `configSchema`. */
export interface ConfigSchemaBoolean {
  /**
   * Discriminator. Must be `"boolean"`.
   */
  type: "boolean";
  /**
   * Value used when the player has not changed the setting.
   */
  default: boolean;
  /**
   * Plain-text label shown in the settings UI.
   */
  label?: string;
  /**
   * i18n key for the settings label.
   */
  labelKey?: string;
  /**
   * Plain-text help text for the setting.
   */
  description?: string;
  /**
   * i18n key for the setting help text.
   */
  descriptionKey?: string;
}

/** One option inside a {@link ConfigSchemaChoice}. */
export interface ConfigSchemaChoiceOption {
  /**
   * Stored value written when the player picks this option.
   */
  value: string;
  /**
   * Plain-text label for the option.
   */
  label?: string;
  /**
   * i18n key for the option label.
   */
  labelKey?: string;
}

/** Choice setting in `modinfo.json` `configSchema`. */
export interface ConfigSchemaChoice {
  /**
   * Discriminator. Must be `"choice"`.
   */
  type: "choice";
  /**
   * Default option {@link ConfigSchemaChoiceOption.value}.
   */
  default: string;
  /**
   * Plain-text label shown in the settings UI.
   */
  label?: string;
  /**
   * i18n key for the settings label.
   */
  labelKey?: string;
  /**
   * Plain-text help text for the setting.
   */
  description?: string;
  /**
   * i18n key for the setting help text.
   */
  descriptionKey?: string;
  /**
   * Allowed choices for this setting.
   */
  options: readonly ConfigSchemaChoiceOption[];
}

/**
 * One entry under `modinfo.json` `configSchema`.
 *
 * Keys of `configSchema` are setting ids read via `api.settings.get`.
 *
 */
export type ConfigSchemaEntry = ConfigSchemaNumber | ConfigSchemaBoolean | ConfigSchemaChoice;

/**
 * Animated (or static) texture replacement for a vanilla asset id.
 *
 */
export interface TextureOverride {
  /**
   * Path to the replacement image, relative to the mod root.
   */
  path: string;
  /**
   * Width in pixels of one animation frame.
   */
  frameWidth?: number;
  /**
   * Number of frames in the spritesheet.
   */
  frames?: number;
  /**
   * Milliseconds between animation frames.
   */
  intervalMs?: number;
}

/**
 * Optional content pack exposed by this mod for other mods or the game to consume.
 *
 */
export interface ModProvide {
  /**
   * Kind of provided content (for example `"structureTextures"`).
   */
  kind: string;
  /**
   * Id of this provide entry within its kind.
   */
  id: string;
  /**
   * Texture paths keyed by the vanilla or structure texture id they replace.
   */
  textureOverrides?: Record<string, string>;
}

/**
 * Blueprint image paths for a custom map pack.
 *
 * Paths are relative to the mod root.
 *
 */
export interface ModMapBlueprints {
  /**
   * Terrain color map image.
   */
  terrain?: string;
  /**
   * Lights layout image.
   */
  lights?: string;
  /**
   * Sensors layout image.
   */
  sensors?: string;
  /**
   * Authorization zones image.
   */
  authorization?: string;
  /**
   * Wall layout image.
   */
  wall?: string;
  /**
   * Lights metadata image.
   */
  lightsMeta?: string;
  /**
   * Decor layout image.
   */
  decor?: string;
  /**
   * Map config JSON path.
   */
  config?: string;
}

/**
 * World-pixel spawn or unstuck point.
 *
 */
export interface ModMapPoint {
  /**
   * World X in pixels.
   */
  x: number;
  /**
   * World Y in pixels.
   */
  y: number;
}

/**
 * Vertical camera / travel bounds for the custom map.
 *
 */
export interface ModMapTopBounds {
  /**
   * Hard top bound in world pixels.
   */
  hard?: number;
  /**
   * Soft top bound in world pixels.
   */
  soft?: number;
}

/**
 * Depth-based light sizing for the custom map.
 *
 */
export interface ModMapDepthLight {
  /**
   * World Y where depth light scaling starts.
   */
  startY?: number;
  /**
   * World Y where depth light scaling ends.
   */
  endY?: number;
  /**
   * Maximum light size at the shallow end of the range.
   */
  maxSize?: number;
  /**
   * Minimum light size at the deep end of the range.
   */
  minSize?: number;
}

/**
 * Parallax background tuning for the custom map.
 *
 */
export interface ModMapParallax {
  /**
   * Horizontal scale of the parallax layer.
   */
  widthScale?: number;
  /**
   * Vertical offset of the parallax layer in pixels.
   */
  offsetY?: number;
}

/**
 * Color-map cell that paints both background and foreground terrain.
 *
 */
export interface ModMapColorMappingLayers {
  /**
   * Background terrain id for this blueprint RGB.
   */
  background?: string;
  /**
   * Foreground terrain id for this blueprint RGB.
   */
  foreground?: string;
}

/**
 * One `map.colorMappings` value: a single terrain id, or layered background/foreground ids.
 *
 */
export type ModMapColorMapping = string | ModMapColorMappingLayers;

/**
 * Custom map pack block in `modinfo.json`.
 *
 */
export interface ModMapDefinition {
  /**
   * Paths to blueprint images and map config under the mod root.
   */
  blueprints: ModMapBlueprints;
  /**
   * Map width in cells.
   */
  width: number;
  /**
   * Map height in cells.
   */
  height: number;
  /**
   * Player spawn position in world pixels.
   */
  spawn?: ModMapPoint;
  /**
   * Unstuck / rescue position in world pixels.
   */
  unstuck?: ModMapPoint;
  /**
   * Deployment mode for the map (for example `"skip"`).
   */
  deployment?: string;
  /**
   * Vertical travel bounds at the top of the world.
   */
  topBounds?: ModMapTopBounds;
  /**
   * Depth-based light size curve.
   */
  depthLight?: ModMapDepthLight;
  /**
   * Parallax background tuning.
   */
  parallax?: ModMapParallax;
  /**
   * Maps blueprint RGB keys (`"r, g, b"`) to terrain ids or layered terrain.
   */
  colorMappings?: Record<string, ModMapColorMapping>;
}

/**
 * Compatible game version range for the mod.
 *
 */
export interface ModGameVersion {
  /**
   * Lowest supported game version string.
   */
  minimum?: string;
  /**
   * Highest supported game version string.
   */
  maximum?: string;
}

/**
 * Sandkit mod manifest (`modinfo.json`).
 *
 * Required for every mod folder. Minimal script mods need
 * {@link manifestVersion}, {@link id}, {@link name}, {@link version},
 * {@link apiVersion}, and {@link entry}.
 *
 * At least one capability is required: {@link entry}, {@link workerEntry},
 * {@link configOverrides}, {@link textureOverrides}, {@link provides}, or
 * {@link map}. `configSchema` alone does not count.
 *
 */
export interface ModInfo {
  /**
   * Optional JSON Schema URL for editors (for example VS Code).
   * Not read by the game loader.
   */
  $schema?: string;
  /**
   * Manifest format version. Must be `1` for Sandkit `apiVersion` 1.
   */
  manifestVersion: 1;
  /**
   * Unique mod id. Prefer `author.mod-name` (matches folder / Workshop identity).
   */
  id: string;
  /**
   * Display name shown in the mod list and Workshop UI.
   */
  name: string;
  /**
   * Semver-style mod version string.
   */
  version: string;
  /**
   * Sandkit host API version this mod targets. Must be `1`.
   */
  apiVersion: 1;
  /**
   * Main-thread script path relative to the mod root (for example `"main.js"`).
   * Omit for texture-only, map-only, or config-only mods that declare another
   * capability instead.
   */
  entry?: string;
  /**
   * Simulation-worker script path relative to the mod root.
   * Required when the mod registers worker hooks or uses worker-only APIs.
   */
  workerEntry?: string;
  /**
   * Path to the patches file relative to the mod root (usually `"patches.json"`).
   * When omitted, a present `patches.json` may still auto-load per official docs.
   */
  patches?: string;
  /**
   * Long description shown in the mod list / Workshop.
   */
  description?: string;
  /**
   * Author display name.
   */
  author?: string;
  /**
   * Inclusive game version range this mod claims to support.
   */
  gameVersion?: ModGameVersion;
  /**
   * Other mod ids that should load with this mod.
   */
  dependencies?: string[];
  /**
   * Relative load priority. Lower values load earlier; higher values load later.
   */
  loadOrder?: number;
  /**
   * Player-facing settings schema. Keys are setting ids; values define type and UI.
   * Read at runtime with `api.settings.get`.
   */
  configSchema?: Record<string, ConfigSchemaEntry>;
  /**
   * Paths to JSON config overrides keyed by vanilla config id (for example `"drill"`).
   */
  configOverrides?: Record<string, string>;
  /**
   * Paths to GLSL shader replacements keyed by shader id (for example `"sky"`).
   */
  shaderOverrides?: Record<string, string>;
  /**
   * Texture replacements keyed by vanilla texture id.
   * A string value is a path; an object adds spritesheet frame metadata.
   */
  textureOverrides?: Record<string, TextureOverride | string>;
  /**
   * Optional content this mod publishes for others to consume.
   */
  provides?: ModProvide[];
  /**
   * Embedded custom map pack definition for this mod.
   */
  map?: ModMapDefinition;
}

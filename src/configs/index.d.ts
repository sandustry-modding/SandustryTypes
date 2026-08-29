/**
 * Sandkit mod file schemas: `modinfo.json` and `patches.json`.
 *
 * These are not runtime `sandkit` properties. Import from
 * `@sandustry-modding/types/configs` when typing mod folder config files.
 *
 * @module
 * @see https://sandustry.com/sandkit.html#mod-files-heading Official Sandkit API — Mod file structure
 */

export type {
  ConfigSchemaBoolean,
  ConfigSchemaChoice,
  ConfigSchemaChoiceOption,
  ConfigSchemaEntry,
  ConfigSchemaNumber,
  ModGameVersion,
  ModInfo,
  ModMapBlueprints,
  ModMapColorMapping,
  ModMapColorMappingLayers,
  ModMapDefinition,
  ModMapDepthLight,
  ModMapParallax,
  ModMapPoint,
  ModMapTopBounds,
  ModProvide,
  TextureOverride,
} from "./modinfo";

export type {
  BundlePatch,
  BundlePatchRegex,
  BundlePatchesFile,
  PatchOperation,
  PatchTargetFile,
} from "./patches";

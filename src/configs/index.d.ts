/**
 * Sandkit mod file schemas: `modinfo.json` and `patches.json`.
 *
 * These are not runtime `sandkit` properties. Import from
 * `@sandustry-modding/types/configs` when typing mod folder config files.
 *
 * JSON Schema (GitHub Pages):
 * https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json
 * https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json
 *
 * @module
 *
 * @see [Official docs](https://sandustry.com/sandkit.html#mod-files-heading)
 * @see [JSON Schema docs](https://sandustry-modding.github.io/SandustryTypes/#/schemas)
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
  BundlePatchesDocument,
  BundlePatchesFile,
  PatchOperation,
  PatchTargetFile,
} from "./patches";

# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Added

- Sandkit 0.5.6 API surface:
  - `api.terrains.meltAtCell(cellX, cellY)` (main and worker)
  - `api.events` event `building:removing` (fires before `building:removed`)
  - Worker intercept hook `fire:terrain:burn` (requires `guard.terrainType`)
  - `resource:collection:prepare` feedback value `"reduced"`
- `ElementDefinition.metaColor` (discovery and lexicon label color as `0xRRGGBB`)
- `ElementDefinition.isGrabbable` and `ElementDefinition.isTransportable` (grabber and conveyor)
- JSON Schema files for `modinfo.json` and `patches.json` under `docs/schemas/` (GitHub Pages URLs; see [JSON Schema](schemas.md))
- `npm run docs:schemas` generates those schemas from `src/configs/` via `ts-json-schema-generator`; `validate` checks they are not stale
- `ConfigSchemaChoice.description` / `descriptionKey` (same help fields as number and boolean)
- Optional `ModInfo.$schema` for editor schema association (ignored by the game)
- Optional `BundlePatchesDocument` (`$schema` + `patches`) so editors can attach a schema URL; bare arrays still validate
- `BundlePatch.occurrence` (`"all"` or a 1-based index) from the game patch loader

### Fixed

- Generated `modinfo.json` schema rejected `$schema` and `choice` settings that set `descriptionKey`

## 0.4.0 - 2026-08-29

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.4.0

### Added

- `npm run release` script: changelog/registry/auth checks, `validate`, then `npm publish` (optional `--dry-run`)
- `src/configs/` types for `modinfo.json` and `patches.json` (`@sandustry-modding/types/configs`), with JSDoc on every key
- Stronger structure definition fields: `tooltipHover`, `spanTiles`, `linkedClearance`, spritesheet/ui render blocks
- Stronger `TechDefinition` fields used by tech nodes (`cost`, `unlocks`, `currencyType`, `branch`)
- JSDoc `@example` blocks on many Sandkit members (main, worker, and configs)
- Prebuilt Docsify search index (`docs/assets/search-index.js`) so API search works without a runtime crawl
- Nested namespace roots in the docs sidebar (`sandkit`, `sandkit.api`, worker, engine, react)

### Changed

- Official `@see` links use a short “Official docs” label that deep-links to Sandkit HTML sections
- Docs search ranks full runtime paths (`sandkit.api.settings.get()`) instead of local member names only
- Move Full API reference to the bottom of the docs root nav block
- Drop the page TOC plugin and the nested `docs/api/_sidebar.md` in favor of one site sidebar

## 0.3.1 - 2026-08-27

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.3.1



### Fixed

- Deep package imports such as `@sandustry-modding/types/sandkit/engine` (Node `exports` `*` matches one path segment; map file and `index.d.ts` targets under `src/`)
- Ship root `CHANGELOG.md` and `LICENSE` in the npm tarball
- Document ambient setup with `/// <reference types="@sandustry-modding/types" />` (do not list this package under `compilerOptions.types`)

### Added

- `npm run validate` gate: declaration typecheck, unit tests, and packed-tarball consumer probes

## 0.3.0 - 2026-08-27

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.3.0

### Changed

- Move declaration sources into `src/` (`src/sandkit`, `src/worker`, `src/shared`, `src/global.d.ts`). Package subpaths such as `@sandustry-modding/types/sandkit/engine` stay the same
- Show local names for API member headings in the Docsify reference (full runtime path stays under each heading)

## 0.2.0 - 2026-08-27

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.2.0

### Added

- Official Sandkit API coverage from [sandustry.com/sandkit.html](https://sandustry.com/sandkit.html): `api.entities`, `api.pipes`, `api.factory`, `api.game`, `api.blueprints`, `api.pickups`, `api.grid.mutate`, and related worker surfaces
- JSDoc `@see` links back to the official Sandkit page on documented members

### Changed

- Canonical mutation names match official docs (`createAtCell`, `grid.mutate`, `getTypeById`, and similar). Old names stay as `@deprecated` aliases (`*WhenIdle`, `api.world`, `getTypeFromId`, and similar)

## 0.1.1 - 2026-08-27

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.1.1

### Changed

- Export subpaths (`./*`) so mods can import declaration modules such as `@sandustry-modding/types/sandkit/engine`

## 0.1.0 - 2026-08-27

https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.1.0

### Added

- Initial public release of `@sandustry-modding/types`
- TypeScript declarations for main-thread `sandkit` (`sandkit/api`, `sandkit/engine`, `sandkit/enums`, `sandkit/react`)
- Worker-thread declarations under `worker/` (`WorkerSandkitApi`)
- Shared base shapes under `shared/` for main and worker reuse
- Ambient `sandkit` free variable and type aliases via `global.d.ts`
- Docsify API reference generated from the declarations

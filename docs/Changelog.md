# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2026-08-27

### Changed

- Move declaration sources into `src/` (`src/sandkit`, `src/worker`, `src/shared`, `src/global.d.ts`). Package subpaths such as `@sandustry-modding/types/sandkit/engine` stay the same
- Show local names for API member headings in the Docsify reference (full runtime path stays under each heading)

## [0.2.0] - 2026-08-27

### Added

- Official Sandkit API coverage from [sandustry.com/sandkit.html](https://sandustry.com/sandkit.html): `api.entities`, `api.pipes`, `api.factory`, `api.game`, `api.blueprints`, `api.pickups`, `api.grid.mutate`, and related worker surfaces
- JSDoc `@see` links back to the official Sandkit page on documented members

### Changed

- Canonical mutation names match official docs (`createAtCell`, `grid.mutate`, `getTypeById`, and similar). Old names stay as `@deprecated` aliases (`*WhenIdle`, `api.world`, `getTypeFromId`, and similar)

## [0.1.1] - 2026-08-27

### Changed

- Export subpaths (`./*`) so mods can import declaration modules such as `@sandustry-modding/types/sandkit/engine`

## [0.1.0] - 2026-08-27

### Added

- Initial public release of `@sandustry-modding/types`
- TypeScript declarations for main-thread `sandkit` (`sandkit/api`, `sandkit/engine`, `sandkit/enums`, `sandkit/react`)
- Worker-thread declarations under `worker/` (`WorkerSandkitApi`)
- Shared base shapes under `shared/` for main and worker reuse
- Ambient `sandkit` free variable and type aliases via `global.d.ts`
- Docsify API reference generated from the declarations

[0.3.0]: https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.3.0
[0.2.0]: https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.2.0
[0.1.1]: https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.1.1
[0.1.0]: https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.1.0

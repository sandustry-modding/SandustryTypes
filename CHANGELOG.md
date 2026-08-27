# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[0.1.1]: https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.1.1
[0.1.0]: https://github.com/sandustry-modding/SandustryTypes/releases/tag/v0.1.0

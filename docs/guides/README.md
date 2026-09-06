# Guides

Step-by-step guides for Sandustry mod authors.

These pages focus on mod files, types, and the Sandkit API.
For project setup, watch builds, and Workshop upload commands, use the [mod template](https://sandustry-modding.github.io/SandustryModTemplate/#/).

## Start here

- [Getting started](guides/getting-started.md) — what a mod is, required files, and a minimal example
- [The mod lifecycle](guides/mod-lifecycle.md) — compilation, load order, events, and hooks

## Mod files

- [modinfo.json reference](guides/modinfo.md) — manifest fields, limits, and capabilities
- [Patching with patches.json](guides/patches.md) — bundle find-and-replace patches
- [Worker mods](guides/worker-mods.md) — simulation-worker entry and shared buffers
- [Publishing to Steam Workshop](guides/publishing.md) — packaging and `workshop.json`

## API reference

- [Search](../search.md) — find namespaces and members by live `sandkit` path
- [Full API reference](../full.md) — every namespace on one page
- [TypeScript types](../api/configs.md) — `modinfo.json`, `patches.json`, and `workshop.json`
- [JSON Schema](../schemas.md) — raw schema URLs for editors

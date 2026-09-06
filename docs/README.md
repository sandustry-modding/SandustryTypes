> [!WARNING]
> **Unofficial** community docs.
> Not affiliated with Lantto Games, Hooded Horse, or the [official Sandustry wiki](https://wiki.hoodedhorse.com/Sandustry/Sandustry_Official_Wiki ":target=_blank").
> Prefer the [official Sandkit API](https://sandustry.com/sandkit.html#api-access-heading ":target=_blank") when the two disagree.

# Sandkit API

Community reference for the live Sandustry `sandkit` modding API: every namespace, method, and enum — reverse-engineered and kept in sync with the game.

Install types as [`@sandustry-modding/types`](https://www.npmjs.com/package/@sandustry-modding/types ":target=_blank").

## Guides

New to modding?
Start with the step-by-step guides:

- [Getting started](guides/getting-started.md) — what a mod is, required files, and a minimal example
- [The mod lifecycle](guides/mod-lifecycle.md) — compilation, load order, events, and hooks
- [modinfo.json reference](guides/modinfo.md) — manifest fields, limits, and capabilities
- [Patching with patches.json](guides/patches.md) — bundle find-and-replace patches
- [Worker mods](guides/worker-mods.md) — simulation-worker entry and shared buffers
- [Publishing to Steam Workshop](guides/publishing.md) — packaging and `workshop.json`

[All guides →](guides/README.md)

## Browse the API

Open generated Sandkit pages from [Search](search.md).
Empty search lists namespaces.
Typed search finds methods and types by live `sandkit` path.

Direct pages:

- Electron — host preload bridge (`window.electron`), not part of `sandkit`
  - [Overview](electron-bridge.md) — when to use the bridge and IPC patterns
  - [API](api/electron.md) — generated `electron` reference
- Mod files — not runtime `sandkit` objects
  - [TypeScript types](api/configs.md) — `modinfo.json`, `patches.json`, and `workshop.json`
  - [JSON Schema](schemas.md) — raw schema URLs for editors
- [Full API reference](full.md) — every namespace on one page

## Install types

```bash
npm install @sandustry-modding/types
```

### Ambient types (preferred)

Load the host `sandkit` ambient with a triple-slash reference.
Put it at the top of `main.js` / `worker.js`, or in a small ambient `.d.ts` that your `tsconfig` / `jsconfig` includes:

```ts
/// <reference types="@sandustry-modding/types" />
```

Works in `.ts` and `.js` (including checked JS).
Do **not** put `@sandustry-modding/types` under `compilerOptions.types` — that list only loads packages from `node_modules/@types`.

Use the ambient `sandkit` free name in `main.js`.
In `worker.js`, type the API as `WorkerSandkitApi` — worker and main surfaces overlap but are not the same.

## Related links

- [Changelog](Changelog.md) — package and docs history
- [Official Sandkit API](https://sandustry.com/sandkit.html#api-access-heading ":target=_blank") — host API from the game
- [npm package](https://www.npmjs.com/package/@sandustry-modding/types ":target=_blank")
- [Mod template](https://sandustry-modding.github.io/SandustryModTemplate/#/ ":target=_blank") — starter mod and setup guide
- [Official Sandustry wiki](https://wiki.hoodedhorse.com/Sandustry/Sandustry_Official_Wiki ":target=_blank")

## Regenerate

From the package repo root:

```bash
npm run generate                  # catalog + API markdown + JSON Schema
npm run generate -- --schemas     # JSON Schema only (`docs/schemas/`)
```

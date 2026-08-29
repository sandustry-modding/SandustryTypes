> [!WARNING]
> **Unofficial** community docs. Not affiliated with Lantto Games, Hooded Horse, or the [official Sandustry wiki](https://wiki.hoodedhorse.com/Sandustry/Sandustry_Official_Wiki ':target=_blank'). Prefer the [official Sandkit API](https://sandustry.com/sandkit.html#api-access-heading ':target=_blank') when the two disagree.

# Sandkit API

TypeScript declarations for the live Sandustry `sandkit` host API. Install as [`@sandustry-modding/types`](https://www.npmjs.com/package/@sandustry-modding/types ':target=_blank').

## Related links

- [Changelog](Changelog.md) — package and docs history
- [Official Sandkit API](https://sandustry.com/sandkit.html#api-access-heading ':target=_blank') — host API from the game
- [npm package](https://www.npmjs.com/package/@sandustry-modding/types ':target=_blank') — install `@sandustry-modding/types`
- [Mod template](https://sandustry-modding.github.io/SandustryModTemplate/#/ ':target=_blank') — starter mod and setup guide

## Browse the API

- [Namespaces](modules.md) — APIs by topic group
  - [sandkit](api/sandkit.md) — root object shape
  - [Main thread](api/sandkit.api.md) — `main.js` surface (`sandkit.api`)
  - [Worker thread](api/sandkit.api.worker.md) — `worker.js` subset (mutations apply at once)
  - [Engine](api/sandkit.engine.md) — unstable escape hatch (`sandkit.engine`)
  - [React](api/sandkit.react.md) — HUD helpers from the host React build
- [Enums](api/sandkit.enums.md) — runtime enum values
- [Configs](api/configs.md) — `modinfo.json` and `patches.json` TypeScript types
- [JSON Schema](schemas.md) — `modinfo.json` / `patches.json` schemas (raw URLs for editors)
- [Full API reference](full.md) — every namespace on one page

## Install types

```bash
npm install @sandustry-modding/types
```

### Ambient types (preferred)

Load the host `sandkit` ambient with a triple-slash reference. Put it at the top of `main.js` / `worker.js`, or in a small ambient `.d.ts` that your `tsconfig` / `jsconfig` includes:

```ts
/// <reference types="@sandustry-modding/types" />
```

Works in `.ts` and `.js` (including checked JS). Do **not** put `@sandustry-modding/types` under `compilerOptions.types` — that list only loads packages from `node_modules/@types`.

Use the ambient `sandkit` free name in `main.js`. In `worker.js`, type the API as `WorkerSandkitApi` — worker and main surfaces overlap but are not the same.

## Also useful

- [Official Sandustry wiki](https://wiki.hoodedhorse.com/Sandustry/Sandustry_Official_Wiki ':target=_blank')

## Regenerate

From the package repo root:

```bash
npm run docs:api        # API markdown + JSON Schema from TypeScript
npm run docs:schemas    # JSON Schema only (`docs/schemas/`)
```

# Sandkit API

> [!WARNING]
> **Unofficial** community docs. Not affiliated with Lantto Games, Hooded Horse, or the [official Sandustry wiki](https://wiki.hoodedhorse.com/Sandustry/Sandustry_Official_Wiki). See the [official Sandkit docs](https://sandustry.com/sandkit.html#api-access-heading).

Community TypeScript reference for the live Sandustry `sandkit` host API. Package: [`@sandustry-modding/types`](https://www.npmjs.com/package/@sandustry-modding/types).

## Start here

| Go to | When you need |
| --- | --- |
| [Namespaces](modules.md) | Browse namespaces by group |
| [Full API reference](full.md) | All namespaces on one page |
| [Main thread](api/sandkit.api.md) | `main.js` APIs (`sandkit.api`) |
| [Worker thread](api/sandkit.api.worker.md) | `worker.js` APIs (subset + direct mutations) |
| [Engine](api/sandkit.engine.md) | Escape hatch (`sandkit.engine`) |
| [Enums](api/sandkit.enums.md) | Runtime enum values |
| [React](api/sandkit.react.md) | HUD JSX helpers |
| [Configs](api/configs.md) | `modinfo.json` and `patches.json` schemas |
| [Workshop corpus](workshop-corpus.md) | Shapes mined from published workshop mods |

## Install types

```bash
npm install @sandustry-modding/types
```

### Ambient types (preferred)

Pull the host `sandkit` ambient into your project with a triple-slash reference. Put it at the top of `main.js` / `worker.js`, or in a small ambient `.d.ts` that your `tsconfig` / `jsconfig` includes:

```ts
/// <reference types="@sandustry-modding/types" />
```

Works in `.ts` and `.js` (including checked JS). Do **not** list `@sandustry-modding/types` under `compilerOptions.types` — that list only loads packages from `node_modules/@types`.

Use the ambient `sandkit` free name in `main.js`. In `worker.js`, type the API as `WorkerSandkitApi` — worker and main surfaces overlap but are not interchangeable.

## Also useful

- [Official Sandkit docs](https://sandustry.com/sandkit.html#api-access-heading)
- [Sandustry Mod Template](https://sandustry-modding.github.io/SandustryModTemplate/#/)
- [Official Sandustry wiki](https://wiki.hoodedhorse.com/Sandustry/Sandustry_Official_Wiki)

## Regenerate

From the package repo root:

```bash
npm run docs:api
```

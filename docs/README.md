# Sandkit API

> [!WARNING]
> **Unofficial** community docs. Not affiliated with Lantto Games, Hooded Horse, or the [official Sandustry wiki](https://wiki.hoodedhorse.com/Sandustry/Sandustry_Official_Wiki). See the [official Sandkit docs](https://sandustry.com/sandkit.html).

Community TypeScript reference for the live Sandustry `sandkit` host API. Package: [`@sandustry-modding/types`](https://www.npmjs.com/package/@sandustry-modding/types).

## Start here

| Go to | When you need |
| --- | --- |
| [All namespaces](api/modules.md) | Browse namespaces by group |
| [Full API reference](api/full.md) | All namespaces on one page |
| [Main thread](api/sandkit.api.md) | `main.js` APIs (`sandkit.api`) |
| [Worker thread](api/sandkit.api.worker.md) | `worker.js` APIs (subset + direct mutations) |
| [Engine](api/sandkit.engine.md) | Escape hatch (`sandkit.engine`) |
| [Enums](api/sandkit.enums.md) | Runtime enum values |
| [React](api/sandkit.react.md) | HUD JSX helpers |

## Install types

```bash
npm install @sandustry-modding/types
```

```ts
/// <reference types="@sandustry-modding/types" />
```

Use the ambient `sandkit` free name in `main.js`. In `worker.js`, type the API as `WorkerSandkitApi` — worker and main surfaces overlap but are not interchangeable.

## Also useful

- [Official Sandkit docs](https://sandustry.com/sandkit.html)
- [Sandustry Mod Template](https://sandustry-modding.github.io/SandustryModTemplate/#/)
- [Official Sandustry wiki](https://wiki.hoodedhorse.com/Sandustry/Sandustry_Official_Wiki)

## Regenerate

From the package repo root:

```bash
npm run docs:api
```

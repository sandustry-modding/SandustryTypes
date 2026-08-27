# Sandkit API types

TypeScript declarations and Docsify API docs for the live Sandustry `sandkit` object. Package name: `@sandustry-modding/types`.

Originally a fork of [flamableassassin/sandustry-modding-types](https://github.com/flamableassassin/sandustry-modding-types/).

Folder layout mirrors runtime shape so you can jump from code to the matching `.d.ts` path.

## Runtime map

| Path | Runtime object |
| --- | --- |
| `sandkit/api/` | `sandkit.api` (main thread) |
| `sandkit/engine/api/` | `sandkit.engine.api` |
| `sandkit/engine/state.d.ts` | `sandkit.engine.state` / `sandkit.state` |
| `sandkit/enums/` | `sandkit.enums` |
| `sandkit/react.d.ts` | `sandkit.react` |
| `sandkit/index.d.ts` | Composed `Sandkit` root type |
| `global.d.ts` | Ambient `sandkit` free variable and type aliases |
| `worker/` | Worker-thread `sandkit.api` (see `WorkerSandkitApi`) |
| `shared/` | Internal base shapes reused by main and worker declarations |

## Runtime shape vs `export namespace`

At runtime, every API bag is a **plain object** with function properties — not a TypeScript `namespace`. MCP checks on a live game session show:

- `sandkit.api`, `sandkit.api.ui`, `sandkit.api.ui.overlays`, and `sandkit.engine.api.game` are all `typeof "object"` with `Object.prototype`
- Nested keys hold functions or further plain objects

Declaration files use `export namespace` because it is the usual `.d.ts` pattern for nested object APIs. It matches how you call the API (`sandkit.api.ui.update`) and supports `export import` when main and worker share base shapes under `shared/`.

`interface` or `type` object literals would also work for runtime shape, but they do not support the `export import` re-export style used across main, worker, and shared modules.

## Install

```bash
npm install @sandustry-modding/types
```

### Project config (preferred)

Add the package to `compilerOptions.types` in `tsconfig.json` or `jsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@sandustry-modding/types"]
  }
}
```

If you already list other packages in `types` (for example `"react"` or `"node"`), keep those entries and add `"@sandustry-modding/types"` to the same array. A non-empty `types` list replaces TypeScript’s default auto-inclusion of all `@types/*` packages.

`jsconfig.json` uses the same shape for JavaScript mods.

### Per-file reference

You can also pull the ambient types into one file:

```ts
/// <reference types="@sandustry-modding/types" />
```

That triple-slash directive works in `.ts` and `.js` (including checked JS with `checkJs`). Put it at the top of `main.js` / `worker.js`, or in a small ambient `.d.ts` included by your project.

Deep declaration modules are also available, for example:

```ts
import type { RetroConsoleGame } from "@sandustry-modding/types/sandkit/engine";
```

## Usage

- **Main mod (`main.js`):** use the ambient free name `sandkit`. Type aliases such as `SandkitApi` are global; do not import a value binding.
- **Worker mod (`worker.js`):** type `sandkit.api` as `WorkerSandkitApi`. Worker and main APIs overlap but are not interchangeable.
- **Shared folder:** not a runtime namespace. It holds domain shapes and API bases that main and worker modules extend.

## Maintaining types

Edit `.d.ts` files here. Regenerate the Docsify API reference after JSDoc changes.

## Docs site

Regenerate the Docsify API reference from these declarations:

```bash
npm run docs:api
```

Output lands in `docs/api/`. The namespace index is `docs/modules.md` and the combined page is `docs/full.md`. `npm run docs` runs that step, then serves the docs site.

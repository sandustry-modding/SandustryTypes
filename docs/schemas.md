# JSON Schema files

Machine-readable schemas for Sandkit mod folder files. They match `@sandustry-modding/types/configs` (`ModInfo`, `BundlePatchesFile`).

Prefer the [official Sandkit docs](https://sandustry.com/sandkit.html#mod-files-heading ':target=_blank') when a schema and the game disagree.

## URLs

After GitHub Pages publishes `docs/`, use these raw schema URLs:

| File | Schema URL |
| --- | --- |
| `modinfo.json` | https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json |
| `patches.json` | https://sandustry-modding.github.io/SandustryTypes/schemas/patches.json |

## Use in editors

Point `$schema` at the URL for the file you edit:

```json
{
  "$schema": "https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json",
  "manifestVersion": 1,
  "id": "author.example-mod",
  "name": "Example Mod",
  "version": "1.0.0",
  "apiVersion": 1,
  "entry": "main.js"
}
```

`patches.json` is a JSON **array**. Do not put `$schema` in the file. Point your editor at the schema URL by path (for example VS Code `json.schemas`).

## TypeScript

Import the same shapes from the npm package:

```ts
import type { ModInfo, BundlePatch } from "@sandustry-modding/types/configs";
```

See [configs](api/configs.md) for the full type reference.

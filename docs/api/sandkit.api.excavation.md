# sandkit.api.excavation

`sandkit.api.excavation` — register custom excavation tool dig profiles.
Main thread only.

## See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.excavation`

## Interfaces <!-- {docsify-ignore} -->

### ExcavationProfileDefinitionV1 :id=excavationprofiledefinitionv1

<p class="smt-member-path"><code>sandkit.api.excavation.ExcavationProfileDefinitionV1</code></p>

Defined in: [sandkit/api/excavation.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L21)

Excavation tool profile definition.

#### Properties

##### pattern?

```ts
optional pattern?: number[][]
```

Defined in: [sandkit/api/excavation.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L23)

Dig pattern grid; non-zero cells are removed.

##### power

```ts
power: number
```

Defined in: [sandkit/api/excavation.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L25)

Dig strength applied to matched cells. Clamped to 0–1000.

##### options?

```ts
optional options?: ExcavationProfileOptions
```

Defined in: [sandkit/api/excavation.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L27)

Optional profile-specific excavation flags.

##### terrainRules?

```ts
optional terrainRules?: readonly ExcavationTerrainRule[]
```

Defined in: [sandkit/api/excavation.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L29)

Per-terrain output and damage rules.

***

### ExcavationProfileOptions :id=excavationprofileoptions

<p class="smt-member-path"><code>sandkit.api.excavation.ExcavationProfileOptions</code></p>

Defined in: [sandkit/api/excavation.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L33)

Options attached to an excavation profile definition.

#### Properties

##### fromGun?

```ts
optional fromGun?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L34)

##### fromRocketExplosion?

```ts
optional fromRocketExplosion?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L35)

##### fromDrill?

```ts
optional fromDrill?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L36)

##### useLiteralOutVelocity?

```ts
optional useLiteralOutVelocity?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L37)

##### destroyNonDestructible?

```ts
optional destroyNonDestructible?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L38)

##### forceRemoveAll?

```ts
optional forceRemoveAll?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L39)

##### drillTierDamage?

```ts
optional drillTierDamage?: number
```

Defined in: [sandkit/api/excavation.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L41)

Clamped to 0–1000 when set.

***

### ExcavationTerrainRule :id=excavationterrainrule

<p class="smt-member-path"><code>sandkit.api.excavation.ExcavationTerrainRule</code></p>

Defined in: [sandkit/api/excavation.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L45)

Terrain match rule within an excavation profile.

#### Properties

##### cellType

```ts
cellType: TerrainRef
```

Defined in: [sandkit/api/excavation.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L47)

Terrain cell type to match.

##### ~~terrainType?~~

```ts
optional terrainType?: TerrainRef
```

Defined in: [sandkit/api/excavation.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L52)

###### Deprecated

Use [cellType](#celltype) instead.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias in `api.excavation.registerProfile` terrain rules

##### damage?

```ts
optional damage?: number
```

Defined in: [sandkit/api/excavation.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L54)

Damage applied when this rule matches.

##### outputElementType?

```ts
optional outputElementType?: ElementRef
```

Defined in: [sandkit/api/excavation.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L56)

Element type produced when this terrain is excavated.

## Functions <!-- {docsify-ignore} -->

### registerProfile() :id=registerprofile

<p class="smt-member-path"><code>sandkit.api.excavation.registerProfile()</code></p>

```ts
registerProfile(id: string, definition: ExcavationProfileDefinitionV1): void
```

Defined in: [sandkit/api/excavation.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/excavation.d.ts#L18)

Registers an excavation profile by id.

#### Parameters

##### id

`string`

Unique profile id (1–128 chars: letters, numbers, `.`, `_`, `:`, `-`).

##### definition

[`ExcavationProfileDefinitionV1`](#excavationprofiledefinitionv1)

Pattern, power, terrain rules, and profile options.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.excavation.registerProfile`

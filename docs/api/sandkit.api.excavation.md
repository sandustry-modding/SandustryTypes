# sandkit.api.excavation

`sandkit.api.excavation` — register custom excavation tool dig profiles.
Main thread only.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Interfaces <!-- {docsify-ignore} -->

### ExcavationProfileDefinitionV1 :id=excavationprofiledefinitionv1

<p class="smt-member-path"><code>sandkit.api.excavation.ExcavationProfileDefinitionV1</code></p>

Defined in: [sandkit/api/excavation.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L50)

Excavation tool profile definition.

#### Properties

##### pattern?

```ts
optional pattern?: number[][]
```

Defined in: [sandkit/api/excavation.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L52)

Dig pattern grid; non-zero cells are removed.

##### power

```ts
power: number;
```

Defined in: [sandkit/api/excavation.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L54)

Dig strength applied to matched cells. Clamped to 0–1000.

##### options?

```ts
optional options?: ExcavationProfileOptions
```

Defined in: [sandkit/api/excavation.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L56)

Optional profile-specific excavation flags.

##### terrainRules?

```ts
optional terrainRules?: readonly ExcavationTerrainRule[]
```

Defined in: [sandkit/api/excavation.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L58)

Per-terrain output and damage rules.

---

### ExcavationProfileOptions :id=excavationprofileoptions

<p class="smt-member-path"><code>sandkit.api.excavation.ExcavationProfileOptions</code></p>

Defined in: [sandkit/api/excavation.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L62)

Options attached to an excavation profile definition.

#### Properties

##### fromGun?

```ts
optional fromGun?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L63)

##### fromRocketExplosion?

```ts
optional fromRocketExplosion?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L64)

##### fromDrill?

```ts
optional fromDrill?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L65)

##### useLiteralOutVelocity?

```ts
optional useLiteralOutVelocity?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L66)

##### destroyNonDestructible?

```ts
optional destroyNonDestructible?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L67)

##### forceRemoveAll?

```ts
optional forceRemoveAll?: boolean
```

Defined in: [sandkit/api/excavation.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L68)

##### drillTierDamage?

```ts
optional drillTierDamage?: number
```

Defined in: [sandkit/api/excavation.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L70)

Clamped to 0–1000 when set.

---

### ExcavationTerrainRule :id=excavationterrainrule

<p class="smt-member-path"><code>sandkit.api.excavation.ExcavationTerrainRule</code></p>

Defined in: [sandkit/api/excavation.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L74)

Terrain match rule within an excavation profile.

#### Properties

##### cellType

```ts
cellType: TerrainRef;
```

Defined in: [sandkit/api/excavation.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L76)

Terrain cell type to match.

##### ~~terrainType?~~

```ts
optional terrainType?: TerrainRef
```

Defined in: [sandkit/api/excavation.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L82)

###### Deprecated

Use [cellType](#celltype) instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### damage?

```ts
optional damage?: number
```

Defined in: [sandkit/api/excavation.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L84)

Damage applied when this rule matches.

##### outputElementType?

```ts
optional outputElementType?: ElementRef
```

Defined in: [sandkit/api/excavation.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L86)

Element type produced when this terrain is excavated.

## Functions <!-- {docsify-ignore} -->

### registerProfile() :id=registerprofile

<p class="smt-member-path"><code>sandkit.api.excavation.registerProfile()</code></p>

```ts
registerProfile(id: string, definition: ExcavationProfileDefinitionV1): void
```

Defined in: [sandkit/api/excavation.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/excavation.d.ts#L47)

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

#### Example

```ts
const profileId = "example:voidGun";
const duneType = api.terrains.getTypeById("dune");
const sandType = api.elements.getTypeById("sand");

api.excavation.registerProfile(profileId, {
  power: 8,
  terrainRules: [
    {
      cellType: duneType,
      outputElementType: sandType,
    },
  ],
});

api.hooks.modify("excavation:prepare", (args) => {
  if (args.sourceKind !== "projectile" || args.sourceId !== "implosionGun") {
    return;
  }

  args.profileId = profileId;
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

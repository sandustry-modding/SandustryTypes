# sandkit.api.terrains (worker)

**`Internal`**

Shared `sandkit.api.terrains` base — terrain type lookup and cell mutation.

Worker-entry mutations are immediate. Main thread defers matching helpers in
`sandkit.api.terrains`.

 Base namespace reused by main and worker declarations.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.terrains.TerrainDefinition :id=terraindefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L20" target="_blank" rel="noopener">terrains.d.ts:20</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | string | Unique mod-scoped terrain id. |
| nameKey? | string | i18n key for the terrain display name. |
| hp? | number | Default terrain hit points. |
| materialId? | number | Material id used for rendering. Must be > obstacle breakpoint and < 150. |
| metaColor? | number | UI/meta color as 0xRRGGBB. |
| colorHSL? | [number, number, number] | Base terrain color as HSL components. |
| excavationRequirements? | readonly string[] | Tool item ids required to excavate this terrain. |
| interactions? | readonly object[] | Tooltip interactions shown for this terrain. |
| output? | object | Default element drop when the terrain is destroyed. |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### nameKey? <!-- {docsify-ignore} -->

##### hp? <!-- {docsify-ignore} -->

##### materialId? <!-- {docsify-ignore} -->

##### metaColor? <!-- {docsify-ignore} -->

##### colorHSL? <!-- {docsify-ignore} -->

##### excavationRequirements? <!-- {docsify-ignore} -->

##### interactions? <!-- {docsify-ignore} -->

##### output? <!-- {docsify-ignore} -->

</div>

Terrain definition shape for register and [getDefinitionByType](?id=getdefinitionbytype).

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainDataAtCell :id=terraindataatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L50" target="_blank" rel="noopener">terrains.d.ts:50</a></p>

| Property | Type | Description |
| --- | --- | --- |
| cellType | TerrainType | Numeric terrain cell type. |
| hitPoints | number \| null | Current hit points, or null when the terrain has no hp. |
| ~~hp?~~ | number \| null |  |

<div class="smt-member-anchors">

##### cellType <!-- {docsify-ignore} -->

##### hitPoints <!-- {docsify-ignore} -->

##### ~~hp?~~ <!-- {docsify-ignore} -->

</div>

Terrain cell data returned by [getDataAtCell](?id=getdataatcell).

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainMutationOptions :id=terrainmutationoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L238" target="_blank" rel="noopener">terrains.d.ts:238</a></p>

| Property | Type | Description |
| --- | --- | --- |
| skipShadow? | boolean | Skip shadow updates around the changed cell. |

<div class="smt-member-anchors">

##### skipShadow? <!-- {docsify-ignore} -->

</div>

Options for terrain create, replace, or remove calls.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.terrains.TerrainType :id=terraintype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L248" target="_blank" rel="noopener">terrains.d.ts:248</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainType = CellType | TaggedNumber&lt;&quot;terrainType&quot;&gt;">

```ts
TerrainType = CellType | TaggedNumber<"terrainType">
```

</div>

Numeric terrain / [CellTypeEnum](api/sandkit.enums.CellType.md) handle.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainId :id=terrainid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L255" target="_blank" rel="noopener">terrains.d.ts:255</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainId = LooseString&lt;never&gt;">

```ts
TerrainId = LooseString<never>
```

</div>

Mod or built-in terrain string id.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.TerrainRef :id=terrainref

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L262" target="_blank" rel="noopener">terrains.d.ts:262</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.TerrainRef = TerrainType | TerrainId">

```ts
TerrainRef = TerrainType | TerrainId
```

</div>

Type handle or string id accepted by mutation helpers.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.terrains.getIdByType :id=getidbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L74" target="_blank" rel="noopener">terrains.d.ts:74</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.getIdByType(terrainType: TerrainType): string &amp; object">

```ts
getIdByType(terrainType: TerrainType): string & object
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| terrainType | [`TerrainType`](?id=terraintype) | Numeric terrain cell type. |

<div class="smt-member-anchors">

##### terrainType <!-- {docsify-ignore} -->

</div>

Return the mod string id for a numeric terrain type.

`string` & `object`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.getTypeById :id=gettypebyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L83" target="_blank" rel="noopener">terrains.d.ts:83</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.getTypeById(terrainId: string &amp; object): TerrainType">

```ts
getTypeById(terrainId: string & object): TerrainType
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| terrainId | `string` & `object` | Mod-registered or built-in terrain id. |

<div class="smt-member-anchors">

##### terrainId <!-- {docsify-ignore} -->

</div>

Resolve a terrain string id to a numeric cell type.

[`TerrainType`](?id=terraintype)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.terrains.getTypeFromId~~ :id=gettypefromid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L90" target="_blank" rel="noopener">terrains.d.ts:90</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.getTypeFromId(terrainId: string &amp; object): TerrainType">

```ts
getTypeFromId(terrainId: string & object): TerrainType
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| terrainId | `string` & `object` |  |

<div class="smt-member-anchors">

##### terrainId <!-- {docsify-ignore} -->

</div>

[`TerrainType`](?id=terraintype)

#### Deprecated

Use [getTypeById](?id=gettypebyid) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.getDefinitionByType :id=getdefinitionbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L99" target="_blank" rel="noopener">terrains.d.ts:99</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.getDefinitionByType(terrainType: TerrainType): TerrainDefinition | undefined">

```ts
getDefinitionByType(terrainType: TerrainType): TerrainDefinition | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| terrainType | [`TerrainType`](?id=terraintype) | Numeric terrain cell type. |

<div class="smt-member-anchors">

##### terrainType <!-- {docsify-ignore} -->

</div>

Look up the definition for a terrain type.

[`TerrainDefinition`](?id=terraindefinition) \| `undefined`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.getTypeAtCell :id=gettypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L109" target="_blank" rel="noopener">terrains.d.ts:109</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.getTypeAtCell(...args: CellCoordinates): TerrainType | null">

```ts
getTypeAtCell(...args: CellCoordinates): TerrainType | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the terrain cell type at a cell, or null when none.

[`TerrainType`](?id=terraintype) \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.getDataAtCell :id=getdataatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L120" target="_blank" rel="noopener">terrains.d.ts:120</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.getDataAtCell(...args: CellCoordinates): TerrainDataAtCell | null">

```ts
getDataAtCell(...args: CellCoordinates): TerrainDataAtCell | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return terrain cell type and hit points at a cell.

[`TerrainDataAtCell`](?id=terraindataatcell) \| `null` Cell type and hit points, or null when the cell is not terrain.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.isAtCell :id=isatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L130" target="_blank" rel="noopener">terrains.d.ts:130</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.isAtCell(...args: CellCoordinates): boolean">

```ts
isAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when any terrain occupies the cell.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.isTypeAtCell :id=istypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L141" target="_blank" rel="noopener">terrains.d.ts:141</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.isTypeAtCell(...args: [number, number, string &amp; object]): boolean">

```ts
isTypeAtCell(...args: [number, number, string & object]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `string` & `object`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the cell terrain matches the given id.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.isCellIdTerrain :id=iscellidterrain

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L150" target="_blank" rel="noopener">terrains.d.ts:150</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.isCellIdTerrain(cellId: CellId): boolean">

```ts
isCellIdTerrain(cellId: CellId): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| cellId | [`CellId`](api/shared.nominal.md?id=cellid) | Packed cell id from [world.getCellIdAtCell](api/sandkit.api.grid.md?id=getcellidatcell). |

<div class="smt-member-anchors">

##### cellId <!-- {docsify-ignore} -->

</div>

Return true when a packed cell id refers to terrain.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.damageAtCell :id=damageatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L161" target="_blank" rel="noopener">terrains.d.ts:161</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.damageAtCell(...args: [number, number, number]): void">

```ts
damageAtCell(...args: [number, number, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Apply damage to terrain at a cell.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.meltAtCell :id=meltatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L171" target="_blank" rel="noopener">terrains.d.ts:171</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.meltAtCell(...args: CellCoordinates): void">

```ts
meltAtCell(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Melt terrain at a cell (for example ice to water). Worker-entry writes are immediate.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.createAtCell :id=createatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L183" target="_blank" rel="noopener">terrains.d.ts:183</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void">

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`TerrainRef`](?id=terrainref), [`TerrainMutationOptions`](?id=terrainmutationoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Place terrain at an empty cell. Worker-entry writes are immediate.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.replaceAtCell :id=replaceatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L197" target="_blank" rel="noopener">terrains.d.ts:197</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void">

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`TerrainRef`](?id=terrainref), [`TerrainMutationOptions`](?id=terrainmutationoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Replace existing terrain at a cell. Worker-entry writes are immediate.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.removeAtCell :id=removeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L210" target="_blank" rel="noopener">terrains.d.ts:210</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.removeAtCell(...args: number, number, [TerrainMutationOptions]): void">

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`TerrainMutationOptions`](?id=terrainmutationoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Remove terrain from a cell. Worker-entry writes are immediate.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.terrains.setHitPointsAtCell :id=sethitpointsatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L224" target="_blank" rel="noopener">terrains.d.ts:224</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.setHitPointsAtCell(...args: [number, number, number]): boolean">

```ts
setHitPointsAtCell(...args: [number, number, number]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set terrain hit points at a cell. Worker-entry writes are immediate.

True when hit points changed or the terrain was removed.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.terrains.setHpAtCell~~ :id=sethpatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L231" target="_blank" rel="noopener">terrains.d.ts:231</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.terrains.setHpAtCell(...args: [number, number, number]): boolean">

```ts
setHpAtCell(...args: [number, number, number]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [setHitPointsAtCell](?id=sethitpointsatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

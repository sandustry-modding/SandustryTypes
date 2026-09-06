# sandkit.api.terrains (worker)

**`Internal`**

Shared `sandkit.api.terrains` base — terrain type lookup and cell mutation.

Worker-entry mutations are immediate. Main thread defers matching helpers in
`sandkit.api.terrains`.

 Base namespace reused by main and worker declarations.

## Interfaces <!-- {docsify-ignore} -->

### TerrainDefinition :id=terraindefinition

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainDefinition (worker)</code></p>
Defined in: [shared/api/terrains.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L20)

Terrain definition shape for register and [getDefinitionByType](#getdefinitionbytype).

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### id

```ts
id: string
```

Defined in: [shared/api/terrains.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L22)

Unique mod-scoped terrain id.

##### nameKey?

```ts
optional nameKey?: string
```

Defined in: [shared/api/terrains.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L24)

i18n key for the terrain display name.

##### hp?

```ts
optional hp?: number
```

Defined in: [shared/api/terrains.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L26)

Default terrain hit points.

##### materialId?

```ts
optional materialId?: number
```

Defined in: [shared/api/terrains.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L28)

Material id used for rendering. Must be > obstacle breakpoint and < 150.

##### metaColor?

```ts
optional metaColor?: number
```

Defined in: [shared/api/terrains.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L30)

UI/meta color as 0xRRGGBB.

##### colorHSL?

```ts
optional colorHSL?: [number, number, number]
```

Defined in: [shared/api/terrains.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L32)

Base terrain color as HSL components.

##### excavationRequirements?

```ts
optional excavationRequirements?: readonly string[]
```

Defined in: [shared/api/terrains.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L34)

Tool item ids required to excavate this terrain.

##### interactions?

```ts
optional interactions?: readonly object[]
```

Defined in: [shared/api/terrains.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L36)

Tooltip interactions shown for this terrain.

##### output?

```ts
optional output?: object
```

Defined in: [shared/api/terrains.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L38)

Default element drop when the terrain is destroyed.

###### elementType

```ts
elementType: ElementType
```

###### chance

```ts
chance: number
```

***

### TerrainDataAtCell :id=terraindataatcell

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainDataAtCell (worker)</code></p>
Defined in: [shared/api/terrains.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L50)

Terrain cell data returned by [getDataAtCell](#getdataatcell).

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

#### Properties

##### cellType

```ts
cellType: TerrainType
```

Defined in: [shared/api/terrains.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L52)

Numeric terrain cell type.

##### hitPoints

```ts
hitPoints: number | null
```

Defined in: [shared/api/terrains.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L58)

Current hit points, or null when the terrain has no hp.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### ~~hp?~~

```ts
optional hp?: number | null
```

Defined in: [shared/api/terrains.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L64)

###### Deprecated

Use [hitPoints](#hitpoints) instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### TerrainMutationOptions :id=terrainmutationoptions

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainMutationOptions (worker)</code></p>
Defined in: [shared/api/terrains.d.ts:238](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L238)

Options for terrain create, replace, or remove calls.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

#### Properties

##### skipShadow?

```ts
optional skipShadow?: boolean
```

Defined in: [shared/api/terrains.d.ts:240](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L240)

Skip shadow updates around the changed cell.

## Type Aliases <!-- {docsify-ignore} -->

### TerrainType :id=terraintype

```ts
sandkit.api.terrains.TerrainType = CellType | TaggedNumber<"terrainType">
```

Defined in: [shared/api/terrains.d.ts:248](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L248)

Numeric terrain / [CellTypeEnum](api/sandkit.enums.CellType.md) handle.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### TerrainId :id=terrainid

```ts
sandkit.api.terrains.TerrainId = LooseString<never>
```

Defined in: [shared/api/terrains.d.ts:255](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L255)

Mod or built-in terrain string id.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### TerrainRef :id=terrainref

```ts
sandkit.api.terrains.TerrainRef = TerrainType | TerrainId
```

Defined in: [shared/api/terrains.d.ts:262](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L262)

Type handle or string id accepted by mutation helpers.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Functions <!-- {docsify-ignore} -->

### getIdByType() :id=getidbytype

```ts
sandkit.api.terrains.getIdByType(terrainType: TerrainType): string & object
```

Defined in: [shared/api/terrains.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L74)

Return the mod string id for a numeric terrain type.

#### Parameters

##### terrainType

[`TerrainType`](#terraintype)

Numeric terrain cell type.

#### Returns

`string` & `object`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getTypeById() :id=gettypebyid

```ts
sandkit.api.terrains.getTypeById(terrainId: string & object): TerrainType
```

Defined in: [shared/api/terrains.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L83)

Resolve a terrain string id to a numeric cell type.

#### Parameters

##### terrainId

`string` & `object`

Mod-registered or built-in terrain id.

#### Returns

[`TerrainType`](#terraintype)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~getTypeFromId()~~ :id=gettypefromid

```ts
sandkit.api.terrains.getTypeFromId(terrainId: string & object): TerrainType
```

Defined in: [shared/api/terrains.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L90)

#### Parameters

##### terrainId

`string` & `object`

#### Returns

[`TerrainType`](#terraintype)

#### Deprecated

Use [getTypeById](#gettypebyid) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getDefinitionByType() :id=getdefinitionbytype

```ts
sandkit.api.terrains.getDefinitionByType(terrainType: TerrainType): TerrainDefinition | undefined
```

Defined in: [shared/api/terrains.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L99)

Look up the definition for a terrain type.

#### Parameters

##### terrainType

[`TerrainType`](#terraintype)

Numeric terrain cell type.

#### Returns

[`TerrainDefinition`](#terraindefinition) \| `undefined`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getTypeAtCell() :id=gettypeatcell

```ts
sandkit.api.terrains.getTypeAtCell(...args: CellCoordinates): TerrainType | null
```

Defined in: [shared/api/terrains.d.ts:109](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L109)

Return the terrain cell type at a cell, or null when none.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`TerrainType`](#terraintype) \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getDataAtCell() :id=getdataatcell

```ts
sandkit.api.terrains.getDataAtCell(...args: CellCoordinates): TerrainDataAtCell | null
```

Defined in: [shared/api/terrains.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L120)

Return terrain cell type and hit points at a cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`TerrainDataAtCell`](#terraindataatcell) \| `null`

Cell type and hit points, or null when the cell is not terrain.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isAtCell() :id=isatcell

```ts
sandkit.api.terrains.isAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/terrains.d.ts:130](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L130)

Return true when any terrain occupies the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isTypeAtCell() :id=istypeatcell

```ts
sandkit.api.terrains.isTypeAtCell(...args: [number, number, string & object]): boolean
```

Defined in: [shared/api/terrains.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L141)

Return true when the cell terrain matches the given id.

#### Parameters

##### args

...\[`number`, `number`, `string` & `object`\]

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isCellIdTerrain() :id=iscellidterrain

```ts
sandkit.api.terrains.isCellIdTerrain(cellId: CellId): boolean
```

Defined in: [shared/api/terrains.d.ts:150](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L150)

Return true when a packed cell id refers to terrain.

#### Parameters

##### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id from [world.getCellIdAtCell](api/sandkit.api.grid.md#getcellidatcell).

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### damageAtCell() :id=damageatcell

```ts
sandkit.api.terrains.damageAtCell(...args: [number, number, number]): void
```

Defined in: [shared/api/terrains.d.ts:161](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L161)

Apply damage to terrain at a cell.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### meltAtCell() :id=meltatcell

```ts
sandkit.api.terrains.meltAtCell(...args: CellCoordinates): void
```

Defined in: [shared/api/terrains.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L171)

Melt terrain at a cell (for example ice to water). Worker-entry writes are immediate.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### createAtCell() :id=createatcell

```ts
sandkit.api.terrains.createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:183](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L183)

Place terrain at an empty cell. Worker-entry writes are immediate.

#### Parameters

##### args

...\[`number`, `number`, [`TerrainRef`](#terrainref), [`TerrainMutationOptions`](#terrainmutationoptions)\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### replaceAtCell() :id=replaceatcell

```ts
sandkit.api.terrains.replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:197](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L197)

Replace existing terrain at a cell. Worker-entry writes are immediate.

#### Parameters

##### args

...\[`number`, `number`, [`TerrainRef`](#terrainref), [`TerrainMutationOptions`](#terrainmutationoptions)\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### removeAtCell() :id=removeatcell

```ts
sandkit.api.terrains.removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:210](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L210)

Remove terrain from a cell. Worker-entry writes are immediate.

#### Parameters

##### args

...\[`number`, `number`, [`TerrainMutationOptions`](#terrainmutationoptions)\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### setHitPointsAtCell() :id=sethitpointsatcell

```ts
sandkit.api.terrains.setHitPointsAtCell(...args: [number, number, number]): boolean
```

Defined in: [shared/api/terrains.d.ts:224](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L224)

Set terrain hit points at a cell. Worker-entry writes are immediate.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`boolean`

True when hit points changed or the terrain was removed.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~setHpAtCell()~~ :id=sethpatcell

```ts
sandkit.api.terrains.setHpAtCell(...args: [number, number, number]): boolean
```

Defined in: [shared/api/terrains.d.ts:231](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L231)

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`boolean`

#### Deprecated

Use [setHitPointsAtCell](#sethitpointsatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

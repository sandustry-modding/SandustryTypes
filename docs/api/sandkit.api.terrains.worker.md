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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.terrains.register`

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.terrains.getDataAtCell`

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.terrains.getDataAtCell`

##### ~~hp?~~

```ts
optional hp?: number | null
```

Defined in: [shared/api/terrains.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L63)

###### Deprecated

Use [hitPoints](#hitpoints) instead.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `result.hitPoints`

***

### TerrainMutationOptions :id=terrainmutationoptions

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainMutationOptions (worker)</code></p>

Defined in: [shared/api/terrains.d.ts:206](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L206)

Options for terrain create, replace, or remove calls.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.terrains.createAtCell`

#### Properties

##### skipShadow?

```ts
optional skipShadow?: boolean
```

Defined in: [shared/api/terrains.d.ts:208](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L208)

Skip shadow updates around the changed cell.

## Type Aliases <!-- {docsify-ignore} -->

### TerrainType :id=terraintype

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainType (worker)</code></p>

```ts
TerrainType = CellType | TaggedNumber<"terrainType">
```

Defined in: [shared/api/terrains.d.ts:216](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L216)

Numeric terrain / [CellTypeEnum](api/sandkit.enums.CellType.md) handle.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.terrains`

***

### TerrainId :id=terrainid

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainId (worker)</code></p>

```ts
TerrainId = LooseString<never>
```

Defined in: [shared/api/terrains.d.ts:223](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L223)

Mod or built-in terrain string id.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.terrains`

***

### TerrainRef :id=terrainref

<p class="smt-member-path"><code>sandkit.api.terrains.TerrainRef (worker)</code></p>

```ts
TerrainRef = TerrainType | TerrainId
```

Defined in: [shared/api/terrains.d.ts:230](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L230)

Type handle or string id accepted by mutation helpers.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.terrains`

## Functions <!-- {docsify-ignore} -->

### getIdByType() :id=getidbytype

<p class="smt-member-path"><code>sandkit.api.terrains.getIdByType() (worker)</code></p>

```ts
getIdByType(terrainType: TerrainType): string & object
```

Defined in: [shared/api/terrains.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L72)

Return the mod string id for a numeric terrain type.

#### Parameters

##### terrainType

[`TerrainType`](#terraintype)

Numeric terrain cell type.

#### Returns

`string` & `object`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.terrains.getIdByType`

***

### getTypeById() :id=gettypebyid

<p class="smt-member-path"><code>sandkit.api.terrains.getTypeById() (worker)</code></p>

```ts
getTypeById(terrainId: string & object): TerrainType
```

Defined in: [shared/api/terrains.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L80)

Resolve a terrain string id to a numeric cell type.

#### Parameters

##### terrainId

`string` & `object`

Mod-registered or built-in terrain id.

#### Returns

[`TerrainType`](#terraintype)

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.terrains.getTypeById`

***

### ~~getTypeFromId()~~

```ts
getTypeFromId(terrainId: string & object): TerrainType
```

Defined in: [shared/api/terrains.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L86)

#### Parameters

##### terrainId

`string` & `object`

#### Returns

[`TerrainType`](#terraintype)

#### Deprecated

Use [getTypeById](#gettypebyid) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.terrains.getTypeById`

***

### getDefinitionByType() :id=getdefinitionbytype

<p class="smt-member-path"><code>sandkit.api.terrains.getDefinitionByType() (worker)</code></p>

```ts
getDefinitionByType(terrainType: TerrainType): TerrainDefinition | undefined
```

Defined in: [shared/api/terrains.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L94)

Look up the definition for a terrain type.

#### Parameters

##### terrainType

[`TerrainType`](#terraintype)

Numeric terrain cell type.

#### Returns

[`TerrainDefinition`](#terraindefinition) \| `undefined`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.terrains.getDefinitionByType`

***

### getTypeAtCell() :id=gettypeatcell

<p class="smt-member-path"><code>sandkit.api.terrains.getTypeAtCell() (worker)</code></p>

```ts
getTypeAtCell(...args: CellCoordinates): TerrainType | null
```

Defined in: [shared/api/terrains.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L103)

Return the terrain cell type at a cell, or null when none.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`TerrainType`](#terraintype) \| `null`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.terrains.getTypeAtCell`

***

### getDataAtCell() :id=getdataatcell

<p class="smt-member-path"><code>sandkit.api.terrains.getDataAtCell() (worker)</code></p>

```ts
getDataAtCell(...args: CellCoordinates): TerrainDataAtCell | null
```

Defined in: [shared/api/terrains.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L113)

Return terrain cell type and hit points at a cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`TerrainDataAtCell`](#terraindataatcell) \| `null`

Cell type and hit points, or null when the cell is not terrain.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.terrains.getDataAtCell`

***

### isAtCell() :id=isatcell

<p class="smt-member-path"><code>sandkit.api.terrains.isAtCell() (worker)</code></p>

```ts
isAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/terrains.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L122)

Return true when any terrain occupies the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.terrains.isAtCell`

***

### isTypeAtCell() :id=istypeatcell

<p class="smt-member-path"><code>sandkit.api.terrains.isTypeAtCell() (worker)</code></p>

```ts
isTypeAtCell(...args: [number, number, string & object]): boolean
```

Defined in: [shared/api/terrains.d.ts:132](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L132)

Return true when the cell terrain matches the given id.

#### Parameters

##### args

...\[`number`, `number`, `string` & `object`\]

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.terrains.isTypeAtCell`

***

### isCellIdTerrain() :id=iscellidterrain

<p class="smt-member-path"><code>sandkit.api.terrains.isCellIdTerrain() (worker)</code></p>

```ts
isCellIdTerrain(cellId: CellId): boolean
```

Defined in: [shared/api/terrains.d.ts:140](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L140)

Return true when a packed cell id refers to terrain.

#### Parameters

##### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id from [world.getCellIdAtCell](api/sandkit.api.grid.md#getcellidatcell).

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.terrains.isCellIdTerrain`

***

### damageAtCell() :id=damageatcell

<p class="smt-member-path"><code>sandkit.api.terrains.damageAtCell() (worker)</code></p>

```ts
damageAtCell(...args: [number, number, number]): void
```

Defined in: [shared/api/terrains.d.ts:150](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L150)

Apply damage to terrain at a cell.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.terrains.damageAtCell`

***

### createAtCell() :id=createatcell

<p class="smt-member-path"><code>sandkit.api.terrains.createAtCell() (worker)</code></p>

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:161](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L161)

Place terrain at an empty cell. Worker-entry writes are immediate.

#### Parameters

##### args

...\[`number`, `number`, [`TerrainRef`](#terrainref), [`TerrainMutationOptions`](#terrainmutationoptions)\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.terrains.createAtCell`

***

### replaceAtCell() :id=replaceatcell

<p class="smt-member-path"><code>sandkit.api.terrains.replaceAtCell() (worker)</code></p>

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L172)

Replace existing terrain at a cell. Worker-entry writes are immediate.

#### Parameters

##### args

...\[`number`, `number`, [`TerrainRef`](#terrainref), [`TerrainMutationOptions`](#terrainmutationoptions)\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.terrains.replaceAtCell`

***

### removeAtCell() :id=removeatcell

<p class="smt-member-path"><code>sandkit.api.terrains.removeAtCell() (worker)</code></p>

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:182](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L182)

Remove terrain from a cell. Worker-entry writes are immediate.

#### Parameters

##### args

...\[`number`, `number`, [`TerrainMutationOptions`](#terrainmutationoptions)\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.terrains.removeAtCell`

***

### setHitPointsAtCell() :id=sethitpointsatcell

<p class="smt-member-path"><code>sandkit.api.terrains.setHitPointsAtCell() (worker)</code></p>

```ts
setHitPointsAtCell(...args: [number, number, number]): boolean
```

Defined in: [shared/api/terrains.d.ts:193](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L193)

Set terrain hit points at a cell. Worker-entry writes are immediate.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`boolean`

True when hit points changed or the terrain was removed.

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Worker entry `api.terrains.setHitPointsAtCell`

***

### ~~setHpAtCell()~~

```ts
setHpAtCell(...args: [number, number, number]): boolean
```

Defined in: [shared/api/terrains.d.ts:199](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/terrains.d.ts#L199)

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`boolean`

#### Deprecated

Use [setHitPointsAtCell](#sethitpointsatcell) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.terrains.setHitPointsAtCell`

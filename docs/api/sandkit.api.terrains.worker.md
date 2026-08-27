# sandkit.api.terrains (worker)

**`Internal`**

Shared `sandkit.api.terrains` base — terrain type lookup and cell mutation.

 Base namespace reused by main and worker declarations.

## Interfaces <!-- {docsify-ignore} -->

### sandkit.api.terrains.TerrainMutationOptions (worker) :id=terrainmutationoptions

Defined in: [shared/api/terrains.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L89)

Options for terrain create, replace, or remove calls.

#### Properties

##### skipShadow?

```ts
optional skipShadow?: boolean
```

Defined in: [shared/api/terrains.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L91)

Skip shadow updates around the changed cell.

## Type Aliases <!-- {docsify-ignore} -->

### sandkit.api.terrains.TerrainType (worker) :id=terraintype

```ts
TerrainType = CellType | TaggedNumber<"terrainType">
```

Defined in: [shared/api/terrains.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L95)

Numeric terrain / [CellTypeEnum](api/sandkit.enums.CellType.md) handle.

***

### sandkit.api.terrains.TerrainId (worker) :id=terrainid

```ts
TerrainId = LooseString<never>
```

Defined in: [shared/api/terrains.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L97)

Mod or built-in terrain string id.

***

### sandkit.api.terrains.TerrainRef (worker) :id=terrainref

```ts
TerrainRef = TerrainType | TerrainId
```

Defined in: [shared/api/terrains.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L99)

Type handle or string id accepted by mutation helpers.

## Functions <!-- {docsify-ignore} -->

### sandkit.api.terrains.getTypeFromId() (worker) :id=gettypefromid

```ts
getTypeFromId(terrainId: string & object): TerrainType
```

Defined in: [shared/api/terrains.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L16)

Resolve a terrain string id to a numeric cell type.

#### Parameters

##### terrainId

`string` & `object`

Mod-registered or built-in terrain id.

#### Returns

[`TerrainType`](#terraintype)

Numeric terrain cell type.

***

### sandkit.api.terrains.getTypeAtCell() (worker) :id=gettypeatcell

```ts
getTypeAtCell(...args: CellCoordinates): TerrainType | null
```

Defined in: [shared/api/terrains.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L23)

Return the terrain cell type at a cell, or null when none.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`TerrainType`](#terraintype) \| `null`

***

### sandkit.api.terrains.getDataAtCell() (worker) :id=getdataatcell

```ts
getDataAtCell(...args: CellCoordinates): { cellType: TerrainType; hp: number | null; } | null
```

Defined in: [shared/api/terrains.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L31)

Return terrain cell type and hit points at a cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

\{ `cellType`: [`TerrainType`](#terraintype); `hp`: `number` \| `null`; \} \| `null`

Cell type and hp, or null when the cell is not terrain.

***

### sandkit.api.terrains.isAtCell() (worker) :id=isatcell

```ts
isAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/terrains.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L38)

Return true when any terrain occupies the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

***

### sandkit.api.terrains.isTypeAtCell() (worker) :id=istypeatcell

```ts
isTypeAtCell(...args: [number, number, string & object]): boolean
```

Defined in: [shared/api/terrains.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L46)

Return true when the cell terrain matches the given id.

#### Parameters

##### args

...\[`number`, `number`, `string` & `object`\]

#### Returns

`boolean`

***

### sandkit.api.terrains.isCellIdTerrain() (worker) :id=iscellidterrain

```ts
isCellIdTerrain(cellId: CellId): boolean
```

Defined in: [shared/api/terrains.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L52)

Return true when a packed cell id refers to terrain.

#### Parameters

##### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id from [world.getCellIdAtCell](api/sandkit.api.world.worker.md#getcellidatcell).

#### Returns

`boolean`

***

### sandkit.api.terrains.damageAtCell() (worker) :id=damageatcell

```ts
damageAtCell(...args: [number, number, number]): void
```

Defined in: [shared/api/terrains.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L60)

Apply damage to terrain at a cell.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

***

### sandkit.api.terrains.createAtCell() (worker) :id=createatcell

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L69)

Place terrain at an empty cell.

#### Parameters

##### args

...\[`number`, `number`, [`TerrainRef`](#terrainref), [`TerrainMutationOptions`](#terrainmutationoptions)\]

#### Returns

`void`

***

### sandkit.api.terrains.replaceAtCell() (worker) :id=replaceatcell

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L78)

Replace existing terrain at a cell.

#### Parameters

##### args

...\[`number`, `number`, [`TerrainRef`](#terrainref), [`TerrainMutationOptions`](#terrainmutationoptions)\]

#### Returns

`void`

***

### sandkit.api.terrains.removeAtCell() (worker) :id=removeatcell

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [shared/api/terrains.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/terrains.d.ts#L86)

Remove terrain from a cell.

#### Parameters

##### args

...\[`number`, `number`, [`TerrainMutationOptions`](#terrainmutationoptions)\]

#### Returns

`void`

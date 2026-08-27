# sandkit.api.grid

`sandkit.api.grid` — grid cell queries, deferred mutations, and iteration.

Main thread only.

## See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid`

## Interfaces <!-- {docsify-ignore} -->

### GridMutationWriter :id=gridmutationwriter

<p class="smt-member-path"><code>sandkit.api.grid.GridMutationWriter</code></p>

Defined in: [sandkit/api/grid.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L104)

Deferred element and terrain mutations passed to [mutate](#mutate).

#### Properties

##### elements

```ts
elements: GridMutationWriterElements
```

Defined in: [sandkit/api/grid.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L106)

Element cell mutations inside a [mutate](#mutate) callback.

##### terrains

```ts
terrains: GridMutationWriterTerrains
```

Defined in: [sandkit/api/grid.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L108)

Terrain cell mutations inside a [mutate](#mutate) callback.

***

### GridMutationWriterElements :id=gridmutationwriterelements

<p class="smt-member-path"><code>sandkit.api.grid.GridMutationWriterElements</code></p>

Defined in: [sandkit/api/grid.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L112)

Element writers available on [GridMutationWriter.elements](#elements).

#### Methods

##### createAtCell()

```ts
createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L122)

Create an element at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md#elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md#elementcreateoptions)\]

###### Returns

`void`

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.mutate` writer `elements.createAtCell`

##### replaceAtCell()

```ts
replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L133)

Replace the element at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md#elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md#elementcreateoptions)\]

###### Returns

`void`

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.mutate` writer `elements.replaceAtCell`

##### removeAtCell()

```ts
removeAtCell(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:143](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L143)

Remove the element at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`ElementRemovalOptions`](api/sandkit.api.elements.md#elementremovaloptions)\]

###### Returns

`void`

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.mutate` writer `elements.removeAtCell`

***

### GridMutationWriterTerrains :id=gridmutationwriterterrains

<p class="smt-member-path"><code>sandkit.api.grid.GridMutationWriterTerrains</code></p>

Defined in: [sandkit/api/grid.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L147)

Terrain writers available on [GridMutationWriter.terrains](#terrains).

#### Methods

##### createAtCell()

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:157](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L157)

Create terrain at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

###### Returns

`void`

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.mutate` writer `terrains.createAtCell`

##### replaceAtCell()

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:168](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L168)

Replace terrain at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

###### Returns

`void`

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.mutate` writer `terrains.replaceAtCell`

##### removeAtCell()

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:178](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L178)

Remove terrain at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

###### Returns

`void`

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.mutate` writer `terrains.removeAtCell`

***

### GridDimensions :id=griddimensions

<p class="smt-member-path"><code>sandkit.api.grid.GridDimensions</code></p>

Defined in: shared/api/grid.d.ts:73

World grid width and height in cells.

#### Properties

##### widthCells

```ts
widthCells: number
```

Defined in: shared/api/grid.d.ts:75

Grid width in cells.

##### heightCells

```ts
heightCells: number
```

Defined in: shared/api/grid.d.ts:77

Grid height in cells.

***

### ExcavateOptions :id=excavateoptions

<p class="smt-member-path"><code>sandkit.api.grid.ExcavateOptions</code></p>

Defined in: shared/api/grid.d.ts:81

Flags that control how [excavateAtCell](#excavateatcell) resolves damage and drops.

#### Properties

##### fromGun?

```ts
optional fromGun?: boolean
```

Defined in: shared/api/grid.d.ts:83

Treat the dig as gun fire for terrain resistance checks.

##### fromRocketExplosion?

```ts
optional fromRocketExplosion?: boolean
```

Defined in: shared/api/grid.d.ts:85

Treat the dig as rocket or dynamite explosion damage.

##### fromDrill?

```ts
optional fromDrill?: boolean
```

Defined in: shared/api/grid.d.ts:87

Treat the dig as drill damage.

##### useLiteralOutVelocity?

```ts
optional useLiteralOutVelocity?: boolean
```

Defined in: shared/api/grid.d.ts:89

Use outVelocity literally instead of deriving ejection speed.

##### destroyNonDestructible?

```ts
optional destroyNonDestructible?: boolean
```

Defined in: shared/api/grid.d.ts:91

Allow removing terrain marked non-destructible.

##### forceRemoveAll?

```ts
optional forceRemoveAll?: boolean
```

Defined in: shared/api/grid.d.ts:93

Force-remove all matched cells regardless of normal rules.

##### drillTierDamage?

```ts
optional drillTierDamage?: number
```

Defined in: shared/api/grid.d.ts:95

Extra drill-tier damage when [fromDrill](#fromdrill) is true. Clamped to 0–1000.

## Type Aliases <!-- {docsify-ignore} -->

### CellId :id=cellid

<p class="smt-member-path"><code>sandkit.api.grid.CellId</code></p>

```ts
CellId = CellId
```

Defined in: shared/api/grid.d.ts:70

Packed cell id from [getCellIdAtCell](#getcellidatcell).

## Functions <!-- {docsify-ignore} -->

### mutate() :id=mutate

<p class="smt-member-path"><code>sandkit.api.grid.mutate()</code></p>

```ts
mutate(callback: (writer: GridMutationWriter) => void): void
```

Defined in: [sandkit/api/grid.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L53)

Run deferred grid mutations on the main thread. Reads see the old grid until
mutations apply.

#### Parameters

##### callback

(`writer`: [`GridMutationWriter`](#gridmutationwriter)) => `void`

Receives a writer for element and terrain cell mutations.

#### Returns

`void`

#### See

 - https://sandustry.com/sandkit.html#mutations-heading
 - https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.mutate`

***

### revealFogAtCell() :id=revealfogatcell

<p class="smt-member-path"><code>sandkit.api.grid.revealFogAtCell()</code></p>

```ts
revealFogAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/grid.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L62)

Reveal fog of war at a cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.revealFogAtCell`

***

### redrawAroundCell() :id=redrawaroundcell

<p class="smt-member-path"><code>sandkit.api.grid.redrawAroundCell()</code></p>

```ts
redrawAroundCell(...args: [number, number, number]): void
```

Defined in: [sandkit/api/grid.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L72)

Request redraw around a cell.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.redrawAroundCell`

***

### forEachCellInCircle() :id=foreachcellincircle

<p class="smt-member-path"><code>sandkit.api.grid.forEachCellInCircle()</code></p>

```ts
forEachCellInCircle(centerCellX: number, centerCellY: number, radiusCells: number, callback: (...args: CellCoordinates) => void): void
```

Defined in: [sandkit/api/grid.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L83)

Calls the callback for each cell inside a circle.

#### Parameters

##### centerCellX

`number`

Circle center cell column.

##### centerCellY

`number`

Circle center cell row.

##### radiusCells

`number`

Circle radius in cells.

##### callback

(...`args`: [`CellCoordinates`](api/shared.player.md#cellcoordinates)) => `void`

Invoked for each cell with `(cellX, cellY)`.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.forEachCellInCircle`

***

### forEachCellInRectangle() :id=foreachcellinrectangle

<p class="smt-member-path"><code>sandkit.api.grid.forEachCellInRectangle()</code></p>

```ts
forEachCellInRectangle(...args: number, number, number, number, (...args: [CellCoordinates) => void]): void
```

Defined in: [sandkit/api/grid.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L95)

Calls the callback for each cell in a rectangle.

#### Parameters

##### args

...\[`number`, `number`, `number`, `number`, (...`args`: [`CellCoordinates`](api/shared.player.md#cellcoordinates)) => `void`\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.forEachCellInRectangle`

***

### ~~forEachCellInRect()~~

```ts
forEachCellInRect(...args: number, number, number, number, (...args: [CellCoordinates) => void]): void
```

Defined in: [sandkit/api/grid.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/grid.d.ts#L101)

#### Parameters

##### args

...\[`number`, `number`, `number`, `number`, (...`args`: [`CellCoordinates`](api/shared.player.md#cellcoordinates)) => `void`\]

#### Returns

`void`

#### Deprecated

Use [forEachCellInRectangle](#foreachcellinrectangle) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.grid.forEachCellInRectangle`

***

### getCellIdAtCell() :id=getcellidatcell

<p class="smt-member-path"><code>sandkit.api.grid.getCellIdAtCell()</code></p>

```ts
getCellIdAtCell(...args: CellCoordinates): CellId
```

Defined in: shared/api/grid.d.ts:21

Return the packed cell id at grid coordinates.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id for the cell.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.getCellIdAtCell` / Worker entry `api.grid.getCellIdAtCell`

***

### isCellEmptyAtCell() :id=iscellemptyatcell

<p class="smt-member-path"><code>sandkit.api.grid.isCellEmptyAtCell()</code></p>

```ts
isCellEmptyAtCell(...args: CellCoordinates): boolean
```

Defined in: shared/api/grid.d.ts:30

Return true when the cell has no element or terrain content.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.isCellEmptyAtCell` / Worker entry `api.grid.isCellEmptyAtCell`

***

### isTerrainAtCell() :id=isterrainatcell

<p class="smt-member-path"><code>sandkit.api.grid.isTerrainAtCell()</code></p>

```ts
isTerrainAtCell(...args: CellCoordinates): boolean
```

Defined in: shared/api/grid.d.ts:39

Return true when the cell holds terrain (not an element).

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.isTerrainAtCell` / Worker entry `api.grid.isTerrainAtCell`

***

### reportActivityAtCell() :id=reportactivityatcell

<p class="smt-member-path"><code>sandkit.api.grid.reportActivityAtCell()</code></p>

```ts
reportActivityAtCell(...args: CellCoordinates): void
```

Defined in: shared/api/grid.d.ts:48

Mark the cell active for simulation this tick.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.reportActivityAtCell` / Worker entry `api.grid.reportActivityAtCell`

***

### excavateAtCell() :id=excavateatcell

<p class="smt-member-path"><code>sandkit.api.grid.excavateAtCell()</code></p>

```ts
excavateAtCell(...args: number, number, [Vector2, number, ExcavateOptions]): void
```

Defined in: shared/api/grid.d.ts:60

Apply excavation damage and eject velocity at a cell.

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`, [`ExcavateOptions`](#excavateoptions)\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.excavateAtCell` / Worker entry `api.grid.excavateAtCell`

***

### getDimensions() :id=getdimensions

<p class="smt-member-path"><code>sandkit.api.grid.getDimensions()</code></p>

```ts
getDimensions(): GridDimensions
```

Defined in: shared/api/grid.d.ts:67

Return the world grid size in cells.

#### Returns

[`GridDimensions`](#griddimensions)

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.grid.getDimensions` / Worker entry `api.grid.getDimensions`

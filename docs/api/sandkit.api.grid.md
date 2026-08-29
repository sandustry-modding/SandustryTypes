# sandkit.api.grid

`sandkit.api.grid` — grid cell queries, deferred mutations, and iteration.

Main thread only.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Interfaces <!-- {docsify-ignore} -->

### GridMutationWriter :id=gridmutationwriter

<p class="smt-member-path"><code>sandkit.api.grid.GridMutationWriter</code></p>

Defined in: [sandkit/api/grid.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L147)

Deferred element and terrain mutations passed to [mutate](#mutate).

#### Properties

##### elements

```ts
elements: GridMutationWriterElements
```

Defined in: [sandkit/api/grid.d.ts:149](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L149)

Element cell mutations inside a [mutate](#mutate) callback.

##### terrains

```ts
terrains: GridMutationWriterTerrains
```

Defined in: [sandkit/api/grid.d.ts:151](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L151)

Terrain cell mutations inside a [mutate](#mutate) callback.

***

### GridMutationWriterElements :id=gridmutationwriterelements

<p class="smt-member-path"><code>sandkit.api.grid.GridMutationWriterElements</code></p>

Defined in: [sandkit/api/grid.d.ts:155](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L155)

Element writers available on [GridMutationWriter.elements](#elements).

#### Methods

##### createAtCell()

```ts
createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:166](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L166)

Create an element at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md#elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md#elementcreateoptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

##### replaceAtCell()

```ts
replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:178](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L178)

Replace the element at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md#elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md#elementcreateoptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

##### removeAtCell()

```ts
removeAtCell(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L189)

Remove the element at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`ElementRemovalOptions`](api/sandkit.api.elements.md#elementremovaloptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### GridMutationWriterTerrains :id=gridmutationwriterterrains

<p class="smt-member-path"><code>sandkit.api.grid.GridMutationWriterTerrains</code></p>

Defined in: [sandkit/api/grid.d.ts:193](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L193)

Terrain writers available on [GridMutationWriter.terrains](#terrains).

#### Methods

##### createAtCell()

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:204](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L204)

Create terrain at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

##### replaceAtCell()

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:216](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L216)

Replace terrain at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md#terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

##### removeAtCell()

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:227](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L227)

Remove terrain at a cell inside a [mutate](#mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md#terrainmutationoptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### GridDimensions :id=griddimensions

<p class="smt-member-path"><code>sandkit.api.grid.GridDimensions</code></p>

Defined in: [shared/api/grid.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L78)

World grid width and height in cells.

#### Properties

##### widthCells

```ts
widthCells: number
```

Defined in: [shared/api/grid.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L80)

Grid width in cells.

##### heightCells

```ts
heightCells: number
```

Defined in: [shared/api/grid.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L82)

Grid height in cells.

***

### ExcavateOptions :id=excavateoptions

<p class="smt-member-path"><code>sandkit.api.grid.ExcavateOptions</code></p>

Defined in: [shared/api/grid.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L86)

Flags that control how [excavateAtCell](#excavateatcell) resolves damage and drops.

#### Properties

##### fromGun?

```ts
optional fromGun?: boolean
```

Defined in: [shared/api/grid.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L88)

Treat the dig as gun fire for terrain resistance checks.

##### fromRocketExplosion?

```ts
optional fromRocketExplosion?: boolean
```

Defined in: [shared/api/grid.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L90)

Treat the dig as rocket or dynamite explosion damage.

##### fromDrill?

```ts
optional fromDrill?: boolean
```

Defined in: [shared/api/grid.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L92)

Treat the dig as drill damage.

##### useLiteralOutVelocity?

```ts
optional useLiteralOutVelocity?: boolean
```

Defined in: [shared/api/grid.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L94)

Use outVelocity literally instead of deriving ejection speed.

##### destroyNonDestructible?

```ts
optional destroyNonDestructible?: boolean
```

Defined in: [shared/api/grid.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L96)

Allow removing terrain marked non-destructible.

##### forceRemoveAll?

```ts
optional forceRemoveAll?: boolean
```

Defined in: [shared/api/grid.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L98)

Force-remove all matched cells regardless of normal rules.

##### drillTierDamage?

```ts
optional drillTierDamage?: number
```

Defined in: [shared/api/grid.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L100)

Extra drill-tier damage when [fromDrill](#fromdrill) is true. Clamped to 0–1000.

## Type Aliases <!-- {docsify-ignore} -->

### CellId :id=cellid

<p class="smt-member-path"><code>sandkit.api.grid.CellId</code></p>

```ts
CellId = CellId
```

Defined in: [shared/api/grid.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L75)

Packed cell id from [getCellIdAtCell](#getcellidatcell).

## Functions <!-- {docsify-ignore} -->

### mutate() :id=mutate

<p class="smt-member-path"><code>sandkit.api.grid.mutate()</code></p>

```ts
mutate(callback: (writer: GridMutationWriter) => void): void
```

Defined in: [sandkit/api/grid.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L91)

Run deferred grid mutations on the main thread. Reads see the old grid until
mutations apply.

#### Parameters

##### callback

(`writer`: [`GridMutationWriter`](#gridmutationwriter)) => `void`

Receives a writer for element and terrain cell mutations.

#### Returns

`void`

#### Examples

**Deferred main-thread mutations**

```ts
api.grid.mutate((writer) => {
  if (api.terrains.isTypeAtCell(cellX, cellY, "ice")) {
    writer.elements.replaceAtCell(cellX, cellY, "water");
  }
});
```

```ts
const waterType = api.elements.getTypeById("water");

api.events.on("item:used", ({ itemId, cellX, cellY }) => {
  if (itemId !== "laser") return;

  api.grid.mutate((writer) => {
    if (!api.terrains.isTypeAtCell(cellX, cellY, "ice")) return;
    writer.elements.replaceAtCell(cellX, cellY, waterType);
  });
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### revealFogAtCell() :id=revealfogatcell

<p class="smt-member-path"><code>sandkit.api.grid.revealFogAtCell()</code></p>

```ts
revealFogAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/grid.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L101)

Reveal fog of war at a cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### redrawAroundCell() :id=redrawaroundcell

<p class="smt-member-path"><code>sandkit.api.grid.redrawAroundCell()</code></p>

```ts
redrawAroundCell(...args: [number, number, number]): void
```

Defined in: [sandkit/api/grid.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L112)

Request redraw around a cell.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### forEachCellInCircle() :id=foreachcellincircle

<p class="smt-member-path"><code>sandkit.api.grid.forEachCellInCircle()</code></p>

```ts
forEachCellInCircle(centerCellX: number, centerCellY: number, radiusCells: number, callback: (...args: CellCoordinates) => void): void
```

Defined in: [sandkit/api/grid.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L124)

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

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### forEachCellInRectangle() :id=foreachcellinrectangle

<p class="smt-member-path"><code>sandkit.api.grid.forEachCellInRectangle()</code></p>

```ts
forEachCellInRectangle(...args: number, number, number, number, (...args: [CellCoordinates) => void]): void
```

Defined in: [sandkit/api/grid.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L137)

Calls the callback for each cell in a rectangle.

#### Parameters

##### args

...\[`number`, `number`, `number`, `number`, (...`args`: [`CellCoordinates`](api/shared.player.md#cellcoordinates)) => `void`\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~forEachCellInRect()~~

```ts
forEachCellInRect(...args: number, number, number, number, (...args: [CellCoordinates) => void]): void
```

Defined in: [sandkit/api/grid.d.ts:144](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L144)

#### Parameters

##### args

...\[`number`, `number`, `number`, `number`, (...`args`: [`CellCoordinates`](api/shared.player.md#cellcoordinates)) => `void`\]

#### Returns

`void`

#### Deprecated

Use [forEachCellInRectangle](#foreachcellinrectangle) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getCellIdAtCell() :id=getcellidatcell

<p class="smt-member-path"><code>sandkit.api.grid.getCellIdAtCell()</code></p>

```ts
getCellIdAtCell(...args: CellCoordinates): CellId
```

Defined in: [shared/api/grid.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L22)

Return the packed cell id at grid coordinates.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id for the cell.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isCellEmptyAtCell() :id=iscellemptyatcell

<p class="smt-member-path"><code>sandkit.api.grid.isCellEmptyAtCell()</code></p>

```ts
isCellEmptyAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/grid.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L32)

Return true when the cell has no element or terrain content.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isTerrainAtCell() :id=isterrainatcell

<p class="smt-member-path"><code>sandkit.api.grid.isTerrainAtCell()</code></p>

```ts
isTerrainAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/grid.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L42)

Return true when the cell holds terrain (not an element).

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### reportActivityAtCell() :id=reportactivityatcell

<p class="smt-member-path"><code>sandkit.api.grid.reportActivityAtCell()</code></p>

```ts
reportActivityAtCell(...args: CellCoordinates): void
```

Defined in: [shared/api/grid.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L52)

Mark the cell active for simulation this tick.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### excavateAtCell() :id=excavateatcell

<p class="smt-member-path"><code>sandkit.api.grid.excavateAtCell()</code></p>

```ts
excavateAtCell(...args: number, number, [Vector2, number, ExcavateOptions]): void
```

Defined in: [shared/api/grid.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L65)

Apply excavation damage and eject velocity at a cell.

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`, [`ExcavateOptions`](#excavateoptions)\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getDimensions() :id=getdimensions

<p class="smt-member-path"><code>sandkit.api.grid.getDimensions()</code></p>

```ts
getDimensions(): GridDimensions
```

Defined in: [shared/api/grid.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L72)

Return the world grid size in cells.

#### Returns

[`GridDimensions`](#griddimensions)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

# sandkit.api.grid

`sandkit.api.grid` — grid cell queries, deferred mutations, and iteration.

Main thread only.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.grid.GridMutationWriter :id=gridmutationwriter

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L166" target="_blank" rel="noopener">grid.d.ts:166</a></p>

| Property | Type | Description |
| --- | --- | --- |
| elements | GridMutationWriterElements | Element cell mutations inside a [mutate](?id=mutate) callback. |
| terrains | GridMutationWriterTerrains | Terrain cell mutations inside a [mutate](?id=mutate) callback. |

<div class="smt-member-anchors">

##### elements <!-- {docsify-ignore} -->

##### terrains <!-- {docsify-ignore} -->

</div>

Deferred element and terrain mutations passed to [mutate](?id=mutate).

</div>

<div class="smt-member-card">

### sandkit.api.grid.GridMutationWriterElements :id=gridmutationwriterelements

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L174" target="_blank" rel="noopener">grid.d.ts:174</a></p>

Element writers available on [GridMutationWriter.elements](?id=elements).

#### Methods

##### createAtCell()

```ts
createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:185](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L185)

Create an element at a cell inside a [mutate](?id=mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md?id=elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md?id=elementcreateoptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

##### replaceAtCell()

```ts
replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:203](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L203)

Replace the element at a cell inside a [mutate](?id=mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md?id=elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md?id=elementcreateoptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

##### removeAtCell()

```ts
removeAtCell(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:220](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L220)

Remove the element at a cell inside a [mutate](?id=mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`ElementRemovalOptions`](api/sandkit.api.elements.md?id=elementremovaloptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.grid.GridMutationWriterTerrains :id=gridmutationwriterterrains

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L224" target="_blank" rel="noopener">grid.d.ts:224</a></p>

Terrain writers available on [GridMutationWriter.terrains](?id=terrains).

#### Methods

##### createAtCell()

```ts
createAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:235](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L235)

Create terrain at a cell inside a [mutate](?id=mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md?id=terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md?id=terrainmutationoptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

##### replaceAtCell()

```ts
replaceAtCell(...args: number, number, [TerrainRef, TerrainMutationOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:253](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L253)

Replace terrain at a cell inside a [mutate](?id=mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`TerrainRef`](api/sandkit.api.terrains.worker.md?id=terrainref), [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md?id=terrainmutationoptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

##### removeAtCell()

```ts
removeAtCell(...args: number, number, [TerrainMutationOptions]): void
```

Defined in: [sandkit/api/grid.d.ts:270](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L270)

Remove terrain at a cell inside a [mutate](?id=mutate) callback.

###### Parameters

###### args

...\[`number`, `number`, [`TerrainMutationOptions`](api/sandkit.api.terrains.worker.md?id=terrainmutationoptions)\]

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.grid.GridDimensions :id=griddimensions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L80" target="_blank" rel="noopener">grid.d.ts:80</a></p>

| Property | Type | Description |
| --- | --- | --- |
| widthCells | number | Grid width in cells. |
| heightCells | number | Grid height in cells. |

<div class="smt-member-anchors">

##### widthCells <!-- {docsify-ignore} -->

##### heightCells <!-- {docsify-ignore} -->

</div>

World grid width and height in cells.

</div>

<div class="smt-member-card">

### sandkit.api.grid.ExcavateOptions :id=excavateoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L88" target="_blank" rel="noopener">grid.d.ts:88</a></p>

| Property | Type | Description |
| --- | --- | --- |
| fromGun? | boolean | Treat the dig as gun fire for terrain resistance checks. |
| fromRocketExplosion? | boolean | Treat the dig as rocket or dynamite explosion damage. |
| fromDrill? | boolean | Treat the dig as drill damage. |
| useLiteralOutVelocity? | boolean | Use outVelocity literally instead of deriving ejection speed. |
| destroyNonDestructible? | boolean | Allow removing terrain marked non-destructible. |
| forceRemoveAll? | boolean | Force-remove all matched cells regardless of normal rules. |
| drillTierDamage? | number | Extra drill-tier damage when [fromDrill](?id=fromdrill) is true. Clamped to 0–1000. |

<div class="smt-member-anchors">

##### fromGun? <!-- {docsify-ignore} -->

##### fromRocketExplosion? <!-- {docsify-ignore} -->

##### fromDrill? <!-- {docsify-ignore} -->

##### useLiteralOutVelocity? <!-- {docsify-ignore} -->

##### destroyNonDestructible? <!-- {docsify-ignore} -->

##### forceRemoveAll? <!-- {docsify-ignore} -->

##### drillTierDamage? <!-- {docsify-ignore} -->

</div>

Flags that control how [excavateAtCell](?id=excavateatcell) resolves damage and drops.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.grid.CellId :id=cellid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L77" target="_blank" rel="noopener">grid.d.ts:77</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.CellId = CellId">

```ts
CellId = CellId
```

</div>

Packed cell id from [getCellIdAtCell](?id=getcellidatcell).

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.grid.mutate :id=mutate

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L91" target="_blank" rel="noopener">grid.d.ts:91</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.mutate(callback: (writer: GridMutationWriter) =&gt; void): void">

```ts
mutate(callback: (writer: GridMutationWriter) => void): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| callback | (`writer`: [`GridMutationWriter`](?id=gridmutationwriter)) => `void` | Receives a writer for element and terrain cell mutations. |

<div class="smt-member-anchors">

##### callback <!-- {docsify-ignore} -->

</div>

Run deferred grid mutations on the main thread. Reads see the old grid until
mutations apply.

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

</div>

<div class="smt-member-card">

### sandkit.api.grid.revealFogAtCell :id=revealfogatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L101" target="_blank" rel="noopener">grid.d.ts:101</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.revealFogAtCell(...args: CellCoordinates): void">

```ts
revealFogAtCell(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Reveal fog of war at a cell.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.grid.redrawAroundCell :id=redrawaroundcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L112" target="_blank" rel="noopener">grid.d.ts:112</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.redrawAroundCell(...args: [number, number, number]): void">

```ts
redrawAroundCell(...args: [number, number, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Request redraw around a cell.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.grid.forEachCellInCircle :id=foreachcellincircle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L124" target="_blank" rel="noopener">grid.d.ts:124</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.forEachCellInCircle(centerCellX: number, centerCellY: number, radiusCells: number, callback: (...args: CellCoordinates) =&gt; void): void">

```ts
forEachCellInCircle(centerCellX: number, centerCellY: number, radiusCells: number, callback: (...args: CellCoordinates) => void): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| centerCellX | `number` | Circle center cell column. |
| centerCellY | `number` | Circle center cell row. |
| radiusCells | `number` | Circle radius in cells. |
| callback | (...`args`: [`CellCoordinates`](api/shared.player.md?id=cellcoordinates)) => `void` | Invoked for each cell with `(cellX, cellY)`. |

<div class="smt-member-anchors">

##### centerCellX <!-- {docsify-ignore} -->

##### centerCellY <!-- {docsify-ignore} -->

##### radiusCells <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

</div>

Calls the callback for each cell inside a circle.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.grid.forEachCellInRectangle :id=foreachcellinrectangle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L142" target="_blank" rel="noopener">grid.d.ts:142</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.forEachCellInRectangle(...args: number, number, number, number, (...args: [CellCoordinates) =&gt; void]): void">

```ts
forEachCellInRectangle(...args: number, number, number, number, (...args: [CellCoordinates) => void]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`, `number`, (...`args`: [`CellCoordinates`](api/shared.player.md?id=cellcoordinates)) => `void`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Calls the callback for each cell in a rectangle.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.grid.forEachCellInRect~~ :id=foreachcellinrect

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/grid.d.ts#L156" target="_blank" rel="noopener">grid.d.ts:156</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.forEachCellInRect(...args: number, number, number, number, (...args: [CellCoordinates) =&gt; void]): void">

```ts
forEachCellInRect(...args: number, number, number, number, (...args: [CellCoordinates) => void]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`, `number`, (...`args`: [`CellCoordinates`](api/shared.player.md?id=cellcoordinates)) => `void`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [forEachCellInRectangle](?id=foreachcellinrectangle) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.grid.getCellIdAtCell :id=getcellidatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L22" target="_blank" rel="noopener">grid.d.ts:22</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.getCellIdAtCell(...args: CellCoordinates): CellId">

```ts
getCellIdAtCell(...args: CellCoordinates): CellId
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the packed cell id at grid coordinates.

[`CellId`](api/shared.nominal.md?id=cellid) Packed cell id for the cell.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.grid.isCellEmptyAtCell :id=iscellemptyatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L32" target="_blank" rel="noopener">grid.d.ts:32</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.isCellEmptyAtCell(...args: CellCoordinates): boolean">

```ts
isCellEmptyAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the cell has no element or terrain content.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.grid.isTerrainAtCell :id=isterrainatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L42" target="_blank" rel="noopener">grid.d.ts:42</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.isTerrainAtCell(...args: CellCoordinates): boolean">

```ts
isTerrainAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the cell holds terrain (not an element).

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.grid.reportActivityAtCell :id=reportactivityatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L52" target="_blank" rel="noopener">grid.d.ts:52</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.reportActivityAtCell(...args: CellCoordinates): void">

```ts
reportActivityAtCell(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Mark the cell active for simulation this tick.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.grid.excavateAtCell :id=excavateatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L65" target="_blank" rel="noopener">grid.d.ts:65</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.excavateAtCell(...args: number, number, [Vector2, number, ExcavateOptions]): void">

```ts
excavateAtCell(...args: number, number, [Vector2, number, ExcavateOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2), `number`, [`ExcavateOptions`](?id=excavateoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Apply excavation damage and eject velocity at a cell.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.grid.getDimensions :id=getdimensions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/grid.d.ts#L74" target="_blank" rel="noopener">grid.d.ts:74</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.grid.getDimensions(): GridDimensions">

```ts
getDimensions(): GridDimensions
```

</div>

Return the world grid size in cells.

[`GridDimensions`](?id=griddimensions)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

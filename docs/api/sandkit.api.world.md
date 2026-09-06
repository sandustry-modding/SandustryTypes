# sandkit.api.world

## Deprecated

Use [grid](api/sandkit.api.grid.md) instead.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Namespaces <!-- {docsify-ignore} -->

- [~~pickups~~](api/sandkit.api.world.pickups.md)

## Functions <!-- {docsify-ignore} -->

### ~~runWhenSimulationIdle()~~ :id=runwhensimulationidle

```ts
sandkit.api.world.runWhenSimulationIdle(callback: () => void): void
```

Defined in: [sandkit/api/world.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/world.d.ts#L66)

#### Parameters

##### callback

() => `void`

#### Returns

`void`

#### Deprecated

Use [grid.mutate](api/sandkit.api.grid.md#mutate) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~redrawAroundCellWhenIdle()~~ :id=redrawaroundcellwhenidle

```ts
sandkit.api.world.redrawAroundCellWhenIdle(...args: [number, number, number]): void
```

Defined in: [sandkit/api/world.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/world.d.ts#L73)

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### Deprecated

Use [grid.redrawAroundCell](api/sandkit.api.grid.md#redrawaroundcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## References <!-- {docsify-ignore} -->

### ~~getCellIdAtCell~~ :id=getcellidatcell

<p class="smt-member-path"><code>sandkit.api.world.getCellIdAtCell</code></p>
Re-exports [getCellIdAtCell](api/sandkit.api.grid.md#getcellidatcell)

***

### ~~isCellEmptyAtCell~~ :id=iscellemptyatcell

<p class="smt-member-path"><code>sandkit.api.world.isCellEmptyAtCell</code></p>
Re-exports [isCellEmptyAtCell](api/sandkit.api.grid.md#iscellemptyatcell)

***

### ~~isTerrainAtCell~~ :id=isterrainatcell

<p class="smt-member-path"><code>sandkit.api.world.isTerrainAtCell</code></p>
Re-exports [isTerrainAtCell](api/sandkit.api.grid.md#isterrainatcell)

***

### ~~reportActivityAtCell~~ :id=reportactivityatcell

<p class="smt-member-path"><code>sandkit.api.world.reportActivityAtCell</code></p>
Re-exports [reportActivityAtCell](api/sandkit.api.grid.md#reportactivityatcell)

***

### ~~excavateAtCell~~ :id=excavateatcell

<p class="smt-member-path"><code>sandkit.api.world.excavateAtCell</code></p>
Re-exports [excavateAtCell](api/sandkit.api.grid.md#excavateatcell)

***

### ~~getDimensions~~ :id=getdimensions

<p class="smt-member-path"><code>sandkit.api.world.getDimensions</code></p>
Re-exports [getDimensions](api/sandkit.api.grid.md#getdimensions)

***

### ~~ExcavateOptions~~ :id=excavateoptions

<p class="smt-member-path"><code>sandkit.api.world.ExcavateOptions</code></p>
Re-exports [ExcavateOptions](api/sandkit.api.grid.md#excavateoptions)

***

### ~~CellId~~ :id=cellid

<p class="smt-member-path"><code>sandkit.api.world.CellId</code></p>
Re-exports [CellId](api/sandkit.api.grid.md#cellid)

***

### ~~GridDimensions~~ :id=griddimensions

<p class="smt-member-path"><code>sandkit.api.world.GridDimensions</code></p>
Re-exports [GridDimensions](api/sandkit.api.grid.md#griddimensions)

***

### ~~revealFogAtCell~~ :id=revealfogatcell

<p class="smt-member-path"><code>sandkit.api.world.revealFogAtCell</code></p>
Re-exports [revealFogAtCell](api/sandkit.api.grid.md#revealfogatcell)

***

### ~~WorldItemType~~ :id=worlditemtype

<p class="smt-member-path"><code>sandkit.api.world.WorldItemType</code></p>
Re-exports [WorldItemType](api/sandkit.api.pickups.md#worlditemtype)

***

### ~~PickupType~~ :id=pickuptype

<p class="smt-member-path"><code>sandkit.api.world.PickupType</code></p>
Re-exports [PickupType](api/sandkit.api.pickups.md#pickuptype)

***

### ~~WorldItemLight~~ :id=worlditemlight

<p class="smt-member-path"><code>sandkit.api.world.WorldItemLight</code></p>
Re-exports [WorldItemLight](api/sandkit.api.pickups.md#worlditemlight)

***

### ~~WorldItem~~ :id=worlditem

<p class="smt-member-path"><code>sandkit.api.world.WorldItem</code></p>
Re-exports [WorldItem](api/sandkit.api.pickups.md#worlditem)

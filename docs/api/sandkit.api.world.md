# sandkit.api.world

## Deprecated

Use [grid](api/sandkit.api.grid.md) instead.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Namespaces <!-- {docsify-ignore} -->

- [~~pickups~~](api/sandkit.api.world.pickups.md)

## Functions <!-- {docsify-ignore} -->

### ~~runWhenSimulationIdle()~~

```ts
runWhenSimulationIdle(callback: () => void): void
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

---

### ~~redrawAroundCellWhenIdle()~~

```ts
redrawAroundCellWhenIdle(...args: [number, number, number]): void
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

### ~~getCellIdAtCell~~

Re-exports [getCellIdAtCell](api/sandkit.api.grid.md#getcellidatcell)

---

### ~~isCellEmptyAtCell~~

Re-exports [isCellEmptyAtCell](api/sandkit.api.grid.md#iscellemptyatcell)

---

### ~~isTerrainAtCell~~

Re-exports [isTerrainAtCell](api/sandkit.api.grid.md#isterrainatcell)

---

### ~~reportActivityAtCell~~

Re-exports [reportActivityAtCell](api/sandkit.api.grid.md#reportactivityatcell)

---

### ~~excavateAtCell~~

Re-exports [excavateAtCell](api/sandkit.api.grid.md#excavateatcell)

---

### ~~getDimensions~~

Re-exports [getDimensions](api/sandkit.api.grid.md#getdimensions)

---

### ~~ExcavateOptions~~

Re-exports [ExcavateOptions](api/sandkit.api.grid.md#excavateoptions)

---

### ~~CellId~~

Re-exports [CellId](api/sandkit.api.grid.md#cellid)

---

### ~~GridDimensions~~

Re-exports [GridDimensions](api/sandkit.api.grid.md#griddimensions)

---

### ~~revealFogAtCell~~

Re-exports [revealFogAtCell](api/sandkit.api.grid.md#revealfogatcell)

---

### ~~WorldItemType~~

Re-exports [WorldItemType](api/sandkit.api.pickups.md#worlditemtype)

---

### ~~PickupType~~

Re-exports [PickupType](api/sandkit.api.pickups.md#pickuptype)

---

### ~~WorldItemLight~~

Re-exports [WorldItemLight](api/sandkit.api.pickups.md#worlditemlight)

---

### ~~WorldItem~~

Re-exports [WorldItem](api/sandkit.api.pickups.md#worlditem)

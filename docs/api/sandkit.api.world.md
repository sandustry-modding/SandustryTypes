# sandkit.api.world

## Namespaces <!-- {docsify-ignore} -->

- [pickups](api/sandkit.api.world.pickups.md)

## Interfaces <!-- {docsify-ignore} -->

### sandkit.api.world.WorldItemLight :id=worlditemlight

Defined in: [sandkit/api/world.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L90)

Optional point light attached when spawning a pickup.

#### Properties

##### brightness?

```ts
optional brightness?: number
```

Defined in: [sandkit/api/world.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L92)

Light brightness multiplier. Default 1.

##### size?

```ts
optional size?: number
```

Defined in: [sandkit/api/world.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L94)

Light radius in world pixels. Default 100.

##### color?

```ts
optional color?: [number, number, number] | [number, number, number, number]
```

Defined in: [sandkit/api/world.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L96)

RGB or RGBA color components in 0–1 range.

***

### sandkit.api.world.WorldItem :id=worlditem

Defined in: [sandkit/api/world.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L100)

Active world pickup instance.

#### Properties

##### id

```ts
id: number
```

Defined in: [sandkit/api/world.d.ts:101](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L101)

##### x

```ts
x: number
```

Defined in: [sandkit/api/world.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L102)

##### y

```ts
y: number
```

Defined in: [sandkit/api/world.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L103)

##### type

```ts
type: WorldItemType
```

Defined in: [sandkit/api/world.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L104)

##### data

```ts
data: Record<string, unknown>
```

Defined in: [sandkit/api/world.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L105)

## Type Aliases <!-- {docsify-ignore} -->

### sandkit.api.world.WorldItemType :id=worlditemtype

```ts
WorldItemType = WorldItemType
```

Defined in: [sandkit/api/world.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L87)

World pickup type discriminator.

## Functions <!-- {docsify-ignore} -->

### sandkit.api.world.runWhenSimulationIdle() :id=runwhensimulationidle

```ts
runWhenSimulationIdle(callback: () => void): void
```

Defined in: [sandkit/api/world.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L33)

Run a callback when simulation is idle.

#### Parameters

##### callback

() => `void`

Function invoked on the main thread when workers are idle.

#### Returns

`void`

***

### sandkit.api.world.revealFogAtCell() :id=revealfogatcell

```ts
revealFogAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/world.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L40)

Reveal fog of war at a cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

***

### sandkit.api.world.redrawAroundCellWhenIdle() :id=redrawaroundcellwhenidle

```ts
redrawAroundCellWhenIdle(...args: [number, number, number]): void
```

Defined in: [sandkit/api/world.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/world.d.ts#L48)

Request redraw around a cell when simulation is idle.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

## References <!-- {docsify-ignore} -->

### sandkit.api.world.getCellIdAtCell :id=getcellidatcell

Re-exports [getCellIdAtCell](api/sandkit.api.world.worker.md#getcellidatcell)

***

### sandkit.api.world.isCellEmptyAtCell :id=iscellemptyatcell

Re-exports [isCellEmptyAtCell](api/sandkit.api.world.worker.md#iscellemptyatcell)

***

### sandkit.api.world.isTerrainAtCell :id=isterrainatcell

Re-exports [isTerrainAtCell](api/sandkit.api.world.worker.md#isterrainatcell)

***

### sandkit.api.world.reportActivityAtCell :id=reportactivityatcell

Re-exports [reportActivityAtCell](api/sandkit.api.world.worker.md#reportactivityatcell)

***

### sandkit.api.world.excavateAtCell :id=excavateatcell

Re-exports [excavateAtCell](api/sandkit.api.world.worker.md#excavateatcell)

***

### sandkit.api.world.ExcavateOptions :id=excavateoptions

Re-exports [ExcavateOptions](api/sandkit.api.world.worker.md#excavateoptions)

***

### sandkit.api.world.CellId :id=cellid

Re-exports [CellId](api/sandkit.api.world.worker.md#cellid)

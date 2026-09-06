# sandkit.api.collector

`sandkit.api.collector` — collector structure value and pickup handling.
Main thread only.

## Functions <!-- {docsify-ignore} -->

### getValueFromCellId() :id=getvaluefromcellid

```ts
sandkit.api.collector.getValueFromCellId(cellId: CellId): number
```

Defined in: [sandkit/api/collector.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/collector.d.ts#L14)

Returns the collector value for a cell id.

#### Parameters

##### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell identifier.

#### Returns

`number`

***

### getValueByType() :id=getvaluebytype

```ts
sandkit.api.collector.getValueByType(elementType: ElementType): number
```

Defined in: [sandkit/api/collector.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/collector.d.ts#L19)

Returns the collector value for an element type.

#### Parameters

##### elementType

[`ElementType`](api/sandkit.api.elements.md#elementtype)

Numeric element type id.

#### Returns

`number`

***

### isCellIdCollectable() :id=iscellidcollectable

```ts
sandkit.api.collector.isCellIdCollectable(cellId: CellId): boolean
```

Defined in: [sandkit/api/collector.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/collector.d.ts#L24)

Returns true when the cell id can be collected.

#### Parameters

##### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell identifier.

#### Returns

`boolean`

***

### isCellIdCollectableForSprite() :id=iscellidcollectableforsprite

```ts
sandkit.api.collector.isCellIdCollectableForSprite(cellId: CellId): boolean
```

Defined in: [sandkit/api/collector.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/collector.d.ts#L29)

Returns true when the cell id can be collected for sprite display.

#### Parameters

##### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell identifier.

#### Returns

`boolean`

***

### notifyPickupAtCell() :id=notifypickupatcell

```ts
sandkit.api.collector.notifyPickupAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/collector.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/collector.d.ts#L35)

Notifies collector logic that a pickup happened at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

# sandkit.api.collector

`sandkit.api.collector` — collector structure value and pickup handling.
Main thread only.

## Functions <!-- {docsify-ignore} -->

### getValueFromCellId() :id=getvaluefromcellid

<p class="smt-member-path"><code>sandkit.api.collector.getValueFromCellId()</code></p>

```ts
getValueFromCellId(cellId: CellId): number
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

<p class="smt-member-path"><code>sandkit.api.collector.getValueByType()</code></p>

```ts
getValueByType(elementType: ElementType): number
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

<p class="smt-member-path"><code>sandkit.api.collector.isCellIdCollectable()</code></p>

```ts
isCellIdCollectable(cellId: CellId): boolean
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

<p class="smt-member-path"><code>sandkit.api.collector.isCellIdCollectableForSprite()</code></p>

```ts
isCellIdCollectableForSprite(cellId: CellId): boolean
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

<p class="smt-member-path"><code>sandkit.api.collector.notifyPickupAtCell()</code></p>

```ts
notifyPickupAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/collector.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/collector.d.ts#L35)

Notifies collector logic that a pickup happened at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

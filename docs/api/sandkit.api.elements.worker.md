# sandkit.api.elements (worker)

**`Internal`**

Worker-thread `sandkit.api.elements` — shared reads plus immediate grid mutations.

Worker-entry mutations apply immediately. Main thread defers matching helpers in
`sandkit.api.elements`.

 Worker extension; not interchangeable with main-thread
`sandkit.api.elements`.

## See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

## Functions <!-- {docsify-ignore} -->

### createAtCell() :id=createatcell

```ts
sandkit.api.elements.createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [worker/api/elements.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L79)

Create an element at a cell immediately on this worker.

#### Parameters

##### args

...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md#elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md#elementcreateoptions)\]

#### Returns

`void`

#### Example

**Worker entry**

```ts
api.elements.createAtCell(cellX, cellY, "water", {
  durationTicks: 60,
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### replaceAtCell() :id=replaceatcell

```ts
sandkit.api.elements.replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [worker/api/elements.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L93)

Replace the element at a cell immediately on this worker.

#### Parameters

##### args

...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md#elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md#elementcreateoptions)\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### removeAtCell() :id=removeatcell

```ts
sandkit.api.elements.removeAtCell(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [worker/api/elements.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L106)

Remove the element at a cell immediately on this worker.

#### Parameters

##### args

...\[`number`, `number`, [`ElementRemovalOptions`](api/sandkit.api.elements.md#elementremovaloptions)\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### moveBetweenCells() :id=movebetweencells

```ts
sandkit.api.elements.moveBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): boolean
```

Defined in: [worker/api/elements.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L121)

Move an element between cells immediately on this worker.

#### Parameters

##### fromCellX

`number`

Source cell column.

##### fromCellY

`number`

Source cell row.

##### toCellX

`number`

Destination cell column.

##### toCellY

`number`

Destination cell row.

#### Returns

`boolean`

True when the move succeeded.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### teleportBetweenCells() :id=teleportbetweencells

```ts
sandkit.api.elements.teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

Defined in: [worker/api/elements.d.ts:138](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L138)

Teleport an element between cells immediately on this worker.

#### Parameters

##### fromCellX

`number`

Source cell column.

##### fromCellY

`number`

Source cell row.

##### toCellX

`number`

Destination cell column.

##### toCellY

`number`

Destination cell row.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### swapBetweenCells() :id=swapbetweencells

```ts
sandkit.api.elements.swapBetweenCells(firstCellX: number, firstCellY: number, secondCellX: number, secondCellY: number): boolean
```

Defined in: [worker/api/elements.d.ts:156](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L156)

Swap elements between two cells immediately on this worker.

#### Parameters

##### firstCellX

`number`

First cell column.

##### firstCellY

`number`

First cell row.

##### secondCellX

`number`

Second cell column.

##### secondCellY

`number`

Second cell row.

#### Returns

`boolean`

True when the swap succeeded.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~swapCells()~~ :id=swapcells

```ts
sandkit.api.elements.swapCells(firstCellX: number, firstCellY: number, secondCellX: number, secondCellY: number): boolean
```

Defined in: [worker/api/elements.d.ts:168](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L168)

#### Parameters

##### firstCellX

`number`

##### firstCellY

`number`

##### secondCellX

`number`

##### secondCellY

`number`

#### Returns

`boolean`

#### Deprecated

Use [swapBetweenCells](#swapbetweencells) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### markMovementBlockedByIndex() :id=markmovementblockedbyindex

```ts
sandkit.api.elements.markMovementBlockedByIndex(elementIndex: number): void
```

Defined in: [worker/api/elements.d.ts:182](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L182)

Mark an element index as movement-blocked for this tick.

#### Parameters

##### elementIndex

`number`

Element index from [getInfoAtCell](api/sandkit.api.elements.md#getinfoatcell).

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~markMovementBlockedByElementIndex()~~ :id=markmovementblockedbyelementindex

```ts
sandkit.api.elements.markMovementBlockedByElementIndex(elementIndex: number): void
```

Defined in: [worker/api/elements.d.ts:189](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L189)

#### Parameters

##### elementIndex

`number`

#### Returns

`void`

#### Deprecated

Use [markMovementBlockedByIndex](#markmovementblockedbyindex) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### setVelocityAtCell() :id=setvelocityatcell

```ts
sandkit.api.elements.setVelocityAtCell(...args: number, number, [Vector2]): boolean
```

Defined in: [worker/api/elements.d.ts:201](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L201)

Set particle velocity at a cell immediately on this worker.

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

#### Returns

`boolean`

True when velocity was set.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### addParticleVelocityAtCell() :id=addparticlevelocityatcell

```ts
sandkit.api.elements.addParticleVelocityAtCell(...args: number, number, [Vector2, number]): boolean
```

Defined in: [worker/api/elements.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L214)

Add velocity to a particle at a cell immediately on this worker.

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`\]

#### Returns

`boolean`

True when velocity was updated.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### convertToParticleAtCell() :id=converttoparticleatcell

```ts
sandkit.api.elements.convertToParticleAtCell(...args: number, number, [Vector2]): boolean
```

Defined in: [worker/api/elements.d.ts:228](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L228)

Convert a cell element to a particle immediately on this worker.

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

#### Returns

`boolean`

True when conversion succeeded.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### convertFromParticleAtCell() :id=convertfromparticleatcell

```ts
sandkit.api.elements.convertFromParticleAtCell(...args: CellCoordinates): boolean
```

Defined in: [worker/api/elements.d.ts:241](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L241)

Convert a particle back to a solid element immediately on this worker.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

True when conversion succeeded.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### setDataFieldAtCell() :id=setdatafieldatcell

```ts
sandkit.api.elements.setDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4, number]): boolean
```

Defined in: [worker/api/elements.d.ts:254](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L254)

Set a data field on the element at a cell immediately on this worker.

#### Parameters

##### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`, `number`\]

#### Returns

`boolean`

True when the field was set.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### refreshColorAtCell() :id=refreshcoloratcell

```ts
sandkit.api.elements.refreshColorAtCell(...args: CellCoordinates): void
```

Defined in: [worker/api/elements.d.ts:266](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L266)

Refresh the rendered color at a cell immediately on this worker.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### setPhysicsAtCell() :id=setphysicsatcell

```ts
sandkit.api.elements.setPhysicsAtCell(...args: [number, number, number]): void
```

Defined in: [worker/api/elements.d.ts:277](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L277)

Set the physics skip mode at a cell immediately on this worker.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### setDurationAtCell() :id=setdurationatcell

```ts
sandkit.api.elements.setDurationAtCell(...args: [number, number, number, object]): boolean
```

Defined in: [worker/api/elements.d.ts:300](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L300)

Set element duration at a cell immediately on this worker.

#### Parameters

##### args

...\[`number`, `number`, `number`, `object`\]

#### Returns

`boolean`

True when duration was updated.

#### Example

**Worker entry**

```ts
const updated = api.elements.setDurationAtCell(
  cellX,
  cellY,
  120,
  { updateMax: true },
);
```

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

## References <!-- {docsify-ignore} -->

### ElementType :id=elementtype

<p class="smt-member-path"><code>sandkit.api.elements.ElementType (worker)</code></p>
Re-exports [ElementType](api/sandkit.api.elements.md#elementtype)

***

### ElementId :id=elementid

<p class="smt-member-path"><code>sandkit.api.elements.ElementId (worker)</code></p>
Re-exports [ElementId](api/sandkit.api.elements.md#elementid)

***

### ElementRef :id=elementref

<p class="smt-member-path"><code>sandkit.api.elements.ElementRef (worker)</code></p>
Re-exports [ElementRef](api/sandkit.api.elements.md#elementref)

***

### MatterType :id=mattertype

<p class="smt-member-path"><code>sandkit.api.elements.MatterType (worker)</code></p>
Re-exports [MatterType](api/sandkit.api.elements.MatterType.md)

***

### ElementDefinition :id=elementdefinition

<p class="smt-member-path"><code>sandkit.api.elements.ElementDefinition (worker)</code></p>
Re-exports [ElementDefinition](api/sandkit.api.elements.md#elementdefinition)

***

### ElementCreateOptions :id=elementcreateoptions

<p class="smt-member-path"><code>sandkit.api.elements.ElementCreateOptions (worker)</code></p>
Re-exports [ElementCreateOptions](api/sandkit.api.elements.md#elementcreateoptions)

***

### ElementRemovalOptions :id=elementremovaloptions

<p class="smt-member-path"><code>sandkit.api.elements.ElementRemovalOptions (worker)</code></p>
Re-exports [ElementRemovalOptions](api/sandkit.api.elements.md#elementremovaloptions)

***

### getIdByType :id=getidbytype

<p class="smt-member-path"><code>sandkit.api.elements.getIdByType (worker)</code></p>
Re-exports [getIdByType](api/sandkit.api.elements.md#getidbytype)

***

### getTypeById :id=gettypebyid

<p class="smt-member-path"><code>sandkit.api.elements.getTypeById (worker)</code></p>
Re-exports [getTypeById](api/sandkit.api.elements.md#gettypebyid)

***

### getTypeFromId :id=gettypefromid

<p class="smt-member-path"><code>sandkit.api.elements.getTypeFromId (worker)</code></p>
Re-exports [getTypeFromId](api/sandkit.api.elements.md#gettypefromid)

***

### getDefinitionByType :id=getdefinitionbytype

<p class="smt-member-path"><code>sandkit.api.elements.getDefinitionByType (worker)</code></p>
Re-exports [getDefinitionByType](api/sandkit.api.elements.md#getdefinitionbytype)

***

### getTypeAtCell :id=gettypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.getTypeAtCell (worker)</code></p>
Re-exports [getTypeAtCell](api/sandkit.api.elements.md#gettypeatcell)

***

### getResolvedTypeAtCell :id=getresolvedtypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.getResolvedTypeAtCell (worker)</code></p>
Re-exports [getResolvedTypeAtCell](api/sandkit.api.elements.md#getresolvedtypeatcell)

***

### getResolvedTypeFromCellId :id=getresolvedtypefromcellid

<p class="smt-member-path"><code>sandkit.api.elements.getResolvedTypeFromCellId (worker)</code></p>
Re-exports [getResolvedTypeFromCellId](api/sandkit.api.elements.md#getresolvedtypefromcellid)

***

### getInfoAtCell :id=getinfoatcell

<p class="smt-member-path"><code>sandkit.api.elements.getInfoAtCell (worker)</code></p>
Re-exports [getInfoAtCell](api/sandkit.api.elements.md#getinfoatcell)

***

### getMatterTypeAtCell :id=getmattertypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.getMatterTypeAtCell (worker)</code></p>
Re-exports [getMatterTypeAtCell](api/sandkit.api.elements.md#getmattertypeatcell)

***

### isTypeAtCell :id=istypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.isTypeAtCell (worker)</code></p>
Re-exports [isTypeAtCell](api/sandkit.api.elements.md#istypeatcell)

***

### isFreeFallingAtCell :id=isfreefallingatcell

<p class="smt-member-path"><code>sandkit.api.elements.isFreeFallingAtCell (worker)</code></p>
Re-exports [isFreeFallingAtCell](api/sandkit.api.elements.md#isfreefallingatcell)

***

### getVelocityAtCell :id=getvelocityatcell

<p class="smt-member-path"><code>sandkit.api.elements.getVelocityAtCell (worker)</code></p>
Re-exports [getVelocityAtCell](api/sandkit.api.elements.md#getvelocityatcell)

***

### getDataFieldAtCell :id=getdatafieldatcell

<p class="smt-member-path"><code>sandkit.api.elements.getDataFieldAtCell (worker)</code></p>
Re-exports [getDataFieldAtCell](api/sandkit.api.elements.md#getdatafieldatcell)

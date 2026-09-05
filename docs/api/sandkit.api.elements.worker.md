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

<p class="smt-member-path"><code>sandkit.api.elements.createAtCell() (worker)</code></p>

```ts
createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
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

---

### replaceAtCell() :id=replaceatcell

<p class="smt-member-path"><code>sandkit.api.elements.replaceAtCell() (worker)</code></p>

```ts
replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
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

---

### removeAtCell() :id=removeatcell

<p class="smt-member-path"><code>sandkit.api.elements.removeAtCell() (worker)</code></p>

```ts
removeAtCell(...args: number, number, [ElementRemovalOptions]): void
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

---

### moveBetweenCells() :id=movebetweencells

<p class="smt-member-path"><code>sandkit.api.elements.moveBetweenCells() (worker)</code></p>

```ts
moveBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): boolean
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

---

### teleportBetweenCells() :id=teleportbetweencells

<p class="smt-member-path"><code>sandkit.api.elements.teleportBetweenCells() (worker)</code></p>

```ts
teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
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

---

### swapBetweenCells() :id=swapbetweencells

<p class="smt-member-path"><code>sandkit.api.elements.swapBetweenCells() (worker)</code></p>

```ts
swapBetweenCells(firstCellX: number, firstCellY: number, secondCellX: number, secondCellY: number): boolean
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

---

### ~~swapCells()~~

```ts
swapCells(firstCellX: number, firstCellY: number, secondCellX: number, secondCellY: number): boolean
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

---

### markMovementBlockedByIndex() :id=markmovementblockedbyindex

<p class="smt-member-path"><code>sandkit.api.elements.markMovementBlockedByIndex() (worker)</code></p>

```ts
markMovementBlockedByIndex(elementIndex: number): void
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

---

### ~~markMovementBlockedByElementIndex()~~

```ts
markMovementBlockedByElementIndex(elementIndex: number): void
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

---

### setVelocityAtCell() :id=setvelocityatcell

<p class="smt-member-path"><code>sandkit.api.elements.setVelocityAtCell() (worker)</code></p>

```ts
setVelocityAtCell(...args: number, number, [Vector2]): boolean
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

---

### addParticleVelocityAtCell() :id=addparticlevelocityatcell

<p class="smt-member-path"><code>sandkit.api.elements.addParticleVelocityAtCell() (worker)</code></p>

```ts
addParticleVelocityAtCell(...args: number, number, [Vector2, number]): boolean
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

---

### convertToParticleAtCell() :id=converttoparticleatcell

<p class="smt-member-path"><code>sandkit.api.elements.convertToParticleAtCell() (worker)</code></p>

```ts
convertToParticleAtCell(...args: number, number, [Vector2]): boolean
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

---

### convertFromParticleAtCell() :id=convertfromparticleatcell

<p class="smt-member-path"><code>sandkit.api.elements.convertFromParticleAtCell() (worker)</code></p>

```ts
convertFromParticleAtCell(...args: CellCoordinates): boolean
```

Defined in: [worker/api/elements.d.ts:239](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L239)

Convert a particle back to a solid element immediately on this worker.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

True when conversion succeeded.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

---

### setDataFieldAtCell() :id=setdatafieldatcell

<p class="smt-member-path"><code>sandkit.api.elements.setDataFieldAtCell() (worker)</code></p>

```ts
setDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4, number]): boolean
```

Defined in: [worker/api/elements.d.ts:252](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L252)

Set a data field on the element at a cell immediately on this worker.

#### Parameters

##### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`, `number`\]

#### Returns

`boolean`

True when the field was set.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

---

### refreshColorAtCell() :id=refreshcoloratcell

<p class="smt-member-path"><code>sandkit.api.elements.refreshColorAtCell() (worker)</code></p>

```ts
refreshColorAtCell(...args: CellCoordinates): void
```

Defined in: [worker/api/elements.d.ts:264](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L264)

Refresh the rendered color at a cell immediately on this worker.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

---

### setPhysicsAtCell() :id=setphysicsatcell

<p class="smt-member-path"><code>sandkit.api.elements.setPhysicsAtCell() (worker)</code></p>

```ts
setPhysicsAtCell(...args: [number, number, number]): void
```

Defined in: [worker/api/elements.d.ts:275](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L275)

Set the physics skip mode at a cell immediately on this worker.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

---

### setDurationAtCell() :id=setdurationatcell

<p class="smt-member-path"><code>sandkit.api.elements.setDurationAtCell() (worker)</code></p>

```ts
setDurationAtCell(...args: [number, number, number, object]): boolean
```

Defined in: [worker/api/elements.d.ts:298](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L298)

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
const updated = api.elements.setDurationAtCell(cellX, cellY, 120, { updateMax: true });
```

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

## References <!-- {docsify-ignore} -->

### ElementType :id=elementtype

<p class="smt-member-path"><code>sandkit.api.elements.ElementType (worker)</code></p>

Re-exports [ElementType](api/sandkit.api.elements.md#elementtype)

---

### ElementId :id=elementid

<p class="smt-member-path"><code>sandkit.api.elements.ElementId (worker)</code></p>

Re-exports [ElementId](api/sandkit.api.elements.md#elementid)

---

### ElementRef :id=elementref

<p class="smt-member-path"><code>sandkit.api.elements.ElementRef (worker)</code></p>

Re-exports [ElementRef](api/sandkit.api.elements.md#elementref)

---

### MatterType :id=mattertype

<p class="smt-member-path"><code>sandkit.api.elements.MatterType (worker)</code></p>

Re-exports [MatterType](api/sandkit.api.elements.MatterType.md)

---

### ElementDefinition :id=elementdefinition

<p class="smt-member-path"><code>sandkit.api.elements.ElementDefinition (worker)</code></p>

Re-exports [ElementDefinition](api/sandkit.api.elements.md#elementdefinition)

---

### ElementCreateOptions :id=elementcreateoptions

<p class="smt-member-path"><code>sandkit.api.elements.ElementCreateOptions (worker)</code></p>

Re-exports [ElementCreateOptions](api/sandkit.api.elements.md#elementcreateoptions)

---

### ElementRemovalOptions :id=elementremovaloptions

<p class="smt-member-path"><code>sandkit.api.elements.ElementRemovalOptions (worker)</code></p>

Re-exports [ElementRemovalOptions](api/sandkit.api.elements.md#elementremovaloptions)

---

### getIdByType :id=getidbytype

<p class="smt-member-path"><code>sandkit.api.elements.getIdByType (worker)</code></p>

Re-exports [getIdByType](api/sandkit.api.elements.md#getidbytype)

---

### getTypeById :id=gettypebyid

<p class="smt-member-path"><code>sandkit.api.elements.getTypeById (worker)</code></p>

Re-exports [getTypeById](api/sandkit.api.elements.md#gettypebyid)

---

### getTypeFromId :id=gettypefromid

<p class="smt-member-path"><code>sandkit.api.elements.getTypeFromId (worker)</code></p>

Re-exports [getTypeFromId](api/sandkit.api.elements.md#gettypefromid)

---

### getDefinitionByType :id=getdefinitionbytype

<p class="smt-member-path"><code>sandkit.api.elements.getDefinitionByType (worker)</code></p>

Re-exports [getDefinitionByType](api/sandkit.api.elements.md#getdefinitionbytype)

---

### getTypeAtCell :id=gettypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.getTypeAtCell (worker)</code></p>

Re-exports [getTypeAtCell](api/sandkit.api.elements.md#gettypeatcell)

---

### getResolvedTypeAtCell :id=getresolvedtypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.getResolvedTypeAtCell (worker)</code></p>

Re-exports [getResolvedTypeAtCell](api/sandkit.api.elements.md#getresolvedtypeatcell)

---

### getResolvedTypeFromCellId :id=getresolvedtypefromcellid

<p class="smt-member-path"><code>sandkit.api.elements.getResolvedTypeFromCellId (worker)</code></p>

Re-exports [getResolvedTypeFromCellId](api/sandkit.api.elements.md#getresolvedtypefromcellid)

---

### getInfoAtCell :id=getinfoatcell

<p class="smt-member-path"><code>sandkit.api.elements.getInfoAtCell (worker)</code></p>

Re-exports [getInfoAtCell](api/sandkit.api.elements.md#getinfoatcell)

---

### getMatterTypeAtCell :id=getmattertypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.getMatterTypeAtCell (worker)</code></p>

Re-exports [getMatterTypeAtCell](api/sandkit.api.elements.md#getmattertypeatcell)

---

### isTypeAtCell :id=istypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.isTypeAtCell (worker)</code></p>

Re-exports [isTypeAtCell](api/sandkit.api.elements.md#istypeatcell)

---

### isFreeFallingAtCell :id=isfreefallingatcell

<p class="smt-member-path"><code>sandkit.api.elements.isFreeFallingAtCell (worker)</code></p>

Re-exports [isFreeFallingAtCell](api/sandkit.api.elements.md#isfreefallingatcell)

---

### getVelocityAtCell :id=getvelocityatcell

<p class="smt-member-path"><code>sandkit.api.elements.getVelocityAtCell (worker)</code></p>

Re-exports [getVelocityAtCell](api/sandkit.api.elements.md#getvelocityatcell)

---

### getDataFieldAtCell :id=getdatafieldatcell

<p class="smt-member-path"><code>sandkit.api.elements.getDataFieldAtCell (worker)</code></p>

Re-exports [getDataFieldAtCell](api/sandkit.api.elements.md#getdatafieldatcell)

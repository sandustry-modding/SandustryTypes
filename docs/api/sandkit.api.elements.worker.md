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

<div class="smt-member-card">

### sandkit.api.elements.createAtCell :id=createatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L79" target="_blank" rel="noopener">elements.d.ts:79</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void">

```ts
createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md?id=elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md?id=elementcreateoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Create an element at a cell immediately on this worker.

#### Example

**Worker entry**

```ts
api.elements.createAtCell(cellX, cellY, "water", {
  durationTicks: 60,
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.replaceAtCell :id=replaceatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L93" target="_blank" rel="noopener">elements.d.ts:93</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void">

```ts
replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`ElementRef`](api/sandkit.api.elements.md?id=elementref), [`ElementCreateOptions`](api/sandkit.api.elements.md?id=elementcreateoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Replace the element at a cell immediately on this worker.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.removeAtCell :id=removeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L106" target="_blank" rel="noopener">elements.d.ts:106</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.removeAtCell(...args: number, number, [ElementRemovalOptions]): void">

```ts
removeAtCell(...args: number, number, [ElementRemovalOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`ElementRemovalOptions`](api/sandkit.api.elements.md?id=elementremovaloptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Remove the element at a cell immediately on this worker.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.moveBetweenCells :id=movebetweencells

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L121" target="_blank" rel="noopener">elements.d.ts:121</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.moveBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): boolean">

```ts
moveBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| fromCellX | `number` | Source cell column. |
| fromCellY | `number` | Source cell row. |
| toCellX | `number` | Destination cell column. |
| toCellY | `number` | Destination cell row. |

<div class="smt-member-anchors">

##### fromCellX <!-- {docsify-ignore} -->

##### fromCellY <!-- {docsify-ignore} -->

##### toCellX <!-- {docsify-ignore} -->

##### toCellY <!-- {docsify-ignore} -->

</div>

Move an element between cells immediately on this worker.

True when the move succeeded.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.teleportBetweenCells :id=teleportbetweencells

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L138" target="_blank" rel="noopener">elements.d.ts:138</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void">

```ts
teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| fromCellX | `number` | Source cell column. |
| fromCellY | `number` | Source cell row. |
| toCellX | `number` | Destination cell column. |
| toCellY | `number` | Destination cell row. |

<div class="smt-member-anchors">

##### fromCellX <!-- {docsify-ignore} -->

##### fromCellY <!-- {docsify-ignore} -->

##### toCellX <!-- {docsify-ignore} -->

##### toCellY <!-- {docsify-ignore} -->

</div>

Teleport an element between cells immediately on this worker.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.swapBetweenCells :id=swapbetweencells

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L156" target="_blank" rel="noopener">elements.d.ts:156</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.swapBetweenCells(firstCellX: number, firstCellY: number, secondCellX: number, secondCellY: number): boolean">

```ts
swapBetweenCells(firstCellX: number, firstCellY: number, secondCellX: number, secondCellY: number): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| firstCellX | `number` | First cell column. |
| firstCellY | `number` | First cell row. |
| secondCellX | `number` | Second cell column. |
| secondCellY | `number` | Second cell row. |

<div class="smt-member-anchors">

##### firstCellX <!-- {docsify-ignore} -->

##### firstCellY <!-- {docsify-ignore} -->

##### secondCellX <!-- {docsify-ignore} -->

##### secondCellY <!-- {docsify-ignore} -->

</div>

Swap elements between two cells immediately on this worker.

True when the swap succeeded.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.elements.swapCells~~ :id=swapcells

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L168" target="_blank" rel="noopener">elements.d.ts:168</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.swapCells(firstCellX: number, firstCellY: number, secondCellX: number, secondCellY: number): boolean">

```ts
swapCells(firstCellX: number, firstCellY: number, secondCellX: number, secondCellY: number): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| firstCellX | `number` |  |
| firstCellY | `number` |  |
| secondCellX | `number` |  |
| secondCellY | `number` |  |

<div class="smt-member-anchors">

##### firstCellX <!-- {docsify-ignore} -->

##### firstCellY <!-- {docsify-ignore} -->

##### secondCellX <!-- {docsify-ignore} -->

##### secondCellY <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [swapBetweenCells](?id=swapbetweencells) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.markMovementBlockedByIndex :id=markmovementblockedbyindex

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L182" target="_blank" rel="noopener">elements.d.ts:182</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.markMovementBlockedByIndex(elementIndex: number): void">

```ts
markMovementBlockedByIndex(elementIndex: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementIndex | `number` | Element index from [getInfoAtCell](api/sandkit.api.elements.md?id=getinfoatcell). |

<div class="smt-member-anchors">

##### elementIndex <!-- {docsify-ignore} -->

</div>

Mark an element index as movement-blocked for this tick.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.elements.markMovementBlockedByElementIndex~~ :id=markmovementblockedbyelementindex

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L189" target="_blank" rel="noopener">elements.d.ts:189</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.markMovementBlockedByElementIndex(elementIndex: number): void">

```ts
markMovementBlockedByElementIndex(elementIndex: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementIndex | `number` |  |

<div class="smt-member-anchors">

##### elementIndex <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [markMovementBlockedByIndex](?id=markmovementblockedbyindex) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.setVelocityAtCell :id=setvelocityatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L201" target="_blank" rel="noopener">elements.d.ts:201</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setVelocityAtCell(...args: number, number, [Vector2]): boolean">

```ts
setVelocityAtCell(...args: number, number, [Vector2]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set particle velocity at a cell immediately on this worker.

True when velocity was set.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.addParticleVelocityAtCell :id=addparticlevelocityatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L214" target="_blank" rel="noopener">elements.d.ts:214</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.addParticleVelocityAtCell(...args: number, number, [Vector2, number]): boolean">

```ts
addParticleVelocityAtCell(...args: number, number, [Vector2, number]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2), `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Add velocity to a particle at a cell immediately on this worker.

True when velocity was updated.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.convertToParticleAtCell :id=converttoparticleatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L228" target="_blank" rel="noopener">elements.d.ts:228</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.convertToParticleAtCell(...args: number, number, [Vector2]): boolean">

```ts
convertToParticleAtCell(...args: number, number, [Vector2]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Convert a cell element to a particle immediately on this worker.

True when conversion succeeded.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.convertFromParticleAtCell :id=convertfromparticleatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L241" target="_blank" rel="noopener">elements.d.ts:241</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.convertFromParticleAtCell(...args: CellCoordinates): boolean">

```ts
convertFromParticleAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Convert a particle back to a solid element immediately on this worker.

True when conversion succeeded.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.setDataFieldAtCell :id=setdatafieldatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L254" target="_blank" rel="noopener">elements.d.ts:254</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4, number]): boolean">

```ts
setDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4, number]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `1` \\| `2` \\| `3` \\| `4`, `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set a data field on the element at a cell immediately on this worker.

True when the field was set.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.refreshColorAtCell :id=refreshcoloratcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L266" target="_blank" rel="noopener">elements.d.ts:266</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.refreshColorAtCell(...args: CellCoordinates): void">

```ts
refreshColorAtCell(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Refresh the rendered color at a cell immediately on this worker.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.setPhysicsAtCell :id=setphysicsatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L277" target="_blank" rel="noopener">elements.d.ts:277</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setPhysicsAtCell(...args: [number, number, number]): void">

```ts
setPhysicsAtCell(...args: [number, number, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set the physics skip mode at a cell immediately on this worker.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.setDurationAtCell :id=setdurationatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/elements.d.ts#L300" target="_blank" rel="noopener">elements.d.ts:300</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setDurationAtCell(...args: [number, number, number, object]): boolean">

```ts
setDurationAtCell(...args: [number, number, number, object]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`, `object`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set element duration at a cell immediately on this worker.

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

</div>

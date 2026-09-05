# sandkit.api.rendering

## Functions <!-- {docsify-ignore} -->

### getDrawPositionAtCell() :id=getdrawpositionatcell

<p class="smt-member-path"><code>sandkit.api.rendering.getDrawPositionAtCell()</code></p>

```ts
getDrawPositionAtCell(...args: CellCoordinates): Vector2
```

Defined in: [sandkit/api/rendering.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L16)

Return screen draw position for a grid cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`Vector2`](api/shared.player.md#vector2)

---

### getDrawPositionAtWorld() :id=getdrawpositionatworld

<p class="smt-member-path"><code>sandkit.api.rendering.getDrawPositionAtWorld()</code></p>

```ts
getDrawPositionAtWorld(worldX: number, worldY: number): Vector2
```

Defined in: [sandkit/api/rendering.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L33)

Return screen draw position for a world-space point.

#### Parameters

##### worldX

`number`

World x position in pixels.

##### worldY

`number`

World y position in pixels.

#### Returns

[`Vector2`](api/shared.player.md#vector2)

#### Example

```ts
api.events.on("frame:render", () => {
  const drawPos = api.rendering.getDrawPositionAtWorld(worldX, worldY);
  drawMarker(drawPos.x, drawPos.y);
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### getGridMetrics() :id=getgridmetrics

<p class="smt-member-path"><code>sandkit.api.rendering.getGridMetrics()</code></p>

```ts
getGridMetrics(): object
```

Defined in: [sandkit/api/rendering.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L42)

Return cell size and snap grid metrics.

#### Returns

`object`

##### cellSize

```ts
cellSize: number;
```

##### snapGridCellSize

```ts
snapGridCellSize: number;
```

#### Example

```ts
const { cellSize, snapGridCellSize } = api.rendering.getGridMetrics();
```

---

### getOverlayViewportSize() :id=getoverlayviewportsize

<p class="smt-member-path"><code>sandkit.api.rendering.getOverlayViewportSize()</code></p>

```ts
getOverlayViewportSize(): object
```

Defined in: [sandkit/api/rendering.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L44)

Return overlay viewport width and height in pixels.

#### Returns

`object`

##### width

```ts
width: number;
```

##### height

```ts
height: number;
```

---

### withOverlayContext() :id=withoverlaycontext

<p class="smt-member-path"><code>sandkit.api.rendering.withOverlayContext()</code></p>

```ts
withOverlayContext<T>(callback: (context: CanvasRenderingContext2D) => T): T
```

Defined in: [sandkit/api/rendering.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/rendering.d.ts#L56)

Run a callback with the overlay canvas context.

#### Type Parameters

##### T

`T`

#### Parameters

##### callback

(`context`: `CanvasRenderingContext2D`) => `T`

Receives the overlay 2D context; return value is passed through.

#### Returns

`T`

#### Example

```ts
api.rendering.withOverlayContext((context) => {
  context.fillRect(0, 0, 16, 16);
});
```

# sandkit.api.pipes

Pipe network queries and enablement at grid cells.

Available as `sandkit.api.pipes`.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Interfaces <!-- {docsify-ignore} -->

### PipeVentCell :id=pipeventcell

<p class="smt-member-path"><code>sandkit.api.pipes.PipeVentCell</code></p>
Defined in: [sandkit/api/pipes.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L53)

Connected vent cell position.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### cellX

```ts
cellX: number
```

Defined in: [sandkit/api/pipes.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L54)

##### cellY

```ts
cellY: number
```

Defined in: [sandkit/api/pipes.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L55)

## Functions <!-- {docsify-ignore} -->

### isAtCell() :id=isatcell

```ts
sandkit.api.pipes.isAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/pipes.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L19)

Return true when a pipe occupies the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isEnabledAtCell() :id=isenabledatcell

```ts
sandkit.api.pipes.isEnabledAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/pipes.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L29)

Return true when pipe flow is enabled at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getConnectedVentsAtCell() :id=getconnectedventsatcell

```ts
sandkit.api.pipes.getConnectedVentsAtCell(...args: CellCoordinates): readonly PipeVentCell[]
```

Defined in: [sandkit/api/pipes.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L39)

Return connected liquid vent cell positions for the pipe at a cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

readonly [`PipeVentCell`](#pipeventcell)[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### setEnabledAtCell() :id=setenabledatcell

```ts
sandkit.api.pipes.setEnabledAtCell(...args: [number, number, boolean]): void
```

Defined in: [sandkit/api/pipes.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L50)

Enable or disable pipe flow at a cell.

#### Parameters

##### args

...\[`number`, `number`, `boolean`\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

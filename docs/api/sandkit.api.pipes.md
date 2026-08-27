# sandkit.api.pipes

Pipe network queries and enablement at grid cells.

Available as `sandkit.api.pipes`.

## See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.pipes`

## Interfaces <!-- {docsify-ignore} -->

### PipeVentCell :id=pipeventcell

<p class="smt-member-path"><code>sandkit.api.pipes.PipeVentCell</code></p>

Defined in: [sandkit/api/pipes.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L49)

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

Defined in: [sandkit/api/pipes.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L50)

##### cellY

```ts
cellY: number
```

Defined in: [sandkit/api/pipes.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L51)

## Functions <!-- {docsify-ignore} -->

### isAtCell() :id=isatcell

<p class="smt-member-path"><code>sandkit.api.pipes.isAtCell()</code></p>

```ts
isAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/pipes.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L18)

Return true when a pipe occupies the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.pipes.isAtCell`

***

### isEnabledAtCell() :id=isenabledatcell

<p class="smt-member-path"><code>sandkit.api.pipes.isEnabledAtCell()</code></p>

```ts
isEnabledAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/pipes.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L27)

Return true when pipe flow is enabled at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.pipes.isEnabledAtCell`

***

### getConnectedVentsAtCell() :id=getconnectedventsatcell

<p class="smt-member-path"><code>sandkit.api.pipes.getConnectedVentsAtCell()</code></p>

```ts
getConnectedVentsAtCell(...args: CellCoordinates): readonly PipeVentCell[]
```

Defined in: [sandkit/api/pipes.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L36)

Return connected liquid vent cell positions for the pipe at a cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

readonly [`PipeVentCell`](#pipeventcell)[]

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.pipes.getConnectedVentsAtCell`

***

### setEnabledAtCell() :id=setenabledatcell

<p class="smt-member-path"><code>sandkit.api.pipes.setEnabledAtCell()</code></p>

```ts
setEnabledAtCell(...args: [number, number, boolean]): void
```

Defined in: [sandkit/api/pipes.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pipes.d.ts#L46)

Enable or disable pipe flow at a cell.

#### Parameters

##### args

...\[`number`, `number`, `boolean`\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.pipes.setEnabledAtCell`

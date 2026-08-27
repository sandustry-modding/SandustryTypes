# sandkit.api.patterns

## Type Aliases <!-- {docsify-ignore} -->

### PatternExcavateOptions :id=patternexcavateoptions

<p class="smt-member-path"><code>sandkit.api.patterns.PatternExcavateOptions</code></p>

```ts
PatternExcavateOptions = ExcavateOptions
```

Defined in: [sandkit/api/patterns.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/patterns.d.ts#L31)

Options for pattern-based excavation. Same shape as [shared.api.world.ExcavateOptions](api/sandkit.api.grid.md#excavateoptions).

## Functions <!-- {docsify-ignore} -->

### createCircle() :id=createcircle

<p class="smt-member-path"><code>sandkit.api.patterns.createCircle()</code></p>

```ts
createCircle(size: number): number[][]
```

Defined in: [sandkit/api/patterns.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/patterns.d.ts#L17)

Build a circular excavation pattern matrix for the given size.

#### Parameters

##### size

`number`

Pattern width and height in cells.

#### Returns

`number`[][]

Square matrix with `1` inside the circle and `0` outside.

***

### excavateAtCell() :id=excavateatcell

<p class="smt-member-path"><code>sandkit.api.patterns.excavateAtCell()</code></p>

```ts
excavateAtCell(...args: [number, number, number[][], Vector2, number, ExcavateOptions]): void
```

Defined in: [sandkit/api/patterns.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/patterns.d.ts#L28)

Excavate at a cell using a pattern matrix and output velocity.

#### Parameters

##### args

...\[`number`, `number`, `number`[][], [`Vector2`](api/shared.player.md#vector2), `number`, [`ExcavateOptions`](api/sandkit.api.grid.md#excavateoptions)\]

#### Returns

`void`

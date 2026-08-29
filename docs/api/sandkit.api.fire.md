# sandkit.api.fire

`sandkit.api.fire` — ignite and burn elements at grid cells.
Main thread only.

## See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.fire`

## Functions <!-- {docsify-ignore} -->

### canBurnElementAtCell() :id=canburnelementatcell

<p class="smt-member-path"><code>sandkit.api.fire.canBurnElementAtCell()</code></p>

```ts
canBurnElementAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/fire.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L17)

Returns true when the element at the cell can burn.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.fire.canBurnElementAtCell`

***

### burnElementAtCell() :id=burnelementatcell

<p class="smt-member-path"><code>sandkit.api.fire.burnElementAtCell()</code></p>

```ts
burnElementAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/fire.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L26)

Burn the element at the cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.fire.burnElementAtCell`

***

### ~~burnElementAtCellWhenIdle()~~

```ts
burnElementAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/fire.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L32)

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### Deprecated

Use [burnElementAtCell](#burnelementatcell) instead.

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — deprecated alias of `api.fire.burnElementAtCell`

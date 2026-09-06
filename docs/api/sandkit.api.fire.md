# sandkit.api.fire

`sandkit.api.fire` — ignite and burn elements at grid cells.
Main thread only.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Functions <!-- {docsify-ignore} -->

### canBurnElementAtCell() :id=canburnelementatcell

```ts
sandkit.api.fire.canBurnElementAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/fire.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L18)

Returns true when the element at the cell can burn.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### burnElementAtCell() :id=burnelementatcell

```ts
sandkit.api.fire.burnElementAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/fire.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L28)

Burn the element at the cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~burnElementAtCellWhenIdle()~~ :id=burnelementatcellwhenidle

```ts
sandkit.api.fire.burnElementAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/fire.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L35)

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### Deprecated

Use [burnElementAtCell](#burnelementatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

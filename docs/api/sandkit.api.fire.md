# sandkit.api.fire

`sandkit.api.fire` — ignite and burn elements at grid cells.
Main thread only.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.fire.canBurnElementAtCell :id=canburnelementatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L18" target="_blank" rel="noopener">fire.d.ts:18</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.fire.canBurnElementAtCell(...args: CellCoordinates): boolean">

```ts
canBurnElementAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Returns true when the element at the cell can burn.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.fire.burnElementAtCell :id=burnelementatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L28" target="_blank" rel="noopener">fire.d.ts:28</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.fire.burnElementAtCell(...args: CellCoordinates): void">

```ts
burnElementAtCell(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Burn the element at the cell. Main-entry writes are deferred; reads see the old grid.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.fire.burnElementAtCellWhenIdle~~ :id=burnelementatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/fire.d.ts#L35" target="_blank" rel="noopener">fire.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.fire.burnElementAtCellWhenIdle(...args: CellCoordinates): void">

```ts
burnElementAtCellWhenIdle(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [burnElementAtCell](?id=burnelementatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

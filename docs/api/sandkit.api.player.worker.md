# sandkit.api.player (worker)

**`Internal`**

Shared `sandkit.api.player` base — player position and collision queries.

 Base namespace reused by main and worker declarations.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.player.getPositionAtWorld :id=getpositionatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L16" target="_blank" rel="noopener">player.d.ts:16</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.getPositionAtWorld(): Vector2">

```ts
getPositionAtWorld(): Vector2
```

</div>

Return the player center position in world pixels.

[`Vector2`](api/shared.player.md?id=vector2) World position as `{ x, y }` in pixels.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.player.getWorldPosition~~ :id=getworldposition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L23" target="_blank" rel="noopener">player.d.ts:23</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.getWorldPosition(): Vector2">

```ts
getWorldPosition(): Vector2
```

</div>

[`Vector2`](api/shared.player.md?id=vector2)

#### Deprecated

Use [getPositionAtWorld](?id=getpositionatworld) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.player.isCollidingWithCell :id=iscollidingwithcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L34" target="_blank" rel="noopener">player.d.ts:34</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.isCollidingWithCell(...args: CellCoordinates): boolean">

```ts
isCollidingWithCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the player hitbox overlaps the cell.

True when the player overlaps the cell.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.player.isWithinRadiusOfCell :id=iswithinradiusofcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L46" target="_blank" rel="noopener">player.d.ts:46</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.isWithinRadiusOfCell(...args: [number, number, number]): boolean">

```ts
isWithinRadiusOfCell(...args: [number, number, number]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the player is within `radius` cells of the point.

True when the player is inside the radius.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

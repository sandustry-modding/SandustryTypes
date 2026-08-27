# sandkit.api.player (worker)

**`Internal`**

Shared `sandkit.api.player` base — player position and collision queries.

 Base namespace reused by main and worker declarations.

## Functions <!-- {docsify-ignore} -->

### getPositionAtWorld() :id=getpositionatworld

<p class="smt-member-path"><code>sandkit.api.player.getPositionAtWorld() (worker)</code></p>

```ts
getPositionAtWorld(): Vector2
```

Defined in: [shared/api/player.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/player.d.ts#L15)

Return the player center position in world pixels.

#### Returns

[`Vector2`](api/shared.player.md#vector2)

World position as `{ x, y }` in pixels.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.player.getPositionAtWorld`

***

### ~~getWorldPosition()~~

```ts
getWorldPosition(): Vector2
```

Defined in: [shared/api/player.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/player.d.ts#L21)

#### Returns

[`Vector2`](api/shared.player.md#vector2)

#### Deprecated

Use [getPositionAtWorld](#getpositionatworld) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.player.getPositionAtWorld`

***

### isCollidingWithCell() :id=iscollidingwithcell

<p class="smt-member-path"><code>sandkit.api.player.isCollidingWithCell() (worker)</code></p>

```ts
isCollidingWithCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/player.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/player.d.ts#L31)

Return true when the player hitbox overlaps the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

True when the player overlaps the cell.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.player.isCollidingWithCell`

***

### isWithinRadiusOfCell() :id=iswithinradiusofcell

<p class="smt-member-path"><code>sandkit.api.player.isWithinRadiusOfCell() (worker)</code></p>

```ts
isWithinRadiusOfCell(...args: [number, number, number]): boolean
```

Defined in: [shared/api/player.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/player.d.ts#L42)

Return true when the player is within `radius` cells of the point.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`boolean`

True when the player is inside the radius.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.player.isWithinRadiusOfCell`

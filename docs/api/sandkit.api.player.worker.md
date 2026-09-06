# sandkit.api.player (worker)

**`Internal`**

Shared `sandkit.api.player` base — player position and collision queries.

 Base namespace reused by main and worker declarations.

## Functions <!-- {docsify-ignore} -->

### getPositionAtWorld() :id=getpositionatworld

```ts
sandkit.api.player.getPositionAtWorld(): Vector2
```

Defined in: [shared/api/player.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L16)

Return the player center position in world pixels.

#### Returns

[`Vector2`](api/shared.player.md#vector2)

World position as `{ x, y }` in pixels.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~getWorldPosition()~~ :id=getworldposition

```ts
sandkit.api.player.getWorldPosition(): Vector2
```

Defined in: [shared/api/player.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L23)

#### Returns

[`Vector2`](api/shared.player.md#vector2)

#### Deprecated

Use [getPositionAtWorld](#getpositionatworld) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isCollidingWithCell() :id=iscollidingwithcell

```ts
sandkit.api.player.isCollidingWithCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/player.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L34)

Return true when the player hitbox overlaps the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

True when the player overlaps the cell.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isWithinRadiusOfCell() :id=iswithinradiusofcell

```ts
sandkit.api.player.isWithinRadiusOfCell(...args: [number, number, number]): boolean
```

Defined in: [shared/api/player.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L46)

Return true when the player is within `radius` cells of the point.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`boolean`

True when the player is inside the radius.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

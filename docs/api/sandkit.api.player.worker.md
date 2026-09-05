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

Defined in: [shared/api/player.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L16)

Return the player center position in world pixels.

#### Returns

[`Vector2`](api/shared.player.md#vector2)

World position as `{ x, y }` in pixels.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### ~~getWorldPosition()~~

```ts
getWorldPosition(): Vector2
```

Defined in: [shared/api/player.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/player.d.ts#L23)

#### Returns

[`Vector2`](api/shared.player.md#vector2)

#### Deprecated

Use [getPositionAtWorld](#getpositionatworld) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### isCollidingWithCell() :id=iscollidingwithcell

<p class="smt-member-path"><code>sandkit.api.player.isCollidingWithCell() (worker)</code></p>

```ts
isCollidingWithCell(...args: CellCoordinates): boolean
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

---

### isWithinRadiusOfCell() :id=iswithinradiusofcell

<p class="smt-member-path"><code>sandkit.api.player.isWithinRadiusOfCell() (worker)</code></p>

```ts
isWithinRadiusOfCell(...args: [number, number, number]): boolean
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

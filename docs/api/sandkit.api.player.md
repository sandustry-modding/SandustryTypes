# sandkit.api.player

## Namespaces <!-- {docsify-ignore} -->

- [inventory](api/sandkit.api.player.inventory.md)
- [buildings](api/sandkit.api.player.buildings.md)

## Functions <!-- {docsify-ignore} -->

### setPositionAtWorld() :id=setpositionatworld

<p class="smt-member-path"><code>sandkit.api.player.setPositionAtWorld()</code></p>

```ts
setPositionAtWorld(worldX: number, worldY: number): void
```

Defined in: [sandkit/api/player.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L34)

Set the player world position.

#### Parameters

##### worldX

`number`

World x position in pixels.

##### worldY

`number`

World y position in pixels.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~setWorldPosition()~~

```ts
setWorldPosition(worldX: number, worldY: number): void
```

Defined in: [sandkit/api/player.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L41)

#### Parameters

##### worldX

`number`

##### worldY

`number`

#### Returns

`void`

#### Deprecated

Use [setPositionAtWorld](#setpositionatworld) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### setVelocity() :id=setvelocity

<p class="smt-member-path"><code>sandkit.api.player.setVelocity()</code></p>

```ts
setVelocity(velocityX: number, velocityY: number): void
```

Defined in: [sandkit/api/player.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L51)

Set the player velocity.

#### Parameters

##### velocityX

`number`

Horizontal velocity in pixels per second.

##### velocityY

`number`

Vertical velocity in pixels per second.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### setMovementSpeedMultiplier() :id=setmovementspeedmultiplier

<p class="smt-member-path"><code>sandkit.api.player.setMovementSpeedMultiplier()</code></p>

```ts
setMovementSpeedMultiplier(multiplier: number): void
```

Defined in: [sandkit/api/player.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L61)

Set the movement speed multiplier.

#### Parameters

##### multiplier

`number`

Speed scale factor (`1` is default walk). `0` freezes movement.
Vanilla Sprint Boost (Shift burst + meter) only runs when this value is exactly `1`.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### setMovementMode() :id=setmovementmode

<p class="smt-member-path"><code>sandkit.api.player.setMovementMode()</code></p>

```ts
setMovementMode(mode: "normal" | "hover"): boolean
```

Defined in: [sandkit/api/player.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L71)

Set movement mode to normal or hover.

#### Parameters

##### mode

`"normal"` \| `"hover"`

`"normal"` for default physics, or `"hover"` for hover flight.

#### Returns

`boolean`

True when the mode changes.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isOnGround() :id=isonground

<p class="smt-member-path"><code>sandkit.api.player.isOnGround()</code></p>

```ts
isOnGround(): boolean
```

Defined in: [sandkit/api/player.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L82)

Return true when the player is on ground.
Tests solid cells 1 pixel below the hitbox. Do not use `player.onGround`
on the store snapshot — that flag is not updated during play.

#### Returns

`boolean`

True when the player touches solid ground.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### teleportToGround() :id=teleporttoground

<p class="smt-member-path"><code>sandkit.api.player.teleportToGround()</code></p>

```ts
teleportToGround(): void
```

Defined in: [sandkit/api/player.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L89)

Move the player down until ground is found.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isPositionClearAtWorld() :id=ispositionclearatworld

<p class="smt-member-path"><code>sandkit.api.player.isPositionClearAtWorld()</code></p>

```ts
isPositionClearAtWorld(worldX: number, worldY: number): boolean
```

Defined in: [sandkit/api/player.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L100)

Return true when the world position has no collision.

#### Parameters

##### worldX

`number`

World x position in pixels to test.

##### worldY

`number`

World y position in pixels to test.

#### Returns

`boolean`

True when the player hitbox fits at the position.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~isWorldPositionClear()~~

```ts
isWorldPositionClear(worldX: number, worldY: number): boolean
```

Defined in: [sandkit/api/player.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L107)

#### Parameters

##### worldX

`number`

##### worldY

`number`

#### Returns

`boolean`

#### Deprecated

Use [isPositionClearAtWorld](#ispositionclearatworld) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## References <!-- {docsify-ignore} -->

### getPositionAtWorld :id=getpositionatworld

<p class="smt-member-path"><code>sandkit.api.player.getPositionAtWorld</code></p>

Re-exports [getPositionAtWorld](api/sandkit.api.player.worker.md#getpositionatworld)

***

### isCollidingWithCell :id=iscollidingwithcell

<p class="smt-member-path"><code>sandkit.api.player.isCollidingWithCell</code></p>

Re-exports [isCollidingWithCell](api/sandkit.api.player.worker.md#iscollidingwithcell)

***

### isWithinRadiusOfCell :id=iswithinradiusofcell

<p class="smt-member-path"><code>sandkit.api.player.isWithinRadiusOfCell</code></p>

Re-exports [isWithinRadiusOfCell](api/sandkit.api.player.worker.md#iswithinradiusofcell)

***

### getWorldPosition :id=getworldposition

<p class="smt-member-path"><code>sandkit.api.player.getWorldPosition</code></p>

Re-exports [getWorldPosition](api/sandkit.api.player.worker.md#getworldposition)

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

Defined in: [sandkit/api/player.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L32)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.player.setPositionAtWorld`

***

### ~~setWorldPosition()~~

```ts
setWorldPosition(worldX: number, worldY: number): void
```

Defined in: [sandkit/api/player.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L38)

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

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.player.setPositionAtWorld`

***

### setVelocity() :id=setvelocity

<p class="smt-member-path"><code>sandkit.api.player.setVelocity()</code></p>

```ts
setVelocity(velocityX: number, velocityY: number): void
```

Defined in: [sandkit/api/player.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L47)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.player.setVelocity`

***

### setMovementSpeedMultiplier() :id=setmovementspeedmultiplier

<p class="smt-member-path"><code>sandkit.api.player.setMovementSpeedMultiplier()</code></p>

```ts
setMovementSpeedMultiplier(multiplier: number): void
```

Defined in: [sandkit/api/player.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L56)

Set the movement speed multiplier.

#### Parameters

##### multiplier

`number`

Speed scale factor (`1` is default walk). `0` freezes movement.
Vanilla Sprint Boost (Shift burst + meter) only runs when this value is exactly `1`.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.player.setMovementSpeedMultiplier`

***

### setMovementMode() :id=setmovementmode

<p class="smt-member-path"><code>sandkit.api.player.setMovementMode()</code></p>

```ts
setMovementMode(mode: "normal" | "hover"): boolean
```

Defined in: [sandkit/api/player.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L65)

Set movement mode to normal or hover.

#### Parameters

##### mode

`"normal"` \| `"hover"`

`"normal"` for default physics, or `"hover"` for hover flight.

#### Returns

`boolean`

True when the mode changes.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.player.setMovementMode`

***

### isOnGround() :id=isonground

<p class="smt-member-path"><code>sandkit.api.player.isOnGround()</code></p>

```ts
isOnGround(): boolean
```

Defined in: [sandkit/api/player.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L75)

Return true when the player is on ground.
Tests solid cells 1 pixel below the hitbox. Do not use `player.onGround`
on the store snapshot — that flag is not updated during play.

#### Returns

`boolean`

True when the player touches solid ground.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.player.isOnGround`

***

### teleportToGround() :id=teleporttoground

<p class="smt-member-path"><code>sandkit.api.player.teleportToGround()</code></p>

```ts
teleportToGround(): void
```

Defined in: [sandkit/api/player.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L82)

Move the player down until ground is found.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.player.teleportToGround`

***

### isPositionClearAtWorld() :id=ispositionclearatworld

<p class="smt-member-path"><code>sandkit.api.player.isPositionClearAtWorld()</code></p>

```ts
isPositionClearAtWorld(worldX: number, worldY: number): boolean
```

Defined in: [sandkit/api/player.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L92)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.player.isPositionClearAtWorld`

***

### ~~isWorldPositionClear()~~

```ts
isWorldPositionClear(worldX: number, worldY: number): boolean
```

Defined in: [sandkit/api/player.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/player.d.ts#L98)

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

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.player.isPositionClearAtWorld`

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

# sandkit.api.player

## Namespaces <!-- {docsify-ignore} -->

- [inventory](api/sandkit.api.player.inventory.md)
- [buildings](api/sandkit.api.player.buildings.md)

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.player.setPositionAtWorld :id=setpositionatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L33" target="_blank" rel="noopener">player.d.ts:33</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.setPositionAtWorld(worldX: number, worldY: number): void">

```ts
setPositionAtWorld(worldX: number, worldY: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World x position in pixels. |
| worldY | `number` | World y position in pixels. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

</div>

Set the player world position.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.player.setWorldPosition~~ :id=setworldposition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L40" target="_blank" rel="noopener">player.d.ts:40</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.setWorldPosition(worldX: number, worldY: number): void">

```ts
setWorldPosition(worldX: number, worldY: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` |  |
| worldY | `number` |  |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [setPositionAtWorld](?id=setpositionatworld) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.player.setVelocity :id=setvelocity

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L50" target="_blank" rel="noopener">player.d.ts:50</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.setVelocity(velocityX: number, velocityY: number): void">

```ts
setVelocity(velocityX: number, velocityY: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| velocityX | `number` | Horizontal velocity in pixels per second. |
| velocityY | `number` | Vertical velocity in pixels per second. |

<div class="smt-member-anchors">

##### velocityX <!-- {docsify-ignore} -->

##### velocityY <!-- {docsify-ignore} -->

</div>

Set the player velocity.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.player.setMovementSpeedMultiplier :id=setmovementspeedmultiplier

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L60" target="_blank" rel="noopener">player.d.ts:60</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.setMovementSpeedMultiplier(multiplier: number): void">

```ts
setMovementSpeedMultiplier(multiplier: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| multiplier | `number` | Speed scale factor (`1` is default walk). `0` freezes movement. Vanilla Sprint Boost (Shift burst + meter) only runs when this value is exactly `1`. |

<div class="smt-member-anchors">

##### multiplier <!-- {docsify-ignore} -->

</div>

Set the movement speed multiplier.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.player.setMovementMode :id=setmovementmode

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L70" target="_blank" rel="noopener">player.d.ts:70</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.setMovementMode(mode: &quot;normal&quot; | &quot;hover&quot;): boolean">

```ts
setMovementMode(mode: "normal" | "hover"): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| mode | `"normal"` \\| `"hover"` | `"normal"` for default physics, or `"hover"` for hover flight. |

<div class="smt-member-anchors">

##### mode <!-- {docsify-ignore} -->

</div>

Set movement mode to normal or hover.

True when the mode changes.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.player.isOnGround :id=isonground

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L81" target="_blank" rel="noopener">player.d.ts:81</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.isOnGround(): boolean">

```ts
isOnGround(): boolean
```

</div>

Return true when the player is on ground.
Tests solid cells 1 pixel below the hitbox. Do not use `player.onGround`
on the store snapshot — that flag is not updated during play.

True when the player touches solid ground.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.player.teleportToGround :id=teleporttoground

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L88" target="_blank" rel="noopener">player.d.ts:88</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.teleportToGround(): void">

```ts
teleportToGround(): void
```

</div>

Move the player down until ground is found.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.player.isPositionClearAtWorld :id=ispositionclearatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L99" target="_blank" rel="noopener">player.d.ts:99</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.isPositionClearAtWorld(worldX: number, worldY: number): boolean">

```ts
isPositionClearAtWorld(worldX: number, worldY: number): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World x position in pixels to test. |
| worldY | `number` | World y position in pixels to test. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

</div>

Return true when the world position has no collision.

True when the player hitbox fits at the position.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.player.isWorldPositionClear~~ :id=isworldpositionclear

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L106" target="_blank" rel="noopener">player.d.ts:106</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.player.isWorldPositionClear(worldX: number, worldY: number): boolean">

```ts
isWorldPositionClear(worldX: number, worldY: number): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` |  |
| worldY | `number` |  |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [isPositionClearAtWorld](?id=ispositionclearatworld) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

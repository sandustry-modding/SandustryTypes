# shared.player

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### shared.player.Player :id=player

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L34" target="_blank" rel="noopener">player.d.ts:34</a></p>

| Property | Type | Description |
| --- | --- | --- |
| x | number | Player hitbox left edge in world pixels. |
| y | number | Player hitbox top edge in world pixels. |
| width | number | Player hitbox width in world pixels. |
| height | number | Player hitbox height in world pixels. |
| velocity | Vector2 | Current movement velocity in pixels per second. |
| threshold | Vector2 | Movement threshold accumulator used by physics. |
| onGround | boolean | Spawn flag. Live physics does not update this field. Use `sandkit.api.player.isOnGround()` (solid cells 1px below the hitbox). |
| speedCapOverdrive | object | Temporary speed-cap bonuses applied on each axis. |
| inventory | InventoryItem[] | Items currently held in the player inventory. |
| buildings | number[] | Structure type ids the player has unlocked for building. |
| tech | object | Tech tree nodes and their unlock metadata. |
| lockedTechs | object | Tech ids explicitly locked for this save. |
| action | null | Active world action, or null when idle. |
| hotbar | object | Hotbar slots, active indices, and item sprites. |
| grapplingHook | boolean | True when the grappling hook is equipped or active. |
| cooldowns | object | Cooldown timestamps for movement particles and slowdown. |
| isHovering | boolean | True when hover movement mode is active. |
| weaponsMeta | object | Per-weapon runtime metadata. |

<div class="smt-member-anchors">

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

##### width <!-- {docsify-ignore} -->

##### height <!-- {docsify-ignore} -->

##### velocity <!-- {docsify-ignore} -->

##### threshold <!-- {docsify-ignore} -->

##### onGround <!-- {docsify-ignore} -->

##### speedCapOverdrive <!-- {docsify-ignore} -->

##### inventory <!-- {docsify-ignore} -->

##### buildings <!-- {docsify-ignore} -->

##### tech <!-- {docsify-ignore} -->

##### lockedTechs <!-- {docsify-ignore} -->

##### action <!-- {docsify-ignore} -->

##### hotbar <!-- {docsify-ignore} -->

##### grapplingHook <!-- {docsify-ignore} -->

##### cooldowns <!-- {docsify-ignore} -->

##### isHovering <!-- {docsify-ignore} -->

##### weaponsMeta <!-- {docsify-ignore} -->

</div>

Live player state snapshot (read-only shape for mods).

Reflects `sandkit.engine.state` / store player fields exposed to mods.

</div>

<div class="smt-member-card">

### shared.player.InventoryItem :id=inventoryitem

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L146" target="_blank" rel="noopener">player.d.ts:146</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | number |  |
| itemType | number |  |
| abilities | object[] |  |
| nameKey | string |  |
| descriptionKey | string |  |
| categoryKey | "excavation" &#124; "utility" &#124; "drones" |  |
| sprite? | AssetRef |  |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### itemType <!-- {docsify-ignore} -->

##### abilities <!-- {docsify-ignore} -->

##### nameKey <!-- {docsify-ignore} -->

##### descriptionKey <!-- {docsify-ignore} -->

##### categoryKey <!-- {docsify-ignore} -->

##### sprite? <!-- {docsify-ignore} -->

</div>

One hotbar or inventory item entry.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### shared.player.CellCoordinates :id=cellcoordinates

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L14" target="_blank" rel="noopener">player.d.ts:14</a></p>

<div class="smt-member-sig" data-sig="shared.player.CellCoordinates = [number, number]">

```ts
CellCoordinates = [number, number]
```

</div>

Grid cell position as `[cellX, cellY]`.

Cell coordinates match `sandkit.api.*AtCell` helpers: column first, then row.

</div>

<div class="smt-member-card">

### shared.player.Vector2 :id=vector2

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/player.d.ts#L22" target="_blank" rel="noopener">player.d.ts:22</a></p>

<div class="smt-member-sig" data-sig="shared.player.Vector2 = object">

```ts
Vector2 = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| x | number | Horizontal component. |
| y | number | Vertical component. |

<div class="smt-member-anchors">

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

</div>

2D vector in world or cell space.

World positions use pixels. Cell helpers may return pixel or cell units
depending on the API.

</div>

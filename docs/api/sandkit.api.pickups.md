# sandkit.api.pickups

World pickups — spawn, collect, and query pickup instances.

Available as `sandkit.api.pickups`.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.pickups.WorldItemLight :id=worlditemlight

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L22" target="_blank" rel="noopener">pickups.d.ts:22</a></p>

| Property | Type | Description |
| --- | --- | --- |
| brightness? | number | Light brightness multiplier. Default 1. |
| size? | number | Light radius in world pixels. Default 100. |
| color? | [number, number, number] \| [number, number, number, number] | RGB or RGBA color components in 0–1 range. |

<div class="smt-member-anchors">

##### brightness? <!-- {docsify-ignore} -->

##### size? <!-- {docsify-ignore} -->

##### color? <!-- {docsify-ignore} -->

</div>

Optional point light attached when spawning a pickup.

</div>

<div class="smt-member-card">

### sandkit.api.pickups.WorldItem :id=worlditem

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L32" target="_blank" rel="noopener">pickups.d.ts:32</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | number |  |
| x | number |  |
| y | number |  |
| type | PickupType |  |
| data | Record<string, unknown> |  |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

##### type <!-- {docsify-ignore} -->

##### data <!-- {docsify-ignore} -->

</div>

Active world pickup instance.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.pickups.PickupType :id=pickuptype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L12" target="_blank" rel="noopener">pickups.d.ts:12</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pickups.PickupType = PickupType">

```ts
PickupType = PickupType
```

</div>

Official pickup type discriminator.

</div>

<div class="smt-member-card">

### ~~sandkit.api.pickups.WorldItemType~~ :id=worlditemtype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L19" target="_blank" rel="noopener">pickups.d.ts:19</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pickups.WorldItemType = PickupType">

```ts
WorldItemType = PickupType
```

</div>

#### Deprecated

Use [PickupType](?id=pickuptype) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.pickups.spawnAtWorld :id=spawnatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L52" target="_blank" rel="noopener">pickups.d.ts:52</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pickups.spawnAtWorld(type: PickupType, worldX: number, worldY: number, data?: Record&lt;string, unknown&gt;, light?: WorldItemLight): WorldItem">

```ts
spawnAtWorld(type: PickupType, worldX: number, worldY: number, data?: Record<string, unknown>, light?: WorldItemLight): WorldItem
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| type | [`PickupType`](api/sandkit.enums.PickupType.md) | Pickup type discriminator. |
| worldX | `number` | World x position in pixels. |
| worldY | `number` | World y position in pixels. |
| data? | `Record`\<`string`, `unknown`\> | Optional per-item data bag copied onto the instance. |
| light? | [`WorldItemLight`](?id=worlditemlight) | Optional point light spawned with the pickup. |

<div class="smt-member-anchors">

##### type <!-- {docsify-ignore} -->

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### data? <!-- {docsify-ignore} -->

##### light? <!-- {docsify-ignore} -->

</div>

Spawn a pickup at world position.

[`WorldItem`](?id=worlditem) The spawned pickup instance.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.pickups.remove :id=remove

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L67" target="_blank" rel="noopener">pickups.d.ts:67</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pickups.remove(pickup: WorldItem): void">

```ts
remove(pickup: WorldItem): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| pickup | [`WorldItem`](?id=worlditem) | Pickup returned from spawn or lookup helpers. |

<div class="smt-member-anchors">

##### pickup <!-- {docsify-ignore} -->

</div>

Remove a pickup instance from the world.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.pickups.destroy~~ :id=destroy

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L74" target="_blank" rel="noopener">pickups.d.ts:74</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pickups.destroy(pickup: WorldItem): void">

```ts
destroy(pickup: WorldItem): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| pickup | [`WorldItem`](?id=worlditem) |  |

<div class="smt-member-anchors">

##### pickup <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [remove](?id=remove) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.pickups.pickUp :id=pickup

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L84" target="_blank" rel="noopener">pickups.d.ts:84</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pickups.pickUp(pickup: WorldItem): boolean">

```ts
pickUp(pickup: WorldItem): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| pickup | [`WorldItem`](?id=worlditem) | Pickup to collect. |

<div class="smt-member-anchors">

##### pickup <!-- {docsify-ignore} -->

</div>

Pick up a world item into inventory.

True when the item was collected.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.pickups.getAll :id=getall

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L91" target="_blank" rel="noopener">pickups.d.ts:91</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pickups.getAll(): WorldItem[]">

```ts
getAll(): WorldItem[]
```

</div>

Return all active pickups.

[`WorldItem`](?id=worlditem)[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.pickups.getById :id=getbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L100" target="_blank" rel="noopener">pickups.d.ts:100</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.pickups.getById(pickupId: number): WorldItem | undefined">

```ts
getById(pickupId: number): WorldItem | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| pickupId | `number` | Runtime pickup id. |

<div class="smt-member-anchors">

##### pickupId <!-- {docsify-ignore} -->

</div>

Return a pickup by numeric id.

[`WorldItem`](?id=worlditem) \| `undefined`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

# sandkit.api.pickups

World pickups — spawn, collect, and query pickup instances.

Available as `sandkit.api.pickups`.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Interfaces <!-- {docsify-ignore} -->

### WorldItemLight :id=worlditemlight

<p class="smt-member-path"><code>sandkit.api.pickups.WorldItemLight</code></p>

Defined in: [sandkit/api/pickups.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L22)

Optional point light attached when spawning a pickup.

#### Properties

##### brightness?

```ts
optional brightness?: number
```

Defined in: [sandkit/api/pickups.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L24)

Light brightness multiplier. Default 1.

##### size?

```ts
optional size?: number
```

Defined in: [sandkit/api/pickups.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L26)

Light radius in world pixels. Default 100.

##### color?

```ts
optional color?: [number, number, number] | [number, number, number, number]
```

Defined in: [sandkit/api/pickups.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L28)

RGB or RGBA color components in 0–1 range.

---

### WorldItem :id=worlditem

<p class="smt-member-path"><code>sandkit.api.pickups.WorldItem</code></p>

Defined in: [sandkit/api/pickups.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L32)

Active world pickup instance.

#### Properties

##### id

```ts
id: number;
```

Defined in: [sandkit/api/pickups.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L33)

##### x

```ts
x: number;
```

Defined in: [sandkit/api/pickups.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L34)

##### y

```ts
y: number;
```

Defined in: [sandkit/api/pickups.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L35)

##### type

```ts
type: PickupType;
```

Defined in: [sandkit/api/pickups.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L36)

##### data

```ts
data: Record<string, unknown>;
```

Defined in: [sandkit/api/pickups.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L37)

## Type Aliases <!-- {docsify-ignore} -->

### PickupType :id=pickuptype

<p class="smt-member-path"><code>sandkit.api.pickups.PickupType</code></p>

```ts
PickupType = PickupType;
```

Defined in: [sandkit/api/pickups.d.ts:12](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L12)

Official pickup type discriminator.

---

### ~~WorldItemType~~

```ts
WorldItemType = PickupType;
```

Defined in: [sandkit/api/pickups.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L19)

#### Deprecated

Use [PickupType](#pickuptype) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Functions <!-- {docsify-ignore} -->

### spawnAtWorld() :id=spawnatworld

<p class="smt-member-path"><code>sandkit.api.pickups.spawnAtWorld()</code></p>

```ts
spawnAtWorld(type: PickupType, worldX: number, worldY: number, data?: Record<string, unknown>, light?: WorldItemLight): WorldItem
```

Defined in: [sandkit/api/pickups.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L52)

Spawn a pickup at world position.

#### Parameters

##### type

[`PickupType`](api/sandkit.enums.PickupType.md)

Pickup type discriminator.

##### worldX

`number`

World x position in pixels.

##### worldY

`number`

World y position in pixels.

##### data?

`Record`\<`string`, `unknown`\>

Optional per-item data bag copied onto the instance.

##### light?

[`WorldItemLight`](#worlditemlight)

Optional point light spawned with the pickup.

#### Returns

[`WorldItem`](#worlditem)

The spawned pickup instance.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### remove() :id=remove

<p class="smt-member-path"><code>sandkit.api.pickups.remove()</code></p>

```ts
remove(pickup: WorldItem): void
```

Defined in: [sandkit/api/pickups.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L61)

Remove a pickup instance from the world.

#### Parameters

##### pickup

[`WorldItem`](#worlditem)

Pickup returned from spawn or lookup helpers.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### ~~destroy()~~

```ts
destroy(pickup: WorldItem): void
```

Defined in: [sandkit/api/pickups.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L68)

#### Parameters

##### pickup

[`WorldItem`](#worlditem)

#### Returns

`void`

#### Deprecated

Use [remove](#remove) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### pickUp() :id=pickup

<p class="smt-member-path"><code>sandkit.api.pickups.pickUp()</code></p>

```ts
pickUp(pickup: WorldItem): boolean
```

Defined in: [sandkit/api/pickups.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L78)

Pick up a world item into inventory.

#### Parameters

##### pickup

[`WorldItem`](#worlditem)

Pickup to collect.

#### Returns

`boolean`

True when the item was collected.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### getAll() :id=getall

<p class="smt-member-path"><code>sandkit.api.pickups.getAll()</code></p>

```ts
getAll(): WorldItem[]
```

Defined in: [sandkit/api/pickups.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L85)

Return all active pickups.

#### Returns

[`WorldItem`](#worlditem)[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### getById() :id=getbyid

<p class="smt-member-path"><code>sandkit.api.pickups.getById()</code></p>

```ts
getById(pickupId: number): WorldItem | undefined
```

Defined in: [sandkit/api/pickups.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/pickups.d.ts#L94)

Return a pickup by numeric id.

#### Parameters

##### pickupId

`number`

Runtime pickup id.

#### Returns

[`WorldItem`](#worlditem) \| `undefined`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

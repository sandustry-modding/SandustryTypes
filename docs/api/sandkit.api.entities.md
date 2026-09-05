# sandkit.api.entities

Entity spawn, capture, and lifecycle helpers.

Available as `sandkit.api.entities`.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Interfaces <!-- {docsify-ignore} -->

### Entity :id=entity

<p class="smt-member-path"><code>sandkit.api.entities.Entity</code></p>

Defined in: [sandkit/api/entities.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L78)

Active entity instance in the world.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### id

```ts
id: number;
```

Defined in: [sandkit/api/entities.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L79)

##### x

```ts
x: number;
```

Defined in: [sandkit/api/entities.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L80)

##### y

```ts
y: number;
```

Defined in: [sandkit/api/entities.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L81)

##### targetX?

```ts
optional targetX?: number
```

Defined in: [sandkit/api/entities.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L82)

##### targetY?

```ts
optional targetY?: number
```

Defined in: [sandkit/api/entities.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L83)

## Functions <!-- {docsify-ignore} -->

### getById() :id=getbyid

<p class="smt-member-path"><code>sandkit.api.entities.getById()</code></p>

```ts
getById(entityId: number): Entity | undefined
```

Defined in: [sandkit/api/entities.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L16)

Return one live entity by runtime id.

#### Parameters

##### entityId

`number`

Runtime entity id.

#### Returns

[`Entity`](#entity) \| `undefined`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### getAllByType() :id=getallbytype

<p class="smt-member-path"><code>sandkit.api.entities.getAllByType()</code></p>

```ts
getAllByType(entityTypeId: string): Entity[]
```

Defined in: [sandkit/api/entities.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L25)

Return all live entities of one type.

#### Parameters

##### entityTypeId

`string`

Registered entity type string id.

#### Returns

[`Entity`](#entity)[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### spawnAtWorld() :id=spawnatworld

<p class="smt-member-path"><code>sandkit.api.entities.spawnAtWorld()</code></p>

```ts
spawnAtWorld(entityTypeId: string, worldX: number, worldY: number): Entity
```

Defined in: [sandkit/api/entities.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L37)

Spawn an entity at world position.

#### Parameters

##### entityTypeId

`string`

Registered entity type string id.

##### worldX

`number`

Spawn x position in world pixels.

##### worldY

`number`

Spawn y position in world pixels.

#### Returns

[`Entity`](#entity)

The spawned entity instance.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### remove() :id=remove

<p class="smt-member-path"><code>sandkit.api.entities.remove()</code></p>

```ts
remove(entityId: number): void
```

Defined in: [sandkit/api/entities.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L46)

Remove an entity from the world.

#### Parameters

##### entityId

`number`

Runtime entity id.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### launch() :id=launch

<p class="smt-member-path"><code>sandkit.api.entities.launch()</code></p>

```ts
launch(entityId: number, angleRadians: number, speed?: number): void
```

Defined in: [sandkit/api/entities.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L57)

Launch an entity with angle and optional speed.

#### Parameters

##### entityId

`number`

Runtime entity id.

##### angleRadians

`number`

Launch angle in radians.

##### speed?

`number`

Optional launch speed.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### startCapture() :id=startcapture

<p class="smt-member-path"><code>sandkit.api.entities.startCapture()</code></p>

```ts
startCapture(entityId: number): void
```

Defined in: [sandkit/api/entities.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L66)

Start capture for an entity (for example vacuum capture).

#### Parameters

##### entityId

`number`

Runtime entity id.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### collect() :id=collect

<p class="smt-member-path"><code>sandkit.api.entities.collect()</code></p>

```ts
collect(entityId: number): void
```

Defined in: [sandkit/api/entities.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/entities.d.ts#L75)

Collect an entity (for example into inventory or storage).

#### Parameters

##### entityId

`number`

Runtime entity id.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

# sandkit.api.entities

Entity spawn, capture, and lifecycle helpers.

Available as `sandkit.api.entities`.

## See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.entities`

## Interfaces <!-- {docsify-ignore} -->

### Entity :id=entity

<p class="smt-member-path"><code>sandkit.api.entities.Entity</code></p>

Defined in: sandkit/api/entities.d.ts:71

Active entity instance in the world.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### id

```ts
id: number
```

Defined in: sandkit/api/entities.d.ts:72

##### x

```ts
x: number
```

Defined in: sandkit/api/entities.d.ts:73

##### y

```ts
y: number
```

Defined in: sandkit/api/entities.d.ts:74

##### targetX?

```ts
optional targetX?: number
```

Defined in: sandkit/api/entities.d.ts:75

##### targetY?

```ts
optional targetY?: number
```

Defined in: sandkit/api/entities.d.ts:76

## Functions <!-- {docsify-ignore} -->

### getById() :id=getbyid

<p class="smt-member-path"><code>sandkit.api.entities.getById()</code></p>

```ts
getById(entityId: number): Entity | undefined
```

Defined in: sandkit/api/entities.d.ts:15

Return one live entity by runtime id.

#### Parameters

##### entityId

`number`

Runtime entity id.

#### Returns

[`Entity`](#entity) \| `undefined`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.entities.getById`

***

### getAllByType() :id=getallbytype

<p class="smt-member-path"><code>sandkit.api.entities.getAllByType()</code></p>

```ts
getAllByType(entityTypeId: string): Entity[]
```

Defined in: sandkit/api/entities.d.ts:23

Return all live entities of one type.

#### Parameters

##### entityTypeId

`string`

Registered entity type string id.

#### Returns

[`Entity`](#entity)[]

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.entities.getAllByType`

***

### spawnAtWorld() :id=spawnatworld

<p class="smt-member-path"><code>sandkit.api.entities.spawnAtWorld()</code></p>

```ts
spawnAtWorld(entityTypeId: string, worldX: number, worldY: number): Entity
```

Defined in: sandkit/api/entities.d.ts:34

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.entities.spawnAtWorld`

***

### remove() :id=remove

<p class="smt-member-path"><code>sandkit.api.entities.remove()</code></p>

```ts
remove(entityId: number): void
```

Defined in: sandkit/api/entities.d.ts:42

Remove an entity from the world.

#### Parameters

##### entityId

`number`

Runtime entity id.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.entities.remove`

***

### launch() :id=launch

<p class="smt-member-path"><code>sandkit.api.entities.launch()</code></p>

```ts
launch(entityId: number, angleRadians: number, speed?: number): void
```

Defined in: sandkit/api/entities.d.ts:52

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.entities.launch`

***

### startCapture() :id=startcapture

<p class="smt-member-path"><code>sandkit.api.entities.startCapture()</code></p>

```ts
startCapture(entityId: number): void
```

Defined in: sandkit/api/entities.d.ts:60

Start capture for an entity (for example vacuum capture).

#### Parameters

##### entityId

`number`

Runtime entity id.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.entities.startCapture`

***

### collect() :id=collect

<p class="smt-member-path"><code>sandkit.api.entities.collect()</code></p>

```ts
collect(entityId: number): void
```

Defined in: sandkit/api/entities.d.ts:68

Collect an entity (for example into inventory or storage).

#### Parameters

##### entityId

`number`

Runtime entity id.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.entities.collect`

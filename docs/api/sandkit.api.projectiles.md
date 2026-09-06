# sandkit.api.projectiles

## Interfaces <!-- {docsify-ignore} -->

### ProjectileDefinition :id=projectiledefinition

<p class="smt-member-path"><code>sandkit.api.projectiles.ProjectileDefinition</code></p>
Defined in: [sandkit/api/projectiles.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L59)

Mod-registered projectile definition.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### id

```ts
id: string
```

Defined in: [sandkit/api/projectiles.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L60)

##### sprite

```ts
sprite: object
```

Defined in: [sandkit/api/projectiles.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L61)

###### id

```ts
id: string
```

###### tint?

```ts
optional tint?: number
```

##### getOptions

```ts
getOptions: () => Record<string, unknown>
```

Defined in: [sandkit/api/projectiles.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L66)

Returns spawn-time physics and visual options.

###### Returns

`Record`\<`string`, `unknown`\>

##### getModData?

```ts
optional getModData?: (state: unknown, projectile: Projectile) => Record<string, unknown>
```

Defined in: [sandkit/api/projectiles.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L68)

Optional per-projectile mutable data factory.

###### Parameters

###### state

`unknown`

###### projectile

[`Projectile`](#projectile)

###### Returns

`Record`\<`string`, `unknown`\>

***

### ProjectileBlueprint :id=projectileblueprint

<p class="smt-member-path"><code>sandkit.api.projectiles.ProjectileBlueprint</code></p>
Defined in: [sandkit/api/projectiles.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L73)

Blueprint used to spawn a projectile.

#### Properties

##### opts

```ts
opts: Record<string, unknown>
```

Defined in: [sandkit/api/projectiles.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L74)

##### type

```ts
type: unknown
```

Defined in: [sandkit/api/projectiles.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L75)

***

### Projectile :id=projectile

<p class="smt-member-path"><code>sandkit.api.projectiles.Projectile</code></p>
Defined in: [sandkit/api/projectiles.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L79)

Active projectile instance.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### id

```ts
id: number
```

Defined in: [sandkit/api/projectiles.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L80)

##### x

```ts
x: number
```

Defined in: [sandkit/api/projectiles.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L81)

##### y

```ts
y: number
```

Defined in: [sandkit/api/projectiles.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L82)

## Functions <!-- {docsify-ignore} -->

### register() :id=register

```ts
sandkit.api.projectiles.register(definition: ProjectileDefinition): void
```

Defined in: [sandkit/api/projectiles.d.ts:13](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L13)

Register a projectile definition.

#### Parameters

##### definition

[`ProjectileDefinition`](#projectiledefinition)

Projectile id, sprite, and runtime options factory.

#### Returns

`void`

***

### getDefinitionById() :id=getdefinitionbyid

```ts
sandkit.api.projectiles.getDefinitionById(projectileId: string): ProjectileDefinition | undefined
```

Defined in: [sandkit/api/projectiles.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L19)

Return a projectile definition by string id.

#### Parameters

##### projectileId

`string`

Registered projectile id.

#### Returns

[`ProjectileDefinition`](#projectiledefinition) \| `undefined`

***

### createBlueprintFromId() :id=createblueprintfromid

```ts
sandkit.api.projectiles.createBlueprintFromId(projectileId: string): ProjectileBlueprint
```

Defined in: [sandkit/api/projectiles.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L26)

Build a spawn blueprint from a projectile string id.

#### Parameters

##### projectileId

`string`

Registered projectile id.

#### Returns

[`ProjectileBlueprint`](#projectileblueprint)

Blueprint passed to [spawnAtWorld](#spawnatworld).

***

### getAll() :id=getall

```ts
sandkit.api.projectiles.getAll(): Projectile[]
```

Defined in: [sandkit/api/projectiles.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L29)

Return all active projectiles.

#### Returns

[`Projectile`](#projectile)[]

***

### getById() :id=getbyid

```ts
sandkit.api.projectiles.getById(projectileId: number): Projectile | undefined
```

Defined in: [sandkit/api/projectiles.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L35)

Return a projectile by numeric id.

#### Parameters

##### projectileId

`number`

Runtime projectile id.

#### Returns

[`Projectile`](#projectile) \| `undefined`

***

### remove() :id=remove

```ts
sandkit.api.projectiles.remove(projectile: Projectile): void
```

Defined in: [sandkit/api/projectiles.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L41)

Remove a projectile from the world.

#### Parameters

##### projectile

[`Projectile`](#projectile)

Projectile instance to remove.

#### Returns

`void`

***

### spawnAtWorld() :id=spawnatworld

```ts
sandkit.api.projectiles.spawnAtWorld(worldX: number, worldY: number, angle: number, blueprint: ProjectileBlueprint): Projectile
```

Defined in: [sandkit/api/projectiles.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/projectiles.d.ts#L51)

Spawn a projectile at world position with angle and blueprint.

#### Parameters

##### worldX

`number`

Spawn x position in world pixels.

##### worldY

`number`

Spawn y position in world pixels.

##### angle

`number`

Launch angle in radians.

##### blueprint

[`ProjectileBlueprint`](#projectileblueprint)

Blueprint from [createBlueprintFromId](#createblueprintfromid).

#### Returns

[`Projectile`](#projectile)

The spawned projectile instance.

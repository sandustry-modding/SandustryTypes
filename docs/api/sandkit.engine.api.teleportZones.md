# sandkit.engine.api.teleportZones

**`Internal`**

`sandkit.engine.api.teleportZones` — player teleport zone management.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### add() :id=add

```ts
sandkit.engine.api.teleportZones.add(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L15)

Add a teleport zone to the world.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getAll() :id=getall

```ts
sandkit.engine.api.teleportZones.getAll(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L20)

Return all teleport zones.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getAtCell() :id=getatcell

```ts
sandkit.engine.api.teleportZones.getAtCell(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L25)

Return the teleport zone at one grid cell.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getById() :id=getbyid

```ts
sandkit.engine.api.teleportZones.getById(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L30)

Return one teleport zone by id.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### remove() :id=remove

```ts
sandkit.engine.api.teleportZones.remove(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L35)

Remove a teleport zone.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### spawnDefaultParticles() :id=spawndefaultparticles

```ts
sandkit.engine.api.teleportZones.spawnDefaultParticles(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L40)

Spawn default particles at a teleport zone.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### teleportPlayerTo() :id=teleportplayerto

```ts
sandkit.engine.api.teleportZones.teleportPlayerTo(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/teleportZones.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/teleportZones.d.ts#L45)

Teleport the player to a zone or position.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

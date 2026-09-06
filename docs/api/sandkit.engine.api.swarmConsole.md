# sandkit.engine.api.swarmConsole

**`Internal`**

`sandkit.engine.api.swarmConsole` — swarm convergence console state.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### decrementConvergenceBuffer() :id=decrementconvergencebuffer

```ts
sandkit.engine.api.swarmConsole.decrementConvergenceBuffer(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L15)

Decrease the convergence buffer by one step.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getCrystalMined() :id=getcrystalmined

```ts
sandkit.engine.api.swarmConsole.getCrystalMined(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L20)

Return total crystal mined for swarm consoles.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getDiskRadiusCells() :id=getdiskradiuscells

```ts
sandkit.engine.api.swarmConsole.getDiskRadiusCells(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L25)

Return the disk radius in cells for a console.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getEntityType() :id=getentitytype

```ts
sandkit.engine.api.swarmConsole.getEntityType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L30)

Return the entity type used by swarm consoles.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getNearestConvergence() :id=getnearestconvergence

```ts
sandkit.engine.api.swarmConsole.getNearestConvergence(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L35)

Return the nearest convergence point.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getPendingConvergence() :id=getpendingconvergence

```ts
sandkit.engine.api.swarmConsole.getPendingConvergence(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L40)

Return the pending convergence target.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getPlacedConsoles() :id=getplacedconsoles

```ts
sandkit.engine.api.swarmConsole.getPlacedConsoles(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L45)

Return all placed swarm console structures.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getRadiusPx() :id=getradiuspx

```ts
sandkit.engine.api.swarmConsole.getRadiusPx(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L50)

Return the console effect radius in pixels.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### isSpawnJammed() :id=isspawnjammed

```ts
sandkit.engine.api.swarmConsole.isSpawnJammed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L55)

Return whether swarm spawn is currently jammed.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### registerEntityType() :id=registerentitytype

```ts
sandkit.engine.api.swarmConsole.registerEntityType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L60)

Register the entity type for swarm consoles.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### resetAllConvergenceBuffers() :id=resetallconvergencebuffers

```ts
sandkit.engine.api.swarmConsole.resetAllConvergenceBuffers(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L65)

Reset convergence buffers on all consoles.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### setSpawnJammed() :id=setspawnjammed

```ts
sandkit.engine.api.swarmConsole.setSpawnJammed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/swarmConsole.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L70)

Set whether swarm spawn is jammed.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

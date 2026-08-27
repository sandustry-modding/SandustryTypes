# sandkit.api.lights.temporary (worker)

Short-lived visual effect lights.

## See

https://sandustry.com/sandkit.html Official Sandkit API — Worker entry `api.lights.temporary`

## Interfaces <!-- {docsify-ignore} -->

### TemporaryLightHandle :id=temporarylighthandle

<p class="smt-member-path"><code>sandkit.api.lights.temporary.TemporaryLightHandle (worker)</code></p>

Defined in: worker/api/lights.d.ts:19

Handle returned by [createAtWorld](#createatworld).

#### Properties

##### lightId

```ts
lightId: number | null
```

Defined in: worker/api/lights.d.ts:21

Runtime light id, or null when the pool is full.

##### ~~index?~~

```ts
optional index?: number | null
```

Defined in: worker/api/lights.d.ts:26

###### Deprecated

Use [lightId](#lightid) instead.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `light.lightId`

## Type Aliases <!-- {docsify-ignore} -->

### TemporaryLightOptions :id=temporarylightoptions

<p class="smt-member-path"><code>sandkit.api.lights.temporary.TemporaryLightOptions (worker)</code></p>

```ts
TemporaryLightOptions = TemporaryLightOptions
```

Defined in: worker/api/lights.d.ts:16

Options for [createAtWorld](#createatworld).

## Functions <!-- {docsify-ignore} -->

### createAtWorld() :id=createatworld

<p class="smt-member-path"><code>sandkit.api.lights.temporary.createAtWorld() (worker)</code></p>

```ts
createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): TemporaryLightHandle
```

Defined in: worker/api/lights.d.ts:37

Create a temporary light at world coordinates.

#### Parameters

##### worldX

`number`

World x position in pixels.

##### worldY

`number`

World y position in pixels.

##### options?

[`TemporaryLightOptions`](api/sandkit.api.effects.md#temporarylightoptions)

Brightness, duration, colour, and dedup settings.

#### Returns

[`TemporaryLightHandle`](#temporarylighthandle)

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Worker entry `api.lights.temporary.createAtWorld`

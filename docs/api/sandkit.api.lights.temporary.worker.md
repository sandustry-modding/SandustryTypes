# sandkit.api.lights.temporary (worker)

Short-lived visual effect lights.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Interfaces <!-- {docsify-ignore} -->

### TemporaryLightHandle :id=temporarylighthandle

<p class="smt-member-path"><code>sandkit.api.lights.temporary.TemporaryLightHandle (worker)</code></p>

Defined in: [worker/api/lights.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L19)

Handle returned by [createAtWorld](#createatworld).

#### Properties

##### lightId

```ts
lightId: number | null
```

Defined in: [worker/api/lights.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L21)

Runtime light id, or null when the pool is full.

##### ~~index?~~

```ts
optional index?: number | null
```

Defined in: [worker/api/lights.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L27)

###### Deprecated

Use [lightId](#lightid) instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Type Aliases <!-- {docsify-ignore} -->

### TemporaryLightOptions :id=temporarylightoptions

<p class="smt-member-path"><code>sandkit.api.lights.temporary.TemporaryLightOptions (worker)</code></p>

```ts
TemporaryLightOptions = TemporaryLightOptions
```

Defined in: [worker/api/lights.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L16)

Options for [createAtWorld](#createatworld).

## Functions <!-- {docsify-ignore} -->

### createAtWorld() :id=createatworld

<p class="smt-member-path"><code>sandkit.api.lights.temporary.createAtWorld() (worker)</code></p>

```ts
createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): TemporaryLightHandle
```

Defined in: [worker/api/lights.d.ts:47](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L47)

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

#### Example

**Worker entry**

```ts
const light = api.lights.temporary.createAtWorld(worldX, worldY, {
  durationTicks: 15,
});
const lightId = light.lightId;
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

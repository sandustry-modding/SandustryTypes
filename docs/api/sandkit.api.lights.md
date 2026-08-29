# sandkit.api.lights

`sandkit.api.lights` — temporary lights and persistent world lights.
Main thread only.

## Namespaces <!-- {docsify-ignore} -->

- [temporary](api/sandkit.api.lights.temporary.md)
- [persistent](api/sandkit.api.lights.persistent.md)

## Interfaces <!-- {docsify-ignore} -->

### TemporaryLightHandle :id=temporarylighthandle

<p class="smt-member-path"><code>sandkit.api.lights.TemporaryLightHandle</code></p>

Defined in: [sandkit/api/lights.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L75)

Handle returned from [temporary.createAtWorld](api/sandkit.api.lights.temporary.md#createatworld).

#### Properties

##### lightId

```ts
lightId: number | null
```

Defined in: [sandkit/api/lights.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L77)

Assigned temporary light id, or null when creation failed.

##### ~~index~~

```ts
index: number | null
```

Defined in: [sandkit/api/lights.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L82)

###### Deprecated

Use [lightId](#lightid) instead.

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias on `api.lights.temporary.createAtWorld` return value

***

### PersistentLightOptions :id=persistentlightoptions

<p class="smt-member-path"><code>sandkit.api.lights.PersistentLightOptions</code></p>

Defined in: [sandkit/api/lights.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L89)

Options for persistent world lights.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### brightness?

```ts
optional brightness?: number
```

Defined in: [sandkit/api/lights.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L91)

Light brightness multiplier.

##### size?

```ts
optional size?: number
```

Defined in: [sandkit/api/lights.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L93)

Light radius in pixels.

##### color?

```ts
optional color?: [number, number, number, number]
```

Defined in: [sandkit/api/lights.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L95)

RGBA color components.

## Type Aliases <!-- {docsify-ignore} -->

### TemporaryLightOptions :id=temporarylightoptions

<p class="smt-member-path"><code>sandkit.api.lights.TemporaryLightOptions</code></p>

```ts
TemporaryLightOptions = TemporaryLightOptions
```

Defined in: [sandkit/api/lights.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L86)

Options for temporary lights.

***

### PersistentLightHandle :id=persistentlighthandle

<p class="smt-member-path"><code>sandkit.api.lights.PersistentLightHandle</code></p>

```ts
PersistentLightHandle = unknown
```

Defined in: [sandkit/api/lights.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L100)

Handle returned from [persistent.createAtWorld](api/sandkit.api.lights.persistent.md#createatworld).

## References <!-- {docsify-ignore} -->

### vfx :id=vfx

<p class="smt-member-path"><code>sandkit.api.lights.vfx</code></p>

Renames and re-exports [temporary](api/sandkit.api.lights.temporary.md)

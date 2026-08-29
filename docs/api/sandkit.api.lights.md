# sandkit.api.lights

`sandkit.api.lights` — temporary lights and persistent world lights.
Main thread only.

## Namespaces <!-- {docsify-ignore} -->

- [temporary](api/sandkit.api.lights.temporary.md)
- [persistent](api/sandkit.api.lights.persistent.md)

## Interfaces <!-- {docsify-ignore} -->

### TemporaryLightHandle :id=temporarylighthandle

<p class="smt-member-path"><code>sandkit.api.lights.TemporaryLightHandle</code></p>

Defined in: [sandkit/api/lights.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L121)

Handle returned from [temporary.createAtWorld](api/sandkit.api.lights.temporary.md#createatworld).

#### Properties

##### lightId

```ts
lightId: number | null
```

Defined in: [sandkit/api/lights.d.ts:123](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L123)

Assigned temporary light id, or null when creation failed.

##### ~~index~~

```ts
index: number | null
```

Defined in: [sandkit/api/lights.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L129)

###### Deprecated

Use [lightId](#lightid) instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### PersistentLightOptions :id=persistentlightoptions

<p class="smt-member-path"><code>sandkit.api.lights.PersistentLightOptions</code></p>

Defined in: [sandkit/api/lights.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L136)

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

Defined in: [sandkit/api/lights.d.ts:138](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L138)

Light brightness multiplier.

##### size?

```ts
optional size?: number
```

Defined in: [sandkit/api/lights.d.ts:140](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L140)

Light radius in pixels.

##### color?

```ts
optional color?: [number, number, number, number]
```

Defined in: [sandkit/api/lights.d.ts:142](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L142)

RGBA color components.

## Type Aliases <!-- {docsify-ignore} -->

### TemporaryLightOptions :id=temporarylightoptions

<p class="smt-member-path"><code>sandkit.api.lights.TemporaryLightOptions</code></p>

```ts
TemporaryLightOptions = TemporaryLightOptions
```

Defined in: [sandkit/api/lights.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L133)

Options for temporary lights.

***

### PersistentLightHandle :id=persistentlighthandle

<p class="smt-member-path"><code>sandkit.api.lights.PersistentLightHandle</code></p>

```ts
PersistentLightHandle = unknown
```

Defined in: [sandkit/api/lights.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L147)

Handle returned from [persistent.createAtWorld](api/sandkit.api.lights.persistent.md#createatworld).

## References <!-- {docsify-ignore} -->

### vfx :id=vfx

<p class="smt-member-path"><code>sandkit.api.lights.vfx</code></p>

Renames and re-exports [temporary](api/sandkit.api.lights.temporary.md)

# sandkit.api.lights

`sandkit.api.lights` — temporary lights and persistent world lights.
Main thread only.

## Namespaces <!-- {docsify-ignore} -->

- [temporary](api/sandkit.api.lights.temporary.md)
- [persistent](api/sandkit.api.lights.persistent.md)

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.lights.TemporaryLightHandle :id=temporarylighthandle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L129" target="_blank" rel="noopener">lights.d.ts:129</a></p>

| Property | Type | Description |
| --- | --- | --- |
| lightId | number \| null | Assigned temporary light id, or null when creation failed. |
| ~~index~~ | number \| null |  |

<div class="smt-member-anchors">

##### lightId <!-- {docsify-ignore} -->

##### ~~index~~ <!-- {docsify-ignore} -->

</div>

Handle returned from [temporary.createAtWorld](api/sandkit.api.lights.temporary.md?id=createatworld).

</div>

<div class="smt-member-card">

### sandkit.api.lights.PersistentLightOptions :id=persistentlightoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L144" target="_blank" rel="noopener">lights.d.ts:144</a></p>

| Property | Type | Description |
| --- | --- | --- |
| brightness? | number | Light brightness multiplier. |
| size? | number | Light radius in pixels. |
| color? | [number, number, number, number] | RGBA color components. |

<div class="smt-member-anchors">

##### brightness? <!-- {docsify-ignore} -->

##### size? <!-- {docsify-ignore} -->

##### color? <!-- {docsify-ignore} -->

</div>

Options for persistent world lights.

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.lights.TemporaryLightOptions :id=temporarylightoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L141" target="_blank" rel="noopener">lights.d.ts:141</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.lights.TemporaryLightOptions = TemporaryLightOptions">

```ts
TemporaryLightOptions = TemporaryLightOptions
```

</div>

Options for temporary lights.

</div>

<div class="smt-member-card">

### sandkit.api.lights.PersistentLightHandle :id=persistentlighthandle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L155" target="_blank" rel="noopener">lights.d.ts:155</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.lights.PersistentLightHandle = unknown">

```ts
PersistentLightHandle = unknown
```

</div>

Handle returned from [persistent.createAtWorld](api/sandkit.api.lights.persistent.md?id=createatworld).

</div>

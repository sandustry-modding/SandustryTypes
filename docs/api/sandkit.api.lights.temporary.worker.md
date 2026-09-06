# sandkit.api.lights.temporary (worker)

Short-lived visual effect lights.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.lights.temporary.TemporaryLightHandle :id=temporarylighthandle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L19" target="_blank" rel="noopener">lights.d.ts:19</a></p>

| Property | Type | Description |
| --- | --- | --- |
| lightId | number \| null | Runtime light id, or null when the pool is full. |
| ~~index?~~ | number \| null |  |

<div class="smt-member-anchors">

##### lightId <!-- {docsify-ignore} -->

##### ~~index?~~ <!-- {docsify-ignore} -->

</div>

Handle returned by [createAtWorld](?id=createatworld).

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.lights.temporary.TemporaryLightOptions :id=temporarylightoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L16" target="_blank" rel="noopener">lights.d.ts:16</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.lights.temporary.TemporaryLightOptions = TemporaryLightOptions">

```ts
TemporaryLightOptions = TemporaryLightOptions
```

</div>

Options for [createAtWorld](?id=createatworld).

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.lights.temporary.createAtWorld :id=createatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/lights.d.ts#L47" target="_blank" rel="noopener">lights.d.ts:47</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.lights.temporary.createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): TemporaryLightHandle">

```ts
createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): TemporaryLightHandle
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World x position in pixels. |
| worldY | `number` | World y position in pixels. |
| options? | [`TemporaryLightOptions`](api/sandkit.api.effects.md?id=temporarylightoptions) | Brightness, duration, colour, and dedup settings. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Create a temporary light at world coordinates.

[`TemporaryLightHandle`](?id=temporarylighthandle)

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

</div>

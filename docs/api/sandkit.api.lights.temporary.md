# sandkit.api.lights.temporary

Short-lived visual effect lights.

## Functions <!-- {docsify-ignore} -->

### createAtWorld() :id=createatworld

<p class="smt-member-path"><code>sandkit.api.lights.temporary.createAtWorld()</code></p>

```ts
createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): TemporaryLightHandle
```

Defined in: [sandkit/api/lights.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L18)

Create a temporary light at world coordinates.

#### Parameters

##### worldX

`number`

World X coordinate in pixels.

##### worldY

`number`

World Y coordinate in pixels.

##### options?

[`TemporaryLightOptions`](api/sandkit.api.effects.md#temporarylightoptions)

Brightness, duration, color, and dedup options.

#### Returns

[`TemporaryLightHandle`](api/sandkit.api.lights.md#temporarylighthandle)

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.lights.temporary.createAtWorld`

***

### removeById() :id=removebyid

<p class="smt-member-path"><code>sandkit.api.lights.temporary.removeById()</code></p>

```ts
removeById(lightId: number): void
```

Defined in: [sandkit/api/lights.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L26)

Remove a temporary light by its id.

#### Parameters

##### lightId

`number`

Light id returned from [createAtWorld](#createatworld).

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.lights.temporary.removeById`

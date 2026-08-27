# sandkit.api.lights.persistent

Lights that persist in the world save.

## Functions <!-- {docsify-ignore} -->

### createAtWorld() :id=createatworld

<p class="smt-member-path"><code>sandkit.api.lights.persistent.createAtWorld()</code></p>

```ts
createAtWorld(worldX: number, worldY: number, options?: PersistentLightOptions): unknown
```

Defined in: [sandkit/api/lights.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/lights.d.ts#L45)

Create a persistent light at world coordinates.

#### Parameters

##### worldX

`number`

World X coordinate in pixels.

##### worldY

`number`

World Y coordinate in pixels.

##### options?

[`PersistentLightOptions`](api/sandkit.api.lights.md#persistentlightoptions)

Brightness, size, color, and persistence options.

#### Returns

`unknown`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.lights.persistent.createAtWorld`

***

### removeAtWorld() :id=removeatworld

<p class="smt-member-path"><code>sandkit.api.lights.persistent.removeAtWorld()</code></p>

```ts
removeAtWorld(worldX: number, worldY: number): void
```

Defined in: [sandkit/api/lights.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/lights.d.ts#L54)

Remove the persistent light at world coordinates.

#### Parameters

##### worldX

`number`

World X coordinate in pixels.

##### worldY

`number`

World Y coordinate in pixels.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.lights.persistent.removeAtWorld`

***

### fadeAtWorld() :id=fadeatworld

<p class="smt-member-path"><code>sandkit.api.lights.persistent.fadeAtWorld()</code></p>

```ts
fadeAtWorld(worldX: number, worldY: number, durationMs?: number): void
```

Defined in: [sandkit/api/lights.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/lights.d.ts#L64)

Fade out the persistent light at world coordinates over durationMs.

#### Parameters

##### worldX

`number`

World X coordinate in pixels.

##### worldY

`number`

World Y coordinate in pixels.

##### durationMs?

`number`

Fade duration in milliseconds.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.lights.persistent.fadeAtWorld`

***

### markDirty() :id=markdirty

<p class="smt-member-path"><code>sandkit.api.lights.persistent.markDirty()</code></p>

```ts
markDirty(): void
```

Defined in: [sandkit/api/lights.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/lights.d.ts#L71)

Mark persistent lights dirty so they are saved on the next flush.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.lights.persistent.markDirty`

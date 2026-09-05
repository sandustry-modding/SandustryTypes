# sandkit.api.lights.persistent

Lights that persist in the world save.

## Functions <!-- {docsify-ignore} -->

### createAtWorld() :id=createatworld

<p class="smt-member-path"><code>sandkit.api.lights.persistent.createAtWorld()</code></p>

```ts
createAtWorld(worldX: number, worldY: number, options?: PersistentLightOptions): unknown
```

Defined in: [sandkit/api/lights.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L93)

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

#### Example

```ts
const light = api.lights.persistent.createAtWorld(
  worldX,
  worldY,
  { brightness: 1, size: 80 },
);
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### removeAtWorld() :id=removeatworld

<p class="smt-member-path"><code>sandkit.api.lights.persistent.removeAtWorld()</code></p>

```ts
removeAtWorld(worldX: number, worldY: number): void
```

Defined in: [sandkit/api/lights.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L107)

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

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### fadeAtWorld() :id=fadeatworld

<p class="smt-member-path"><code>sandkit.api.lights.persistent.fadeAtWorld()</code></p>

```ts
fadeAtWorld(worldX: number, worldY: number, durationMs?: number): void
```

Defined in: [sandkit/api/lights.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L118)

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

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### markDirty() :id=markdirty

<p class="smt-member-path"><code>sandkit.api.lights.persistent.markDirty()</code></p>

```ts
markDirty(): void
```

Defined in: [sandkit/api/lights.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L125)

Mark persistent lights dirty so they are saved on the next flush.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

# sandkit.api.lights.temporary

Short-lived visual effect lights.

## Functions <!-- {docsify-ignore} -->

### createAtWorld() :id=createatworld

<p class="smt-member-path"><code>sandkit.api.lights.temporary.createAtWorld()</code></p>

```ts
createAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): TemporaryLightHandle
```

Defined in: [sandkit/api/lights.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L43)

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

#### Examples

**Main entry**

```ts
const light = api.lights.temporary.createAtWorld(worldX, worldY, {
  brightness: 1,
  durationMs: 250,
  size: 80,
});
const lightId = light.lightId;
```

**options.durationTicks**

```ts
api.lights.temporary.createAtWorld(worldX, worldY, {
  durationTicks: 15,
});
```

**options.durationMs**

```ts
api.lights.temporary.createAtWorld(worldX, worldY, {
  durationMs: 250,
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### removeById() :id=removebyid

<p class="smt-member-path"><code>sandkit.api.lights.temporary.removeById()</code></p>

```ts
removeById(lightId: number): void
```

Defined in: [sandkit/api/lights.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/lights.d.ts#L59)

Remove a temporary light by its id.

#### Parameters

##### lightId

`number`

Light id returned from [createAtWorld](#createatworld).

#### Returns

`void`

#### Example

```ts
if (light.lightId !== null) {
  api.lights.temporary.removeById(light.lightId);
}
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

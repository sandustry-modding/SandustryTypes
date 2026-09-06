# sandkit.api.camera

`sandkit.api.camera` — camera focus and follow control.
Main thread only.

## Functions <!-- {docsify-ignore} -->

### snapToPlayer() :id=snaptoplayer

```ts
sandkit.api.camera.snapToPlayer(): void
```

Defined in: [sandkit/api/camera.d.ts:7](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/camera.d.ts#L7)

Snap the camera to the player position.

#### Returns

`void`

***

### setFocusAtWorld() :id=setfocusatworld

```ts
sandkit.api.camera.setFocusAtWorld(worldX: number, worldY: number): boolean
```

Defined in: [sandkit/api/camera.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/camera.d.ts#L15)

Move camera focus to world coordinates.

#### Parameters

##### worldX

`number`

World x position in pixels.

##### worldY

`number`

World y position in pixels.

#### Returns

`boolean`

True when focus was applied.

***

### releaseFocus() :id=releasefocus

```ts
sandkit.api.camera.releaseFocus(options?: object): boolean
```

Defined in: [sandkit/api/camera.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/camera.d.ts#L27)

Release scripted focus and return control to the player.

#### Parameters

##### options?

Optional transition duration in milliseconds.

###### durationMs?

`number`

#### Returns

`boolean`

True when focus was released.

#### Example

```ts
const released = api.camera.releaseFocus({ durationMs: 250 });
```

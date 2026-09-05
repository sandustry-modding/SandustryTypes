# sandkit.api.sound

## Interfaces <!-- {docsify-ignore} -->

### SoundHandle :id=soundhandle

<p class="smt-member-path"><code>sandkit.api.sound.SoundHandle</code></p>

Defined in: [sandkit/api/sound.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L81)

Handle returned from a play call.

#### Methods

##### stop()

```ts
stop(): void
```

Defined in: [sandkit/api/sound.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L83)

Stop this sound instance.

###### Returns

`void`

---

### SoundLayer :id=soundlayer

<p class="smt-member-path"><code>sandkit.api.sound.SoundLayer</code></p>

Defined in: [sandkit/api/sound.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L87)

One layer in a layered sound.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### soundId

```ts
soundId: string;
```

Defined in: [sandkit/api/sound.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L89)

Sound id for this layer.

##### volume?

```ts
optional volume?: number
```

Defined in: [sandkit/api/sound.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L91)

Layer volume multiplier.

##### delay?

```ts
optional delay?: number
```

Defined in: [sandkit/api/sound.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L93)

Delay in milliseconds before this layer plays.

##### playbackRate?

```ts
optional playbackRate?: number
```

Defined in: [sandkit/api/sound.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L95)

Playback rate for this layer.

---

### SoundOptions :id=soundoptions

<p class="smt-member-path"><code>sandkit.api.sound.SoundOptions</code></p>

Defined in: [sandkit/api/sound.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L100)

Options passed to sound play helpers.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### volume?

```ts
optional volume?: number
```

Defined in: [sandkit/api/sound.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L102)

Volume multiplier (0–1 typical).

##### playbackRate?

```ts
optional playbackRate?: number
```

Defined in: [sandkit/api/sound.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L104)

Playback rate multiplier.

##### position?

```ts
optional position?: object
```

Defined in: [sandkit/api/sound.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L106)

World position for distance attenuation.

###### x

```ts
x: number;
```

###### y

```ts
y: number;
```

##### loop?

```ts
optional loop?: boolean
```

Defined in: [sandkit/api/sound.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L108)

When true, loop until stopped.

##### rateLimitKey?

```ts
optional rateLimitKey?: string
```

Defined in: [sandkit/api/sound.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L110)

Key used with rateLimitMs to dedupe rapid replays.

##### rateLimitMs?

```ts
optional rateLimitMs?: number
```

Defined in: [sandkit/api/sound.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L112)

Minimum ms between plays with the same rateLimitKey.

---

### SoundLayersOptions :id=soundlayersoptions

<p class="smt-member-path"><code>sandkit.api.sound.SoundLayersOptions</code></p>

Defined in: [sandkit/api/sound.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L117)

Shared options for [playLayers](#playlayers).

#### Properties

##### position?

```ts
optional position?: object
```

Defined in: [sandkit/api/sound.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L119)

World position applied to all layers.

###### x

```ts
x: number;
```

###### y

```ts
y: number;
```

##### volume?

```ts
optional volume?: number
```

Defined in: [sandkit/api/sound.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L121)

Volume multiplier applied to all layers.

##### rateLimitKey?

```ts
optional rateLimitKey?: string
```

Defined in: [sandkit/api/sound.d.ts:123](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L123)

Key used with rateLimitMs to dedupe rapid replays.

##### rateLimitMs?

```ts
optional rateLimitMs?: number
```

Defined in: [sandkit/api/sound.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L125)

Minimum ms between plays with the same rateLimitKey.

## Functions <!-- {docsify-ignore} -->

### play() :id=play

<p class="smt-member-path"><code>sandkit.api.sound.play()</code></p>

```ts
play(soundId: string, options?: SoundOptions): SoundHandle
```

Defined in: [sandkit/api/sound.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L17)

Play a sound by id with optional options.

#### Parameters

##### soundId

`string`

Registered sound identifier.

##### options?

[`SoundOptions`](#soundoptions)

Volume, position, playback rate, and rate-limit options.

#### Returns

[`SoundHandle`](#soundhandle)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### playActive() :id=playactive

<p class="smt-member-path"><code>sandkit.api.sound.playActive()</code></p>

```ts
playActive(soundId: string, options?: SoundOptions): SoundHandle
```

Defined in: [sandkit/api/sound.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L27)

Play a sound on the active sound channel.

#### Parameters

##### soundId

`string`

Registered sound identifier.

##### options?

[`SoundOptions`](#soundoptions)

Volume, position, playback rate, and rate-limit options.

#### Returns

[`SoundHandle`](#soundhandle)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### playLayers() :id=playlayers

<p class="smt-member-path"><code>sandkit.api.sound.playLayers()</code></p>

```ts
playLayers(layers: SoundLayer[], options?: SoundLayersOptions): SoundHandle[]
```

Defined in: [sandkit/api/sound.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L37)

Play multiple sound layers with shared options.

#### Parameters

##### layers

[`SoundLayer`](#soundlayer)[]

Layer definitions (sound id, volume, delay, and per-layer options).

##### options?

[`SoundLayersOptions`](#soundlayersoptions)

Shared position, volume, and rate-limit options for all layers.

#### Returns

[`SoundHandle`](#soundhandle)[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### calculateDistanceOptionsAtWorld() :id=calculatedistanceoptionsatworld

<p class="smt-member-path"><code>sandkit.api.sound.calculateDistanceOptionsAtWorld()</code></p>

```ts
calculateDistanceOptionsAtWorld(worldX: number, worldY: number, baseVolume?: number): SoundOptions
```

Defined in: [sandkit/api/sound.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L48)

Build distance-based volume options for a world position.

#### Parameters

##### worldX

`number`

World X coordinate in pixels.

##### worldY

`number`

World Y coordinate in pixels.

##### baseVolume?

`number`

Base volume before distance attenuation.

#### Returns

[`SoundOptions`](#soundoptions)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### stopBySoundId() :id=stopbysoundid

<p class="smt-member-path"><code>sandkit.api.sound.stopBySoundId()</code></p>

```ts
stopBySoundId(soundId: string): void
```

Defined in: [sandkit/api/sound.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L57)

Stop a sound by id.

#### Parameters

##### soundId

`string`

Registered sound identifier to stop.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### ~~stopById()~~

```ts
stopById(soundId: string): void
```

Defined in: [sandkit/api/sound.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L64)

#### Parameters

##### soundId

`string`

#### Returns

`void`

#### Deprecated

Use [stopBySoundId](#stopbysoundid) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### stopActive() :id=stopactive

<p class="smt-member-path"><code>sandkit.api.sound.stopActive()</code></p>

```ts
stopActive(): void
```

Defined in: [sandkit/api/sound.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L71)

Stop the active sound channel.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### stopAll() :id=stopall

<p class="smt-member-path"><code>sandkit.api.sound.stopAll()</code></p>

```ts
stopAll(): void
```

Defined in: [sandkit/api/sound.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sound.d.ts#L78)

Stop all playing sounds.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

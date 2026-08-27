# sandkit.api.sound

## Interfaces <!-- {docsify-ignore} -->

### SoundHandle :id=soundhandle

<p class="smt-member-path"><code>sandkit.api.sound.SoundHandle</code></p>

Defined in: [sandkit/api/sound.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L75)

Handle returned from a play call.

#### Methods

##### stop()

```ts
stop(): void
```

Defined in: [sandkit/api/sound.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L77)

Stop this sound instance.

###### Returns

`void`

***

### SoundLayer :id=soundlayer

<p class="smt-member-path"><code>sandkit.api.sound.SoundLayer</code></p>

Defined in: [sandkit/api/sound.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L81)

One layer in a layered sound.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### soundId

```ts
soundId: string
```

Defined in: [sandkit/api/sound.d.ts:83](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L83)

Sound id for this layer.

##### volume?

```ts
optional volume?: number
```

Defined in: [sandkit/api/sound.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L85)

Layer volume multiplier.

##### delay?

```ts
optional delay?: number
```

Defined in: [sandkit/api/sound.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L87)

Delay in milliseconds before this layer plays.

##### playbackRate?

```ts
optional playbackRate?: number
```

Defined in: [sandkit/api/sound.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L89)

Playback rate for this layer.

***

### SoundOptions :id=soundoptions

<p class="smt-member-path"><code>sandkit.api.sound.SoundOptions</code></p>

Defined in: [sandkit/api/sound.d.ts:94](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L94)

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

Defined in: [sandkit/api/sound.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L96)

Volume multiplier (0–1 typical).

##### playbackRate?

```ts
optional playbackRate?: number
```

Defined in: [sandkit/api/sound.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L98)

Playback rate multiplier.

##### position?

```ts
optional position?: object
```

Defined in: [sandkit/api/sound.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L100)

World position for distance attenuation.

###### x

```ts
x: number
```

###### y

```ts
y: number
```

##### loop?

```ts
optional loop?: boolean
```

Defined in: [sandkit/api/sound.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L102)

When true, loop until stopped.

##### rateLimitKey?

```ts
optional rateLimitKey?: string
```

Defined in: [sandkit/api/sound.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L104)

Key used with rateLimitMs to dedupe rapid replays.

##### rateLimitMs?

```ts
optional rateLimitMs?: number
```

Defined in: [sandkit/api/sound.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L106)

Minimum ms between plays with the same rateLimitKey.

***

### SoundLayersOptions :id=soundlayersoptions

<p class="smt-member-path"><code>sandkit.api.sound.SoundLayersOptions</code></p>

Defined in: [sandkit/api/sound.d.ts:111](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L111)

Shared options for [playLayers](#playlayers).

#### Properties

##### position?

```ts
optional position?: object
```

Defined in: [sandkit/api/sound.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L113)

World position applied to all layers.

###### x

```ts
x: number
```

###### y

```ts
y: number
```

##### volume?

```ts
optional volume?: number
```

Defined in: [sandkit/api/sound.d.ts:115](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L115)

Volume multiplier applied to all layers.

##### rateLimitKey?

```ts
optional rateLimitKey?: string
```

Defined in: [sandkit/api/sound.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L117)

Key used with rateLimitMs to dedupe rapid replays.

##### rateLimitMs?

```ts
optional rateLimitMs?: number
```

Defined in: [sandkit/api/sound.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L119)

Minimum ms between plays with the same rateLimitKey.

## Functions <!-- {docsify-ignore} -->

### play() :id=play

<p class="smt-member-path"><code>sandkit.api.sound.play()</code></p>

```ts
play(soundId: string, options?: SoundOptions): SoundHandle
```

Defined in: [sandkit/api/sound.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L16)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.sound.play`

***

### playActive() :id=playactive

<p class="smt-member-path"><code>sandkit.api.sound.playActive()</code></p>

```ts
playActive(soundId: string, options?: SoundOptions): SoundHandle
```

Defined in: [sandkit/api/sound.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L25)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.sound.playActive`

***

### playLayers() :id=playlayers

<p class="smt-member-path"><code>sandkit.api.sound.playLayers()</code></p>

```ts
playLayers(layers: SoundLayer[], options?: SoundLayersOptions): SoundHandle[]
```

Defined in: [sandkit/api/sound.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L34)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.sound.playLayers`

***

### calculateDistanceOptionsAtWorld() :id=calculatedistanceoptionsatworld

<p class="smt-member-path"><code>sandkit.api.sound.calculateDistanceOptionsAtWorld()</code></p>

```ts
calculateDistanceOptionsAtWorld(worldX: number, worldY: number, baseVolume?: number): SoundOptions
```

Defined in: [sandkit/api/sound.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L44)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.sound.calculateDistanceOptionsAtWorld`

***

### stopBySoundId() :id=stopbysoundid

<p class="smt-member-path"><code>sandkit.api.sound.stopBySoundId()</code></p>

```ts
stopBySoundId(soundId: string): void
```

Defined in: [sandkit/api/sound.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L52)

Stop a sound by id.

#### Parameters

##### soundId

`string`

Registered sound identifier to stop.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.sound.stopBySoundId`

***

### ~~stopById()~~

```ts
stopById(soundId: string): void
```

Defined in: [sandkit/api/sound.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L58)

#### Parameters

##### soundId

`string`

#### Returns

`void`

#### Deprecated

Use [stopBySoundId](#stopbysoundid) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.sound.stopBySoundId`

***

### stopActive() :id=stopactive

<p class="smt-member-path"><code>sandkit.api.sound.stopActive()</code></p>

```ts
stopActive(): void
```

Defined in: [sandkit/api/sound.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L65)

Stop the active sound channel.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.sound.stopActive`

***

### stopAll() :id=stopall

<p class="smt-member-path"><code>sandkit.api.sound.stopAll()</code></p>

```ts
stopAll(): void
```

Defined in: [sandkit/api/sound.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/sound.d.ts#L72)

Stop all playing sounds.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.sound.stopAll`

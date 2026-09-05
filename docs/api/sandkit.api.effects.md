# sandkit.api.effects

`sandkit.api.effects` — visual effects, particles, and lasers at world positions.
Main thread only. Temporary lights live under [lights.temporary](api/sandkit.api.lights.temporary.md).

## Interfaces <!-- {docsify-ignore} -->

### LaserEffectOptions :id=lasereffectoptions

<p class="smt-member-path"><code>sandkit.api.effects.LaserEffectOptions</code></p>

Defined in: [sandkit/api/effects.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L118)

Options for laser beam effects.

#### Properties

##### width?

```ts
optional width?: number
```

Defined in: [sandkit/api/effects.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L120)

Beam width in pixels.

##### brightness?

```ts
optional brightness?: number
```

Defined in: [sandkit/api/effects.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L122)

Beam brightness multiplier.

##### color?

```ts
optional color?: number
```

Defined in: [sandkit/api/effects.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L124)

Beam color as a packed integer.

##### glow?

```ts
optional glow?: boolean
```

Defined in: [sandkit/api/effects.d.ts:126](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L126)

When true, draws a glow around the beam.

---

### LaserEffectHandle :id=lasereffecthandle

<p class="smt-member-path"><code>sandkit.api.effects.LaserEffectHandle</code></p>

Defined in: [sandkit/api/effects.d.ts:130](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L130)

Handle returned by createLaserAtWorld.

#### Methods

##### destroy()

```ts
destroy(): void
```

Defined in: [sandkit/api/effects.d.ts:132](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L132)

Removes the laser from the scene.

###### Returns

`void`

---

### DistortionEffectOptions :id=distortioneffectoptions

<p class="smt-member-path"><code>sandkit.api.effects.DistortionEffectOptions</code></p>

Defined in: [sandkit/api/effects.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L136)

Options for distortion wave effects.

#### Properties

##### style?

```ts
optional style?: "implode" | "explode"
```

Defined in: [sandkit/api/effects.d.ts:138](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L138)

Distortion style: implode or explode.

##### duration?

```ts
optional duration?: number
```

Defined in: [sandkit/api/effects.d.ts:140](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L140)

Effect duration in seconds.

##### maxRadius?

```ts
optional maxRadius?: number
```

Defined in: [sandkit/api/effects.d.ts:142](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L142)

Maximum radius of the wave.

##### intensity?

```ts
optional intensity?: number
```

Defined in: [sandkit/api/effects.d.ts:144](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L144)

Visual intensity of the distortion.

##### color?

```ts
optional color?: [number, number, number, number]
```

Defined in: [sandkit/api/effects.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L146)

RGBA color components for the effect.

---

### EffectOptions :id=effectoptions

<p class="smt-member-path"><code>sandkit.api.effects.EffectOptions</code></p>

Defined in: [shared/api/effects.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L35)

Generic duration and radius options for world effects.

#### Properties

##### duration?

```ts
optional duration?: number
```

Defined in: [shared/api/effects.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L36)

##### maxRadius?

```ts
optional maxRadius?: number
```

Defined in: [shared/api/effects.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L37)

##### intensity?

```ts
optional intensity?: number
```

Defined in: [shared/api/effects.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L38)

---

### TemporaryLightOptions :id=temporarylightoptions

<p class="smt-member-path"><code>sandkit.api.effects.TemporaryLightOptions</code></p>

Defined in: [shared/api/effects.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L41)

Options for [createLightAtWorld](#createlightatworld).

#### Properties

##### brightness?

```ts
optional brightness?: number
```

Defined in: [shared/api/effects.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L42)

##### duration?

```ts
optional duration?: number
```

Defined in: [shared/api/effects.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L43)

##### durationMs?

```ts
optional durationMs?: number
```

Defined in: [shared/api/effects.d.ts:44](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L44)

##### size?

```ts
optional size?: number
```

Defined in: [shared/api/effects.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L45)

##### color?

```ts
optional color?: [number, number, number, number]
```

Defined in: [shared/api/effects.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L46)

##### decay

```ts
decay: number;
```

Defined in: [shared/api/effects.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L48)

Light decay rate after spawn.

##### unclamped?

```ts
optional unclamped?: boolean
```

Defined in: [shared/api/effects.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L49)

##### skipDedup?

```ts
optional skipDedup?: boolean
```

Defined in: [shared/api/effects.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L50)

##### useLightZones?

```ts
optional useLightZones?: boolean
```

Defined in: [shared/api/effects.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L51)

##### noopIfFull?

```ts
optional noopIfFull?: boolean
```

Defined in: [shared/api/effects.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L52)

##### priority?

```ts
optional priority?: number
```

Defined in: [shared/api/effects.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L53)

##### dedupKey

```ts
dedupKey: string;
```

Defined in: [shared/api/effects.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L55)

Dedupe key when the light pool is full or dedup is enabled.

---

### ParticleEffectOptions :id=particleeffectoptions

<p class="smt-member-path"><code>sandkit.api.effects.ParticleEffectOptions</code></p>

Defined in: [shared/api/effects.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L58)

Options for [createParticlesAtWorld](#createparticlesatworld).

#### Properties

##### count?

```ts
optional count?: number
```

Defined in: [shared/api/effects.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L59)

##### velocity?

```ts
optional velocity?: Vector2
```

Defined in: [shared/api/effects.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L60)

##### minSpeed?

```ts
optional minSpeed?: number
```

Defined in: [shared/api/effects.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L61)

##### maxSpeed?

```ts
optional maxSpeed?: number
```

Defined in: [shared/api/effects.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L62)

##### color?

```ts
optional color?: number
```

Defined in: [shared/api/effects.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L64)

Hex code. No alpha.

##### minSize?

```ts
optional minSize?: number
```

Defined in: [shared/api/effects.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L65)

##### maxSize?

```ts
optional maxSize?: number
```

Defined in: [shared/api/effects.d.ts:66](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L66)

##### minLifetime?

```ts
optional minLifetime?: number
```

Defined in: [shared/api/effects.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L67)

##### maxLifetime?

```ts
optional maxLifetime?: number
```

Defined in: [shared/api/effects.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L68)

##### background?

```ts
optional background?: boolean
```

Defined in: [shared/api/effects.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L69)

##### imageName?

```ts
optional imageName?: string
```

Defined in: [shared/api/effects.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L70)

##### fadeOutOnly?

```ts
optional fadeOutOnly?: boolean
```

Defined in: [shared/api/effects.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L71)

##### fadeStart?

```ts
optional fadeStart?: number
```

Defined in: [shared/api/effects.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L72)

##### fadeEnd?

```ts
optional fadeEnd?: number
```

Defined in: [shared/api/effects.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L73)

##### damp?

```ts
optional damp?: number
```

Defined in: [shared/api/effects.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L74)

## Functions <!-- {docsify-ignore} -->

### createAtWorld() :id=createatworld

<p class="smt-member-path"><code>sandkit.api.effects.createAtWorld()</code></p>

```ts
createAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

Defined in: [sandkit/api/effects.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L25)

Creates a named screen effect at world coordinates.

#### Parameters

##### effectId

`string`

Registered effect id (for example `heatWave`).

##### worldX

`number`

World X coordinate in pixels.

##### worldY

`number`

World Y coordinate in pixels.

##### options?

[`EffectOptions`](#effectoptions)

Duration, radius, and intensity settings.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### ~~createEffectAtWorld()~~

```ts
createEffectAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

Defined in: [sandkit/api/effects.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L37)

#### Parameters

##### effectId

`string`

##### worldX

`number`

##### worldY

`number`

##### options?

[`EffectOptions`](#effectoptions)

#### Returns

`void`

#### Deprecated

Use [createAtWorld](#createatworld) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### ~~createLightAtWorld()~~

```ts
createLightAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): object
```

Defined in: [sandkit/api/effects.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L67)

#### Parameters

##### worldX

`number`

##### worldY

`number`

##### options?

[`TemporaryLightOptions`](#temporarylightoptions)

#### Returns

`object`

##### ~~lightId~~

```ts
lightId: number | null;
```

##### ~~index?~~

```ts
optional index?: number | null
```

#### Deprecated

Use [lights.temporary.createAtWorld](api/sandkit.api.lights.temporary.md#createatworld) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### createDistortionWaveAtWorld() :id=createdistortionwaveatworld

<p class="smt-member-path"><code>sandkit.api.effects.createDistortionWaveAtWorld()</code></p>

```ts
createDistortionWaveAtWorld(worldX: number, worldY: number, options?: DistortionEffectOptions): void
```

Defined in: [sandkit/api/effects.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L89)

Creates a distortion wave effect at world coordinates.

#### Parameters

##### worldX

`number`

World X coordinate in pixels.

##### worldY

`number`

World Y coordinate in pixels.

##### options?

[`DistortionEffectOptions`](#distortioneffectoptions)

Style, duration, radius, intensity, and color.

#### Returns

`void`

#### Example

```ts
api.effects.createDistortionWaveAtWorld(worldX, worldY, {
  style: "implode",
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### createLaserAtWorld() :id=createlaseratworld

<p class="smt-member-path"><code>sandkit.api.effects.createLaserAtWorld()</code></p>

```ts
createLaserAtWorld(startWorldX: number, startWorldY: number, endWorldX: number, endWorldY: number, options?: LaserEffectOptions): LaserEffectHandle
```

Defined in: [sandkit/api/effects.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L102)

Creates a laser beam between two world points. Returns a handle to destroy it.

#### Parameters

##### startWorldX

`number`

Beam start world X in pixels.

##### startWorldY

`number`

Beam start world Y in pixels.

##### endWorldX

`number`

Beam end world X in pixels.

##### endWorldY

`number`

Beam end world Y in pixels.

##### options?

[`LaserEffectOptions`](#lasereffectoptions)

Width, brightness, color, and glow options.

#### Returns

[`LaserEffectHandle`](#lasereffecthandle)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### ~~removeLightById()~~

```ts
removeLightById(lightId: number): void
```

Defined in: [sandkit/api/effects.d.ts:115](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L115)

#### Parameters

##### lightId

`number`

#### Returns

`void`

#### Deprecated

Use [lights.temporary.removeById](api/sandkit.api.lights.temporary.md#removebyid) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### createParticlesAtWorld() :id=createparticlesatworld

<p class="smt-member-path"><code>sandkit.api.effects.createParticlesAtWorld()</code></p>

```ts
createParticlesAtWorld(worldX: number, worldY: number, options?: ParticleEffectOptions): void
```

Defined in: [shared/api/effects.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L24)

Emit particles at world coordinates.

#### Parameters

##### worldX

`number`

World x position in pixels.

##### worldY

`number`

World y position in pixels.

##### options?

[`ParticleEffectOptions`](#particleeffectoptions)

Count, velocity, colour, and lifetime settings.

#### Returns

`void`

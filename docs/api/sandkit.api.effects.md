# sandkit.api.effects

`sandkit.api.effects` — visual effects, particles, and lasers at world positions.
Main thread only. Temporary lights live under [lights.temporary](api/sandkit.api.lights.temporary.md).

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.effects.LaserEffectOptions :id=lasereffectoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L115" target="_blank" rel="noopener">effects.d.ts:115</a></p>

| Property | Type | Description |
| --- | --- | --- |
| width? | number | Beam width in pixels. |
| brightness? | number | Beam brightness multiplier. |
| color? | number | Beam color as a packed integer. |
| glow? | boolean | When true, draws a glow around the beam. |

<div class="smt-member-anchors">

##### width? <!-- {docsify-ignore} -->

##### brightness? <!-- {docsify-ignore} -->

##### color? <!-- {docsify-ignore} -->

##### glow? <!-- {docsify-ignore} -->

</div>

Options for laser beam effects.

</div>

<div class="smt-member-card">

### sandkit.api.effects.LaserEffectHandle :id=lasereffecthandle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L127" target="_blank" rel="noopener">effects.d.ts:127</a></p>

Handle returned by createLaserAtWorld.

#### Methods

##### destroy()

```ts
destroy(): void
```

Defined in: [sandkit/api/effects.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L129)

Removes the laser from the scene.

###### Returns

`void`

</div>

<div class="smt-member-card">

### sandkit.api.effects.DistortionEffectOptions :id=distortioneffectoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L133" target="_blank" rel="noopener">effects.d.ts:133</a></p>

| Property | Type | Description |
| --- | --- | --- |
| style? | "implode" \| "explode" | Distortion style: implode or explode. |
| duration? | number | Effect duration in seconds. |
| maxRadius? | number | Maximum radius of the wave. |
| intensity? | number | Visual intensity of the distortion. |
| color? | [number, number, number, number] | RGBA color components for the effect. |

<div class="smt-member-anchors">

##### style? <!-- {docsify-ignore} -->

##### duration? <!-- {docsify-ignore} -->

##### maxRadius? <!-- {docsify-ignore} -->

##### intensity? <!-- {docsify-ignore} -->

##### color? <!-- {docsify-ignore} -->

</div>

Options for distortion wave effects.

</div>

<div class="smt-member-card">

### sandkit.api.effects.EffectOptions :id=effectoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L48" target="_blank" rel="noopener">effects.d.ts:48</a></p>

| Property | Type | Description |
| --- | --- | --- |
| duration? | number |  |
| maxRadius? | number |  |
| intensity? | number |  |

<div class="smt-member-anchors">

##### duration? <!-- {docsify-ignore} -->

##### maxRadius? <!-- {docsify-ignore} -->

##### intensity? <!-- {docsify-ignore} -->

</div>

Generic duration and radius options for world effects.

</div>

<div class="smt-member-card">

### sandkit.api.effects.TemporaryLightOptions :id=temporarylightoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L54" target="_blank" rel="noopener">effects.d.ts:54</a></p>

| Property | Type | Description |
| --- | --- | --- |
| brightness? | number |  |
| duration? | number |  |
| durationMs? | number |  |
| size? | number |  |
| color? | [number, number, number, number] |  |
| decay | number | Light decay rate after spawn. |
| unclamped? | boolean |  |
| skipDedup? | boolean |  |
| useLightZones? | boolean |  |
| noopIfFull? | boolean |  |
| priority? | number |  |
| dedupKey | string | Dedupe key when the light pool is full or dedup is enabled. |

<div class="smt-member-anchors">

##### brightness? <!-- {docsify-ignore} -->

##### duration? <!-- {docsify-ignore} -->

##### durationMs? <!-- {docsify-ignore} -->

##### size? <!-- {docsify-ignore} -->

##### color? <!-- {docsify-ignore} -->

##### decay <!-- {docsify-ignore} -->

##### unclamped? <!-- {docsify-ignore} -->

##### skipDedup? <!-- {docsify-ignore} -->

##### useLightZones? <!-- {docsify-ignore} -->

##### noopIfFull? <!-- {docsify-ignore} -->

##### priority? <!-- {docsify-ignore} -->

##### dedupKey <!-- {docsify-ignore} -->

</div>

Options for [createLightAtWorld](?id=createlightatworld).

</div>

<div class="smt-member-card">

### sandkit.api.effects.ParticleEffectOptions :id=particleeffectoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L71" target="_blank" rel="noopener">effects.d.ts:71</a></p>

| Property | Type | Description |
| --- | --- | --- |
| count? | number |  |
| velocity? | Vector2 |  |
| minSpeed? | number |  |
| maxSpeed? | number |  |
| color? | number | Hex code. No alpha. |
| minSize? | number |  |
| maxSize? | number |  |
| minLifetime? | number |  |
| maxLifetime? | number |  |
| background? | boolean |  |
| imageName? | string |  |
| fadeOutOnly? | boolean |  |
| fadeStart? | number |  |
| fadeEnd? | number |  |
| damp? | number |  |

<div class="smt-member-anchors">

##### count? <!-- {docsify-ignore} -->

##### velocity? <!-- {docsify-ignore} -->

##### minSpeed? <!-- {docsify-ignore} -->

##### maxSpeed? <!-- {docsify-ignore} -->

##### color? <!-- {docsify-ignore} -->

##### minSize? <!-- {docsify-ignore} -->

##### maxSize? <!-- {docsify-ignore} -->

##### minLifetime? <!-- {docsify-ignore} -->

##### maxLifetime? <!-- {docsify-ignore} -->

##### background? <!-- {docsify-ignore} -->

##### imageName? <!-- {docsify-ignore} -->

##### fadeOutOnly? <!-- {docsify-ignore} -->

##### fadeStart? <!-- {docsify-ignore} -->

##### fadeEnd? <!-- {docsify-ignore} -->

##### damp? <!-- {docsify-ignore} -->

</div>

Options for [createParticlesAtWorld](?id=createparticlesatworld).

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.effects.createAtWorld :id=createatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L24" target="_blank" rel="noopener">effects.d.ts:24</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.effects.createAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void">

```ts
createAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| effectId | `string` | Registered effect id (for example `heatWave`). |
| worldX | `number` | World X coordinate in pixels. |
| worldY | `number` | World Y coordinate in pixels. |
| options? | [`EffectOptions`](?id=effectoptions) | Duration, radius, and intensity settings. |

<div class="smt-member-anchors">

##### effectId <!-- {docsify-ignore} -->

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Creates a named screen effect at world coordinates.

</div>

<div class="smt-member-card">

### ~~sandkit.api.effects.createEffectAtWorld~~ :id=createeffectatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L35" target="_blank" rel="noopener">effects.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.effects.createEffectAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void">

```ts
createEffectAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| effectId | `string` |  |
| worldX | `number` |  |
| worldY | `number` |  |
| options? | [`EffectOptions`](?id=effectoptions) |  |

<div class="smt-member-anchors">

##### effectId <!-- {docsify-ignore} -->

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [createAtWorld](?id=createatworld) instead.

</div>

<div class="smt-member-card">

### ~~sandkit.api.effects.createLightAtWorld~~ :id=createlightatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L63" target="_blank" rel="noopener">effects.d.ts:63</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.effects.createLightAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): object">

```ts
createLightAtWorld(worldX: number, worldY: number, options?: TemporaryLightOptions): object
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` |  |
| worldY | `number` |  |
| options? | [`TemporaryLightOptions`](?id=temporarylightoptions) |  |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

lightId: number | null optional index?: number | null

#### Deprecated

Use [lights.temporary.createAtWorld](api/sandkit.api.lights.temporary.md?id=createatworld) instead.

</div>

<div class="smt-member-card">

### sandkit.api.effects.createDistortionWaveAtWorld :id=createdistortionwaveatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L84" target="_blank" rel="noopener">effects.d.ts:84</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.effects.createDistortionWaveAtWorld(worldX: number, worldY: number, options?: DistortionEffectOptions): void">

```ts
createDistortionWaveAtWorld(worldX: number, worldY: number, options?: DistortionEffectOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World X coordinate in pixels. |
| worldY | `number` | World Y coordinate in pixels. |
| options? | [`DistortionEffectOptions`](?id=distortioneffectoptions) | Style, duration, radius, intensity, and color. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Creates a distortion wave effect at world coordinates.

#### Example

```ts
api.effects.createDistortionWaveAtWorld(worldX, worldY, {
  style: "implode",
});
```

</div>

<div class="smt-member-card">

### sandkit.api.effects.createLaserAtWorld :id=createlaseratworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L100" target="_blank" rel="noopener">effects.d.ts:100</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.effects.createLaserAtWorld(startWorldX: number, startWorldY: number, endWorldX: number, endWorldY: number, options?: LaserEffectOptions): LaserEffectHandle">

```ts
createLaserAtWorld(startWorldX: number, startWorldY: number, endWorldX: number, endWorldY: number, options?: LaserEffectOptions): LaserEffectHandle
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| startWorldX | `number` | Beam start world X in pixels. |
| startWorldY | `number` | Beam start world Y in pixels. |
| endWorldX | `number` | Beam end world X in pixels. |
| endWorldY | `number` | Beam end world Y in pixels. |
| options? | [`LaserEffectOptions`](?id=lasereffectoptions) | Width, brightness, color, and glow options. |

<div class="smt-member-anchors">

##### startWorldX <!-- {docsify-ignore} -->

##### startWorldY <!-- {docsify-ignore} -->

##### endWorldX <!-- {docsify-ignore} -->

##### endWorldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Creates a laser beam between two world points. Returns a handle to destroy it.

[`LaserEffectHandle`](?id=lasereffecthandle)

</div>

<div class="smt-member-card">

### ~~sandkit.api.effects.removeLightById~~ :id=removelightbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/effects.d.ts#L112" target="_blank" rel="noopener">effects.d.ts:112</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.effects.removeLightById(lightId: number): void">

```ts
removeLightById(lightId: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| lightId | `number` |  |

<div class="smt-member-anchors">

##### lightId <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [lights.temporary.removeById](api/sandkit.api.lights.temporary.md?id=removebyid) instead.

</div>

<div class="smt-member-card">

### sandkit.api.effects.createParticlesAtWorld :id=createparticlesatworld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/effects.d.ts#L28" target="_blank" rel="noopener">effects.d.ts:28</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.effects.createParticlesAtWorld(worldX: number, worldY: number, options?: ParticleEffectOptions): void">

```ts
createParticlesAtWorld(worldX: number, worldY: number, options?: ParticleEffectOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| worldX | `number` | World x position in pixels. |
| worldY | `number` | World y position in pixels. |
| options? | [`ParticleEffectOptions`](?id=particleeffectoptions) | Count, velocity, colour, and lifetime settings. |

<div class="smt-member-anchors">

##### worldX <!-- {docsify-ignore} -->

##### worldY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Emit particles at world coordinates.

</div>

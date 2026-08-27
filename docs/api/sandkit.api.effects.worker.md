# sandkit.api.effects (worker)

**`Internal`**

Worker-thread `sandkit.api.effects` — world-space visual effects on workers.

Temporary lights live under [lights.temporary](api/sandkit.api.lights.temporary.worker.md), not here.

 Worker-only surface; main thread exposes additional effect helpers.

## Functions <!-- {docsify-ignore} -->

### createAtWorld() :id=createatworld

<p class="smt-member-path"><code>sandkit.api.effects.createAtWorld() (worker)</code></p>

```ts
createAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

Defined in: [worker/api/effects.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/effects.d.ts#L25)

Spawn a named screen-space or world effect.

#### Parameters

##### effectId

`string`

Registered effect id.

##### worldX

`number`

World x position in pixels.

##### worldY

`number`

World y position in pixels.

##### options?

[`EffectOptions`](api/sandkit.api.effects.md#effectoptions)

Duration, radius, and intensity settings.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Worker entry `api.effects.createAtWorld`

***

### ~~createEffectAtWorld()~~

```ts
createEffectAtWorld(effectId: string, worldX: number, worldY: number, options?: EffectOptions): void
```

Defined in: [worker/api/effects.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/effects.d.ts#L36)

#### Parameters

##### effectId

`string`

##### worldX

`number`

##### worldY

`number`

##### options?

[`EffectOptions`](api/sandkit.api.effects.md#effectoptions)

#### Returns

`void`

#### Deprecated

Use [createAtWorld](#createatworld) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.effects.createAtWorld`

## References <!-- {docsify-ignore} -->

### EffectOptions :id=effectoptions

<p class="smt-member-path"><code>sandkit.api.effects.EffectOptions (worker)</code></p>

Re-exports [EffectOptions](api/sandkit.api.effects.md#effectoptions)

***

### ParticleEffectOptions :id=particleeffectoptions

<p class="smt-member-path"><code>sandkit.api.effects.ParticleEffectOptions (worker)</code></p>

Re-exports [ParticleEffectOptions](api/sandkit.api.effects.md#particleeffectoptions)

***

### createParticlesAtWorld :id=createparticlesatworld

<p class="smt-member-path"><code>sandkit.api.effects.createParticlesAtWorld (worker)</code></p>

Re-exports [createParticlesAtWorld](api/sandkit.api.effects.md#createparticlesatworld)

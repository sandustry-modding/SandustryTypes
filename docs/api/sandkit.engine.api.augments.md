# sandkit.engine.api.augments

**`Internal`**

`sandkit.engine.api.augments` — player augment levels and unlocked perks.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### getDigLevel() :id=getdiglevel

<p class="smt-member-path"><code>sandkit.engine.api.augments.getDigLevel()</code></p>

```ts
getDigLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L15)

Return the current dig augment level.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### getGunLevel() :id=getgunlevel

<p class="smt-member-path"><code>sandkit.engine.api.augments.getGunLevel()</code></p>

```ts
getGunLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L20)

Return the current gun augment level.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### getPhaseLevel() :id=getphaselevel

<p class="smt-member-path"><code>sandkit.engine.api.augments.getPhaseLevel()</code></p>

```ts
getPhaseLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L25)

Return the current phase augment level.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### getRocketAmmoLevel() :id=getrocketammolevel

<p class="smt-member-path"><code>sandkit.engine.api.augments.getRocketAmmoLevel()</code></p>

```ts
getRocketAmmoLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L30)

Return the current rocket ammo augment level.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### getRocketReloadLevel() :id=getrocketreloadlevel

<p class="smt-member-path"><code>sandkit.engine.api.augments.getRocketReloadLevel()</code></p>

```ts
getRocketReloadLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L35)

Return the current rocket reload augment level.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### getSprintCapLevel() :id=getsprintcaplevel

<p class="smt-member-path"><code>sandkit.engine.api.augments.getSprintCapLevel()</code></p>

```ts
getSprintCapLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L40)

Return the current sprint cap augment level.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### hasBigDig() :id=hasbigdig

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasBigDig()</code></p>

```ts
hasBigDig(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L45)

Return whether the big-dig augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### hasBulletSpeed() :id=hasbulletspeed

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasBulletSpeed()</code></p>

```ts
hasBulletSpeed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L50)

Return whether the bullet-speed augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### hasBulletTracer() :id=hasbullettracer

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasBulletTracer()</code></p>

```ts
hasBulletTracer(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L55)

Return whether the bullet-tracer augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### hasKickstartBoost() :id=haskickstartboost

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasKickstartBoost()</code></p>

```ts
hasKickstartBoost(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L60)

Return whether the kickstart-boost augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### hasPhaseDash() :id=hasphasedash

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasPhaseDash()</code></p>

```ts
hasPhaseDash(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L65)

Return whether the phase-dash augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### hasPhaseDashCharge() :id=hasphasedashcharge

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasPhaseDashCharge()</code></p>

```ts
hasPhaseDashCharge(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L70)

Return whether the phase-dash-charge augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### hasRideBoost() :id=hasrideboost

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasRideBoost()</code></p>

```ts
hasRideBoost(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L75)

Return whether the ride-boost augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### hasRocketDamage() :id=hasrocketdamage

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasRocketDamage()</code></p>

```ts
hasRocketDamage(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L80)

Return whether the rocket-damage augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### hasRocketWarhead() :id=hasrocketwarhead

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasRocketWarhead()</code></p>

```ts
hasRocketWarhead(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L85)

Return whether the rocket-warhead augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### hasSprintPower() :id=hassprintpower

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasSprintPower()</code></p>

```ts
hasSprintPower(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L90)

Return whether the sprint-power augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### hasTripleShot() :id=hastripleshot

<p class="smt-member-path"><code>sandkit.engine.api.augments.hasTripleShot()</code></p>

```ts
hasTripleShot(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L95)

Return whether the triple-shot augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

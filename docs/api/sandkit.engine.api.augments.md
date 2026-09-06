# sandkit.engine.api.augments

**`Internal`**

`sandkit.engine.api.augments` — player augment levels and unlocked perks.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### getDigLevel() :id=getdiglevel

```ts
sandkit.engine.api.augments.getDigLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L15)

Return the current dig augment level.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getGunLevel() :id=getgunlevel

```ts
sandkit.engine.api.augments.getGunLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L20)

Return the current gun augment level.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getPhaseLevel() :id=getphaselevel

```ts
sandkit.engine.api.augments.getPhaseLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L25)

Return the current phase augment level.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getRocketAmmoLevel() :id=getrocketammolevel

```ts
sandkit.engine.api.augments.getRocketAmmoLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L30)

Return the current rocket ammo augment level.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getRocketReloadLevel() :id=getrocketreloadlevel

```ts
sandkit.engine.api.augments.getRocketReloadLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L35)

Return the current rocket reload augment level.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getSprintCapLevel() :id=getsprintcaplevel

```ts
sandkit.engine.api.augments.getSprintCapLevel(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L40)

Return the current sprint cap augment level.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### hasBigDig() :id=hasbigdig

```ts
sandkit.engine.api.augments.hasBigDig(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L45)

Return whether the big-dig augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### hasBulletSpeed() :id=hasbulletspeed

```ts
sandkit.engine.api.augments.hasBulletSpeed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L50)

Return whether the bullet-speed augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### hasBulletTracer() :id=hasbullettracer

```ts
sandkit.engine.api.augments.hasBulletTracer(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L55)

Return whether the bullet-tracer augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### hasKickstartBoost() :id=haskickstartboost

```ts
sandkit.engine.api.augments.hasKickstartBoost(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L60)

Return whether the kickstart-boost augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### hasPhaseDash() :id=hasphasedash

```ts
sandkit.engine.api.augments.hasPhaseDash(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L65)

Return whether the phase-dash augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### hasPhaseDashCharge() :id=hasphasedashcharge

```ts
sandkit.engine.api.augments.hasPhaseDashCharge(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L70)

Return whether the phase-dash-charge augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### hasRideBoost() :id=hasrideboost

```ts
sandkit.engine.api.augments.hasRideBoost(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L75)

Return whether the ride-boost augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### hasRocketDamage() :id=hasrocketdamage

```ts
sandkit.engine.api.augments.hasRocketDamage(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L80)

Return whether the rocket-damage augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### hasRocketWarhead() :id=hasrocketwarhead

```ts
sandkit.engine.api.augments.hasRocketWarhead(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L85)

Return whether the rocket-warhead augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### hasSprintPower() :id=hassprintpower

```ts
sandkit.engine.api.augments.hasSprintPower(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L90)

Return whether the sprint-power augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### hasTripleShot() :id=hastripleshot

```ts
sandkit.engine.api.augments.hasTripleShot(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/augments.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/augments.d.ts#L95)

Return whether the triple-shot augment is unlocked.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

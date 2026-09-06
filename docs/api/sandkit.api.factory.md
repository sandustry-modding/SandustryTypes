# sandkit.api.factory

Factory progression level and process counters.

Available as `sandkit.api.factory`.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Type Aliases <!-- {docsify-ignore} -->

### FactoryProcessId :id=factoryprocessid

```ts
sandkit.api.factory.FactoryProcessId = "shakeWetSand" | "pressBurntResidue" | "growFlowers" | "condenseFlorin"
```

Defined in: [sandkit/api/factory.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/factory.d.ts#L35)

Built-in factory process identifiers.

## Functions <!-- {docsify-ignore} -->

### getLevel() :id=getlevel

```ts
sandkit.api.factory.getLevel(): number
```

Defined in: [sandkit/api/factory.d.ts:14](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/factory.d.ts#L14)

Return the current factory level.

#### Returns

`number`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getProcessCount() :id=getprocesscount

```ts
sandkit.api.factory.getProcessCount(processId: FactoryProcessId): number
```

Defined in: [sandkit/api/factory.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/factory.d.ts#L23)

Return completed count for a factory process.

#### Parameters

##### processId

[`FactoryProcessId`](#factoryprocessid)

Built-in factory process id.

#### Returns

`number`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getProcessRate() :id=getprocessrate

```ts
sandkit.api.factory.getProcessRate(processId: FactoryProcessId): number
```

Defined in: [sandkit/api/factory.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/factory.d.ts#L32)

Return completion rate for a factory process.

#### Parameters

##### processId

[`FactoryProcessId`](#factoryprocessid)

Built-in factory process id.

#### Returns

`number`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

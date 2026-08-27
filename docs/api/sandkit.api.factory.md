# sandkit.api.factory

Factory progression level and process counters.

Available as `sandkit.api.factory`.

## See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.factory`

## Type Aliases <!-- {docsify-ignore} -->

### FactoryProcessId :id=factoryprocessid

<p class="smt-member-path"><code>sandkit.api.factory.FactoryProcessId</code></p>

```ts
FactoryProcessId = "shakeWetSand" | "pressBurntResidue" | "growFlowers" | "condenseFlorin"
```

Defined in: sandkit/api/factory.d.ts:33

Built-in factory process identifiers.

## Functions <!-- {docsify-ignore} -->

### getLevel() :id=getlevel

<p class="smt-member-path"><code>sandkit.api.factory.getLevel()</code></p>

```ts
getLevel(): number
```

Defined in: sandkit/api/factory.d.ts:14

Return the current factory level.

#### Returns

`number`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.factory.getLevel`

***

### getProcessCount() :id=getprocesscount

<p class="smt-member-path"><code>sandkit.api.factory.getProcessCount()</code></p>

```ts
getProcessCount(processId: FactoryProcessId): number
```

Defined in: sandkit/api/factory.d.ts:22

Return completed count for a factory process.

#### Parameters

##### processId

[`FactoryProcessId`](#factoryprocessid)

Built-in factory process id.

#### Returns

`number`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.factory.getProcessCount`

***

### getProcessRate() :id=getprocessrate

<p class="smt-member-path"><code>sandkit.api.factory.getProcessRate()</code></p>

```ts
getProcessRate(processId: FactoryProcessId): number
```

Defined in: sandkit/api/factory.d.ts:30

Return completion rate for a factory process.

#### Parameters

##### processId

[`FactoryProcessId`](#factoryprocessid)

Built-in factory process id.

#### Returns

`number`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.factory.getProcessRate`

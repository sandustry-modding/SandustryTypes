# sandkit.api.blueprints

Structure blueprint serialize and localize helpers.

Available as `sandkit.api.blueprints`.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Interfaces <!-- {docsify-ignore} -->

### BlueprintStructure :id=blueprintstructure

<p class="smt-member-path"><code>sandkit.api.blueprints.BlueprintStructure</code></p>

Defined in: [sandkit/api/blueprints.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L30)

Serialized structure entry used in blueprints.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### x

```ts
x: number
```

Defined in: [sandkit/api/blueprints.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L31)

##### y

```ts
y: number
```

Defined in: [sandkit/api/blueprints.d.ts:32](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L32)

## Functions <!-- {docsify-ignore} -->

### serializeStructures() :id=serializestructures

<p class="smt-member-path"><code>sandkit.api.blueprints.serializeStructures()</code></p>

```ts
serializeStructures(structures: readonly Structure[]): BlueprintStructure[]
```

Defined in: [sandkit/api/blueprints.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L18)

Serialize live structure instances into blueprint records.

#### Parameters

##### structures

readonly [`Structure`](api/sandkit.api.structures.worker.md#structure)[]

Structure instances to encode.

#### Returns

[`BlueprintStructure`](#blueprintstructure)[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### localizeStructures() :id=localizestructures

<p class="smt-member-path"><code>sandkit.api.blueprints.localizeStructures()</code></p>

```ts
localizeStructures(structures: readonly BlueprintStructure[]): BlueprintStructure[]
```

Defined in: [sandkit/api/blueprints.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L27)

Localize blueprint structure records for placement.

#### Parameters

##### structures

readonly [`BlueprintStructure`](#blueprintstructure)[]

Blueprint structure records to localize.

#### Returns

[`BlueprintStructure`](#blueprintstructure)[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

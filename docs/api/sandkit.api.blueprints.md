# sandkit.api.blueprints

Structure blueprint serialize and localize helpers.

Available as `sandkit.api.blueprints`.

## See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.blueprints`

## Interfaces <!-- {docsify-ignore} -->

### BlueprintStructure :id=blueprintstructure

<p class="smt-member-path"><code>sandkit.api.blueprints.BlueprintStructure</code></p>

Defined in: [sandkit/api/blueprints.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L28)

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

Defined in: [sandkit/api/blueprints.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L29)

##### y

```ts
y: number
```

Defined in: [sandkit/api/blueprints.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L30)

## Functions <!-- {docsify-ignore} -->

### serializeStructures() :id=serializestructures

<p class="smt-member-path"><code>sandkit.api.blueprints.serializeStructures()</code></p>

```ts
serializeStructures(structures: readonly Structure[]): BlueprintStructure[]
```

Defined in: [sandkit/api/blueprints.d.ts:17](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L17)

Serialize live structure instances into blueprint records.

#### Parameters

##### structures

readonly [`Structure`](api/sandkit.api.structures.worker.md#structure)[]

Structure instances to encode.

#### Returns

[`BlueprintStructure`](#blueprintstructure)[]

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.blueprints.serializeStructures`

***

### localizeStructures() :id=localizestructures

<p class="smt-member-path"><code>sandkit.api.blueprints.localizeStructures()</code></p>

```ts
localizeStructures(structures: readonly BlueprintStructure[]): BlueprintStructure[]
```

Defined in: [sandkit/api/blueprints.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L25)

Localize blueprint structure records for placement.

#### Parameters

##### structures

readonly [`BlueprintStructure`](#blueprintstructure)[]

Blueprint structure records to localize.

#### Returns

[`BlueprintStructure`](#blueprintstructure)[]

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.blueprints.localizeStructures`

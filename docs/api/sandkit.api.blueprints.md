# sandkit.api.blueprints

Structure blueprint serialize and localize helpers.

Available as `sandkit.api.blueprints`.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.blueprints.BlueprintStructure :id=blueprintstructure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L34" target="_blank" rel="noopener">blueprints.d.ts:34</a></p>

| Property | Type | Description |
| --- | --- | --- |
| x | number |  |
| y | number |  |

<div class="smt-member-anchors">

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

</div>

Serialized structure entry used in blueprints.

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.blueprints.serializeStructures :id=serializestructures

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L18" target="_blank" rel="noopener">blueprints.d.ts:18</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.blueprints.serializeStructures(structures: readonly Structure[]): BlueprintStructure[]">

```ts
serializeStructures(structures: readonly Structure[]): BlueprintStructure[]
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structures | readonly [`Structure`](api/sandkit.api.structures.worker.md?id=structure)[] | Structure instances to encode. |

<div class="smt-member-anchors">

##### structures <!-- {docsify-ignore} -->

</div>

Serialize live structure instances into blueprint records.

[`BlueprintStructure`](?id=blueprintstructure)[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.blueprints.localizeStructures :id=localizestructures

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/blueprints.d.ts#L29" target="_blank" rel="noopener">blueprints.d.ts:29</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.blueprints.localizeStructures(structures: readonly BlueprintStructure[]): BlueprintStructure[]">

```ts
localizeStructures(structures: readonly BlueprintStructure[]): BlueprintStructure[]
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structures | readonly [`BlueprintStructure`](?id=blueprintstructure)[] | Blueprint structure records to localize. |

<div class="smt-member-anchors">

##### structures <!-- {docsify-ignore} -->

</div>

Localize blueprint structure records for placement.

[`BlueprintStructure`](?id=blueprintstructure)[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

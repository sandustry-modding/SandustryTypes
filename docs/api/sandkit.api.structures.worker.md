# sandkit.api.structures (worker)

**`Internal`**

Shared `sandkit.api.structures` base — structure lookup and mutation.

 Base namespace reused by main and worker declarations.

## Namespaces <!-- {docsify-ignore} -->

- [processing](api/sandkit.api.structures.processing.worker.md)

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structures.StructureData :id=structuredata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L218" target="_blank" rel="noopener">structures.d.ts:218</a></p>

| Property | Type | Description |
| --- | --- | --- |
| elementId? | string \| null |  |
| elementType? | TaggedNumber<"elementType"> \| null |  |

<div class="smt-member-anchors">

##### elementId? <!-- {docsify-ignore} -->

##### elementType? <!-- {docsify-ignore} -->

</div>

Per-structure custom data bag.

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.Structure :id=structure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L225" target="_blank" rel="noopener">structures.d.ts:225</a></p>

| Property | Type | Description |
| --- | --- | --- |
| x | number |  |
| y | number |  |
| trapped? | boolean |  |
| data? | StructureData |  |

<div class="smt-member-anchors">

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

##### trapped? <!-- {docsify-ignore} -->

##### data? <!-- {docsify-ignore} -->

</div>

Live structure instance in the world grid.

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structures.StructureType :id=structuretype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L234" target="_blank" rel="noopener">structures.d.ts:234</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureType = StructureType | TaggedNumber&lt;&quot;structureType&quot;&gt;">

```ts
StructureType = StructureType | TaggedNumber<"structureType">
```

</div>

Numeric structure type handle. Built-in enum values autocomplete.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureId :id=structureid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L236" target="_blank" rel="noopener">structures.d.ts:236</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureId = LooseString&lt;never&gt;">

```ts
StructureId = LooseString<never>
```

</div>

Mod or built-in structure string id.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureRef :id=structureref

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L238" target="_blank" rel="noopener">structures.d.ts:238</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.StructureRef = StructureType | StructureId">

```ts
StructureRef = StructureType | StructureId
```

</div>

Type handle or string id accepted by lookup helpers.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structures.forEachOfType :id=foreachoftype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L26" target="_blank" rel="noopener">structures.d.ts:26</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.forEachOfType(structureTypeOrId: StructureRef, callback: (structure: Structure) =&gt; void): void">

```ts
forEachOfType(structureTypeOrId: StructureRef, callback: (structure: Structure) => void): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureTypeOrId | [`StructureRef`](?id=structureref) | Structure type value or string id. |
| callback | (`structure`: [`Structure`](?id=structure)) => `void` | Called once per matching structure instance. |

<div class="smt-member-anchors">

##### structureTypeOrId <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

</div>

Invoke a callback for every structure of the given type.

#### Example

**Worker entry**

```ts
api.structures.forEachOfType("exampleStructure", (structure) => {
  processStructure(structure);
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.structures.getAtCell :id=getatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L39" target="_blank" rel="noopener">structures.d.ts:39</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.getAtCell(...args: CellCoordinates): Structure | null">

```ts
getAtCell(...args: CellCoordinates): Structure | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the structure at a cell, or null when none.

[`Structure`](?id=structure) \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.structures.getDefinitionByType :id=getdefinitionbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L48" target="_blank" rel="noopener">structures.d.ts:48</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.getDefinitionByType(structureType: StructureRef): any">

```ts
getDefinitionByType(structureType: StructureRef): any
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureType | [`StructureRef`](?id=structureref) | Structure type value or string id. |

<div class="smt-member-anchors">

##### structureType <!-- {docsify-ignore} -->

</div>

Return the mod-registered or built-in definition for a structure type.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.structures.getTypeById :id=gettypebyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L57" target="_blank" rel="noopener">structures.d.ts:57</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.getTypeById(structureId: string &amp; object): StructureType">

```ts
getTypeById(structureId: string & object): StructureType
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureId | `string` & `object` | Structure string id. |

<div class="smt-member-anchors">

##### structureId <!-- {docsify-ignore} -->

</div>

Map a structure string id to its runtime type value.

[`StructureType`](?id=structuretype)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.structures.getTypeFromId~~ :id=gettypefromid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L64" target="_blank" rel="noopener">structures.d.ts:64</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.getTypeFromId(structureId: string &amp; object): StructureType">

```ts
getTypeFromId(structureId: string & object): StructureType
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureId | `string` & `object` |  |

<div class="smt-member-anchors">

##### structureId <!-- {docsify-ignore} -->

</div>

[`StructureType`](?id=structuretype)

#### Deprecated

Use [getTypeById](?id=gettypebyid) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.structures.hasBuiltAtCell :id=hasbuiltatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L74" target="_blank" rel="noopener">structures.d.ts:74</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.hasBuiltAtCell(...args: CellCoordinates): boolean">

```ts
hasBuiltAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when a completed structure occupies the cell.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.structures.isType :id=istype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L84" target="_blank" rel="noopener">structures.d.ts:84</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.isType(structure: Structure | null, structureId: string &amp; object): boolean">

```ts
isType(structure: Structure | null, structureId: string & object): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | [`Structure`](?id=structure) \\| `null` | Structure instance, or null. |
| structureId | `string` & `object` | Structure string id to compare. |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### structureId <!-- {docsify-ignore} -->

</div>

Return true when the structure matches the given id.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.structures.isTypeAtCell :id=istypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L95" target="_blank" rel="noopener">structures.d.ts:95</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.isTypeAtCell(...args: [number, number, string &amp; object]): boolean">

```ts
isTypeAtCell(...args: [number, number, string & object]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `string` & `object`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the cell structure matches the given id.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.structures.setSpritesheetIndex :id=setspritesheetindex

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L105" target="_blank" rel="noopener">structures.d.ts:105</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.setSpritesheetIndex(structure: Structure, index: number): void">

```ts
setSpritesheetIndex(structure: Structure, index: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | [`Structure`](?id=structure) | Target structure instance. |
| index | `number` | Spritesheet frame index. |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### index <!-- {docsify-ignore} -->

</div>

Set the spritesheet frame index on a structure instance.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.structures.setSpritesheetIndexAtCell :id=setspritesheetindexatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L116" target="_blank" rel="noopener">structures.d.ts:116</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.setSpritesheetIndexAtCell(...args: [number, number, number]): void">

```ts
setSpritesheetIndexAtCell(...args: [number, number, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set spritesheet frame index for the structure at a cell.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.structures.setSpritesheetIndexByValue :id=setspritesheetindexbyvalue

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L127" target="_blank" rel="noopener">structures.d.ts:127</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void">

```ts
setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | [`Structure`](?id=structure) | Target structure instance. |
| value | `number` | Numeric value mapped through thresholds. |
| thresholds | `number`[] | Ascending threshold values. |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### value <!-- {docsify-ignore} -->

##### thresholds <!-- {docsify-ignore} -->

</div>

Pick spritesheet index from a value and threshold table on a structure.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.structures.setSpritesheetIndexByValueAtCell :id=setspritesheetindexbyvalueatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L143" target="_blank" rel="noopener">structures.d.ts:143</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.setSpritesheetIndexByValueAtCell(...args: [number, number, number, number[]]): void">

```ts
setSpritesheetIndexByValueAtCell(...args: [number, number, number, number[]]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`, `number`[]\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Same as [setSpritesheetIndexByValue](?id=setspritesheetindexbyvalue) for the structure at a cell.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.structures.update :id=update

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L160" target="_blank" rel="noopener">structures.d.ts:160</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.update(structure: Structure, options?: object): void">

```ts
update(structure: Structure, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | [`Structure`](?id=structure) | Structure instance to update. |
| options? | When `propagateToWorkers` is true, sync to worker threads. |  |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Push structure field changes to simulation.

#### Example

**Worker entry**

```ts
api.structures.update(structure, { propagateToWorkers: true });
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.structures.updateData :id=updatedata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L180" target="_blank" rel="noopener">structures.d.ts:180</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.updateData(structure: Structure, partial: any, options?: object): void">

```ts
updateData(structure: Structure, partial: any, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | [`Structure`](?id=structure) | Structure instance to update. |
| partial | `any` | Fields to merge onto `structure.data`. |
| options? | When `propagateToWorkers` is true, sync to worker threads. |  |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### partial <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Merge partial data onto a structure.

#### Example

**Worker entry**

```ts
api.structures.updateData(
  structure,
  { mode: "allow" },
  { propagateToWorkers: true },
);
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.structures.setData~~ :id=setdata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L191" target="_blank" rel="noopener">structures.d.ts:191</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.setData(structure: Structure, partial: any, options?: object): void">

```ts
setData(structure: Structure, partial: any, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structure | [`Structure`](?id=structure) |  |
| partial | `any` |  |
| options? |  |  |

<div class="smt-member-anchors">

##### structure <!-- {docsify-ignore} -->

##### partial <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [updateData](?id=updatedata) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

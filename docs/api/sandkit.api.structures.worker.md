# sandkit.api.structures (worker)

**`Internal`**

Shared `sandkit.api.structures` base — structure lookup and mutation.

 Base namespace reused by main and worker declarations.

## Namespaces <!-- {docsify-ignore} -->

- [processing](api/sandkit.api.structures.processing.worker.md)

## Interfaces <!-- {docsify-ignore} -->

### StructureData :id=structuredata

<p class="smt-member-path"><code>sandkit.api.structures.StructureData (worker)</code></p>

Defined in: [shared/api/structures.d.ts:201](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L201)

Per-structure custom data bag.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### elementId?

```ts
optional elementId?: string | null
```

Defined in: [shared/api/structures.d.ts:202](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L202)

##### elementType?

```ts
optional elementType?: TaggedNumber<"elementType"> | null
```

Defined in: [shared/api/structures.d.ts:203](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L203)

***

### Structure :id=structure

<p class="smt-member-path"><code>sandkit.api.structures.Structure (worker)</code></p>

Defined in: [shared/api/structures.d.ts:208](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L208)

Live structure instance in the world grid.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### x

```ts
x: number
```

Defined in: [shared/api/structures.d.ts:209](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L209)

##### y

```ts
y: number
```

Defined in: [shared/api/structures.d.ts:210](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L210)

##### trapped?

```ts
optional trapped?: boolean
```

Defined in: [shared/api/structures.d.ts:211](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L211)

##### data?

```ts
optional data?: StructureData
```

Defined in: [shared/api/structures.d.ts:212](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L212)

## Type Aliases <!-- {docsify-ignore} -->

### StructureType :id=structuretype

<p class="smt-member-path"><code>sandkit.api.structures.StructureType (worker)</code></p>

```ts
StructureType = StructureType | TaggedNumber<"structureType">
```

Defined in: [shared/api/structures.d.ts:217](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L217)

Numeric structure type handle. Built-in enum values autocomplete.

***

### StructureId :id=structureid

<p class="smt-member-path"><code>sandkit.api.structures.StructureId (worker)</code></p>

```ts
StructureId = LooseString<never>
```

Defined in: [shared/api/structures.d.ts:219](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L219)

Mod or built-in structure string id.

***

### StructureRef :id=structureref

<p class="smt-member-path"><code>sandkit.api.structures.StructureRef (worker)</code></p>

```ts
StructureRef = StructureType | StructureId
```

Defined in: [shared/api/structures.d.ts:221](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L221)

Type handle or string id accepted by lookup helpers.

## Functions <!-- {docsify-ignore} -->

### forEachOfType() :id=foreachoftype

<p class="smt-member-path"><code>sandkit.api.structures.forEachOfType() (worker)</code></p>

```ts
forEachOfType(structureTypeOrId: StructureRef, callback: (structure: Structure) => void): void
```

Defined in: [shared/api/structures.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L26)

Invoke a callback for every structure of the given type.

#### Parameters

##### structureTypeOrId

[`StructureRef`](#structureref)

Structure type value or string id.

##### callback

(`structure`: [`Structure`](#structure)) => `void`

Called once per matching structure instance.

#### Returns

`void`

#### Example

**Worker entry**

```ts
api.structures.forEachOfType("exampleStructure", (structure) => {
  processStructure(structure);
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getAtCell() :id=getatcell

<p class="smt-member-path"><code>sandkit.api.structures.getAtCell() (worker)</code></p>

```ts
getAtCell(...args: CellCoordinates): Structure | null
```

Defined in: [shared/api/structures.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L36)

Return the structure at a cell, or null when none.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`Structure`](#structure) \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getDefinitionByType() :id=getdefinitionbytype

<p class="smt-member-path"><code>sandkit.api.structures.getDefinitionByType() (worker)</code></p>

```ts
getDefinitionByType(structureType: StructureRef): any
```

Defined in: [shared/api/structures.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L45)

Return the mod-registered or built-in definition for a structure type.

#### Parameters

##### structureType

[`StructureRef`](#structureref)

Structure type value or string id.

#### Returns

`any`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getTypeById() :id=gettypebyid

<p class="smt-member-path"><code>sandkit.api.structures.getTypeById() (worker)</code></p>

```ts
getTypeById(structureId: string & object): StructureType
```

Defined in: [shared/api/structures.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L54)

Map a structure string id to its runtime type value.

#### Parameters

##### structureId

`string` & `object`

Structure string id.

#### Returns

[`StructureType`](#structuretype)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~getTypeFromId()~~

```ts
getTypeFromId(structureId: string & object): StructureType
```

Defined in: [shared/api/structures.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L61)

#### Parameters

##### structureId

`string` & `object`

#### Returns

[`StructureType`](#structuretype)

#### Deprecated

Use [getTypeById](#gettypebyid) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### hasBuiltAtCell() :id=hasbuiltatcell

<p class="smt-member-path"><code>sandkit.api.structures.hasBuiltAtCell() (worker)</code></p>

```ts
hasBuiltAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L71)

Return true when a completed structure occupies the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isType() :id=istype

<p class="smt-member-path"><code>sandkit.api.structures.isType() (worker)</code></p>

```ts
isType(structure: Structure | null, structureId: string & object): boolean
```

Defined in: [shared/api/structures.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L81)

Return true when the structure matches the given id.

#### Parameters

##### structure

[`Structure`](#structure) \| `null`

Structure instance, or null.

##### structureId

`string` & `object`

Structure string id to compare.

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isTypeAtCell() :id=istypeatcell

<p class="smt-member-path"><code>sandkit.api.structures.isTypeAtCell() (worker)</code></p>

```ts
isTypeAtCell(...args: [number, number, string & object]): boolean
```

Defined in: [shared/api/structures.d.ts:92](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L92)

Return true when the cell structure matches the given id.

#### Parameters

##### args

...\[`number`, `number`, `string` & `object`\]

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### setSpritesheetIndex() :id=setspritesheetindex

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndex() (worker)</code></p>

```ts
setSpritesheetIndex(structure: Structure, index: number): void
```

Defined in: [shared/api/structures.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L102)

Set the spritesheet frame index on a structure instance.

#### Parameters

##### structure

[`Structure`](#structure)

Target structure instance.

##### index

`number`

Spritesheet frame index.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### setSpritesheetIndexAtCell() :id=setspritesheetindexatcell

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexAtCell() (worker)</code></p>

```ts
setSpritesheetIndexAtCell(...args: [number, number, number]): void
```

Defined in: [shared/api/structures.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L113)

Set spritesheet frame index for the structure at a cell.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### setSpritesheetIndexByValue() :id=setspritesheetindexbyvalue

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexByValue() (worker)</code></p>

```ts
setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void
```

Defined in: [shared/api/structures.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L124)

Pick spritesheet index from a value and threshold table on a structure.

#### Parameters

##### structure

[`Structure`](#structure)

Target structure instance.

##### value

`number`

Numeric value mapped through thresholds.

##### thresholds

`number`[]

Ascending threshold values.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### setSpritesheetIndexByValueAtCell() :id=setspritesheetindexbyvalueatcell

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexByValueAtCell() (worker)</code></p>

```ts
setSpritesheetIndexByValueAtCell(...args: [number, number, number, number[]]): void
```

Defined in: [shared/api/structures.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L136)

Same as [setSpritesheetIndexByValue](#setspritesheetindexbyvalue) for the structure at a cell.

#### Parameters

##### args

...\[`number`, `number`, `number`, `number`[]\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### update() :id=update

<p class="smt-member-path"><code>sandkit.api.structures.update() (worker)</code></p>

```ts
update(structure: Structure, options?: object): void
```

Defined in: [shared/api/structures.d.ts:151](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L151)

Push structure field changes to simulation.

#### Parameters

##### structure

[`Structure`](#structure)

Structure instance to update.

##### options?

When `propagateToWorkers` is true, sync to worker threads.

###### propagateToWorkers?

`boolean`

#### Returns

`void`

#### Example

**Worker entry**

```ts
api.structures.update(structure, { propagateToWorkers: true });
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### updateData() :id=updatedata

<p class="smt-member-path"><code>sandkit.api.structures.updateData() (worker)</code></p>

```ts
updateData(structure: Structure, partial: any, options?: object): void
```

Defined in: [shared/api/structures.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L171)

Merge partial data onto a structure.

#### Parameters

##### structure

[`Structure`](#structure)

Structure instance to update.

##### partial

`any`

Fields to merge onto `structure.data`.

##### options?

When `propagateToWorkers` is true, sync to worker threads.

###### propagateToWorkers?

`boolean`

#### Returns

`void`

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

***

### ~~setData()~~

```ts
setData(structure: Structure, partial: any, options?: object): void
```

Defined in: [shared/api/structures.d.ts:178](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L178)

#### Parameters

##### structure

[`Structure`](#structure)

##### partial

`any`

##### options?

###### propagateToWorkers?

`boolean`

#### Returns

`void`

#### Deprecated

Use [updateData](#updatedata) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

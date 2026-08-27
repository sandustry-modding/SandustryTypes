# sandkit.api.structures (worker)

**`Internal`**

Shared `sandkit.api.structures` base — structure lookup and mutation.

 Base namespace reused by main and worker declarations.

## Namespaces <!-- {docsify-ignore} -->

- [processing](api/sandkit.api.structures.processing.worker.md)

## Interfaces <!-- {docsify-ignore} -->

### StructureData :id=structuredata

<p class="smt-member-path"><code>sandkit.api.structures.StructureData (worker)</code></p>

Defined in: [shared/api/structures.d.ts:163](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L163)

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

Defined in: [shared/api/structures.d.ts:164](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L164)

##### elementType?

```ts
optional elementType?: TaggedNumber<"elementType"> | null
```

Defined in: [shared/api/structures.d.ts:165](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L165)

***

### Structure :id=structure

<p class="smt-member-path"><code>sandkit.api.structures.Structure (worker)</code></p>

Defined in: [shared/api/structures.d.ts:170](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L170)

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

Defined in: [shared/api/structures.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L171)

##### y

```ts
y: number
```

Defined in: [shared/api/structures.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L172)

##### trapped?

```ts
optional trapped?: boolean
```

Defined in: [shared/api/structures.d.ts:173](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L173)

##### data?

```ts
optional data?: StructureData
```

Defined in: [shared/api/structures.d.ts:174](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L174)

## Type Aliases <!-- {docsify-ignore} -->

### StructureType :id=structuretype

<p class="smt-member-path"><code>sandkit.api.structures.StructureType (worker)</code></p>

```ts
StructureType = StructureType | TaggedNumber<"structureType">
```

Defined in: [shared/api/structures.d.ts:179](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L179)

Numeric structure type handle. Built-in enum values autocomplete.

***

### StructureId :id=structureid

<p class="smt-member-path"><code>sandkit.api.structures.StructureId (worker)</code></p>

```ts
StructureId = LooseString<never>
```

Defined in: [shared/api/structures.d.ts:181](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L181)

Mod or built-in structure string id.

***

### StructureRef :id=structureref

<p class="smt-member-path"><code>sandkit.api.structures.StructureRef (worker)</code></p>

```ts
StructureRef = StructureType | StructureId
```

Defined in: [shared/api/structures.d.ts:183](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L183)

Type handle or string id accepted by lookup helpers.

## Functions <!-- {docsify-ignore} -->

### forEachOfType() :id=foreachoftype

<p class="smt-member-path"><code>sandkit.api.structures.forEachOfType() (worker)</code></p>

```ts
forEachOfType(structureTypeOrId: StructureRef, callback: (structure: Structure) => void): void
```

Defined in: [shared/api/structures.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L18)

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

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.forEachOfType`

***

### getAtCell() :id=getatcell

<p class="smt-member-path"><code>sandkit.api.structures.getAtCell() (worker)</code></p>

```ts
getAtCell(...args: CellCoordinates): Structure | null
```

Defined in: [shared/api/structures.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L27)

Return the structure at a cell, or null when none.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`Structure`](#structure) \| `null`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.getAtCell`

***

### getDefinitionByType() :id=getdefinitionbytype

<p class="smt-member-path"><code>sandkit.api.structures.getDefinitionByType() (worker)</code></p>

```ts
getDefinitionByType(structureType: StructureRef): any
```

Defined in: [shared/api/structures.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L35)

Return the mod-registered or built-in definition for a structure type.

#### Parameters

##### structureType

[`StructureRef`](#structureref)

Structure type value or string id.

#### Returns

`any`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.getDefinitionByType`

***

### getTypeById() :id=gettypebyid

<p class="smt-member-path"><code>sandkit.api.structures.getTypeById() (worker)</code></p>

```ts
getTypeById(structureId: string & object): StructureType
```

Defined in: [shared/api/structures.d.ts:43](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L43)

Map a structure string id to its runtime type value.

#### Parameters

##### structureId

`string` & `object`

Structure string id.

#### Returns

[`StructureType`](#structuretype)

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.getTypeById`

***

### ~~getTypeFromId()~~

```ts
getTypeFromId(structureId: string & object): StructureType
```

Defined in: [shared/api/structures.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L49)

#### Parameters

##### structureId

`string` & `object`

#### Returns

[`StructureType`](#structuretype)

#### Deprecated

Use [getTypeById](#gettypebyid) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.structures.getTypeById`

***

### hasBuiltAtCell() :id=hasbuiltatcell

<p class="smt-member-path"><code>sandkit.api.structures.hasBuiltAtCell() (worker)</code></p>

```ts
hasBuiltAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L58)

Return true when a completed structure occupies the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.hasBuiltAtCell`

***

### isType() :id=istype

<p class="smt-member-path"><code>sandkit.api.structures.isType() (worker)</code></p>

```ts
isType(structure: Structure | null, structureId: string & object): boolean
```

Defined in: [shared/api/structures.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L67)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.isType`

***

### isTypeAtCell() :id=istypeatcell

<p class="smt-member-path"><code>sandkit.api.structures.isTypeAtCell() (worker)</code></p>

```ts
isTypeAtCell(...args: [number, number, string & object]): boolean
```

Defined in: [shared/api/structures.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L77)

Return true when the cell structure matches the given id.

#### Parameters

##### args

...\[`number`, `number`, `string` & `object`\]

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.isTypeAtCell`

***

### setSpritesheetIndex() :id=setspritesheetindex

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndex() (worker)</code></p>

```ts
setSpritesheetIndex(structure: Structure, index: number): void
```

Defined in: [shared/api/structures.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L86)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.setSpritesheetIndex`

***

### setSpritesheetIndexAtCell() :id=setspritesheetindexatcell

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexAtCell() (worker)</code></p>

```ts
setSpritesheetIndexAtCell(...args: [number, number, number]): void
```

Defined in: [shared/api/structures.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L96)

Set spritesheet frame index for the structure at a cell.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.setSpritesheetIndexAtCell`

***

### setSpritesheetIndexByValue() :id=setspritesheetindexbyvalue

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexByValue() (worker)</code></p>

```ts
setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void
```

Defined in: [shared/api/structures.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L106)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.setSpritesheetIndexByValue`

***

### setSpritesheetIndexByValueAtCell() :id=setspritesheetindexbyvalueatcell

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexByValueAtCell() (worker)</code></p>

```ts
setSpritesheetIndexByValueAtCell(...args: [number, number, number, number[]]): void
```

Defined in: [shared/api/structures.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L117)

Same as [setSpritesheetIndexByValue](#setspritesheetindexbyvalue) for the structure at a cell.

#### Parameters

##### args

...\[`number`, `number`, `number`, `number`[]\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.setSpritesheetIndexByValueAtCell`

***

### update() :id=update

<p class="smt-member-path"><code>sandkit.api.structures.update() (worker)</code></p>

```ts
update(structure: Structure, options?: object): void
```

Defined in: [shared/api/structures.d.ts:126](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L126)

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

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.update`

***

### updateData() :id=updatedata

<p class="smt-member-path"><code>sandkit.api.structures.updateData() (worker)</code></p>

```ts
updateData(structure: Structure, partial: any, options?: object): void
```

Defined in: [shared/api/structures.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L136)

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

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.updateData`

***

### ~~setData()~~

```ts
setData(structure: Structure, partial: any, options?: object): void
```

Defined in: [shared/api/structures.d.ts:142](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L142)

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

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.structures.updateData`

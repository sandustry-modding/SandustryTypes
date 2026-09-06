# sandkit.api.structures (worker)

**`Internal`**

Shared `sandkit.api.structures` base — structure lookup and mutation.

 Base namespace reused by main and worker declarations.

## Namespaces <!-- {docsify-ignore} -->

- [processing](api/sandkit.api.structures.processing.worker.md)

## Interfaces <!-- {docsify-ignore} -->

### StructureData :id=structuredata

<p class="smt-member-path"><code>sandkit.api.structures.StructureData (worker)</code></p>
Defined in: [shared/api/structures.d.ts:218](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L218)

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

Defined in: [shared/api/structures.d.ts:219](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L219)

##### elementType?

```ts
optional elementType?: TaggedNumber<"elementType"> | null
```

Defined in: [shared/api/structures.d.ts:220](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L220)

***

### Structure :id=structure

<p class="smt-member-path"><code>sandkit.api.structures.Structure (worker)</code></p>
Defined in: [shared/api/structures.d.ts:225](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L225)

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

Defined in: [shared/api/structures.d.ts:226](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L226)

##### y

```ts
y: number
```

Defined in: [shared/api/structures.d.ts:227](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L227)

##### trapped?

```ts
optional trapped?: boolean
```

Defined in: [shared/api/structures.d.ts:228](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L228)

##### data?

```ts
optional data?: StructureData
```

Defined in: [shared/api/structures.d.ts:229](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L229)

## Type Aliases <!-- {docsify-ignore} -->

### StructureType :id=structuretype

```ts
sandkit.api.structures.StructureType = StructureType | TaggedNumber<"structureType">
```

Defined in: [shared/api/structures.d.ts:234](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L234)

Numeric structure type handle. Built-in enum values autocomplete.

***

### StructureId :id=structureid

```ts
sandkit.api.structures.StructureId = LooseString<never>
```

Defined in: [shared/api/structures.d.ts:236](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L236)

Mod or built-in structure string id.

***

### StructureRef :id=structureref

```ts
sandkit.api.structures.StructureRef = StructureType | StructureId
```

Defined in: [shared/api/structures.d.ts:238](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L238)

Type handle or string id accepted by lookup helpers.

## Functions <!-- {docsify-ignore} -->

### forEachOfType() :id=foreachoftype

```ts
sandkit.api.structures.forEachOfType(structureTypeOrId: StructureRef, callback: (structure: Structure) => void): void
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

```ts
sandkit.api.structures.getAtCell(...args: CellCoordinates): Structure | null
```

Defined in: [shared/api/structures.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L39)

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

```ts
sandkit.api.structures.getDefinitionByType(structureType: StructureRef): any
```

Defined in: [shared/api/structures.d.ts:48](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L48)

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

```ts
sandkit.api.structures.getTypeById(structureId: string & object): StructureType
```

Defined in: [shared/api/structures.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L57)

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

### ~~getTypeFromId()~~ :id=gettypefromid

```ts
sandkit.api.structures.getTypeFromId(structureId: string & object): StructureType
```

Defined in: [shared/api/structures.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L64)

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

```ts
sandkit.api.structures.hasBuiltAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L74)

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

```ts
sandkit.api.structures.isType(structure: Structure | null, structureId: string & object): boolean
```

Defined in: [shared/api/structures.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L84)

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

```ts
sandkit.api.structures.isTypeAtCell(...args: [number, number, string & object]): boolean
```

Defined in: [shared/api/structures.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L95)

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

```ts
sandkit.api.structures.setSpritesheetIndex(structure: Structure, index: number): void
```

Defined in: [shared/api/structures.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L105)

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

```ts
sandkit.api.structures.setSpritesheetIndexAtCell(...args: [number, number, number]): void
```

Defined in: [shared/api/structures.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L116)

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

```ts
sandkit.api.structures.setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void
```

Defined in: [shared/api/structures.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L127)

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

```ts
sandkit.api.structures.setSpritesheetIndexByValueAtCell(...args: [number, number, number, number[]]): void
```

Defined in: [shared/api/structures.d.ts:143](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L143)

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

```ts
sandkit.api.structures.update(structure: Structure, options?: object): void
```

Defined in: [shared/api/structures.d.ts:160](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L160)

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

```ts
sandkit.api.structures.updateData(structure: Structure, partial: any, options?: object): void
```

Defined in: [shared/api/structures.d.ts:180](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L180)

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

### ~~setData()~~ :id=setdata

```ts
sandkit.api.structures.setData(structure: Structure, partial: any, options?: object): void
```

Defined in: [shared/api/structures.d.ts:191](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/structures.d.ts#L191)

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

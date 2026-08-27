# sandkit.api.structures (worker)

**`Internal`**

Shared `sandkit.api.structures` base — structure lookup and mutation.

 Base namespace reused by main and worker declarations.

## Namespaces <!-- {docsify-ignore} -->

- [processing](api/sandkit.api.structures.processing.worker.md)

## Interfaces <!-- {docsify-ignore} -->

### sandkit.api.structures.StructureData (worker) :id=structuredata

Defined in: [shared/api/structures.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L117)

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

Defined in: [shared/api/structures.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L118)

##### elementType?

```ts
optional elementType?: TaggedNumber<"elementType"> | null
```

Defined in: [shared/api/structures.d.ts:119](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L119)

***

### sandkit.api.structures.Structure (worker) :id=structure

Defined in: [shared/api/structures.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L124)

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

Defined in: [shared/api/structures.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L125)

##### y

```ts
y: number
```

Defined in: [shared/api/structures.d.ts:126](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L126)

##### trapped?

```ts
optional trapped?: boolean
```

Defined in: [shared/api/structures.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L127)

##### data?

```ts
optional data?: StructureData
```

Defined in: [shared/api/structures.d.ts:128](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L128)

## Type Aliases <!-- {docsify-ignore} -->

### sandkit.api.structures.StructureType (worker) :id=structuretype

```ts
StructureType = StructureType | TaggedNumber<"structureType">
```

Defined in: [shared/api/structures.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L133)

Numeric structure type handle. Built-in enum values autocomplete.

***

### sandkit.api.structures.StructureId (worker) :id=structureid

```ts
StructureId = LooseString<never>
```

Defined in: [shared/api/structures.d.ts:135](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L135)

Mod or built-in structure string id.

***

### sandkit.api.structures.StructureRef (worker) :id=structureref

```ts
StructureRef = StructureType | StructureId
```

Defined in: [shared/api/structures.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L137)

Type handle or string id accepted by lookup helpers.

## Functions <!-- {docsify-ignore} -->

### sandkit.api.structures.forEachOfType() (worker) :id=foreachoftype

```ts
forEachOfType(structureTypeOrId: StructureRef, callback: (structure: Structure) => void): void
```

Defined in: [shared/api/structures.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L16)

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

***

### sandkit.api.structures.getAtCell() (worker) :id=getatcell

```ts
getAtCell(...args: CellCoordinates): Structure | null
```

Defined in: [shared/api/structures.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L23)

Return the structure at a cell, or null when none.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`Structure`](#structure) \| `null`

***

### sandkit.api.structures.getDefinitionByType() (worker) :id=getdefinitionbytype

```ts
getDefinitionByType(structureType: StructureRef): any
```

Defined in: [shared/api/structures.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L29)

Return the mod-registered or built-in definition for a structure type.

#### Parameters

##### structureType

[`StructureRef`](#structureref)

Structure type value or string id.

#### Returns

`any`

***

### sandkit.api.structures.getTypeFromId() (worker) :id=gettypefromid

```ts
getTypeFromId(structureId: string & object): StructureType
```

Defined in: [shared/api/structures.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L35)

Map a structure string id to its runtime type value.

#### Parameters

##### structureId

`string` & `object`

Structure string id.

#### Returns

[`StructureType`](#structuretype)

***

### sandkit.api.structures.hasBuiltAtCell() (worker) :id=hasbuiltatcell

```ts
hasBuiltAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/structures.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L42)

Return true when a completed structure occupies the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

***

### sandkit.api.structures.isType() (worker) :id=istype

```ts
isType(structure: Structure | null, structureId: string & object): boolean
```

Defined in: [shared/api/structures.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L49)

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

***

### sandkit.api.structures.isTypeAtCell() (worker) :id=istypeatcell

```ts
isTypeAtCell(...args: [number, number, string & object]): boolean
```

Defined in: [shared/api/structures.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L57)

Return true when the cell structure matches the given id.

#### Parameters

##### args

...\[`number`, `number`, `string` & `object`\]

#### Returns

`boolean`

***

### sandkit.api.structures.setSpritesheetIndex() (worker) :id=setspritesheetindex

```ts
setSpritesheetIndex(structure: Structure, index: number): void
```

Defined in: [shared/api/structures.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L64)

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

***

### sandkit.api.structures.setSpritesheetIndexAtCell() (worker) :id=setspritesheetindexatcell

```ts
setSpritesheetIndexAtCell(...args: [number, number, number]): void
```

Defined in: [shared/api/structures.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L72)

Set spritesheet frame index for the structure at a cell.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

***

### sandkit.api.structures.setSpritesheetIndexByValue() (worker) :id=setspritesheetindexbyvalue

```ts
setSpritesheetIndexByValue(structure: Structure, value: number, thresholds: number[]): void
```

Defined in: [shared/api/structures.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L80)

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

***

### sandkit.api.structures.setSpritesheetIndexByValueAtCell() (worker) :id=setspritesheetindexbyvalueatcell

```ts
setSpritesheetIndexByValueAtCell(...args: [number, number, number, number[]]): void
```

Defined in: [shared/api/structures.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L89)

Same as [setSpritesheetIndexByValue](#setspritesheetindexbyvalue) for the structure at a cell.

#### Parameters

##### args

...\[`number`, `number`, `number`, `number`[]\]

#### Returns

`void`

***

### sandkit.api.structures.update() (worker) :id=update

```ts
update(structure: Structure, options?: object): void
```

Defined in: [shared/api/structures.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L96)

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

***

### sandkit.api.structures.setData() (worker) :id=setdata

```ts
setData(structure: Structure, partial: any, options?: object): void
```

Defined in: [shared/api/structures.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/structures.d.ts#L104)

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

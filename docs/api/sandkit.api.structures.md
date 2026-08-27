# sandkit.api.structures

## Namespaces <!-- {docsify-ignore} -->

- [recipes](api/sandkit.api.structures.recipes.md)
- [processing](api/sandkit.api.structures.processing.md)

## Interfaces <!-- {docsify-ignore} -->

### StructureBuildMode :id=structurebuildmode

<p class="smt-member-path"><code>sandkit.api.structures.StructureBuildMode</code></p>

Defined in: [sandkit/api/structures.d.ts:315](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L315)

Build mode entry for a structure definition.

#### Properties

##### type

```ts
type: string
```

Defined in: [sandkit/api/structures.d.ts:316](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L316)

##### directions?

```ts
optional directions?: string[]
```

Defined in: [sandkit/api/structures.d.ts:317](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L317)

***

### StructureVariant :id=structurevariant

<p class="smt-member-path"><code>sandkit.api.structures.StructureVariant</code></p>

Defined in: [sandkit/api/structures.d.ts:321](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L321)

Rotated variant entry for a structure definition.

#### Properties

##### id

```ts
id: StructureRef
```

Defined in: [sandkit/api/structures.d.ts:322](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L322)

##### angles

```ts
angles: number[]
```

Defined in: [sandkit/api/structures.d.ts:323](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L323)

***

### StructureRender :id=structurerender

<p class="smt-member-path"><code>sandkit.api.structures.StructureRender</code></p>

Defined in: [sandkit/api/structures.d.ts:327](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L327)

Render settings for a structure definition.

#### Properties

##### imageName?

```ts
optional imageName?: string
```

Defined in: [sandkit/api/structures.d.ts:328](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L328)

##### size?

```ts
optional size?: object
```

Defined in: [sandkit/api/structures.d.ts:329](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L329)

###### width

```ts
width: number
```

###### height

```ts
height: number
```

##### offset?

```ts
optional offset?: object
```

Defined in: [sandkit/api/structures.d.ts:330](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L330)

###### x

```ts
x: number
```

###### y

```ts
y: number
```

***

### SandkitStructureDefinition :id=sandkitstructuredefinition

<p class="smt-member-path"><code>sandkit.api.structures.SandkitStructureDefinition</code></p>

Defined in: [sandkit/api/structures.d.ts:334](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L334)

Full structure definition registered with the game.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### id

```ts
id: string & object
```

Defined in: [sandkit/api/structures.d.ts:335](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L335)

##### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/structures.d.ts:336](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L336)

##### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [sandkit/api/structures.d.ts:337](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L337)

##### categoryKey?

```ts
optional categoryKey?: string
```

Defined in: [sandkit/api/structures.d.ts:338](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L338)

##### order?

```ts
optional order?: number
```

Defined in: [sandkit/api/structures.d.ts:339](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L339)

##### buildModes?

```ts
optional buildModes?: StructureBuildMode[]
```

Defined in: [sandkit/api/structures.d.ts:340](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L340)

##### shape?

```ts
optional shape?: number[][]
```

Defined in: [sandkit/api/structures.d.ts:341](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L341)

##### variants?

```ts
optional variants?: StructureVariant[]
```

Defined in: [sandkit/api/structures.d.ts:342](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L342)

##### render?

```ts
optional render?: StructureRender
```

Defined in: [sandkit/api/structures.d.ts:343](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L343)

##### defaultData?

```ts
optional defaultData?: Record<string, unknown>
```

Defined in: [sandkit/api/structures.d.ts:344](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L344)

***

### StructureBuildOptions :id=structurebuildoptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureBuildOptions</code></p>

Defined in: [sandkit/api/structures.d.ts:349](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L349)

Options passed to [buildAtCell](#buildatcell).

#### Indexable

```ts
[key: string]: unknown
```

***

### StructureRemovalOptions :id=structureremovaloptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureRemovalOptions</code></p>

Defined in: [sandkit/api/structures.d.ts:354](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L354)

Options passed to [removeAtCell](#removeatcell).

#### Properties

##### removeCells?

```ts
optional removeCells?: boolean
```

Defined in: [sandkit/api/structures.d.ts:356](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L356)

Also remove underlying terrain cells in the footprint.

##### skipVisuals?

```ts
optional skipVisuals?: boolean
```

Defined in: [sandkit/api/structures.d.ts:358](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L358)

Skip visual teardown effects.

***

### StructureBulkRemovalOptions :id=structurebulkremovaloptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureBulkRemovalOptions</code></p>

Defined in: [sandkit/api/structures.d.ts:362](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L362)

Options passed to bulk structure removal helpers.

#### Properties

##### removeCells?

```ts
optional removeCells?: boolean
```

Defined in: [sandkit/api/structures.d.ts:363](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L363)

##### skipVisuals?

```ts
optional skipVisuals?: boolean
```

Defined in: [sandkit/api/structures.d.ts:364](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L364)

##### preserveUnselectable?

```ts
optional preserveUnselectable?: boolean
```

Defined in: [sandkit/api/structures.d.ts:366](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L366)

When set, only remove structures at these positions.

##### onlyPositions?

```ts
optional onlyPositions?: Vector2[]
```

Defined in: [sandkit/api/structures.d.ts:367](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L367)

***

### StructureProcessingContext :id=structureprocessingcontext

<p class="smt-member-path"><code>sandkit.api.structures.StructureProcessingContext</code></p>

Defined in: [sandkit/api/structures.d.ts:375](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L375)

Context passed to structure processing callbacks.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.processing.register`

#### Methods

##### getResolvedTypeAtCell()

```ts
getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [sandkit/api/structures.d.ts:381](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L381)

Return the resolved element type at a cell, or null.

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

[`ElementType`](api/sandkit.api.elements.md#elementtype) \| `null`

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.processing.register`

##### ~~getElementTypeAtCell()~~

```ts
getElementTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [sandkit/api/structures.d.ts:387](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L387)

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

[`ElementType`](api/sandkit.api.elements.md#elementtype) \| `null`

###### Deprecated

Use [getResolvedTypeAtCell](#getresolvedtypeatcell) instead.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias in `api.structures.processing.register` context

##### isCellEmptyAtCell()

```ts
isCellEmptyAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:394](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L394)

Return true when the cell has no element or terrain.

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

`boolean`

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.processing.register`

##### ~~isCellEmpty()~~

```ts
isCellEmpty(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:400](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L400)

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

`boolean`

###### Deprecated

Use [isCellEmptyAtCell](#iscellemptyatcell) instead.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias in `api.structures.processing.register` context

##### commit()

```ts
commit(mutations: unknown): void
```

Defined in: [sandkit/api/structures.d.ts:408](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L408)

Commit batched grid mutations from the processing callback.

###### Parameters

###### mutations

`unknown`

Mutation writer payload accepted by the runtime.

###### Returns

`void`

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.processing.register`

***

### ~~StructureProcessorDefinitionV1~~

Defined in: [sandkit/api/structures.d.ts:415](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L415)

#### Deprecated

Use [StructureProcessingDefinitionV1](#structureprocessingdefinitionv1) with [processing.register](api/sandkit.api.structures.processing.md#register) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.structures.processing.register`

#### Properties

##### ~~intervalMs~~

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:417](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L417)

Tick interval in milliseconds. Must be > 0.

##### ~~process~~

```ts
process: (structure: Structure, context: StructureProcessingContext) => void
```

Defined in: [sandkit/api/structures.d.ts:419](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L419)

Synchronous callback invoked for each structure instance.

###### Parameters

###### structure

[`Structure`](api/sandkit.api.structures.worker.md#structure)

###### context

[`StructureProcessingContext`](#structureprocessingcontext)

###### Returns

`void`

***

### PlacementConfigIntegerField :id=placementconfigintegerfield

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigIntegerField</code></p>

Defined in: [sandkit/api/structures.d.ts:428](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L428)

Integer placement field with optional bounds.

#### Properties

##### type

```ts
type: "integer"
```

Defined in: [sandkit/api/structures.d.ts:429](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L429)

##### id

```ts
id: string
```

Defined in: [sandkit/api/structures.d.ts:430](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L430)

##### labelKey

```ts
labelKey: string
```

Defined in: [sandkit/api/structures.d.ts:431](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L431)

##### min?

```ts
optional min?: number
```

Defined in: [sandkit/api/structures.d.ts:432](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L432)

##### max?

```ts
optional max?: number
```

Defined in: [sandkit/api/structures.d.ts:433](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L433)

##### default?

```ts
optional default?: number
```

Defined in: [sandkit/api/structures.d.ts:434](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L434)

***

### PlacementConfigChoiceField :id=placementconfigchoicefield

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigChoiceField</code></p>

Defined in: [sandkit/api/structures.d.ts:438](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L438)

Choice placement field with labeled options.

#### Properties

##### type

```ts
type: "choice"
```

Defined in: [sandkit/api/structures.d.ts:439](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L439)

##### id

```ts
id: string
```

Defined in: [sandkit/api/structures.d.ts:440](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L440)

##### labelKey

```ts
labelKey: string
```

Defined in: [sandkit/api/structures.d.ts:441](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L441)

##### options

```ts
options: readonly object[]
```

Defined in: [sandkit/api/structures.d.ts:442](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L442)

***

### PlacementConfigDefinition :id=placementconfigdefinition

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigDefinition</code></p>

Defined in: [sandkit/api/structures.d.ts:449](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L449)

Placement rule definition for a structure type.

#### Properties

##### structureId

```ts
structureId: string & object
```

Defined in: [sandkit/api/structures.d.ts:450](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L450)

##### fields

```ts
fields: PlacementConfigField[]
```

Defined in: [sandkit/api/structures.d.ts:451](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L451)

***

### WeightedRefineryRecipeDefinitionV1 :id=weightedrefineryrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.WeightedRefineryRecipeDefinitionV1</code></p>

Defined in: [sandkit/api/structures.d.ts:462](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L462)

Weighted refinery recipe definition shape.

#### Properties

##### input

```ts
input: ElementType
```

Defined in: [sandkit/api/structures.d.ts:463](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L463)

##### outputs

```ts
outputs: WeightedRecipeOutput[]
```

Defined in: [sandkit/api/structures.d.ts:464](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L464)

***

### StructureProcessingDefinitionV1 :id=structureprocessingdefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.StructureProcessingDefinitionV1</code></p>

Defined in: [sandkit/api/structures.d.ts:468](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L468)

Custom structure processing definition shape.

#### Properties

##### structureType

```ts
structureType: StructureRef
```

Defined in: [sandkit/api/structures.d.ts:469](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L469)

##### intervalMs

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:470](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L470)

##### process

```ts
process: (structure: Structure, context: StructureProcessingContext) => void
```

Defined in: [sandkit/api/structures.d.ts:471](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L471)

###### Parameters

###### structure

[`Structure`](api/sandkit.api.structures.worker.md#structure)

###### context

[`StructureProcessingContext`](#structureprocessingcontext)

###### Returns

`void`

## Type Aliases <!-- {docsify-ignore} -->

### PlacementConfigField :id=placementconfigfield

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigField</code></p>

```ts
PlacementConfigField = PlacementConfigIntegerField | PlacementConfigChoiceField
```

Defined in: [sandkit/api/structures.d.ts:423](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L423)

Placement hotbar field definition.

***

### PlanterBoxRecipeDefinitionV1 :id=planterboxrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.PlanterBoxRecipeDefinitionV1</code></p>

```ts
PlanterBoxRecipeDefinitionV1 = PlanterBoxRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:455](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L455)

Planter box recipe definition shape.

***

### ShakerRecipeDefinitionV1 :id=shakerrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.ShakerRecipeDefinitionV1</code></p>

```ts
ShakerRecipeDefinitionV1 = ShakerRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:457](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L457)

Shaker recipe definition shape.

***

### KineticPressRecipeDefinitionV1 :id=kineticpressrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.KineticPressRecipeDefinitionV1</code></p>

```ts
KineticPressRecipeDefinitionV1 = KineticPressRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:459](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L459)

Kinetic press recipe definition shape.

## Functions <!-- {docsify-ignore} -->

### register() :id=register

<p class="smt-member-path"><code>sandkit.api.structures.register()</code></p>

```ts
register(definition: SandkitStructureDefinition, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L71)

Register a new structure definition.

#### Parameters

##### definition

[`SandkitStructureDefinition`](#sandkitstructuredefinition)

Full structure definition.

##### options?

When `useRawShape` is true, keep the shape matrix as-is.

###### useRawShape?

`boolean`

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.register`

***

### updateDefinition() :id=updatedefinition

<p class="smt-member-path"><code>sandkit.api.structures.updateDefinition()</code></p>

```ts
updateDefinition(structureTypeOrId: StructureRef, partial: Partial<SandkitStructureDefinition>, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:81](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L81)

Patch fields on an existing structure definition.

#### Parameters

##### structureTypeOrId

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

Structure type value or string id.

##### partial

`Partial`\<[`SandkitStructureDefinition`](#sandkitstructuredefinition)\>

Fields to merge onto the definition.

##### options?

When `useRawShape` is true, keep the shape matrix as-is.

###### useRawShape?

`boolean`

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.updateDefinition`

***

### registerVariant() :id=registervariant

<p class="smt-member-path"><code>sandkit.api.structures.registerVariant()</code></p>

```ts
registerVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L91)

Add a rotated variant to a base structure type.

#### Parameters

##### baseStructureTypeOrId

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

Base structure type or id.

##### variant

Variant id and supported rotation angles.

###### id

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

###### angles

`number`[]

##### options?

Optional build-mode wiring for the variant.

###### addBuildMode?

`unknown`

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.registerVariant`

***

### ~~addVariant()~~

```ts
addVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L97)

#### Parameters

##### baseStructureTypeOrId

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

##### variant

###### id

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

###### angles

`number`[]

##### options?

###### addBuildMode?

`unknown`

#### Returns

`void`

#### Deprecated

Use [registerVariant](#registervariant) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.structures.registerVariant`

***

### registerPlacementConfig() :id=registerplacementconfig

<p class="smt-member-path"><code>sandkit.api.structures.registerPlacementConfig()</code></p>

```ts
registerPlacementConfig(definition: PlacementConfigDefinition): void
```

Defined in: [sandkit/api/structures.d.ts:105](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L105)

Register placement rules for a structure.

#### Parameters

##### definition

[`PlacementConfigDefinition`](#placementconfigdefinition)

Hotbar placement field configuration.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.registerPlacementConfig`

***

### getAvailableTypes() :id=getavailabletypes

<p class="smt-member-path"><code>sandkit.api.structures.getAvailableTypes()</code></p>

```ts
getAvailableTypes(): Set<StructureRef>
```

Defined in: [sandkit/api/structures.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L112)

Return structure types available for building.

#### Returns

`Set`\<[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)\>

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.getAvailableTypes`

***

### ~~getUnlockedTypes()~~

```ts
getUnlockedTypes(): Set<StructureRef>
```

Defined in: [sandkit/api/structures.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L118)

#### Returns

`Set`\<[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)\>

#### Deprecated

Use [getAvailableTypes](#getavailabletypes) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.structures.getAvailableTypes`

***

### isBlockedByPlayerAtCell() :id=isblockedbyplayeratcell

<p class="smt-member-path"><code>sandkit.api.structures.isBlockedByPlayerAtCell()</code></p>

```ts
isBlockedByPlayerAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L127)

Return true when the player blocks building at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.isBlockedByPlayerAtCell`

***

### isLauncherAtCell() :id=islauncheratcell

<p class="smt-member-path"><code>sandkit.api.structures.isLauncherAtCell()</code></p>

```ts
isLauncherAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L136)

Return true when a launcher structure is at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.isLauncherAtCell`

***

### isLockedByType() :id=islockedbytype

<p class="smt-member-path"><code>sandkit.api.structures.isLockedByType()</code></p>

```ts
isLockedByType(structureType: StructureRef): boolean
```

Defined in: [sandkit/api/structures.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L147)

Return structure lock state for a type.

Official docs list [isUnlockedByType](#isunlockedbytype) as a deprecated alias of this
function (same implementation and return value; names differ only).

#### Parameters

##### structureType

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

Structure type value or string id.

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.isLockedByType`

***

### ~~isUnlockedByType()~~

```ts
isUnlockedByType(structureType: StructureRef): boolean
```

Defined in: [sandkit/api/structures.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L153)

#### Parameters

##### structureType

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

#### Returns

`boolean`

#### Deprecated

Use [isLockedByType](#islockedbytype) instead. Same function as [isLockedByType](#islockedbytype); return value is not inverted.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.structures.isLockedByType`

***

### mapValueToSpritesheetIndex() :id=mapvaluetospritesheetindex

<p class="smt-member-path"><code>sandkit.api.structures.mapValueToSpritesheetIndex()</code></p>

```ts
mapValueToSpritesheetIndex(value: number, thresholds: number[]): number
```

Defined in: [sandkit/api/structures.d.ts:163](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L163)

Map a numeric value through thresholds to a spritesheet index.

#### Parameters

##### value

`number`

Numeric value to map.

##### thresholds

`number`[]

Ascending threshold values.

#### Returns

`number`

Spritesheet frame index.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.mapValueToSpritesheetIndex`

***

### buildAtCell() :id=buildatcell

<p class="smt-member-path"><code>sandkit.api.structures.buildAtCell()</code></p>

```ts
buildAtCell(...args: number, number, [StructureRef, StructureBuildOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:174](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L174)

Build a structure at a cell. Main-thread writes are deferred.

#### Parameters

##### args

...\[`number`, `number`, [`StructureRef`](api/sandkit.api.structures.worker.md#structureref), [`StructureBuildOptions`](#structurebuildoptions)\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.buildAtCell`

***

### ~~buildAtCellWhenIdle()~~

```ts
buildAtCellWhenIdle(...args: number, number, [StructureRef, StructureBuildOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:180](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L180)

#### Parameters

##### args

...\[`number`, `number`, [`StructureRef`](api/sandkit.api.structures.worker.md#structureref), [`StructureBuildOptions`](#structurebuildoptions)\]

#### Returns

`void`

#### Deprecated

Use [buildAtCell](#buildatcell) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.structures.buildAtCell`

***

### removeAtCell() :id=removeatcell

<p class="smt-member-path"><code>sandkit.api.structures.removeAtCell()</code></p>

```ts
removeAtCell(...args: number, number, [StructureRemovalOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:190](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L190)

Remove a structure at a cell. Main-thread writes are deferred.

#### Parameters

##### args

...\[`number`, `number`, [`StructureRemovalOptions`](#structureremovaloptions)\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.removeAtCell`

***

### ~~removeAtCellWhenIdle()~~

```ts
removeAtCellWhenIdle(...args: number, number, [StructureRemovalOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:196](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L196)

#### Parameters

##### args

...\[`number`, `number`, [`StructureRemovalOptions`](#structureremovaloptions)\]

#### Returns

`void`

#### Deprecated

Use [removeAtCell](#removeatcell) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.structures.removeAtCell`

***

### removeBetweenCells() :id=removebetweencells

<p class="smt-member-path"><code>sandkit.api.structures.removeBetweenCells()</code></p>

```ts
removeBetweenCells(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:208](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L208)

Remove structures between two cells. Main-thread writes are deferred.

#### Parameters

##### startCellX

`number`

Start cell column.

##### startCellY

`number`

Start cell row.

##### endCellX

`number`

End cell column.

##### endCellY

`number`

End cell row.

##### options?

[`StructureBulkRemovalOptions`](#structurebulkremovaloptions)

Optional bulk-removal flags.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.removeBetweenCells`

***

### ~~removeBetweenCellsWhenIdle()~~

```ts
removeBetweenCellsWhenIdle(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L214)

#### Parameters

##### startCellX

`number`

##### startCellY

`number`

##### endCellX

`number`

##### endCellY

`number`

##### options?

[`StructureBulkRemovalOptions`](#structurebulkremovaloptions)

#### Returns

`void`

#### Deprecated

Use [removeBetweenCells](#removebetweencells) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.structures.removeBetweenCells`

***

### removeAtCells() :id=removeatcells

<p class="smt-member-path"><code>sandkit.api.structures.removeAtCells()</code></p>

```ts
removeAtCells(positions: Vector2[], options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:223](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L223)

Remove structures at many cells. Main-thread writes are deferred.

#### Parameters

##### positions

[`Vector2`](api/shared.player.md#vector2)[]

Cell positions to clear.

##### options?

[`StructureBulkRemovalOptions`](#structurebulkremovaloptions)

Optional bulk-removal flags.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.removeAtCells`

***

### ~~removeAtCellsWhenIdle()~~

```ts
removeAtCellsWhenIdle(positions: Vector2[], options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:229](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L229)

#### Parameters

##### positions

[`Vector2`](api/shared.player.md#vector2)[]

##### options?

[`StructureBulkRemovalOptions`](#structurebulkremovaloptions)

#### Returns

`void`

#### Deprecated

Use [removeAtCells](#removeatcells) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.structures.removeAtCells`

***

### ~~addProcessor()~~

```ts
addProcessor(structureId: StructureRef, definition: StructureProcessorDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:235](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L235)

#### Parameters

##### structureId

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

##### definition

[`StructureProcessorDefinitionV1`](#structureprocessordefinitionv1)

#### Returns

`void`

#### Deprecated

Use [processing.register](api/sandkit.api.structures.processing.md#register) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.structures.processing.register`

## References <!-- {docsify-ignore} -->

### forEachOfType :id=foreachoftype

<p class="smt-member-path"><code>sandkit.api.structures.forEachOfType</code></p>

Re-exports [forEachOfType](api/sandkit.api.structures.worker.md#foreachoftype)

***

### getAtCell :id=getatcell

<p class="smt-member-path"><code>sandkit.api.structures.getAtCell</code></p>

Re-exports [getAtCell](api/sandkit.api.structures.worker.md#getatcell)

***

### getDefinitionByType :id=getdefinitionbytype

<p class="smt-member-path"><code>sandkit.api.structures.getDefinitionByType</code></p>

Re-exports [getDefinitionByType](api/sandkit.api.structures.worker.md#getdefinitionbytype)

***

### getTypeById :id=gettypebyid

<p class="smt-member-path"><code>sandkit.api.structures.getTypeById</code></p>

Re-exports [getTypeById](api/sandkit.api.structures.worker.md#gettypebyid)

***

### hasBuiltAtCell :id=hasbuiltatcell

<p class="smt-member-path"><code>sandkit.api.structures.hasBuiltAtCell</code></p>

Re-exports [hasBuiltAtCell](api/sandkit.api.structures.worker.md#hasbuiltatcell)

***

### isType :id=istype

<p class="smt-member-path"><code>sandkit.api.structures.isType</code></p>

Re-exports [isType](api/sandkit.api.structures.worker.md#istype)

***

### isTypeAtCell :id=istypeatcell

<p class="smt-member-path"><code>sandkit.api.structures.isTypeAtCell</code></p>

Re-exports [isTypeAtCell](api/sandkit.api.structures.worker.md#istypeatcell)

***

### setSpritesheetIndex :id=setspritesheetindex

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndex</code></p>

Re-exports [setSpritesheetIndex](api/sandkit.api.structures.worker.md#setspritesheetindex)

***

### setSpritesheetIndexAtCell :id=setspritesheetindexatcell

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexAtCell</code></p>

Re-exports [setSpritesheetIndexAtCell](api/sandkit.api.structures.worker.md#setspritesheetindexatcell)

***

### setSpritesheetIndexByValue :id=setspritesheetindexbyvalue

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexByValue</code></p>

Re-exports [setSpritesheetIndexByValue](api/sandkit.api.structures.worker.md#setspritesheetindexbyvalue)

***

### setSpritesheetIndexByValueAtCell :id=setspritesheetindexbyvalueatcell

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexByValueAtCell</code></p>

Re-exports [setSpritesheetIndexByValueAtCell](api/sandkit.api.structures.worker.md#setspritesheetindexbyvalueatcell)

***

### update :id=update

<p class="smt-member-path"><code>sandkit.api.structures.update</code></p>

Re-exports [update](api/sandkit.api.structures.worker.md#update)

***

### updateData :id=updatedata

<p class="smt-member-path"><code>sandkit.api.structures.updateData</code></p>

Re-exports [updateData](api/sandkit.api.structures.worker.md#updatedata)

***

### Structure :id=structure

<p class="smt-member-path"><code>sandkit.api.structures.Structure</code></p>

Re-exports [Structure](api/sandkit.api.structures.worker.md#structure)

***

### StructureType :id=structuretype

<p class="smt-member-path"><code>sandkit.api.structures.StructureType</code></p>

Re-exports [StructureType](api/sandkit.api.structures.worker.md#structuretype)

***

### StructureId :id=structureid

<p class="smt-member-path"><code>sandkit.api.structures.StructureId</code></p>

Re-exports [StructureId](api/sandkit.api.structures.worker.md#structureid)

***

### StructureRef :id=structureref

<p class="smt-member-path"><code>sandkit.api.structures.StructureRef</code></p>

Re-exports [StructureRef](api/sandkit.api.structures.worker.md#structureref)

***

### getTypeFromId :id=gettypefromid

<p class="smt-member-path"><code>sandkit.api.structures.getTypeFromId</code></p>

Re-exports [getTypeFromId](api/sandkit.api.structures.worker.md#gettypefromid)

***

### setData :id=setdata

<p class="smt-member-path"><code>sandkit.api.structures.setData</code></p>

Re-exports [setData](api/sandkit.api.structures.worker.md#setdata)

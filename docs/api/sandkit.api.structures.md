# sandkit.api.structures

## Namespaces <!-- {docsify-ignore} -->

- [recipes](api/sandkit.api.structures.recipes.md)
- [processing](api/sandkit.api.structures.processing.md)

## Interfaces <!-- {docsify-ignore} -->

### sandkit.api.structures.StructureBuildMode :id=structurebuildmode

Defined in: [sandkit/api/structures.d.ts:206](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L206)

Build mode entry for a structure definition.

#### Properties

##### type

```ts
type: string
```

Defined in: [sandkit/api/structures.d.ts:207](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L207)

##### directions?

```ts
optional directions?: string[]
```

Defined in: [sandkit/api/structures.d.ts:208](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L208)

***

### sandkit.api.structures.StructureVariant :id=structurevariant

Defined in: [sandkit/api/structures.d.ts:212](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L212)

Rotated variant entry for a structure definition.

#### Properties

##### id

```ts
id: StructureRef
```

Defined in: [sandkit/api/structures.d.ts:213](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L213)

##### angles

```ts
angles: number[]
```

Defined in: [sandkit/api/structures.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L214)

***

### sandkit.api.structures.StructureRender :id=structurerender

Defined in: [sandkit/api/structures.d.ts:218](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L218)

Render settings for a structure definition.

#### Properties

##### imageName?

```ts
optional imageName?: string
```

Defined in: [sandkit/api/structures.d.ts:219](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L219)

##### size?

```ts
optional size?: object
```

Defined in: [sandkit/api/structures.d.ts:220](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L220)

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

Defined in: [sandkit/api/structures.d.ts:221](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L221)

###### x

```ts
x: number
```

###### y

```ts
y: number
```

***

### sandkit.api.structures.SandkitStructureDefinition :id=sandkitstructuredefinition

Defined in: [sandkit/api/structures.d.ts:225](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L225)

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

Defined in: [sandkit/api/structures.d.ts:226](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L226)

##### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/structures.d.ts:227](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L227)

##### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [sandkit/api/structures.d.ts:228](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L228)

##### categoryKey?

```ts
optional categoryKey?: string
```

Defined in: [sandkit/api/structures.d.ts:229](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L229)

##### order?

```ts
optional order?: number
```

Defined in: [sandkit/api/structures.d.ts:230](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L230)

##### buildModes?

```ts
optional buildModes?: StructureBuildMode[]
```

Defined in: [sandkit/api/structures.d.ts:231](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L231)

##### shape?

```ts
optional shape?: number[][]
```

Defined in: [sandkit/api/structures.d.ts:232](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L232)

##### variants?

```ts
optional variants?: StructureVariant[]
```

Defined in: [sandkit/api/structures.d.ts:233](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L233)

##### render?

```ts
optional render?: StructureRender
```

Defined in: [sandkit/api/structures.d.ts:234](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L234)

##### defaultData?

```ts
optional defaultData?: Record<string, unknown>
```

Defined in: [sandkit/api/structures.d.ts:235](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L235)

***

### sandkit.api.structures.StructureBuildOptions :id=structurebuildoptions

Defined in: [sandkit/api/structures.d.ts:240](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L240)

Options passed to [buildAtCellWhenIdle](#buildatcellwhenidle).

#### Indexable

```ts
[key: string]: unknown
```

***

### sandkit.api.structures.StructureRemovalOptions :id=structureremovaloptions

Defined in: [sandkit/api/structures.d.ts:245](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L245)

Options passed to [removeAtCellWhenIdle](#removeatcellwhenidle).

#### Properties

##### removeCells?

```ts
optional removeCells?: boolean
```

Defined in: [sandkit/api/structures.d.ts:247](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L247)

Also remove underlying terrain cells in the footprint.

##### skipVisuals?

```ts
optional skipVisuals?: boolean
```

Defined in: [sandkit/api/structures.d.ts:249](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L249)

Skip visual teardown effects.

***

### sandkit.api.structures.StructureBulkRemovalOptions :id=structurebulkremovaloptions

Defined in: [sandkit/api/structures.d.ts:253](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L253)

Options passed to bulk structure removal helpers.

#### Properties

##### removeCells?

```ts
optional removeCells?: boolean
```

Defined in: [sandkit/api/structures.d.ts:254](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L254)

##### skipVisuals?

```ts
optional skipVisuals?: boolean
```

Defined in: [sandkit/api/structures.d.ts:255](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L255)

##### preserveUnselectable?

```ts
optional preserveUnselectable?: boolean
```

Defined in: [sandkit/api/structures.d.ts:257](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L257)

When set, only remove structures at these positions.

##### onlyPositions?

```ts
optional onlyPositions?: Vector2[]
```

Defined in: [sandkit/api/structures.d.ts:258](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L258)

***

### sandkit.api.structures.StructureProcessorDefinitionV1 :id=structureprocessordefinitionv1

Defined in: [sandkit/api/structures.d.ts:262](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L262)

Periodic structure processor attached with [addProcessor](#addprocessor).

#### Properties

##### intervalMs

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:264](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L264)

Tick interval in milliseconds. Must be > 0.

##### process

```ts
process: (state: unknown, structure: Structure) => void
```

Defined in: [sandkit/api/structures.d.ts:266](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L266)

Synchronous callback invoked for each structure instance.

###### Parameters

###### state

`unknown`

###### structure

[`Structure`](api/sandkit.api.structures.worker.md#structure)

###### Returns

`void`

***

### sandkit.api.structures.PlacementConfigIntegerField :id=placementconfigintegerfield

Defined in: [sandkit/api/structures.d.ts:275](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L275)

Integer placement field with optional bounds.

#### Properties

##### type

```ts
type: "integer"
```

Defined in: [sandkit/api/structures.d.ts:276](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L276)

##### id

```ts
id: string
```

Defined in: [sandkit/api/structures.d.ts:277](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L277)

##### labelKey

```ts
labelKey: string
```

Defined in: [sandkit/api/structures.d.ts:278](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L278)

##### min?

```ts
optional min?: number
```

Defined in: [sandkit/api/structures.d.ts:279](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L279)

##### max?

```ts
optional max?: number
```

Defined in: [sandkit/api/structures.d.ts:280](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L280)

##### default?

```ts
optional default?: number
```

Defined in: [sandkit/api/structures.d.ts:281](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L281)

***

### sandkit.api.structures.PlacementConfigChoiceField :id=placementconfigchoicefield

Defined in: [sandkit/api/structures.d.ts:285](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L285)

Choice placement field with labeled options.

#### Properties

##### type

```ts
type: "choice"
```

Defined in: [sandkit/api/structures.d.ts:286](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L286)

##### id

```ts
id: string
```

Defined in: [sandkit/api/structures.d.ts:287](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L287)

##### labelKey

```ts
labelKey: string
```

Defined in: [sandkit/api/structures.d.ts:288](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L288)

##### options

```ts
options: readonly object[]
```

Defined in: [sandkit/api/structures.d.ts:289](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L289)

***

### sandkit.api.structures.PlacementConfigDefinition :id=placementconfigdefinition

Defined in: [sandkit/api/structures.d.ts:296](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L296)

Placement rule definition for a structure type.

#### Properties

##### structureId

```ts
structureId: string & object
```

Defined in: [sandkit/api/structures.d.ts:297](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L297)

##### fields

```ts
fields: PlacementConfigField[]
```

Defined in: [sandkit/api/structures.d.ts:298](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L298)

***

### sandkit.api.structures.WeightedRefineryRecipeDefinitionV1 :id=weightedrefineryrecipedefinitionv1

Defined in: [sandkit/api/structures.d.ts:309](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L309)

Weighted refinery recipe definition shape.

#### Properties

##### input

```ts
input: ElementType
```

Defined in: [sandkit/api/structures.d.ts:310](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L310)

##### outputs

```ts
outputs: WeightedRecipeOutput[]
```

Defined in: [sandkit/api/structures.d.ts:311](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L311)

***

### sandkit.api.structures.StructureProcessingDefinitionV1 :id=structureprocessingdefinitionv1

Defined in: [sandkit/api/structures.d.ts:315](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L315)

Custom structure processing definition shape.

#### Properties

##### structureType

```ts
structureType: StructureRef
```

Defined in: [sandkit/api/structures.d.ts:316](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L316)

##### intervalMs

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:317](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L317)

##### process

```ts
process: (state: unknown, structure: Structure) => void
```

Defined in: [sandkit/api/structures.d.ts:318](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L318)

###### Parameters

###### state

`unknown`

###### structure

[`Structure`](api/sandkit.api.structures.worker.md#structure)

###### Returns

`void`

## Type Aliases <!-- {docsify-ignore} -->

### sandkit.api.structures.PlacementConfigField :id=placementconfigfield

```ts
PlacementConfigField = PlacementConfigIntegerField | PlacementConfigChoiceField
```

Defined in: [sandkit/api/structures.d.ts:270](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L270)

Placement hotbar field definition.

***

### sandkit.api.structures.PlanterBoxRecipeDefinitionV1 :id=planterboxrecipedefinitionv1

```ts
PlanterBoxRecipeDefinitionV1 = PlanterBoxRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:302](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L302)

Planter box recipe definition shape.

***

### sandkit.api.structures.ShakerRecipeDefinitionV1 :id=shakerrecipedefinitionv1

```ts
ShakerRecipeDefinitionV1 = ShakerRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:304](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L304)

Shaker recipe definition shape.

***

### sandkit.api.structures.KineticPressRecipeDefinitionV1 :id=kineticpressrecipedefinitionv1

```ts
KineticPressRecipeDefinitionV1 = KineticPressRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:306](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L306)

Kinetic press recipe definition shape.

## Functions <!-- {docsify-ignore} -->

### sandkit.api.structures.addProcessor() :id=addprocessor

```ts
addProcessor(structureId: StructureRef, definition: StructureProcessorDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L56)

Register a structure processor handler.

#### Parameters

##### structureId

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

Structure type or string id to attach the processor to.

##### definition

[`StructureProcessorDefinitionV1`](#structureprocessordefinitionv1)

Periodic processing interval and callback.

#### Returns

`void`

***

### sandkit.api.structures.register() :id=register

```ts
register(definition: SandkitStructureDefinition, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L63)

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

***

### sandkit.api.structures.updateDefinition() :id=updatedefinition

```ts
updateDefinition(structureTypeOrId: StructureRef, partial: Partial<SandkitStructureDefinition>, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L71)

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

***

### sandkit.api.structures.addVariant() :id=addvariant

```ts
addVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:79](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L79)

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

***

### sandkit.api.structures.registerPlacementConfig() :id=registerplacementconfig

```ts
registerPlacementConfig(definition: PlacementConfigDefinition): void
```

Defined in: [sandkit/api/structures.d.ts:85](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L85)

Register placement rules for a structure.

#### Parameters

##### definition

[`PlacementConfigDefinition`](#placementconfigdefinition)

Hotbar placement field configuration.

#### Returns

`void`

***

### sandkit.api.structures.getUnlockedTypes() :id=getunlockedtypes

```ts
getUnlockedTypes(): Set<StructureRef>
```

Defined in: [sandkit/api/structures.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L88)

Return structure types unlocked for building.

#### Returns

`Set`\<[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)\>

***

### sandkit.api.structures.isBlockedByPlayerAtCell() :id=isblockedbyplayeratcell

```ts
isBlockedByPlayerAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L95)

Return true when the player blocks building at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

***

### sandkit.api.structures.isLauncherAtCell() :id=islauncheratcell

```ts
isLauncherAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L102)

Return true when a launcher structure is at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

***

### sandkit.api.structures.isUnlockedByType() :id=isunlockedbytype

```ts
isUnlockedByType(structureType: StructureRef): boolean
```

Defined in: [sandkit/api/structures.d.ts:108](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L108)

Return true when a structure type is unlocked.

#### Parameters

##### structureType

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

Structure type value or string id.

#### Returns

`boolean`

***

### sandkit.api.structures.mapValueToSpritesheetIndex() :id=mapvaluetospritesheetindex

```ts
mapValueToSpritesheetIndex(value: number, thresholds: number[]): number
```

Defined in: [sandkit/api/structures.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L116)

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

***

### sandkit.api.structures.buildAtCellWhenIdle() :id=buildatcellwhenidle

```ts
buildAtCellWhenIdle(...args: number, number, [StructureRef, StructureBuildOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L125)

Build a structure at a cell when simulation is idle.

#### Parameters

##### args

...\[`number`, `number`, [`StructureRef`](api/sandkit.api.structures.worker.md#structureref), [`StructureBuildOptions`](#structurebuildoptions)\]

#### Returns

`void`

***

### sandkit.api.structures.removeAtCellWhenIdle() :id=removeatcellwhenidle

```ts
removeAtCellWhenIdle(...args: number, number, [StructureRemovalOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:133](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L133)

Remove a structure at a cell when simulation is idle.

#### Parameters

##### args

...\[`number`, `number`, [`StructureRemovalOptions`](#structureremovaloptions)\]

#### Returns

`void`

***

### sandkit.api.structures.removeBetweenCellsWhenIdle() :id=removebetweencellswhenidle

```ts
removeBetweenCellsWhenIdle(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:143](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L143)

Remove structures between two cells when simulation is idle.

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

***

### sandkit.api.structures.removeAtCellsWhenIdle() :id=removeatcellswhenidle

```ts
removeAtCellsWhenIdle(positions: Vector2[], options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:150](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L150)

Remove structures at many cells when simulation is idle.

#### Parameters

##### positions

[`Vector2`](api/shared.player.md#vector2)[]

Cell positions to clear.

##### options?

[`StructureBulkRemovalOptions`](#structurebulkremovaloptions)

Optional bulk-removal flags.

#### Returns

`void`

## References <!-- {docsify-ignore} -->

### sandkit.api.structures.forEachOfType :id=foreachoftype

Re-exports [forEachOfType](api/sandkit.api.structures.worker.md#foreachoftype)

***

### sandkit.api.structures.getAtCell :id=getatcell

Re-exports [getAtCell](api/sandkit.api.structures.worker.md#getatcell)

***

### sandkit.api.structures.getDefinitionByType :id=getdefinitionbytype

Re-exports [getDefinitionByType](api/sandkit.api.structures.worker.md#getdefinitionbytype)

***

### sandkit.api.structures.getTypeFromId :id=gettypefromid

Re-exports [getTypeFromId](api/sandkit.api.structures.worker.md#gettypefromid)

***

### sandkit.api.structures.hasBuiltAtCell :id=hasbuiltatcell

Re-exports [hasBuiltAtCell](api/sandkit.api.structures.worker.md#hasbuiltatcell)

***

### sandkit.api.structures.isType :id=istype

Re-exports [isType](api/sandkit.api.structures.worker.md#istype)

***

### sandkit.api.structures.isTypeAtCell :id=istypeatcell

Re-exports [isTypeAtCell](api/sandkit.api.structures.worker.md#istypeatcell)

***

### sandkit.api.structures.setSpritesheetIndex :id=setspritesheetindex

Re-exports [setSpritesheetIndex](api/sandkit.api.structures.worker.md#setspritesheetindex)

***

### sandkit.api.structures.setSpritesheetIndexAtCell :id=setspritesheetindexatcell

Re-exports [setSpritesheetIndexAtCell](api/sandkit.api.structures.worker.md#setspritesheetindexatcell)

***

### sandkit.api.structures.setSpritesheetIndexByValue :id=setspritesheetindexbyvalue

Re-exports [setSpritesheetIndexByValue](api/sandkit.api.structures.worker.md#setspritesheetindexbyvalue)

***

### sandkit.api.structures.setSpritesheetIndexByValueAtCell :id=setspritesheetindexbyvalueatcell

Re-exports [setSpritesheetIndexByValueAtCell](api/sandkit.api.structures.worker.md#setspritesheetindexbyvalueatcell)

***

### sandkit.api.structures.update :id=update

Re-exports [update](api/sandkit.api.structures.worker.md#update)

***

### sandkit.api.structures.setData :id=setdata

Re-exports [setData](api/sandkit.api.structures.worker.md#setdata)

***

### sandkit.api.structures.Structure :id=structure

Re-exports [Structure](api/sandkit.api.structures.worker.md#structure)

***

### sandkit.api.structures.StructureType :id=structuretype

Re-exports [StructureType](api/sandkit.api.structures.worker.md#structuretype)

***

### sandkit.api.structures.StructureId :id=structureid

Re-exports [StructureId](api/sandkit.api.structures.worker.md#structureid)

***

### sandkit.api.structures.StructureRef :id=structureref

Re-exports [StructureRef](api/sandkit.api.structures.worker.md#structureref)

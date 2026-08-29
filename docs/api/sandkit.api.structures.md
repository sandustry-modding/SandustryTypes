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

##### spanTiles?

```ts
optional spanTiles?: number
```

Defined in: [sandkit/api/structures.d.ts:323](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L323)

Fixed span length in tiles for line-linked structures.

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.register`

***

### StructureVariant :id=structurevariant

<p class="smt-member-path"><code>sandkit.api.structures.StructureVariant</code></p>

Defined in: [sandkit/api/structures.d.ts:327](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L327)

Rotated variant entry for a structure definition.

#### Properties

##### id

```ts
id: StructureRef
```

Defined in: [sandkit/api/structures.d.ts:328](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L328)

##### angles

```ts
angles: number[]
```

Defined in: [sandkit/api/structures.d.ts:329](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L329)

***

### StructureTooltipHover :id=structuretooltiphover

<p class="smt-member-path"><code>sandkit.api.structures.StructureTooltipHover</code></p>

Defined in: [sandkit/api/structures.d.ts:337](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L337)

Custom hover tooltip driven by structure `data` fields.

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.register`

#### Properties

##### type

```ts
type: "custom"
```

Defined in: [sandkit/api/structures.d.ts:338](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L338)

##### dataFieldMessage

```ts
dataFieldMessage: object
```

Defined in: [sandkit/api/structures.d.ts:339](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L339)

###### message?

```ts
optional message?: string
```

###### messageKey?

```ts
optional messageKey?: string
```

###### fields

```ts
fields: readonly StructureTooltipHoverField[]
```

***

### StructureTooltipHoverField :id=structuretooltiphoverfield

<p class="smt-member-path"><code>sandkit.api.structures.StructureTooltipHoverField</code></p>

Defined in: [sandkit/api/structures.d.ts:347](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L347)

One interpolated field in a [StructureTooltipHover](#structuretooltiphover) message.

#### Properties

##### param

```ts
param: string
```

Defined in: [sandkit/api/structures.d.ts:348](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L348)

##### field

```ts
field: string
```

Defined in: [sandkit/api/structures.d.ts:349](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L349)

##### fallback?

```ts
optional fallback?: string | number
```

Defined in: [sandkit/api/structures.d.ts:350](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L350)

##### round?

```ts
optional round?: boolean
```

Defined in: [sandkit/api/structures.d.ts:351](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L351)

##### valueLabels?

```ts
optional valueLabels?: Record<string, string>
```

Defined in: [sandkit/api/structures.d.ts:352](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L352)

##### valueKeys?

```ts
optional valueKeys?: Record<string, string>
```

Defined in: [sandkit/api/structures.d.ts:353](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L353)

***

### StructureSpritesheet :id=structurespritesheet

<p class="smt-member-path"><code>sandkit.api.structures.StructureSpritesheet</code></p>

Defined in: [sandkit/api/structures.d.ts:357](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L357)

Spritesheet animation on a structure render block.

#### Properties

##### frameSize

```ts
frameSize: object
```

Defined in: [sandkit/api/structures.d.ts:358](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L358)

###### width

```ts
width: number
```

###### height

```ts
height: number
```

##### frames

```ts
frames: number
```

Defined in: [sandkit/api/structures.d.ts:359](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L359)

##### intervalMs

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:360](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L360)

##### rowDataField?

```ts
optional rowDataField?: string
```

Defined in: [sandkit/api/structures.d.ts:362](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L362)

When set, frame row follows this structure `data` field.

***

### StructureRenderUi :id=structurerenderui

<p class="smt-member-path"><code>sandkit.api.structures.StructureRenderUi</code></p>

Defined in: [sandkit/api/structures.d.ts:366](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L366)

Hotbar / build-menu UI sprite settings.

#### Properties

##### imageName?

```ts
optional imageName?: string
```

Defined in: [sandkit/api/structures.d.ts:367](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L367)

##### size?

```ts
optional size?: object
```

Defined in: [sandkit/api/structures.d.ts:368](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L368)

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

Defined in: [sandkit/api/structures.d.ts:369](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L369)

###### x

```ts
x: number
```

###### y

```ts
y: number
```

##### outline?

```ts
optional outline?: boolean
```

Defined in: [sandkit/api/structures.d.ts:370](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L370)

##### width?

```ts
optional width?: string
```

Defined in: [sandkit/api/structures.d.ts:371](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L371)

##### height?

```ts
optional height?: string
```

Defined in: [sandkit/api/structures.d.ts:372](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L372)

##### clipToBounds?

```ts
optional clipToBounds?: boolean
```

Defined in: [sandkit/api/structures.d.ts:373](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L373)

***

### StructureRender :id=structurerender

<p class="smt-member-path"><code>sandkit.api.structures.StructureRender</code></p>

Defined in: [sandkit/api/structures.d.ts:377](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L377)

Render settings for a structure definition.

#### Properties

##### imageName?

```ts
optional imageName?: string
```

Defined in: [sandkit/api/structures.d.ts:378](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L378)

##### size?

```ts
optional size?: object
```

Defined in: [sandkit/api/structures.d.ts:379](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L379)

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

Defined in: [sandkit/api/structures.d.ts:380](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L380)

###### x

```ts
x: number
```

###### y

```ts
y: number
```

##### z?

```ts
optional z?: number
```

Defined in: [sandkit/api/structures.d.ts:381](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L381)

##### ambienceGroup?

```ts
optional ambienceGroup?: string
```

Defined in: [sandkit/api/structures.d.ts:382](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L382)

##### ui?

```ts
optional ui?: StructureRenderUi
```

Defined in: [sandkit/api/structures.d.ts:383](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L383)

##### spritesheet?

```ts
optional spritesheet?: StructureSpritesheet
```

Defined in: [sandkit/api/structures.d.ts:384](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L384)

***

### SandkitStructureDefinition :id=sandkitstructuredefinition

<p class="smt-member-path"><code>sandkit.api.structures.SandkitStructureDefinition</code></p>

Defined in: [sandkit/api/structures.d.ts:388](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L388)

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

Defined in: [sandkit/api/structures.d.ts:389](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L389)

##### name?

```ts
optional name?: string
```

Defined in: [sandkit/api/structures.d.ts:390](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L390)

##### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/structures.d.ts:391](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L391)

##### description?

```ts
optional description?: string
```

Defined in: [sandkit/api/structures.d.ts:392](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L392)

##### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [sandkit/api/structures.d.ts:393](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L393)

##### categoryKey?

```ts
optional categoryKey?: string
```

Defined in: [sandkit/api/structures.d.ts:394](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L394)

##### order?

```ts
optional order?: number
```

Defined in: [sandkit/api/structures.d.ts:395](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L395)

##### buildModes?

```ts
optional buildModes?: StructureBuildMode[]
```

Defined in: [sandkit/api/structures.d.ts:396](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L396)

##### shape?

```ts
optional shape?: number[][]
```

Defined in: [sandkit/api/structures.d.ts:397](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L397)

##### variants?

```ts
optional variants?: StructureVariant[]
```

Defined in: [sandkit/api/structures.d.ts:398](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L398)

##### render?

```ts
optional render?: StructureRender
```

Defined in: [sandkit/api/structures.d.ts:399](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L399)

##### defaultData?

```ts
optional defaultData?: Record<string, unknown>
```

Defined in: [sandkit/api/structures.d.ts:400](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L400)

##### linkedClearance?

```ts
optional linkedClearance?: string
```

Defined in: [sandkit/api/structures.d.ts:406](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L406)

Linked placement clearance mode (for example `"allOrNothing"`).

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.register`

##### tooltipHover?

```ts
optional tooltipHover?: StructureTooltipHover
```

Defined in: [sandkit/api/structures.d.ts:412](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L412)

Custom hover tooltip over the built structure.

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.register`

##### rejectWhenBlocked?

```ts
optional rejectWhenBlocked?: boolean
```

Defined in: [sandkit/api/structures.d.ts:414](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L414)

Reject placement when the footprint is blocked.

##### alwaysUnlocked?

```ts
optional alwaysUnlocked?: boolean
```

Defined in: [sandkit/api/structures.d.ts:416](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L416)

Show in the build menu without research unlock.

##### descriptionParams?

```ts
optional descriptionParams?: Record<string, string | number>
```

Defined in: [sandkit/api/structures.d.ts:418](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L418)

Values interpolated into the structure description string.

***

### StructureBuildOptions :id=structurebuildoptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureBuildOptions</code></p>

Defined in: [sandkit/api/structures.d.ts:423](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L423)

Options passed to [buildAtCell](#buildatcell).

#### Indexable

```ts
[key: string]: unknown
```

***

### StructureRemovalOptions :id=structureremovaloptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureRemovalOptions</code></p>

Defined in: [sandkit/api/structures.d.ts:428](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L428)

Options passed to [removeAtCell](#removeatcell).

#### Properties

##### removeCells?

```ts
optional removeCells?: boolean
```

Defined in: [sandkit/api/structures.d.ts:430](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L430)

Also remove underlying terrain cells in the footprint.

##### skipVisuals?

```ts
optional skipVisuals?: boolean
```

Defined in: [sandkit/api/structures.d.ts:432](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L432)

Skip visual teardown effects.

***

### StructureBulkRemovalOptions :id=structurebulkremovaloptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureBulkRemovalOptions</code></p>

Defined in: [sandkit/api/structures.d.ts:436](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L436)

Options passed to bulk structure removal helpers.

#### Properties

##### removeCells?

```ts
optional removeCells?: boolean
```

Defined in: [sandkit/api/structures.d.ts:437](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L437)

##### skipVisuals?

```ts
optional skipVisuals?: boolean
```

Defined in: [sandkit/api/structures.d.ts:438](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L438)

##### preserveUnselectable?

```ts
optional preserveUnselectable?: boolean
```

Defined in: [sandkit/api/structures.d.ts:440](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L440)

When set, only remove structures at these positions.

##### onlyPositions?

```ts
optional onlyPositions?: Vector2[]
```

Defined in: [sandkit/api/structures.d.ts:441](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L441)

***

### StructureProcessingContext :id=structureprocessingcontext

<p class="smt-member-path"><code>sandkit.api.structures.StructureProcessingContext</code></p>

Defined in: [sandkit/api/structures.d.ts:449](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L449)

Context passed to structure processing callbacks.

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.processing.register`

#### Methods

##### getResolvedTypeAtCell()

```ts
getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [sandkit/api/structures.d.ts:455](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L455)

Return the resolved element type at a cell, or null.

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

[`ElementType`](api/sandkit.api.elements.md#elementtype) \| `null`

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.processing.register`

##### ~~getElementTypeAtCell()~~

```ts
getElementTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [sandkit/api/structures.d.ts:461](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L461)

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

[`ElementType`](api/sandkit.api.elements.md#elementtype) \| `null`

###### Deprecated

Use [getResolvedTypeAtCell](#getresolvedtypeatcell) instead.

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias in `api.structures.processing.register` context

##### isCellEmptyAtCell()

```ts
isCellEmptyAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:468](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L468)

Return true when the cell has no element or terrain.

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

`boolean`

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.processing.register`

##### ~~isCellEmpty()~~

```ts
isCellEmpty(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:474](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L474)

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

`boolean`

###### Deprecated

Use [isCellEmptyAtCell](#iscellemptyatcell) instead.

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias in `api.structures.processing.register` context

##### commit()

```ts
commit(mutations: unknown): void
```

Defined in: [sandkit/api/structures.d.ts:482](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L482)

Commit batched grid mutations from the processing callback.

###### Parameters

###### mutations

`unknown`

Mutation writer payload accepted by the runtime.

###### Returns

`void`

###### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.processing.register`

***

### ~~StructureProcessorDefinitionV1~~

Defined in: [sandkit/api/structures.d.ts:489](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L489)

#### Deprecated

Use [StructureProcessingDefinitionV1](#structureprocessingdefinitionv1) with [processing.register](api/sandkit.api.structures.processing.md#register) instead.

#### See

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.processing.register`

#### Properties

##### ~~intervalMs~~

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:491](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L491)

Tick interval in milliseconds. Must be > 0.

##### ~~process~~

```ts
process: (structure: Structure, context: StructureProcessingContext) => void
```

Defined in: [sandkit/api/structures.d.ts:493](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L493)

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

Defined in: [sandkit/api/structures.d.ts:502](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L502)

Integer placement field with optional bounds.

#### Properties

##### type

```ts
type: "integer"
```

Defined in: [sandkit/api/structures.d.ts:503](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L503)

##### id

```ts
id: string
```

Defined in: [sandkit/api/structures.d.ts:504](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L504)

##### labelKey

```ts
labelKey: string
```

Defined in: [sandkit/api/structures.d.ts:505](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L505)

##### min?

```ts
optional min?: number
```

Defined in: [sandkit/api/structures.d.ts:506](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L506)

##### max?

```ts
optional max?: number
```

Defined in: [sandkit/api/structures.d.ts:507](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L507)

##### default?

```ts
optional default?: number
```

Defined in: [sandkit/api/structures.d.ts:508](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L508)

***

### PlacementConfigChoiceField :id=placementconfigchoicefield

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigChoiceField</code></p>

Defined in: [sandkit/api/structures.d.ts:512](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L512)

Choice placement field with labeled options.

#### Properties

##### type

```ts
type: "choice"
```

Defined in: [sandkit/api/structures.d.ts:513](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L513)

##### id

```ts
id: string
```

Defined in: [sandkit/api/structures.d.ts:514](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L514)

##### labelKey

```ts
labelKey: string
```

Defined in: [sandkit/api/structures.d.ts:515](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L515)

##### options

```ts
options: readonly object[]
```

Defined in: [sandkit/api/structures.d.ts:516](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L516)

***

### PlacementConfigDefinition :id=placementconfigdefinition

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigDefinition</code></p>

Defined in: [sandkit/api/structures.d.ts:523](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L523)

Placement rule definition for a structure type.

#### Properties

##### structureId

```ts
structureId: string & object
```

Defined in: [sandkit/api/structures.d.ts:524](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L524)

##### fields

```ts
fields: PlacementConfigField[]
```

Defined in: [sandkit/api/structures.d.ts:525](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L525)

***

### WeightedRefineryRecipeDefinitionV1 :id=weightedrefineryrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.WeightedRefineryRecipeDefinitionV1</code></p>

Defined in: [sandkit/api/structures.d.ts:536](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L536)

Weighted refinery recipe definition shape.

#### Properties

##### input

```ts
input: ElementType
```

Defined in: [sandkit/api/structures.d.ts:537](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L537)

##### outputs

```ts
outputs: WeightedRecipeOutput[]
```

Defined in: [sandkit/api/structures.d.ts:538](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L538)

***

### StructureProcessingDefinitionV1 :id=structureprocessingdefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.StructureProcessingDefinitionV1</code></p>

Defined in: [sandkit/api/structures.d.ts:542](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L542)

Custom structure processing definition shape.

#### Properties

##### structureType

```ts
structureType: StructureRef
```

Defined in: [sandkit/api/structures.d.ts:543](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L543)

##### intervalMs

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:544](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L544)

##### process

```ts
process: (structure: Structure, context: StructureProcessingContext) => void
```

Defined in: [sandkit/api/structures.d.ts:545](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L545)

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

Defined in: [sandkit/api/structures.d.ts:497](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L497)

Placement hotbar field definition.

***

### PlanterBoxRecipeDefinitionV1 :id=planterboxrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.PlanterBoxRecipeDefinitionV1</code></p>

```ts
PlanterBoxRecipeDefinitionV1 = PlanterBoxRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:529](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L529)

Planter box recipe definition shape.

***

### ShakerRecipeDefinitionV1 :id=shakerrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.ShakerRecipeDefinitionV1</code></p>

```ts
ShakerRecipeDefinitionV1 = ShakerRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:531](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L531)

Shaker recipe definition shape.

***

### KineticPressRecipeDefinitionV1 :id=kineticpressrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.KineticPressRecipeDefinitionV1</code></p>

```ts
KineticPressRecipeDefinitionV1 = KineticPressRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:533](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L533)

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.register`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.updateDefinition`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.registerVariant`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.registerVariant`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.registerPlacementConfig`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.getAvailableTypes`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.getAvailableTypes`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.isBlockedByPlayerAtCell`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.isLauncherAtCell`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.isLockedByType`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.isLockedByType`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.mapValueToSpritesheetIndex`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.buildAtCell`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.buildAtCell`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.removeAtCell`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.removeAtCell`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.removeBetweenCells`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.removeBetweenCells`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — Main entry `api.structures.removeAtCells`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.removeAtCells`

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

https://sandustry.com/sandkit.html#api-access-heading Official Sandkit API — deprecated alias of `api.structures.processing.register`

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

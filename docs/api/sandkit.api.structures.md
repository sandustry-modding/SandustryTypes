# sandkit.api.structures

## Namespaces <!-- {docsify-ignore} -->

- [recipes](api/sandkit.api.structures.recipes.md)
- [processing](api/sandkit.api.structures.processing.md)

## Interfaces <!-- {docsify-ignore} -->

### StructureBuildMode :id=structurebuildmode

<p class="smt-member-path"><code>sandkit.api.structures.StructureBuildMode</code></p>
Defined in: [sandkit/api/structures.d.ts:567](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L567)

Build mode entry for a structure definition.

#### Properties

##### type

```ts
type: string
```

Defined in: [sandkit/api/structures.d.ts:568](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L568)

##### directions?

```ts
optional directions?: string[]
```

Defined in: [sandkit/api/structures.d.ts:569](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L569)

##### spanTiles?

```ts
optional spanTiles?: number
```

Defined in: [sandkit/api/structures.d.ts:575](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L575)

Fixed span length in tiles for line-linked structures.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### StructureVariant :id=structurevariant

<p class="smt-member-path"><code>sandkit.api.structures.StructureVariant</code></p>
Defined in: [sandkit/api/structures.d.ts:579](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L579)

Rotated variant entry for a structure definition.

#### Properties

##### id

```ts
id: StructureRef
```

Defined in: [sandkit/api/structures.d.ts:580](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L580)

##### angles

```ts
angles: number[]
```

Defined in: [sandkit/api/structures.d.ts:581](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L581)

***

### StructureTooltipHover :id=structuretooltiphover

<p class="smt-member-path"><code>sandkit.api.structures.StructureTooltipHover</code></p>
Defined in: [sandkit/api/structures.d.ts:612](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L612)

Custom hover tooltip driven by structure `data` fields.

#### Example

**Official example**

```ts
tooltipHover: {
  type: "custom",
  dataFieldMessage: {
    message: "Mode {mode}; channel {channel}.",
    messageKey: "mods|example|machineTooltip",
    fields: [
      {
        param: "mode",
        field: "mode",
        valueLabels: { input: "Receiving", output: "Sending" },
        valueKeys: {
          input: "mods|example|receiving",
          output: "mods|example|sending",
        },
      },
      { param: "channel", field: "channel", fallback: 1, round: true },
    ],
  },
}
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

#### Properties

##### type

```ts
type: "custom"
```

Defined in: [sandkit/api/structures.d.ts:613](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L613)

##### dataFieldMessage

```ts
dataFieldMessage: object
```

Defined in: [sandkit/api/structures.d.ts:614](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L614)

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
Defined in: [sandkit/api/structures.d.ts:622](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L622)

One interpolated field in a [StructureTooltipHover](#structuretooltiphover) message.

#### Properties

##### param

```ts
param: string
```

Defined in: [sandkit/api/structures.d.ts:623](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L623)

##### field

```ts
field: string
```

Defined in: [sandkit/api/structures.d.ts:624](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L624)

##### fallback?

```ts
optional fallback?: string | number
```

Defined in: [sandkit/api/structures.d.ts:625](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L625)

##### round?

```ts
optional round?: boolean
```

Defined in: [sandkit/api/structures.d.ts:626](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L626)

##### valueLabels?

```ts
optional valueLabels?: Record<string, string>
```

Defined in: [sandkit/api/structures.d.ts:627](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L627)

##### valueKeys?

```ts
optional valueKeys?: Record<string, string>
```

Defined in: [sandkit/api/structures.d.ts:628](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L628)

***

### StructureSpritesheet :id=structurespritesheet

<p class="smt-member-path"><code>sandkit.api.structures.StructureSpritesheet</code></p>
Defined in: [sandkit/api/structures.d.ts:632](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L632)

Spritesheet animation on a structure render block.

#### Properties

##### frameSize

```ts
frameSize: object
```

Defined in: [sandkit/api/structures.d.ts:633](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L633)

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

Defined in: [sandkit/api/structures.d.ts:634](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L634)

##### intervalMs

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:635](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L635)

##### rowDataField?

```ts
optional rowDataField?: string
```

Defined in: [sandkit/api/structures.d.ts:637](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L637)

When set, frame row follows this structure `data` field.

***

### StructureRenderUi :id=structurerenderui

<p class="smt-member-path"><code>sandkit.api.structures.StructureRenderUi</code></p>
Defined in: [sandkit/api/structures.d.ts:641](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L641)

Hotbar / build-menu UI sprite settings.

#### Properties

##### imageName?

```ts
optional imageName?: string
```

Defined in: [sandkit/api/structures.d.ts:642](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L642)

##### size?

```ts
optional size?: object
```

Defined in: [sandkit/api/structures.d.ts:643](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L643)

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

Defined in: [sandkit/api/structures.d.ts:644](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L644)

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

Defined in: [sandkit/api/structures.d.ts:645](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L645)

##### width?

```ts
optional width?: string
```

Defined in: [sandkit/api/structures.d.ts:646](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L646)

##### height?

```ts
optional height?: string
```

Defined in: [sandkit/api/structures.d.ts:647](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L647)

##### clipToBounds?

```ts
optional clipToBounds?: boolean
```

Defined in: [sandkit/api/structures.d.ts:648](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L648)

***

### StructureRender :id=structurerender

<p class="smt-member-path"><code>sandkit.api.structures.StructureRender</code></p>
Defined in: [sandkit/api/structures.d.ts:652](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L652)

Render settings for a structure definition.

#### Properties

##### imageName?

```ts
optional imageName?: string
```

Defined in: [sandkit/api/structures.d.ts:653](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L653)

##### size?

```ts
optional size?: object
```

Defined in: [sandkit/api/structures.d.ts:654](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L654)

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

Defined in: [sandkit/api/structures.d.ts:655](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L655)

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

Defined in: [sandkit/api/structures.d.ts:656](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L656)

##### ambienceGroup?

```ts
optional ambienceGroup?: string
```

Defined in: [sandkit/api/structures.d.ts:657](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L657)

##### ui?

```ts
optional ui?: StructureRenderUi
```

Defined in: [sandkit/api/structures.d.ts:658](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L658)

##### spritesheet?

```ts
optional spritesheet?: StructureSpritesheet
```

Defined in: [sandkit/api/structures.d.ts:659](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L659)

***

### SandkitStructureDefinition :id=sandkitstructuredefinition

<p class="smt-member-path"><code>sandkit.api.structures.SandkitStructureDefinition</code></p>
Defined in: [sandkit/api/structures.d.ts:663](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L663)

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

Defined in: [sandkit/api/structures.d.ts:664](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L664)

##### name?

```ts
optional name?: string
```

Defined in: [sandkit/api/structures.d.ts:665](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L665)

##### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/structures.d.ts:666](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L666)

##### description?

```ts
optional description?: string
```

Defined in: [sandkit/api/structures.d.ts:667](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L667)

##### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [sandkit/api/structures.d.ts:668](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L668)

##### categoryKey?

```ts
optional categoryKey?: string
```

Defined in: [sandkit/api/structures.d.ts:669](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L669)

##### order?

```ts
optional order?: number
```

Defined in: [sandkit/api/structures.d.ts:670](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L670)

##### buildModes?

```ts
optional buildModes?: StructureBuildMode[]
```

Defined in: [sandkit/api/structures.d.ts:671](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L671)

##### shape?

```ts
optional shape?: number[][]
```

Defined in: [sandkit/api/structures.d.ts:672](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L672)

##### variants?

```ts
optional variants?: StructureVariant[]
```

Defined in: [sandkit/api/structures.d.ts:673](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L673)

##### render?

```ts
optional render?: StructureRender
```

Defined in: [sandkit/api/structures.d.ts:674](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L674)

##### defaultData?

```ts
optional defaultData?: Record<string, unknown>
```

Defined in: [sandkit/api/structures.d.ts:675](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L675)

##### linkedClearance?

```ts
optional linkedClearance?: string
```

Defined in: [sandkit/api/structures.d.ts:681](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L681)

Linked placement clearance mode (for example `"allOrNothing"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### tooltipHover?

```ts
optional tooltipHover?: StructureTooltipHover
```

Defined in: [sandkit/api/structures.d.ts:687](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L687)

Custom hover tooltip over the built structure.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### rejectWhenBlocked?

```ts
optional rejectWhenBlocked?: boolean
```

Defined in: [sandkit/api/structures.d.ts:689](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L689)

Reject placement when the footprint is blocked.

##### alwaysUnlocked?

```ts
optional alwaysUnlocked?: boolean
```

Defined in: [sandkit/api/structures.d.ts:691](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L691)

Show in the build menu without research unlock.

##### descriptionParams?

```ts
optional descriptionParams?: Record<string, string | number>
```

Defined in: [sandkit/api/structures.d.ts:693](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L693)

Values interpolated into the structure description string.

***

### StructureBuildOptions :id=structurebuildoptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureBuildOptions</code></p>
Defined in: [sandkit/api/structures.d.ts:698](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L698)

Options passed to [buildAtCell](#buildatcell).

#### Indexable

```ts
[key: string]: unknown
```

***

### StructureRemovalOptions :id=structureremovaloptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureRemovalOptions</code></p>
Defined in: [sandkit/api/structures.d.ts:703](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L703)

Options passed to [removeAtCell](#removeatcell).

#### Properties

##### removeCells?

```ts
optional removeCells?: boolean
```

Defined in: [sandkit/api/structures.d.ts:705](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L705)

Also remove underlying terrain cells in the footprint.

##### skipVisuals?

```ts
optional skipVisuals?: boolean
```

Defined in: [sandkit/api/structures.d.ts:707](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L707)

Skip visual teardown effects.

***

### StructureBulkRemovalOptions :id=structurebulkremovaloptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureBulkRemovalOptions</code></p>
Defined in: [sandkit/api/structures.d.ts:711](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L711)

Options passed to bulk structure removal helpers.

#### Properties

##### removeCells?

```ts
optional removeCells?: boolean
```

Defined in: [sandkit/api/structures.d.ts:712](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L712)

##### skipVisuals?

```ts
optional skipVisuals?: boolean
```

Defined in: [sandkit/api/structures.d.ts:713](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L713)

##### preserveUnselectable?

```ts
optional preserveUnselectable?: boolean
```

Defined in: [sandkit/api/structures.d.ts:715](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L715)

When set, only remove structures at these positions.

##### onlyPositions?

```ts
optional onlyPositions?: Vector2[]
```

Defined in: [sandkit/api/structures.d.ts:716](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L716)

***

### StructureProcessingContext :id=structureprocessingcontext

<p class="smt-member-path"><code>sandkit.api.structures.StructureProcessingContext</code></p>
Defined in: [sandkit/api/structures.d.ts:724](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L724)

Context passed to structure processing callbacks.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

#### Methods

##### getResolvedTypeAtCell()

```ts
getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [sandkit/api/structures.d.ts:730](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L730)

Return the resolved element type at a cell, or null.

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

[`ElementType`](api/sandkit.api.elements.md#elementtype) \| `null`

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### ~~getElementTypeAtCell()~~

```ts
getElementTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [sandkit/api/structures.d.ts:737](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L737)

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

[`ElementType`](api/sandkit.api.elements.md#elementtype) \| `null`

###### Deprecated

Use [getResolvedTypeAtCell](#getresolvedtypeatcell) instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### isCellEmptyAtCell()

```ts
isCellEmptyAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:744](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L744)

Return true when the cell has no element or terrain.

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

`boolean`

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### ~~isCellEmpty()~~

```ts
isCellEmpty(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:751](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L751)

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

###### Returns

`boolean`

###### Deprecated

Use [isCellEmptyAtCell](#iscellemptyatcell) instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### commit()

```ts
commit(mutations: unknown): void
```

Defined in: [sandkit/api/structures.d.ts:760](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L760)

Commit batched grid mutations from the processing callback.

###### Parameters

###### mutations

`unknown`

Mutation writer payload accepted by the runtime.

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~StructureProcessorDefinitionV1~~ :id=structureprocessordefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.StructureProcessorDefinitionV1</code></p>
Defined in: [sandkit/api/structures.d.ts:768](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L768)

#### Deprecated

Use [StructureProcessingDefinitionV1](#structureprocessingdefinitionv1) with [processing.register](api/sandkit.api.structures.processing.md#register) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

#### Properties

##### ~~intervalMs~~

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:770](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L770)

Tick interval in milliseconds. Must be > 0.

##### ~~process~~

```ts
process: (structure: Structure, context: StructureProcessingContext) => void
```

Defined in: [sandkit/api/structures.d.ts:772](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L772)

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
Defined in: [sandkit/api/structures.d.ts:779](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L779)

Integer placement field with optional bounds.

#### Properties

##### type

```ts
type: "integer"
```

Defined in: [sandkit/api/structures.d.ts:780](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L780)

##### id

```ts
id: string
```

Defined in: [sandkit/api/structures.d.ts:781](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L781)

##### labelKey

```ts
labelKey: string
```

Defined in: [sandkit/api/structures.d.ts:782](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L782)

##### min?

```ts
optional min?: number
```

Defined in: [sandkit/api/structures.d.ts:783](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L783)

##### max?

```ts
optional max?: number
```

Defined in: [sandkit/api/structures.d.ts:784](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L784)

##### default?

```ts
optional default?: number
```

Defined in: [sandkit/api/structures.d.ts:785](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L785)

***

### PlacementConfigChoiceField :id=placementconfigchoicefield

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigChoiceField</code></p>
Defined in: [sandkit/api/structures.d.ts:789](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L789)

Choice placement field with labeled options.

#### Properties

##### type

```ts
type: "choice"
```

Defined in: [sandkit/api/structures.d.ts:790](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L790)

##### id

```ts
id: string
```

Defined in: [sandkit/api/structures.d.ts:791](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L791)

##### labelKey

```ts
labelKey: string
```

Defined in: [sandkit/api/structures.d.ts:792](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L792)

##### options

```ts
options: readonly object[]
```

Defined in: [sandkit/api/structures.d.ts:793](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L793)

***

### PlacementConfigDefinition :id=placementconfigdefinition

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigDefinition</code></p>
Defined in: [sandkit/api/structures.d.ts:800](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L800)

Placement rule definition for a structure type.

#### Properties

##### structureId

```ts
structureId: string & object
```

Defined in: [sandkit/api/structures.d.ts:801](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L801)

##### fields

```ts
fields: PlacementConfigField[]
```

Defined in: [sandkit/api/structures.d.ts:802](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L802)

***

### WeightedRefineryRecipeDefinitionV1 :id=weightedrefineryrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.WeightedRefineryRecipeDefinitionV1</code></p>
Defined in: [sandkit/api/structures.d.ts:813](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L813)

Weighted refinery recipe definition shape.

#### Properties

##### input

```ts
input: ElementType
```

Defined in: [sandkit/api/structures.d.ts:814](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L814)

##### outputs

```ts
outputs: WeightedRecipeOutput[]
```

Defined in: [sandkit/api/structures.d.ts:815](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L815)

***

### StructureProcessingDefinitionV1 :id=structureprocessingdefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.StructureProcessingDefinitionV1</code></p>
Defined in: [sandkit/api/structures.d.ts:819](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L819)

Custom structure processing definition shape.

#### Properties

##### structureType

```ts
structureType: StructureRef
```

Defined in: [sandkit/api/structures.d.ts:820](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L820)

##### intervalMs

```ts
intervalMs: number
```

Defined in: [sandkit/api/structures.d.ts:821](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L821)

##### process

```ts
process: (structure: Structure, context: StructureProcessingContext) => void
```

Defined in: [sandkit/api/structures.d.ts:822](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L822)

###### Parameters

###### structure

[`Structure`](api/sandkit.api.structures.worker.md#structure)

###### context

[`StructureProcessingContext`](#structureprocessingcontext)

###### Returns

`void`

## Type Aliases <!-- {docsify-ignore} -->

### PlacementConfigField :id=placementconfigfield

```ts
sandkit.api.structures.PlacementConfigField = PlacementConfigIntegerField | PlacementConfigChoiceField
```

Defined in: [sandkit/api/structures.d.ts:776](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L776)

Placement hotbar field definition.

***

### PlanterBoxRecipeDefinitionV1 :id=planterboxrecipedefinitionv1

```ts
sandkit.api.structures.PlanterBoxRecipeDefinitionV1 = PlanterBoxRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:806](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L806)

Planter box recipe definition shape.

***

### ShakerRecipeDefinitionV1 :id=shakerrecipedefinitionv1

```ts
sandkit.api.structures.ShakerRecipeDefinitionV1 = ShakerRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:808](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L808)

Shaker recipe definition shape.

***

### KineticPressRecipeDefinitionV1 :id=kineticpressrecipedefinitionv1

```ts
sandkit.api.structures.KineticPressRecipeDefinitionV1 = KineticPressRecipeDefinitionV1
```

Defined in: [sandkit/api/structures.d.ts:810](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L810)

Kinetic press recipe definition shape.

## Functions <!-- {docsify-ignore} -->

### register() :id=register

```ts
sandkit.api.structures.register(definition: SandkitStructureDefinition, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:152](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L152)

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

#### Example

```ts
api.structures.register({
  id: "exampleJunction",
  name: "Example Junction",
  nameKey: "structures|exampleJunction|name",
  description: "Links two fixed-span endpoints.",
  descriptionKey: "structures|exampleJunction|description",
  categoryKey: "logistics",
  buildModes: [{
    type: "line",
    directions: ["horizontal", "vertical"],
    spanTiles: 4,
  }],
  linkedClearance: "allOrNothing",
  tooltipHover,
  variants: [{
    id: "exampleJunction",
    angles: [-180, -90, 0, 90, 180],
  }],
  render: {
    imageName: "exampleJunction",
    size: { width: 16, height: 16 },
  },
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### updateDefinition() :id=updatedefinition

```ts
sandkit.api.structures.updateDefinition(structureTypeOrId: StructureRef, partial: Partial<SandkitStructureDefinition>, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L177)

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

#### Example

```ts
api.structures.updateDefinition("exampleJunction", {
  buildModes: [{
    type: "line",
    directions: ["horizontal", "vertical"],
    spanTiles: 6,
  }],
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### registerVariant() :id=registervariant

```ts
sandkit.api.structures.registerVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:210](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L210)

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

#### Example

```ts
api.structures.registerVariant(
  "exampleStructure",
  {
    id: "exampleStructureVertical",
    angles: [-90, 90],
  },
  {
    addBuildMode: {
      type: "line",
      directions: ["vertical"],
      spanTiles: 4,
    },
  },
);
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~addVariant()~~ :id=addvariant

```ts
sandkit.api.structures.addVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:221](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L221)

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

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### registerPlacementConfig() :id=registerplacementconfig

```ts
sandkit.api.structures.registerPlacementConfig(definition: PlacementConfigDefinition): void
```

Defined in: [sandkit/api/structures.d.ts:261](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L261)

Register placement rules for a structure.

#### Parameters

##### definition

[`PlacementConfigDefinition`](#placementconfigdefinition)

Hotbar placement field configuration.

#### Returns

`void`

#### Example

```ts
api.structures.registerPlacementConfig({
  structureId: "exampleStructure",
  fields: [
    {
      type: "integer",
      id: "channel",
      label: "Channel",
      default: 1,
      min: 1,
      max: 8,
    },
    {
      type: "choice",
      id: "mode",
      labelKey: "structures|exampleStructure|mode",
      default: "input",
      options: [
        { value: "input", label: "Input" },
        { value: "output", labelKey: "structures|exampleStructure|output" },
      ],
    },
  ],
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getAvailableTypes() :id=getavailabletypes

```ts
sandkit.api.structures.getAvailableTypes(): Set<StructureRef>
```

Defined in: [sandkit/api/structures.d.ts:268](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L268)

Return structure types available for building.

#### Returns

`Set`\<[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)\>

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~getUnlockedTypes()~~ :id=getunlockedtypes

```ts
sandkit.api.structures.getUnlockedTypes(): Set<StructureRef>
```

Defined in: [sandkit/api/structures.d.ts:275](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L275)

#### Returns

`Set`\<[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)\>

#### Deprecated

Use [getAvailableTypes](#getavailabletypes) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isBlockedByPlayerAtCell() :id=isblockedbyplayeratcell

```ts
sandkit.api.structures.isBlockedByPlayerAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:285](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L285)

Return true when the player blocks building at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isLauncherAtCell() :id=islauncheratcell

```ts
sandkit.api.structures.isLauncherAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:295](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L295)

Return true when a launcher structure is at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isLockedByType() :id=islockedbytype

```ts
sandkit.api.structures.isLockedByType(structureType: StructureRef): boolean
```

Defined in: [sandkit/api/structures.d.ts:307](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L307)

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

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~isUnlockedByType()~~ :id=isunlockedbytype

```ts
sandkit.api.structures.isUnlockedByType(structureType: StructureRef): boolean
```

Defined in: [sandkit/api/structures.d.ts:314](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L314)

#### Parameters

##### structureType

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

#### Returns

`boolean`

#### Deprecated

Use [isLockedByType](#islockedbytype) instead. Same function as [isLockedByType](#islockedbytype); return value is not inverted.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### mapValueToSpritesheetIndex() :id=mapvaluetospritesheetindex

```ts
sandkit.api.structures.mapValueToSpritesheetIndex(value: number, thresholds: number[]): number
```

Defined in: [sandkit/api/structures.d.ts:333](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L333)

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

#### Example

```ts
const index = api.structures.mapValueToSpritesheetIndex(
  pressure,
  [0, 25, 50, 75],
);
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### buildAtCell() :id=buildatcell

```ts
sandkit.api.structures.buildAtCell(...args: number, number, [StructureRef, StructureBuildOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:345](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L345)

Build a structure at a cell. Main-thread writes are deferred.

#### Parameters

##### args

...\[`number`, `number`, [`StructureRef`](api/sandkit.api.structures.worker.md#structureref), [`StructureBuildOptions`](#structurebuildoptions)\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~buildAtCellWhenIdle()~~ :id=buildatcellwhenidle

```ts
sandkit.api.structures.buildAtCellWhenIdle(...args: number, number, [StructureRef, StructureBuildOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:354](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L354)

#### Parameters

##### args

...\[`number`, `number`, [`StructureRef`](api/sandkit.api.structures.worker.md#structureref), [`StructureBuildOptions`](#structurebuildoptions)\]

#### Returns

`void`

#### Deprecated

Use [buildAtCell](#buildatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### removeAtCell() :id=removeatcell

```ts
sandkit.api.structures.removeAtCell(...args: number, number, [StructureRemovalOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:367](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L367)

Remove a structure at a cell. Main-thread writes are deferred.

#### Parameters

##### args

...\[`number`, `number`, [`StructureRemovalOptions`](#structureremovaloptions)\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~removeAtCellWhenIdle()~~ :id=removeatcellwhenidle

```ts
sandkit.api.structures.removeAtCellWhenIdle(...args: number, number, [StructureRemovalOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:376](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L376)

#### Parameters

##### args

...\[`number`, `number`, [`StructureRemovalOptions`](#structureremovaloptions)\]

#### Returns

`void`

#### Deprecated

Use [removeAtCell](#removeatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### removeBetweenCells() :id=removebetweencells

```ts
sandkit.api.structures.removeBetweenCells(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:391](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L391)

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

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~removeBetweenCellsWhenIdle()~~ :id=removebetweencellswhenidle

```ts
sandkit.api.structures.removeBetweenCellsWhenIdle(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:404](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L404)

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

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### removeAtCells() :id=removeatcells

```ts
sandkit.api.structures.removeAtCells(positions: Vector2[], options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:428](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L428)

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

#### Example

```ts
api.structures.removeAtCells([
  { x: firstCellX, y: firstCellY },
  { x: secondCellX, y: secondCellY },
]);
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~removeAtCellsWhenIdle()~~ :id=removeatcellswhenidle

```ts
sandkit.api.structures.removeAtCellsWhenIdle(positions: Vector2[], options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:435](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L435)

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

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~addProcessor()~~ :id=addprocessor

```ts
sandkit.api.structures.addProcessor(structureId: StructureRef, definition: StructureProcessorDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:445](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L445)

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

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

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

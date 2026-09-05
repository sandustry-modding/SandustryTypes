# sandkit.api.structures

## Namespaces <!-- {docsify-ignore} -->

- [recipes](api/sandkit.api.structures.recipes.md)
- [processing](api/sandkit.api.structures.processing.md)

## Interfaces <!-- {docsify-ignore} -->

### StructureBuildMode :id=structurebuildmode

<p class="smt-member-path"><code>sandkit.api.structures.StructureBuildMode</code></p>

Defined in: [sandkit/api/structures.d.ts:524](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L524)

Build mode entry for a structure definition.

#### Properties

##### type

```ts
type: string;
```

Defined in: [sandkit/api/structures.d.ts:525](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L525)

##### directions?

```ts
optional directions?: string[]
```

Defined in: [sandkit/api/structures.d.ts:526](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L526)

##### spanTiles?

```ts
optional spanTiles?: number
```

Defined in: [sandkit/api/structures.d.ts:532](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L532)

Fixed span length in tiles for line-linked structures.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### StructureVariant :id=structurevariant

<p class="smt-member-path"><code>sandkit.api.structures.StructureVariant</code></p>

Defined in: [sandkit/api/structures.d.ts:536](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L536)

Rotated variant entry for a structure definition.

#### Properties

##### id

```ts
id: StructureRef;
```

Defined in: [sandkit/api/structures.d.ts:537](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L537)

##### angles

```ts
angles: number[]
```

Defined in: [sandkit/api/structures.d.ts:538](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L538)

---

### StructureTooltipHover :id=structuretooltiphover

<p class="smt-member-path"><code>sandkit.api.structures.StructureTooltipHover</code></p>

Defined in: [sandkit/api/structures.d.ts:569](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L569)

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
type: "custom";
```

Defined in: [sandkit/api/structures.d.ts:570](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L570)

##### dataFieldMessage

```ts
dataFieldMessage: object;
```

Defined in: [sandkit/api/structures.d.ts:571](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L571)

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

---

### StructureTooltipHoverField :id=structuretooltiphoverfield

<p class="smt-member-path"><code>sandkit.api.structures.StructureTooltipHoverField</code></p>

Defined in: [sandkit/api/structures.d.ts:579](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L579)

One interpolated field in a [StructureTooltipHover](#structuretooltiphover) message.

#### Properties

##### param

```ts
param: string;
```

Defined in: [sandkit/api/structures.d.ts:580](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L580)

##### field

```ts
field: string;
```

Defined in: [sandkit/api/structures.d.ts:581](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L581)

##### fallback?

```ts
optional fallback?: string | number
```

Defined in: [sandkit/api/structures.d.ts:582](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L582)

##### round?

```ts
optional round?: boolean
```

Defined in: [sandkit/api/structures.d.ts:583](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L583)

##### valueLabels?

```ts
optional valueLabels?: Record<string, string>
```

Defined in: [sandkit/api/structures.d.ts:584](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L584)

##### valueKeys?

```ts
optional valueKeys?: Record<string, string>
```

Defined in: [sandkit/api/structures.d.ts:585](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L585)

---

### StructureSpritesheet :id=structurespritesheet

<p class="smt-member-path"><code>sandkit.api.structures.StructureSpritesheet</code></p>

Defined in: [sandkit/api/structures.d.ts:589](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L589)

Spritesheet animation on a structure render block.

#### Properties

##### frameSize

```ts
frameSize: object;
```

Defined in: [sandkit/api/structures.d.ts:590](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L590)

###### width

```ts
width: number;
```

###### height

```ts
height: number;
```

##### frames

```ts
frames: number;
```

Defined in: [sandkit/api/structures.d.ts:591](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L591)

##### intervalMs

```ts
intervalMs: number;
```

Defined in: [sandkit/api/structures.d.ts:592](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L592)

##### rowDataField?

```ts
optional rowDataField?: string
```

Defined in: [sandkit/api/structures.d.ts:594](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L594)

When set, frame row follows this structure `data` field.

---

### StructureRenderUi :id=structurerenderui

<p class="smt-member-path"><code>sandkit.api.structures.StructureRenderUi</code></p>

Defined in: [sandkit/api/structures.d.ts:598](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L598)

Hotbar / build-menu UI sprite settings.

#### Properties

##### imageName?

```ts
optional imageName?: string
```

Defined in: [sandkit/api/structures.d.ts:599](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L599)

##### size?

```ts
optional size?: object
```

Defined in: [sandkit/api/structures.d.ts:600](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L600)

###### width

```ts
width: number;
```

###### height

```ts
height: number;
```

##### offset?

```ts
optional offset?: object
```

Defined in: [sandkit/api/structures.d.ts:601](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L601)

###### x

```ts
x: number;
```

###### y

```ts
y: number;
```

##### outline?

```ts
optional outline?: boolean
```

Defined in: [sandkit/api/structures.d.ts:602](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L602)

##### width?

```ts
optional width?: string
```

Defined in: [sandkit/api/structures.d.ts:603](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L603)

##### height?

```ts
optional height?: string
```

Defined in: [sandkit/api/structures.d.ts:604](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L604)

##### clipToBounds?

```ts
optional clipToBounds?: boolean
```

Defined in: [sandkit/api/structures.d.ts:605](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L605)

---

### StructureRender :id=structurerender

<p class="smt-member-path"><code>sandkit.api.structures.StructureRender</code></p>

Defined in: [sandkit/api/structures.d.ts:609](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L609)

Render settings for a structure definition.

#### Properties

##### imageName?

```ts
optional imageName?: string
```

Defined in: [sandkit/api/structures.d.ts:610](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L610)

##### size?

```ts
optional size?: object
```

Defined in: [sandkit/api/structures.d.ts:611](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L611)

###### width

```ts
width: number;
```

###### height

```ts
height: number;
```

##### offset?

```ts
optional offset?: object
```

Defined in: [sandkit/api/structures.d.ts:612](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L612)

###### x

```ts
x: number;
```

###### y

```ts
y: number;
```

##### z?

```ts
optional z?: number
```

Defined in: [sandkit/api/structures.d.ts:613](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L613)

##### ambienceGroup?

```ts
optional ambienceGroup?: string
```

Defined in: [sandkit/api/structures.d.ts:614](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L614)

##### ui?

```ts
optional ui?: StructureRenderUi
```

Defined in: [sandkit/api/structures.d.ts:615](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L615)

##### spritesheet?

```ts
optional spritesheet?: StructureSpritesheet
```

Defined in: [sandkit/api/structures.d.ts:616](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L616)

---

### SandkitStructureDefinition :id=sandkitstructuredefinition

<p class="smt-member-path"><code>sandkit.api.structures.SandkitStructureDefinition</code></p>

Defined in: [sandkit/api/structures.d.ts:620](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L620)

Full structure definition registered with the game.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### id

```ts
id: string & object;
```

Defined in: [sandkit/api/structures.d.ts:621](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L621)

##### name?

```ts
optional name?: string
```

Defined in: [sandkit/api/structures.d.ts:622](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L622)

##### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/structures.d.ts:623](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L623)

##### description?

```ts
optional description?: string
```

Defined in: [sandkit/api/structures.d.ts:624](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L624)

##### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [sandkit/api/structures.d.ts:625](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L625)

##### categoryKey?

```ts
optional categoryKey?: string
```

Defined in: [sandkit/api/structures.d.ts:626](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L626)

##### order?

```ts
optional order?: number
```

Defined in: [sandkit/api/structures.d.ts:627](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L627)

##### buildModes?

```ts
optional buildModes?: StructureBuildMode[]
```

Defined in: [sandkit/api/structures.d.ts:628](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L628)

##### shape?

```ts
optional shape?: number[][]
```

Defined in: [sandkit/api/structures.d.ts:629](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L629)

##### variants?

```ts
optional variants?: StructureVariant[]
```

Defined in: [sandkit/api/structures.d.ts:630](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L630)

##### render?

```ts
optional render?: StructureRender
```

Defined in: [sandkit/api/structures.d.ts:631](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L631)

##### defaultData?

```ts
optional defaultData?: Record<string, unknown>
```

Defined in: [sandkit/api/structures.d.ts:632](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L632)

##### linkedClearance?

```ts
optional linkedClearance?: string
```

Defined in: [sandkit/api/structures.d.ts:638](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L638)

Linked placement clearance mode (for example `"allOrNothing"`).

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### tooltipHover?

```ts
optional tooltipHover?: StructureTooltipHover
```

Defined in: [sandkit/api/structures.d.ts:644](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L644)

Custom hover tooltip over the built structure.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### rejectWhenBlocked?

```ts
optional rejectWhenBlocked?: boolean
```

Defined in: [sandkit/api/structures.d.ts:646](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L646)

Reject placement when the footprint is blocked.

##### alwaysUnlocked?

```ts
optional alwaysUnlocked?: boolean
```

Defined in: [sandkit/api/structures.d.ts:648](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L648)

Show in the build menu without research unlock.

##### descriptionParams?

```ts
optional descriptionParams?: Record<string, string | number>
```

Defined in: [sandkit/api/structures.d.ts:650](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L650)

Values interpolated into the structure description string.

---

### StructureBuildOptions :id=structurebuildoptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureBuildOptions</code></p>

Defined in: [sandkit/api/structures.d.ts:655](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L655)

Options passed to [buildAtCell](#buildatcell).

#### Indexable

```ts
[key: string]: unknown
```

---

### StructureRemovalOptions :id=structureremovaloptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureRemovalOptions</code></p>

Defined in: [sandkit/api/structures.d.ts:660](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L660)

Options passed to [removeAtCell](#removeatcell).

#### Properties

##### removeCells?

```ts
optional removeCells?: boolean
```

Defined in: [sandkit/api/structures.d.ts:662](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L662)

Also remove underlying terrain cells in the footprint.

##### skipVisuals?

```ts
optional skipVisuals?: boolean
```

Defined in: [sandkit/api/structures.d.ts:664](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L664)

Skip visual teardown effects.

---

### StructureBulkRemovalOptions :id=structurebulkremovaloptions

<p class="smt-member-path"><code>sandkit.api.structures.StructureBulkRemovalOptions</code></p>

Defined in: [sandkit/api/structures.d.ts:668](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L668)

Options passed to bulk structure removal helpers.

#### Properties

##### removeCells?

```ts
optional removeCells?: boolean
```

Defined in: [sandkit/api/structures.d.ts:669](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L669)

##### skipVisuals?

```ts
optional skipVisuals?: boolean
```

Defined in: [sandkit/api/structures.d.ts:670](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L670)

##### preserveUnselectable?

```ts
optional preserveUnselectable?: boolean
```

Defined in: [sandkit/api/structures.d.ts:672](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L672)

When set, only remove structures at these positions.

##### onlyPositions?

```ts
optional onlyPositions?: Vector2[]
```

Defined in: [sandkit/api/structures.d.ts:673](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L673)

---

### StructureProcessingContext :id=structureprocessingcontext

<p class="smt-member-path"><code>sandkit.api.structures.StructureProcessingContext</code></p>

Defined in: [sandkit/api/structures.d.ts:681](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L681)

Context passed to structure processing callbacks.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

#### Methods

##### getResolvedTypeAtCell()

```ts
getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [sandkit/api/structures.d.ts:687](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L687)

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

Defined in: [sandkit/api/structures.d.ts:694](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L694)

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

Defined in: [sandkit/api/structures.d.ts:701](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L701)

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

Defined in: [sandkit/api/structures.d.ts:708](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L708)

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

Defined in: [sandkit/api/structures.d.ts:717](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L717)

Commit batched grid mutations from the processing callback.

###### Parameters

###### mutations

`unknown`

Mutation writer payload accepted by the runtime.

###### Returns

`void`

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### ~~StructureProcessorDefinitionV1~~

Defined in: [sandkit/api/structures.d.ts:725](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L725)

#### Deprecated

Use [StructureProcessingDefinitionV1](#structureprocessingdefinitionv1) with [processing.register](api/sandkit.api.structures.processing.md#register) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

#### Properties

##### ~~intervalMs~~

```ts
intervalMs: number;
```

Defined in: [sandkit/api/structures.d.ts:727](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L727)

Tick interval in milliseconds. Must be > 0.

##### ~~process~~

```ts
process: (structure: Structure, context: StructureProcessingContext) => void
```

Defined in: [sandkit/api/structures.d.ts:729](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L729)

Synchronous callback invoked for each structure instance.

###### Parameters

###### structure

[`Structure`](api/sandkit.api.structures.worker.md#structure)

###### context

[`StructureProcessingContext`](#structureprocessingcontext)

###### Returns

`void`

---

### PlacementConfigIntegerField :id=placementconfigintegerfield

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigIntegerField</code></p>

Defined in: [sandkit/api/structures.d.ts:738](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L738)

Integer placement field with optional bounds.

#### Properties

##### type

```ts
type: "integer";
```

Defined in: [sandkit/api/structures.d.ts:739](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L739)

##### id

```ts
id: string;
```

Defined in: [sandkit/api/structures.d.ts:740](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L740)

##### labelKey

```ts
labelKey: string;
```

Defined in: [sandkit/api/structures.d.ts:741](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L741)

##### min?

```ts
optional min?: number
```

Defined in: [sandkit/api/structures.d.ts:742](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L742)

##### max?

```ts
optional max?: number
```

Defined in: [sandkit/api/structures.d.ts:743](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L743)

##### default?

```ts
optional default?: number
```

Defined in: [sandkit/api/structures.d.ts:744](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L744)

---

### PlacementConfigChoiceField :id=placementconfigchoicefield

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigChoiceField</code></p>

Defined in: [sandkit/api/structures.d.ts:748](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L748)

Choice placement field with labeled options.

#### Properties

##### type

```ts
type: "choice";
```

Defined in: [sandkit/api/structures.d.ts:749](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L749)

##### id

```ts
id: string;
```

Defined in: [sandkit/api/structures.d.ts:750](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L750)

##### labelKey

```ts
labelKey: string;
```

Defined in: [sandkit/api/structures.d.ts:751](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L751)

##### options

```ts
options: readonly object[]
```

Defined in: [sandkit/api/structures.d.ts:752](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L752)

---

### PlacementConfigDefinition :id=placementconfigdefinition

<p class="smt-member-path"><code>sandkit.api.structures.PlacementConfigDefinition</code></p>

Defined in: [sandkit/api/structures.d.ts:759](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L759)

Placement rule definition for a structure type.

#### Properties

##### structureId

```ts
structureId: string & object;
```

Defined in: [sandkit/api/structures.d.ts:760](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L760)

##### fields

```ts
fields: PlacementConfigField[]
```

Defined in: [sandkit/api/structures.d.ts:761](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L761)

---

### WeightedRefineryRecipeDefinitionV1 :id=weightedrefineryrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.WeightedRefineryRecipeDefinitionV1</code></p>

Defined in: [sandkit/api/structures.d.ts:772](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L772)

Weighted refinery recipe definition shape.

#### Properties

##### input

```ts
input: ElementType;
```

Defined in: [sandkit/api/structures.d.ts:773](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L773)

##### outputs

```ts
outputs: WeightedRecipeOutput[]
```

Defined in: [sandkit/api/structures.d.ts:774](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L774)

---

### StructureProcessingDefinitionV1 :id=structureprocessingdefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.StructureProcessingDefinitionV1</code></p>

Defined in: [sandkit/api/structures.d.ts:778](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L778)

Custom structure processing definition shape.

#### Properties

##### structureType

```ts
structureType: StructureRef;
```

Defined in: [sandkit/api/structures.d.ts:779](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L779)

##### intervalMs

```ts
intervalMs: number;
```

Defined in: [sandkit/api/structures.d.ts:780](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L780)

##### process

```ts
process: (structure: Structure, context: StructureProcessingContext) => void
```

Defined in: [sandkit/api/structures.d.ts:781](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L781)

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
PlacementConfigField = PlacementConfigIntegerField | PlacementConfigChoiceField;
```

Defined in: [sandkit/api/structures.d.ts:733](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L733)

Placement hotbar field definition.

---

### PlanterBoxRecipeDefinitionV1 :id=planterboxrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.PlanterBoxRecipeDefinitionV1</code></p>

```ts
PlanterBoxRecipeDefinitionV1 = PlanterBoxRecipeDefinitionV1;
```

Defined in: [sandkit/api/structures.d.ts:765](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L765)

Planter box recipe definition shape.

---

### ShakerRecipeDefinitionV1 :id=shakerrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.ShakerRecipeDefinitionV1</code></p>

```ts
ShakerRecipeDefinitionV1 = ShakerRecipeDefinitionV1;
```

Defined in: [sandkit/api/structures.d.ts:767](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L767)

Shaker recipe definition shape.

---

### KineticPressRecipeDefinitionV1 :id=kineticpressrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.structures.KineticPressRecipeDefinitionV1</code></p>

```ts
KineticPressRecipeDefinitionV1 = KineticPressRecipeDefinitionV1;
```

Defined in: [sandkit/api/structures.d.ts:769](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L769)

Kinetic press recipe definition shape.

## Functions <!-- {docsify-ignore} -->

### register() :id=register

<p class="smt-member-path"><code>sandkit.api.structures.register()</code></p>

```ts
register(definition: SandkitStructureDefinition, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L153)

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
  buildModes: [
    {
      type: "line",
      directions: ["horizontal", "vertical"],
      spanTiles: 4,
    },
  ],
  linkedClearance: "allOrNothing",
  tooltipHover,
  variants: [
    {
      id: "exampleJunction",
      angles: [-180, -90, 0, 90, 180],
    },
  ],
  render: {
    imageName: "exampleJunction",
    size: { width: 16, height: 16 },
  },
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### updateDefinition() :id=updatedefinition

<p class="smt-member-path"><code>sandkit.api.structures.updateDefinition()</code></p>

```ts
updateDefinition(structureTypeOrId: StructureRef, partial: Partial<SandkitStructureDefinition>, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:175](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L175)

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
  buildModes: [
    {
      type: "line",
      directions: ["horizontal", "vertical"],
      spanTiles: 6,
    },
  ],
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### registerVariant() :id=registervariant

<p class="smt-member-path"><code>sandkit.api.structures.registerVariant()</code></p>

```ts
registerVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:204](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L204)

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

---

### ~~addVariant()~~

```ts
addVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void
```

Defined in: [sandkit/api/structures.d.ts:211](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L211)

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

---

### registerPlacementConfig() :id=registerplacementconfig

<p class="smt-member-path"><code>sandkit.api.structures.registerPlacementConfig()</code></p>

```ts
registerPlacementConfig(definition: PlacementConfigDefinition): void
```

Defined in: [sandkit/api/structures.d.ts:247](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L247)

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

---

### getAvailableTypes() :id=getavailabletypes

<p class="smt-member-path"><code>sandkit.api.structures.getAvailableTypes()</code></p>

```ts
getAvailableTypes(): Set<StructureRef>
```

Defined in: [sandkit/api/structures.d.ts:254](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L254)

Return structure types available for building.

#### Returns

`Set`\<[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)\>

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### ~~getUnlockedTypes()~~

```ts
getUnlockedTypes(): Set<StructureRef>
```

Defined in: [sandkit/api/structures.d.ts:261](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L261)

#### Returns

`Set`\<[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)\>

#### Deprecated

Use [getAvailableTypes](#getavailabletypes) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### isBlockedByPlayerAtCell() :id=isblockedbyplayeratcell

<p class="smt-member-path"><code>sandkit.api.structures.isBlockedByPlayerAtCell()</code></p>

```ts
isBlockedByPlayerAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:271](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L271)

Return true when the player blocks building at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### isLauncherAtCell() :id=islauncheratcell

<p class="smt-member-path"><code>sandkit.api.structures.isLauncherAtCell()</code></p>

```ts
isLauncherAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:281](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L281)

Return true when a launcher structure is at the cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### isLockedByType() :id=islockedbytype

<p class="smt-member-path"><code>sandkit.api.structures.isLockedByType()</code></p>

```ts
isLockedByType(structureType: StructureRef): boolean
```

Defined in: [sandkit/api/structures.d.ts:293](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L293)

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

---

### ~~isUnlockedByType()~~

```ts
isUnlockedByType(structureType: StructureRef): boolean
```

Defined in: [sandkit/api/structures.d.ts:300](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L300)

#### Parameters

##### structureType

[`StructureRef`](api/sandkit.api.structures.worker.md#structureref)

#### Returns

`boolean`

#### Deprecated

Use [isLockedByType](#islockedbytype) instead. Same function as [isLockedByType](#islockedbytype); return value is not inverted.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### mapValueToSpritesheetIndex() :id=mapvaluetospritesheetindex

<p class="smt-member-path"><code>sandkit.api.structures.mapValueToSpritesheetIndex()</code></p>

```ts
mapValueToSpritesheetIndex(value: number, thresholds: number[]): number
```

Defined in: [sandkit/api/structures.d.ts:319](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L319)

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
const index = api.structures.mapValueToSpritesheetIndex(pressure, [0, 25, 50, 75]);
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### buildAtCell() :id=buildatcell

<p class="smt-member-path"><code>sandkit.api.structures.buildAtCell()</code></p>

```ts
buildAtCell(...args: number, number, [StructureRef, StructureBuildOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:331](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L331)

Build a structure at a cell. Main-thread writes are deferred.

#### Parameters

##### args

...\[`number`, `number`, [`StructureRef`](api/sandkit.api.structures.worker.md#structureref), [`StructureBuildOptions`](#structurebuildoptions)\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### ~~buildAtCellWhenIdle()~~

```ts
buildAtCellWhenIdle(...args: number, number, [StructureRef, StructureBuildOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:338](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L338)

#### Parameters

##### args

...\[`number`, `number`, [`StructureRef`](api/sandkit.api.structures.worker.md#structureref), [`StructureBuildOptions`](#structurebuildoptions)\]

#### Returns

`void`

#### Deprecated

Use [buildAtCell](#buildatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### removeAtCell() :id=removeatcell

<p class="smt-member-path"><code>sandkit.api.structures.removeAtCell()</code></p>

```ts
removeAtCell(...args: number, number, [StructureRemovalOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:349](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L349)

Remove a structure at a cell. Main-thread writes are deferred.

#### Parameters

##### args

...\[`number`, `number`, [`StructureRemovalOptions`](#structureremovaloptions)\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### ~~removeAtCellWhenIdle()~~

```ts
removeAtCellWhenIdle(...args: number, number, [StructureRemovalOptions]): void
```

Defined in: [sandkit/api/structures.d.ts:356](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L356)

#### Parameters

##### args

...\[`number`, `number`, [`StructureRemovalOptions`](#structureremovaloptions)\]

#### Returns

`void`

#### Deprecated

Use [removeAtCell](#removeatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### removeBetweenCells() :id=removebetweencells

<p class="smt-member-path"><code>sandkit.api.structures.removeBetweenCells()</code></p>

```ts
removeBetweenCells(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:369](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L369)

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

---

### ~~removeBetweenCellsWhenIdle()~~

```ts
removeBetweenCellsWhenIdle(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:376](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L376)

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

---

### removeAtCells() :id=removeatcells

<p class="smt-member-path"><code>sandkit.api.structures.removeAtCells()</code></p>

```ts
removeAtCells(positions: Vector2[], options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:394](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L394)

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

---

### ~~removeAtCellsWhenIdle()~~

```ts
removeAtCellsWhenIdle(positions: Vector2[], options?: StructureBulkRemovalOptions): void
```

Defined in: [sandkit/api/structures.d.ts:401](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L401)

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

---

### ~~addProcessor()~~

```ts
addProcessor(structureId: StructureRef, definition: StructureProcessorDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:408](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L408)

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

---

### getAtCell :id=getatcell

<p class="smt-member-path"><code>sandkit.api.structures.getAtCell</code></p>

Re-exports [getAtCell](api/sandkit.api.structures.worker.md#getatcell)

---

### getDefinitionByType :id=getdefinitionbytype

<p class="smt-member-path"><code>sandkit.api.structures.getDefinitionByType</code></p>

Re-exports [getDefinitionByType](api/sandkit.api.structures.worker.md#getdefinitionbytype)

---

### getTypeById :id=gettypebyid

<p class="smt-member-path"><code>sandkit.api.structures.getTypeById</code></p>

Re-exports [getTypeById](api/sandkit.api.structures.worker.md#gettypebyid)

---

### hasBuiltAtCell :id=hasbuiltatcell

<p class="smt-member-path"><code>sandkit.api.structures.hasBuiltAtCell</code></p>

Re-exports [hasBuiltAtCell](api/sandkit.api.structures.worker.md#hasbuiltatcell)

---

### isType :id=istype

<p class="smt-member-path"><code>sandkit.api.structures.isType</code></p>

Re-exports [isType](api/sandkit.api.structures.worker.md#istype)

---

### isTypeAtCell :id=istypeatcell

<p class="smt-member-path"><code>sandkit.api.structures.isTypeAtCell</code></p>

Re-exports [isTypeAtCell](api/sandkit.api.structures.worker.md#istypeatcell)

---

### setSpritesheetIndex :id=setspritesheetindex

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndex</code></p>

Re-exports [setSpritesheetIndex](api/sandkit.api.structures.worker.md#setspritesheetindex)

---

### setSpritesheetIndexAtCell :id=setspritesheetindexatcell

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexAtCell</code></p>

Re-exports [setSpritesheetIndexAtCell](api/sandkit.api.structures.worker.md#setspritesheetindexatcell)

---

### setSpritesheetIndexByValue :id=setspritesheetindexbyvalue

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexByValue</code></p>

Re-exports [setSpritesheetIndexByValue](api/sandkit.api.structures.worker.md#setspritesheetindexbyvalue)

---

### setSpritesheetIndexByValueAtCell :id=setspritesheetindexbyvalueatcell

<p class="smt-member-path"><code>sandkit.api.structures.setSpritesheetIndexByValueAtCell</code></p>

Re-exports [setSpritesheetIndexByValueAtCell](api/sandkit.api.structures.worker.md#setspritesheetindexbyvalueatcell)

---

### update :id=update

<p class="smt-member-path"><code>sandkit.api.structures.update</code></p>

Re-exports [update](api/sandkit.api.structures.worker.md#update)

---

### updateData :id=updatedata

<p class="smt-member-path"><code>sandkit.api.structures.updateData</code></p>

Re-exports [updateData](api/sandkit.api.structures.worker.md#updatedata)

---

### Structure :id=structure

<p class="smt-member-path"><code>sandkit.api.structures.Structure</code></p>

Re-exports [Structure](api/sandkit.api.structures.worker.md#structure)

---

### StructureType :id=structuretype

<p class="smt-member-path"><code>sandkit.api.structures.StructureType</code></p>

Re-exports [StructureType](api/sandkit.api.structures.worker.md#structuretype)

---

### StructureId :id=structureid

<p class="smt-member-path"><code>sandkit.api.structures.StructureId</code></p>

Re-exports [StructureId](api/sandkit.api.structures.worker.md#structureid)

---

### StructureRef :id=structureref

<p class="smt-member-path"><code>sandkit.api.structures.StructureRef</code></p>

Re-exports [StructureRef](api/sandkit.api.structures.worker.md#structureref)

---

### getTypeFromId :id=gettypefromid

<p class="smt-member-path"><code>sandkit.api.structures.getTypeFromId</code></p>

Re-exports [getTypeFromId](api/sandkit.api.structures.worker.md#gettypefromid)

---

### setData :id=setdata

<p class="smt-member-path"><code>sandkit.api.structures.setData</code></p>

Re-exports [setData](api/sandkit.api.structures.worker.md#setdata)

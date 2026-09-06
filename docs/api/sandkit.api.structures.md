# sandkit.api.structures

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structures.StructureBuildMode :id=structurebuildmode

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L536" target="_blank" rel="noopener">structures.d.ts:536</a></p>

| Property | Type | Description |
| --- | --- | --- |
| type | string |  |
| directions? | string[] |  |
| spanTiles? | number | Fixed span length in tiles for line-linked structures. |

<div class="smt-member-anchors">

##### type <!-- {docsify-ignore} -->

##### directions? <!-- {docsify-ignore} -->

##### spanTiles? <!-- {docsify-ignore} -->

</div>

Build mode entry for a structure definition.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureVariant :id=structurevariant

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L547" target="_blank" rel="noopener">structures.d.ts:547</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | StructureRef |  |
| angles | number[] |  |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### angles <!-- {docsify-ignore} -->

</div>

Rotated variant entry for a structure definition.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureTooltipHover :id=structuretooltiphover

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L579" target="_blank" rel="noopener">structures.d.ts:579</a></p>

| Property | Type | Description |
| --- | --- | --- |
| type | "custom" |  |
| dataFieldMessage | object |  |

<div class="smt-member-anchors">

##### type <!-- {docsify-ignore} -->

##### dataFieldMessage <!-- {docsify-ignore} -->

</div>

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

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureTooltipHoverField :id=structuretooltiphoverfield

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L589" target="_blank" rel="noopener">structures.d.ts:589</a></p>

| Property | Type | Description |
| --- | --- | --- |
| param | string |  |
| field | string |  |
| fallback? | string \| number |  |
| round? | boolean |  |
| valueLabels? | Record<string, string> |  |
| valueKeys? | Record<string, string> |  |

<div class="smt-member-anchors">

##### param <!-- {docsify-ignore} -->

##### field <!-- {docsify-ignore} -->

##### fallback? <!-- {docsify-ignore} -->

##### round? <!-- {docsify-ignore} -->

##### valueLabels? <!-- {docsify-ignore} -->

##### valueKeys? <!-- {docsify-ignore} -->

</div>

One interpolated field in a [StructureTooltipHover](?id=structuretooltiphover) message.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureSpritesheet :id=structurespritesheet

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L599" target="_blank" rel="noopener">structures.d.ts:599</a></p>

| Property | Type | Description |
| --- | --- | --- |
| frameSize | object |  |
| frames | number |  |
| intervalMs | number |  |
| rowDataField? | string | When set, frame row follows this structure `data` field. |

<div class="smt-member-anchors">

##### frameSize <!-- {docsify-ignore} -->

##### frames <!-- {docsify-ignore} -->

##### intervalMs <!-- {docsify-ignore} -->

##### rowDataField? <!-- {docsify-ignore} -->

</div>

Spritesheet animation on a structure render block.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureRenderUi :id=structurerenderui

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L608" target="_blank" rel="noopener">structures.d.ts:608</a></p>

| Property | Type | Description |
| --- | --- | --- |
| imageName? | string |  |
| size? | object |  |
| offset? | object |  |
| outline? | boolean |  |
| width? | string |  |
| height? | string |  |
| clipToBounds? | boolean |  |

<div class="smt-member-anchors">

##### imageName? <!-- {docsify-ignore} -->

##### size? <!-- {docsify-ignore} -->

##### offset? <!-- {docsify-ignore} -->

##### outline? <!-- {docsify-ignore} -->

##### width? <!-- {docsify-ignore} -->

##### height? <!-- {docsify-ignore} -->

##### clipToBounds? <!-- {docsify-ignore} -->

</div>

Hotbar / build-menu UI sprite settings.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureRender :id=structurerender

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L619" target="_blank" rel="noopener">structures.d.ts:619</a></p>

| Property | Type | Description |
| --- | --- | --- |
| imageName? | string |  |
| size? | object |  |
| offset? | object |  |
| z? | number |  |
| ambienceGroup? | string |  |
| ui? | StructureRenderUi |  |
| spritesheet? | StructureSpritesheet |  |

<div class="smt-member-anchors">

##### imageName? <!-- {docsify-ignore} -->

##### size? <!-- {docsify-ignore} -->

##### offset? <!-- {docsify-ignore} -->

##### z? <!-- {docsify-ignore} -->

##### ambienceGroup? <!-- {docsify-ignore} -->

##### ui? <!-- {docsify-ignore} -->

##### spritesheet? <!-- {docsify-ignore} -->

</div>

Render settings for a structure definition.

</div>

<div class="smt-member-card">

### sandkit.api.structures.SandkitStructureDefinition :id=sandkitstructuredefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L630" target="_blank" rel="noopener">structures.d.ts:630</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | string & object |  |
| name? | string |  |
| nameKey? | string |  |
| description? | string |  |
| descriptionKey? | string |  |
| categoryKey? | string |  |
| order? | number |  |
| buildModes? | StructureBuildMode[] |  |
| shape? | number[][] |  |
| variants? | StructureVariant[] |  |
| render? | StructureRender |  |
| defaultData? | Record<string, unknown> |  |
| linkedClearance? | string | Linked placement clearance mode (for example `"allOrNothing"`). |
| tooltipHover? | StructureTooltipHover | Custom hover tooltip over the built structure. |
| rejectWhenBlocked? | boolean | Reject placement when the footprint is blocked. |
| alwaysUnlocked? | boolean | Show in the build menu without research unlock. |
| descriptionParams? | Record<string, string \| number> | Values interpolated into the structure description string. |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### name? <!-- {docsify-ignore} -->

##### nameKey? <!-- {docsify-ignore} -->

##### description? <!-- {docsify-ignore} -->

##### descriptionKey? <!-- {docsify-ignore} -->

##### categoryKey? <!-- {docsify-ignore} -->

##### order? <!-- {docsify-ignore} -->

##### buildModes? <!-- {docsify-ignore} -->

##### shape? <!-- {docsify-ignore} -->

##### variants? <!-- {docsify-ignore} -->

##### render? <!-- {docsify-ignore} -->

##### defaultData? <!-- {docsify-ignore} -->

##### linkedClearance? <!-- {docsify-ignore} -->

##### tooltipHover? <!-- {docsify-ignore} -->

##### rejectWhenBlocked? <!-- {docsify-ignore} -->

##### alwaysUnlocked? <!-- {docsify-ignore} -->

##### descriptionParams? <!-- {docsify-ignore} -->

</div>

Full structure definition registered with the game.

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureBuildOptions :id=structurebuildoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L663" target="_blank" rel="noopener">structures.d.ts:663</a></p>

Options passed to [buildAtCell](?id=buildatcell).

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureRemovalOptions :id=structureremovaloptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L668" target="_blank" rel="noopener">structures.d.ts:668</a></p>

| Property | Type | Description |
| --- | --- | --- |
| removeCells? | boolean | Also remove underlying terrain cells in the footprint. |
| skipVisuals? | boolean | Skip visual teardown effects. |

<div class="smt-member-anchors">

##### removeCells? <!-- {docsify-ignore} -->

##### skipVisuals? <!-- {docsify-ignore} -->

</div>

Options passed to [removeAtCell](?id=removeatcell).

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureBulkRemovalOptions :id=structurebulkremovaloptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L676" target="_blank" rel="noopener">structures.d.ts:676</a></p>

| Property | Type | Description |
| --- | --- | --- |
| removeCells? | boolean |  |
| skipVisuals? | boolean |  |
| preserveUnselectable? | boolean | When set, only remove structures at these positions. |
| onlyPositions? | Vector2[] |  |

<div class="smt-member-anchors">

##### removeCells? <!-- {docsify-ignore} -->

##### skipVisuals? <!-- {docsify-ignore} -->

##### preserveUnselectable? <!-- {docsify-ignore} -->

##### onlyPositions? <!-- {docsify-ignore} -->

</div>

Options passed to bulk structure removal helpers.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureProcessingContext :id=structureprocessingcontext

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L688" target="_blank" rel="noopener">structures.d.ts:688</a></p>

Context passed to structure processing callbacks.

#### Methods

##### getResolvedTypeAtCell()

```ts
getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [sandkit/api/structures.d.ts:693](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L693)

Return the resolved element type at a cell, or null.

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)

###### Returns

[`ElementType`](api/sandkit.api.elements.md?id=elementtype) \| `null`

##### ~~getElementTypeAtCell()~~

```ts
getElementTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [sandkit/api/structures.d.ts:699](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L699)

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)

###### Returns

[`ElementType`](api/sandkit.api.elements.md?id=elementtype) \| `null`

###### Deprecated

Use [getResolvedTypeAtCell](?id=getresolvedtypeatcell) instead.

##### isCellEmptyAtCell()

```ts
isCellEmptyAtCell(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:705](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L705)

Return true when the cell has no element or terrain.

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)

###### Returns

`boolean`

##### ~~isCellEmpty()~~

```ts
isCellEmpty(...args: CellCoordinates): boolean
```

Defined in: [sandkit/api/structures.d.ts:711](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L711)

###### Parameters

###### args

...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates)

###### Returns

`boolean`

###### Deprecated

Use [isCellEmptyAtCell](?id=iscellemptyatcell) instead.

##### commit()

```ts
commit(mutations: unknown): void
```

Defined in: [sandkit/api/structures.d.ts:719](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L719)

Commit batched grid mutations from the processing callback.

###### Parameters

###### mutations

`unknown`

Mutation writer payload accepted by the runtime.

###### Returns

`void`

</div>

<div class="smt-member-card">

### ~~sandkit.api.structures.StructureProcessorDefinitionV1~~ :id=structureprocessordefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L726" target="_blank" rel="noopener">structures.d.ts:726</a></p>

| Property | Type | Description |
| --- | --- | --- |
| ~~intervalMs~~ | number | Tick interval in milliseconds. Must be > 0. |
| ~~process~~ | (structure: Structure, context: StructureProcessingContext) => void | Synchronous callback invoked for each structure instance. |

<div class="smt-member-anchors">

##### ~~intervalMs~~ <!-- {docsify-ignore} -->

##### ~~process~~ <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [StructureProcessingDefinitionV1](?id=structureprocessingdefinitionv1) with [processing.register](api/sandkit.api.structures.processing.md?id=register) instead.

</div>

<div class="smt-member-card">

### sandkit.api.structures.PlacementConfigIntegerField :id=placementconfigintegerfield

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L737" target="_blank" rel="noopener">structures.d.ts:737</a></p>

| Property | Type | Description |
| --- | --- | --- |
| type | "integer" |  |
| id | string |  |
| labelKey | string |  |
| min? | number |  |
| max? | number |  |
| default? | number |  |

<div class="smt-member-anchors">

##### type <!-- {docsify-ignore} -->

##### id <!-- {docsify-ignore} -->

##### labelKey <!-- {docsify-ignore} -->

##### min? <!-- {docsify-ignore} -->

##### max? <!-- {docsify-ignore} -->

##### default? <!-- {docsify-ignore} -->

</div>

Integer placement field with optional bounds.

</div>

<div class="smt-member-card">

### sandkit.api.structures.PlacementConfigChoiceField :id=placementconfigchoicefield

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L747" target="_blank" rel="noopener">structures.d.ts:747</a></p>

| Property | Type | Description |
| --- | --- | --- |
| type | "choice" |  |
| id | string |  |
| labelKey | string |  |
| options | readonly object[] |  |

<div class="smt-member-anchors">

##### type <!-- {docsify-ignore} -->

##### id <!-- {docsify-ignore} -->

##### labelKey <!-- {docsify-ignore} -->

##### options <!-- {docsify-ignore} -->

</div>

Choice placement field with labeled options.

</div>

<div class="smt-member-card">

### sandkit.api.structures.PlacementConfigDefinition :id=placementconfigdefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L758" target="_blank" rel="noopener">structures.d.ts:758</a></p>

| Property | Type | Description |
| --- | --- | --- |
| structureId | string & object |  |
| fields | PlacementConfigField[] |  |

<div class="smt-member-anchors">

##### structureId <!-- {docsify-ignore} -->

##### fields <!-- {docsify-ignore} -->

</div>

Placement rule definition for a structure type.

</div>

<div class="smt-member-card">

### sandkit.api.structures.WeightedRefineryRecipeDefinitionV1 :id=weightedrefineryrecipedefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L771" target="_blank" rel="noopener">structures.d.ts:771</a></p>

| Property | Type | Description |
| --- | --- | --- |
| input | ElementType |  |
| outputs | WeightedRecipeOutput[] |  |

<div class="smt-member-anchors">

##### input <!-- {docsify-ignore} -->

##### outputs <!-- {docsify-ignore} -->

</div>

Weighted refinery recipe definition shape.

</div>

<div class="smt-member-card">

### sandkit.api.structures.StructureProcessingDefinitionV1 :id=structureprocessingdefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L777" target="_blank" rel="noopener">structures.d.ts:777</a></p>

| Property | Type | Description |
| --- | --- | --- |
| structureType | StructureRef |  |
| intervalMs | number |  |
| process | (structure: Structure, context: StructureProcessingContext) => void |  |

<div class="smt-member-anchors">

##### structureType <!-- {docsify-ignore} -->

##### intervalMs <!-- {docsify-ignore} -->

##### process <!-- {docsify-ignore} -->

</div>

Custom structure processing definition shape.

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structures.PlacementConfigField :id=placementconfigfield

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L734" target="_blank" rel="noopener">structures.d.ts:734</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.PlacementConfigField = PlacementConfigIntegerField | PlacementConfigChoiceField">

```ts
PlacementConfigField = PlacementConfigIntegerField | PlacementConfigChoiceField
```

</div>

Placement hotbar field definition.

</div>

<div class="smt-member-card">

### sandkit.api.structures.PlanterBoxRecipeDefinitionV1 :id=planterboxrecipedefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L764" target="_blank" rel="noopener">structures.d.ts:764</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.PlanterBoxRecipeDefinitionV1 = PlanterBoxRecipeDefinitionV1">

```ts
PlanterBoxRecipeDefinitionV1 = PlanterBoxRecipeDefinitionV1
```

</div>

Planter box recipe definition shape.

</div>

<div class="smt-member-card">

### sandkit.api.structures.ShakerRecipeDefinitionV1 :id=shakerrecipedefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L766" target="_blank" rel="noopener">structures.d.ts:766</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.ShakerRecipeDefinitionV1 = ShakerRecipeDefinitionV1">

```ts
ShakerRecipeDefinitionV1 = ShakerRecipeDefinitionV1
```

</div>

Shaker recipe definition shape.

</div>

<div class="smt-member-card">

### sandkit.api.structures.KineticPressRecipeDefinitionV1 :id=kineticpressrecipedefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L768" target="_blank" rel="noopener">structures.d.ts:768</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.KineticPressRecipeDefinitionV1 = KineticPressRecipeDefinitionV1">

```ts
KineticPressRecipeDefinitionV1 = KineticPressRecipeDefinitionV1
```

</div>

Kinetic press recipe definition shape.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structures.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L149" target="_blank" rel="noopener">structures.d.ts:149</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.register(definition: SandkitStructureDefinition, options?: object): void">

```ts
register(definition: SandkitStructureDefinition, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | [`SandkitStructureDefinition`](?id=sandkitstructuredefinition) | Full structure definition. |
| options? | When `useRawShape` is true, keep the shape matrix as-is. |  |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Register a new structure definition.

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

</div>

<div class="smt-member-card">

### sandkit.api.structures.updateDefinition :id=updatedefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L173" target="_blank" rel="noopener">structures.d.ts:173</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.updateDefinition(structureTypeOrId: StructureRef, partial: Partial&lt;SandkitStructureDefinition&gt;, options?: object): void">

```ts
updateDefinition(structureTypeOrId: StructureRef, partial: Partial<SandkitStructureDefinition>, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureTypeOrId | [`StructureRef`](api/sandkit.api.structures.worker.md?id=structureref) | Structure type value or string id. |
| partial | `Partial`\<[`SandkitStructureDefinition`](?id=sandkitstructuredefinition)\> | Fields to merge onto the definition. |
| options? | When `useRawShape` is true, keep the shape matrix as-is. |  |

<div class="smt-member-anchors">

##### structureTypeOrId <!-- {docsify-ignore} -->

##### partial <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Patch fields on an existing structure definition.

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

</div>

<div class="smt-member-card">

### sandkit.api.structures.registerVariant :id=registervariant

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L205" target="_blank" rel="noopener">structures.d.ts:205</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.registerVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void">

```ts
registerVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| baseStructureTypeOrId | [`StructureRef`](api/sandkit.api.structures.worker.md?id=structureref) | Base structure type or id. |
| variant | Variant id and supported rotation angles. |  |
| options? | Optional build-mode wiring for the variant. |  |

<div class="smt-member-anchors">

##### baseStructureTypeOrId <!-- {docsify-ignore} -->

##### variant <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Add a rotated variant to a base structure type.

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

</div>

<div class="smt-member-card">

### ~~sandkit.api.structures.addVariant~~ :id=addvariant

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L215" target="_blank" rel="noopener">structures.d.ts:215</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.addVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void">

```ts
addVariant(baseStructureTypeOrId: StructureRef, variant: object, options?: object): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| baseStructureTypeOrId | [`StructureRef`](api/sandkit.api.structures.worker.md?id=structureref) |  |
| variant |  |  |
| options? |  |  |

<div class="smt-member-anchors">

##### baseStructureTypeOrId <!-- {docsify-ignore} -->

##### variant <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [registerVariant](?id=registervariant) instead.

</div>

<div class="smt-member-card">

### sandkit.api.structures.registerPlacementConfig :id=registerplacementconfig

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L254" target="_blank" rel="noopener">structures.d.ts:254</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.registerPlacementConfig(definition: PlacementConfigDefinition): void">

```ts
registerPlacementConfig(definition: PlacementConfigDefinition): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | [`PlacementConfigDefinition`](?id=placementconfigdefinition) | Hotbar placement field configuration. |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Register placement rules for a structure.

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

</div>

<div class="smt-member-card">

### sandkit.api.structures.getAvailableTypes :id=getavailabletypes

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L260" target="_blank" rel="noopener">structures.d.ts:260</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.getAvailableTypes(): Set&lt;StructureRef&gt;">

```ts
getAvailableTypes(): Set<StructureRef>
```

</div>

Return structure types available for building.

`Set`\<[`StructureRef`](api/sandkit.api.structures.worker.md?id=structureref)\>

</div>

<div class="smt-member-card">

### ~~sandkit.api.structures.getUnlockedTypes~~ :id=getunlockedtypes

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L266" target="_blank" rel="noopener">structures.d.ts:266</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.getUnlockedTypes(): Set&lt;StructureRef&gt;">

```ts
getUnlockedTypes(): Set<StructureRef>
```

</div>

`Set`\<[`StructureRef`](api/sandkit.api.structures.worker.md?id=structureref)\>

#### Deprecated

Use [getAvailableTypes](?id=getavailabletypes) instead.

</div>

<div class="smt-member-card">

### sandkit.api.structures.isBlockedByPlayerAtCell :id=isblockedbyplayeratcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L275" target="_blank" rel="noopener">structures.d.ts:275</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.isBlockedByPlayerAtCell(...args: CellCoordinates): boolean">

```ts
isBlockedByPlayerAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the player blocks building at the cell.

</div>

<div class="smt-member-card">

### sandkit.api.structures.isLauncherAtCell :id=islauncheratcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L284" target="_blank" rel="noopener">structures.d.ts:284</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.isLauncherAtCell(...args: CellCoordinates): boolean">

```ts
isLauncherAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when a launcher structure is at the cell.

</div>

<div class="smt-member-card">

### sandkit.api.structures.isLockedByType :id=islockedbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L295" target="_blank" rel="noopener">structures.d.ts:295</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.isLockedByType(structureType: StructureRef): boolean">

```ts
isLockedByType(structureType: StructureRef): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureType | [`StructureRef`](api/sandkit.api.structures.worker.md?id=structureref) | Structure type value or string id. |

<div class="smt-member-anchors">

##### structureType <!-- {docsify-ignore} -->

</div>

Return structure lock state for a type.

Official docs list [isUnlockedByType](?id=isunlockedbytype) as a deprecated alias of this
function (same implementation and return value; names differ only).

</div>

<div class="smt-member-card">

### ~~sandkit.api.structures.isUnlockedByType~~ :id=isunlockedbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L301" target="_blank" rel="noopener">structures.d.ts:301</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.isUnlockedByType(structureType: StructureRef): boolean">

```ts
isUnlockedByType(structureType: StructureRef): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureType | [`StructureRef`](api/sandkit.api.structures.worker.md?id=structureref) |  |

<div class="smt-member-anchors">

##### structureType <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [isLockedByType](?id=islockedbytype) instead. Same function as [isLockedByType](?id=islockedbytype); return value is not inverted.

</div>

<div class="smt-member-card">

### sandkit.api.structures.mapValueToSpritesheetIndex :id=mapvaluetospritesheetindex

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L319" target="_blank" rel="noopener">structures.d.ts:319</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.mapValueToSpritesheetIndex(value: number, thresholds: number[]): number">

```ts
mapValueToSpritesheetIndex(value: number, thresholds: number[]): number
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| value | `number` | Numeric value to map. |
| thresholds | `number`[] | Ascending threshold values. |

<div class="smt-member-anchors">

##### value <!-- {docsify-ignore} -->

##### thresholds <!-- {docsify-ignore} -->

</div>

Map a numeric value through thresholds to a spritesheet index.

Spritesheet frame index.

#### Example

```ts
const index = api.structures.mapValueToSpritesheetIndex(
  pressure,
  [0, 25, 50, 75],
);
```

</div>

<div class="smt-member-card">

### sandkit.api.structures.buildAtCell :id=buildatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L330" target="_blank" rel="noopener">structures.d.ts:330</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.buildAtCell(...args: number, number, [StructureRef, StructureBuildOptions]): void">

```ts
buildAtCell(...args: number, number, [StructureRef, StructureBuildOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`StructureRef`](api/sandkit.api.structures.worker.md?id=structureref), [`StructureBuildOptions`](?id=structurebuildoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Build a structure at a cell. Main-thread writes are deferred.

</div>

<div class="smt-member-card">

### ~~sandkit.api.structures.buildAtCellWhenIdle~~ :id=buildatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L338" target="_blank" rel="noopener">structures.d.ts:338</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.buildAtCellWhenIdle(...args: number, number, [StructureRef, StructureBuildOptions]): void">

```ts
buildAtCellWhenIdle(...args: number, number, [StructureRef, StructureBuildOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`StructureRef`](api/sandkit.api.structures.worker.md?id=structureref), [`StructureBuildOptions`](?id=structurebuildoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [buildAtCell](?id=buildatcell) instead.

</div>

<div class="smt-member-card">

### sandkit.api.structures.removeAtCell :id=removeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L350" target="_blank" rel="noopener">structures.d.ts:350</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.removeAtCell(...args: number, number, [StructureRemovalOptions]): void">

```ts
removeAtCell(...args: number, number, [StructureRemovalOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`StructureRemovalOptions`](?id=structureremovaloptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Remove a structure at a cell. Main-thread writes are deferred.

</div>

<div class="smt-member-card">

### ~~sandkit.api.structures.removeAtCellWhenIdle~~ :id=removeatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L358" target="_blank" rel="noopener">structures.d.ts:358</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.removeAtCellWhenIdle(...args: number, number, [StructureRemovalOptions]): void">

```ts
removeAtCellWhenIdle(...args: number, number, [StructureRemovalOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`StructureRemovalOptions`](?id=structureremovaloptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [removeAtCell](?id=removeatcell) instead.

</div>

<div class="smt-member-card">

### sandkit.api.structures.removeBetweenCells :id=removebetweencells

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L372" target="_blank" rel="noopener">structures.d.ts:372</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.removeBetweenCells(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void">

```ts
removeBetweenCells(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| startCellX | `number` | Start cell column. |
| startCellY | `number` | Start cell row. |
| endCellX | `number` | End cell column. |
| endCellY | `number` | End cell row. |
| options? | [`StructureBulkRemovalOptions`](?id=structurebulkremovaloptions) | Optional bulk-removal flags. |

<div class="smt-member-anchors">

##### startCellX <!-- {docsify-ignore} -->

##### startCellY <!-- {docsify-ignore} -->

##### endCellX <!-- {docsify-ignore} -->

##### endCellY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Remove structures between two cells. Main-thread writes are deferred.

</div>

<div class="smt-member-card">

### ~~sandkit.api.structures.removeBetweenCellsWhenIdle~~ :id=removebetweencellswhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L384" target="_blank" rel="noopener">structures.d.ts:384</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.removeBetweenCellsWhenIdle(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void">

```ts
removeBetweenCellsWhenIdle(startCellX: number, startCellY: number, endCellX: number, endCellY: number, options?: StructureBulkRemovalOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| startCellX | `number` |  |
| startCellY | `number` |  |
| endCellX | `number` |  |
| endCellY | `number` |  |
| options? | [`StructureBulkRemovalOptions`](?id=structurebulkremovaloptions) |  |

<div class="smt-member-anchors">

##### startCellX <!-- {docsify-ignore} -->

##### startCellY <!-- {docsify-ignore} -->

##### endCellX <!-- {docsify-ignore} -->

##### endCellY <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [removeBetweenCells](?id=removebetweencells) instead.

</div>

<div class="smt-member-card">

### sandkit.api.structures.removeAtCells :id=removeatcells

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L407" target="_blank" rel="noopener">structures.d.ts:407</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.removeAtCells(positions: Vector2[], options?: StructureBulkRemovalOptions): void">

```ts
removeAtCells(positions: Vector2[], options?: StructureBulkRemovalOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| positions | [`Vector2`](api/shared.player.md?id=vector2)[] | Cell positions to clear. |
| options? | [`StructureBulkRemovalOptions`](?id=structurebulkremovaloptions) | Optional bulk-removal flags. |

<div class="smt-member-anchors">

##### positions <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Remove structures at many cells. Main-thread writes are deferred.

#### Example

```ts
api.structures.removeAtCells([
  { x: firstCellX, y: firstCellY },
  { x: secondCellX, y: secondCellY },
]);
```

</div>

<div class="smt-member-card">

### ~~sandkit.api.structures.removeAtCellsWhenIdle~~ :id=removeatcellswhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L413" target="_blank" rel="noopener">structures.d.ts:413</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.removeAtCellsWhenIdle(positions: Vector2[], options?: StructureBulkRemovalOptions): void">

```ts
removeAtCellsWhenIdle(positions: Vector2[], options?: StructureBulkRemovalOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| positions | [`Vector2`](api/shared.player.md?id=vector2)[] |  |
| options? | [`StructureBulkRemovalOptions`](?id=structurebulkremovaloptions) |  |

<div class="smt-member-anchors">

##### positions <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [removeAtCells](?id=removeatcells) instead.

</div>

<div class="smt-member-card">

### ~~sandkit.api.structures.addProcessor~~ :id=addprocessor

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L422" target="_blank" rel="noopener">structures.d.ts:422</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.addProcessor(structureId: StructureRef, definition: StructureProcessorDefinitionV1): void">

```ts
addProcessor(structureId: StructureRef, definition: StructureProcessorDefinitionV1): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureId | [`StructureRef`](api/sandkit.api.structures.worker.md?id=structureref) |  |
| definition | [`StructureProcessorDefinitionV1`](?id=structureprocessordefinitionv1) |  |

<div class="smt-member-anchors">

##### structureId <!-- {docsify-ignore} -->

##### definition <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [processing.register](api/sandkit.api.structures.processing.md?id=register) instead.

</div>

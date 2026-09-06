# sandkit.api.elements

`sandkit.api.elements` — register elements and read or change cells on the main thread.
Main thread only.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Enumerations <!-- {docsify-ignore} -->

- [MatterType](api/sandkit.api.elements.MatterType.md)

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.elements.InteractionStructureMetadata :id=interactionstructuremetadata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L87" target="_blank" rel="noopener">elements.d.ts:87</a></p>

| Property | Type | Description |
| --- | --- | --- |
| textKey? | string | i18n key for custom interaction label text. |
| crossedOutWhen? | object | Hide the label when a data field matches a value. |
| visibleWhen? | object | Show the label only when a data field matches a value. |
| onlyWhenTranslated? | boolean | Require the text key to exist in the active locale. |

<div class="smt-member-anchors">

##### textKey? <!-- {docsify-ignore} -->

##### crossedOutWhen? <!-- {docsify-ignore} -->

##### visibleWhen? <!-- {docsify-ignore} -->

##### onlyWhenTranslated? <!-- {docsify-ignore} -->

</div>

Optional tooltip metadata on structure interactions.

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementCreateOptions :id=elementcreateoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L86" target="_blank" rel="noopener">elements.d.ts:86</a></p>

| Property | Type | Description |
| --- | --- | --- |
| data? | Record<string, unknown> | Initial element data bag. |
| density? | number | Override element density. |
| durationTicks? | number | Set both max and remaining duration in simulation ticks. |
| ~~duration?~~ | number |  |
| isFreeFalling? | boolean | Override free-fall state on spawn. |
| dataFields? | object | Override default data fields 1–4. |
| particle? | object | Spawn as a particle with the given velocity. |
| skipCollectorCheck? | boolean | Skip collector accounting when placing the element. |

<div class="smt-member-anchors">

##### data? <!-- {docsify-ignore} -->

##### density? <!-- {docsify-ignore} -->

##### durationTicks? <!-- {docsify-ignore} -->

##### ~~duration?~~ <!-- {docsify-ignore} -->

##### isFreeFalling? <!-- {docsify-ignore} -->

##### dataFields? <!-- {docsify-ignore} -->

##### particle? <!-- {docsify-ignore} -->

##### skipCollectorCheck? <!-- {docsify-ignore} -->

</div>

Options for [createAtCell](?id=createatcell), replace, and related create helpers.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementRemovalOptions :id=elementremovaloptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L125" target="_blank" rel="noopener">elements.d.ts:125</a></p>

| Property | Type | Description |
| --- | --- | --- |
| skipCollectorCheck? | boolean | Skip collector accounting when removing the element. |

<div class="smt-member-anchors">

##### skipCollectorCheck? <!-- {docsify-ignore} -->

</div>

Options for element removal helpers.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.elements.InteractionDestroyer :id=interactiondestroyer

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L99" target="_blank" rel="noopener">elements.d.ts:99</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.InteractionDestroyer = object">

```ts
InteractionDestroyer = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| kind | "destroyer" |  |
| items | readonly string[] | Item ids removed by this interaction (for example `"drill"`). |

<div class="smt-member-anchors">

##### kind <!-- {docsify-ignore} -->

##### items <!-- {docsify-ignore} -->

</div>

Interaction that destroys specific items.

</div>

<div class="smt-member-card">

### sandkit.api.elements.InteractionStructure :id=interactionstructure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L106" target="_blank" rel="noopener">elements.d.ts:106</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.InteractionStructure = InteractionStructureMetadata &amp; object">

```ts
InteractionStructure = InteractionStructureMetadata & object
```

</div>

Interaction that affects specific structures.

#### Type Declaration

##### kind

```ts
kind: "structure"
```

##### structures

```ts
structures: readonly string[]
```

Structure ids shown in the interaction tooltip.

</div>

<div class="smt-member-card">

### sandkit.api.elements.InteractionEntity :id=interactionentity

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L113" target="_blank" rel="noopener">elements.d.ts:113</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.InteractionEntity = object">

```ts
InteractionEntity = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| kind | "entity" |  |
| entities | readonly string[] | Entity type ids referenced by the interaction. |

<div class="smt-member-anchors">

##### kind <!-- {docsify-ignore} -->

##### entities <!-- {docsify-ignore} -->

</div>

Interaction that affects specific entities.

</div>

<div class="smt-member-card">

### sandkit.api.elements.InteractionFlammable :id=interactionflammable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L120" target="_blank" rel="noopener">elements.d.ts:120</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.InteractionFlammable = object">

```ts
InteractionFlammable = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| kind | "flammable" |  |

<div class="smt-member-anchors">

##### kind <!-- {docsify-ignore} -->

</div>

Interaction that marks the element as flammable.

</div>

<div class="smt-member-card">

### sandkit.api.elements.InteractionMeltable :id=interactionmeltable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L122" target="_blank" rel="noopener">elements.d.ts:122</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.InteractionMeltable = object">

```ts
InteractionMeltable = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| kind | "meltable" |  |

<div class="smt-member-anchors">

##### kind <!-- {docsify-ignore} -->

</div>

Interaction that marks the element as meltable.

</div>

<div class="smt-member-card">

### sandkit.api.elements.InteractionFreezable :id=interactionfreezable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L124" target="_blank" rel="noopener">elements.d.ts:124</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.InteractionFreezable = object">

```ts
InteractionFreezable = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| kind | "freezable" |  |

<div class="smt-member-anchors">

##### kind <!-- {docsify-ignore} -->

</div>

Interaction that marks the element as freezable.

</div>

<div class="smt-member-card">

### sandkit.api.elements.InteractionCustom :id=interactioncustom

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L126" target="_blank" rel="noopener">elements.d.ts:126</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.InteractionCustom = InteractionStructureMetadata &amp; object">

```ts
InteractionCustom = InteractionStructureMetadata & object
```

</div>

Interaction handled by custom mod logic and tooltip text.

#### Type Declaration

##### kind

```ts
kind: "custom"
```

</div>

<div class="smt-member-card">

### sandkit.api.elements.Interaction :id=interaction

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L129" target="_blank" rel="noopener">elements.d.ts:129</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.Interaction = InteractionDestroyer | InteractionStructure | InteractionEntity | InteractionFlammable | InteractionMeltable | InteractionFreezable | InteractionCustom">

```ts
Interaction = InteractionDestroyer | InteractionStructure | InteractionEntity | InteractionFlammable | InteractionMeltable | InteractionFreezable | InteractionCustom
```

</div>

Union of element interaction kinds for tool and structure logic.

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementType :id=elementtype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L20" target="_blank" rel="noopener">elements.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.ElementType = ElementType | TaggedNumber&lt;&quot;elementType&quot;&gt;">

```ts
ElementType = ElementType | TaggedNumber<"elementType">
```

</div>

Numeric element type handle.
Built-in [ElementTypeEnum](api/sandkit.enums.ElementType.md) values autocomplete; [getTypeById](?id=gettypebyid) returns a tagged handle.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementId :id=elementid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L27" target="_blank" rel="noopener">elements.d.ts:27</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.ElementId = LooseString&lt;never&gt;">

```ts
ElementId = LooseString<never>
```

</div>

Mod or built-in element string id.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementRef :id=elementref

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L34" target="_blank" rel="noopener">elements.d.ts:34</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.ElementRef = ElementType | ElementId">

```ts
ElementRef = ElementType | ElementId
```

</div>

Type handle or string id accepted by lookup helpers.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.ElementDefinition :id=elementdefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L57" target="_blank" rel="noopener">elements.d.ts:57</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.ElementDefinition = object">

```ts
ElementDefinition = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| id | string |  |
| nameKey | string |  |
| defaultDataFields? | object |  |
| colors | object |  |
| density | number |  |
| matterType | MatterType |  |
| metaColor? | number | UI/meta color as 0xRRGGBB. |
| isGrabbable? | boolean | When true, the grabber can pick up this element. |
| isTransportable? | boolean | When true, conveyors can move this element. |
| getExtraProps? | () => object |  |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### nameKey <!-- {docsify-ignore} -->

##### defaultDataFields? <!-- {docsify-ignore} -->

##### colors <!-- {docsify-ignore} -->

##### density <!-- {docsify-ignore} -->

##### matterType <!-- {docsify-ignore} -->

##### metaColor? <!-- {docsify-ignore} -->

##### isGrabbable? <!-- {docsify-ignore} -->

##### isTransportable? <!-- {docsify-ignore} -->

##### getExtraProps? <!-- {docsify-ignore} -->

</div>

Mod-registered element definition snapshot.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.elements.getRegisteredTypes :id=getregisteredtypes

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L143" target="_blank" rel="noopener">elements.d.ts:143</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getRegisteredTypes(): ElementType[]">

```ts
getRegisteredTypes(): ElementType[]
```

</div>

Returns all registered element type ids.

[`ElementType`](?id=elementtype)[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L153" target="_blank" rel="noopener">elements.d.ts:153</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.register(definition: ElementDefinition): object">

```ts
register(definition: ElementDefinition): object
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | [`ElementDefinition`](?id=elementdefinition) | Full element definition to register. |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Registers a new element and returns its assigned type id.

Object with the assigned `elementType`. elementType: ElementType

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.updateDefinition :id=updatedefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L170" target="_blank" rel="noopener">elements.d.ts:170</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.updateDefinition(elementTypeOrId: ElementRef, partial: Partial&lt;ElementDefinition&gt;): void">

```ts
updateDefinition(elementTypeOrId: ElementRef, partial: Partial<ElementDefinition>): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementTypeOrId | [`ElementRef`](?id=elementref) | Numeric type or string id. |
| partial | `Partial`\<[`ElementDefinition`](?id=elementdefinition)\> | Fields to merge onto the definition. |

<div class="smt-member-anchors">

##### elementTypeOrId <!-- {docsify-ignore} -->

##### partial <!-- {docsify-ignore} -->

</div>

Updates fields on an existing element definition.

#### Example

```ts
api.elements.updateDefinition("exampleElement", {
  showInFilterPicker: false,
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.addInteractionInfo :id=addinteractioninfo

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L183" target="_blank" rel="noopener">elements.d.ts:183</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.addInteractionInfo(elementTypeOrId: ElementRef, interaction: Interaction): void">

```ts
addInteractionInfo(elementTypeOrId: ElementRef, interaction: Interaction): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementTypeOrId | [`ElementRef`](?id=elementref) | Numeric type or string id. |
| interaction | [`Interaction`](?id=interaction) | Interaction entry to append. |

<div class="smt-member-anchors">

##### elementTypeOrId <!-- {docsify-ignore} -->

##### interaction <!-- {docsify-ignore} -->

</div>

Adds an interaction entry to an element definition.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.getNameByType :id=getnamebytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L192" target="_blank" rel="noopener">elements.d.ts:192</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getNameByType(elementType: ElementType): string">

```ts
getNameByType(elementType: ElementType): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementType | [`ElementType`](?id=elementtype) | Numeric element type. |

<div class="smt-member-anchors">

##### elementType <!-- {docsify-ignore} -->

</div>

Returns the display name for an element type.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.findFreeCellInStructure :id=findfreecellinstructure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L204" target="_blank" rel="noopener">elements.d.ts:204</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.findFreeCellInStructure(structureCellX: number, structureCellY: number, structureSizeCells: number): Vector2 | null">

```ts
findFreeCellInStructure(structureCellX: number, structureCellY: number, structureSizeCells: number): Vector2 | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| structureCellX | `number` | Structure anchor cell column. |
| structureCellY | `number` | Structure anchor cell row. |
| structureSizeCells | `number` | Structure footprint size in cells. |

<div class="smt-member-anchors">

##### structureCellX <!-- {docsify-ignore} -->

##### structureCellY <!-- {docsify-ignore} -->

##### structureSizeCells <!-- {docsify-ignore} -->

</div>

Finds a free cell inside a structure footprint, or null.

[`Vector2`](api/shared.player.md?id=vector2) \| `null` Cell coordinates of a free cell, or null when none.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.createAtCell :id=createatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L234" target="_blank" rel="noopener">elements.d.ts:234</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void">

```ts
createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`ElementRef`](?id=elementref), [`ElementCreateOptions`](?id=elementcreateoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Create an element at a cell. Main-entry writes are deferred; reads see the old grid.

#### Examples

**Main entry**

```ts
api.elements.createAtCell(cellX, cellY, "water", {
  durationTicks: 60,
});
```

**options.durationTicks**

```ts
api.elements.createAtCell(cellX, cellY, "steam", {
  durationTicks: 120,
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.elements.createAtCellWhenIdle~~ :id=createatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L243" target="_blank" rel="noopener">elements.d.ts:243</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.createAtCellWhenIdle(...args: number, number, [ElementRef, ElementCreateOptions]): void">

```ts
createAtCellWhenIdle(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`ElementRef`](?id=elementref), [`ElementCreateOptions`](?id=elementcreateoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [createAtCell](?id=createatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.replaceAtCell :id=replaceatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L257" target="_blank" rel="noopener">elements.d.ts:257</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void">

```ts
replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`ElementRef`](?id=elementref), [`ElementCreateOptions`](?id=elementcreateoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Replace the element at a cell. Main-entry writes are deferred; reads see the old grid.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.elements.replaceAtCellWhenIdle~~ :id=replaceatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L266" target="_blank" rel="noopener">elements.d.ts:266</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.replaceAtCellWhenIdle(...args: number, number, [ElementRef, ElementCreateOptions]): void">

```ts
replaceAtCellWhenIdle(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`ElementRef`](?id=elementref), [`ElementCreateOptions`](?id=elementcreateoptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [replaceAtCell](?id=replaceatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.removeAtCell :id=removeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L279" target="_blank" rel="noopener">elements.d.ts:279</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.removeAtCell(...args: number, number, [ElementRemovalOptions]): void">

```ts
removeAtCell(...args: number, number, [ElementRemovalOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`ElementRemovalOptions`](?id=elementremovaloptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Remove the element at a cell. Main-entry writes are deferred; reads see the old grid.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.elements.removeAtCellWhenIdle~~ :id=removeatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L288" target="_blank" rel="noopener">elements.d.ts:288</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.removeAtCellWhenIdle(...args: number, number, [ElementRemovalOptions]): void">

```ts
removeAtCellWhenIdle(...args: number, number, [ElementRemovalOptions]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`ElementRemovalOptions`](?id=elementremovaloptions)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [removeAtCell](?id=removeatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.teleportBetweenCells :id=teleportbetweencells

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L302" target="_blank" rel="noopener">elements.d.ts:302</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void">

```ts
teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| fromCellX | `number` | Source cell column. |
| fromCellY | `number` | Source cell row. |
| toCellX | `number` | Destination cell column. |
| toCellY | `number` | Destination cell row. |

<div class="smt-member-anchors">

##### fromCellX <!-- {docsify-ignore} -->

##### fromCellY <!-- {docsify-ignore} -->

##### toCellX <!-- {docsify-ignore} -->

##### toCellY <!-- {docsify-ignore} -->

</div>

Move an element between cells. Main-entry writes are deferred; reads see the old grid.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.elements.teleportBetweenCellsWhenIdle~~ :id=teleportbetweencellswhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L314" target="_blank" rel="noopener">elements.d.ts:314</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.teleportBetweenCellsWhenIdle(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void">

```ts
teleportBetweenCellsWhenIdle(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| fromCellX | `number` |  |
| fromCellY | `number` |  |
| toCellX | `number` |  |
| toCellY | `number` |  |

<div class="smt-member-anchors">

##### fromCellX <!-- {docsify-ignore} -->

##### fromCellY <!-- {docsify-ignore} -->

##### toCellX <!-- {docsify-ignore} -->

##### toCellY <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [teleportBetweenCells](?id=teleportbetweencells) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.setVelocityAtCell :id=setvelocityatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L335" target="_blank" rel="noopener">elements.d.ts:335</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setVelocityAtCell(...args: number, number, [Vector2]): void">

```ts
setVelocityAtCell(...args: number, number, [Vector2]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set particle velocity at a cell. Main-entry writes are deferred; reads see the old grid.

#### Example

```ts
api.elements.setVelocityAtCell(cellX, cellY, { x: 0, y: -120 });
```

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.elements.setVelocityAtCellWhenIdle~~ :id=setvelocityatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L342" target="_blank" rel="noopener">elements.d.ts:342</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setVelocityAtCellWhenIdle(...args: number, number, [Vector2]): void">

```ts
setVelocityAtCellWhenIdle(...args: number, number, [Vector2]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [setVelocityAtCell](?id=setvelocityatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.addParticleVelocityAtCell :id=addparticlevelocityatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L364" target="_blank" rel="noopener">elements.d.ts:364</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.addParticleVelocityAtCell(...args: number, number, [Vector2, number]): void">

```ts
addParticleVelocityAtCell(...args: number, number, [Vector2, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2), `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Add velocity to a particle at a cell. Main-entry writes are deferred; reads see the old grid.

#### Example

```ts
api.elements.addParticleVelocityAtCell(
  cellX,
  cellY,
  { x: 4, y: -8 },
  120,
);
```

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.elements.addParticleVelocityAtCellWhenIdle~~ :id=addparticlevelocityatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L373" target="_blank" rel="noopener">elements.d.ts:373</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.addParticleVelocityAtCellWhenIdle(...args: number, number, [Vector2, number]): void">

```ts
addParticleVelocityAtCellWhenIdle(...args: number, number, [Vector2, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2), `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [addParticleVelocityAtCell](?id=addparticlevelocityatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.convertToParticleAtCell :id=converttoparticleatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L395" target="_blank" rel="noopener">elements.d.ts:395</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.convertToParticleAtCell(...args: number, number, [Vector2]): void">

```ts
convertToParticleAtCell(...args: number, number, [Vector2]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Convert a cell element to a particle. Main-entry writes are deferred; reads see the old grid.

#### Example

```ts
api.elements.convertToParticleAtCell(
  cellX,
  cellY,
  { x: 0, y: -120 },
);
```

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.elements.convertToParticleAtCellWhenIdle~~ :id=converttoparticleatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L402" target="_blank" rel="noopener">elements.d.ts:402</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.convertToParticleAtCellWhenIdle(...args: number, number, [Vector2]): void">

```ts
convertToParticleAtCellWhenIdle(...args: number, number, [Vector2]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`Vector2`](api/shared.player.md?id=vector2)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [convertToParticleAtCell](?id=converttoparticleatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.convertFromParticleAtCell :id=convertfromparticleatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L414" target="_blank" rel="noopener">elements.d.ts:414</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.convertFromParticleAtCell(...args: CellCoordinates): void">

```ts
convertFromParticleAtCell(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Convert a particle back to a solid element. Main-entry writes are deferred; reads see the old grid.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.elements.convertFromParticleAtCellWhenIdle~~ :id=convertfromparticleatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L421" target="_blank" rel="noopener">elements.d.ts:421</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.convertFromParticleAtCellWhenIdle(...args: CellCoordinates): void">

```ts
convertFromParticleAtCellWhenIdle(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [convertFromParticleAtCell](?id=convertfromparticleatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.setDataFieldAtCell :id=setdatafieldatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L433" target="_blank" rel="noopener">elements.d.ts:433</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4, number]): void">

```ts
setDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `1` \\| `2` \\| `3` \\| `4`, `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set a data field on the element at a cell. Main-entry writes are deferred; reads see the old grid.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.elements.setDataFieldAtCellWhenIdle~~ :id=setdatafieldatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L442" target="_blank" rel="noopener">elements.d.ts:442</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setDataFieldAtCellWhenIdle(...args: [number, number, 1 | 2 | 3 | 4, number]): void">

```ts
setDataFieldAtCellWhenIdle(...args: [number, number, 1 | 2 | 3 | 4, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `1` \\| `2` \\| `3` \\| `4`, `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [setDataFieldAtCell](?id=setdatafieldatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.refreshColorAtCell :id=refreshcoloratcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L454" target="_blank" rel="noopener">elements.d.ts:454</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.refreshColorAtCell(...args: CellCoordinates): void">

```ts
refreshColorAtCell(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Refresh the rendered color at a cell. Main-entry writes are deferred; reads see the old grid.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.elements.refreshColorAtCellWhenIdle~~ :id=refreshcoloratcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L461" target="_blank" rel="noopener">elements.d.ts:461</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.refreshColorAtCellWhenIdle(...args: CellCoordinates): void">

```ts
refreshColorAtCellWhenIdle(...args: CellCoordinates): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [refreshColorAtCell](?id=refreshcoloratcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.setPhysicsAtCell :id=setphysicsatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L472" target="_blank" rel="noopener">elements.d.ts:472</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setPhysicsAtCell(...args: [number, number, number]): void">

```ts
setPhysicsAtCell(...args: [number, number, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set the physics skip mode at a cell. Main-entry writes are deferred; reads see the old grid.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.elements.setPhysicsAtCellWhenIdle~~ :id=setphysicsatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L479" target="_blank" rel="noopener">elements.d.ts:479</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setPhysicsAtCellWhenIdle(...args: [number, number, number]): void">

```ts
setPhysicsAtCellWhenIdle(...args: [number, number, number]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [setPhysicsAtCell](?id=setphysicsatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.setDurationAtCell :id=setdurationatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L503" target="_blank" rel="noopener">elements.d.ts:503</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setDurationAtCell(...args: [number, number, number, object]): void">

```ts
setDurationAtCell(...args: [number, number, number, object]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`, `object`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set element duration at a cell. Main-entry writes are deferred; reads see the old grid.

#### Example

**Main entry**

```ts
api.elements.setDurationAtCell(
  cellX,
  cellY,
  120,
  { updateMax: true },
);
```

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.elements.setDurationAtCellWhenIdle~~ :id=setdurationatcellwhenidle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L512" target="_blank" rel="noopener">elements.d.ts:512</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.setDurationAtCellWhenIdle(...args: [number, number, number, object]): void">

```ts
setDurationAtCellWhenIdle(...args: [number, number, number, object]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `number`, `object`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [setDurationAtCell](?id=setdurationatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.getIdByType :id=getidbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L137" target="_blank" rel="noopener">elements.d.ts:137</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getIdByType(elementType: ElementType): string &amp; object">

```ts
getIdByType(elementType: ElementType): string & object
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementType | [`ElementType`](?id=elementtype) | Numeric element type. |

<div class="smt-member-anchors">

##### elementType <!-- {docsify-ignore} -->

</div>

Return the mod string id for a numeric element type.

`string` & `object`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.getTypeById :id=gettypebyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L146" target="_blank" rel="noopener">elements.d.ts:146</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getTypeById(elementId: string &amp; object): ElementType">

```ts
getTypeById(elementId: string & object): ElementType
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementId | `string` & `object` | Mod-registered element id. |

<div class="smt-member-anchors">

##### elementId <!-- {docsify-ignore} -->

</div>

Resolve a mod element string id to a type handle.

[`ElementType`](?id=elementtype)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.elements.getTypeFromId~~ :id=gettypefromid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L153" target="_blank" rel="noopener">elements.d.ts:153</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getTypeFromId(elementId: string &amp; object): ElementType">

```ts
getTypeFromId(elementId: string & object): ElementType
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementId | `string` & `object` |  |

<div class="smt-member-anchors">

##### elementId <!-- {docsify-ignore} -->

</div>

[`ElementType`](?id=elementtype)

#### Deprecated

Use [getTypeById](?id=gettypebyid) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.getDefinitionByType :id=getdefinitionbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L162" target="_blank" rel="noopener">elements.d.ts:162</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getDefinitionByType(elementType: ElementType): ElementDefinition | undefined">

```ts
getDefinitionByType(elementType: ElementType): ElementDefinition | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| elementType | [`ElementType`](?id=elementtype) | Numeric element type. |

<div class="smt-member-anchors">

##### elementType <!-- {docsify-ignore} -->

</div>

Look up the definition for a type handle.

[`ElementDefinition`](?id=elementdefinition) \| `undefined`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.getTypeAtCell :id=gettypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L172" target="_blank" rel="noopener">elements.d.ts:172</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getTypeAtCell(...args: CellCoordinates): ElementType | null">

```ts
getTypeAtCell(...args: CellCoordinates): ElementType | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the raw element type at a cell (may differ from resolved type).

[`ElementType`](?id=elementtype) \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.getResolvedTypeAtCell :id=getresolvedtypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L182" target="_blank" rel="noopener">elements.d.ts:182</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null">

```ts
getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the resolved element type after overlays and particles.

[`ElementType`](?id=elementtype) \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.getResolvedTypeFromCellId :id=getresolvedtypefromcellid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L191" target="_blank" rel="noopener">elements.d.ts:191</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getResolvedTypeFromCellId(cellId: CellId): ElementType | null">

```ts
getResolvedTypeFromCellId(cellId: CellId): ElementType | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| cellId | [`CellId`](api/shared.nominal.md?id=cellid) | Packed cell id from [world.getCellIdAtCell](api/sandkit.api.grid.md?id=getcellidatcell). |

<div class="smt-member-anchors">

##### cellId <!-- {docsify-ignore} -->

</div>

Return the resolved element type from a packed cell id.

[`ElementType`](?id=elementtype) \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.getInfoAtCell :id=getinfoatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L201" target="_blank" rel="noopener">elements.d.ts:201</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getInfoAtCell(...args: CellCoordinates): { elementType: ElementType; isParticle: boolean; cellId: CellId; elementIndex: number; } | null">

```ts
getInfoAtCell(...args: CellCoordinates): { elementType: ElementType; isParticle: boolean; cellId: CellId; elementIndex: number; } | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return element index, particle flag, and ids at a cell.

\{ `elementType`: [`ElementType`](?id=elementtype); `isParticle`: `boolean`; `cellId`: [`CellId`](api/shared.nominal.md?id=cellid); `elementIndex`: `number`; \} \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.getMatterTypeAtCell :id=getmattertypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L213" target="_blank" rel="noopener">elements.d.ts:213</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getMatterTypeAtCell(...args: CellCoordinates): MatterType | null">

```ts
getMatterTypeAtCell(...args: CellCoordinates): MatterType | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the matter category at a cell, or null when empty.

[`MatterType`](api/sandkit.api.elements.MatterType.md) \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.isTypeAtCell :id=istypeatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L224" target="_blank" rel="noopener">elements.d.ts:224</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.isTypeAtCell(...args: number, number, [ElementRef]): boolean">

```ts
isTypeAtCell(...args: number, number, [ElementRef]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, [`ElementRef`](?id=elementref)\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the cell holds the given element type or id.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.isFreeFallingAtCell :id=isfreefallingatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L234" target="_blank" rel="noopener">elements.d.ts:234</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.isFreeFallingAtCell(...args: CellCoordinates): boolean">

```ts
isFreeFallingAtCell(...args: CellCoordinates): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return true when the element at the cell is falling.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.getVelocityAtCell :id=getvelocityatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L244" target="_blank" rel="noopener">elements.d.ts:244</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getVelocityAtCell(...args: CellCoordinates): { x: number; y: number; } | null">

```ts
getVelocityAtCell(...args: CellCoordinates): { x: number; y: number; } | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...[`CellCoordinates`](api/shared.player.md?id=cellcoordinates) |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return per-cell velocity for moving elements.

\{ `x`: `number`; `y`: `number`; \} \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.elements.getDataFieldAtCell :id=getdatafieldatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L255" target="_blank" rel="noopener">elements.d.ts:255</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.elements.getDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4]): number | null">

```ts
getDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4]): number | null
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `1` \\| `2` \\| `3` \\| `4`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Read element data field 1–4 at a cell.

`number` \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

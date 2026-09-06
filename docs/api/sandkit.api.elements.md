# sandkit.api.elements

`sandkit.api.elements` — register elements and read or change cells on the main thread.
Main thread only.

## See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

## Enumerations <!-- {docsify-ignore} -->

- [MatterType](api/sandkit.api.elements.MatterType.md)

## Interfaces <!-- {docsify-ignore} -->

### InteractionStructureMetadata :id=interactionstructuremetadata

<p class="smt-member-path"><code>sandkit.api.elements.InteractionStructureMetadata</code></p>
Defined in: [sandkit/api/elements.d.ts:87](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L87)

Optional tooltip metadata on structure interactions.

#### Properties

##### textKey?

```ts
optional textKey?: string
```

Defined in: [sandkit/api/elements.d.ts:89](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L89)

i18n key for custom interaction label text.

##### crossedOutWhen?

```ts
optional crossedOutWhen?: object
```

Defined in: [sandkit/api/elements.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L91)

Hide the label when a data field matches a value.

###### dataField

```ts
dataField: number
```

###### equals

```ts
equals: number
```

##### visibleWhen?

```ts
optional visibleWhen?: object
```

Defined in: [sandkit/api/elements.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L93)

Show the label only when a data field matches a value.

###### dataField

```ts
dataField: number
```

###### equals

```ts
equals: number
```

##### onlyWhenTranslated?

```ts
optional onlyWhenTranslated?: boolean
```

Defined in: [sandkit/api/elements.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L95)

Require the text key to exist in the active locale.

***

### ElementCreateOptions :id=elementcreateoptions

<p class="smt-member-path"><code>sandkit.api.elements.ElementCreateOptions</code></p>
Defined in: [shared/api/elements.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L86)

Options for [createAtCell](#createatcell), replace, and related create helpers.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

#### Properties

##### data?

```ts
optional data?: Record<string, unknown>
```

Defined in: [shared/api/elements.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L88)

Initial element data bag.

##### density?

```ts
optional density?: number
```

Defined in: [shared/api/elements.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L90)

Override element density.

##### durationTicks?

```ts
optional durationTicks?: number
```

Defined in: [shared/api/elements.d.ts:96](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L96)

Set both max and remaining duration in simulation ticks.

###### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

##### ~~duration?~~

```ts
optional duration?: number
```

Defined in: [shared/api/elements.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L102)

###### Deprecated

Use [durationTicks](#durationticks) instead.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### isFreeFalling?

```ts
optional isFreeFalling?: boolean
```

Defined in: [shared/api/elements.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L104)

Override free-fall state on spawn.

##### dataFields?

```ts
optional dataFields?: object
```

Defined in: [shared/api/elements.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L106)

Override default data fields 1–4.

###### field1?

```ts
optional field1?: number
```

###### field2?

```ts
optional field2?: number
```

###### field3?

```ts
optional field3?: number
```

###### field4?

```ts
optional field4?: number
```

##### particle?

```ts
optional particle?: object
```

Defined in: [shared/api/elements.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L113)

Spawn as a particle with the given velocity.

###### velocity

```ts
velocity: Vector2
```

##### skipCollectorCheck?

```ts
optional skipCollectorCheck?: boolean
```

Defined in: [shared/api/elements.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L117)

Skip collector accounting when placing the element.

***

### ElementRemovalOptions :id=elementremovaloptions

<p class="smt-member-path"><code>sandkit.api.elements.ElementRemovalOptions</code></p>
Defined in: [shared/api/elements.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L125)

Options for element removal helpers.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

#### Properties

##### skipCollectorCheck?

```ts
optional skipCollectorCheck?: boolean
```

Defined in: [shared/api/elements.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L127)

Skip collector accounting when removing the element.

## Type Aliases <!-- {docsify-ignore} -->

### InteractionDestroyer :id=interactiondestroyer

```ts
sandkit.api.elements.InteractionDestroyer = object
```

Defined in: [sandkit/api/elements.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L99)

Interaction that destroys specific items.

#### Properties

##### kind

```ts
kind: "destroyer"
```

Defined in: [sandkit/api/elements.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L100)

##### items

```ts
items: readonly string[]
```

Defined in: [sandkit/api/elements.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L102)

Item ids removed by this interaction (for example `"drill"`).

***

### InteractionStructure :id=interactionstructure

```ts
sandkit.api.elements.InteractionStructure = InteractionStructureMetadata & object
```

Defined in: [sandkit/api/elements.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L106)

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

***

### InteractionEntity :id=interactionentity

```ts
sandkit.api.elements.InteractionEntity = object
```

Defined in: [sandkit/api/elements.d.ts:113](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L113)

Interaction that affects specific entities.

#### Properties

##### kind

```ts
kind: "entity"
```

Defined in: [sandkit/api/elements.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L114)

##### entities

```ts
entities: readonly string[]
```

Defined in: [sandkit/api/elements.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L116)

Entity type ids referenced by the interaction.

***

### InteractionFlammable :id=interactionflammable

```ts
sandkit.api.elements.InteractionFlammable = object
```

Defined in: [sandkit/api/elements.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L120)

Interaction that marks the element as flammable.

#### Properties

##### kind

```ts
kind: "flammable"
```

Defined in: [sandkit/api/elements.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L120)

***

### InteractionMeltable :id=interactionmeltable

```ts
sandkit.api.elements.InteractionMeltable = object
```

Defined in: [sandkit/api/elements.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L122)

Interaction that marks the element as meltable.

#### Properties

##### kind

```ts
kind: "meltable"
```

Defined in: [sandkit/api/elements.d.ts:122](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L122)

***

### InteractionFreezable :id=interactionfreezable

```ts
sandkit.api.elements.InteractionFreezable = object
```

Defined in: [sandkit/api/elements.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L124)

Interaction that marks the element as freezable.

#### Properties

##### kind

```ts
kind: "freezable"
```

Defined in: [sandkit/api/elements.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L124)

***

### InteractionCustom :id=interactioncustom

```ts
sandkit.api.elements.InteractionCustom = InteractionStructureMetadata & object
```

Defined in: [sandkit/api/elements.d.ts:126](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L126)

Interaction handled by custom mod logic and tooltip text.

#### Type Declaration

##### kind

```ts
kind: "custom"
```

***

### Interaction :id=interaction

```ts
sandkit.api.elements.Interaction = InteractionDestroyer | InteractionStructure | InteractionEntity | InteractionFlammable | InteractionMeltable | InteractionFreezable | InteractionCustom
```

Defined in: [sandkit/api/elements.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L129)

Union of element interaction kinds for tool and structure logic.

***

### ElementType :id=elementtype

```ts
sandkit.api.elements.ElementType = ElementType | TaggedNumber<"elementType">
```

Defined in: [shared/api/elements.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L20)

Numeric element type handle.
Built-in [ElementTypeEnum](api/sandkit.enums.ElementType.md) values autocomplete; [getTypeById](#gettypebyid) returns a tagged handle.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ElementId :id=elementid

```ts
sandkit.api.elements.ElementId = LooseString<never>
```

Defined in: [shared/api/elements.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L27)

Mod or built-in element string id.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ElementRef :id=elementref

```ts
sandkit.api.elements.ElementRef = ElementType | ElementId
```

Defined in: [shared/api/elements.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L34)

Type handle or string id accepted by lookup helpers.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ElementDefinition :id=elementdefinition

```ts
sandkit.api.elements.ElementDefinition = object
```

Defined in: [shared/api/elements.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L57)

Mod-registered element definition snapshot.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

#### Properties

##### id

```ts
id: string
```

Defined in: [shared/api/elements.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L58)

##### nameKey

```ts
nameKey: string
```

Defined in: [shared/api/elements.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L59)

##### defaultDataFields?

```ts
optional defaultDataFields?: object
```

Defined in: [shared/api/elements.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L60)

###### Index Signature

\[`key`: `string`\]: `number`

##### colors

```ts
colors: object
```

Defined in: [shared/api/elements.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L61)

###### variantFromDataField1?

```ts
optional variantFromDataField1?: object
```

###### variantFromDataField1.rangeMin?

```ts
optional rangeMin?: number
```

###### variantFromDataField1.rangeMax?

```ts
optional rangeMax?: number
```

###### variantFromDataField1.invert?

```ts
optional invert?: boolean
```

###### variantFromDataField1.useGradient?

```ts
optional useGradient?: boolean
```

###### variants

```ts
variants: [number, number, number][]
```

##### density

```ts
density: number
```

Defined in: [shared/api/elements.d.ts:70](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L70)

##### matterType

```ts
matterType: MatterType
```

Defined in: [shared/api/elements.d.ts:71](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L71)

##### metaColor?

```ts
optional metaColor?: number
```

Defined in: [shared/api/elements.d.ts:73](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L73)

UI/meta color as 0xRRGGBB.

##### isGrabbable?

```ts
optional isGrabbable?: boolean
```

Defined in: [shared/api/elements.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L75)

When true, the grabber can pick up this element.

##### isTransportable?

```ts
optional isTransportable?: boolean
```

Defined in: [shared/api/elements.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L77)

When true, conveyors can move this element.

##### getExtraProps?

```ts
optional getExtraProps?: () => object
```

Defined in: [shared/api/elements.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L78)

###### Returns

`object`

###### data

```ts
data: Record<PropertyKey, any>
```

## Functions <!-- {docsify-ignore} -->

### getRegisteredTypes() :id=getregisteredtypes

```ts
sandkit.api.elements.getRegisteredTypes(): ElementType[]
```

Defined in: [sandkit/api/elements.d.ts:143](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L143)

Returns all registered element type ids.

#### Returns

[`ElementType`](#elementtype)[]

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### register() :id=register

```ts
sandkit.api.elements.register(definition: ElementDefinition): object
```

Defined in: [sandkit/api/elements.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L153)

Registers a new element and returns its assigned type id.

#### Parameters

##### definition

[`ElementDefinition`](#elementdefinition)

Full element definition to register.

#### Returns

`object`

Object with the assigned `elementType`.

##### elementType

```ts
elementType: ElementType
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### updateDefinition() :id=updatedefinition

```ts
sandkit.api.elements.updateDefinition(elementTypeOrId: ElementRef, partial: Partial<ElementDefinition>): void
```

Defined in: [sandkit/api/elements.d.ts:170](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L170)

Updates fields on an existing element definition.

#### Parameters

##### elementTypeOrId

[`ElementRef`](#elementref)

Numeric type or string id.

##### partial

`Partial`\<[`ElementDefinition`](#elementdefinition)\>

Fields to merge onto the definition.

#### Returns

`void`

#### Example

```ts
api.elements.updateDefinition("exampleElement", {
  showInFilterPicker: false,
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### addInteractionInfo() :id=addinteractioninfo

```ts
sandkit.api.elements.addInteractionInfo(elementTypeOrId: ElementRef, interaction: Interaction): void
```

Defined in: [sandkit/api/elements.d.ts:183](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L183)

Adds an interaction entry to an element definition.

#### Parameters

##### elementTypeOrId

[`ElementRef`](#elementref)

Numeric type or string id.

##### interaction

[`Interaction`](#interaction)

Interaction entry to append.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getNameByType() :id=getnamebytype

```ts
sandkit.api.elements.getNameByType(elementType: ElementType): string
```

Defined in: [sandkit/api/elements.d.ts:192](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L192)

Returns the display name for an element type.

#### Parameters

##### elementType

[`ElementType`](#elementtype)

Numeric element type.

#### Returns

`string`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### findFreeCellInStructure() :id=findfreecellinstructure

```ts
sandkit.api.elements.findFreeCellInStructure(structureCellX: number, structureCellY: number, structureSizeCells: number): Vector2 | null
```

Defined in: [sandkit/api/elements.d.ts:204](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L204)

Finds a free cell inside a structure footprint, or null.

#### Parameters

##### structureCellX

`number`

Structure anchor cell column.

##### structureCellY

`number`

Structure anchor cell row.

##### structureSizeCells

`number`

Structure footprint size in cells.

#### Returns

[`Vector2`](api/shared.player.md#vector2) \| `null`

Cell coordinates of a free cell, or null when none.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### createAtCell() :id=createatcell

```ts
sandkit.api.elements.createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:234](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L234)

Create an element at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`ElementRef`](#elementref), [`ElementCreateOptions`](#elementcreateoptions)\]

#### Returns

`void`

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

***

### ~~createAtCellWhenIdle()~~ :id=createatcellwhenidle

```ts
sandkit.api.elements.createAtCellWhenIdle(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:243](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L243)

#### Parameters

##### args

...\[`number`, `number`, [`ElementRef`](#elementref), [`ElementCreateOptions`](#elementcreateoptions)\]

#### Returns

`void`

#### Deprecated

Use [createAtCell](#createatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### replaceAtCell() :id=replaceatcell

```ts
sandkit.api.elements.replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:257](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L257)

Replace the element at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`ElementRef`](#elementref), [`ElementCreateOptions`](#elementcreateoptions)\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~replaceAtCellWhenIdle()~~ :id=replaceatcellwhenidle

```ts
sandkit.api.elements.replaceAtCellWhenIdle(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:266](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L266)

#### Parameters

##### args

...\[`number`, `number`, [`ElementRef`](#elementref), [`ElementCreateOptions`](#elementcreateoptions)\]

#### Returns

`void`

#### Deprecated

Use [replaceAtCell](#replaceatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### removeAtCell() :id=removeatcell

```ts
sandkit.api.elements.removeAtCell(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:279](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L279)

Remove the element at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`ElementRemovalOptions`](#elementremovaloptions)\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~removeAtCellWhenIdle()~~ :id=removeatcellwhenidle

```ts
sandkit.api.elements.removeAtCellWhenIdle(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:288](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L288)

#### Parameters

##### args

...\[`number`, `number`, [`ElementRemovalOptions`](#elementremovaloptions)\]

#### Returns

`void`

#### Deprecated

Use [removeAtCell](#removeatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### teleportBetweenCells() :id=teleportbetweencells

```ts
sandkit.api.elements.teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

Defined in: [sandkit/api/elements.d.ts:302](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L302)

Move an element between cells. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### fromCellX

`number`

Source cell column.

##### fromCellY

`number`

Source cell row.

##### toCellX

`number`

Destination cell column.

##### toCellY

`number`

Destination cell row.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~teleportBetweenCellsWhenIdle()~~ :id=teleportbetweencellswhenidle

```ts
sandkit.api.elements.teleportBetweenCellsWhenIdle(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

Defined in: [sandkit/api/elements.d.ts:314](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L314)

#### Parameters

##### fromCellX

`number`

##### fromCellY

`number`

##### toCellX

`number`

##### toCellY

`number`

#### Returns

`void`

#### Deprecated

Use [teleportBetweenCells](#teleportbetweencells) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### setVelocityAtCell() :id=setvelocityatcell

```ts
sandkit.api.elements.setVelocityAtCell(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:335](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L335)

Set particle velocity at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

#### Returns

`void`

#### Example

```ts
api.elements.setVelocityAtCell(cellX, cellY, { x: 0, y: -120 });
```

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~setVelocityAtCellWhenIdle()~~ :id=setvelocityatcellwhenidle

```ts
sandkit.api.elements.setVelocityAtCellWhenIdle(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:342](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L342)

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

#### Returns

`void`

#### Deprecated

Use [setVelocityAtCell](#setvelocityatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### addParticleVelocityAtCell() :id=addparticlevelocityatcell

```ts
sandkit.api.elements.addParticleVelocityAtCell(...args: number, number, [Vector2, number]): void
```

Defined in: [sandkit/api/elements.d.ts:364](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L364)

Add velocity to a particle at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`\]

#### Returns

`void`

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

***

### ~~addParticleVelocityAtCellWhenIdle()~~ :id=addparticlevelocityatcellwhenidle

```ts
sandkit.api.elements.addParticleVelocityAtCellWhenIdle(...args: number, number, [Vector2, number]): void
```

Defined in: [sandkit/api/elements.d.ts:373](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L373)

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`\]

#### Returns

`void`

#### Deprecated

Use [addParticleVelocityAtCell](#addparticlevelocityatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### convertToParticleAtCell() :id=converttoparticleatcell

```ts
sandkit.api.elements.convertToParticleAtCell(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:395](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L395)

Convert a cell element to a particle. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

#### Returns

`void`

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

***

### ~~convertToParticleAtCellWhenIdle()~~ :id=converttoparticleatcellwhenidle

```ts
sandkit.api.elements.convertToParticleAtCellWhenIdle(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:402](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L402)

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

#### Returns

`void`

#### Deprecated

Use [convertToParticleAtCell](#converttoparticleatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### convertFromParticleAtCell() :id=convertfromparticleatcell

```ts
sandkit.api.elements.convertFromParticleAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:414](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L414)

Convert a particle back to a solid element. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~convertFromParticleAtCellWhenIdle()~~ :id=convertfromparticleatcellwhenidle

```ts
sandkit.api.elements.convertFromParticleAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:421](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L421)

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### Deprecated

Use [convertFromParticleAtCell](#convertfromparticleatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### setDataFieldAtCell() :id=setdatafieldatcell

```ts
sandkit.api.elements.setDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4, number]): void
```

Defined in: [sandkit/api/elements.d.ts:433](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L433)

Set a data field on the element at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`, `number`\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~setDataFieldAtCellWhenIdle()~~ :id=setdatafieldatcellwhenidle

```ts
sandkit.api.elements.setDataFieldAtCellWhenIdle(...args: [number, number, 1 | 2 | 3 | 4, number]): void
```

Defined in: [sandkit/api/elements.d.ts:442](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L442)

#### Parameters

##### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`, `number`\]

#### Returns

`void`

#### Deprecated

Use [setDataFieldAtCell](#setdatafieldatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### refreshColorAtCell() :id=refreshcoloratcell

```ts
sandkit.api.elements.refreshColorAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:454](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L454)

Refresh the rendered color at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~refreshColorAtCellWhenIdle()~~ :id=refreshcoloratcellwhenidle

```ts
sandkit.api.elements.refreshColorAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:461](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L461)

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### Deprecated

Use [refreshColorAtCell](#refreshcoloratcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### setPhysicsAtCell() :id=setphysicsatcell

```ts
sandkit.api.elements.setPhysicsAtCell(...args: [number, number, number]): void
```

Defined in: [sandkit/api/elements.d.ts:472](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L472)

Set the physics skip mode at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### ~~setPhysicsAtCellWhenIdle()~~ :id=setphysicsatcellwhenidle

```ts
sandkit.api.elements.setPhysicsAtCellWhenIdle(...args: [number, number, number]): void
```

Defined in: [sandkit/api/elements.d.ts:479](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L479)

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### Deprecated

Use [setPhysicsAtCell](#setphysicsatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### setDurationAtCell() :id=setdurationatcell

```ts
sandkit.api.elements.setDurationAtCell(...args: [number, number, number, object]): void
```

Defined in: [sandkit/api/elements.d.ts:503](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L503)

Set element duration at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, `number`, `object`\]

#### Returns

`void`

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

***

### ~~setDurationAtCellWhenIdle()~~ :id=setdurationatcellwhenidle

```ts
sandkit.api.elements.setDurationAtCellWhenIdle(...args: [number, number, number, object]): void
```

Defined in: [sandkit/api/elements.d.ts:512](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L512)

#### Parameters

##### args

...\[`number`, `number`, `number`, `object`\]

#### Returns

`void`

#### Deprecated

Use [setDurationAtCell](#setdurationatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#mutations-heading)

***

### getIdByType() :id=getidbytype

```ts
sandkit.api.elements.getIdByType(elementType: ElementType): string & object
```

Defined in: [shared/api/elements.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L137)

Return the mod string id for a numeric element type.

#### Parameters

##### elementType

[`ElementType`](#elementtype)

Numeric element type.

#### Returns

`string` & `object`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getTypeById() :id=gettypebyid

```ts
sandkit.api.elements.getTypeById(elementId: string & object): ElementType
```

Defined in: [shared/api/elements.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L146)

Resolve a mod element string id to a type handle.

#### Parameters

##### elementId

`string` & `object`

Mod-registered element id.

#### Returns

[`ElementType`](#elementtype)

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~getTypeFromId()~~ :id=gettypefromid

```ts
sandkit.api.elements.getTypeFromId(elementId: string & object): ElementType
```

Defined in: [shared/api/elements.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L153)

#### Parameters

##### elementId

`string` & `object`

#### Returns

[`ElementType`](#elementtype)

#### Deprecated

Use [getTypeById](#gettypebyid) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getDefinitionByType() :id=getdefinitionbytype

```ts
sandkit.api.elements.getDefinitionByType(elementType: ElementType): ElementDefinition | undefined
```

Defined in: [shared/api/elements.d.ts:162](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L162)

Look up the definition for a type handle.

#### Parameters

##### elementType

[`ElementType`](#elementtype)

Numeric element type.

#### Returns

[`ElementDefinition`](#elementdefinition) \| `undefined`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getTypeAtCell() :id=gettypeatcell

```ts
sandkit.api.elements.getTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [shared/api/elements.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L172)

Return the raw element type at a cell (may differ from resolved type).

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`ElementType`](#elementtype) \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getResolvedTypeAtCell() :id=getresolvedtypeatcell

```ts
sandkit.api.elements.getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [shared/api/elements.d.ts:182](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L182)

Return the resolved element type after overlays and particles.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`ElementType`](#elementtype) \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getResolvedTypeFromCellId() :id=getresolvedtypefromcellid

```ts
sandkit.api.elements.getResolvedTypeFromCellId(cellId: CellId): ElementType | null
```

Defined in: [shared/api/elements.d.ts:191](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L191)

Return the resolved element type from a packed cell id.

#### Parameters

##### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id from [world.getCellIdAtCell](api/sandkit.api.grid.md#getcellidatcell).

#### Returns

[`ElementType`](#elementtype) \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getInfoAtCell() :id=getinfoatcell

```ts
sandkit.api.elements.getInfoAtCell(...args: CellCoordinates): { elementType: ElementType; isParticle: boolean; cellId: CellId; elementIndex: number; } | null
```

Defined in: [shared/api/elements.d.ts:201](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L201)

Return element index, particle flag, and ids at a cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

\{ `elementType`: [`ElementType`](#elementtype); `isParticle`: `boolean`; `cellId`: [`CellId`](api/shared.nominal.md#cellid); `elementIndex`: `number`; \} \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getMatterTypeAtCell() :id=getmattertypeatcell

```ts
sandkit.api.elements.getMatterTypeAtCell(...args: CellCoordinates): MatterType | null
```

Defined in: [shared/api/elements.d.ts:213](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L213)

Return the matter category at a cell, or null when empty.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`MatterType`](api/sandkit.api.elements.MatterType.md) \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isTypeAtCell() :id=istypeatcell

```ts
sandkit.api.elements.isTypeAtCell(...args: number, number, [ElementRef]): boolean
```

Defined in: [shared/api/elements.d.ts:224](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L224)

Return true when the cell holds the given element type or id.

#### Parameters

##### args

...\[`number`, `number`, [`ElementRef`](#elementref)\]

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### isFreeFallingAtCell() :id=isfreefallingatcell

```ts
sandkit.api.elements.isFreeFallingAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/elements.d.ts:234](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L234)

Return true when the element at the cell is falling.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getVelocityAtCell() :id=getvelocityatcell

```ts
sandkit.api.elements.getVelocityAtCell(...args: CellCoordinates): { x: number; y: number; } | null
```

Defined in: [shared/api/elements.d.ts:244](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L244)

Return per-cell velocity for moving elements.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

\{ `x`: `number`; `y`: `number`; \} \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### getDataFieldAtCell() :id=getdatafieldatcell

```ts
sandkit.api.elements.getDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4]): number | null
```

Defined in: [shared/api/elements.d.ts:255](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L255)

Read element data field 1–4 at a cell.

#### Parameters

##### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`\]

#### Returns

`number` \| `null`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

# sandkit.api.elements

`sandkit.api.elements` — register elements and read or change cells on the main thread.
Main thread only.

## See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements`

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

Defined in: [shared/api/elements.d.ts:80](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L80)

Options for [createAtCell](#createatcell), replace, and related create helpers.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.createAtCell`

#### Properties

##### data?

```ts
optional data?: Record<string, unknown>
```

Defined in: [shared/api/elements.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L82)

Initial element data bag.

##### density?

```ts
optional density?: number
```

Defined in: [shared/api/elements.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L84)

Override element density.

##### durationTicks?

```ts
optional durationTicks?: number
```

Defined in: [shared/api/elements.d.ts:90](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L90)

Set both max and remaining duration in simulation ticks.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.createAtCell`

##### ~~duration?~~

```ts
optional duration?: number
```

Defined in: [shared/api/elements.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L95)

###### Deprecated

Use [durationTicks](#durationticks) instead.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `options.durationTicks`

##### isFreeFalling?

```ts
optional isFreeFalling?: boolean
```

Defined in: [shared/api/elements.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L97)

Override free-fall state on spawn.

##### dataFields?

```ts
optional dataFields?: object
```

Defined in: [shared/api/elements.d.ts:99](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L99)

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

Defined in: [shared/api/elements.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L106)

Spawn as a particle with the given velocity.

###### velocity

```ts
velocity: Vector2
```

##### skipCollectorCheck?

```ts
optional skipCollectorCheck?: boolean
```

Defined in: [shared/api/elements.d.ts:110](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L110)

Skip collector accounting when placing the element.

***

### ElementRemovalOptions :id=elementremovaloptions

<p class="smt-member-path"><code>sandkit.api.elements.ElementRemovalOptions</code></p>

Defined in: [shared/api/elements.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L118)

Options for element removal helpers.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.removeAtCell`

#### Properties

##### skipCollectorCheck?

```ts
optional skipCollectorCheck?: boolean
```

Defined in: [shared/api/elements.d.ts:120](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L120)

Skip collector accounting when removing the element.

## Type Aliases <!-- {docsify-ignore} -->

### InteractionDestroyer :id=interactiondestroyer

<p class="smt-member-path"><code>sandkit.api.elements.InteractionDestroyer</code></p>

```ts
InteractionDestroyer = object
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

<p class="smt-member-path"><code>sandkit.api.elements.InteractionStructure</code></p>

```ts
InteractionStructure = InteractionStructureMetadata & object
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

<p class="smt-member-path"><code>sandkit.api.elements.InteractionEntity</code></p>

```ts
InteractionEntity = object
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

<p class="smt-member-path"><code>sandkit.api.elements.InteractionFlammable</code></p>

```ts
InteractionFlammable = object
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

<p class="smt-member-path"><code>sandkit.api.elements.InteractionMeltable</code></p>

```ts
InteractionMeltable = object
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

<p class="smt-member-path"><code>sandkit.api.elements.InteractionFreezable</code></p>

```ts
InteractionFreezable = object
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

<p class="smt-member-path"><code>sandkit.api.elements.InteractionCustom</code></p>

```ts
InteractionCustom = InteractionStructureMetadata & object
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

<p class="smt-member-path"><code>sandkit.api.elements.Interaction</code></p>

```ts
Interaction = InteractionDestroyer | InteractionStructure | InteractionEntity | InteractionFlammable | InteractionMeltable | InteractionFreezable | InteractionCustom
```

Defined in: [sandkit/api/elements.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L129)

Union of element interaction kinds for tool and structure logic.

***

### ElementType :id=elementtype

<p class="smt-member-path"><code>sandkit.api.elements.ElementType</code></p>

```ts
ElementType = ElementType | TaggedNumber<"elementType">
```

Defined in: [shared/api/elements.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L20)

Numeric element type handle.
Built-in [ElementTypeEnum](api/sandkit.enums.ElementType.md) values autocomplete; [getTypeById](#gettypebyid) returns a tagged handle.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements`

***

### ElementId :id=elementid

<p class="smt-member-path"><code>sandkit.api.elements.ElementId</code></p>

```ts
ElementId = LooseString<never>
```

Defined in: [shared/api/elements.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L27)

Mod or built-in element string id.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements`

***

### ElementRef :id=elementref

<p class="smt-member-path"><code>sandkit.api.elements.ElementRef</code></p>

```ts
ElementRef = ElementType | ElementId
```

Defined in: [shared/api/elements.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L34)

Type handle or string id accepted by lookup helpers.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements`

***

### ElementDefinition :id=elementdefinition

<p class="smt-member-path"><code>sandkit.api.elements.ElementDefinition</code></p>

```ts
ElementDefinition = object
```

Defined in: [shared/api/elements.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L57)

Mod-registered element definition snapshot.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.register`

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

##### getExtraProps?

```ts
optional getExtraProps?: () => object
```

Defined in: [shared/api/elements.d.ts:72](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L72)

###### Returns

`object`

###### data

```ts
data: Record<PropertyKey, any>
```

## Functions <!-- {docsify-ignore} -->

### getRegisteredTypes() :id=getregisteredtypes

<p class="smt-member-path"><code>sandkit.api.elements.getRegisteredTypes()</code></p>

```ts
getRegisteredTypes(): ElementType[]
```

Defined in: [sandkit/api/elements.d.ts:142](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L142)

Returns all registered element type ids.

#### Returns

[`ElementType`](#elementtype)[]

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.getRegisteredTypes`

***

### register() :id=register

<p class="smt-member-path"><code>sandkit.api.elements.register()</code></p>

```ts
register(definition: ElementDefinition): object
```

Defined in: [sandkit/api/elements.d.ts:151](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L151)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.register`

***

### updateDefinition() :id=updatedefinition

<p class="smt-member-path"><code>sandkit.api.elements.updateDefinition()</code></p>

```ts
updateDefinition(elementTypeOrId: ElementRef, partial: Partial<ElementDefinition>): void
```

Defined in: [sandkit/api/elements.d.ts:160](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L160)

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

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.updateDefinition`

***

### addInteractionInfo() :id=addinteractioninfo

<p class="smt-member-path"><code>sandkit.api.elements.addInteractionInfo()</code></p>

```ts
addInteractionInfo(elementTypeOrId: ElementRef, interaction: Interaction): void
```

Defined in: [sandkit/api/elements.d.ts:169](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L169)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.addInteractionInfo`

***

### getNameByType() :id=getnamebytype

<p class="smt-member-path"><code>sandkit.api.elements.getNameByType()</code></p>

```ts
getNameByType(elementType: ElementType): string
```

Defined in: [sandkit/api/elements.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L177)

Returns the display name for an element type.

#### Parameters

##### elementType

[`ElementType`](#elementtype)

Numeric element type.

#### Returns

`string`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.getNameByType`

***

### findFreeCellInStructure() :id=findfreecellinstructure

<p class="smt-member-path"><code>sandkit.api.elements.findFreeCellInStructure()</code></p>

```ts
findFreeCellInStructure(structureCellX: number, structureCellY: number, structureSizeCells: number): Vector2 | null
```

Defined in: [sandkit/api/elements.d.ts:188](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L188)

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

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.findFreeCellInStructure`

***

### createAtCell() :id=createatcell

<p class="smt-member-path"><code>sandkit.api.elements.createAtCell()</code></p>

```ts
createAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:199](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L199)

Create an element at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`ElementRef`](#elementref), [`ElementCreateOptions`](#elementcreateoptions)\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.createAtCell`

***

### ~~createAtCellWhenIdle()~~

```ts
createAtCellWhenIdle(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:205](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L205)

#### Parameters

##### args

...\[`number`, `number`, [`ElementRef`](#elementref), [`ElementCreateOptions`](#elementcreateoptions)\]

#### Returns

`void`

#### Deprecated

Use [createAtCell](#createatcell) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.createAtCell`

***

### replaceAtCell() :id=replaceatcell

<p class="smt-member-path"><code>sandkit.api.elements.replaceAtCell()</code></p>

```ts
replaceAtCell(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:216](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L216)

Replace the element at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`ElementRef`](#elementref), [`ElementCreateOptions`](#elementcreateoptions)\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.replaceAtCell`

***

### ~~replaceAtCellWhenIdle()~~

```ts
replaceAtCellWhenIdle(...args: number, number, [ElementRef, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:222](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L222)

#### Parameters

##### args

...\[`number`, `number`, [`ElementRef`](#elementref), [`ElementCreateOptions`](#elementcreateoptions)\]

#### Returns

`void`

#### Deprecated

Use [replaceAtCell](#replaceatcell) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.replaceAtCell`

***

### removeAtCell() :id=removeatcell

<p class="smt-member-path"><code>sandkit.api.elements.removeAtCell()</code></p>

```ts
removeAtCell(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:232](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L232)

Remove the element at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`ElementRemovalOptions`](#elementremovaloptions)\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.removeAtCell`

***

### ~~removeAtCellWhenIdle()~~

```ts
removeAtCellWhenIdle(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:238](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L238)

#### Parameters

##### args

...\[`number`, `number`, [`ElementRemovalOptions`](#elementremovaloptions)\]

#### Returns

`void`

#### Deprecated

Use [removeAtCell](#removeatcell) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.removeAtCell`

***

### teleportBetweenCells() :id=teleportbetweencells

<p class="smt-member-path"><code>sandkit.api.elements.teleportBetweenCells()</code></p>

```ts
teleportBetweenCells(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

Defined in: [sandkit/api/elements.d.ts:249](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L249)

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

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.teleportBetweenCells`

***

### ~~teleportBetweenCellsWhenIdle()~~

```ts
teleportBetweenCellsWhenIdle(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

Defined in: [sandkit/api/elements.d.ts:255](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L255)

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

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.teleportBetweenCells`

***

### setVelocityAtCell() :id=setvelocityatcell

<p class="smt-member-path"><code>sandkit.api.elements.setVelocityAtCell()</code></p>

```ts
setVelocityAtCell(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:265](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L265)

Set particle velocity at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.setVelocityAtCell`

***

### ~~setVelocityAtCellWhenIdle()~~

```ts
setVelocityAtCellWhenIdle(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:271](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L271)

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

#### Returns

`void`

#### Deprecated

Use [setVelocityAtCell](#setvelocityatcell) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.setVelocityAtCell`

***

### addParticleVelocityAtCell() :id=addparticlevelocityatcell

<p class="smt-member-path"><code>sandkit.api.elements.addParticleVelocityAtCell()</code></p>

```ts
addParticleVelocityAtCell(...args: number, number, [Vector2, number]): void
```

Defined in: [sandkit/api/elements.d.ts:282](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L282)

Add velocity to a particle at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.addParticleVelocityAtCell`

***

### ~~addParticleVelocityAtCellWhenIdle()~~

```ts
addParticleVelocityAtCellWhenIdle(...args: number, number, [Vector2, number]): void
```

Defined in: [sandkit/api/elements.d.ts:288](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L288)

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`\]

#### Returns

`void`

#### Deprecated

Use [addParticleVelocityAtCell](#addparticlevelocityatcell) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.addParticleVelocityAtCell`

***

### convertToParticleAtCell() :id=converttoparticleatcell

<p class="smt-member-path"><code>sandkit.api.elements.convertToParticleAtCell()</code></p>

```ts
convertToParticleAtCell(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:298](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L298)

Convert a cell element to a particle. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.convertToParticleAtCell`

***

### ~~convertToParticleAtCellWhenIdle()~~

```ts
convertToParticleAtCellWhenIdle(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:304](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L304)

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

#### Returns

`void`

#### Deprecated

Use [convertToParticleAtCell](#converttoparticleatcell) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.convertToParticleAtCell`

***

### convertFromParticleAtCell() :id=convertfromparticleatcell

<p class="smt-member-path"><code>sandkit.api.elements.convertFromParticleAtCell()</code></p>

```ts
convertFromParticleAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:313](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L313)

Convert a particle back to a solid element. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.convertFromParticleAtCell`

***

### ~~convertFromParticleAtCellWhenIdle()~~

```ts
convertFromParticleAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:319](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L319)

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### Deprecated

Use [convertFromParticleAtCell](#convertfromparticleatcell) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.convertFromParticleAtCell`

***

### setDataFieldAtCell() :id=setdatafieldatcell

<p class="smt-member-path"><code>sandkit.api.elements.setDataFieldAtCell()</code></p>

```ts
setDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4, number]): void
```

Defined in: [sandkit/api/elements.d.ts:330](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L330)

Set a data field on the element at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`, `number`\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.setDataFieldAtCell`

***

### ~~setDataFieldAtCellWhenIdle()~~

```ts
setDataFieldAtCellWhenIdle(...args: [number, number, 1 | 2 | 3 | 4, number]): void
```

Defined in: [sandkit/api/elements.d.ts:336](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L336)

#### Parameters

##### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`, `number`\]

#### Returns

`void`

#### Deprecated

Use [setDataFieldAtCell](#setdatafieldatcell) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.setDataFieldAtCell`

***

### refreshColorAtCell() :id=refreshcoloratcell

<p class="smt-member-path"><code>sandkit.api.elements.refreshColorAtCell()</code></p>

```ts
refreshColorAtCell(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:345](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L345)

Refresh the rendered color at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.refreshColorAtCell`

***

### ~~refreshColorAtCellWhenIdle()~~

```ts
refreshColorAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:351](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L351)

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

#### Deprecated

Use [refreshColorAtCell](#refreshcoloratcell) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.refreshColorAtCell`

***

### setPhysicsAtCell() :id=setphysicsatcell

<p class="smt-member-path"><code>sandkit.api.elements.setPhysicsAtCell()</code></p>

```ts
setPhysicsAtCell(...args: [number, number, number]): void
```

Defined in: [sandkit/api/elements.d.ts:361](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L361)

Set the physics skip mode at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.setPhysicsAtCell`

***

### ~~setPhysicsAtCellWhenIdle()~~

```ts
setPhysicsAtCellWhenIdle(...args: [number, number, number]): void
```

Defined in: [sandkit/api/elements.d.ts:367](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L367)

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

#### Deprecated

Use [setPhysicsAtCell](#setphysicsatcell) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.setPhysicsAtCell`

***

### setDurationAtCell() :id=setdurationatcell

<p class="smt-member-path"><code>sandkit.api.elements.setDurationAtCell()</code></p>

```ts
setDurationAtCell(...args: [number, number, number, object]): void
```

Defined in: [sandkit/api/elements.d.ts:378](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L378)

Set element duration at a cell. Main-entry writes are deferred; reads see the old grid.

#### Parameters

##### args

...\[`number`, `number`, `number`, `object`\]

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html#mutations-heading Official Sandkit API — Main entry `api.elements.setDurationAtCell`

***

### ~~setDurationAtCellWhenIdle()~~

```ts
setDurationAtCellWhenIdle(...args: [number, number, number, object]): void
```

Defined in: [sandkit/api/elements.d.ts:384](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/elements.d.ts#L384)

#### Parameters

##### args

...\[`number`, `number`, `number`, `object`\]

#### Returns

`void`

#### Deprecated

Use [setDurationAtCell](#setdurationatcell) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.setDurationAtCell`

***

### getIdByType() :id=getidbytype

<p class="smt-member-path"><code>sandkit.api.elements.getIdByType()</code></p>

```ts
getIdByType(elementType: ElementType): string & object
```

Defined in: [shared/api/elements.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L129)

Return the mod string id for a numeric element type.

#### Parameters

##### elementType

[`ElementType`](#elementtype)

Numeric element type.

#### Returns

`string` & `object`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.getIdByType`

***

### getTypeById() :id=gettypebyid

<p class="smt-member-path"><code>sandkit.api.elements.getTypeById()</code></p>

```ts
getTypeById(elementId: string & object): ElementType
```

Defined in: [shared/api/elements.d.ts:137](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L137)

Resolve a mod element string id to a type handle.

#### Parameters

##### elementId

`string` & `object`

Mod-registered element id.

#### Returns

[`ElementType`](#elementtype)

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.getTypeById`

***

### ~~getTypeFromId()~~

```ts
getTypeFromId(elementId: string & object): ElementType
```

Defined in: [shared/api/elements.d.ts:143](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L143)

#### Parameters

##### elementId

`string` & `object`

#### Returns

[`ElementType`](#elementtype)

#### Deprecated

Use [getTypeById](#gettypebyid) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.elements.getTypeById`

***

### getDefinitionByType() :id=getdefinitionbytype

<p class="smt-member-path"><code>sandkit.api.elements.getDefinitionByType()</code></p>

```ts
getDefinitionByType(elementType: ElementType): ElementDefinition | undefined
```

Defined in: [shared/api/elements.d.ts:151](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L151)

Look up the definition for a type handle.

#### Parameters

##### elementType

[`ElementType`](#elementtype)

Numeric element type.

#### Returns

[`ElementDefinition`](#elementdefinition) \| `undefined`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.getDefinitionByType`

***

### getTypeAtCell() :id=gettypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.getTypeAtCell()</code></p>

```ts
getTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [shared/api/elements.d.ts:160](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L160)

Return the raw element type at a cell (may differ from resolved type).

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`ElementType`](#elementtype) \| `null`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.getTypeAtCell`

***

### getResolvedTypeAtCell() :id=getresolvedtypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.getResolvedTypeAtCell()</code></p>

```ts
getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [shared/api/elements.d.ts:169](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L169)

Return the resolved element type after overlays and particles.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`ElementType`](#elementtype) \| `null`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.getResolvedTypeAtCell`

***

### getResolvedTypeFromCellId() :id=getresolvedtypefromcellid

<p class="smt-member-path"><code>sandkit.api.elements.getResolvedTypeFromCellId()</code></p>

```ts
getResolvedTypeFromCellId(cellId: CellId): ElementType | null
```

Defined in: [shared/api/elements.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L177)

Return the resolved element type from a packed cell id.

#### Parameters

##### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id from [world.getCellIdAtCell](api/sandkit.api.grid.md#getcellidatcell).

#### Returns

[`ElementType`](#elementtype) \| `null`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.getResolvedTypeFromCellId`

***

### getInfoAtCell() :id=getinfoatcell

<p class="smt-member-path"><code>sandkit.api.elements.getInfoAtCell()</code></p>

```ts
getInfoAtCell(...args: CellCoordinates): { elementType: ElementType; isParticle: boolean; cellId: CellId; elementIndex: number; } | null
```

Defined in: [shared/api/elements.d.ts:186](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L186)

Return element index, particle flag, and ids at a cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

\{ `elementType`: [`ElementType`](#elementtype); `isParticle`: `boolean`; `cellId`: [`CellId`](api/shared.nominal.md#cellid); `elementIndex`: `number`; \} \| `null`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.getInfoAtCell`

***

### getMatterTypeAtCell() :id=getmattertypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.getMatterTypeAtCell()</code></p>

```ts
getMatterTypeAtCell(...args: CellCoordinates): MatterType | null
```

Defined in: [shared/api/elements.d.ts:195](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L195)

Return the matter category at a cell, or null when empty.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`MatterType`](api/sandkit.api.elements.MatterType.md) \| `null`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.getMatterTypeAtCell`

***

### isTypeAtCell() :id=istypeatcell

<p class="smt-member-path"><code>sandkit.api.elements.isTypeAtCell()</code></p>

```ts
isTypeAtCell(...args: number, number, [ElementRef]): boolean
```

Defined in: [shared/api/elements.d.ts:205](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L205)

Return true when the cell holds the given element type or id.

#### Parameters

##### args

...\[`number`, `number`, [`ElementRef`](#elementref)\]

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.isTypeAtCell`

***

### isFreeFallingAtCell() :id=isfreefallingatcell

<p class="smt-member-path"><code>sandkit.api.elements.isFreeFallingAtCell()</code></p>

```ts
isFreeFallingAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/elements.d.ts:214](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L214)

Return true when the element at the cell is falling.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.isFreeFallingAtCell`

***

### getVelocityAtCell() :id=getvelocityatcell

<p class="smt-member-path"><code>sandkit.api.elements.getVelocityAtCell()</code></p>

```ts
getVelocityAtCell(...args: CellCoordinates): { x: number; y: number; } | null
```

Defined in: [shared/api/elements.d.ts:223](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L223)

Return per-cell velocity for moving elements.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

\{ `x`: `number`; `y`: `number`; \} \| `null`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.getVelocityAtCell`

***

### getDataFieldAtCell() :id=getdatafieldatcell

<p class="smt-member-path"><code>sandkit.api.elements.getDataFieldAtCell()</code></p>

```ts
getDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4]): number | null
```

Defined in: [shared/api/elements.d.ts:233](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/elements.d.ts#L233)

Read element data field 1–4 at a cell.

#### Parameters

##### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`\]

#### Returns

`number` \| `null`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.elements.getDataFieldAtCell`

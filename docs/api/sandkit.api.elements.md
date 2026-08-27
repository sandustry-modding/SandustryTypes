# sandkit.api.elements

`sandkit.api.elements` — register elements and read or change cells when idle.
Main thread only.

## Enumerations <!-- {docsify-ignore} -->

- [MatterType](api/sandkit.api.elements.MatterType.md)

## Interfaces <!-- {docsify-ignore} -->

### sandkit.api.elements.InteractionStructureMetadata :id=interactionstructuremetadata

Defined in: [sandkit/api/elements.d.ts:49](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L49)

Optional tooltip metadata on structure interactions.

#### Properties

##### textKey?

```ts
optional textKey?: string
```

Defined in: [sandkit/api/elements.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L51)

i18n key for custom interaction label text.

##### crossedOutWhen?

```ts
optional crossedOutWhen?: object
```

Defined in: [sandkit/api/elements.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L53)

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

Defined in: [sandkit/api/elements.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L55)

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

Defined in: [sandkit/api/elements.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L57)

Require the text key to exist in the active locale.

***

### sandkit.api.elements.ElementCreateOptions :id=elementcreateoptions

Defined in: [shared/api/elements.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L57)

Options for createAtCell, replace, and idle create helpers.

#### Properties

##### data?

```ts
optional data?: Record<string, unknown>
```

Defined in: [shared/api/elements.d.ts:59](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L59)

Initial element data bag.

##### density?

```ts
optional density?: number
```

Defined in: [shared/api/elements.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L61)

Override element density.

##### duration?

```ts
optional duration?: number
```

Defined in: [shared/api/elements.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L63)

Set both max and remaining duration.

##### isFreeFalling?

```ts
optional isFreeFalling?: boolean
```

Defined in: [shared/api/elements.d.ts:65](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L65)

Override free-fall state on spawn.

##### dataFields?

```ts
optional dataFields?: object
```

Defined in: [shared/api/elements.d.ts:67](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L67)

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

Defined in: [shared/api/elements.d.ts:74](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L74)

Spawn as a particle with the given velocity.

###### velocity

```ts
velocity: Vector2
```

##### skipCollectorCheck?

```ts
optional skipCollectorCheck?: boolean
```

Defined in: [shared/api/elements.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L78)

Skip collector accounting when placing the element.

***

### sandkit.api.elements.ElementRemovalOptions :id=elementremovaloptions

Defined in: [shared/api/elements.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L82)

Options for element removal helpers.

#### Properties

##### skipCollectorCheck?

```ts
optional skipCollectorCheck?: boolean
```

Defined in: [shared/api/elements.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L84)

Skip collector accounting when removing the element.

## Type Aliases <!-- {docsify-ignore} -->

### sandkit.api.elements.InteractionDestroyer :id=interactiondestroyer

```ts
InteractionDestroyer = object
```

Defined in: [sandkit/api/elements.d.ts:61](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L61)

Interaction that destroys specific items.

#### Properties

##### kind

```ts
kind: "destroyer"
```

Defined in: [sandkit/api/elements.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L62)

##### items

```ts
items: readonly string[]
```

Defined in: [sandkit/api/elements.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L64)

Item ids removed by this interaction (for example `"drill"`).

***

### sandkit.api.elements.InteractionStructure :id=interactionstructure

```ts
InteractionStructure = InteractionStructureMetadata & object
```

Defined in: [sandkit/api/elements.d.ts:68](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L68)

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

### sandkit.api.elements.InteractionEntity :id=interactionentity

```ts
InteractionEntity = object
```

Defined in: [sandkit/api/elements.d.ts:75](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L75)

Interaction that affects specific entities.

#### Properties

##### kind

```ts
kind: "entity"
```

Defined in: [sandkit/api/elements.d.ts:76](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L76)

##### entities

```ts
entities: readonly string[]
```

Defined in: [sandkit/api/elements.d.ts:78](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L78)

Entity type ids referenced by the interaction.

***

### sandkit.api.elements.InteractionFlammable :id=interactionflammable

```ts
InteractionFlammable = object
```

Defined in: [sandkit/api/elements.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L82)

Interaction that marks the element as flammable.

#### Properties

##### kind

```ts
kind: "flammable"
```

Defined in: [sandkit/api/elements.d.ts:82](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L82)

***

### sandkit.api.elements.InteractionMeltable :id=interactionmeltable

```ts
InteractionMeltable = object
```

Defined in: [sandkit/api/elements.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L84)

Interaction that marks the element as meltable.

#### Properties

##### kind

```ts
kind: "meltable"
```

Defined in: [sandkit/api/elements.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L84)

***

### sandkit.api.elements.InteractionFreezable :id=interactionfreezable

```ts
InteractionFreezable = object
```

Defined in: [sandkit/api/elements.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L86)

Interaction that marks the element as freezable.

#### Properties

##### kind

```ts
kind: "freezable"
```

Defined in: [sandkit/api/elements.d.ts:86](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L86)

***

### sandkit.api.elements.InteractionCustom :id=interactioncustom

```ts
InteractionCustom = InteractionStructureMetadata & object
```

Defined in: [sandkit/api/elements.d.ts:88](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L88)

Interaction handled by custom mod logic and tooltip text.

#### Type Declaration

##### kind

```ts
kind: "custom"
```

***

### sandkit.api.elements.Interaction :id=interaction

```ts
Interaction = InteractionDestroyer | InteractionStructure | InteractionEntity | InteractionFlammable | InteractionMeltable | InteractionFreezable | InteractionCustom
```

Defined in: [sandkit/api/elements.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L91)

Union of element interaction kinds for tool and structure logic.

***

### sandkit.api.elements.ElementType :id=elementtype

```ts
ElementType = ElementType | TaggedNumber<"elementType">
```

Defined in: [shared/api/elements.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L18)

Numeric element type handle.
Built-in [ElementTypeEnum](api/sandkit.enums.ElementType.md) values autocomplete; `getTypeFromId` returns a tagged handle.

***

### sandkit.api.elements.ElementId :id=elementid

```ts
ElementId = LooseString<never>
```

Defined in: [shared/api/elements.d.ts:21](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L21)

Mod or built-in element string id.

***

### sandkit.api.elements.ElementRef :id=elementref

```ts
ElementRef = ElementType | ElementId
```

Defined in: [shared/api/elements.d.ts:23](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L23)

Type handle or string id accepted by lookup helpers.

***

### sandkit.api.elements.ElementDefinition :id=elementdefinition

```ts
ElementDefinition = object
```

Defined in: [shared/api/elements.d.ts:38](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L38)

Mod-registered element definition snapshot.

#### Properties

##### id

```ts
id: string
```

Defined in: [shared/api/elements.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L39)

##### nameKey

```ts
nameKey: string
```

Defined in: [shared/api/elements.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L40)

##### defaultDataFields?

```ts
optional defaultDataFields?: object
```

Defined in: [shared/api/elements.d.ts:41](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L41)

###### Index Signature

\[`key`: `string`\]: `number`

##### colors

```ts
colors: object
```

Defined in: [shared/api/elements.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L42)

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

Defined in: [shared/api/elements.d.ts:51](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L51)

##### matterType

```ts
matterType: MatterType
```

Defined in: [shared/api/elements.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L52)

##### getExtraProps?

```ts
optional getExtraProps?: () => object
```

Defined in: [shared/api/elements.d.ts:53](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L53)

###### Returns

`object`

###### data

```ts
data: Record<PropertyKey, any>
```

## Functions <!-- {docsify-ignore} -->

### sandkit.api.elements.getRegisteredTypes() :id=getregisteredtypes

```ts
getRegisteredTypes(): ElementType[]
```

Defined in: [sandkit/api/elements.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L100)

Returns all registered element type ids.

#### Returns

[`ElementType`](#elementtype)[]

***

### sandkit.api.elements.register() :id=register

```ts
register(definition: ElementDefinition): object
```

Defined in: [sandkit/api/elements.d.ts:107](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L107)

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

***

### sandkit.api.elements.updateDefinition() :id=updatedefinition

```ts
updateDefinition(elementTypeOrId: ElementRef, partial: Partial<ElementDefinition>): void
```

Defined in: [sandkit/api/elements.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L114)

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

***

### sandkit.api.elements.addInteractionInfo() :id=addinteractioninfo

```ts
addInteractionInfo(elementTypeOrId: ElementRef, interaction: Interaction): void
```

Defined in: [sandkit/api/elements.d.ts:121](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L121)

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

***

### sandkit.api.elements.getNameByType() :id=getnamebytype

```ts
getNameByType(elementType: ElementType): string
```

Defined in: [sandkit/api/elements.d.ts:127](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L127)

Returns the display name for an element type.

#### Parameters

##### elementType

[`ElementType`](#elementtype)

Numeric element type.

#### Returns

`string`

***

### sandkit.api.elements.findFreeCellInStructure() :id=findfreecellinstructure

```ts
findFreeCellInStructure(structureCellX: number, structureCellY: number, structureSize: number): Vector2 | null
```

Defined in: [sandkit/api/elements.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L136)

Finds a free cell inside a structure footprint, or null.

#### Parameters

##### structureCellX

`number`

Structure anchor cell column.

##### structureCellY

`number`

Structure anchor cell row.

##### structureSize

`number`

Structure footprint size in cells.

#### Returns

[`Vector2`](api/shared.player.md#vector2) \| `null`

Cell coordinates of a free cell, or null when none.

***

### sandkit.api.elements.createAtCellWhenIdle() :id=createatcellwhenidle

```ts
createAtCellWhenIdle(...args: number, number, [ElementType, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:145](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L145)

Creates an element at a cell when the simulation is idle.

#### Parameters

##### args

...\[`number`, `number`, [`ElementType`](#elementtype), [`ElementCreateOptions`](#elementcreateoptions)\]

#### Returns

`void`

***

### sandkit.api.elements.replaceAtCellWhenIdle() :id=replaceatcellwhenidle

```ts
replaceAtCellWhenIdle(...args: number, number, [ElementType, ElementCreateOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:154](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L154)

Replaces the element at a cell when the simulation is idle.

#### Parameters

##### args

...\[`number`, `number`, [`ElementType`](#elementtype), [`ElementCreateOptions`](#elementcreateoptions)\]

#### Returns

`void`

***

### sandkit.api.elements.removeAtCellWhenIdle() :id=removeatcellwhenidle

```ts
removeAtCellWhenIdle(...args: number, number, [ElementRemovalOptions]): void
```

Defined in: [sandkit/api/elements.d.ts:162](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L162)

Removes the element at a cell when the simulation is idle.

#### Parameters

##### args

...\[`number`, `number`, [`ElementRemovalOptions`](#elementremovaloptions)\]

#### Returns

`void`

***

### sandkit.api.elements.teleportBetweenCellsWhenIdle() :id=teleportbetweencellswhenidle

```ts
teleportBetweenCellsWhenIdle(fromCellX: number, fromCellY: number, toCellX: number, toCellY: number): void
```

Defined in: [sandkit/api/elements.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L171)

Moves an element between cells when the simulation is idle.

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

***

### sandkit.api.elements.setVelocityAtCellWhenIdle() :id=setvelocityatcellwhenidle

```ts
setVelocityAtCellWhenIdle(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:179](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L179)

Sets particle velocity at a cell when the simulation is idle.

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

#### Returns

`void`

***

### sandkit.api.elements.addParticleVelocityAtCellWhenIdle() :id=addparticlevelocityatcellwhenidle

```ts
addParticleVelocityAtCellWhenIdle(...args: number, number, [Vector2, number]): void
```

Defined in: [sandkit/api/elements.d.ts:188](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L188)

Adds velocity to a particle at a cell when the simulation is idle.

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2), `number`\]

#### Returns

`void`

***

### sandkit.api.elements.convertToParticleAtCellWhenIdle() :id=converttoparticleatcellwhenidle

```ts
convertToParticleAtCellWhenIdle(...args: number, number, [Vector2]): void
```

Defined in: [sandkit/api/elements.d.ts:196](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L196)

Converts a cell element to a particle when the simulation is idle.

#### Parameters

##### args

...\[`number`, `number`, [`Vector2`](api/shared.player.md#vector2)\]

#### Returns

`void`

***

### sandkit.api.elements.convertFromParticleAtCellWhenIdle() :id=convertfromparticleatcellwhenidle

```ts
convertFromParticleAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:203](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L203)

Converts a particle back to a solid element when the simulation is idle.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

***

### sandkit.api.elements.setDataFieldAtCellWhenIdle() :id=setdatafieldatcellwhenidle

```ts
setDataFieldAtCellWhenIdle(...args: [number, number, 1 | 2 | 3 | 4, number]): void
```

Defined in: [sandkit/api/elements.d.ts:212](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L212)

Sets a data field on the element at a cell when the simulation is idle.

#### Parameters

##### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`, `number`\]

#### Returns

`void`

***

### sandkit.api.elements.refreshColorAtCellWhenIdle() :id=refreshcoloratcellwhenidle

```ts
refreshColorAtCellWhenIdle(...args: CellCoordinates): void
```

Defined in: [sandkit/api/elements.d.ts:219](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L219)

Refreshes the rendered color at a cell when the simulation is idle.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`void`

***

### sandkit.api.elements.setPhysicsAtCellWhenIdle() :id=setphysicsatcellwhenidle

```ts
setPhysicsAtCellWhenIdle(...args: [number, number, number]): void
```

Defined in: [sandkit/api/elements.d.ts:227](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L227)

Sets the physics skip mode at a cell when the simulation is idle.

#### Parameters

##### args

...\[`number`, `number`, `number`\]

#### Returns

`void`

***

### sandkit.api.elements.setDurationAtCellWhenIdle() :id=setdurationatcellwhenidle

```ts
setDurationAtCellWhenIdle(...args: [number, number, number, object]): void
```

Defined in: [sandkit/api/elements.d.ts:236](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/elements.d.ts#L236)

Sets element duration at a cell when the simulation is idle.

#### Parameters

##### args

...\[`number`, `number`, `number`, `object`\]

#### Returns

`void`

***

### sandkit.api.elements.getTypeFromId() :id=gettypefromid

```ts
getTypeFromId(elementId: string & object): ElementType
```

Defined in: [shared/api/elements.d.ts:91](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L91)

Resolve a mod element string id to a type handle.

#### Parameters

##### elementId

`string` & `object`

Mod-registered element id.

#### Returns

[`ElementType`](#elementtype)

***

### sandkit.api.elements.getDefinitionByType() :id=getdefinitionbytype

```ts
getDefinitionByType(elementType: ElementType): ElementDefinition | undefined
```

Defined in: [shared/api/elements.d.ts:97](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L97)

Look up the definition for a type handle.

#### Parameters

##### elementType

[`ElementType`](#elementtype)

Numeric element type.

#### Returns

[`ElementDefinition`](#elementdefinition) \| `undefined`

***

### sandkit.api.elements.getTypeAtCell() :id=gettypeatcell

```ts
getTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [shared/api/elements.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L104)

Return the raw element type at a cell (may differ from resolved type).

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`ElementType`](#elementtype) \| `null`

***

### sandkit.api.elements.getResolvedTypeAtCell() :id=getresolvedtypeatcell

```ts
getResolvedTypeAtCell(...args: CellCoordinates): ElementType | null
```

Defined in: [shared/api/elements.d.ts:111](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L111)

Return the resolved element type after overlays and particles.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`ElementType`](#elementtype) \| `null`

***

### sandkit.api.elements.getResolvedTypeFromCellId() :id=getresolvedtypefromcellid

```ts
getResolvedTypeFromCellId(cellId: CellId): ElementType | null
```

Defined in: [shared/api/elements.d.ts:117](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L117)

Return the resolved element type from a packed cell id.

#### Parameters

##### cellId

[`CellId`](api/shared.nominal.md#cellid)

Packed cell id from [world.getCellIdAtCell](api/sandkit.api.world.worker.md#getcellidatcell).

#### Returns

[`ElementType`](#elementtype) \| `null`

***

### sandkit.api.elements.getInfoAtCell() :id=getinfoatcell

```ts
getInfoAtCell(...args: CellCoordinates): { elementType: ElementType; isParticle: boolean; cellId: CellId; elementIndex: number; } | null
```

Defined in: [shared/api/elements.d.ts:124](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L124)

Return element index, particle flag, and ids at a cell.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

\{ `elementType`: [`ElementType`](#elementtype); `isParticle`: `boolean`; `cellId`: [`CellId`](api/shared.nominal.md#cellid); `elementIndex`: `number`; \} \| `null`

***

### sandkit.api.elements.getMatterTypeAtCell() :id=getmattertypeatcell

```ts
getMatterTypeAtCell(...args: CellCoordinates): MatterType | null
```

Defined in: [shared/api/elements.d.ts:131](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L131)

Return the matter category at a cell, or null when empty.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

[`MatterType`](api/sandkit.api.elements.MatterType.md) \| `null`

***

### sandkit.api.elements.isTypeAtCell() :id=istypeatcell

```ts
isTypeAtCell(...args: number, number, [ElementType]): boolean
```

Defined in: [shared/api/elements.d.ts:139](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L139)

Return true when the cell holds the given element type.

#### Parameters

##### args

...\[`number`, `number`, [`ElementType`](#elementtype)\]

#### Returns

`boolean`

***

### sandkit.api.elements.isFreeFallingAtCell() :id=isfreefallingatcell

```ts
isFreeFallingAtCell(...args: CellCoordinates): boolean
```

Defined in: [shared/api/elements.d.ts:146](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L146)

Return true when the element at the cell is falling.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

`boolean`

***

### sandkit.api.elements.getVelocityAtCell() :id=getvelocityatcell

```ts
getVelocityAtCell(...args: CellCoordinates): { x: number; y: number; } | null
```

Defined in: [shared/api/elements.d.ts:153](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L153)

Return per-cell velocity for moving elements.

#### Parameters

##### args

...[`CellCoordinates`](api/shared.player.md#cellcoordinates)

#### Returns

\{ `x`: `number`; `y`: `number`; \} \| `null`

***

### sandkit.api.elements.getDataFieldAtCell() :id=getdatafieldatcell

```ts
getDataFieldAtCell(...args: [number, number, 1 | 2 | 3 | 4]): number | null
```

Defined in: [shared/api/elements.d.ts:161](https://github.com/sandustry-modding/SandustryTypes/blob/main/shared/api/elements.d.ts#L161)

Read element data field 1–4 at a cell.

#### Parameters

##### args

...\[`number`, `number`, `1` \| `2` \| `3` \| `4`\]

#### Returns

`number` \| `null`

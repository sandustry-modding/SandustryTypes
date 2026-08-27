# sandkit.api.tech

## Interfaces <!-- {docsify-ignore} -->

### sandkit.api.tech.TechDefinition :id=techdefinition

Defined in: [sandkit/api/tech.d.ts:54](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L54)

Tech definition shape.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/tech.d.ts:56](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L56)

Display name translation key.

##### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [sandkit/api/tech.d.ts:58](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L58)

Description translation key.

***

### sandkit.api.tech.TechGridPosition :id=techgridposition

Defined in: [sandkit/api/tech.d.ts:62](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L62)

Position on the tech grid.

#### Properties

##### x

```ts
x: number
```

Defined in: [sandkit/api/tech.d.ts:63](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L63)

##### y

```ts
y: number
```

Defined in: [sandkit/api/tech.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L64)

## Type Aliases <!-- {docsify-ignore} -->

### sandkit.api.tech.TechGridId :id=techgridid

```ts
TechGridId = Tech | LooseString<never> | TaggedNumber<"tech">
```

Defined in: [sandkit/api/tech.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L52)

Tech grid node id.
Built-in [TechEnum](api/sandkit.enums.Tech.md) values autocomplete; custom string ids and tagged handles are allowed.

## Functions <!-- {docsify-ignore} -->

### sandkit.api.tech.getDefinitionById() :id=getdefinitionbyid

```ts
getDefinitionById(techId: TechGridId): TechDefinition | undefined
```

Defined in: [sandkit/api/tech.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L16)

Return a tech definition by string id.

#### Parameters

##### techId

[`TechGridId`](#techgridid)

Tech entry identifier.

#### Returns

[`TechDefinition`](#techdefinition) \| `undefined`

***

### sandkit.api.tech.updateDefinition() :id=updatedefinition

```ts
updateDefinition(techId: TechGridId, updates: Partial<TechDefinition>): void
```

Defined in: [sandkit/api/tech.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L22)

Patch fields on an existing tech definition.

#### Parameters

##### techId

[`TechGridId`](#techgridid)

Tech entry identifier.

##### updates

`Partial`\<[`TechDefinition`](#techdefinition)\>

Fields to merge into the definition.

#### Returns

`void`

***

### sandkit.api.tech.addDefinition() :id=adddefinition

```ts
addDefinition(techId: TechGridId, definition: TechDefinition): void
```

Defined in: [sandkit/api/tech.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L28)

Add a new tech definition by id.

#### Parameters

##### techId

[`TechGridId`](#techgridid)

Tech entry identifier.

##### definition

[`TechDefinition`](#techdefinition)

Full tech definition to register.

#### Returns

`void`

***

### sandkit.api.tech.registerNode() :id=registernode

```ts
registerNode(techId: TechGridId, definition: TechDefinition, options: object): TechGridPosition
```

Defined in: [sandkit/api/tech.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L35)

Register a tech node on the grid with parent and position options.

#### Parameters

##### techId

[`TechGridId`](#techgridid)

Tech grid node id.

##### definition

[`TechDefinition`](#techdefinition)

Tech definition for the node.

##### options

Parent node id and optional preferred grid position.

###### parentId

[`TechGridId`](#techgridid)

###### preferredPosition?

[`TechGridPosition`](#techgridposition)

#### Returns

[`TechGridPosition`](#techgridposition)

***

### sandkit.api.tech.isLockedById() :id=islockedbyid

```ts
isLockedById(techId: TechGridId): boolean
```

Defined in: [sandkit/api/tech.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L40)

Return true when a tech entry is locked.

#### Parameters

##### techId

[`TechGridId`](#techgridid)

Tech entry id (string or numeric enum).

#### Returns

`boolean`

***

### sandkit.api.tech.setLockedById() :id=setlockedbyid

```ts
setLockedById(techId: TechGridId, locked: boolean): void
```

Defined in: [sandkit/api/tech.d.ts:46](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/tech.d.ts#L46)

Set locked state for a tech entry by id.

#### Parameters

##### techId

[`TechGridId`](#techgridid)

Tech entry id (string or numeric enum).

##### locked

`boolean`

When true, the tech cannot be purchased.

#### Returns

`void`

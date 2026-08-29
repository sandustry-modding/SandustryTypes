# sandkit.api.tech

## Namespaces <!-- {docsify-ignore} -->

- [conservatory](api/sandkit.api.tech.conservatory.md)

## Interfaces <!-- {docsify-ignore} -->

### TechDefinition :id=techdefinition

<p class="smt-member-path"><code>sandkit.api.tech.TechDefinition</code></p>

Defined in: [sandkit/api/tech.d.ts:98](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L98)

Tech definition shape.

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### name?

```ts
optional name?: string
```

Defined in: [sandkit/api/tech.d.ts:100](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L100)

Plain display name (when not using [nameKey](#namekey)).

##### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/tech.d.ts:102](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L102)

Display name translation key.

##### description?

```ts
optional description?: string
```

Defined in: [sandkit/api/tech.d.ts:104](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L104)

Plain description (when not using [descriptionKey](#descriptionkey)).

##### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [sandkit/api/tech.d.ts:106](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L106)

Description translation key.

##### cost?

```ts
optional cost?: number
```

Defined in: [sandkit/api/tech.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L112)

Research cost.

###### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.tech.registerDefinition`

##### currencyType?

```ts
optional currencyType?: string
```

Defined in: [sandkit/api/tech.d.ts:114](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L114)

Currency used for [cost](#cost) (for example `"gold"`).

##### branch?

```ts
optional branch?: string
```

Defined in: [sandkit/api/tech.d.ts:116](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L116)

Tech tree branch id (often copied from the parent node).

##### unlocks?

```ts
optional unlocks?: object
```

Defined in: [sandkit/api/tech.d.ts:118](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L118)

Content unlocked when this tech is researched.

###### structures?

```ts
optional structures?: readonly string[]
```

###### items?

```ts
optional items?: readonly string[]
```

##### requires?

```ts
optional requires?: readonly string[]
```

Defined in: [sandkit/api/tech.d.ts:123](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L123)

Prerequisite tech ids.

***

### TechGridPosition :id=techgridposition

<p class="smt-member-path"><code>sandkit.api.tech.TechGridPosition</code></p>

Defined in: [sandkit/api/tech.d.ts:128](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L128)

Position on the tech grid.

#### Properties

##### x

```ts
x: number
```

Defined in: [sandkit/api/tech.d.ts:129](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L129)

##### y

```ts
y: number
```

Defined in: [sandkit/api/tech.d.ts:130](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L130)

***

### ConservatoryUnlocks :id=conservatoryunlocks

<p class="smt-member-path"><code>sandkit.api.tech.ConservatoryUnlocks</code></p>

Defined in: [sandkit/api/tech.d.ts:134](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L134)

Unlock payload for [conservatory.appendUnlock](api/sandkit.api.tech.conservatory.md#appendunlock).

#### Properties

##### structures?

```ts
optional structures?: readonly string[]
```

Defined in: [sandkit/api/tech.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L136)

Structure ids to unlock.

##### items?

```ts
optional items?: readonly string[]
```

Defined in: [sandkit/api/tech.d.ts:138](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L138)

Item ids to unlock.

## Type Aliases <!-- {docsify-ignore} -->

### TechGridId :id=techgridid

<p class="smt-member-path"><code>sandkit.api.tech.TechGridId</code></p>

```ts
TechGridId = Tech | LooseString<never> | TaggedNumber<"tech">
```

Defined in: [sandkit/api/tech.d.ts:95](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L95)

Tech grid node id.
Built-in [TechEnum](api/sandkit.enums.Tech.md) values autocomplete; custom string ids and tagged handles are allowed.

## Functions <!-- {docsify-ignore} -->

### getDefinitionById() :id=getdefinitionbyid

<p class="smt-member-path"><code>sandkit.api.tech.getDefinitionById()</code></p>

```ts
getDefinitionById(techId: TechGridId): TechDefinition | undefined
```

Defined in: [sandkit/api/tech.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L18)

Return a tech definition by string id.

#### Parameters

##### techId

[`TechGridId`](#techgridid)

Tech entry identifier.

#### Returns

[`TechDefinition`](#techdefinition) \| `undefined`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.tech.getDefinitionById`

***

### updateDefinition() :id=updatedefinition

<p class="smt-member-path"><code>sandkit.api.tech.updateDefinition()</code></p>

```ts
updateDefinition(techId: TechGridId, updates: Partial<TechDefinition>): void
```

Defined in: [sandkit/api/tech.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L27)

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

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.tech.updateDefinition`

***

### registerDefinition() :id=registerdefinition

<p class="smt-member-path"><code>sandkit.api.tech.registerDefinition()</code></p>

```ts
registerDefinition(techId: TechGridId, definition: TechDefinition): void
```

Defined in: [sandkit/api/tech.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L36)

Register a new tech definition by id.

#### Parameters

##### techId

[`TechGridId`](#techgridid)

Tech entry identifier.

##### definition

[`TechDefinition`](#techdefinition)

Full tech definition to register.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.tech.registerDefinition`

***

### ~~addDefinition()~~

```ts
addDefinition(techId: TechGridId, definition: TechDefinition): void
```

Defined in: [sandkit/api/tech.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L42)

#### Parameters

##### techId

[`TechGridId`](#techgridid)

##### definition

[`TechDefinition`](#techdefinition)

#### Returns

`void`

#### Deprecated

Use [registerDefinition](#registerdefinition) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.tech.registerDefinition`

***

### registerNode() :id=registernode

<p class="smt-member-path"><code>sandkit.api.tech.registerNode()</code></p>

```ts
registerNode(techId: TechGridId, definition: TechDefinition, options: object): TechGridPosition
```

Defined in: [sandkit/api/tech.d.ts:52](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L52)

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

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.tech.registerNode`

***

### isLockedById() :id=islockedbyid

<p class="smt-member-path"><code>sandkit.api.tech.isLockedById()</code></p>

```ts
isLockedById(techId: TechGridId): boolean
```

Defined in: [sandkit/api/tech.d.ts:60](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L60)

Return true when a tech entry is locked.

#### Parameters

##### techId

[`TechGridId`](#techgridid)

Tech entry id (string or numeric enum).

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.tech.isLockedById`

***

### setLockedById() :id=setlockedbyid

<p class="smt-member-path"><code>sandkit.api.tech.setLockedById()</code></p>

```ts
setLockedById(techId: TechGridId, locked: boolean): void
```

Defined in: [sandkit/api/tech.d.ts:69](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L69)

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

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.tech.setLockedById`

***

### isResearchedById() :id=isresearchedbyid

<p class="smt-member-path"><code>sandkit.api.tech.isResearchedById()</code></p>

```ts
isResearchedById(techId: TechGridId): boolean
```

Defined in: [sandkit/api/tech.d.ts:77](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L77)

Return true when a tech entry has been researched.

#### Parameters

##### techId

[`TechGridId`](#techgridid)

Tech entry id (string or numeric enum).

#### Returns

`boolean`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.tech.isResearchedById`

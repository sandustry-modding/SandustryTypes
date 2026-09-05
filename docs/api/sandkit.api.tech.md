# sandkit.api.tech

## Namespaces <!-- {docsify-ignore} -->

- [conservatory](api/sandkit.api.tech.conservatory.md)

## Interfaces <!-- {docsify-ignore} -->

### TechDefinition :id=techdefinition

<p class="smt-member-path"><code>sandkit.api.tech.TechDefinition</code></p>

Defined in: [sandkit/api/tech.d.ts:141](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L141)

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

Defined in: [sandkit/api/tech.d.ts:143](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L143)

Plain display name (when not using [nameKey](#namekey)).

##### nameKey?

```ts
optional nameKey?: string
```

Defined in: [sandkit/api/tech.d.ts:145](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L145)

Display name translation key.

##### description?

```ts
optional description?: string
```

Defined in: [sandkit/api/tech.d.ts:147](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L147)

Plain description (when not using [descriptionKey](#descriptionkey)).

##### descriptionKey?

```ts
optional descriptionKey?: string
```

Defined in: [sandkit/api/tech.d.ts:149](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L149)

Description translation key.

##### cost?

```ts
optional cost?: number
```

Defined in: [sandkit/api/tech.d.ts:155](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L155)

Research cost.

###### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

##### currencyType?

```ts
optional currencyType?: string
```

Defined in: [sandkit/api/tech.d.ts:157](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L157)

Currency used for [cost](#cost) (for example `"gold"`).

##### branch?

```ts
optional branch?: string
```

Defined in: [sandkit/api/tech.d.ts:159](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L159)

Tech tree branch id (often copied from the parent node).

##### unlocks?

```ts
optional unlocks?: object
```

Defined in: [sandkit/api/tech.d.ts:161](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L161)

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

Defined in: [sandkit/api/tech.d.ts:166](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L166)

Prerequisite tech ids.

---

### TechGridPosition :id=techgridposition

<p class="smt-member-path"><code>sandkit.api.tech.TechGridPosition</code></p>

Defined in: [sandkit/api/tech.d.ts:171](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L171)

Position on the tech grid.

#### Properties

##### x

```ts
x: number;
```

Defined in: [sandkit/api/tech.d.ts:172](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L172)

##### y

```ts
y: number;
```

Defined in: [sandkit/api/tech.d.ts:173](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L173)

---

### ConservatoryUnlocks :id=conservatoryunlocks

<p class="smt-member-path"><code>sandkit.api.tech.ConservatoryUnlocks</code></p>

Defined in: [sandkit/api/tech.d.ts:177](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L177)

Unlock payload for [conservatory.appendUnlock](api/sandkit.api.tech.conservatory.md#appendunlock).

#### Properties

##### structures?

```ts
optional structures?: readonly string[]
```

Defined in: [sandkit/api/tech.d.ts:179](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L179)

Structure ids to unlock.

##### items?

```ts
optional items?: readonly string[]
```

Defined in: [sandkit/api/tech.d.ts:181](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L181)

Item ids to unlock.

## Type Aliases <!-- {docsify-ignore} -->

### TechGridId :id=techgridid

<p class="smt-member-path"><code>sandkit.api.tech.TechGridId</code></p>

```ts
TechGridId = Tech | LooseString<never> | TaggedNumber<"tech">;
```

Defined in: [sandkit/api/tech.d.ts:138](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L138)

Tech grid node id.
Built-in [TechEnum](api/sandkit.enums.Tech.md) values autocomplete; custom string ids and tagged handles are allowed.

## Functions <!-- {docsify-ignore} -->

### getDefinitionById() :id=getdefinitionbyid

<p class="smt-member-path"><code>sandkit.api.tech.getDefinitionById()</code></p>

```ts
getDefinitionById(techId: TechGridId): TechDefinition | undefined
```

Defined in: [sandkit/api/tech.d.ts:19](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L19)

Return a tech definition by string id.

#### Parameters

##### techId

[`TechGridId`](#techgridid)

Tech entry identifier.

#### Returns

[`TechDefinition`](#techdefinition) \| `undefined`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### updateDefinition() :id=updatedefinition

<p class="smt-member-path"><code>sandkit.api.tech.updateDefinition()</code></p>

```ts
updateDefinition(techId: TechGridId, updates: Partial<TechDefinition>): void
```

Defined in: [sandkit/api/tech.d.ts:36](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L36)

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

#### Example

```ts
api.tech.updateDefinition("exampleTech", {
  cost: 200,
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### registerDefinition() :id=registerdefinition

<p class="smt-member-path"><code>sandkit.api.tech.registerDefinition()</code></p>

```ts
registerDefinition(techId: TechGridId, definition: TechDefinition): void
```

Defined in: [sandkit/api/tech.d.ts:57](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L57)

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

#### Example

```ts
api.tech.registerDefinition("exampleTech", {
  name: "Example research",
  nameKey: "mods|example|techName",
  description: "Unlocks the example machine.",
  descriptionKey: "mods|example|techDescription",
  cost: 100,
});
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### ~~addDefinition()~~

```ts
addDefinition(techId: TechGridId, definition: TechDefinition): void
```

Defined in: [sandkit/api/tech.d.ts:64](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L64)

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

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### registerNode() :id=registernode

<p class="smt-member-path"><code>sandkit.api.tech.registerNode()</code></p>

```ts
registerNode(techId: TechGridId, definition: TechDefinition, options: object): TechGridPosition
```

Defined in: [sandkit/api/tech.d.ts:84](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L84)

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

#### Example

```ts
const position = api.tech.registerNode("exampleTech", techDefinition, { parentId: parentTechId });
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### isLockedById() :id=islockedbyid

<p class="smt-member-path"><code>sandkit.api.tech.isLockedById()</code></p>

```ts
isLockedById(techId: TechGridId): boolean
```

Defined in: [sandkit/api/tech.d.ts:93](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L93)

Return true when a tech entry is locked.

#### Parameters

##### techId

[`TechGridId`](#techgridid)

Tech entry id (string or numeric enum).

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### setLockedById() :id=setlockedbyid

<p class="smt-member-path"><code>sandkit.api.tech.setLockedById()</code></p>

```ts
setLockedById(techId: TechGridId, locked: boolean): void
```

Defined in: [sandkit/api/tech.d.ts:103](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L103)

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

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

---

### isResearchedById() :id=isresearchedbyid

<p class="smt-member-path"><code>sandkit.api.tech.isResearchedById()</code></p>

```ts
isResearchedById(techId: TechGridId): boolean
```

Defined in: [sandkit/api/tech.d.ts:112](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L112)

Return true when a tech entry has been researched.

#### Parameters

##### techId

[`TechGridId`](#techgridid)

Tech entry id (string or numeric enum).

#### Returns

`boolean`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

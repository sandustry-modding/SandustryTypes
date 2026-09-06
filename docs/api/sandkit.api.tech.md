# sandkit.api.tech

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.tech.TechDefinition :id=techdefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L136" target="_blank" rel="noopener">tech.d.ts:136</a></p>

| Property | Type | Description |
| --- | --- | --- |
| name? | string | Plain display name (when not using [nameKey](?id=namekey)). |
| nameKey? | string | Display name translation key. |
| description? | string | Plain description (when not using [descriptionKey](?id=descriptionkey)). |
| descriptionKey? | string | Description translation key. |
| cost? | number | Research cost. |
| currencyType? | string | Currency used for [cost](?id=cost) (for example `"gold"`). |
| branch? | string | Tech tree branch id (often copied from the parent node). |
| unlocks? | object | Content unlocked when this tech is researched. |
| requires? | readonly string[] | Prerequisite tech ids. |

<div class="smt-member-anchors">

##### name? <!-- {docsify-ignore} -->

##### nameKey? <!-- {docsify-ignore} -->

##### description? <!-- {docsify-ignore} -->

##### descriptionKey? <!-- {docsify-ignore} -->

##### cost? <!-- {docsify-ignore} -->

##### currencyType? <!-- {docsify-ignore} -->

##### branch? <!-- {docsify-ignore} -->

##### unlocks? <!-- {docsify-ignore} -->

##### requires? <!-- {docsify-ignore} -->

</div>

Tech definition shape.

#### Indexable

```ts
[key: string]: unknown
```

</div>

<div class="smt-member-card">

### sandkit.api.tech.TechGridPosition :id=techgridposition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L165" target="_blank" rel="noopener">tech.d.ts:165</a></p>

| Property | Type | Description |
| --- | --- | --- |
| x | number |  |
| y | number |  |

<div class="smt-member-anchors">

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

</div>

Position on the tech grid.

</div>

<div class="smt-member-card">

### sandkit.api.tech.ConservatoryUnlocks :id=conservatoryunlocks

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L171" target="_blank" rel="noopener">tech.d.ts:171</a></p>

| Property | Type | Description |
| --- | --- | --- |
| structures? | readonly string[] | Structure ids to unlock. |
| items? | readonly string[] | Item ids to unlock. |

<div class="smt-member-anchors">

##### structures? <!-- {docsify-ignore} -->

##### items? <!-- {docsify-ignore} -->

</div>

Unlock payload for [conservatory.appendUnlock](api/sandkit.api.tech.conservatory.md?id=appendunlock).

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.tech.TechGridId :id=techgridid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L133" target="_blank" rel="noopener">tech.d.ts:133</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.tech.TechGridId = Tech | LooseString&lt;never&gt; | TaggedNumber&lt;&quot;tech&quot;&gt;">

```ts
TechGridId = Tech | LooseString<never> | TaggedNumber<"tech">
```

</div>

Tech grid node id.
Built-in [TechEnum](api/sandkit.enums.Tech.md) values autocomplete; custom string ids and tagged handles are allowed.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.tech.getDefinitionById :id=getdefinitionbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L18" target="_blank" rel="noopener">tech.d.ts:18</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.tech.getDefinitionById(techId: TechGridId): TechDefinition | undefined">

```ts
getDefinitionById(techId: TechGridId): TechDefinition | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| techId | [`TechGridId`](?id=techgridid) | Tech entry identifier. |

<div class="smt-member-anchors">

##### techId <!-- {docsify-ignore} -->

</div>

Return a tech definition by string id.

[`TechDefinition`](?id=techdefinition) \| `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.tech.updateDefinition :id=updatedefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L34" target="_blank" rel="noopener">tech.d.ts:34</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.tech.updateDefinition(techId: TechGridId, updates: Partial&lt;TechDefinition&gt;): void">

```ts
updateDefinition(techId: TechGridId, updates: Partial<TechDefinition>): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| techId | [`TechGridId`](?id=techgridid) | Tech entry identifier. |
| updates | `Partial`\<[`TechDefinition`](?id=techdefinition)\> | Fields to merge into the definition. |

<div class="smt-member-anchors">

##### techId <!-- {docsify-ignore} -->

##### updates <!-- {docsify-ignore} -->

</div>

Patch fields on an existing tech definition.

#### Example

```ts
api.tech.updateDefinition("exampleTech", {
  cost: 200,
});
```

</div>

<div class="smt-member-card">

### sandkit.api.tech.registerDefinition :id=registerdefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L54" target="_blank" rel="noopener">tech.d.ts:54</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.tech.registerDefinition(techId: TechGridId, definition: TechDefinition): void">

```ts
registerDefinition(techId: TechGridId, definition: TechDefinition): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| techId | [`TechGridId`](?id=techgridid) | Tech entry identifier. |
| definition | [`TechDefinition`](?id=techdefinition) | Full tech definition to register. |

<div class="smt-member-anchors">

##### techId <!-- {docsify-ignore} -->

##### definition <!-- {docsify-ignore} -->

</div>

Register a new tech definition by id.

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

</div>

<div class="smt-member-card">

### ~~sandkit.api.tech.addDefinition~~ :id=adddefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L60" target="_blank" rel="noopener">tech.d.ts:60</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.tech.addDefinition(techId: TechGridId, definition: TechDefinition): void">

```ts
addDefinition(techId: TechGridId, definition: TechDefinition): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| techId | [`TechGridId`](?id=techgridid) |  |
| definition | [`TechDefinition`](?id=techdefinition) |  |

<div class="smt-member-anchors">

##### techId <!-- {docsify-ignore} -->

##### definition <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [registerDefinition](?id=registerdefinition) instead.

</div>

<div class="smt-member-card">

### sandkit.api.tech.registerNode :id=registernode

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L79" target="_blank" rel="noopener">tech.d.ts:79</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.tech.registerNode(techId: TechGridId, definition: TechDefinition, options: object): TechGridPosition">

```ts
registerNode(techId: TechGridId, definition: TechDefinition, options: object): TechGridPosition
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| techId | [`TechGridId`](?id=techgridid) | Tech grid node id. |
| definition | [`TechDefinition`](?id=techdefinition) | Tech definition for the node. |
| options | Parent node id and optional preferred grid position. |  |

<div class="smt-member-anchors">

##### techId <!-- {docsify-ignore} -->

##### definition <!-- {docsify-ignore} -->

##### options <!-- {docsify-ignore} -->

</div>

Register a tech node on the grid with parent and position options.

[`TechGridPosition`](?id=techgridposition)

#### Example

```ts
const position = api.tech.registerNode(
  "exampleTech",
  techDefinition,
  { parentId: parentTechId },
);
```

</div>

<div class="smt-member-card">

### sandkit.api.tech.isLockedById :id=islockedbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L91" target="_blank" rel="noopener">tech.d.ts:91</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.tech.isLockedById(techId: TechGridId): boolean">

```ts
isLockedById(techId: TechGridId): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| techId | [`TechGridId`](?id=techgridid) | Tech entry id (string or numeric enum). |

<div class="smt-member-anchors">

##### techId <!-- {docsify-ignore} -->

</div>

Return true when a tech entry is locked.

</div>

<div class="smt-member-card">

### sandkit.api.tech.setLockedById :id=setlockedbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L100" target="_blank" rel="noopener">tech.d.ts:100</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.tech.setLockedById(techId: TechGridId, locked: boolean): void">

```ts
setLockedById(techId: TechGridId, locked: boolean): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| techId | [`TechGridId`](?id=techgridid) | Tech entry id (string or numeric enum). |
| locked | `boolean` | When true, the tech cannot be purchased. |

<div class="smt-member-anchors">

##### techId <!-- {docsify-ignore} -->

##### locked <!-- {docsify-ignore} -->

</div>

Set locked state for a tech entry by id.

</div>

<div class="smt-member-card">

### sandkit.api.tech.isResearchedById :id=isresearchedbyid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/tech.d.ts#L108" target="_blank" rel="noopener">tech.d.ts:108</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.tech.isResearchedById(techId: TechGridId): boolean">

```ts
isResearchedById(techId: TechGridId): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| techId | [`TechGridId`](?id=techgridid) | Tech entry id (string or numeric enum). |

<div class="smt-member-anchors">

##### techId <!-- {docsify-ignore} -->

</div>

Return true when a tech entry has been researched.

</div>

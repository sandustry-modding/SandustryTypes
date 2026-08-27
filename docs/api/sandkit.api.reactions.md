# sandkit.api.reactions

## Interfaces <!-- {docsify-ignore} -->

### ContactRecipeDefinitionV1 :id=contactrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.reactions.ContactRecipeDefinitionV1</code></p>

Defined in: [sandkit/api/reactions.d.ts:18](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L18)

Contact reaction recipe definition.

#### Properties

##### inputA

```ts
inputA: ElementType
```

Defined in: [sandkit/api/reactions.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L20)

First reacting element type.

##### inputB

```ts
inputB: ElementType
```

Defined in: [sandkit/api/reactions.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L22)

Second reacting element type.

##### outputA

```ts
outputA: ElementType | null
```

Defined in: [sandkit/api/reactions.d.ts:24](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L24)

Element type produced from input A, or null for no output.

##### outputB

```ts
outputB: ElementType | null
```

Defined in: [sandkit/api/reactions.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L26)

Element type produced from input B, or null for no output.

##### orientation?

```ts
optional orientation?: "any" | "stacked"
```

Defined in: [sandkit/api/reactions.d.ts:28](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L28)

Contact layout requirement. Default `"any"`.

## Functions <!-- {docsify-ignore} -->

### registerContact() :id=registercontact

<p class="smt-member-path"><code>sandkit.api.reactions.registerContact()</code></p>

```ts
registerContact(definition: ContactRecipeDefinitionV1): void
```

Defined in: [sandkit/api/reactions.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L15)

Register a contact reaction between elements.

#### Parameters

##### definition

[`ContactRecipeDefinitionV1`](#contactrecipedefinitionv1)

Contact recipe inputs, outputs, and orientation.

#### Returns

`void`

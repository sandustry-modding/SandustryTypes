# sandkit.api.reactions

## Interfaces <!-- {docsify-ignore} -->

### ContactRecipeDefinitionV1 :id=contactrecipedefinitionv1

<p class="smt-member-path"><code>sandkit.api.reactions.ContactRecipeDefinitionV1</code></p>

Defined in: [sandkit/api/reactions.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L29)

Contact reaction recipe definition.

#### Properties

##### inputA

```ts
inputA: ElementType;
```

Defined in: [sandkit/api/reactions.d.ts:31](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L31)

First reacting element type.

##### inputB

```ts
inputB: ElementType;
```

Defined in: [sandkit/api/reactions.d.ts:33](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L33)

Second reacting element type.

##### outputA

```ts
outputA: ElementType | null;
```

Defined in: [sandkit/api/reactions.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L35)

Element type produced from input A, or null for no output.

##### outputB

```ts
outputB: ElementType | null;
```

Defined in: [sandkit/api/reactions.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L37)

Element type produced from input B, or null for no output.

##### orientation?

```ts
optional orientation?: "any" | "stacked"
```

Defined in: [sandkit/api/reactions.d.ts:39](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L39)

Contact layout requirement. Default `"any"`.

## Functions <!-- {docsify-ignore} -->

### registerContact() :id=registercontact

<p class="smt-member-path"><code>sandkit.api.reactions.registerContact()</code></p>

```ts
registerContact(definition: ContactRecipeDefinitionV1): void
```

Defined in: [sandkit/api/reactions.d.ts:26](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L26)

Register a contact reaction between elements.

#### Parameters

##### definition

[`ContactRecipeDefinitionV1`](#contactrecipedefinitionv1)

Contact recipe inputs, outputs, and orientation.

#### Returns

`void`

#### Example

```ts
api.reactions.registerContact({
  inputA: "water",
  inputB: "examplePowder",
  outputA: "steam",
  outputB: null,
  orientation: "any",
});
```

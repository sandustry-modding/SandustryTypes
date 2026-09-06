# sandkit.api.reactions

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.reactions.ContactRecipeDefinitionV1 :id=contactrecipedefinitionv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L29" target="_blank" rel="noopener">reactions.d.ts:29</a></p>

| Property | Type | Description |
| --- | --- | --- |
| inputA | ElementType | First reacting element type. |
| inputB | ElementType | Second reacting element type. |
| outputA | ElementType \| null | Element type produced from input A, or null for no output. |
| outputB | ElementType \| null | Element type produced from input B, or null for no output. |
| orientation? | "any" \| "stacked" | Contact layout requirement. Default `"any"`. |

<div class="smt-member-anchors">

##### inputA <!-- {docsify-ignore} -->

##### inputB <!-- {docsify-ignore} -->

##### outputA <!-- {docsify-ignore} -->

##### outputB <!-- {docsify-ignore} -->

##### orientation? <!-- {docsify-ignore} -->

</div>

Contact reaction recipe definition.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.reactions.registerContact :id=registercontact

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/reactions.d.ts#L26" target="_blank" rel="noopener">reactions.d.ts:26</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.reactions.registerContact(definition: ContactRecipeDefinitionV1): void">

```ts
registerContact(definition: ContactRecipeDefinitionV1): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | [`ContactRecipeDefinitionV1`](?id=contactrecipedefinitionv1) | Contact recipe inputs, outputs, and orientation. |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Register a contact reaction between elements.

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

</div>

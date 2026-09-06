# sandkit.api.structures.processing

Per-structure processing enablement and registration.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.structures.processing.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L544" target="_blank" rel="noopener">structures.d.ts:544</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.processing.register(id: string &amp; object, definition: StructureProcessingDefinitionV1): void">

```ts
register(id: string & object, definition: StructureProcessingDefinitionV1): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| id | `string` & `object` | Unique processing registration id. |
| definition | [`StructureProcessingDefinitionV1`](api/sandkit.api.structures.md?id=structureprocessingdefinitionv1) | Structure type, interval, and callback. |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### definition <!-- {docsify-ignore} -->

</div>

Register a custom processing definition by id.

#### Example

```ts
api.structures.processing.register(
  "exampleStructure:process",
  {
    structureType: "exampleStructure",
    intervalMs: 250,
    process: (structure, context) => {
      const empty = context.isCellEmptyAtCell(
        structure.x,
        structure.y,
      );
    },
  },
);
```

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### sandkit.api.structures.processing.setEnabledAtCell :id=setenabledatcell

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L556" target="_blank" rel="noopener">structures.d.ts:556</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.processing.setEnabledAtCell(...args: [number, number, boolean]): boolean">

```ts
setEnabledAtCell(...args: [number, number, boolean]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `boolean`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Enable or disable processing at a cell.

True when the enabled state changed.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

<div class="smt-member-card">

### ~~sandkit.api.structures.processing.setEnabledAt~~ :id=setenabledat

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/structures.d.ts#L563" target="_blank" rel="noopener">structures.d.ts:563</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.structures.processing.setEnabledAt(...args: [number, number, boolean]): boolean">

```ts
setEnabledAt(...args: [number, number, boolean]): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | ...\[`number`, `number`, `boolean`\] |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

#### Deprecated

Use [setEnabledAtCell](?id=setenabledatcell) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

</div>

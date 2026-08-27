# sandkit.api.structures.processing

Per-structure processing enablement and registration.

## Functions <!-- {docsify-ignore} -->

### sandkit.api.structures.processing.register() :id=register

```ts
register(id: string & object, definition: StructureProcessingDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:193](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L193)

Register a custom processing definition by id.

#### Parameters

##### id

`string` & `object`

Unique processing registration id.

##### definition

[`StructureProcessingDefinitionV1`](api/sandkit.api.structures.md#structureprocessingdefinitionv1)

Structure type, interval, and callback.

#### Returns

`void`

***

### sandkit.api.structures.processing.setEnabledAt() :id=setenabledat

```ts
setEnabledAt(...args: [number, number, boolean]): boolean
```

Defined in: [sandkit/api/structures.d.ts:202](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L202)

Enable or disable processing at a cell.

#### Parameters

##### args

...\[`number`, `number`, `boolean`\]

#### Returns

`boolean`

True when the enabled state changed.

## References <!-- {docsify-ignore} -->

### sandkit.api.structures.processing.isEnabledAt :id=isenabledat

Re-exports [isEnabledAt](api/sandkit.api.structures.processing.worker.md#isenabledat)

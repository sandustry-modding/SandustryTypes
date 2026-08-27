# sandkit.api.structures.processing

Per-structure processing enablement and registration.

## Functions <!-- {docsify-ignore} -->

### register() :id=register

<p class="smt-member-path"><code>sandkit.api.structures.processing.register()</code></p>

```ts
register(id: string & object, definition: StructureProcessingDefinitionV1): void
```

Defined in: [sandkit/api/structures.d.ts:294](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L294)

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

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.processing.register`

***

### setEnabledAtCell() :id=setenabledatcell

<p class="smt-member-path"><code>sandkit.api.structures.processing.setEnabledAtCell()</code></p>

```ts
setEnabledAtCell(...args: [number, number, boolean]): boolean
```

Defined in: [sandkit/api/structures.d.ts:305](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L305)

Enable or disable processing at a cell.

#### Parameters

##### args

...\[`number`, `number`, `boolean`\]

#### Returns

`boolean`

True when the enabled state changed.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.structures.processing.setEnabledAtCell`

***

### ~~setEnabledAt()~~

```ts
setEnabledAt(...args: [number, number, boolean]): boolean
```

Defined in: [sandkit/api/structures.d.ts:311](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/api/structures.d.ts#L311)

#### Parameters

##### args

...\[`number`, `number`, `boolean`\]

#### Returns

`boolean`

#### Deprecated

Use [setEnabledAtCell](#setenabledatcell) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.structures.processing.setEnabledAtCell`

## References <!-- {docsify-ignore} -->

### isEnabledAtCell :id=isenabledatcell

<p class="smt-member-path"><code>sandkit.api.structures.processing.isEnabledAtCell</code></p>

Re-exports [isEnabledAtCell](api/sandkit.api.structures.processing.worker.md#isenabledatcell)

***

### isEnabledAt :id=isenabledat

<p class="smt-member-path"><code>sandkit.api.structures.processing.isEnabledAt</code></p>

Re-exports [isEnabledAt](api/sandkit.api.structures.processing.worker.md#isenabledat)

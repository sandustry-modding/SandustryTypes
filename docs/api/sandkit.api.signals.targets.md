# sandkit.api.signals.targets

Signal target registration for structure types.

## Functions <!-- {docsify-ignore} -->

### register() :id=register

<p class="smt-member-path"><code>sandkit.api.signals.targets.register()</code></p>

```ts
register(structureTypeOrId: unknown, apply: (structure: unknown, payload: unknown) => void): void
```

Defined in: [sandkit/api/signals.d.ts:16](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/signals.d.ts#L16)

Register a handler when a signal targets a structure type.

#### Parameters

##### structureTypeOrId

`unknown`

Structure type id or enum value.

##### apply

(`structure`: `unknown`, `payload`: `unknown`) => `void`

Called when a signal reaches a matching structure.

#### Returns

`void`

# sandkit.engine.api.strataform

**`Internal`**

`sandkit.engine.api.strataform` — strataform event triggers and type registration.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### getDefaultConfig() :id=getdefaultconfig

```ts
sandkit.engine.api.strataform.getDefaultConfig(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/strataform.d.ts#L15)

Return the default strataform configuration.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getRegisteredTypes() :id=getregisteredtypes

```ts
sandkit.engine.api.strataform.getRegisteredTypes(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/strataform.d.ts#L20)

Return all registered strataform types.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### registerType() :id=registertype

```ts
sandkit.engine.api.strataform.registerType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/strataform.d.ts#L25)

Register a custom strataform type.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### trigger() :id=trigger

```ts
sandkit.engine.api.strataform.trigger(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/strataform.d.ts#L30)

Trigger a strataform event at a location.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### triggerByType() :id=triggerbytype

```ts
sandkit.engine.api.strataform.triggerByType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/strataform.d.ts#L35)

Trigger a strataform event by type id.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

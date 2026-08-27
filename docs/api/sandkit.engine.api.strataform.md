# sandkit.engine.api.strataform

**`Internal`**

`sandkit.engine.api.strataform` — strataform event triggers and type registration.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### getDefaultConfig() :id=getdefaultconfig

<p class="smt-member-path"><code>sandkit.engine.api.strataform.getDefaultConfig()</code></p>

```ts
getDefaultConfig(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/strataform.d.ts#L15)

Return the default strataform configuration.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getRegisteredTypes() :id=getregisteredtypes

<p class="smt-member-path"><code>sandkit.engine.api.strataform.getRegisteredTypes()</code></p>

```ts
getRegisteredTypes(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/strataform.d.ts#L20)

Return all registered strataform types.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### registerType() :id=registertype

<p class="smt-member-path"><code>sandkit.engine.api.strataform.registerType()</code></p>

```ts
registerType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/strataform.d.ts#L25)

Register a custom strataform type.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### trigger() :id=trigger

<p class="smt-member-path"><code>sandkit.engine.api.strataform.trigger()</code></p>

```ts
trigger(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/strataform.d.ts#L30)

Trigger a strataform event at a location.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### triggerByType() :id=triggerbytype

<p class="smt-member-path"><code>sandkit.engine.api.strataform.triggerByType()</code></p>

```ts
triggerByType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/strataform.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/strataform.d.ts#L35)

Trigger a strataform event by type id.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

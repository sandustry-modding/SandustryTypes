# sandkit.engine.api.shadows

**`Internal`**

`sandkit.engine.api.shadows` — shadow map refresh for regions.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### refresh() :id=refresh

```ts
sandkit.engine.api.shadows.refresh(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/shadows.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/shadows.d.ts#L15)

Refresh shadows for the whole visible area.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### refreshRadius() :id=refreshradius

```ts
sandkit.engine.api.shadows.refreshRadius(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/shadows.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/shadows.d.ts#L20)

Refresh shadows within a circular radius.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### refreshRect() :id=refreshrect

```ts
sandkit.engine.api.shadows.refreshRect(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/shadows.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/shadows.d.ts#L25)

Refresh shadows within a rectangle.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

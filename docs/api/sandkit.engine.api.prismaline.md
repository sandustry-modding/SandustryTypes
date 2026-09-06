# sandkit.engine.api.prismaline

**`Internal`**

`sandkit.engine.api.prismaline` — prismaline resource consume and availability.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### consume() :id=consume

```ts
sandkit.engine.api.prismaline.consume(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismaline.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismaline.d.ts#L15)

Consume prismaline from the player or world.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getAvailable() :id=getavailable

```ts
sandkit.engine.api.prismaline.getAvailable(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismaline.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismaline.d.ts#L20)

Return available prismaline amount.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getConsumed() :id=getconsumed

```ts
sandkit.engine.api.prismaline.getConsumed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismaline.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismaline.d.ts#L25)

Return total prismaline consumed so far.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

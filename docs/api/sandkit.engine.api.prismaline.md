# sandkit.engine.api.prismaline

**`Internal`**

`sandkit.engine.api.prismaline` — prismaline resource consume and availability.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### consume() :id=consume

<p class="smt-member-path"><code>sandkit.engine.api.prismaline.consume()</code></p>

```ts
consume(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismaline.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prismaline.d.ts#L15)

Consume prismaline from the player or world.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getAvailable() :id=getavailable

<p class="smt-member-path"><code>sandkit.engine.api.prismaline.getAvailable()</code></p>

```ts
getAvailable(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismaline.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prismaline.d.ts#L20)

Return available prismaline amount.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getConsumed() :id=getconsumed

<p class="smt-member-path"><code>sandkit.engine.api.prismaline.getConsumed()</code></p>

```ts
getConsumed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismaline.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prismaline.d.ts#L25)

Return total prismaline consumed so far.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

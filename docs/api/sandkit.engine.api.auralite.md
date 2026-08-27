# sandkit.engine.api.auralite

**`Internal`**

`sandkit.engine.api.auralite` — auralite production tracking.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### ensureProducedAtLeast() :id=ensureproducedatleast

<p class="smt-member-path"><code>sandkit.engine.api.auralite.ensureProducedAtLeast()</code></p>

```ts
ensureProducedAtLeast(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/auralite.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/auralite.d.ts#L15)

Ensure at least the given amount of auralite has been produced.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getProduced() :id=getproduced

<p class="smt-member-path"><code>sandkit.engine.api.auralite.getProduced()</code></p>

```ts
getProduced(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/auralite.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/auralite.d.ts#L20)

Return total auralite produced so far.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

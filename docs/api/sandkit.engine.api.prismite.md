# sandkit.engine.api.prismite

**`Internal`**

`sandkit.engine.api.prismite` — prismite resource consume and availability.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### consume() :id=consume

<p class="smt-member-path"><code>sandkit.engine.api.prismite.consume()</code></p>

```ts
consume(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismite.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismite.d.ts#L15)

Consume prismite from the player or world.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### getAvailable() :id=getavailable

<p class="smt-member-path"><code>sandkit.engine.api.prismite.getAvailable()</code></p>

```ts
getAvailable(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismite.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismite.d.ts#L20)

Return available prismite amount.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### getConsumed() :id=getconsumed

<p class="smt-member-path"><code>sandkit.engine.api.prismite.getConsumed()</code></p>

```ts
getConsumed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prismite.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismite.d.ts#L25)

Return total prismite consumed so far.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

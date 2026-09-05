# sandkit.engine.api.usageTracker

**`Internal`**

`sandkit.engine.api.usageTracker` — tool and structure usage statistics.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### clear() :id=clear

<p class="smt-member-path"><code>sandkit.engine.api.usageTracker.clear()</code></p>

```ts
clear(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/usageTracker.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/usageTracker.d.ts#L15)

Clear recorded usage statistics.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### getLatest() :id=getlatest

<p class="smt-member-path"><code>sandkit.engine.api.usageTracker.getLatest()</code></p>

```ts
getLatest(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/usageTracker.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/usageTracker.d.ts#L20)

Return the most recently used item or structure.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### getMostUsed() :id=getmostused

<p class="smt-member-path"><code>sandkit.engine.api.usageTracker.getMostUsed()</code></p>

```ts
getMostUsed(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/usageTracker.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/usageTracker.d.ts#L25)

Return the most frequently used item or structure.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

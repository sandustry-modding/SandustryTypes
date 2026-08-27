# sandkit.engine.api.debug

**`Internal`**

`sandkit.engine.api.debug` — debug overlay registration.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### register() :id=register

<p class="smt-member-path"><code>sandkit.engine.api.debug.register()</code></p>

```ts
register(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/debug.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/debug.d.ts#L15)

Register a debug overlay or helper.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

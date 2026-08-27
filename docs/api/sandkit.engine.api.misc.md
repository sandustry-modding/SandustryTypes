# sandkit.engine.api.misc

**`Internal`**

`sandkit.engine.api.misc` — miscellaneous structure behavior registration.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### register() :id=register

<p class="smt-member-path"><code>sandkit.engine.api.misc.register()</code></p>

```ts
register(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/misc.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/misc.d.ts#L15)

Register a miscellaneous structure behavior.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

# sandkit.engine.api.launchers

**`Internal`**

`sandkit.engine.api.launchers` — launcher type registration.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### registerType() :id=registertype

<p class="smt-member-path"><code>sandkit.engine.api.launchers.registerType()</code></p>

```ts
registerType(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/launchers.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/launchers.d.ts#L15)

Register a custom launcher type.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

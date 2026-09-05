# sandkit.engine.api.prefabDecor

**`Internal`**

`sandkit.engine.api.prefabDecor` — prefab decorative placement.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### getPlacementByName() :id=getplacementbyname

<p class="smt-member-path"><code>sandkit.engine.api.prefabDecor.getPlacementByName()</code></p>

```ts
getPlacementByName(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabDecor.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabDecor.d.ts#L15)

Return a decor placement definition by name.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### replaceDecor() :id=replacedecor

<p class="smt-member-path"><code>sandkit.engine.api.prefabDecor.replaceDecor()</code></p>

```ts
replaceDecor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabDecor.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabDecor.d.ts#L20)

Replace decor instances in a region or prefab.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

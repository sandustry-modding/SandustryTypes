# sandkit.engine.api.prefabulator

**`Internal`**

`sandkit.engine.api.prefabulator` — blueprint structure serialization for prefabs.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### localizeBlueprintStructures() :id=localizeblueprintstructures

<p class="smt-member-path"><code>sandkit.engine.api.prefabulator.localizeBlueprintStructures()</code></p>

```ts
localizeBlueprintStructures(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabulator.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabulator.d.ts#L15)

Convert serialized blueprint structures to world-local coordinates.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

---

### serializeBlueprintStructures() :id=serializeblueprintstructures

<p class="smt-member-path"><code>sandkit.engine.api.prefabulator.serializeBlueprintStructures()</code></p>

```ts
serializeBlueprintStructures(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabulator.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabulator.d.ts#L20)

Serialize blueprint structures for prefab storage.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

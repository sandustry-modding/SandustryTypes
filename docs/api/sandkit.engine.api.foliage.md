# sandkit.engine.api.foliage

**`Internal`**

`sandkit.engine.api.foliage` — procedural foliage generation and clusters.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### generate() :id=generate

<p class="smt-member-path"><code>sandkit.engine.api.foliage.generate()</code></p>

```ts
generate(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/foliage.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/foliage.d.ts#L15)

Generate foliage for a region or world chunk.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getClusters() :id=getclusters

<p class="smt-member-path"><code>sandkit.engine.api.foliage.getClusters()</code></p>

```ts
getClusters(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/foliage.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/foliage.d.ts#L20)

Return foliage cluster data.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getContainer() :id=getcontainer

<p class="smt-member-path"><code>sandkit.engine.api.foliage.getContainer()</code></p>

```ts
getContainer(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/foliage.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/foliage.d.ts#L25)

Return the foliage render container.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### hasProcgenData() :id=hasprocgendata

<p class="smt-member-path"><code>sandkit.engine.api.foliage.hasProcgenData()</code></p>

```ts
hasProcgenData(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/foliage.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/foliage.d.ts#L30)

Return whether procgen foliage data exists for a location.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

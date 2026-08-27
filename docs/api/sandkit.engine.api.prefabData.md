# sandkit.engine.api.prefabData

**`Internal`**

`sandkit.engine.api.prefabData` — prefab artifact and metadata lookup.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### getAll() :id=getall

<p class="smt-member-path"><code>sandkit.engine.api.prefabData.getAll()</code></p>

```ts
getAll(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabData.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prefabData.d.ts#L15)

Return all prefab data entries.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getAllMetadata() :id=getallmetadata

<p class="smt-member-path"><code>sandkit.engine.api.prefabData.getAllMetadata()</code></p>

```ts
getAllMetadata(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabData.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prefabData.d.ts#L20)

Return metadata for all prefabs.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getArtifactLocations() :id=getartifactlocations

<p class="smt-member-path"><code>sandkit.engine.api.prefabData.getArtifactLocations()</code></p>

```ts
getArtifactLocations(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabData.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prefabData.d.ts#L25)

Return artifact locations for prefabs.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getAtCell() :id=getatcell

<p class="smt-member-path"><code>sandkit.engine.api.prefabData.getAtCell()</code></p>

```ts
getAtCell(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabData.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prefabData.d.ts#L30)

Return prefab data at one grid cell.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getMetadata() :id=getmetadata

<p class="smt-member-path"><code>sandkit.engine.api.prefabData.getMetadata()</code></p>

```ts
getMetadata(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/prefabData.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/sandkit/engine/api/prefabData.d.ts#L35)

Return metadata for one prefab.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

# sandkit.engine.api.wall

**`Internal`**

`sandkit.engine.api.wall` — wall tile palette and cell data.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### getPaletteData() :id=getpalettedata

<p class="smt-member-path"><code>sandkit.engine.api.wall.getPaletteData()</code></p>

```ts
getPaletteData(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/wall.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/wall.d.ts#L15)

Return wall palette data for rendering.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getWallDataAt() :id=getwalldataat

<p class="smt-member-path"><code>sandkit.engine.api.wall.getWallDataAt()</code></p>

```ts
getWallDataAt(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/wall.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/wall.d.ts#L20)

Return wall tile data at one cell.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getWallDataSize() :id=getwalldatasize

<p class="smt-member-path"><code>sandkit.engine.api.wall.getWallDataSize()</code></p>

```ts
getWallDataSize(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/wall.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/wall.d.ts#L25)

Return the byte size of wall tile data.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### setWallDataAt() :id=setwalldataat

<p class="smt-member-path"><code>sandkit.engine.api.wall.setWallDataAt()</code></p>

```ts
setWallDataAt(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/wall.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/wall.d.ts#L30)

Set wall tile data at one cell.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

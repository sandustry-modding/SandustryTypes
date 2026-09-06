# sandkit.engine.api.coloringTool

**`Internal`**

`sandkit.engine.api.coloringTool` — paint-bucket and flood-fill structure coloring.

**Internal API.** Prefer [sandkit.api](api/sandkit.md#api-1) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

### colorStructure() :id=colorstructure

```ts
sandkit.engine.api.coloringTool.colorStructure(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L15)

Apply a color to one structure.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### floodFillColor() :id=floodfillcolor

```ts
sandkit.engine.api.coloringTool.floodFillColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:20](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L20)

Flood-fill connected structures with a color.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### getColor() :id=getcolor

```ts
sandkit.engine.api.coloringTool.getColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:25](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L25)

Return the color on a structure.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### isColorableStructure() :id=iscolorablestructure

```ts
sandkit.engine.api.coloringTool.isColorableStructure(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:30](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L30)

Return whether a structure can be colored.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### isMatchColorMode() :id=ismatchcolormode

```ts
sandkit.engine.api.coloringTool.isMatchColorMode(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:35](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L35)

Return whether match-color mode is active.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### isPaintBucketMode() :id=ispaintbucketmode

```ts
sandkit.engine.api.coloringTool.isPaintBucketMode(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L40)

Return whether paint-bucket mode is active.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### setColor() :id=setcolor

```ts
sandkit.engine.api.coloringTool.setColor(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:45](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L45)

Set the color on a structure.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### toggleMatchColorMode() :id=togglematchcolormode

```ts
sandkit.engine.api.coloringTool.toggleMatchColorMode(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:50](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L50)

Toggle match-color mode on or off.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

***

### togglePaintBucketMode() :id=togglepaintbucketmode

```ts
sandkit.engine.api.coloringTool.togglePaintBucketMode(...args: unknown[]): unknown
```

Defined in: [sandkit/engine/api/coloringTool.d.ts:55](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/coloringTool.d.ts#L55)

Toggle paint-bucket mode on or off.

#### Parameters

##### args

...`unknown`[]

Game state first, then method-specific arguments.

#### Returns

`unknown`

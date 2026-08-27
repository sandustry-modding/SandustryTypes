# sandkit.api.sprites

## Interfaces <!-- {docsify-ignore} -->

### SpriteLoadOptions :id=spriteloadoptions

<p class="smt-member-path"><code>sandkit.api.sprites.SpriteLoadOptions</code></p>

Defined in: [sandkit/api/sprites.d.ts:40](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L40)

Options for [load](#load) and [loadFromMod](#loadfrommod).

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### tint?

```ts
optional tint?: number
```

Defined in: [sandkit/api/sprites.d.ts:42](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L42)

Packed RGB tint applied after load.

## Type Aliases <!-- {docsify-ignore} -->

### LoadedSprite :id=loadedsprite

<p class="smt-member-path"><code>sandkit.api.sprites.LoadedSprite</code></p>

```ts
LoadedSprite = unknown
```

Defined in: [sandkit/api/sprites.d.ts:37](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L37)

Loaded sprite handle (runtime texture or display object).

## Functions <!-- {docsify-ignore} -->

### load() :id=load

<p class="smt-member-path"><code>sandkit.api.sprites.load()</code></p>

```ts
load(spriteId: string, path: string, options?: SpriteLoadOptions): Promise<void>
```

Defined in: [sandkit/api/sprites.d.ts:15](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L15)

Load a sprite from a URL path.

#### Parameters

##### spriteId

`string`

Id used with [getById](#getbyid).

##### path

`string`

URL or asset path to load.

##### options?

[`SpriteLoadOptions`](#spriteloadoptions)

Optional tint and load options.

#### Returns

`Promise`\<`void`\>

***

### loadFromMod() :id=loadfrommod

<p class="smt-member-path"><code>sandkit.api.sprites.loadFromMod()</code></p>

```ts
loadFromMod(spriteId: string, relativePath: string, options?: SpriteLoadOptions): Promise<void>
```

Defined in: [sandkit/api/sprites.d.ts:22](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L22)

Load a sprite from the calling mod folder.

#### Parameters

##### spriteId

`string`

Id used with [getById](#getbyid).

##### relativePath

`string`

Path relative to the mod folder.

##### options?

[`SpriteLoadOptions`](#spriteloadoptions)

Optional tint and load options.

#### Returns

`Promise`\<`void`\>

***

### getById() :id=getbyid

<p class="smt-member-path"><code>sandkit.api.sprites.getById()</code></p>

```ts
getById(spriteId: string): unknown
```

Defined in: [sandkit/api/sprites.d.ts:27](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L27)

Return a loaded sprite by id.

#### Parameters

##### spriteId

`string`

Sprite id from [load](#load) or [loadFromMod](#loadfrommod).

#### Returns

`unknown`

***

### hideAllPlayerModSprites() :id=hideallplayermodsprites

<p class="smt-member-path"><code>sandkit.api.sprites.hideAllPlayerModSprites()</code></p>

```ts
hideAllPlayerModSprites(): void
```

Defined in: [sandkit/api/sprites.d.ts:29](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L29)

Hide all player mod-attached sprites.

#### Returns

`void`

***

### rotatePlayerModSprites() :id=rotateplayermodsprites

<p class="smt-member-path"><code>sandkit.api.sprites.rotatePlayerModSprites()</code></p>

```ts
rotatePlayerModSprites(angle: number): void
```

Defined in: [sandkit/api/sprites.d.ts:34](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sprites.d.ts#L34)

Rotate all player mod-attached sprites by angle.

#### Parameters

##### angle

`number`

Rotation in radians.

#### Returns

`void`

# sandkit.api.player.buildings

Player building unlock helpers.

## Functions <!-- {docsify-ignore} -->

### unlockById() :id=unlockbyid

<p class="smt-member-path"><code>sandkit.api.player.buildings.unlockById()</code></p>

```ts
unlockById(structureId: string): void
```

Defined in: [sandkit/api/player.d.ts:125](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L125)

Unlock a structure type for building.

#### Parameters

##### structureId

`string`

Registered structure id string.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.player.buildings.unlockById`

***

### ~~unlockByType()~~

```ts
unlockByType(structureId: string): void
```

Defined in: [sandkit/api/player.d.ts:131](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L131)

#### Parameters

##### structureId

`string`

#### Returns

`void`

#### Deprecated

Use [unlockById](#unlockbyid) instead.

#### See

https://sandustry.com/sandkit.html Official Sandkit API — deprecated alias of `api.player.buildings.unlockById`

***

### removeById() :id=removebyid

<p class="smt-member-path"><code>sandkit.api.player.buildings.removeById()</code></p>

```ts
removeById(structureId: string): void
```

Defined in: [sandkit/api/player.d.ts:139](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L139)

Remove a structure unlock from the player.

#### Parameters

##### structureId

`string`

Registered structure id string.

#### Returns

`void`

#### See

https://sandustry.com/sandkit.html Official Sandkit API — Main entry `api.player.buildings.removeById`

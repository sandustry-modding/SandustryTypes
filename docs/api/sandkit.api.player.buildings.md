# sandkit.api.player.buildings

Player building unlock helpers.

## Functions <!-- {docsify-ignore} -->

### unlockById() :id=unlockbyid

```ts
sandkit.api.player.buildings.unlockById(structureId: string): void
```

Defined in: [sandkit/api/player.d.ts:136](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L136)

Unlock a structure type for building.

#### Parameters

##### structureId

`string`

Registered structure id string.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### ~~unlockByType()~~ :id=unlockbytype

```ts
sandkit.api.player.buildings.unlockByType(structureId: string): void
```

Defined in: [sandkit/api/player.d.ts:143](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L143)

#### Parameters

##### structureId

`string`

#### Returns

`void`

#### Deprecated

Use [unlockById](#unlockbyid) instead.

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)

***

### removeById() :id=removebyid

```ts
sandkit.api.player.buildings.removeById(structureId: string): void
```

Defined in: [sandkit/api/player.d.ts:152](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/player.d.ts#L152)

Remove a structure unlock from the player.

#### Parameters

##### structureId

`string`

Registered structure id string.

#### Returns

`void`

#### See

[Official docs](https://sandustry.com/sandkit.html#api-access-heading)
